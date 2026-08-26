import fs from 'node:fs';
import path from 'node:path';

// Lista de sementes estratégicas de busca B2B para o mercado brasileiro
export const B2B_SEARCH_SEEDS = [
  "inteligencia artificial para empresas",
  "whatsapp para empresas",
  "automacao de vendas whatsapp",
  "atendimento ao cliente 24/7",
  "integrar whatsapp com crm",
  "recuperar carrinho abandonado whatsapp",
  "qualificar leads meta ads whatsapp",
  "reduzir no show clinica whatsapp",
  "sdr inteligencia artificial",
  "audios humanizados whatsapp ia",
  "reduzir custo de atendimento ao cliente",
  "vendas consultivas whatsapp",
  "chatbot humanizado whatsapp",
  "omnichannel whatsapp instagram direct",
  "reativar clientes inativos whatsapp",
  "escalar vendas no whatsapp",
  "gestao de equipes de vendas whatsapp",
  "atendimento automatico para imobiliarias",
  "disparo de mensagens em massa seguro whatsapp"
];

// Termos estritamente proibidos (filtro de irrelevância para empresários)
export const BLACKLIST_KEYWORDS = [
  "futebol", "jogo", "gol", "campeonato", "libertadores", "brasileirao",
  "flamengo", "corinthians", "palmeiras", "sao paulo", "vasco", "gremio", "inter",
  "reality", "bbb", "novela", "ator", "atriz", "famosos", "fofoca",
  "horoscopo", "signo", "cinema", "trailer", "filme", "serie", "anime",
  "crime", "policia", "acidente", "morte", "politica", "eleicao", "lula", "bolsonaro",
  "carnaval", "feriado", "show", "cantor", "musica", "album", "tailandia", "vietna",
  "esporte", "olimpiadas", "nba", "ufc", "boxe"
];

// Termos positivos de identificação B2B / Negócios com validação por palavra inteira
export const B2B_PATTERNS = [
  /\bempresa(s)?\b/i,
  /\bempres[aá]rio(s)?\b/i,
  /\bvenda(s)?\b/i,
  /\bcomercial\b/i,
  /\bcliente(s)?\b/i,
  /\batendimento\b/i,
  /\bmarketing\b/i,
  /\bneg[oó]cio(s)?\b/i,
  /\bfaturamento\b/i,
  /\breceita\b/i,
  /\bgest[aã]o\b/i,
  /\bcrm\b/i,
  /\bwhatsapp\b/i,
  /\bintelig[eê]ncia artificial\b/i,
  /\bia\b/i,
  /\bautoma[cç][aã]o\b/i,
  /\be-?commerce\b/i,
  /\bloja(s)?\b/i,
  /\bvarejo\b/i,
  /\bcl[ií]nica(s)?\b/i,
  /\bimobili[aá]ria(s)?\b/i,
  /\bfinanceiro\b/i,
  /\bconvers[aã]o\b/i,
  /\blead(s)?\b/i,
  /\ban[uú]ncio(s)?\b/i,
  /\blucro\b/i,
  /\bescala\b/i,
  /\bpipedrive\b/i,
  /\brd station\b/i,
  /\bhubspot\b/i
];

/**
 * Busca tendências diárias do Google Trends Brasil
 */
export async function fetchGoogleTrendsBR() {
  try {
    const url = "https://trends.google.com.br/trending/rss?geo=BR";
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (PrompTrendsBot/1.0)' } });
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
  } catch (err) {
    console.warn('⚠️ Não foi possível consultar o RSS do Google Trends:', err.message);
    return [];
  }
}

/**
 * Busca termos relacionados em alta no Google Sugestões (Brasil)
 */
export async function fetchGoogleSuggestions(query) {
  try {
    const url = `https://suggestqueries.google.com/complete/search?client=firefox&q=${encodeURIComponent(query)}&hl=pt-BR`;
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data[1]) ? data[1] : [];
  } catch {
    return [];
  }
}

/**
 * Avalia se uma palavra ou tendência é relevante para o público de empresários da Promp
 */
export function isRelevantB2BTopic(text) {
  const lower = String(text || '').toLowerCase();

  // 1. Rejeita se contiver termos de entretenimento / esportes / fofocas
  for (const black of BLACKLIST_KEYWORDS) {
    if (lower.includes(black)) return false;
  }

  // 2. Valida se possui casamento com termos de negócios e tecnologia B2B
  for (const pattern of B2B_PATTERNS) {
    if (pattern.test(lower)) return true;
  }

  return false;
}

/**
 * Motor Principal: Identifica a melhor oportunidade de palavra-chave B2B do momento
 */
export async function discoverTopB2BKeywordOpportunity() {
  console.log('🔍 [Google Trends BR] Mapeando tendências de busca em tempo real no Brasil...');

  const trends = await fetchGoogleTrendsBR();
  const relevantTrends = trends.filter(t => isRelevantB2BTopic(t.title));

  if (relevantTrends.length > 0) {
    console.log(`🎯 [Google Trends BR] Tendência B2B detectada em alta: "${relevantTrends[0].title}" (${relevantTrends[0].traffic} buscas)`);
    return {
      source: 'Google Trends BR (Tendência em Tempo Real)',
      term: relevantTrends[0].title,
      traffic: relevantTrends[0].traffic
    };
  }

  // Se não houver trending topic de massa no momento, busca sugestões orgânicas B2B
  console.log('📊 [Google Search Intent] Buscando palavras-chave comerciais de alta intenção para empresários...');
  const randomSeed = B2B_SEARCH_SEEDS[Math.floor(Math.random() * B2B_SEARCH_SEEDS.length)];
  const suggestions = await fetchGoogleSuggestions(randomSeed);

  const cleanSuggestions = suggestions.filter(s => isRelevantB2BTopic(s));
  const chosen = cleanSuggestions[0] || randomSeed;

  console.log(`💡 [Google Suggestion] Palavra-chave estratégica selecionada: "${chosen}"`);

  return {
    source: 'Google Search Intent (Volume Alto B2B)',
    term: chosen,
    traffic: 'Volume Contínuo Orgânico'
  };
}
