import fs from 'node:fs';
import path from 'node:path';

// Sementes temáticas de alto valor comercial para o ecossistema de vendas, atendimento e IA da Promp
export const B2B_THEMES = [
  {
    theme: "Velocidade de Atendimento e Speed to Lead",
    seedQueries: [
      "tempo de resposta atendimento whatsapp empresas",
      "speed to lead vendas b2b",
      "como atender clientes mais rapido no whatsapp",
      "demora no atendimento ao cliente prejuizos",
      "atendimento em 3 segundos whatsapp conversao"
    ],
    titleTemplates: [
      "Speed to Lead no WhatsApp: O Guia Definitivo para Responder em 3 Segundos e Bater Recordes de Vendas",
      "Como Reduzir o Tempo de Resposta no WhatsApp e Triplicar a Taxa de Conversão Comercial com IA",
      "A Ciência do Speed to Lead: Por que Cada Minuto de Espera no WhatsApp Custa Milhares de Reais"
    ],
    solutionLink: "/solucoes/demora-no-atendimento",
    solutionName: "Resposta Instantânea e Speed to Lead",
    category: "Vendas & Conversão",
    badge: "SPEED TO LEAD & CONVERSÃO",
    color1: "#E84624",
    color2: "#0E1F4A"
  },
  {
    theme: "Atendimento Noturno e 24/7 com IA",
    seedQueries: [
      "atendimento ao cliente 24 horas whatsapp",
      "atendimento automatico fora do horario comercial",
      "ia para atender clientes de madrugada",
      "como vender 24 horas por dia no whatsapp",
      "converter leads noturnos no whatsapp"
    ],
    titleTemplates: [
      "Atendimento 24/7 no WhatsApp com IA: Como Vender Fora do Horário Comercial sem Custo de Plantão",
      "Como Capturar e Converter Leads Noturnos no WhatsApp com Inteligência Artificial Humanizada",
      "O Fim do Atendimento em Horário Comercial: Por que as Melhores Empresas Atendem 24 Horas por Dia"
    ],
    solutionLink: "/solucoes/atendimento-fora-do-horario",
    solutionName: "Atendimento 24/7 com IA",
    category: "Atendimento & Suporte",
    badge: "ATENDIMENTO 24/7",
    color1: "#0E1F4A",
    color2: "#3B82F6"
  },
  {
    theme: "Qualificação de Leads de Tráfego Pago (Meta Ads & Google Ads)",
    seedQueries: [
      "qualificar leads meta ads whatsapp",
      "como filtrar curiosos de anuncios no whatsapp",
      "reduzir custo por lead qualificado tráfego pago",
      "sdr com inteligencia artificial para trafego pago",
      "anuncios clique para whatsapp conversao"
    ],
    titleTemplates: [
      "Como Qualificar Leads de Meta Ads no WhatsApp em Menos de 3 Segundos e Reduzir o CPL",
      "O Guia Completo para Filtrar Curiosos de Anúncios no WhatsApp e Entregar Leads Quentes para os Vendedores",
      "Como Multiplicar o ROI dos seus Anúncios no Instagram e WhatsApp com Qualificação por IA"
    ],
    solutionLink: "/solucoes/leads-que-nao-convertem",
    solutionName: "Conversão de Anúncios e Tráfego Pago",
    category: "Tráfego & Ads",
    badge: "TRÁFEGO PAGO & META ADS",
    color1: "#1E293B",
    color2: "#E84624"
  },
  {
    theme: "Follow-up Inteligente e Recuperação de Vendas Perdidas",
    seedQueries: [
      "follow up de vendas whatsapp automacao",
      "como recuperar carrinhos abandonados whatsapp",
      "recuperar boletos e pix pendentes whatsapp",
      "reengajar contatos frios no whatsapp",
      "cadencia de follow up automatico whatsapp"
    ],
    titleTemplates: [
      "Follow-up de Vendas no WhatsApp: Como Reengajar Leads Frios e Fechar Vendas Paradas com IA",
      "Como Recuperar Carrinhos Abandonados e Pix Pendentes no WhatsApp com Abordagem Consultiva",
      "A Régua Perfeita de Follow-up no WhatsApp: Estratégias que Aumentam o Faturamento em até 38%"
    ],
    solutionLink: "/solucoes/follow-up-de-leads",
    solutionName: "Follow-up Automático de Leads",
    category: "Vendas & Conversão",
    badge: "FOLLOW-UP & RECUPERAÇÃO",
    color1: "#0E1F4A",
    color2: "#10B981"
  },
  {
    theme: "Áudios Humanizados com Voz Neural Realista",
    seedQueries: [
      "audios humanizados com ia whatsapp vendas",
      "mensagem de voz realista para clientes whatsapp",
      "como usar ia de voz no atendimento comercial",
      "aumentar resposta no whatsapp com audio personalizado",
      "voz neural para empresas whatsapp"
    ],
    titleTemplates: [
      "Áudios Humanizados com IA no WhatsApp: O Segredo para Multiplicar Suas Taxas de Resposta",
      "Por que Áudios com Voz Neural Geram 68% Mais Confiança no WhatsApp do que Chatbots Tradicionais",
      "Como Usar Mensagens de Voz Personalizadas com IA para Humanizar e Escalar seu Atendimento"
    ],
    solutionLink: "/solucoes/escalar-vendas-whatsapp",
    solutionName: "Escala Comercial com Áudios Humanizados",
    category: "Tecnologia & IA",
    badge: "VOZ NEURAL & HUMANIZAÇÃO",
    color1: "#E84624",
    color2: "#6366F1"
  },
  {
    theme: "Integração do WhatsApp com CRM e Automação de Dados",
    seedQueries: [
      "integrar whatsapp com rd station crm",
      "sincronizar whatsapp hubspot pipedrive",
      "como salvar historico de whatsapp no crm",
      "automacao de funil de vendas whatsapp crm",
      "centralizacao de dados de vendas whatsapp"
    ],
    titleTemplates: [
      "Integração de WhatsApp com CRM: Como Sincronizar Histórico, Leads e Negócios Automaticamente",
      "Como Conectar o WhatsApp ao RD Station, HubSpot e Pipedrive para Eliminar Retrabalho Manual",
      "Gestão de Pipeline de Vendas no WhatsApp: Tenha 100% de Visibilidade do seu Funil Comercial"
    ],
    solutionLink: "/solucoes/integracoes-e-automacoes",
    solutionName: "Integrações e Automações de CRM",
    category: "Operação & Gestão",
    badge: "CRM & INTEGRAÇÕES",
    color1: "#0E1F4A",
    color2: "#8B5CF6"
  },
  {
    theme: "Transbordo Inteligente e Roteamento para Vendedores",
    seedQueries: [
      "transbordo ia para vendedor humano whatsapp",
      "como distribuir leads no whatsapp por vendedor",
      "roteamento inteligente de conversas equipe comercial",
      "ia e vendedor humano trabalhando juntos",
      "passagem de bastao sdr para closer whatsapp"
    ],
    titleTemplates: [
      "Transbordo Inteligente: Como a IA Direciona Leads Quentes para os Melhores Vendedores no WhatsApp",
      "A Operação Híbrida Perfeita: Como Combinar SDRs de IA e Closers Humanos para Bater Metas",
      "Roteamento Contextual de Conversas: Como Passar o Bastão da IA para o Humano sem Fricção"
    ],
    solutionLink: "/solucoes/falta-de-controle",
    solutionName: "Gestão e Transbordo Comercial",
    category: "Operação & Gestão",
    badge: "IA HÍBRIDA & TRANSBORDO",
    color1: "#E84624",
    color2: "#0E1F4A"
  },
  {
    theme: "IA para Clínicas, Consultórios e Redução de No-Show",
    seedQueries: [
      "ia para clinicas agendamento whatsapp",
      "como reduzir faltas de pacientes com whatsapp",
      "confirmacao automatica de consultas whatsapp",
      "atendimento automatico para consultorios medicos e odontologicos",
      "agendamento 24h para clinicas whatsapp"
    ],
    titleTemplates: [
      "IA para Clínicas e Consultórios: Como Reduzir No-Shows e Automatizar Agendamentos no WhatsApp",
      "Como Manter a Agenda da sua Clínica Sempre Cheia com Confirmações Automáticas Humanizadas",
      "Atendimento 24 Horas para Consultórios Médicos e Odontológicos: Mais Pacientes, Menos Faltas"
    ],
    solutionLink: "/solucoes/atendimento-fora-do-horario",
    solutionName: "Automação para Clínicas e Saúde",
    category: "Casos Reais",
    badge: "CLÍNICAS & CONSULTÓRIOS",
    color1: "#0E1F4A",
    color2: "#06B6D4"
  },
  {
    theme: "IA para Imobiliárias e Corretores de Imóveis",
    seedQueries: [
      "ia para imobiliarias atendimento whatsapp",
      "agendar visitas de imoveis pelo whatsapp automatico",
      "atendimento para corretores de imoveis no whatsapp",
      "como qualificar compradores e locatarios no mercado imobiliario",
      "atendimento 24h para portais imobiliarios zap vivareal"
    ],
    titleTemplates: [
      "IA para Imobiliárias e Corretores: Como Agendar Mais Visitas e Fechar Imóveis 24 Horas por Dia",
      "Como Responder Leads de Portais Imobiliários em 3 Segundos e Acelerar o Ciclo de Venda",
      "Qualificação Imobiliária com IA: Filtrando Perfil, Orçamento e Agendando Visitas no WhatsApp"
    ],
    solutionLink: "/solucoes/atendimento-fora-do-horario",
    solutionName: "Automação Imobiliária 24/7",
    category: "Casos Reais",
    badge: "MERCADO IMOBILIÁRIO",
    color1: "#0E1F4A",
    color2: "#059669"
  },
  {
    theme: "Reativação de Base de Clientes e Aumento de LTV",
    seedQueries: [
      "como reativar clientes inativos whatsapp",
      "aumentar ltv com automacao no whatsapp",
      "cross sell e upsell no whatsapp com ia",
      "campanhas de recompra para base de clientes",
      "vender para base antiga whatsapp"
    ],
    titleTemplates: [
      "Como Reativar Base de Clientes Inativos no WhatsApp e Multiplicar seu LTV com Inteligência Artificial",
      "Vender para Clientes Antigos é 7x Mais Barato: Estratégias de Reengajamento Seguro no WhatsApp",
      "Como Estruturar Campanhas de Recompra e Cross-Sell Automatizadas no WhatsApp com IA"
    ],
    solutionLink: "/solucoes/follow-up-de-leads",
    solutionName: "Reativação e LTV",
    category: "Vendas & Conversão",
    badge: "RETENÇÃO & LTV",
    color1: "#0E1F4A",
    color2: "#F59E0B"
  },
  {
    theme: "Centralização Multicanal e Atendimento Omnichannel",
    seedQueries: [
      "centralizar whatsapp e instagram direct em um lugar",
      "plataforma omnichannel para empresas whatsapp",
      "como atender whatsapp e instagram na mesma equipe",
      "fim dos celulares soltos na equipe de vendas",
      "gestao centralizada de mensagens corporativas"
    ],
    titleTemplates: [
      "Centralização Multicanal: Como Gerenciar WhatsApp e Instagram Direct em uma Única Plataforma com IA",
      "O Fim dos Celulares Soltos: Como Ter Controle Total e Métricas das Conversas da sua Equipe Comercial",
      "Atendimento Omnichannel com Inteligência Artificial: Unificando Canais para Vender Mais"
    ],
    solutionLink: "/solucoes/canais-descentralizados",
    solutionName: "Centralização Multicanal",
    category: "Operação & Gestão",
    badge: "OMNICHANNEL & GESTÃO",
    color1: "#1E293B",
    color2: "#3B82F6"
  },
  {
    theme: "Redução de Custos Operacionais e CAC com IA",
    seedQueries: [
      "como reduzir custo de atendimento ao cliente com ia",
      "reduzir custo de aquisicao de clientes cac no whatsapp",
      "produtividade da equipe comercial com inteligencia artificial",
      "roi de automacao de vendas com ia",
      "escalar equipe de vendas sem aumentar headcount"
    ],
    titleTemplates: [
      "Como Reduzir o CAC e os Custos de Atendimento Comercial em até 60% com Inteligência Artificial",
      "A Matemática do ROI em Vendas: Como Escalar Atendimentos no WhatsApp sem Contratar Mais Pessoas",
      "Produtividade Comercial com IA: Liberando seus Melhores Vendedores para Fechar Contratos"
    ],
    solutionLink: "/solucoes/escalar-vendas-whatsapp",
    solutionName: "Eficiência e Redução de CAC",
    category: "Operação & Gestão",
    badge: "ROI & EFICIÊNCIA",
    color1: "#0E1F4A",
    color2: "#10B981"
  }
];

// Termos estritamente proibidos (filtro de irrelevância para tomadores de decisão B2B)
export const BLACKLIST_KEYWORDS = [
  "futebol", "jogo", "gol", "campeonato", "libertadores", "brasileirao",
  "flamengo", "corinthians", "palmeiras", "sao paulo", "vasco", "gremio", "inter",
  "reality", "bbb", "novela", "ator", "atriz", "famosos", "fofoca",
  "horoscopo", "signo", "cinema", "trailer", "filme", "serie", "anime",
  "crime", "policia", "acidente", "morte", "politica", "eleicao", "lula", "bolsonaro",
  "carnaval", "feriado", "show", "cantor", "musica", "album", "tailandia", "vietna",
  "esporte", "olimpiadas", "nba", "ufc", "boxe",
  "dividendos", "ações", "acao", "bolsa de valores", "ibovespa", "b3", "petrobras", "vale",
  "reajuste", "concurso", "inss", "fgts", "pis", "beneficio", "prefeito", "governador", "presidente"
];

// Padrões estritos de relevância para automação comercial, vendas e IA
export const B2B_PATTERNS = [
  /\bvenda(s)?\b/i,
  /\bcomercial\b/i,
  /\batendimento ao cliente\b/i,
  /\batendimento\b/i,
  /\bwhatsapp\b/i,
  /\bintelig[eê]ncia artificial\b/i,
  /\bia para\b/i,
  /\bautoma[cç][aã]o\b/i,
  /\be-?commerce\b/i,
  /\bcl[ií]nica(s)?\b/i,
  /\bimobili[aá]ria(s)?\b/i,
  /\bconvers[aã]o\b/i,
  /\blead(s)?\b/i,
  /\bsdr\b/i,
  /\binside sales\b/i,
  /\bcrm\b/i,
  /\btransbordo\b/i,
  /\bfollow-?up\b/i,
  /\bchatbots?\b/i
];

export async function fetchGoogleTrendsBR() {
  try {
    const url = "https://trends.google.com.br/trending/rss?geo=BR";
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (PrompDailyBot/2.0)' } });
    if (!res.ok) return [];

    const xml = await res.text();
    const items = [];
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    let match;

    while ((match = itemRegex.exec(xml)) !== null) {
      const itemBlock = match[1];
      const titleMatch = itemBlock.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>|<title>(.*?)<\/title>/);
      const trafficMatch = itemBlock.match(/<ht:approx_traffic>(.*?)<\/ht:approx_traffic>/);
      
      const title = (titleMatch ? (titleMatch[1] || titleMatch[2]) : '').trim();
      const traffic = trafficMatch ? trafficMatch[1] : '10K+';

      if (title && !title.toLowerCase().includes('daily search trends')) {
        items.push({ title, traffic });
      }
    }
    return items;
  } catch {
    return [];
  }
}

export async function fetchGoogleNewsBusinessBR() {
  try {
    const url = "https://news.google.com/rss/headlines/section/topic/BUSINESS?hl=pt-BR&gl=BR&ceid=BR:pt-419";
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (PrompDailyBot/2.0)' } });
    if (!res.ok) return [];

    const xml = await res.text();
    const items = [];
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    let match;

    while ((match = itemRegex.exec(xml)) !== null) {
      const itemBlock = match[1];
      const titleMatch = itemBlock.match(/<title>(.*?)<\/title>/);
      const rawTitle = titleMatch ? titleMatch[1] : '';
      const cleanTitle = rawTitle.replace(/\s*-\s*[^-]+$/, '').trim();

      if (cleanTitle) {
        items.push({ title: cleanTitle });
      }
    }
    return items;
  } catch {
    return [];
  }
}

export async function fetchGoogleSuggestions(query) {
  try {
    const url = `https://suggestqueries.google.com/complete/search?client=firefox&q=${encodeURIComponent(query)}&hl=pt-BR`;
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (PrompDailyBot/2.0)' } });
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data[1]) ? data[1] : [];
  } catch {
    return [];
  }
}

export function isStrictB2BRelevant(text) {
  const lower = String(text || '').toLowerCase();

  for (const black of BLACKLIST_KEYWORDS) {
    if (lower.includes(black)) return false;
  }

  for (const pattern of B2B_PATTERNS) {
    if (pattern.test(lower)) return true;
  }

  return false;
}

export function mapTermToPrompTheme(term) {
  const lower = String(term || '').toLowerCase();

  if (lower.includes('clinica') || lower.includes('medico') || lower.includes('consultorio') || lower.includes('saude') || lower.includes('no-show')) {
    return B2B_THEMES.find(t => t.theme.includes('Clínicas')) || B2B_THEMES[0];
  }
  if (lower.includes('imobili') || lower.includes('corretor') || lower.includes('imovel') || lower.includes('imoveis')) {
    return B2B_THEMES.find(t => t.theme.includes('Imobiliárias')) || B2B_THEMES[0];
  }
  if (lower.includes('anuncio') || lower.includes('meta ads') || lower.includes('trafego') || lower.includes('ads') || lower.includes('instagram')) {
    return B2B_THEMES.find(t => t.theme.includes('Tráfego Pago')) || B2B_THEMES[0];
  }
  if (lower.includes('carrinho') || lower.includes('boleto') || lower.includes('pix') || lower.includes('follow') || lower.includes('recuperar')) {
    return B2B_THEMES.find(t => t.theme.includes('Follow-up')) || B2B_THEMES[0];
  }
  if (lower.includes('crm') || lower.includes('hubspot') || lower.includes('rd station') || lower.includes('pipedrive')) {
    return B2B_THEMES.find(t => t.theme.includes('Integração')) || B2B_THEMES[0];
  }
  if (lower.includes('audio') || lower.includes('voz') || lower.includes('humaniz')) {
    return B2B_THEMES.find(t => t.theme.includes('Áudios Humanizados')) || B2B_THEMES[0];
  }
  if (lower.includes('24/7') || lower.includes('noite') || lower.includes('madrugada') || lower.includes('horario')) {
    return B2B_THEMES.find(t => t.theme.includes('Noturno')) || B2B_THEMES[0];
  }
  if (lower.includes('transbordo') || lower.includes('equipe') || lower.includes('vendedor')) {
    return B2B_THEMES.find(t => t.theme.includes('Transbordo')) || B2B_THEMES[0];
  }
  if (lower.includes('reativar') || lower.includes('inativo') || lower.includes('ltv') || lower.includes('recompra')) {
    return B2B_THEMES.find(t => t.theme.includes('Reativação')) || B2B_THEMES[0];
  }
  if (lower.includes('cac') || lower.includes('custo') || lower.includes('eficiencia') || lower.includes('roi')) {
    return B2B_THEMES.find(t => t.theme.includes('Redução de Custos')) || B2B_THEMES[0];
  }
  if (lower.includes('speed') || lower.includes('tempo') || lower.includes('demora') || lower.includes('rapido')) {
    return B2B_THEMES.find(t => t.theme.includes('Speed to Lead')) || B2B_THEMES[0];
  }

  return B2B_THEMES[Math.floor(Math.random() * B2B_THEMES.length)];
}

/**
 * Motor Principal: Descobre a oportunidade diária sem duplicar pautas já postadas
 */
export async function discoverDailyTrendOpportunity(existingSlugs = [], existingTitles = []) {
  console.log('📡 [Trends Discovery] Mapeando tendências e buscas de alta intenção comercial no Brasil...');

  const normalizedExisting = existingSlugs.map(s => s.toLowerCase().replace(/[-_]/g, ' '));
  const normalizedTitles = existingTitles.map(t => t.toLowerCase());

  function isAlreadyPublished(text) {
    const clean = text.toLowerCase().replace(/[-_]/g, ' ');
    return normalizedExisting.some(s => clean.includes(s) || s.includes(clean)) ||
           normalizedTitles.some(t => clean.includes(t) || t.includes(clean));
  }

  // 1. Google Trends BR (Filtro B2B rigoroso)
  const googleTrends = await fetchGoogleTrendsBR();
  const relevantTrend = googleTrends.find(t => isStrictB2BRelevant(t.title) && !isAlreadyPublished(t.title));

  if (relevantTrend) {
    const matchedTheme = mapTermToPrompTheme(relevantTrend.title);
    const preferredTitle = (matchedTheme.titleTemplates || []).find(t => !isAlreadyPublished(t));
    console.log(`🔥 [Google Trends BR] Tendência B2B em alta: "${relevantTrend.title}" (${relevantTrend.traffic})`);
    return {
      source: 'Google Trends BR (Tempo Real)',
      term: relevantTrend.title,
      preferredTitle,
      traffic: relevantTrend.traffic,
      context: `Tendência de busca em alta no Brasil com ${relevantTrend.traffic} buscas registradas.`,
      matchedTheme
    };
  }

  // 2. Google News Negócios BR (Filtro B2B rigoroso)
  const newsItems = await fetchGoogleNewsBusinessBR();
  const relevantNews = newsItems.find(n => isStrictB2BRelevant(n.title) && !isAlreadyPublished(n.title));

  if (relevantNews) {
    const matchedTheme = mapTermToPrompTheme(relevantNews.title);
    const preferredTitle = (matchedTheme.titleTemplates || []).find(t => !isAlreadyPublished(t));
    console.log(`📰 [Google News Negócios] Notícia relevante identificada: "${relevantNews.title}"`);
    return {
      source: 'Google News Negócios Brasil',
      term: relevantNews.title,
      preferredTitle,
      traffic: 'Alta Relevância Editorial',
      context: `Destaque no mercado corporativo brasileiro: "${relevantNews.title}".`,
      matchedTheme
    };
  }

  // 3. Google Search Intent com temas rotativos da Promp
  console.log('🔍 [Google Search Intent] Identificando buscas comerciais de empresários...');
  const shuffledThemes = [...B2B_THEMES].sort(() => Math.random() - 0.5);

  for (const theme of shuffledThemes) {
    for (const seed of theme.seedQueries) {
      if (!isAlreadyPublished(seed)) {
        const suggestions = await fetchGoogleSuggestions(seed);
        const candidate = suggestions.find(s => isStrictB2BRelevant(s) && !isAlreadyPublished(s));

        if (candidate) {
          console.log(`💡 [Google Suggestion] Pauta comercial em alta: "${candidate}"`);
          return {
            source: 'Google Search Intent B2B (Demanda Orgânica)',
            term: candidate,
            traffic: 'Alta Intenção de Compra',
            context: `Pesquisa recorrente de empresários e gestores de vendas: "${candidate}".`,
            matchedTheme: theme
          };
        }
      }
    }
  }

  // Fallback seguro com template de título não publicado
  for (const theme of shuffledThemes) {
    const template = (theme.titleTemplates || []).find(t => !isAlreadyPublished(t));
    if (template) {
      console.log(`🎯 [Tema Estratégico Promp] Selecionado: "${template}"`);
      return {
        source: 'Estratégia Editorial Promp B2B',
        term: theme.seedQueries[0],
        preferredTitle: template,
        traffic: 'Volume Contínuo B2B',
        context: `Pauta estratégica focada em ${theme.theme} e conversão no WhatsApp com IA.`,
        matchedTheme: theme
      };
    }
  }

  const fallbackTheme = shuffledThemes[0];
  return {
    source: 'Estratégia Editorial Promp B2B',
    term: fallbackTheme.seedQueries[0],
    preferredTitle: fallbackTheme.titleTemplates?.[0] || `${fallbackTheme.theme}: Guia Completo com Inteligência Artificial`,
    traffic: 'Volume Contínuo B2B',
    context: `Pauta de alta conversão sobre ${fallbackTheme.theme}.`,
    matchedTheme: fallbackTheme
  };
}
