import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
import { discoverDailyTrendOpportunity, B2B_THEMES } from './trends-analyzer.mjs';

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

function slugify(text) {
  return String(text || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function escapeXml(unsafe) {
  return String(unsafe || '').replace(/[<>&'"]/g, function (c) {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
    }
  });
}

function wrapText(text, maxChars = 28) {
  const words = String(text || '').split(' ');
  const lines = [];
  let current = '';
  for (const w of words) {
    if ((current + ' ' + w).trim().length <= maxChars) {
      current = (current + ' ' + w).trim();
    } else {
      if (current) lines.push(current);
      current = w;
    }
  }
  if (current) lines.push(current);
  return lines;
}

async function generateCoverImage({ slug, title, badge, color1, color2 }) {
  const safeBadge = escapeXml(badge || 'INTELIGÊNCIA ARTIFICIAL B2B');
  const titleLines = wrapText(title, 28);
  const startY = titleLines.length === 1 ? 300 : (titleLines.length === 2 ? 270 : 230);
  const lineHeight = 60;
  const tspans = titleLines.map((line, i) => 
    `<tspan x="100" y="${startY + (i * lineHeight)}">${escapeXml(line)}</tspan>`
  ).join('');

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
      <text x="80" y="26" fill="#ffffff" font-family="DejaVu Sans, Arial, Helvetica, sans-serif" font-weight="900" font-size="20" text-anchor="middle" letter-spacing="2">PROMP.IA</text>
    </g>

    <g transform="translate(100, 145)">
      <rect width="280" height="36" rx="18" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.25)" />
      <text x="140" y="23" fill="#FFB703" font-family="DejaVu Sans, Arial, Helvetica, sans-serif" font-weight="bold" font-size="13" text-anchor="middle" letter-spacing="1.5">${safeBadge}</text>
    </g>

    <text fill="#FFFFFF" font-family="DejaVu Sans, Arial, Helvetica, sans-serif" font-weight="900" font-size="46">
      ${tspans}
    </text>
    
    <g transform="translate(100, 530)">
      <rect width="1000" height="2" fill="rgba(255,255,255,0.15)" />
      <text x="0" y="35" fill="#94A3B8" font-family="DejaVu Sans, Arial, Helvetica, sans-serif" font-size="16" font-weight="bold">promp.com.br/blog</text>
      <text x="1000" y="35" fill="#22C55E" font-family="DejaVu Sans, Arial, Helvetica, sans-serif" font-size="16" font-weight="bold" text-anchor="end">Automação Inteligente de Vendas</text>
    </g>
  </svg>
  `;

  const coverFileName = `${slug}.webp`;
  const outputPath = path.join(COVERS_DIR, coverFileName);

  await sharp(Buffer.from(svg.trim()))
    .webp({ quality: 90 })
    .toFile(outputPath);

  // Sincroniza cópias para diretórios de build se existirem
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
    if (!uazapiUrl.includes('/send/') && !uazapiUrl.includes('/message/') && !uazapiUrl.includes('/sendText') && !uazapiUrl.includes('/webhook')) {
      uazapiUrl = uazapiUrl.replace(/\/+$/, '') + '/send/text';
    }

    const headers = { 'Content-Type': 'application/json' };
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
        if (response.ok) {
          console.log(`✅ [${recipient}] Notificação WhatsApp enviada com sucesso!`);
        } else {
          console.warn(`⚠️ [${recipient}] UAzapi retornou status ${response.status}: ${responseText}`);
        }
      } catch (err) {
        console.error(`❌ [${recipient}] Falha na conexão com a API da UAzapi:`, err.message);
      }
    }
  } else {
    console.log('ℹ️ UAZAPI_URL não configurada no ambiente. Notificação simulada.');
  }
}

/**
 * Tenta gerar artigo via LLM APIs (Gemini, OpenAI, Claude, DeepSeek, Groq, OpenRouter) se chaves existirem
 */
async function tryGenerateWithLLM(opportunity) {
  const prompt = `Você é a Letícia Vasconcelos, redatora sênior e especialista em Inteligência Artificial, Inside Sales e Automação Conversacional na Promp (promp.com.br).
A Promp é uma plataforma líder de IA para WhatsApp que atende leads em menos de 3 segundos com respostas inteligentes e áudios humanizados com voz neural ultra-realista, sincronizando tudo com CRM (RD Station, HubSpot, Pipedrive, Ploomes), qualificando leads de anúncios e fazendo follow-up automático de vendas 24 horas por dia.

A oportunidade em alta mapeada hoje no Google Brasil é:
- Tema/Termo em alta: "${opportunity.term}"
- Origem: ${opportunity.source}
- Contexto: ${opportunity.context}
- Pilar Estratégico Promp: ${opportunity.matchedTheme.theme}
- Solução Promp relacionada: [${opportunity.matchedTheme.solutionName}](${opportunity.matchedTheme.solutionLink})

Escreva um artigo COMPLETO, EXTREMAMENTE APROFUNDADO, AUTORITATIVO e focado em DECISORES B2B (CEOs, Diretores Comerciais, CMOs e Gestores).
O artigo deve conter no mínimo 1.600 palavras e seguir estritamente o seguinte formato JSON:

{
  "title": "Título atraente, magnético, focado em SEO e dor real de vendas (máx 80 caracteres)",
  "slug": "slug-em-kebab-case-limpo-sem-acentos",
  "description": "Meta description concisa e persuasiva de 140 a 160 caracteres",
  "category": "${opportunity.matchedTheme.category}",
  "badge": "${opportunity.matchedTheme.badge}",
  "readingTime": "12 min",
  "color1": "${opportunity.matchedTheme.color1}",
  "color2": "${opportunity.matchedTheme.color2}",
  "tags": ["Tag 1", "Tag 2", "Tag 3", "Tag 4", "Tag 5", "Tag 6"],
  "seoKeywords": ["${opportunity.term.toLowerCase()}", "promp ia", "ia para empresas", "whatsapp para vendas", "automacao comercial"],
  "faq": [
    { "question": "Pergunta 1 relevante?", "answer": "Resposta detalhada..." },
    { "question": "Pergunta 2 relevante?", "answer": "Resposta detalhada..." },
    { "question": "Pergunta 3 relevante?", "answer": "Resposta detalhada..." },
    { "question": "Pergunta 4 relevante?", "answer": "Resposta detalhada..." },
    { "question": "Pergunta 5 relevante?", "answer": "Resposta detalhada..." }
  ],
  "contentMarkdown": "Corpo completo em Markdown formatado com: Visão Executiva (> **Em Resumo (Visão Executiva):**), Dados de mercado (McKinsey, Gartner, HBR), Diagnóstico do problema, Diagramas conceituais em ASCII, Como a Promp resolve com link interno para ${opportunity.matchedTheme.solutionLink}, Exemplo real de conversa no WhatsApp incluindo mensagem de áudio humanizado, Tabela comparativa Markdown (Manual vs IA Promp), Tabela de ROI e impacto financeiro, Passo a passo prático de implementação e Conclusão com CTA para https://app.promp.com.br/signup."
}

Retorne SOMENTE o JSON puro, sem blocos de código com crases (\`\`\`json).`;

  // 1. Google Gemini API
  const geminiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;
  if (geminiKey) {
    try {
      console.log('🤖 [AI Engine] Gerando artigo via Google Gemini API...');
      const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${geminiKey}`;
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: { temperature: 0.7, responseMimeType: "application/json" }
        })
      });
      if (res.ok) {
        const data = await res.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (text) {
          const parsed = JSON.parse(text);
          console.log(`✨ [AI Engine] Artigo gerado com sucesso via Gemini: "${parsed.title}"`);
          return parsed;
        }
      }
    } catch (e) {
      console.warn('⚠️ Falha ao chamar Gemini API:', e.message);
    }
  }

  // 2. OpenAI API
  const openaiKey = process.env.OPENAI_API_KEY;
  if (openaiKey) {
    try {
      console.log('🤖 [AI Engine] Gerando artigo via OpenAI API...');
      const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${openaiKey}`
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [{ role: 'user', content: prompt }],
          response_format: { type: "json_object" }
        })
      });
      if (res.ok) {
        const data = await res.json();
        const text = data.choices?.[0]?.message?.content;
        if (text) {
          const parsed = JSON.parse(text);
          console.log(`✨ [AI Engine] Artigo gerado com sucesso via OpenAI: "${parsed.title}"`);
          return parsed;
        }
      }
    } catch (e) {
      console.warn('⚠️ Falha ao chamar OpenAI API:', e.message);
    }
  }

  // 3. Groq API
  const groqKey = process.env.GROQ_API_KEY;
  if (groqKey) {
    try {
      console.log('🤖 [AI Engine] Gerando artigo via Groq API...');
      const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${groqKey}`
        },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          messages: [{ role: 'user', content: prompt }],
          response_format: { type: "json_object" }
        })
      });
      if (res.ok) {
        const data = await res.json();
        const text = data.choices?.[0]?.message?.content;
        if (text) {
          const parsed = JSON.parse(text);
          console.log(`✨ [AI Engine] Artigo gerado com sucesso via Groq: "${parsed.title}"`);
          return parsed;
        }
      }
    } catch (e) {
      console.warn('⚠️ Falha ao chamar Groq API:', e.message);
    }
  }

  // 4. Claude / Anthropic API
  const anthropicKey = process.env.ANTHROPIC_API_KEY;
  if (anthropicKey) {
    try {
      console.log('🤖 [AI Engine] Gerando artigo via Anthropic API...');
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': anthropicKey,
          'anthropic-version': '2023-06-01'
        },
        body: JSON.stringify({
          model: 'claude-3-5-haiku-20241022',
          max_tokens: 4000,
          messages: [{ role: 'user', content: prompt }]
        })
      });
      if (res.ok) {
        const data = await res.json();
        const text = data.content?.[0]?.text;
        if (text) {
          const cleanText = text.replace(/```json\n?|\n?```/g, '').trim();
          const parsed = JSON.parse(cleanText);
          console.log(`✨ [AI Engine] Artigo gerado com sucesso via Claude: "${parsed.title}"`);
          return parsed;
        }
      }
    } catch (e) {
      console.warn('⚠️ Falha ao chamar Anthropic API:', e.message);
    }
  }

  return null;
}

/**
 * Gerador Autônomo de Conteúdo Profundo (Fallback Robusto de Altíssima Qualidade)
 */
function generateAutonomousStrategicArticle(opportunity) {
  const theme = opportunity.matchedTheme;
  const term = opportunity.term;

  // Se o termo for muito longo (ex: manchete de notícia), usa o tema comercial direto
  const subject = (term.length > 40 || term.split(' ').length > 6)
    ? theme.theme
    : term;
  const cleanSubject = subject.trim();
  
  const title = opportunity.preferredTitle || `${cleanSubject.charAt(0).toUpperCase() + cleanSubject.slice(1)}: O Guia Estratégico para Multiplicar Vendas e Eficiência`;
  const baseSlug = slugify(title);
  
  const description = `Descubra como aplicar ${theme.theme.toLowerCase()} no WhatsApp com a IA da Promp para acelerar o fechamento de vendas e qualificar leads.`;
  
  const solLink = theme.solutionLink || '/solucoes/escalar-vendas-whatsapp';
  const solName = theme.solutionName || 'Inteligência Artificial para Vendas';

  const faq = [
    {
      question: `Por que "${cleanSubject}" se tornou um tema tão crítico para empresas brasileiras?`,
      answer: `O mercado corporativo vive um momento em que a agilidade e a hiperpersonalização definem quem fecha a venda. Empresas que demoram minutos para responder ou falham em personalizar a abordagem perdem até 80% das oportunidades comerciais no WhatsApp.`
    },
    {
      question: `Como a Promp conecta essa demanda com a inteligência artificial no WhatsApp?`,
      answer: `A Promp conecta-se à API Oficial do WhatsApp para atender leads em menos de 3 segundos, emitir mensagens de áudio com voz neural idêntica à humana, qualificar perfil de compra e sincronizar com seu CRM em tempo real.`
    },
    {
      question: "Qual o diferencial dos áudios humanizados no atendimento?",
      answer: "Mensagens de voz personalizadas com o nome do cliente quebram a frieza de chatbots robóticos, aumentando a taxa de resposta ativa em até 68% e acelerando a confiança de compra."
    },
    {
      question: "A inteligência artificial substitui os vendedores humanos?",
      answer: "Não. A IA assume a triagem, o acolhimento 24/7 e tarefas repetitivas, realizando o transbordo contextualizado para os consultores humanos apenas quando o lead está pronto para o fechamento."
    },
    {
      question: "Quanto tempo leva para colocar a plataforma em operação?",
      answer: "A integração é realizada em minutos: basta conectar o número no painel da Promp, carregar seus materiais de conhecimento e definir os critérios comerciais de qualificação."
    }
  ];

  const contentMarkdown = `
> **Em Resumo (Visão Executiva):**  
> A aceleração digital e a evolução dos canais de mensagens colocaram o tema **${cleanSubject}** no centro das atenções de diretores comerciais e empresários. Adotar uma estratégia orientada por inteligência artificial conversacional permite acolher 100% da demanda em menos de 3 segundos, eliminar gargalos de atendimento e multiplicar a taxa de conversão sem inflar a folha de pagamento.

---

## O Cenário Atual e a Demanda por Velocidade no Comércio Digital

Pesquisas recentes consolidadas por instituições globais como [McKinsey & Company](https://www.mckinsey.com) e [Gartner](https://www.gartner.com) mostram que **mais de 75% dos compradores B2B e B2C priorizam a agilidade do atendimento sobre qualquer outro critério de compra**. No ecossistema brasileiro:
- Mais de **96% da população economicamente ativa utiliza o WhatsApp diariamente** para decisões profissionais e pessoais;
- O índice de engajamento diminui drasticamente a cada minuto adicional de espera no primeiro contato (*Speed to Lead*);
- Mais de **40% dos contatos de alto valor ocorrem fora do horário comercial convencional** (noites, madrugadas e fins de semana).

\`\`\`
                                O Gargalo do Modelo Convencional
┌────────────────────────┐      ┌─────────────────────────┐      ┌─────────────────────────┐
│ Lead Chega pelo Canal  │ ──►  │ Fila de Espera Manual   │ ──►  │ Lead Esfria e Busca     │
│ Comercial (Anúncio/Site)      │ (> 15 a 45 minutos)     │      │ o Concorrente Direto    │
└────────────────────────┘      └─────────────────────────┘      └─────────────────────────┘
\`\`\`

---

## Os 3 Grandes Desafios Enfrentados pelas Operações Comerciais

Análises de mercado do [Sebrae](https://www.sebrae.com.br) e da [Harvard Business Review](https://hbr.org) apontam os fatores críticos que travam o crescimento das empresas:

1. **Perda de Oportunidades por Demora**: Vendedores humanos não conseguem responder instantaneamente centenas de conversas paralelas simultâneas.
2. **Falta de Padronização e Erros de Registro**: Informações valiosas sobre o perfil do lead perdem-se sem sincronização imediata no CRM.
3. **Alto Custo de Aquisição de Clientes (CAC)**: Investimentos elevados em mídia paga (Meta Ads e Google Ads) são desperdiçados quando o lead não recebe atendimento imediato.

---

## A Arquitetura de Conversão com Inteligência Artificial

Para transformar conversas em receita previsível, a [plataforma de IA da Promp](${solLink}) atua em todas as etapas da jornada comercial:

\`\`\`
[Lead Inicia Conversa no WhatsApp]
                 │
                 ▼ (Tempo de resposta < 3 segundos)
[1. Acolhimento Humanizado & Análise de Contexto]
  - Identifica intenção, tom e histórico prévio
  - Responde com textos fluidos e áudios com voz neural
                 │
                 ▼
[2. Qualificação Consultiva & Triagem Automática]
  - Diagnostica dores, orçamento, interesse e urgência
  - Separa compradores com perfil ideal de meros curiosos
                 │
                 ▼
[3. Transbordo Inteligente & Sincronização em CRM]
  - Notifica o especialista humano com briefing completo
  - Atualiza a oportunidade no RD Station, HubSpot ou Pipedrive
\`\`\`

A tecnologia da Promp permite que seu time comercial dedique 100% da sua energia apenas para negociar e fechar contratos com leads prontos.

---

## Comparativo: Operação Manual Tradicional vs. Automação Inteligente Promp

| Indicador Estratégico | Atendimento Manual Convencional | Arquitetura Promp com IA |
|---|---|---|
| **Tempo Médio de Primeiro Contato** | 15 a 45 minutos de espera | **Menos de 3 segundos (Instantâneo)** |
| **Disponibilidade Operacional** | Apenas dias úteis e horário de escritório | **24 horas por dia, 7 dias por semana** |
| **Formato e Realismo das Respostas** | Textos padronizados ou menus frios | **Mensagens naturais e Áudios com voz neural** |
| **Capacidade de Atendimento Paralelo** | Limitada ao número físico de atendentes | **Milhares de conversas simultâneas** |
| **Sincronização com CRM** | Manual e suscetível a esquecimentos | **100% automatizada em tempo real** |
| **Taxa Média de Conversão** | 3% a 6% do volume total | **Aumento de até 3x a 4x no faturamento** |

---

## Simulação Real de Atendimento no WhatsApp

Veja como a IA atua de maneira envolvente e consultiva:

\`\`\`
[Cliente]: "Olá! Estava pesquisando sobre ${cleanSubject} e queria entender como funciona na prática."

[IA Promp - Texto]:
"Olá! Tudo bem? Seja muito bem-vindo! Que excelente momento para falarmos sobre isso. 😊"

[IA Promp - Áudio Humanizado (0:24s)]:
"Oi! Aqui é a consultora virtual da Promp. Nós ajudamos empresas a escalarem suas operações comerciais no WhatsApp com atendimento imediato e áudios realistas. Me conta: hoje na sua operação qual é o seu principal desafio de vendas?"

[Cliente]: "Nosso time demora muito para responder os leads dos anúncios e perdemos muitas vendas à noite."

[IA Promp - Áudio Humanizado (0:28s)]:
"Entendi perfeitamente. Esse é o principal gargalo de 9 entre 10 empresas que atendemos. Com a Promp, seus leads são acolhidos em menos de 3 segundos, mesmo de madrugada. Qual o seu melhor horário hoje para vermos uma demonstração rápida de 15 minutos?"
\`\`\`

---

## O Impacto no Faturamento e ROI

Veja a simulação financeira em uma operação que recebe 600 oportunidades mensais:

\`\`\`
                                  Demonstrativo de Impacto no Caixa
┌───────────────────────────────┬───────────────────────────────┬──────────────────────────────┐
│ Indicador Operacional         │ Modelo Sem IA                 │ Modelo com IA Promp          │
├───────────────────────────────┼───────────────────────────────┼──────────────────────────────┤
│ Oportunidades Recebidas       │ 600 contatos                  │ 600 contatos                 │
│ Atendimentos em Tempo Hábil   │ 240 contatos (40%)            │ 600 contatos (100%)          │
│ Taxa Média de Fechamento      │ 5% (12 vendas)                │ 15% (90 vendas)              │
│ Ticket Médio Comercial        │ R$ 1.500,00                   │ R$ 1.500,00                  │
│ Receita Mensal Gerada         │ R$ 18.000,00                  │ R$ 135.000,00                │
│ Ganho Incremental Anual       │ —                             │ **+ R$ 1.404.000,00 / ano**  │
└───────────────────────────────┴───────────────────────────────┴──────────────────────────────┘
\`\`\`

---

## Como Implementar na sua Empresa em 4 Passos

1. **Conexão Oficial à API do WhatsApp**: Escaneie o QR Code em menos de 2 minutos no painel da Promp.
2. **Treinamento com seus Materiais**: Faça upload de catálogos, perguntas frequentes, políticas e diferenciais técnicos.
3. **Calibração do Tom de Voz e Regras de Transbordo**: Configure a personalidade do assistente e os gatilhos para acionar sua equipe.
4. **Integração com seu CRM**: Conecte eventos via [Integrações e Automações](/solucoes/integracoes-e-automacoes) para manter seu pipeline sempre atualizado.

---

## Conclusão: Dê o Próximo Passo na Eficiência Comercial

Não deixe seus leads esperando na fila enquanto a concorrência responde em tempo real. Transforme seu WhatsApp em uma máquina previsível de qualificação e fechamento com inteligência artificial.

👉 **[Comece seu teste gratuito na Promp](https://app.promp.com.br/signup)** e descubra como acelerar seus resultados hoje mesmo.
`;

  return {
    title,
    slug: baseSlug,
    description,
    category: theme.category || "Vendas & Conversão",
    badge: theme.badge || "AUTOMAÇÃO & IA",
    readingTime: "12 min",
    color1: theme.color1 || "#E84624",
    color2: theme.color2 || "#0E1F4A",
    tags: [cleanSubject, "Inteligência Artificial", "WhatsApp Business", "Vendas B2B", "Conversão", "Automação Comercial"],
    seoKeywords: [cleanSubject.toLowerCase(), "promp ia", "ia para empresas", "automacao whatsapp", "vendas"],
    faq,
    contentMarkdown
  };
}

export async function runDailyBlogPipeline() {
  console.log('🚀 [Daily Blog Pipeline] Iniciando geração diária 100% autônoma baseada em tendências...');

  // 1. Ler artigos existentes para nunca duplicar pautas
  const existingFiles = fs.existsSync(BLOG_DIR) 
    ? fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.md'))
    : [];

  const existingSlugs = [];
  const existingTitles = [];

  for (const file of existingFiles) {
    try {
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), 'utf-8');
      const slugMatch = raw.match(/slug:\s*["']?([^"'\n]+)["']?/);
      const titleMatch = raw.match(/title:\s*["']?([^"'\n]+)["']?/);
      if (slugMatch) existingSlugs.push(slugMatch[1]);
      if (titleMatch) existingTitles.push(titleMatch[1]);
    } catch {}
  }

  console.log(`📚 Artigos já publicados identificados: ${existingSlugs.length}`);

  // 2. Descobrir a melhor tendência/busca do dia
  const opportunity = await discoverDailyTrendOpportunity(existingSlugs, existingTitles);
  console.log(`🎯 Oportunidade do dia: "${opportunity.term}" (${opportunity.source})`);

  // 3. Gerar artigo rico via LLM API ou Motor Autônomo Estratégico
  let article = await tryGenerateWithLLM(opportunity);
  if (!article || !article.title || !article.contentMarkdown) {
    console.log('⚡ Utilizando Motor Autônomo Estratégico para elaboração de conteúdo profundo...');
    article = generateAutonomousStrategicArticle(opportunity);
  }

  // Garantir slug limpo e único
  let targetSlug = slugify(article.slug || article.title);
  if (existingSlugs.includes(targetSlug)) {
    const todayShort = new Date().toISOString().split('T')[0].replace(/-/g, '');
    targetSlug = `${targetSlug}-${todayShort}`;
  }
  article.slug = targetSlug;

  console.log(`📝 Artigo preparado: "${article.title}" (slug: ${article.slug})`);

  // 4. Gerar imagem de capa profissional (.webp)
  const coverPath = await generateCoverImage(article);
  console.log(`🎨 Capa gerada em: ${coverPath}`);

  // 5. Formatar Frontmatter e Markdown
  const today = new Date().toISOString().split('T')[0];
  const enrichedKeywords = Array.from(new Set([
    ...(article.tags || []).map(t => t.toLowerCase()),
    ...(article.seoKeywords || []).map(k => k.toLowerCase()),
    opportunity.term.toLowerCase(),
    'promp ia',
    'ia para empresas'
  ]));

  const frontmatter = `---
title: "${article.title.replace(/"/g, '\\"')}"
slug: "${article.slug}"
description: "${(article.description || '').replace(/"/g, '\\"')}"
date: "${today}"
author: "Letícia Vasconcelos"
authorRole: "Especialista em IA & Estratégia Conversacional | Promp"
authorAvatar: "/images/authors/leticia-vasconcelos.jpg"
category: "${article.category || 'Vendas & Conversão'}"
tags: ${JSON.stringify(article.tags || ['Inteligência Artificial', 'WhatsApp', 'Vendas'])}
coverImage: "${coverPath}"
coverAlt: "${article.title.replace(/"/g, '\\"')}"
readingTime: "${article.readingTime || '12 min'}"
featured: false
seoKeywords: ${JSON.stringify(enrichedKeywords)}
faq:
${(article.faq || []).map(f => `  - question: "${f.question.replace(/"/g, '\\"')}"\n    answer: "${f.answer.replace(/"/g, '\\"')}"`).join('\n')}
---
`;

  const fullContent = (frontmatter + (article.contentMarkdown || '')).trim() + '\n';
  const filePath = path.join(BLOG_DIR, `${article.slug}.md`);

  fs.writeFileSync(filePath, fullContent, 'utf-8');
  console.log(`✔ Novo artigo gravado com sucesso em: ${filePath}`);

  // 6. Notificação via WhatsApp
  await sendWhatsAppNotification(article);

  console.log('🎉 Pipeline diário concluído com êxito!');
  return { success: true, article, filePath, coverPath };
}

// Executar quando chamado diretamente pelo terminal
if (process.argv[1] && process.argv[1].endsWith('daily-blog-pipeline.mjs')) {
  runDailyBlogPipeline().catch(console.error);
}
