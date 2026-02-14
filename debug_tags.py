import re

def check_balance(filename):
    with open(filename, 'r') as f:
        content = f.read()

    # Calculate line numbers for error reporting
    line_starts = [0]
    for i, char in enumerate(content):
        if char == '\n':
            line_starts.append(i + 1)

    def get_line_number(index):
        for i, start in enumerate(line_starts):
            if start > index:
                return i
        return len(line_starts)

    # Remove comments
    content_clean = re.sub(r'<!--.*?-->', lambda m: ' ' * len(m.group(0)), content, flags=re.DOTALL)
    
    # Remove scripts and styles content to avoid false positives (simple approach)
    # We replace content with spaces to keep indices correct
    def replace_with_spaces(match):
        return match.group(0)[:match.start(1)-match.start(0)] + \
               ' ' * len(match.group(1)) + \
               match.group(0)[match.end(1)-match.start(0):]

    # Handle script setup specially? No, just treat as regular tags if they have content.
    # Actually, parsing script/style content with regex is hard. 
    # Let's assume tags inside script strings are rare or we hope for the best.
    # A better way is to rely on <script>...</script> matching.
    
    tag_re = re.compile(r'</?([a-zA-Z0-9-]+)(?:\s+[^>]*)?/?>')
    
    void_elements = set([
        'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 
        'link', 'meta', 'param', 'source', 'track', 'wbr'
    ])

    stack = []
    
    matches = tag_re.finditer(content_clean)
    for match in matches:
        full_tag = match.group(0)
        tag_name = match.group(1).lower()
        start_index = match.start()
        line_num = get_line_number(start_index)
        
        is_closing = full_tag.startswith('</')
        is_self_closing = full_tag.endswith('/>') or tag_name in void_elements

        if is_self_closing:
            continue
            
        if is_closing:
            if not stack:
                print(f"Error at line {line_num}: Unexpected closing tag </{tag_name}>. Stack is empty.")
                return
            
            last_tag = stack[-1]
            if last_tag['name'] == tag_name:
                stack.pop()
            else:
                # Special case: mismatches might be due to skipping subtle void tags or SVG inside logic
                # But let's report it.
                print(f"Error at line {line_num}: Expected closing </{last_tag['name']}> but found </{tag_name}>. Opened at line {last_tag['line']}.")
                return
        else:
            # Check if it's <script> or <style>, skip content?
            # For this specific nesting issue, usually it's div/section.
            # Let's push to stack.
            stack.append({'name': tag_name, 'line': line_num})

    if stack:
        print(f"Error: Unclosed tags remaining at end of file:")
        for tag in stack:
            print(f"  <{tag['name']}> opened at line {tag['line']}")
    else:
        print("File is balanced!")

if __name__ == "__main__":
    check_balance('pages/index.vue')
