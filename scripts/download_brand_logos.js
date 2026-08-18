const fs = require('fs');
const path = require('path');

const token = "bf1.eyJrIjoiWVllYVptZXNEdnBvVjRQYjRxeXA2YThqelJET1JJLXZOOFpZTm5XZzhVai1NWjVnVWxVTXZOZEZCYlhnSVYzWXVSRzZFNjBveF9XSnkwWFU4VWJzRXciLCJjIjoiMWlkUkdodnZHamdEY2NBOGdHXyIsIm8iOiJ1cm46YnJhbmRmZXRjaDpvcmdhbml6YXRpb246YXc3ODNlMGpkZTF4Y3ljMzBoZHkwaTkwIiwiYSI6IndnemM0M2xvOHd4bWQ5ZWR6dXhpbHFubCJ9";
const outDir = path.join(process.cwd(), 'public/images/integrations');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

// Mapeamento dos itens para seus respectivos domínios e IDs
const brands = [
  // 1. Canais & Mensageria
  { id: 'whatsapp', domain: 'whatsapp.com' },
  { id: 'instagram', domain: 'instagram.com' },
  { id: 'facebook', domain: 'facebook.com' },
  { id: 'telegram', domain: 'telegram.org' },
  { id: 'webchat', domain: 'livechat.com' },
  { id: 'rocketchat', domain: 'rocket.chat' },
  { id: 'gmail', domain: 'gmail.com' },
  { id: 'email_corp', domain: 'mailgun.com' },

  // 2. E-commerce & Marketplaces
  { id: 'mercadolivre', domain: 'mercadolivre.com.br' },
  { id: 'shopee', domain: 'shopee.com.br' },
  { id: 'shein', domain: 'shein.com' },
  { id: 'nuvemshop', domain: 'nuvemshop.com.br' },
  { id: 'woocommerce', domain: 'woocommerce.com' },
  { id: 'olx', domain: 'olx.com.br' },

  // 3. Redes Sociais & Vídeo
  { id: 'tiktok', domain: 'tiktok.com' },
  { id: 'youtube', domain: 'youtube.com' },
  { id: 'linkedin', domain: 'linkedin.com' },
  { id: 'google', domain: 'google.com' },

  // 4. Modelos de IA & LLMs
  { id: 'chatgpt', domain: 'openai.com' },
  { id: 'claude', domain: 'anthropic.com' },
  { id: 'gemini', domain: 'google.com' },
  { id: 'deepseek', domain: 'deepseek.com' },
  { id: 'grok', domain: 'x.ai' },
  { id: 'qwen', domain: 'alibaba.com' },
  { id: 'ollama', domain: 'ollama.com' },
  { id: 'lmstudio', domain: 'lmstudio.ai' },

  // 5. Automações, Agentes & Pagamentos
  { id: 'n8n', domain: 'n8n.io' },
  { id: 'dify', domain: 'dify.ai' },
  { id: 'typebot', domain: 'typebot.io' },
  { id: 'dialogflow', domain: 'cloud.google.com' },
  { id: 'hub_notificame', domain: 'notificame.com.br' },
  { id: 'asaas', domain: 'asaas.com' }
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

async function processBrand(item) {
  console.log(`[Brandfetch] Buscando marca: ${item.id} (${item.domain})...`);
  try {
    const brandData = await callMcpTool("get_brand", { domain: item.domain });
    if (brandData.error) {
      console.error(`Erro ao buscar ${item.domain}:`, brandData.error);
      return;
    }

    const result = brandData.result;
    // O resultado pode conter structuredContent ou content com o json da marca
    let brandObj = null;
    if (result && result.structuredContent) {
      brandObj = result.structuredContent;
    } else if (result && result.content && result.content[0] && result.content[0].text) {
      try {
        brandObj = JSON.parse(result.content[0].text);
      } catch (e) {
        brandObj = result.content[0].text;
      }
    }

    // Procura por logos / icons / symbols
    let assetUrl = null;
    let extension = 'png';

    if (brandObj && brandObj.logos && brandObj.logos.length > 0) {
      // Preferir icon ou symbol, se não logo
      const iconType = brandObj.logos.find(l => l.type === 'icon' || l.type === 'symbol') || brandObj.logos[0];
      if (iconType && iconType.formats && iconType.formats.length > 0) {
        const svgFormat = iconType.formats.find(f => f.format === 'svg');
        const pngFormat = iconType.formats.find(f => f.format === 'png');
        const chosen = svgFormat || pngFormat || iconType.formats[0];
        assetUrl = chosen.src;
        extension = chosen.format || 'png';
      }
    } else if (brandObj && brandObj.icon) {
      assetUrl = brandObj.icon;
    }

    if (assetUrl) {
      console.log(`[Brandfetch] Baixando asset para ${item.id}: ${assetUrl}`);
      // Usar fetch_asset do MCP
      const assetRes = await callMcpTool("fetch_asset", { asset_url: assetUrl });
      if (assetRes.result && assetRes.result.content && assetRes.result.content[0]) {
        let assetData = null;
        try {
          assetData = JSON.parse(assetRes.result.content[0].text);
        } catch(e) {
          assetData = assetRes.result.structuredContent || assetRes.result;
        }

        if (assetData && assetData.base64) {
          const cleanB64 = assetData.base64.replace(/\n/g, '');
          const buffer = Buffer.from(cleanB64, 'base64');
          const finalExt = assetData.media_type && assetData.media_type.includes('svg') ? 'svg' : extension;
          const filePath = path.join(outDir, `${item.id}.${finalExt}`);
          fs.writeFileSync(filePath, buffer);
          console.log(`✅ Salvo: ${item.id}.${finalExt} (${buffer.length} bytes)`);
          return;
        }
      }
      
      // Fallback: fetch direto da URL
      const directRes = await fetch(assetUrl);
      if (directRes.ok) {
        const arrBuffer = await directRes.arrayBuffer();
        const buffer = Buffer.from(arrBuffer);
        const filePath = path.join(outDir, `${item.id}.${extension}`);
        fs.writeFileSync(filePath, buffer);
        console.log(`✅ Salvo via fetch direto: ${item.id}.${extension}`);
      }
    } else {
      console.warn(`⚠️ Nenhum logo encontrado para ${item.id}`);
    }
  } catch (err) {
    console.error(`Falha ao processar ${item.id}:`, err.message);
  }
}

async function main() {
  for (const b of brands) {
    await processBrand(b);
    await new Promise(r => setTimeout(r, 400)); // Rate limit amigável
  }
  console.log('🎉 Todos os downloads do Brandfetch foram concluídos!');
}

main();
