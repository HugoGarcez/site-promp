// Template da Proposta Comercial da Promp (A4, design da home em modo claro).
// Conteúdo baseado apenas na home (i18n pt-BR + componentes) e nas páginas de soluções.
// Usado pelo CLI (scripts/generate_proposta_comercial.mjs) e pela API (server/api/proposta.post.ts).
import fs from 'fs';
import path from 'path';
import vm from 'vm';

const pad = (n) => String(n).padStart(2, '0');
const fmt = (d) => `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()}`;
const iso = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const parseDate = (v, fb) => {
  const m = typeof v === 'string' && v.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  return m ? new Date(+m[1], +m[2] - 1, +m[3]) : fb;
};
const brl = (n) => Number(n).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const esc = (v) => String(v ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

export const PRECOS_PADRAO = { starter: 597, advance: 1897, prime: 2497 };
export const WHATSAPP_PADRAO = '5522992371763';

/** Deduz o artigo pela 1ª palavra do nome (feminino se terminar em -a, -ade, -agem, -ção/-são). */
export function deduzirArtigo(nome) {
  const primeira = String(nome || '').trim().split(/\s+/)[0].toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  return /(a|ade|agem|cao|sao)$/.test(primeira) ? 'a' : 'o';
}

/** Valores padrão de todas as variáveis (datas em YYYY-MM-DD). */
export function defaultsProposta(hoje = new Date()) {
  const fim = new Date(hoje.getFullYear(), hoje.getMonth() + 1, 0);
  return {
    cliente: '', artigo: 'auto', numero: `PRP-${hoje.getFullYear()}${pad(hoje.getMonth() + 1)}${pad(hoje.getDate())}`,
    emissao: iso(hoje), validade: iso(fim), consultor: '', whatsapp: WHATSAPP_PADRAO, precos: { ...PRECOS_PADRAO },
  };
}

const fmtWhats = (d) => {
  const n = d.replace(/^55/, '');
  if (n.length === 11) return `(${n.slice(0, 2)}) ${n.slice(2, 7)}-${n.slice(7)}`;
  if (n.length === 10) return `(${n.slice(0, 2)}) ${n.slice(2, 6)}-${n.slice(6)}`;
  return `+${d}`;
};

/**
 * Monta o HTML da proposta.
 * @param {object} opts cliente, artigo ('auto'|'a'|'o'), numero, emissao, validade (YYYY-MM-DD),
 *   consultor, whatsapp (só dígitos, com DDI), precos { starter, advance, prime }
 * @param {string} root raiz do projeto (onde ficam public/, i18n/, pages/, components/)
 */
export function buildPropostaHtml(opts = {}, root = process.cwd()) {
  const d = defaultsProposta();
  const nomeBruto = String(opts.cliente || '').trim().slice(0, 80);
  const cliente = esc(nomeBruto || 'Sua Empresa');
  const artigo = ['a', 'o'].includes(opts.artigo) ? opts.artigo : nomeBruto ? deduzirArtigo(nomeBruto) : 'a';
  // Capa: reduz o título para nomes longos caberem na linha "<Cliente> em uma"
  const coverH1 = Math.max(34, Math.min(60, Math.floor(60 * 17 / ((nomeBruto || 'Sua Empresa').length + 7))));

  const dEmissao = parseDate(opts.emissao, parseDate(d.emissao));
  const dValidade = parseDate(opts.validade, parseDate(d.validade));
  const emissao = fmt(dEmissao);
  const validade = fmt(dValidade);
  const mesNome = dValidade.toLocaleDateString('pt-BR', { month: 'long' });
  const numero = esc(String(opts.numero || d.numero).slice(0, 40));
  const consultor = esc(String(opts.consultor || '').trim().slice(0, 60));
  const whatsDigits = String(opts.whatsapp || '').replace(/\D/g, '') || WHATSAPP_PADRAO;
  const whatsFmt = fmtWhats(whatsDigits);
  const precos = {};
  for (const k of Object.keys(PRECOS_PADRAO)) {
    const v = Number(opts.precos?.[k]);
    precos[k] = Number.isFinite(v) && v > 0 ? v : PRECOS_PADRAO[k];
  }

  const ROOT = root;
  const PUB = path.join(ROOT, 'public');
  const signupUrl = 'https://app.promp.com.br/signup';
  const whatsappUrl = `https://wa.me/${whatsDigits}?text=Ol%C3%A1,%20quero%20fechar%20minha%20proposta%20Promp`;

// ── Assets embutidos em base64 ─────────────────────────────────
const mime = { '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.svg': 'image/svg+xml' };
const img = (rel) => {
  const p = path.join(PUB, rel);
  return `data:${mime[path.extname(p)]};base64,${fs.readFileSync(p).toString('base64')}`;
};
const logo = img('images/logo-fundo-claro.svg');
const integ = (n) => img(`images/integrations/${n}`);

// ── Conteúdo da home ───────────────────────────────────────────
const i18n = JSON.parse(fs.readFileSync(path.join(ROOT, 'i18n/locales/pt-BR.json'), 'utf8'));
const md = (s) => s.replace(/\*\*(.+?)\*\*/g, '<b>$1</b>');

// Testemunhos (components/TestimonialsSection.vue)
const tSrc = fs.readFileSync(path.join(ROOT, 'components/TestimonialsSection.vue'), 'utf8');
const tCtx = {};
vm.createContext(tCtx);
vm.runInContext(tSrc.match(/const testimonials = (\[[\s\S]*?\n\]);?/)[1].replace(/^/, 'var testimonials = '), tCtx);
const testimonials = tCtx.testimonials;

// Páginas de soluções (pages/solucoes/*.vue)
const solucoes = {};
for (const f of fs.readdirSync(path.join(ROOT, 'pages/solucoes')).filter((x) => x.endsWith('.vue'))) {
  const c = fs.readFileSync(path.join(ROOT, 'pages/solucoes', f), 'utf8');
  const attr = (n) => (c.match(new RegExp('\\s' + n + '="([^"]*)"')) || [])[1];
  let code = c.match(/<script setup lang="ts">([\s\S]*?)<\/script>/)[1];
  code = code.substring(code.indexOf('const whatsappLink')).replace(/\bconst\s+/g, 'var ');
  const sb = { encodeURIComponent };
  vm.createContext(sb);
  try { vm.runInContext(code, sb); } catch { /* campos opcionais */ }
  solucoes[f.replace('.vue', '')] = { badge: attr('badge'), title: attr('title'), stats: sb.heroStats || [], ba: sb.beforeAfterData };
}
const solOrder = ['demora-no-atendimento', 'atendimento-fora-do-horario', 'leads-que-nao-convertem', 'follow-up-de-leads', 'perguntas-repetitivas', 'escalar-vendas-whatsapp', 'canais-descentralizados', 'atendimento-marketplaces', 'falta-de-controle', 'integracoes-e-automacoes', 'concorrencia-com-ia'].filter((k) => solucoes[k]);

// Dores (seção "Qual a maior dor do seu negócio hoje?")
const dores = [
  ['🔴', 'Perco vendas porque demoro para responder', 'Leads esfriando enquanto você está ocupado'],
  ['🌙', 'Não consigo atender fora do horário comercial', 'Vendas perdidas à noite e fins de semana'],
  ['💰', 'Invisto em anúncios mas leads não convertem', 'Tráfego pago sem retorno'],
  ['📞', 'Não consigo fazer follow-up dos leads', 'Leads entram e ninguém acompanha'],
  ['🔁', 'Equipe gasta o dia respondendo as mesmas perguntas', '80% do tempo em FAQ, não em vendas'],
  ['📱', 'Conversas espalhadas em vários canais', 'WhatsApp, Instagram, Telegram — caos total'],
  ['🏪', 'Dificuldade em responder todos os marketplaces', 'Shopee, ML, Nuvemshop e mais — tudo espalhado'],
  ['📊', 'Não sei o que minha equipe fala com clientes', 'Sem visibilidade de métricas e qualidade'],
  ['📈', 'Quero escalar vendas pelo WhatsApp', 'Limitado por atendimento manual'],
  ['🔗', 'Preciso integrar com outras ferramentas', 'CRM, e-commerce, ERP — tudo manual'],
  ['🤖', 'Concorrentes já usam IA e estou ficando para trás', 'Modernize antes que seja tarde'],
];

// Fatos de impacto (páginas de soluções)
const fatos = [
  ['73%', 'dos negócios fecham com quem atende primeiro'],
  ['80%', 'de queda na conversão após 10 minutos sem resposta'],
  ['40%', 'das mensagens de compra chegam à noite, fins de semana e feriados'],
  ['70%+', 'dos orçamentos enviados nunca recebem um follow-up'],
];

const passos = [
  ['Conecte', 'Vincule seu WhatsApp em segundos com QR Code.'],
  ['Configure', 'Defina os gatilhos e o tom de voz da sua IA.'],
  ['Automatize', 'A Promp atende, qualifica e agenda reuniões.'],
  ['Monitore', 'Acompanhe métricas de conversão em tempo real.'],
];

const fc = i18n.features_center;
const principais = [
  [fc.config_rapid, fc.config_rapid_desc, 'M13 2L3 14h9l-1 8 10-12h-9l1-8z', '#f59e0b'],
  [fc.multi_agent, fc.multi_agent_desc, 'M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM2 21a7 7 0 0 1 14 0M17 11a3 3 0 1 0 0-6M22 21a6 6 0 0 0-5-6', '#3b82f6'],
  [fc.mass_send, fc.mass_send_desc, 'M3 11l18-8-8 18-2-8z', '#E84624'],
  [fc.crm_visual, fc.crm_visual_desc, 'M4 4h4v16H4zM10 4h4v10h-4zM16 4h4v13h-4z', '#8b5cf6'],
  [fc.human_audio, fc.human_audio_desc, 'M12 3v18M8 7v10M4 10v4M16 7v10M20 10v4', '#22c55e'],
  [fc.reports, fc.reports_desc, 'M4 20V10M10 20V4M16 20v-7M22 20H2', '#0ea5e9'],
];
const centralItems = Object.values(i18n.bento_grid.items).map((x) => [x.title, x.desc]);

const ecossistema = [
  ['Canais de Atendimento', [['WhatsApp', 'whatsapp.svg'], ['Instagram', 'instagram.svg'], ['Facebook', 'facebook.svg'], ['Telegram', 'telegram.svg'], ['Webchat', 'webchat.png'], ['Rocket.Chat', 'rocketchat.png'], ['Gmail', 'gmail.svg']]],
  ['Modelos de IA & LLMs', [['ChatGPT', 'chatgpt.svg'], ['Claude', 'claude.svg'], ['Gemini', 'gemini.svg'], ['DeepSeek', 'deepseek.svg'], ['Grok', 'grok.svg'], ['Qwen', 'qwen.svg'], ['Ollama', 'ollama.png'], ['LM Studio', 'lmstudio.png']]],
  ['E-commerce & Marketplaces', [['Mercado Livre', 'mercadolivre.svg'], ['Shopee', 'shopee.svg'], ['Shein', 'shein.svg'], ['Nuvemshop', 'nuvemshop.png'], ['WooCommerce', 'woocommerce.svg']]],
  ['Automações & Agentes', [['Dify', 'dify.png'], ['Typebot', 'typebot.svg'], ['Dialogflow', 'dialogflow.svg'], ['Hub Notificame', 'hub_notificame.svg']]],
  ['Redes Sociais & Vídeo', [['TikTok', 'tiktok.svg'], ['YouTube', 'youtube.svg'], ['LinkedIn', 'linkedin.svg'], ['Google', 'google.svg']]],
  ['Pagamentos & Finanças', [['Asaas', 'asaas.png'], ['Email Corp', 'email_corp.svg']]],
];

// ── Planos (seção de preços da home, sem Profissional Liberal) ──
const plans = [
  {
    name: 'Starter', target: 'Pequenas equipes.', price: brl(precos.starter), users: 5, id: 1, implantacao: false, specs: ['5', '2', '5 GB'],
    destaques: ['ChatFlow (chatbot)', 'Integrações de IA', 'Envio em Massa', 'Funil e Kanban', 'Agendamentos e Agenda', 'Catálogo de Produtos', 'Avaliações (NPS) e Relatórios', 'API Externa', 'WooCommerce e Nuvemshop'],
    chips: [['WhatsApp', 'whatsapp.svg'], ['Telegram', 'telegram.svg'], ['ChatGPT', 'chatgpt.svg'], ['Gemini', 'gemini.svg'], ['Integrações de IA', null]],
    features: ['5 usuários', '2 conexões', 'Envio em Massa', '5gb de galeria', 'Mensagens Rápidas', 'ChatFlow (chatbot)', 'Agendamentos', 'Aniversários', 'Integrações de IA', 'Funil e Kanban', 'Tarefas', 'Agenda', 'Agendamento Público', 'Catálogo de Produtos', 'Comentários de Redes Sociais', 'Avaliações (NPS)', 'Relatórios', 'API Externa', 'WooCommerce', 'Nuvemshop', 'Google Calendar', 'RocketChat', 'Integrações Meta (Instagram/Messenger)'],
  },
  {
    name: 'Advance', target: 'Empresas em expansão.', price: brl(precos.advance), users: 15, id: 2, featured: true, implantacao: true, specs: ['15', '5', '10 GB'],
    destaques: ['Campanhas', 'Protocolos', 'Registro de Chamadas', 'WaVoIP', 'WebPhone (SIP)', 'ChatFlow (chatbot)', 'Integrações de IA', 'Funil e Kanban', 'Avaliações (NPS) e Relatórios'],
    chips: [['WhatsApp', 'whatsapp.svg'], ['Instagram', 'instagram.svg'], ['WebChat', 'webchat.png'], ['GPT-4', 'chatgpt.svg'], ['Gemini', 'gemini.svg'], ['Grok', 'grok.svg'], ['Qwen', 'qwen.svg'], ['Integrações de IA', null]],
    features: ['15 usuários', '5 conexões', 'Campanhas', 'Envio em Massa', '10gb galeria', 'Mensagens Rápidas', 'ChatFlow (chatbot)', 'Agendamentos', 'Aniversários', 'Integrações de IA', 'Funil e Kanban', 'Tarefas', 'Agenda', 'Agendamento Público', 'Catálogo de Produtos', 'Comentários de Redes Sociais', 'Avaliações (NPS)', 'Relatórios', 'Protocolos', 'Registro de Chamadas', 'WaVoIP', 'WebPhone (SIP)', 'API Externa', 'WooCommerce', 'Nuvemshop', 'Google Calendar', 'Integrações Meta (Instagram/Messenger)'],
  },
  {
    name: 'Prime', target: 'Máxima potência e escala.', price: brl(precos.prime), users: 100, id: 3, implantacao: true, specs: ['100', '30', '20 GB'],
    destaques: ['Mercado Livre, Shopee e Shein', 'Claude, DeepSeek e Ollama/HF', 'Campanhas e Protocolos', 'WaVoIP e WebPhone (SIP)', 'Registro de Chamadas', 'ChatFlow (chatbot)', 'Integrações de IA', 'Funil e Kanban', 'Avaliações (NPS) e Relatórios'],
    chips: [['WhatsApp', 'whatsapp.svg'], ['Instagram', 'instagram.svg'], ['Telegram', 'telegram.svg'], ['WebChat', 'webchat.png'], ['Mercado Livre', 'mercadolivre.svg'], ['Shopee', 'shopee.svg'], ['Shein', 'shein.svg'], ['Claude', 'claude.svg'], ['DeepSeek', 'deepseek.svg'], ['+ Ollama/HF', 'ollama.png']],
    features: ['100 usuários', '30 conexões', 'Campanhas', 'Envio em Massa', '20gb de galeria', 'Mensagens Rápidas', 'ChatFlow (chatbot)', 'Agendamentos', 'Aniversários', 'Integrações de IA', 'Funil e Kanban', 'Tarefas', 'Agenda', 'Agendamento Público', 'Catálogo de Produtos', 'Comentários de Redes Sociais', 'Avaliações (NPS)', 'Relatórios', 'Protocolos', 'Registro de Chamadas', 'WaVoIP', 'WebPhone (SIP)', 'API Externa', 'WooCommerce', 'Nuvemshop', 'Google Calendar', 'RocketChat', 'Integrações Meta (Instagram/Messenger)'],
  },
];

const Y = true, N = false;
const matrix = [
  ['Usuários', '5', '15', '100'],
  ['Conexões', '2', '5', '30'],
  ['Galeria', '5 GB', '10 GB', '20 GB'],
  ['Mensagens Rápidas, Tarefas e Agenda', Y, Y, Y],
  ['Funil e Kanban', Y, Y, Y],
  ['ChatFlow (chatbot)', Y, Y, Y],
  ['Integrações de IA', Y, Y, Y],
  ['Envio em Massa', Y, Y, Y],
  ['Agendamentos, Aniversários e Agendamento Público', Y, Y, Y],
  ['Catálogo de Produtos', Y, Y, Y],
  ['Comentários de Redes Sociais', Y, Y, Y],
  ['Avaliações (NPS) e Relatórios', Y, Y, Y],
  ['API Externa, WooCommerce, Nuvemshop, Google Calendar', Y, Y, Y],
  ['Integrações Meta (Instagram/Messenger)', Y, Y, Y],
  ['Campanhas', N, Y, Y],
  ['Protocolos', N, Y, Y],
  ['Registro de Chamadas', N, Y, Y],
  ['WaVoIP', N, Y, Y],
  ['WebPhone (SIP)', N, Y, Y],
  ['Mercado Livre, Shopee e Shein', N, N, Y],
  ['Claude, DeepSeek e Ollama/HF', N, N, Y],
  ['Suporte vitalício com especialistas', Y, Y, Y],
  [`Implantação gratuita (até ${validade})`, 'A consultar', Y, Y],
];

const clients = ['empresa-dmboat.png', 'empresa-grossi.png', 'empresa-jit.jpeg', 'empresa-fripet.jpg', 'empresa-unifahe.png'];
const faqs = i18n.faq.items.filter((_, i) => [0, 2, 3, 4, 5, 7].includes(i));

// ── Helpers de markup ──────────────────────────────────────────
const brand = {
  WhatsApp: ['#ecfdf5', '#047857', '#bbf7d0'], Instagram: ['#fdf2f8', '#be185d', '#fbcfe8'], Telegram: ['#f0f9ff', '#0369a1', '#bae6fd'],
  ChatGPT: ['#ecfdf5', '#047857', '#bbf7d0'], 'GPT-4': ['#ecfdf5', '#047857', '#bbf7d0'], Gemini: ['#eef2ff', '#4338ca', '#c7d2fe'],
  WebChat: ['#eff6ff', '#1d4ed8', '#bfdbfe'], Grok: ['#f8fafc', '#0f172a', '#e2e8f0'], Qwen: ['#fff7ed', '#c2410c', '#fed7aa'],
  'Mercado Livre': ['#fefce8', '#854d0e', '#fde68a'], Shopee: ['#fff7ed', '#c2410c', '#fed7aa'], Shein: ['#f8fafc', '#0f172a', '#e2e8f0'],
  Claude: ['#fff7ed', '#c2410c', '#fed7aa'], DeepSeek: ['#eff6ff', '#1d4ed8', '#bfdbfe'], 'Integrações de IA': ['#faf5ff', '#7e22ce', '#e9d5ff'],
};
const chip = ([n, f]) => {
  const [bg, fg, bd] = brand[n] || ['#f8fafc', '#334155', '#e2e8f0'];
  return `<span class="chip" style="background:${bg};color:${fg};border-color:${bd}">${f ? `<img src="${integ(f)}"/>` : '<span class="ai">◔</span>'}${n}</span>`;
};
const plainChip = ([n, f]) => `<span class="pchip"><img src="${integ(f)}"/>${n}</span>`;
const ck = () => `<svg viewBox="0 0 24 24" class="ck"><path d="M5 12.5l4.2 4.2L19 7" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const ckDot = `<span class="ckdot"><svg viewBox="0 0 24 24"><path d="M6 12.5l4 4L18 8" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></span>`;
const icon = (d, c) => `<svg viewBox="0 0 24 24" class="ico" style="color:${c}"><path d="${d}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const badge = (t, cls = '') => `<span class="badge ${cls}">${t}</span>`;

let pageNo = 1;
const footer = (n = ++pageNo) => `
  <div class="pfoot">
    <img src="${logo}" class="flogo"/>
    <span>Proposta ${numero} · Preparada para ${cliente} · Válida até ${validade}</span>
    <span class="pn">${String(n).padStart(2, '0')}</span>
  </div>`;

const ribbon = `
  <div class="ribbon"><span class="pulse"></span><span><b>Condição especial até ${validade}:</b> suporte vitalício com especialistas em todos os planos + implantação gratuita nos planos Advance e Prime.</span></div>`;

// ── HTML ───────────────────────────────────────────────────────
const html = `<!DOCTYPE html>
<html lang="pt-BR"><head><meta charset="utf-8"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
<style>
  @page { size: A4; margin: 0; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  :root { --primary: #E84624; --secondary: #0E1F4A; --s900: #0f172a; --s700: #334155; --s600: #475569; --s500: #64748b; --s400: #94a3b8; --s200: #e2e8f0; --s100: #f1f5f9; --s50: #f8fafc; --green: #22c55e; }
  html, body { font-family: 'Inter', system-ui, sans-serif; color: var(--s900); -webkit-print-color-adjust: exact; print-color-adjust: exact; -webkit-font-smoothing: antialiased; }
  .page { width: 210mm; height: 297mm; position: relative; overflow: hidden; page-break-after: always; padding: 17mm 15mm 22mm; background: #fff; }
  .page:last-child { page-break-after: auto; }
  .page.alt { background: var(--s50); }
  .page.alt2 { background: var(--s100); }
  .dots { background-color: var(--s50); background-image: radial-gradient(#cbd5e1 1px, transparent 1px); background-size: 18px 18px; }
  .center { text-align: center; }
  .page.vc { display: flex; flex-direction: column; justify-content: center; padding-bottom: 26mm; }
  .z { position: relative; z-index: 2; }

  .badge { display: inline-flex; align-items: center; gap: 6px; padding: 4px 11px; border-radius: 99px; font-size: 10.5px; font-weight: 700; background: #fdece7; color: var(--primary); border: 1px solid #f8cfc4; letter-spacing: .02em; }
  .badge.navy { background: #e8ebf2; color: var(--secondary); border-color: #c9cfdd; text-transform: uppercase; }
  .badge.up { text-transform: uppercase; letter-spacing: .12em; }
  .badge .d { width: 6px; height: 6px; border-radius: 50%; background: var(--primary); }
  h1 { font-weight: 900; letter-spacing: -.035em; line-height: 1.04; }
  h2 { font-size: 32px; font-weight: 800; letter-spacing: -.03em; line-height: 1.12; margin-top: 10px; }
  h2 .navy { color: var(--secondary); }
  h2 .pri { color: var(--primary); }
  h2 .soft { color: var(--s500); font-weight: 400; }
  .sub { font-size: 13.5px; line-height: 1.6; color: var(--s600); margin-top: 8px; }
  .center .sub { max-width: 150mm; margin-left: auto; margin-right: auto; }
  .card { background: #fff; border: 1px solid var(--s200); border-radius: 18px; }

  .pfoot { position: absolute; left: 15mm; right: 15mm; bottom: 9mm; display: flex; justify-content: space-between; align-items: center; font-size: 8.5px; color: var(--s400); border-top: 1px solid var(--s200); padding-top: 8px; }
  .flogo { height: 12px; }
  .pn { font-weight: 700; color: var(--s500); }

  .ribbon { display: flex; align-items: center; gap: 10px; margin-top: 14px; padding: 12px 16px; border-radius: 14px; background: #fff7f5; border: 1px solid #f8cfc4; font-size: 11px; line-height: 1.5; color: var(--s700); }
  .ribbon b { color: var(--primary); }
  .pulse { width: 8px; height: 8px; border-radius: 50%; background: var(--primary); flex-shrink: 0; }

  /* Capa */
  .cover { padding: 15mm 16mm; display: flex; flex-direction: column; background: radial-gradient(circle at 105% 28%, #fde3db 0, #f8fafc 48%) , var(--s50); }
  .cover .top { display: flex; justify-content: space-between; align-items: center; padding-bottom: 14px; border-bottom: 1px solid var(--s200); }
  .cover .top img { height: 30px; }
  .cover .top .meta { font-size: 9px; color: var(--s500); text-align: right; line-height: 1.6; }
  .cover .top .meta b { color: var(--s900); }
  .cover .mid { margin: auto 0; }
  .cover h1 { font-size: 60px; margin-top: 18px; }
  .cover h1 .wa { color: #25D366; }
  .cover h1 .hl { position: relative; display: inline-block; padding: 0 2px; margin-top: 4px; }
  .cover h1 .hl::after { content: ''; position: absolute; left: 0; right: 0; bottom: 6px; height: 8px; border-radius: 99px; background: #f9c9bc; }
  .cover h1 .hl span { position: relative; z-index: 1; color: #1e293b; }
  .cover .lead { font-size: 15px; color: var(--s600); line-height: 1.6; max-width: 140mm; margin-top: 18px; }
  .cover .proof { display: flex; align-items: center; gap: 12px; margin-top: 18px; font-size: 11px; color: var(--s500); }
  .cover .proof .av { display: flex; }
  .cover .proof .av img { width: 28px; height: 28px; border-radius: 50%; border: 2px solid #fff; object-fit: cover; background: #fff; margin-left: -8px; }
  .cover .proof .av img:first-child { margin-left: 0; }
  .cover .kpis { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-top: 24px; }
  .kpi { padding: 12px 14px; display: flex; align-items: center; gap: 10px; }
  .kpi .ki { width: 32px; height: 32px; border-radius: 9px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
  .kpi .ki svg { width: 17px; height: 17px; }
  .kpi small { display: block; font-size: 9.5px; color: var(--s500); font-weight: 500; }
  .kpi b { font-size: 18px; font-weight: 800; }
  .offer { margin-top: 18px; padding: 18px 20px; display: grid; grid-template-columns: 1fr auto; gap: 18px; align-items: center; border: 1.5px solid #f4b3a3; background: #fff; border-radius: 18px; }
  .offer .t { font-size: 17px; font-weight: 800; letter-spacing: -.02em; line-height: 1.25; }
  .offer .t span { color: var(--primary); }
  .offer p { font-size: 11px; color: var(--s500); margin-top: 5px; line-height: 1.5; }
  .offer .date { background: var(--primary); color: #fff; border-radius: 12px; padding: 10px 14px; text-align: center; }
  .offer .date small { display: block; font-size: 7.5px; letter-spacing: .14em; text-transform: uppercase; opacity: .9; font-weight: 700; }
  .offer .date b { font-size: 16px; font-weight: 800; }
  .cover .for { display: flex; gap: 36px; padding-top: 14px; border-top: 1px solid var(--s200); }
  .cover .for small { display: block; font-size: 8px; letter-spacing: .16em; text-transform: uppercase; color: var(--s400); font-weight: 700; margin-bottom: 3px; }
  .cover .for b { font-size: 12.5px; }

  /* Dores */
  .dores { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-top: 22px; }
  .dor { padding: 15px 16px; }
  .dor .e { font-size: 22px; }
  .dor b { display: block; font-size: 12.5px; font-weight: 700; margin: 8px 0 4px; line-height: 1.3; }
  .dor p { font-size: 10.5px; color: var(--s500); line-height: 1.4; }
  .dor.cta { border: 1.5px dashed #f4b3a3; background: #fff7f5; }
  .dor.cta b { color: var(--primary); }
  .fatos { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-top: 22px; }
  .fato { padding: 16px; background: var(--secondary); color: #fff; border-radius: 16px; }
  .fato b { font-size: 28px; font-weight: 900; letter-spacing: -.03em; color: #fff; display: block; }
  .fato span { font-size: 10.5px; color: #cbd5e1; line-height: 1.4; display: block; margin-top: 3px; }
  .fato:nth-child(2n) { background: var(--primary); }
  .fato:nth-child(2n) span { color: #ffe4dc; }
  .src { font-size: 8px; color: var(--s400); margin-top: 6px; }

  /* Solução */
  .sol-hero { display: grid; grid-template-columns: 1.15fr 1fr; gap: 20px; align-items: center; }
  .sol-hero h2 { font-size: 27px; }
  .sol-hero h2 .big { font-size: 33px; font-weight: 900; color: var(--secondary); }
  .pills { display: flex; gap: 8px; margin-top: 12px; }
  .pill { display: inline-flex; align-items: center; gap: 6px; padding: 6px 12px; border-radius: 99px; font-size: 10.5px; font-weight: 700; }
  .pill.g { background: #f0fdf4; color: #16a34a; border: 1px solid #dcfce7; }
  .pill.b { background: #eff6ff; color: #2563eb; border: 1px solid #dbeafe; }
  .pill .d { width: 6px; height: 6px; border-radius: 50%; background: var(--green); }
  .kb { padding: 14px; }
  .kb h5 { font-size: 8px; letter-spacing: .14em; text-transform: uppercase; color: var(--s400); font-weight: 700; margin-bottom: 6px; }
  .kb .f { display: flex; align-items: center; gap: 8px; padding: 8px; border: 1px solid var(--s200); border-radius: 10px; margin-top: 6px; font-size: 10px; font-weight: 600; }
  .kb .f .tag { font-size: 7.5px; font-weight: 800; padding: 3px 5px; border-radius: 5px; }
  .kb .f .bar { flex: 1; height: 4px; border-radius: 4px; background: var(--secondary); margin-left: 6px; }
  .kb .f .pct { font-size: 8.5px; color: var(--s500); }
  .kb .bubble { margin-top: 7px; padding: 8px 11px; border-radius: 12px; font-size: 9.8px; line-height: 1.45; }
  .kb .bubble.u { background: var(--primary); color: #fff; font-weight: 600; margin-left: 30px; border-top-right-radius: 3px; }
  .kb .bubble.a { background: var(--s50); border: 1px solid var(--s200); color: var(--s700); margin-right: 20px; border-top-left-radius: 3px; }
  .steps { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-top: 18px; position: relative; }
  .steps::before { content: ''; position: absolute; top: 24px; left: 12%; right: 12%; height: 1px; background: var(--s200); }
  .step { text-align: center; position: relative; }
  .step .n { width: 48px; height: 48px; border-radius: 50%; background: #fff; border: 1px solid var(--s200); margin: 0 auto; display: flex; align-items: center; justify-content: center; font-size: 17px; font-weight: 700; color: var(--s400); }
  .step:first-child .n { border: 2.5px solid var(--primary); color: var(--s900); }
  .step b { display: block; font-size: 14px; font-weight: 800; margin-top: 10px; }
  .step p { font-size: 10.5px; color: var(--s600); margin-top: 4px; line-height: 1.45; }
  .bento { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 22px; }
  .bento .card { padding: 18px; }
  .bento .bi { width: 30px; height: 30px; border-radius: 10px; display: flex; align-items: center; justify-content: center; margin-bottom: 9px; }
  .bento .bi svg { width: 16px; height: 16px; }
  .bento b { font-size: 14.5px; font-weight: 800; display: block; letter-spacing: -.01em; }
  .bento p { font-size: 11px; color: var(--s600); line-height: 1.55; margin-top: 5px; }
  .bento ul { margin-top: 7px; }
  .bento li { list-style: none; display: flex; align-items: center; gap: 7px; font-size: 9.5px; color: var(--s600); padding: 2px 0; }
  .ckdot { width: 13px; height: 13px; border-radius: 50%; background: #f97316; display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0; }
  .ckdot svg { width: 9px; height: 9px; }

  /* Resultados por solução */
  .sols { display: grid; grid-template-columns: 1fr 1fr; gap: 9px; margin-top: 16px; }
  .sol { padding: 12px 16px; }
  .sol .bdg { font-size: 8.5px; font-weight: 800; letter-spacing: .1em; text-transform: uppercase; color: var(--primary); }
  .sol b { display: block; font-size: 12px; font-weight: 700; line-height: 1.35; margin: 4px 0 8px; }
  .sol .st { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
  .sol .st > div { border-left: 2px solid #f4b3a3; padding: 1px 0 1px 8px; }
  .sol .st strong { display: block; font-size: 15px; font-weight: 900; color: var(--secondary); letter-spacing: -.02em; }
  .sol .st span { display: block; font-size: 8.5px; color: var(--s500); line-height: 1.3; margin-top: 1px; }
  .ba { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 14px; }
  .ba > div { padding: 14px 16px; border-radius: 16px; }
  .ba .bef { background: #fef2f2; border: 1px solid #fecaca; }
  .ba .aft { background: #f0fdf4; border: 1px solid #bbf7d0; }
  .ba h5 { font-size: 12.5px; font-weight: 800; margin-bottom: 6px; }
  .ba .bef h5 { color: #b91c1c; }
  .ba .aft h5 { color: #15803d; }
  .ba li { list-style: none; font-size: 10.5px; color: var(--s700); line-height: 1.4; padding: 3px 0; display: flex; gap: 6px; }
  .ba .x { color: #ef4444; font-weight: 800; }
  .ba .v { color: #16a34a; font-weight: 800; }

  /* Funcionalidades */
  .feat6 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-top: 22px; }
  .feat6 .card { padding: 18px; }
  .feat6 .fi { width: 34px; height: 34px; border-radius: 10px; display: flex; align-items: center; justify-content: center; margin-bottom: 8px; }
  .feat6 .ico { width: 18px; height: 18px; }
  .feat6 b { font-size: 13.5px; font-weight: 800; display: block; }
  .feat6 p { font-size: 10.8px; color: var(--s600); line-height: 1.45; margin-top: 4px; }
  .items { display: flex; flex-wrap: wrap; justify-content: center; gap: 8px; margin-top: 16px; }
  .items div { background: #fff; border: 1px solid var(--s200); border-radius: 99px; padding: 6px 13px 6px 7px; display: inline-flex; align-items: center; gap: 7px; font-size: 10.8px; font-weight: 600; color: var(--s700); }
  .more { margin-top: 14px; font-size: 11px; color: var(--s600); text-align: center; }
  .more b { color: var(--primary); }
  .eco { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 22px; }
  .eco .card { padding: 18px; }
  .eco h5 { font-size: 13px; font-weight: 800; margin-bottom: 12px; }
  .eco .row { display: flex; flex-wrap: wrap; gap: 7px; }
  .eco .pchip { font-size: 10.5px; padding: 5px 10px 5px 6px; background: #fff; }
  .eco .pchip img { width: 15px; height: 15px; }
  .pchip { display: inline-flex; align-items: center; gap: 4px; padding: 3px 7px 3px 4px; border-radius: 99px; border: 1px solid var(--s200); background: var(--s50); font-size: 8px; font-weight: 600; color: var(--s700); }
  .pchip img { width: 11px; height: 11px; object-fit: contain; }

  /* Bônus */
  .bonus { margin-top: 16px; padding: 20px 22px; display: grid; grid-template-columns: 56px 1fr; gap: 16px; position: relative; }
  .bonus .bi { width: 56px; height: 56px; border-radius: 16px; display: flex; align-items: center; justify-content: center; }
  .bonus .bi svg { width: 28px; height: 28px; }
  .bonus .lbl { font-size: 8.5px; letter-spacing: .16em; text-transform: uppercase; font-weight: 800; color: var(--s400); }
  .bonus h3 { font-size: 22px; font-weight: 900; letter-spacing: -.025em; margin: 4px 0 6px; }
  .bonus p { font-size: 11.5px; color: var(--s600); line-height: 1.6; }
  .bonus ul { margin-top: 12px; display: grid; grid-template-columns: 1fr 1fr; gap: 7px 14px; }
  .bonus li { list-style: none; font-size: 11px; display: flex; gap: 7px; align-items: center; color: var(--s700); line-height: 1.35; }
  .bonus .stamp { position: absolute; top: 16px; right: 18px; font-size: 8px; font-weight: 800; letter-spacing: .1em; text-transform: uppercase; padding: 5px 10px; border-radius: 99px; }
  .bonus.sup { border: 1.5px solid #c9cfdd; }
  .bonus.sup .bi { background: #e8ebf2; color: var(--secondary); }
  .bonus.sup .stamp { background: var(--secondary); color: #fff; }
  .bonus.imp { border: 1.5px solid #f4b3a3; }
  .bonus.imp .bi { background: #fdece7; color: var(--primary); }
  .bonus.imp .stamp { background: var(--primary); color: #fff; }
  .elig { margin-top: 12px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px; }
  .elig div { border-radius: 10px; padding: 9px 12px; font-size: 11px; display: flex; justify-content: space-between; align-items: center; border: 1px solid var(--s200); background: var(--s50); }
  .elig div b { font-weight: 800; }
  .elig .ok { color: #15803d; font-weight: 800; }
  .elig .q { color: var(--s500); font-weight: 700; }
  .urg { margin-top: 16px; padding: 16px 20px; border-radius: 16px; background: var(--secondary); color: #fff; display: flex; justify-content: space-between; align-items: center; gap: 16px; }
  .urg b { font-size: 15px; font-weight: 800; }
  .urg p { font-size: 11px; color: #cbd5e1; margin-top: 3px; }
  .urg .dt { background: var(--primary); border-radius: 12px; padding: 9px 14px; text-align: center; flex-shrink: 0; }
  .urg .dt small { display: block; font-size: 7.5px; letter-spacing: .14em; text-transform: uppercase; font-weight: 700; }
  .urg .dt span { font-size: 16px; font-weight: 800; }

  /* Planos */
  .plans { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-top: 18px; align-items: stretch; }
  .plan { padding: 20px 18px; display: flex; flex-direction: column; position: relative; overflow: hidden; }
  .plan.feat { background: #0f172a; color: #fff; border: 2px solid var(--primary); }
  .plan .rec { position: absolute; top: 0; right: 0; background: var(--primary); color: #fff; font-size: 8.5px; font-weight: 800; letter-spacing: .06em; padding: 4px 9px; border-bottom-left-radius: 10px; }
  .plan h3 { font-size: 19px; font-weight: 800; }
  .plan .tg { font-size: 11px; color: var(--s500); margin-top: 2px; }
  .plan.feat .tg { color: var(--s400); }
  .plan .price { margin-top: 12px; display: flex; flex-wrap: nowrap; align-items: baseline; gap: 4px; }
  .plan .price b { white-space: nowrap; font-size: 25px; font-weight: 800; letter-spacing: -.03em; }
  .plan .price span { font-size: 11px; color: var(--s500); }
  .plan.feat .price span { color: var(--s400); }
  .plan .peru { font-size: 10px; color: #16a34a; font-weight: 700; margin-top: 2px; }
  .plan.feat .peru { color: #4ade80; }
  .plan .gift { margin-top: 14px; border-radius: 12px; padding: 9px 11px; font-size: 10px; line-height: 1.6; background: var(--s50); border: 1px solid var(--s200); color: var(--s700); }
  .plan .gift .row { display: flex; justify-content: space-between; gap: 6px; }
  .plan .gift .ok { color: var(--primary); font-weight: 800; }
  .plan .gift .q { color: var(--s500); font-weight: 700; }
  .plan.feat .gift { background: #1e293b; border-color: #334155; color: #e2e8f0; }
  .plan.feat .gift .ok { color: #ff8a6b; }
  .chips { display: flex; flex-wrap: wrap; gap: 5px; margin-top: 14px; }
  .chip { display: inline-flex; align-items: center; gap: 4px; padding: 3.5px 8px 3.5px 5px; border-radius: 7px; border: 1px solid; font-size: 9px; font-weight: 700; }
  .chip img { width: 12px; height: 12px; object-fit: contain; }
  .chip .ai { font-size: 9px; line-height: 1; }
  .plan.feat .chip { background: #1e293b !important; border-color: #334155 !important; color: #e2e8f0 !important; }
  .plan ul { margin-top: 14px; padding-top: 12px; border-top: 1px solid var(--s100); flex: 1; }
  .plan .lh { font-size: 9px; font-weight: 800; letter-spacing: .12em; text-transform: uppercase; color: var(--s400); margin-bottom: 6px; }
  .plan .specs { display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px; margin-top: 14px; }
  .plan .specs div { text-align: center; border: 1px solid var(--s200); border-radius: 10px; padding: 7px 4px; }
  .plan .specs b { display: block; font-size: 15px; font-weight: 800; }
  .plan .specs span { font-size: 8.5px; color: var(--s500); }
  .plan.feat .specs div { border-color: #334155; background: #1e293b; }
  .plan.feat .specs span { color: var(--s400); }
  .plan .full { font-size: 9.5px; color: var(--s500); margin-top: 8px; }
  .plan.feat .full { color: var(--s400); }
  .plan.feat ul { border-color: #1e293b; }
  .plan li { list-style: none; font-size: 11px; display: flex; gap: 7px; align-items: center; padding: 4px 0; color: var(--s600); }
  .plan.feat li { color: #cbd5e1; }
  .plan li .ck { width: 12px; height: 12px; color: var(--primary); flex-shrink: 0; }
  .plan.feat li .ck { color: #ff8a6b; }
  .plan li.hl { font-weight: 700; color: var(--s900); }
  .plan.feat li.hl { color: #fff; }
  .plan .cta { margin-top: 14px; display: block; text-align: center; border-radius: 10px; padding: 10px; font-size: 11.5px; font-weight: 700; text-decoration: none; border: 1px solid var(--s200); color: var(--s900); background: #fff; }
  .plan.feat .cta { background: var(--primary); border: 0; color: #fff; }

  /* Tabela */
  table { width: 100%; border-collapse: separate; border-spacing: 0; margin-top: 20px; font-size: 11px; background: #fff; border: 1px solid var(--s200); border-radius: 16px; overflow: hidden; }
  th { text-align: center; padding: 12px 8px; font-size: 13.5px; font-weight: 800; border-bottom: 1px solid var(--s200); background: var(--s50); }
  th:first-child { text-align: left; font-size: 8.5px; letter-spacing: .14em; text-transform: uppercase; color: var(--s500); font-weight: 700; padding-left: 14px; }
  th.feat { background: #0f172a; color: #fff; }
  th small { display: block; font-size: 10px; font-weight: 600; color: var(--s500); margin-top: 2px; }
  th.feat small { color: #ff8a6b; }
  td { padding: 7.5px 8px; border-bottom: 1px solid var(--s100); text-align: center; color: var(--s700); }
  td:first-child { text-align: left; padding-left: 14px; }
  tr:last-child td { border-bottom: 0; }
  td.feat { background: #f8fafc; font-weight: 700; }
  tr.bon td { background: #fff7f5; font-weight: 700; color: #9a3412; }
  tr.bon td.feat { background: #fdece7; }
  td .ck { width: 13px; height: 13px; color: var(--green); }
  tr.bon td .ck { color: var(--primary); }
  td .no { color: #cbd5e1; }
  td .q { font-size: 10px; color: var(--s500); font-weight: 700; }

  /* Prova social */
  .tgrid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-top: 20px; }
  .tcard { padding: 16px 18px; display: flex; flex-direction: column; }
  .tcard .hd { display: flex; justify-content: space-between; align-items: center; }
  .tcard .stars { color: #fbbf24; font-size: 11px; letter-spacing: 2px; }
  .tcard .met { font-size: 9px; font-weight: 700; color: #047857; background: #ecfdf5; border: 1px solid #a7f3d0; padding: 3px 8px; border-radius: 99px; }
  .tcard p { font-size: 11px; line-height: 1.55; font-style: italic; color: var(--s700); margin: 8px 0 10px; flex: 1; }
  .tcard .who { display: flex; align-items: center; gap: 9px; border-top: 1px solid var(--s100); padding-top: 9px; }
  .tcard .who img { width: 34px; height: 34px; border-radius: 50%; object-fit: cover; border: 2px solid #f8cfc4; }
  .tcard .who b { font-size: 11.5px; display: block; }
  .tcard .who span { font-size: 9.5px; color: var(--s500); }
  .tcard .who span i { font-style: normal; color: var(--s700); }
  .nums { display: flex; justify-content: space-around; gap: 30px; margin-top: 16px; padding: 12px; border-top: 1px solid var(--s200); border-bottom: 1px solid var(--s200); font-size: 11px; color: var(--s500); }
  .nums > span { text-align: center; }
  .nums b { display: block; font-size: 20px; font-weight: 800; margin-bottom: 2px; }
  .nums .g { color: #10b981; }
  .nums .n { color: var(--secondary); }
  .logos { margin-top: 14px; text-align: center; }
  .logos h5 { font-size: 8.5px; letter-spacing: .16em; text-transform: uppercase; color: var(--s400); font-weight: 700; margin-bottom: 10px; }
  .logos .row { display: flex; justify-content: center; gap: 20px; align-items: center; }
  .logos img { height: 34px; border-radius: 6px; }
  .partners { margin-top: 14px; display: flex; gap: 14px; align-items: center; justify-content: center; }
  .partners img { height: 64px; }
  .partners p { font-size: 10px; color: var(--s600); line-height: 1.5; max-width: 85mm; }
  .partners b { display: block; font-size: 12px; color: var(--s900); margin-bottom: 2px; }

  /* Fechamento */
  .faq { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 20px; }
  .faq .card { padding: 16px 18px; }
  .faq b { font-size: 12.5px; font-weight: 800; display: block; margin-bottom: 4px; }
  .faq p { font-size: 10.5px; color: var(--s600); line-height: 1.5; }
  .faq p b { display: inline; font-size: inherit; margin: 0; }
  .final { margin-top: 16px; border-radius: 20px; padding: 24px; background: #E84624; color: #fff; text-align: center; position: relative; overflow: hidden; }
  .final::before { content: ''; position: absolute; width: 300px; height: 300px; border-radius: 50%; background: rgba(255,255,255,.08); top: -150px; right: -80px; }
  .final::after { content: ''; position: absolute; width: 220px; height: 220px; border-radius: 50%; background: rgba(0,0,0,.06); bottom: -120px; left: -60px; }
  .final > * { position: relative; z-index: 1; }
  .final h3 { font-size: 26px; font-weight: 900; letter-spacing: -.025em; line-height: 1.15; }
  .final p { font-size: 12px; margin-top: 7px; opacity: .92; line-height: 1.5; }
  .final .btns { margin-top: 14px; display: flex; justify-content: center; gap: 10px; }
  .final a { text-decoration: none; font-size: 12px; font-weight: 800; padding: 10px 20px; border-radius: 12px; }
  .final a.w { background: #fff; color: var(--primary); }
  .final a.o { background: rgba(0,0,0,.15); color: #fff; border: 1px solid rgba(255,255,255,.4); }
  .sign { margin-top: 22px; display: grid; grid-template-columns: 1fr 1fr; gap: 30px; }
  .sign > div { border-top: 1px solid var(--s400); padding-top: 7px; font-size: 10px; color: var(--s500); line-height: 1.5; }
  .sign b { color: var(--s900); }
</style></head>
<body>

<!-- 1. CAPA -->
<section class="page cover">
    <div class="z top">
    <img src="${logo}"/>
    <div class="meta"><b>Proposta Comercial</b><br/>Nº ${numero} · Emitida em ${emissao}</div>
  </div>
  <div class="z mid">
    ${badge('<span class="d"></span>Plataforma de Automação #1')}
    <h1 style="font-size:${coverH1}px">Transforme ${artigo}<br/><span class="wa">${cliente}</span> em uma<br/><span class="hl"><span>Máquina de Vendas</span></span></h1>
    <p class="lead">${i18n.hero.subtitle}</p>
    <div class="proof">
      <div class="av">${clients.slice(0, 3).map((c) => `<img src="${img('images/clients/' + c)}"/>`).join('')}</div>
      <span>+500 empresas confiam na Promp</span>
    </div>
    <div class="kpis">
      ${[['Conversão', '+ 47%', '#dcfce7', '#16a34a', 'M3 17l6-6 4 4 8-8M14 7h7v7'], ['1ª resposta', '< 3s', '#fee2e2', '#E84624', 'M13 2L3 14h9l-1 8 10-12h-9l1-8z'], ['Atendimento', '24/7', '#e0e7ff', '#0E1F4A', 'M12 6v6l4 2M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z'], ['Satisfação', '4.9/5', '#fef3c7', '#d97706', 'M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z']].map(([l, v, bg, c, d]) => `<div class="card kpi"><div class="ki" style="background:${bg};color:${c}"><svg viewBox="0 0 24 24"><path d="${d}" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg></div><div><small>${l}</small><b>${v}</b></div></div>`).join('')}
    </div>
    <div class="offer">
      <div>
        <div class="t">Suporte vitalício com especialistas <span>+ implantação gratuita</span></div>
        <p>Suporte vitalício em todos os planos. Implantação gratuita nos planos Advance e Prime para contratações até ${validade}.</p>
      </div>
      <div class="date"><small>Válida até</small><b>${validade}</b></div>
    </div>
  </div>
  <div class="z for">
    <div><small>Preparada para</small><b>${cliente}</b></div>
    <div><small>Planos</small><b>Starter · Advance · Prime</b></div>
    <div><small>Contato</small><b>${consultor ? `${consultor} · ` : ''}WhatsApp ${whatsFmt}</b></div>
  </div>
</section>

<!-- 2. DORES -->
<section class="page">
  <div class="center">
    ${badge('Descubra sua solução', 'up')}
    <h2>Qual a maior <span class="pri">dor</span> do seu negócio hoje?</h2>
    <p class="sub">Cada uma delas está custando vendas agora. A Promp resolve todas em uma única plataforma.</p>
  </div>
  <div class="dores">
    ${dores.map(([e, t, d]) => `<div class="card dor"><div class="e">${e}</div><b>${t}</b><p>${d}</p></div>`).join('')}
    <div class="card dor cta"><div class="e">✅</div><b>A Promp resolve todas elas</b><p>Veja nas próximas páginas como, e com quais resultados.</p></div>
  </div>
  <div class="fatos">${fatos.map(([v, l]) => `<div class="fato"><b>${v}</b><span>${l}</span></div>`).join('')}</div>
  <p class="src">Dados apresentados nas páginas de soluções da Promp.</p>
  ${footer()}
</section>

<!-- 3. A SOLUÇÃO -->
<section class="page alt">
  <div class="sol-hero">
    <div>
      ${badge('A solução definitiva', 'navy')}
      <h2>A IA da sua empresa<br/><span class="big">pronta em 15 minutos</span><br/><span class="soft">e treinada para vender</span></h2>
      <p class="sub">Chega de configurações complexas. Com a Promp, você sobe seus documentos, site ou manuais e nossa IA aprende tudo sobre seu negócio instantaneamente. Tenha um especialista digital que trabalha 24h por dia, qualificando e fechando vendas sem você precisar mover um dedo.</p>
      <div class="pills"><span class="pill g"><span class="d"></span>IA Humanizada</span><span class="pill b">⚡ Setup em Segundos</span></div>
    </div>
    <div class="card kb">
      <h5>Base de conhecimento</h5>
      <div class="f"><span class="tag" style="background:#eff6ff;color:#2563eb">PDF</span>Cidades Atendidas.pdf<span class="bar"></span><span class="pct">100%</span></div>
      <div class="f"><span class="tag" style="background:#f0fdf4;color:#16a34a">XLSX</span>Tabela de Preços V2.xlsx<span class="bar" style="background:#22c55e"></span><span class="pct">100%</span></div>
      <h5 style="margin-top:12px">Conversa em tempo real</h5>
      <div class="bubble u">QUERO MARCAR UM CARDIOLOGISTA</div>
      <div class="bubble a">Olá! Temos horários disponíveis com o Dr. Ricardo para esta semana. Quinta às 14h ou Sexta às 09h. Qual prefere? 🩺</div>
      <div class="bubble u">QUINTA ÀS 14H POR FAVOR</div>
      <div class="bubble a">Agendado! ✅ Quinta-feira, 14h com Dr. Ricardo. Já enviei a confirmação para seu WhatsApp.</div>
    </div>
  </div>
  <div class="center" style="margin-top:20px">
    <h2 style="font-size:22px">${i18n.how_it_works.title}</h2>
    <p class="sub" style="margin-top:4px">${i18n.how_it_works.subtitle}</p>
  </div>
  <div class="steps">${passos.map(([t, d], i) => `<div class="step"><div class="n">${i + 1}</div><b>${t}</b><p>${d}</p></div>`).join('')}</div>
  <div class="bento">
    <div class="card"><div class="bi" style="background:#f1f5f9;color:#0f172a"><svg viewBox="0 0 24 24"><path d="M21.2 15.9A10 10 0 1 1 8 2.8M22 12A10 10 0 0 0 12 2v10z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div><b>${i18n.bento_grid.human_ai.title}</b><p>${i18n.bento_grid.human_ai.desc}</p></div>
    <div class="card"><div class="bi" style="background:#f3e8ff;color:#9333ea"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div><b>${i18n.bento_grid.security.title}</b><p>${i18n.bento_grid.security.desc}</p></div>
    <div class="card"><div class="bi" style="background:#dbeafe;color:#2563eb"><svg viewBox="0 0 24 24"><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div><b>${i18n.bento_grid.support.title}</b><p>${i18n.bento_grid.support.desc}</p></div>
    <div class="card"><div class="bi" style="background:#fee2e2;color:#E84624"><svg viewBox="0 0 24 24"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div><b>${i18n.bento_grid.integration.title}</b><p>${i18n.bento_grid.integration.desc}</p></div>
  </div>
  ${footer()}
</section>

<!-- 4. RESULTADOS POR SOLUÇÃO -->
<section class="page">
  <div class="center">
    ${badge('Soluções Promp', 'up')}
    <h2>Uma solução para cada dor.<br/><span class="navy">Resultados para cada uma.</span></h2>
  </div>
  <div class="sols">
    ${solOrder.map((k) => { const s = solucoes[k]; return `<div class="card sol"><div class="bdg">${s.badge}</div><b>${s.title}</b><div class="st">${s.stats.map((x) => `<div><strong>${x.value}</strong><span>${x.label}</span></div>`).join('')}</div></div>`; }).join('')}
    <div class="card sol" style="background:var(--secondary);border-color:var(--secondary);display:flex;flex-direction:column;justify-content:center"><div class="bdg" style="color:#ff8a6b">Tudo incluso</div><b style="color:#fff;font-size:12px;margin-bottom:0">Todas as soluções acima em uma única assinatura — sem fidelidade.</b></div>
  </div>
  ${footer()}
</section>

<!-- 5. ANTES x DEPOIS -->
<section class="page alt">
  <div class="center">
    ${badge('Antes × Depois', 'up')}
    <h2>O que muda na sua operação<br/><span class="navy">com a Promp</span></h2>
  </div>
  ${['demora-no-atendimento', 'atendimento-fora-do-horario', 'follow-up-de-leads', 'falta-de-controle'].filter((k) => solucoes[k]?.ba).map((k) => { const b = solucoes[k].ba; return `<div class="ba"><div class="bef"><h5>✕ ${b.before.title}</h5><ul>${b.before.items.map((i) => `<li><span class="x">✕</span>${i}</li>`).join('')}</ul></div><div class="aft"><h5>✓ ${b.after.title}</h5><ul>${b.after.items.map((i) => `<li><span class="v">✓</span>${i}</li>`).join('')}</ul></div></div>`; }).join('')}
  ${ribbon}
  ${footer()}
</section>

<!-- 6. CENTRAL DE FUNCIONALIDADES -->
<section class="page">
  <div class="center">
    ${badge('Funcionalidades', 'up')}
    <h2>Central de Funcionalidades</h2>
    <p class="sub">Um ecossistema completo para dominar o atendimento e as vendas da sua empresa em um só lugar.</p>
  </div>
  <div class="feat6">${principais.map(([t, d, i, c]) => `<div class="card"><div class="fi" style="background:${c}1a">${icon(i, c)}</div><b>${t}</b><p>${d}</p></div>`).join('')}</div>
  <div class="items">${centralItems.map(([t]) => `<div>${ckDot}${t}</div>`).join('')}</div>
  <p class="more"><b>E muito mais:</b> Grupos, Notas, Log de Ligações, Protocolos, Aniversários...</p>
  ${footer()}
</section>

<!-- 6b. ECOSSISTEMA -->
<section class="page alt">
  <div class="center">
    ${badge('Integrações', 'up')}
    <h2>Conecte tudo o que<br/><span class="navy">sua empresa já usa</span></h2>
    <p class="sub">Mais de 30 canais, modelos de IA, ferramentas de automação e marketplaces plugados à Promp sem complicação.</p>
  </div>
  <div class="eco">${ecossistema.map(([t, list]) => `<div class="card"><h5>${t}</h5><div class="row">${list.map(plainChip).join('')}</div></div>`).join('')}</div>
  <div class="urg" style="margin-top:22px"><div><b>${i18n.bento_grid.integration.title}</b><p>${i18n.bento_grid.integration.desc} API Externa disponível em todos os planos.</p></div></div>
  ${footer()}
</section>

<!-- 7. BÔNUS -->
<section class="page">
  <div class="center">
    ${badge('Exclusivo desta proposta', 'up')}
    <h2>Você não contrata só um software.<br/><span class="pri">Contrata um time de especialistas.</span></h2>
    <p class="sub">Dois bônus que tornam a sua implantação segura e o seu resultado contínuo.</p>
  </div>
  <div class="card bonus sup">
    <span class="stamp">Todos os planos · Vitalício</span>
    <div class="bi"><svg viewBox="0 0 24 24"><path d="M3 18v-6a9 9 0 0 1 18 0v6M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
    <div>
      <div class="lbl">Bônus 01</div>
      <h3>Suporte vitalício com especialistas</h3>
      <p>Enquanto você for cliente Promp, terá especialistas humanos ao seu lado. Ajustamos sua IA, otimizamos seus fluxos e ajudamos sua equipe a extrair o máximo da plataforma — sem custo adicional.</p>
      <ul>
        <li>${ckDot}Atendimento por especialistas reais</li>
        <li>${ckDot}Ajustes e otimização contínua da IA</li>
        <li>${ckDot}Apoio na criação de ChatFlows e campanhas</li>
        <li>${ckDot}Orientação para vender mais no WhatsApp</li>
        <li>${ckDot}Ajuda com integrações e API</li>
        <li>${ckDot}Sem custo adicional, enquanto durar a assinatura</li>
      </ul>
    </div>
  </div>
  <div class="card bonus imp">
    <span class="stamp">Só até ${validade}</span>
    <div class="bi"><svg viewBox="0 0 24 24"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09zM12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2zM9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
    <div>
      <div class="lbl">Bônus 02</div>
      <h3>Implantação gratuita</h3>
      <p>Nossos especialistas colocam sua operação no ar com você: conectamos seus canais, treinamos a IA com seus documentos e entregamos tudo funcionando.</p>
      <ul>
        <li>${ckDot}Conexão do WhatsApp e demais canais</li>
        <li>${ckDot}Treinamento da IA com documentos, site e manuais</li>
        <li>${ckDot}Configuração de ChatFlow, Funil e Kanban</li>
        <li>${ckDot}Filas, departamentos, equipes e permissões</li>
        <li>${ckDot}Integrações com seu e-commerce e sistemas</li>
        <li>${ckDot}Treinamento do seu time na plataforma</li>
      </ul>
      <div class="elig">
        <div><b>Starter</b><span class="q">A consultar</span></div>
        <div><b>Advance</b><span class="ok">✓ Gratuita</span></div>
        <div><b>Prime</b><span class="ok">✓ Gratuita</span></div>
      </div>
    </div>
  </div>
  <div class="urg">
    <div><b>Implantação gratuita disponível apenas até o fim de ${mesNome}.</b><p>Nossa agenda de implantação é limitada. Garanta sua vaga antes que as condições mudem.</p></div>
    <div class="dt"><small>Encerra em</small><span>${validade}</span></div>
  </div>
  ${footer()}
</section>

<!-- 8. PLANOS -->
<section class="page alt2">
  <div class="center">
    <h2>${i18n.pricing.title}</h2>
    <p class="sub">${i18n.pricing.subtitle} Cobrança mensal, sem fidelidade.</p>
  </div>
  <div class="plans">
    ${plans.map((p) => `
    <div class="card plan ${p.featured ? 'feat' : ''}">
      ${p.featured ? '<div class="rec">RECOMENDADO</div>' : ''}
      <h3>${p.name}</h3>
      <div class="tg">${p.target}</div>
      <div class="price"><b>R$ ${p.price}</b><span>/mês</span></div>
      <div class="peru">≈ R$ ${(parseFloat(p.price.replace('.', '').replace(',', '.')) / p.users).toFixed(2).replace('.', ',')} por usuário/mês</div>
      <div class="gift">
        <div class="row"><span>Suporte vitalício</span><span class="ok">✓ Incluso</span></div>
        <div class="row"><span>Implantação</span>${p.implantacao ? `<span class="ok">✓ Grátis até ${validade.slice(0, 5)}</span>` : '<span class="q">A consultar</span>'}</div>
      </div>
      <div class="specs"><div><b>${p.specs[0]}</b><span>usuários</span></div><div><b>${p.specs[1]}</b><span>conexões</span></div><div><b>${p.specs[2]}</b><span>galeria</span></div></div>
      <div class="chips">${p.chips.slice(0, 6).map(chip).join('')}</div>
      <ul><div class="lh">Destaques</div>${p.destaques.map((f) => `<li>${ck()}${f}</li>`).join('')}</ul>
      <div class="full">Ver todos os ${p.features.length - 3} recursos no comparativo</div>
      <a class="cta" href="${signupUrl}?plano=${p.id}">Assinar ${p.name}</a>
    </div>`).join('')}
  </div>
  ${ribbon}
  ${footer()}
</section>

<!-- 9. COMPARATIVO -->
<section class="page">
  <div class="center">
    ${badge('Comparativo completo', 'up')}
    <h2>Escolha o plano ideal <span class="navy">para o seu momento</span></h2>
  </div>
  <table>
    <thead><tr><th>Recurso</th>${plans.map((p) => `<th class="${p.featured ? 'feat' : ''}">${p.name}<small>R$ ${p.price}/mês</small></th>`).join('')}</tr></thead>
    <tbody>
      ${matrix.map((r) => `<tr class="${/Suporte|Implanta/.test(r[0]) ? 'bon' : ''}"><td>${r[0]}</td>${r.slice(1).map((v, i) => `<td class="${i === 1 ? 'feat' : ''}">${v === true ? ck() : v === false ? '<span class="no">—</span>' : v === 'A consultar' ? '<span class="q">A consultar</span>' : v}</td>`).join('')}</tr>`).join('')}
    </tbody>
  </table>
  ${ribbon}
  ${footer()}
</section>

<!-- 10. PROVA SOCIAL -->
<section class="page alt">
  <div class="center">
    ${badge('⭐ Prova social comprovada', 'up')}
    <h2>Quem usa a Promp, <span class="navy">escala sem limites</span></h2>
    <p class="sub">Mais de 500 empresas confiam na nossa IA para acelerar vendas, qualificar leads e encantar clientes 24 horas por dia.</p>
  </div>
  <div class="tgrid">
    ${testimonials.map((t) => `<div class="card tcard"><div class="hd"><span class="stars">★★★★★</span><span class="met">${t.highlight || ''}</span></div><p>"${t.text}"</p><div class="who"><img src="${t.avatar}"/><div><b>${t.name}</b><span>${t.role} · <i>${t.company}</i></span></div></div></div>`).join('')}
  </div>
  <div class="nums"><span><b class="g">4.9/5</b>Média de satisfação dos usuários</span><span><b class="n">+10 milhões</b>De mensagens automatizadas</span><span><b class="g">99.9%</b>Uptime garantido</span></div>
  <div class="logos"><h5>Empresas que escalam com a Promp</h5><div class="row">${clients.map((c) => `<img src="${img('images/clients/' + c)}"/>`).join('')}</div></div>
  <div class="partners">
    <img src="${img('images/meta-provider-2026.png')}"/>
    <img src="${img('images/whatsapp-provider-2026.png')}"/>
    <p><b>Parceiro Oficial Meta & WhatsApp</b>Integração oficial, estável e segura com as plataformas da Meta.</p>
  </div>
  ${footer()}
</section>

<!-- 11. FECHAMENTO -->
<section class="page">
  <div class="center">
    <h2>${i18n.faq.title}</h2>
    <p class="sub">${i18n.faq.subtitle}</p>
  </div>
  <div class="faq">${faqs.map((f) => `<div class="card"><b>${f.question}</b><p>${md(f.answer)}</p></div>`).join('')}</div>
  <div class="final">
    <h3>${i18n.final_cta.title}</h3>
    <p>${i18n.final_cta.subtitle}<br/>Garanta suporte vitalício e implantação gratuita (Advance e Prime) até ${validade}.</p>
    <div class="btns">
      <a class="w" href="${whatsappUrl}">${i18n.final_cta.button_whatsapp}</a>
      <a class="o" href="${signupUrl}?plano=2">Assinar Agora</a>
    </div>
  </div>
  <div class="sign">
    <div><b>PROMP IA BUSINESS LTDA</b><br/>CNPJ 60.671.760/0001-52 · promp.com.br</div>
    <div><b>De acordo — ${cliente}</b><br/>Assinatura e data</div>
  </div>
  ${footer()}
</section>

</body></html>`;
  return html;
}

/** Renderiza o HTML em PDF (A4) com Puppeteer. Retorna Uint8Array. */
export async function renderPropostaPdf(html, { browser } = {}) {
  const own = !browser;
  if (own) {
    const puppeteer = (await import('puppeteer')).default;
    browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-dev-shm-usage'] });
  }
  const page = await browser.newPage();
  try {
    // HTML não tem JS; só libera data URIs, Google Fonts e avatares dos depoimentos
    await page.setJavaScriptEnabled(false);
    await page.setRequestInterception(true);
    page.on('request', (r) => {
      const u = r.url();
      if (u.startsWith('data:') || u === 'about:blank' || /^https:\/\/(fonts\.googleapis\.com|fonts\.gstatic\.com|i\.pravatar\.cc)\//.test(u)) r.continue();
      else r.abort();
    });
    await page.setContent(html, { waitUntil: 'networkidle0', timeout: 90000 });
    return await page.pdf({ format: 'A4', printBackground: true, preferCSSPageSize: true });
  } finally {
    await page.close().catch(() => {});
    if (own) await browser.close();
  }
}
