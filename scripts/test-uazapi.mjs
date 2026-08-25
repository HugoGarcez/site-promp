import fs from 'node:fs';
import path from 'node:path';

// Carrega variáveis de ambiente do .env se existir
function loadLocalEnv() {
  const envPath = path.resolve(process.cwd(), '.env');
  if (fs.existsSync(envPath)) {
    const content = fs.readFileSync(envPath, 'utf-8');
    for (const line of content.split('\n')) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const eqIdx = trimmed.indexOf('=');
      if (eqIdx > 0) {
        const k = trimmed.substring(0, eqIdx).trim();
        const v = trimmed.substring(eqIdx + 1).trim().replace(/^["']|["']$/g, '');
        if (!process.env[k]) {
          process.env[k] = v;
        }
      }
    }
  }
}
loadLocalEnv();

async function testUazapi() {
  console.log('🧪 Iniciando Teste de Conexão com UAzapi...\n');

  let uazapiUrl = process.env.UAZAPI_URL || process.env.WHATSAPP_API_URL;
  const uazapiToken = process.env.UAZAPI_TOKEN || process.env.UAZAPI_KEY || process.env.WHATSAPP_API_KEY;
  const rawRecipient = process.env.UAZAPI_NUMBER || process.env.WHATSAPP_NOTIFY_NUMBER || process.env.WHATSAPP_RECIPIENT || '';

  if (!uazapiUrl) {
    console.error('❌ ERRO: UAZAPI_URL (ou WHATSAPP_API_URL) não foi informada no .env');
    console.log('👉 Exemplo no seu .env:');
    console.log('   UAZAPI_URL="https://api.uazapi.com/send/text"');
    console.log('   UAZAPI_TOKEN="seu-token-uazapi"');
    console.log('   UAZAPI_NUMBER="5521990408505"\n');
    process.exit(1);
  }

  if (!uazapiToken) {
    console.warn('⚠️ AVISO: UAZAPI_TOKEN não foi configurado no .env.');
  }

  const recipients = rawRecipient
    .split(/[,;]+/)
    .map(r => r.trim().replace(/\D/g, ''))
    .filter(Boolean);

  if (recipients.length === 0) {
    console.error('❌ ERRO: Nenhum número de WhatsApp válido informado em UAZAPI_NUMBER');
    process.exit(1);
  }

  if (!uazapiUrl.includes('/send/') && !uazapiUrl.includes('/message/') && !uazapiUrl.includes('/sendText') && !uazapiUrl.includes('/webhook')) {
    uazapiUrl = uazapiUrl.replace(/\/+$/, '') + '/send/text';
  }

  const testMessage = `🤖 *Teste de Integração Promp • UAzapi*

✅ A API de WhatsApp da UAzapi foi configurada com sucesso!
📅 Data do teste: ${new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })}

Sua automação diária de publicação de artigos no blog da Promp está pronta para enviar notificações automáticas neste número.

---
_Promp • Inteligência Artificial & Atendimento Omnichannel_`;

  console.log(`📡 URL de Envio: ${uazapiUrl}`);
  console.log(`📱 Números Destino (${recipients.length}): ${recipients.join(', ')}`);
  console.log(`🔑 Token: ${uazapiToken ? uazapiToken.substring(0, 4) + '...' + uazapiToken.slice(-4) : '(vazio)'}`);
  console.log('\n📄 Mensagem:');
  console.log(testMessage);
  console.log('\n----------------------------------------\n');

  const headers = {
    'Content-Type': 'application/json'
  };

  if (uazapiToken) {
    headers['token'] = uazapiToken;
    headers['apikey'] = uazapiToken;
    headers['Authorization'] = `Bearer ${uazapiToken}`;
  }

  for (const recipient of recipients) {
    try {
      console.log(`📡 Disparando para ${recipient}...`);
      const payload = {
        number: recipient,
        text: testMessage,
        message: testMessage,
        linkPreview: true,
        options: {
          delay: 1000,
          presence: 'composing',
          linkPreview: true
        }
      };

      const response = await fetch(uazapiUrl, {
        method: 'POST',
        headers,
        body: JSON.stringify(payload)
      });

      const responseText = await response.text();
      console.log(`📡 [${recipient}] Status HTTP: ${response.status} ${response.statusText}`);

      try {
        const json = JSON.parse(responseText);
        console.log(`📦 [${recipient}] Dados retornados:`, JSON.stringify(json, null, 2));
      } catch {
        console.log(`📦 [${recipient}] Resposta bruta:`, responseText);
      }

      if (response.ok) {
        console.log(`🎉 [${recipient}] SUCESSO! Mensagem entregue.`);
      } else {
        console.error(`❌ [${recipient}] Falha: Status ${response.status}.`);
      }
    } catch (err) {
      console.error(`❌ [${recipient}] Erro de conexão:`, err.message);
    }
  }
}

testUazapi();
