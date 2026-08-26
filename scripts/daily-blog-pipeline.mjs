import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

// Carrega variáveis do arquivo .env se existir localmente
function loadLocalEnv() {
  const envPath = path.resolve(process.cwd(), '.env');
  if (fs.existsSync(envPath)) {
    try {
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
    } catch (e) {
      console.warn('Não foi possível ler o arquivo .env:', e.message);
    }
  }
}
loadLocalEnv();

const BLOG_DIR = path.resolve(process.cwd(), 'content/blog');
const COVERS_DIR = path.resolve(process.cwd(), 'public/images/blog');

if (!fs.existsSync(BLOG_DIR)) fs.mkdirSync(BLOG_DIR, { recursive: true });
if (!fs.existsSync(COVERS_DIR)) fs.mkdirSync(COVERS_DIR, { recursive: true });

// Matriz de Pautas da Promp focadas em conversão, dores, features e integrações
const TOPIC_BACKLOG = [
  {
    title: "Como Recuperar Carrinhos Abandonados no WhatsApp com IA em Tempo Real",
    slug: "recuperar-carrinhos-abandonados-whatsapp-ia",
    description: "Mais de 70% dos carrinhos em e-commerce são abandonados. Veja como mensagens ativas e áudios com IA no WhatsApp recuperam até 35% das vendas perdidas.",
    category: "Vendas & Conversão",
    tags: ["E-commerce", "Carrinho Abandonado", "WhatsApp", "IA", "Vendas"],
    badge: "E-COMMERCE & CONVERSÃO",
    readingTime: "5 min",
    color1: "#E84624",
    color2: "#0E1F4A",
    solutionLink: "/solucoes/escalar-vendas-whatsapp",
    solutionName: "Escalar Vendas no WhatsApp",
    faq: [
      {
        question: "Quanto tempo após o abandono do carrinho a mensagem deve ser enviada?",
        answer: "O melhor intervalo é entre 15 a 30 minutos após o abandono, quando o cliente ainda está com a intenção de compra fresca na memória."
      },
      {
        question: "A IA da Promp pode enviar cupons dinâmicos de desconto?",
        answer: "Sim! A Promp se conecta à sua loja virtual (Shopify, WooCommerce, Nuvemshop) e pode gerar ofertas personalizadas baseadas no comportamento do lead."
      }
    ],
    contentBuilder: () => `
O abandono de carrinho é a maior dor de cabeça de quem vende online. No Brasil, estimativas apontam que mais de **70% das compras iniciadas não chegam à conclusão**.

O envio tradicional de e-mails de recuperação tem taxas de abertura cada vez mais baixas (em torno de 15% a 20%). Já no WhatsApp, as mensagens atingem **mais de 90% de abertura imediata**.

Neste artigo, você vai entender como a [Promp](/solucoes/escalar-vendas-whatsapp) utiliza **inteligência artificial e áudios personalizados** para transformar carrinhos abandonados em faturamento real.

---

## Por que os Clientes Abandonam Carrinhos?

1. **Dúvidas de Última Hora**: Incerteza sobre frete, prazo de entrega ou compatibilidade do produto.
2. **Falta do Meio de Pagamento Preferido**: O cliente queria pagar via Pix mas a página falhou ou gerou atrito.
3. **Distração Externa**: Notificações e interrupções no celular durante o checkout.

Quando a sua empresa aborda esse cliente no WhatsApp em até 20 minutos com um atendimento humanizado, a taxa de conversão dispara.

---

## O Poder da Abordagem Humanizada com IA

Em vez de disparar uma mensagem genérica de cobrança, a IA da Promp atua de forma consultiva:

\`\`\`
[Exemplo de Mensagem Humanizada Promp]:
"Olá Juliana! Tudo bem? Vi que você estava escolhendo o Vestido Floral no nosso site. Ficou com alguma dúvida sobre o tamanho ou sobre o prazo de entrega para sua região? Se quiser, posso calcular o frete expresso para você agora mesmo!"
\`\`\`

Se o cliente responder com dúvidas, a IA tira todas as dúvidas na hora e gera o link direto com Pix copiado e colado para pagamento imediato.

---

## Como Conectar a Promp ao seu E-commerce

A integração é realizada em poucos minutos através de [Integrações e Webhooks](/solucoes/integracoes-e-automacoes):
- Conexão nativa com Shopify, Nuvemshop, WooCommerce, Hotmart, Kiwify e Eduzz;
- Gatilho automático de abandono de checkout;
- Envio de áudios realistas tirando dúvidas frequentes de entrega e garantia.

---

## Conclusão

Recuperar carrinhos abandonados no WhatsApp é uma das estratégias de maior ROI para qualquer operação de vendas online. [Experimente a Promp gratuitamente](https://app.promp.com.br/signup) e veja suas vendas crescerem no piloto automático.
`
  },
  {
    title: "Follow-up de Vendas no WhatsApp: Como Reengajar Contatos Frios com IA",
    slug: "follow-up-de-vendas-whatsapp-reengajar-leads",
    description: "80% das vendas acontecem entre o 5º e o 12º contato. Saiba como automatizar réguas de follow-up inteligentes no WhatsApp sem parecer insistente.",
    category: "Vendas & Conversão",
    tags: ["Follow-up", "Vendas", "CRM", "Automação", "WhatsApp"],
    badge: "FOLLOW-UP & VENDAS",
    readingTime: "6 min",
    color1: "#0E1F4A",
    color2: "#1E293B",
    solutionLink: "/solucoes/follow-up-de-leads",
    solutionName: "Follow-up Automático de Leads",
    faq: [
      {
        question: "Quantas mensagens de follow-up devem ser enviadas?",
        answer: "Recomendamos uma régua de 3 a 5 contatos espaçados ao longo de 14 dias, sempre alternando os ganchos (conteúdo de valor, cases de sucesso e condições especiais)."
      },
      {
        question: "A IA para de enviar se o cliente responder?",
        answer: "Sim! A Promp detecta a resposta do cliente imediatamente e assume uma conversa consultiva em tempo real."
      }
    ],
    contentBuilder: () => `
A maioria dos vendedores desiste de um lead após a primeira ou segunda tentativa sem resposta. No entanto, pesquisas consagradas de vendas B2B e B2C revelam que **mais de 80% dos fechamentos ocorrem entre a 5ª e a 12ª interação**.

Manter esse acompanhamento manual é quase impossível para equipes sobrecarregadas. É aqui que entra a solução de [Follow-up Automático de Leads](/solucoes/follow-up-de-leads) da Promp.

---

## Os 3 Maiores Erros no Follow-up Tradicional

1. **Mensagens Invasivas e Frequentes Demais**: Enviar "Bom dia, já viu minha proposta?" repetidamente só gera bloqueios.
2. **Esquecer o Lead na Gaveta**: Perder o contato após enviar o orçamento.
3. **Falta de Personalização**: Enviar mensagens copiadas sem considerar o histórico da conversa.

---

## Como Criar uma Régua Inteligente com a IA da Promp

A inteligência artificial da Promp analisa o contexto da negociação anterior e programa mensagens estratégicas:

- **D+1 (24h pós-orçamento)**: Pergunta rápida sobre dúvidas do escopo;
- **D+3**: Envio de um case de sucesso ou depoimento de cliente do mesmo segmento;
- **D+7**: Áudio humanizado convidando para uma ligação rápida de 10 minutos;
- **D+14**: Mensagem de despedida elegante ("Breakup message"), que frequentemente reativa o interesse do cliente.

Veja também como organizar esses leads no funil com nosso guia de [Gestão e Métricas](/solucoes/falta-de-controle).

---

## Conclusão

Não deixe dinheiro na mesa por falta de acompanhamento. [Descubra a automação da Promp](https://app.promp.com.br/signup) e reative centenas de contatos na sua base hoje mesmo.
`
  },
  {
    title: "IA para Clínicas e Consultórios: Como Automatizar Agendamentos e Reduzir No-Shows",
    slug: "ia-para-clinicas-consultorios-agendamento-whatsapp",
    description: "Reduza faltas em consultas em até 70% com confirmações automáticas e agendamentos 24/7 via WhatsApp com a IA da Promp.",
    category: "Casos Reais",
    tags: ["Clínicas", "Consultórios", "Agendamento 24/7", "WhatsApp", "No-show"],
    badge: "SAÚDE & CONSULTÓRIOS",
    readingTime: "5 min",
    color1: "#0E1F4A",
    color2: "#059669",
    solutionLink: "/solucoes/atendimento-fora-do-horario",
    solutionName: "Atendimento 24/7",
    faq: [
      {
        question: "A IA consegue remarcar consultas caso o paciente não possa comparecer?",
        answer: "Sim! Ao receber um aviso de cancelamento, a IA oferece imediatamente novos horários livres na grade do profissional."
      },
      {
        question: "É seguro e compatível com a LGPD?",
        answer: "Totalmente. A Promp opera com criptografia de ponta a ponta e respeita todas as diretrizes da LGPD para dados sensíveis."
      }
    ],
    contentBuilder: () => `
Em consultórios médicos, odontológicos, clínicas de estética e psicologia, a **taxa de faltas (no-show)** pode ultrapassar 30% da agenda, causando prejuízos financeiros graves e horários ociosos.

Com a [IA da Promp](/solucoes/atendimento-fora-do-horario), clínicas conseguem transformar o WhatsApp em uma recepção digital inteligente que funciona 24 horas por dia.

---

## Como a IA Transforma a Recepção da sua Clínica

1. **Agendamento Noturno e aos Fins de Semana**: Pacientes frequentemente lembram de marcar consultas à noite. A IA consulta a agenda e confirma o horário em segundos.
2. **Confirmação Ativa em 2 Etapas**: Disparo de lembretes automáticos com botões de confirmação simples ("1 para Confirmar", "2 para Remarcar").
3. **Instruções Pré-Exame/Consulta**: Envio automático de orientações de preparo, endereço, mapa e recomendações.

Para saber mais sobre como otimizar o tempo da sua equipe, veja nossa solução de [Perguntas Repetitivas e Base de IA](/solucoes/perguntas-repetitivas).

---

## Conclusão

Dê mais produtividade à sua equipe e proporcione uma experiência impecável para seus pacientes com a [Promp](https://app.promp.com.br/signup).
`
  }
];

function wrapText(text, maxCharsPerLine = 34) {
  const words = String(text).split(' ');
  const lines = [];
  let currentLine = '';

  for (const word of words) {
    if ((currentLine + ' ' + word).trim().length <= maxCharsPerLine) {
      currentLine = (currentLine + ' ' + word).trim();
    } else {
      if (currentLine) lines.push(currentLine);
      currentLine = word;
    }
  }
  if (currentLine) lines.push(currentLine);
  return lines;
}

async function generateCoverImage({ slug, title, badge, color1, color2 }) {
  const safeBadge = escapeXml(badge);
  const titleLines = wrapText(title, 34);
  const tspans = titleLines
    .map((line, i) => `<tspan x="100" dy="${i === 0 ? 0 : 52}">${escapeXml(line)}</tspan>`)
    .join('');

  const svg = `
  <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${color1 || '#E84624'}" />
        <stop offset="100%" stop-color="${color2 || '#0E1F4A'}" />
      </linearGradient>
      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="60" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>

    <rect width="1200" height="630" fill="url(#bgGrad)" />
    <circle cx="1050" cy="150" r="250" fill="#E84624" opacity="0.3" filter="url(#glow)" />
    <circle cx="150" cy="500" r="200" fill="#22C55E" opacity="0.15" filter="url(#glow)" />

    <g transform="translate(100, 80)">
      <rect width="160" height="40" rx="8" fill="#E84624" />
      <text x="80" y="26" fill="#ffffff" font-family="Arial, sans-serif" font-weight="900" font-size="20" text-anchor="middle" letter-spacing="2">PROMP.IA</text>
    </g>

    <g transform="translate(100, 150)">
      <rect width="250" height="34" rx="17" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.25)" />
      <text x="125" y="22" fill="#FFB703" font-family="Arial, sans-serif" font-weight="bold" font-size="13" text-anchor="middle" letter-spacing="1.5">${safeBadge}</text>
    </g>

    <text x="100" y="260" fill="#FFFFFF" font-family="Arial, sans-serif" font-weight="900" font-size="42">
      ${tspans}
    </text>
    
    <g transform="translate(100, 520)">
      <rect width="1000" height="2" fill="rgba(255,255,255,0.15)" />
      <text x="0" y="30" fill="#94A3B8" font-family="Arial, sans-serif" font-size="16" font-weight="bold">promp.com.br/blog</text>
      <text x="1000" y="30" fill="#22C55E" font-family="Arial, sans-serif" font-size="16" font-weight="bold" text-anchor="end">Automação Inteligente de Vendas</text>
    </g>
  </svg>
  `;

  const coverFileName = `${slug}.webp`;
  const outputPath = path.join(COVERS_DIR, coverFileName);

  await sharp(Buffer.from(svg.trim()))
    .webp({ quality: 90 })
    .toFile(outputPath);

  // Copia para .output/public se existir
  const outputPublicDir = path.resolve(process.cwd(), '.output/public/images/blog');
  if (fs.existsSync(outputPublicDir)) {
    fs.copyFileSync(outputPath, path.join(outputPublicDir, coverFileName));
  }
  const serverPublicDir = '/var/www/site-promp/.output/public/images/blog';
  if (fs.existsSync(serverPublicDir)) {
    try {
      fs.copyFileSync(outputPath, path.join(serverPublicDir, coverFileName));
    } catch {}
  }

  return `/images/blog/${coverFileName}`;
}

async function sendWhatsAppNotification(article) {
  let uazapiUrl = process.env.UAZAPI_URL || process.env.WHATSAPP_API_URL || process.env.PROMP_WEBHOOK_URL;
  const uazapiToken = process.env.UAZAPI_TOKEN || process.env.UAZAPI_KEY || process.env.WHATSAPP_API_KEY || process.env.WHATSAPP_API_TOKEN;
  const rawRecipient = process.env.UAZAPI_NUMBER || process.env.WHATSAPP_NOTIFY_NUMBER || process.env.WHATSAPP_RECIPIENT || '';
  
  const recipients = rawRecipient
    .split(/[,;]+/)
    .map(r => r.trim().replace(/\D/g, ''))
    .filter(Boolean);

  if (recipients.length === 0) {
    recipients.push('5521990408505');
  }

  const messageText = `🚀 *Novo Artigo Publicado no Blog da Promp!*

📰 *${article.title}*
📂 *Categoria:* ${article.category}
⏱️ *Leitura:* ${article.readingTime}
✍️ *Autora:* Letícia Vasconcelos

💡 *Resumo:*
${article.description}

🔗 *Acesse o artigo completo:*
https://promp.com.br/blog/${article.slug}

---
_Promp • Inteligência Artificial & Atendimento Omnichannel_`;

  console.log('\n--- [PREPARANDO NOTIFICAÇÃO UAZAPI / WHATSAPP] ---');
  console.log(`📱 Destinatários (${recipients.length}): ${recipients.join(', ')}`);
  console.log(messageText);
  console.log('--------------------------------------------------\n');

  if (uazapiUrl) {
    // Se a URL for apenas o domínio base ou não tiver endpoint, normaliza para /send/text
    if (!uazapiUrl.includes('/send/') && !uazapiUrl.includes('/message/') && !uazapiUrl.includes('/sendText') && !uazapiUrl.includes('/webhook')) {
      uazapiUrl = uazapiUrl.replace(/\/+$/, '') + '/send/text';
    }

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
        console.log(`📡 Disparando via UAzapi para ${recipient} em ${uazapiUrl}...`);

        const payload = {
          number: recipient,
          text: messageText,
          message: messageText,
          linkPreview: true,
          options: {
            delay: 1200,
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
          console.log(`📦 [${recipient}] Retorno UAzapi:`, JSON.stringify(json, null, 2));
        } catch {
          console.log(`📦 [${recipient}] Retorno UAzapi:`, responseText);
        }

        if (response.ok) {
          console.log(`✅ [${recipient}] Notificação WhatsApp enviada com sucesso!`);
        } else {
          console.warn(`⚠️ [${recipient}] UAzapi retornou status ${response.status}.`);
        }
      } catch (err) {
        console.error(`❌ [${recipient}] Falha na conexão com a API da UAzapi:`, err.message);
      }
    }
  } else {
    console.log('ℹ️ UAZAPI_URL não configurada no ambiente (.env). Mensagem simulada no console.');
  }
}

export async function runDailyBlogPipeline() {
  console.log('🚀 Iniciando Pipeline Diário de Conteúdo Promp (Claude-Blog Engine)...');

  const existingFiles = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.md'));
  const existingSlugs = existingFiles.map(f => {
    const raw = fs.readFileSync(path.join(BLOG_DIR, f), 'utf-8');
    const match = raw.match(/slug:\s*["']?([^"'\n]+)["']?/);
    return match ? match[1] : '';
  });

  // Encontrar o próximo artigo não publicado
  const nextTopic = TOPIC_BACKLOG.find(t => !existingSlugs.includes(t.slug));

  if (!nextTopic) {
    console.log('✅ Todos os tópicos da matriz básica já foram publicados. Para gerar novos, adicione pautas à matriz.');
    return;
  }

  console.log(`📝 Gerando artigo: "${nextTopic.title}"...`);

  // 1. Gerar imagem de capa
  const coverPath = await generateCoverImage(nextTopic);
  console.log(`🎨 Capa gerada em: ${coverPath}`);

  // 2. Data de publicação (hoje)
  const today = new Date().toISOString().split('T')[0];

  // 3. Montar arquivo Markdown
  const frontmatter = `---
title: "${nextTopic.title.replace(/"/g, '\\"')}"
slug: "${nextTopic.slug}"
description: "${nextTopic.description.replace(/"/g, '\\"')}"
date: "${today}"
author: "Letícia Vasconcelos"
authorRole: "Especialista em IA & Estratégia Conversacional | Promp"
authorAvatar: "/images/authors/leticia-vasconcelos.jpg"
category: "${nextTopic.category}"
tags: ${JSON.stringify(nextTopic.tags)}
coverImage: "${coverPath}"
coverAlt: "${nextTopic.title.replace(/"/g, '\\"')}"
readingTime: "${nextTopic.readingTime}"
featured: false
seoKeywords: ${JSON.stringify(nextTopic.tags.map(t => t.toLowerCase()))}
faq:
${nextTopic.faq.map(f => `  - question: "${f.question.replace(/"/g, '\\"')}"\n    answer: "${f.answer.replace(/"/g, '\\"')}"`).join('\n')}
---
`;

  const fullContent = frontmatter + nextTopic.contentBuilder();
  const filePath = path.join(BLOG_DIR, `${nextTopic.slug}.md`);

  fs.writeFileSync(filePath, fullContent.trim() + '\n', 'utf-8');
  console.log(`✔ Artigo publicado em: ${filePath}`);

  // 4. Disparar notificação no WhatsApp
  await sendWhatsAppNotification(nextTopic);

  console.log('🎉 Pipeline diário concluído com sucesso!');
}

// Executar quando chamado via CLI
if (process.argv[1] && process.argv[1].endsWith('daily-blog-pipeline.mjs')) {
  runDailyBlogPipeline().catch(console.error);
}
