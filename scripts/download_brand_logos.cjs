const fs = require('fs');
const path = require('path');

const token = "bf1.eyJrIjoiWVllYVptZXNEdnBvVjRQYjRxeXA2YThqelJET1JJLXZOOFpZTm5XZzhVai1NWjVnVWxVTXZOZEZCYlhnSVYzWXVSRzZFNjBveF9XSnkwWFU4VWJzRXciLCJjIjoiMWlkUkdodnZHamdEY2NBOGdHXyIsIm8iOiJ1cm46YnJhbmRmZXRjaDpvcmdhbml6YXRpb246YXc3ODNlMGpkZTF4Y3ljMzBoZHkwaTkwIiwiYSI6IndnemM0M2xvOHd4bWQ5ZWR6dXhpbHFubCJ9";
const outDir = path.join(process.cwd(), 'public/images/integrations');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const brands = [
  // 1. Canais & Mensageria
  { id: 'whatsapp', identifier: 'whatsapp.com', brandColor: '#25D366' },
  { id: 'instagram', identifier: 'instagram.com', brandColor: '#E1306C' },
  { id: 'facebook', identifier: 'facebook.com', brandColor: '#1877F2' },
  { id: 'telegram', identifier: 'telegram.org', brandColor: '#0088CC' },
  { id: 'webchat', identifier: 'crisp.chat', brandColor: '#1972F5' },
  { id: 'rocketchat', identifier: 'rocket.chat', brandColor: '#F5455C' },
  { id: 'gmail', identifier: 'gmail.com', brandColor: '#EA4335' },
  { id: 'email_corp', identifier: 'mailgun.com', brandColor: '#E03636' },

  // 2. E-commerce & Marketplaces
  { id: 'mercadolivre', identifier: 'mercadolibre.com', brandColor: '#FFE600' },
  { id: 'shopee', identifier: 'shopee.com', brandColor: '#EE4D2D' },
  { id: 'shein', identifier: 'shein.com', brandColor: '#000000' },
  { id: 'nuvemshop', identifier: 'nuvemshop.com.br', brandColor: '#2B3481' },
  { id: 'woocommerce', identifier: 'woocommerce.com', brandColor: '#96588A' },
  { id: 'olx', identifier: 'olx.com.br', brandColor: '#8626E3' },

  // 3. Redes Sociais & Vídeo
  { id: 'tiktok', identifier: 'tiktok.com', brandColor: '#000000' },
  { id: 'youtube', identifier: 'youtube.com', brandColor: '#FF0000' },
  { id: 'linkedin', identifier: 'linkedin.com', brandColor: '#0A66C2' },
  { id: 'google', identifier: 'google.com', brandColor: '#4285F4' },

  // 4. Modelos de IA & LLMs
  { id: 'chatgpt', identifier: 'openai.com', brandColor: '#10A37F' },
  { id: 'claude', identifier: 'anthropic.com', brandColor: '#D97706' },
  { id: 'gemini', identifier: 'google.com', brandColor: '#1A73E8' },
  { id: 'deepseek', identifier: 'deepseek.com', brandColor: '#0EA5E9' },
  { id: 'grok', identifier: 'x.ai', brandColor: '#000000' },
  { id: 'qwen', identifier: 'alibaba.com', brandColor: '#FF6A00' },
  { id: 'ollama', identifier: 'ollama.com', brandColor: '#000000' },
  { id: 'lmstudio', identifier: 'lmstudio.ai', brandColor: '#3B82F6' },

  // 5. Automações, Agentes & Pagamentos
  { id: 'n8n', identifier: 'n8n.io', brandColor: '#EA4B71' },
  { id: 'dify', identifier: 'dify.ai', brandColor: '#155EEF' },
  { id: 'typebot', identifier: 'typebot.io', brandColor: '#0042DA' },
  { id: 'dialogflow', identifier: 'dialogflow.com', brandColor: '#FF9800' },
  { id: 'hub_notificame', identifier: 'notificame.com.br', brandColor: '#7C3AED' },
  { id: 'asaas', identifier: 'asaas.com', brandColor: '#00A389' }
];

async function callMcpTool(name, args) {
  const res = await fetch("https://mcp.brandfetch.io/mcp", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
      "Accept": "application/json, text/event-stream"
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: Date.now(),
      method: "tools/call",
      params: {
        name,
        arguments: args
      }
    })
  });

  const text = await res.text();
  const dataLine = text.split("\n").find(l => l.startsWith("data: "));
  const jsonStr = dataLine ? dataLine.replace("data: ", "").trim() : text;
  return JSON.parse(jsonStr);
}

async function downloadFile(url, destPath) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP error ${res.status}`);
  const arrayBuffer = await res.arrayBuffer();
  fs.writeFileSync(destPath, Buffer.from(arrayBuffer));
}

async function processBrand(item) {
  console.log(`\n🔍 [Brandfetch] Buscando: ${item.id} (${item.identifier})...`);
  try {
    const brandData = await callMcpTool("get_brand", { identifier: item.identifier });
    if (brandData.error) {
      console.error(`❌ Erro no MCP para ${item.identifier}:`, brandData.error);
      return;
    }

    const rawText = brandData.result?.content?.[0]?.text;
    if (!rawText) {
      console.warn(`⚠️ Sem conteúdo para ${item.id}`);
      return;
    }

    const brand = JSON.parse(rawText);
    let chosenSrc = null;
    let chosenExt = 'svg';

    if (brand.logos && Array.isArray(brand.logos) && brand.logos.length > 0) {
      // Priorizar THEME === 'light' (para que funcione em temas claros e coloridos)
      const lightLogos = brand.logos.filter(l => l.theme === 'light' || !l.theme);
      const candidateList = lightLogos.length > 0 ? lightLogos : brand.logos;

      const logosSorted = [...candidateList].sort((a, b) => {
        const scoreType = t => (t === 'icon' ? 4 : (t === 'symbol' ? 3 : (t === 'logo' ? 2 : 1)));
        const scoreTheme = th => (th === 'light' ? 5 : 0);
        return (scoreType(b.type) + scoreTheme(b.theme)) - (scoreType(a.type) + scoreTheme(a.theme));
      });

      for (const logo of logosSorted) {
        if (!logo.formats || !logo.formats.length) continue;
        const svg = logo.formats.find(f => f.format === 'svg' && f.src);
        const png = logo.formats.find(f => f.format === 'png' && f.src);
        if (svg) {
          chosenSrc = svg.src;
          chosenExt = 'svg';
          break;
        } else if (png && !chosenSrc) {
          chosenSrc = png.src;
          chosenExt = 'png';
        }
      }
    }

    if (!chosenSrc && brand.icon) {
      chosenSrc = brand.icon;
      chosenExt = 'png';
    }

    if (chosenSrc) {
      const dest = path.join(outDir, `${item.id}.${chosenExt}`);
      await downloadFile(chosenSrc, dest);

      // Se for SVG e tiver fill="white", ajustamos ou substituímos por cor adequada
      if (chosenExt === 'svg') {
        let content = fs.readFileSync(dest, 'utf8');
        if (content.includes('fill="white"') || content.includes('fill="#FFFFFF"') || content.includes('fill="#fff"')) {
          if (item.id === 'whatsapp') {
            content = content.replace(/fill="white"/gi, 'fill="#25D366"');
          } else if (item.id === 'chatgpt') {
            content = content.replace(/fill="white"/gi, 'fill="#10A37F"');
          } else if (item.id === 'claude') {
            content = content.replace(/fill="white"/gi, 'fill="#D97706"');
          } else if (item.id === 'shein') {
            content = content.replace(/fill="white"/gi, 'fill="#111827"');
          } else if (item.id === 'grok') {
            content = content.replace(/fill="white"/gi, 'fill="#111827"');
          } else if (item.id === 'asaas') {
            content = content.replace(/fill="white"/gi, 'fill="#00A389"');
          } else if (item.id === 'email_corp') {
            content = content.replace(/fill="white"/gi, 'fill="#EA4335"');
          } else if (item.id === 'qwen') {
            content = content.replace(/fill="white"/gi, 'fill="#6366F1"');
          }
          fs.writeFileSync(dest, content);
        }
      }

      console.log(`✅ Salvo: ${item.id}.${chosenExt} (${fs.statSync(dest).size} bytes) [${brand.name || item.id}]`);
    }
  } catch (err) {
    console.error(`💥 Falha em ${item.id}:`, err.message);
  }
}

async function run() {
  for (const b of brands) {
    await processBrand(b);
    await new Promise(r => setTimeout(r, 200));
  }
  console.log('\n🚀 Logos coloridas para ambos os temas (Claro e Escuro) baixadas com sucesso!');
}

run();
