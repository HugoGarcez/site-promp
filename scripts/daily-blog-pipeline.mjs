import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
import { discoverTopB2BKeywordOpportunity } from './trends-analyzer.mjs';

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
    title: "Transbordo Inteligente: Como a IA Direciona Leads Prontos para os Melhores Vendedores no WhatsApp",
    slug: "transbordo-inteligente-ia-vendas-humanizadas",
    description: "Descubra como estruturar regras avançadas de transbordo e roteamento inteligente entre agentes de IA e vendedores humanos no momento exato de maior intenção de compra.",
    category: "Operação & Gestão",
    tags: ["Transbordo Inteligente", "Equipe Comercial", "Roteamento de Leads", "WhatsApp Business", "SDR com IA", "Gestão de Vendas", "Conversão"],
    badge: "IA HÍBRIDA & TRANSBORDO",
    readingTime: "13 min",
    color1: "#E84624",
    color2: "#0E1F4A",
    solutionLink: "/solucoes/falta-de-controle",
    solutionName: "Gestão e Métricas Comerciais",
    faq: [
      {
        question: "O que é transbordo inteligente no atendimento com IA?",
        answer: "É a passagem de bastão automática e contextualizada da conversa da inteligência artificial para um consultor humano especialista no momento em que o lead atinge critérios específicos de qualificação ou alta intenção de compra."
      },
      {
        question: "O vendedor humano consegue ler o histórico anterior da conversa?",
        answer: "Sim! Ao assumir o atendimento, o vendedor tem acesso à transcrição integral, resumo executivo dos pontos-chave levantados pela IA e dados cadastrais extraídos, evitando perguntas redundantes."
      },
      {
        question: "A IA para de enviar mensagens quando o humano entra no chat?",
        answer: "Sim. A plataforma detecta a intervenção humana ou o gatilho de transferência e pausa imediatamente as respostas automáticas para dar total liberdade ao consultor de vendas."
      },
      {
        question: "É possível criar filas de transbordo por especialidade ou região geográfica?",
        answer: "Com certeza. A IA pode encaminhar leads para departamentos específicos (Vendas, Suporte, Financeiro) ou distribuir por DDD, porte da empresa e tipo de produto."
      },
      {
        question: "O que acontece se nenhum vendedor humano estiver disponível no momento?",
        answer: "A IA acolhe o lead com cordialidade, informa o prazo estimado de retorno ou agenda uma reunião diretamente no Google Calendar do vendedor para o próximo horário livre."
      }
    ]
  },
  {
    title: "SDR com Inteligência Artificial vs. SDR Humano: A Nova Era da Qualificação Comercial",
    slug: "sdr-ia-vs-sdr-humano-prospeccao-qualificacao",
    description: "A inteligência artificial vai substituir os pré-vendedores? Analise dados de produtividade, custos e saiba como combinar SDRs de IA e consultores humanos para bater recordes de vendas.",
    category: "Vendas & Conversão",
    tags: ["SDR com IA", "Inside Sales", "Qualificação de Leads", "Produtividade Comercial", "WhatsApp", "B2B Sales", "Inteligência Artificial"],
    badge: "SDR & INSIDE SALES",
    readingTime: "14 min",
    color1: "#0E1F4A",
    color2: "#6366F1",
    solutionLink: "/solucoes/leads-que-nao-convertem",
    solutionName: "Conversão de Leads",
    faq: [
      {
        question: "Qual o papel de um SDR com Inteligência Artificial?",
        answer: "O SDR com IA assume o primeiro contato em menos de 3 segundos, 24 horas por dia, realiza a triagem de perfil (ICP, orçamento, urgência) e agenda demonstrações para os executivos de contas (Closers)."
      },
      {
        question: "Quantos leads um SDR com IA consegue atender simultaneamente?",
        answer: "Ilimitados. Diferente de um profissional humano, que gerencia entre 30 e 50 conversas diárias com qualidade, a IA processa milhares de conversas paralelas sem degradação de tempo de resposta."
      },
      {
        question: "Os pré-vendedores humanos serão extintos?",
        answer: "Não. Os profissionais evoluem de tarefas operacionais repetitivas de digitação e qualificação fria para papéis estratégicos de relacionamento corporativo, social selling e negociações de alto ticket."
      },
      {
        question: "Como a IA lida com perguntas fora do roteiro de vendas?",
        answer: "Apoiada em grandes modelos de linguagem e bases de conhecimento proprietárias, a IA compreende perguntas abertas, gírias e analogias, respondendo com precisão contextual."
      },
      {
        question: "Qual a redução média no custo de pré-vendas observada no mercado?",
        answer: "Operações comerciais que adotam SDRs com IA registram uma redução de até 60% no custo por lead qualificado (SQL) e um aumento de até 3.5x no número de reuniões realizadas."
      }
    ]
  },
  {
    title: "Como Reativar Base de Clientes Inativos no WhatsApp e Multiplicar seu LTV com IA",
    slug: "reativar-clientes-inativos-whatsapp-ia",
    description: "Vender para clientes antigos é até 7x mais barato do que atrair novos. Veja o passo a passo para reengajar contatos inativos no WhatsApp com personalização e inteligência artificial.",
    category: "Vendas & Conversão",
    tags: ["Reativação de Base", "LTV", "Retenção de Clientes", "WhatsApp", "Cross-sell", "Upsell", "Inteligência Artificial"],
    badge: "RETENÇÃO & LTV",
    readingTime: "13 min",
    color1: "#0E1F4A",
    color2: "#10B981",
    solutionLink: "/solucoes/follow-up-de-leads",
    solutionName: "Follow-up Automático de Leads",
    faq: [
      {
        question: "O que é considerado um cliente inativo?",
        answer: "Geralmente é aquele cliente que comprou ou interagiu no passado, mas não realiza uma nova compra há mais de 60, 90 ou 180 dias, dependendo do ciclo médio do produto."
      },
      {
        question: "Existe risco de bloqueio do WhatsApp ao disparar para a base antiga?",
        answer: "Quando os disparos utilizam a API Oficial, com mensagens hiper-personalizadas baseadas no histórico de compra anterior e cadência inteligente com intervalos naturais, o risco de bloqueio é praticamente nulo."
      },
      {
        question: "A IA sabe o que o cliente comprou anteriormente?",
        answer: "Sim. Integrada ao ERP, CRM ou e-commerce, a IA cita o produto anteriormente adquirido e sugere itens complementares ou reposições estratégicas."
      },
      {
        question: "Qual a taxa média de conversão em campanhas de reativação com IA?",
        answer: "Empresas registram entre 18% e 32% de taxa de reengajamento ativo e resgate de faturamento imediato na base."
      },
      {
        question: "A IA pode oferecer condições especiais de recompra?",
        answer: "Sim! A inteligência artificial pode aplicar cupons de fidelidade personalizados, frete cortesia ou bônus exclusivos para incentivar a recompra."
      }
    ]
  }
];

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
  const safeBadge = escapeXml(badge);
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
      <rect width="260" height="36" rx="18" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.25)" />
      <text x="130" y="23" fill="#FFB703" font-family="DejaVu Sans, Arial, Helvetica, sans-serif" font-weight="bold" font-size="13" text-anchor="middle" letter-spacing="1.5">${safeBadge}</text>
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

function generateLongFormContent(topic) {
  const solLink = topic.solutionLink || '/solucoes/escalar-vendas-whatsapp';
  const solName = topic.solutionName || 'Inteligência Artificial para Vendas';
  
  return `
> **Em Resumo (Visão Executiva):**  
> No ambiente corporativo contemporâneo, a transformação digital dos canais de atendimento e vendas redefiniu a expectativa do consumidor por velocidade, conveniência e personalização. Empresas que adotam arquiteturas de comunicação orientadas por inteligência artificial eliminam gargalos de tempo de resposta, reduzem custos de aquisição e estabelecem vantagens competitivas duradouras no mercado.

---

## O Panorama Macroeconômico e o Comportamento do Consumidor Digital

O comércio e o relacionamento corporativo atravessam uma das maiores transformações estruturais da história recente. De acordo com relatórios globais consolidados pela conceituada consultoria [McKinsey & Company](https://www.mckinsey.com) sobre personalização e experiência do cliente, mais de **71% dos tomadores de decisão esperam interações imediatas e customizadas**, e 76% expressam frustração quando encontram processos burocráticos ou lentidão de retorno.

Paralelamente, dados compilados pelo [Gartner](https://www.gartner.com) e pela [Statista](https://www.statista.com) sobre o ecossistema de negócios na América Latina revelam:
- O Brasil lidera o índice global de uso de aplicativos de mensagens instantâneas para relações comerciais, com **mais de 96% dos usuários conectados utilizando o WhatsApp diariamente**;
- Mais de **40% das interações comerciais de alto valor ocorrem fora do horário comercial convencional** (noites, madrugadas e fins de semana);
- Operações que demoram mais de 5 minutos para responder a uma solicitação inicial enfrentam uma queda de até **80% na probabilidade de qualificação comercial**, segundo estudos clássicos da [Harvard Business Review](https://hbr.org).

\`\`\`
                                  A Fricção no Modelo Tradicional
┌───────────────────────┐      ┌─────────────────────────┐      ┌─────────────────────────┐
│ Lead Demonstra        │ ──►  │ Fila de Espera Manual   │ ──►  │ Lead Esfria ou Fecha    │
│ Interesse de Compra   │      │ (> 15 a 45 minutos)     │      │ com o Concorrente       │
└───────────────────────┘      └─────────────────────────┘      └─────────────────────────┘
\`\`\`

A incapacidade de escalar a equipe humana na mesma velocidade em que o volume de contatos cresce cria um gargalo financeiro invisível: milhares de reais investidos em tráfego pago e geração de demanda são desperdiçados diariamente na fila de espera.

---

## Os 4 Grandes Desafios Estruturais das Empresas Modernas

Análises de mercado publicadas pelo [Sebrae](https://www.sebrae.com.br) e pela [Forrester Research](https://www.forrester.com) apontam que as falhas de conversão raramente se devem à qualidade do produto, mas sim a deficiências operacionais na jornada de atendimento:

1. **Decaimento Acelerado do Interesse (*Speed to Lead*)**: O ápice do interesse de compra ocorre nos primeiros 180 segundos após o primeiro contato. Passado esse intervalo, a atenção do comprador migra para outras prioridades.
2. **Falta de Padronização no Discurso Comercial**: Cada atendente responde de uma maneira diferente, muitas vezes omitindo diferenciais técnicos essenciais ou falhando em quebrar objeções comuns.
3. **Sobrecarga em Tarefas Burocráticas e Repetitivas**: Vendedores dedicam quase 70% do tempo preenchendo cadastros, tirando dúvidas banais e digitando históricos em planilhas, em vez de negociarem com leads qualificados.
4. **Desconexão de Dados e Canais Descentralizados**: Conversas fragmentadas em múltiplos celulares impedem que a diretoria tenha visibilidade real sobre as métricas do funil de vendas.

---

## A Arquitetura de Comunicação Baseada em Inteligência Artificial

Para superar esses entraves, as operações mais eficientes do mercado adotam uma abordagem híbrida: a inteligência artificial assume o acolhimento imediato, a triagem e as tarefas repetitivas, enquanto os profissionais humanos dedicam-se ao fechamento e às negociações de alto impacto.

\`\`\`
[Lead Inicia Contato no Canal Comercial]
                   │
                   ▼ (Atendimento em < 3 segundos)
[1. Acolhimento Cognitivo e Compreensão de Contexto]
  - Identifica intenção, tom emocional e histórico prévio
  - Responde dúvidas frequentes com precisão técnica
                   │
                   ▼
[2. Qualificação Consultiva (Framework BANT / MEDDIC)]
  - Diagnostica dores, orçamento, autoridade e urgência
  - Separa compradores com perfil ideal de curiosos
                   │
                   ▼
[3. Transbordo Inteligente e Sincronização em Nuvem]
  - Notifica o consultor especialista com briefing completo
  - Atualiza o card de oportunidade no CRM em tempo real
\`\`\`

É exatamente para responder a essa necessidade de escala com atendimento consultivo que a [plataforma de inteligência artificial da Promp](${solLink}) atua, integrando modelos neurais ao WhatsApp Oficial para automatizar o funil de vendas, emitir mensagens de voz humanizadas e sincronizar dados com os principais CRMs do mercado.

---

## Comparativo: Modelo Manual Tradicional vs. Automação Inteligente

| Indicador de Eficiência | Operação Manual Convencional | Arquitetura com Inteligência Artificial |
|---|---|---|
| **Tempo Médio de Primeiro Contato** | 15 a 45 minutos de espera | **Menos de 3 segundos (Instantâneo)** |
| **Disponibilidade de Atendimento** | Apenas dias úteis em horário comercial | **24 horas por dia, 7 dias por semana** |
| **Formato e Variedade das Mensagens** | Textos padrão copiados ou menus (1, 2, 3) | **Texto fluido e Áudios com voz neural realista** |
| **Capacidade de Atendimento Simultâneo** | Limitada ao número físico de atendentes | **Milhares de conversas paralelas sem filas** |
| **Sincronização com CRM e Métricas** | Manual e sujeita a esquecimento | **100% automatizada e em tempo real** |
| **Taxa Média de Fechamento de Vendas** | 3% a 7% do volume de contatos | **Aumento de até 3x a 4x no faturamento** |

---

## A Matemática do ROI: Calculando o Impacto no Caixa

A adoção de automação conversacional inteligente reflete-se diretamente nos indicadores de rentabilidade da empresa:

\`\`\`
                                  Alavancagem de Rentabilidade
┌───────────────────────────────┬───────────────────────────────┬──────────────────────────────┐
│ Variável Operacional          │ Cenário Sem Automação IA      │ Cenário com Automação IA     │
├───────────────────────────────┼───────────────────────────────┼──────────────────────────────┤
│ Volume Mensal de Oportunidades│ 800 contatos                  │ 800 contatos                 │
│ Atendimentos em Tempo Hábil   │ 320 contatos (40%)            │ 800 contatos (100%)          │
│ Taxa Média de Conversão       │ 4,5% (36 vendas)              │ 13,5% (108 vendas)           │
│ Ticket Médio de Venda         │ R$ 1.200,00                   │ R$ 1.200,00                  │
│ Faturamento Mensal Gerado     │ R$ 43.200,00                  │ R$ 129.600,00                │
│ Ganho Incremental Anual       │ —                             │ **+ R$ 1.036.800,00 / ano**  │
└───────────────────────────────┴───────────────────────────────┴──────────────────────────────┘
\`\`\`

A recuperação de leads que seriam perdidos pela demora gera faturamento adicional sem exigir aumento correspondente nos custos de mídia ou contratação massiva de equipe.

---

## Passo a Passo para Implementar na sua Operação

A transição para um modelo escalável de atendimento pode ser conduzida em quatro etapas bem delimitadas:

1. **Conexão Oficial à API do WhatsApp**: Garanta estabilidade, segurança e conformidade estrita com as políticas corporativas da Meta.
2. **Treinamento com a Base de Conhecimento**: Alimente o motor de IA com manuais de produtos, políticas comerciais, regras de frete e perguntas frequentes.
3. **Calibração de Tom de Voz e Regras de Transbordo**: Configure a personalidade do assistente (incluindo áudios neurais) e os gatilhos para acionamento de consultores humanos.
4. **Integração com CRM e Sistemas de Pagamento**: Conecte os eventos de qualificação e venda ao seu pipeline no RD Station, HubSpot, Pipedrive ou e-commerce.

---

## Conclusão: Construa uma Operação Comercial de Alta Eficiência

No cenário competitivo atual, a vitória pertence às organizações que eliminam atritos e respondem às demandas do mercado com agilidade, precisão e empatia. Transformar o canal de atendimento em um ecossistema autônomo de alta conversão é o passo mais seguro para expandir suas receitas de forma sustentável.

Modernize a comunicação da sua empresa, atenda seus clientes 24 horas por dia com mensagens humanizadas e forneça aos seus vendedores apenas oportunidades prontas para o fechamento.

👉 **[Inicie seu teste gratuito na Promp](https://app.promp.com.br/signup)** e descubra como acelerar o crescimento do seu negócio hoje mesmo.
`;
}

export async function runDailyBlogPipeline() {
  console.log('🚀 Iniciando Pipeline Diário de Conteúdo Promp (Claude-Blog Engine + Google Trends B2B)...');

  // Consulta tendências de mercado e intenção de busca no Brasil em tempo real
  const trendOpportunity = await discoverTopB2BKeywordOpportunity();
  console.log(`📈 [Google Trends B2B] Palavra-chave e intenção de mercado: "${trendOpportunity.term}" (${trendOpportunity.source})`);

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

  console.log(`📝 Gerando artigo longo e otimizado para SEO/LLMs: "${nextTopic.title}"...`);

  // 1. Gerar imagem de capa
  const coverPath = await generateCoverImage(nextTopic);
  console.log(`🎨 Capa gerada em: ${coverPath}`);

  // 2. Data de publicação (hoje)
  const today = new Date().toISOString().split('T')[0];

  // 3. Montar palavras-chave com base nas buscas em alta
  const enrichedKeywords = Array.from(new Set([
    ...nextTopic.tags.map(t => t.toLowerCase()),
    trendOpportunity.term.toLowerCase(),
    'promp ia',
    'ia para empresas'
  ]));

  // 4. Montar arquivo Markdown com profundidade máxima
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
readingTime: "${nextTopic.readingTime || '8 min'}"
featured: false
seoKeywords: ${JSON.stringify(enrichedKeywords)}
faq:
${nextTopic.faq.map(f => `  - question: "${f.question.replace(/"/g, '\\"')}"\n    answer: "${f.answer.replace(/"/g, '\\"')}"`).join('\n')}
---
`;

  const bodyContent = typeof nextTopic.contentBuilder === 'function'
    ? nextTopic.contentBuilder()
    : generateLongFormContent(nextTopic);

  const fullContent = frontmatter + bodyContent;
  const filePath = path.join(BLOG_DIR, `${nextTopic.slug}.md`);

  fs.writeFileSync(filePath, fullContent.trim() + '\n', 'utf-8');
  console.log(`✔ Artigo publicado em: ${filePath}`);

  // 5. Disparar notificação no WhatsApp
  await sendWhatsAppNotification(nextTopic);

  console.log('🎉 Pipeline diário concluído com sucesso!');
}

// Executar quando chamado via CLI
if (process.argv[1] && process.argv[1].endsWith('daily-blog-pipeline.mjs')) {
  runDailyBlogPipeline().catch(console.error);
}
