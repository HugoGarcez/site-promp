<script setup>
import { ref, computed } from 'vue';

const activeCategory = ref('all');
const isExpanded = ref(false);

const categories = [
  { id: 'all', label: 'Todos os Canais & IAs' },
  { id: 'channels', label: 'Canais & Atendimento' },
  { id: 'ecommerce', label: 'E-commerce & Marketplaces' },
  { id: 'social', label: 'Redes Sociais & Vídeo' },
  { id: 'ai', label: 'Modelos de IA & LLMs' },
  { id: 'automation', label: 'Automações & Pagamentos' }
];

// Cards de Categoria para o Diagrama de Orquestração Superior
const categoryClusters = [
  {
    id: 'channels',
    title: 'Canais de Atendimento',
    subtitle: 'Omnichannel em Tempo Real',
    badge: 'MENSAGERIA & SOCIAL',
    badgeColor: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
    borderColor: 'hover:border-emerald-500/50',
    logos: [
      { name: 'WhatsApp', icon: '/images/integrations/whatsapp.svg' },
      { name: 'Instagram', icon: '/images/integrations/instagram.svg' },
      { name: 'Facebook', icon: '/images/integrations/facebook.svg' },
      { name: 'Telegram', icon: '/images/integrations/telegram.svg' },
      { name: 'Webchat', icon: '/images/integrations/webchat.png' },
      { name: 'Rocket.Chat', icon: '/images/integrations/rocketchat.png' },
      { name: 'Gmail', icon: '/images/integrations/gmail.svg' }
    ]
  },
  {
    id: 'ai',
    title: 'Modelos de IA & LLMs',
    subtitle: 'Raciocínio & Multimodalidade',
    badge: 'CÉREBRO ARTIFICIAL',
    badgeColor: 'text-sky-500 bg-sky-500/10 border-sky-500/20',
    borderColor: 'hover:border-sky-500/50',
    logos: [
      { name: 'ChatGPT', icon: '/images/integrations/chatgpt.svg' },
      { name: 'Claude', icon: '/images/integrations/claude.svg' },
      { name: 'Gemini', icon: '/images/integrations/gemini.svg' },
      { name: 'DeepSeek', icon: '/images/integrations/deepseek.svg' },
      { name: 'Grok', icon: '/images/integrations/grok.svg' },
      { name: 'Qwen', icon: '/images/integrations/qwen.svg' },
      { name: 'Ollama', icon: '/images/integrations/ollama.svg' },
      { name: 'LM Studio', icon: '/images/integrations/lmstudio.png' }
    ]
  },
  {
    id: 'ecommerce',
    title: 'E-commerce & Marketplaces',
    subtitle: 'Vendas & Pedidos Automatizados',
    badge: 'VENDAS DIGITAIS',
    badgeColor: 'text-orange-500 bg-orange-500/10 border-orange-500/20',
    borderColor: 'hover:border-orange-500/50',
    logos: [
      { name: 'Mercado Livre', icon: '/images/integrations/mercadolivre.svg' },
      { name: 'Shopee', icon: '/images/integrations/shopee.svg' },
      { name: 'Shein', icon: '/images/integrations/shein.svg' },
      { name: 'Nuvemshop', icon: '/images/integrations/nuvemshop.png' },
      { name: 'WooCommerce', icon: '/images/integrations/woocommerce.svg' },
      { name: 'OLX', icon: '/images/integrations/olx.png' }
    ]
  },
  {
    id: 'automation',
    title: 'Automações & Agentes',
    subtitle: 'Workflows & Conexão de APIs',
    badge: 'FLUXOS & AGENTES',
    badgeColor: 'text-rose-500 bg-rose-500/10 border-rose-500/20',
    borderColor: 'hover:border-rose-500/50',
    logos: [
      { name: 'N8N', icon: '/images/integrations/n8n.svg' },
      { name: 'Dify', icon: '/images/integrations/dify.png' },
      { name: 'Typebot', icon: '/images/integrations/typebot.svg' },
      { name: 'Dialogflow', icon: '/images/integrations/dialogflow.svg' },
      { name: 'Hub Notificame', icon: '/images/integrations/hub_notificame.svg' }
    ]
  },
  {
    id: 'social',
    title: 'Redes Sociais & Vídeo',
    subtitle: 'Conversão de Engajamento',
    badge: 'SOCIAL ENGAGE',
    badgeColor: 'text-purple-500 bg-purple-500/10 border-purple-500/20',
    borderColor: 'hover:border-purple-500/50',
    logos: [
      { name: 'TikTok', icon: '/images/integrations/tiktok.svg' },
      { name: 'YouTube', icon: '/images/integrations/youtube.svg' },
      { name: 'LinkedIn', icon: '/images/integrations/linkedin.svg' },
      { name: 'Google', icon: '/images/integrations/google.svg' }
    ]
  },
  {
    id: 'payments',
    title: 'Pagamentos & Finanças',
    subtitle: 'Pix, Links & Baixa no Chat',
    badge: 'CHECKOUT DIRETO',
    badgeColor: 'text-teal-500 bg-teal-500/10 border-teal-500/20',
    borderColor: 'hover:border-teal-500/50',
    logos: [
      { name: 'Asaas', icon: '/images/integrations/asaas.svg' },
      { name: 'Email Corp', icon: '/images/integrations/email_corp.svg' }
    ]
  }
];

// Todas as 32 Integrações para a listagem completa
const allIntegrations = [
  // 1. Canais & Atendimento
  {
    id: 'whatsapp',
    name: 'WhatsApp Oficial',
    subtitle: 'Meta Cloud API',
    desc: 'Atendimento 24/7 com áudios humanizados, disparos em massa e catálogo integrado.',
    category: 'channels',
    badge: 'CANAL OFICIAL',
    badgeColor: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20',
    color: '#25D366',
    logo: '/images/integrations/whatsapp.svg'
  },
  {
    id: 'instagram',
    name: 'Instagram Oficial',
    subtitle: 'DMs & Stories Auto-reply',
    desc: 'Transforma comentários, menções em Stories e mensagens diretas em conversões.',
    category: 'channels',
    badge: 'SOCIAL / DIRECT',
    badgeColor: 'bg-pink-500/10 text-pink-600 border-pink-500/20',
    color: '#E1306C',
    logo: '/images/integrations/instagram.svg'
  },
  {
    id: 'facebook',
    name: 'Facebook Oficial',
    subtitle: 'Messenger & Feed Lead Gen',
    desc: 'Atendimento unificado da sua página e captura automática de leads de anúncios.',
    category: 'channels',
    badge: 'MESSENGER',
    badgeColor: 'bg-blue-500/10 text-blue-600 border-blue-500/20',
    color: '#1877F2',
    logo: '/images/integrations/facebook.svg'
  },
  {
    id: 'telegram',
    name: 'Telegram',
    subtitle: 'Grupos, Canais & Bots',
    desc: 'Notificações instantâneas, atendimento veloz e automação para comunidades.',
    category: 'channels',
    badge: 'MENSAGERIA',
    badgeColor: 'bg-sky-500/10 text-sky-600 border-sky-500/20',
    color: '#0088CC',
    logo: '/images/integrations/telegram.svg'
  },
  {
    id: 'webchat',
    name: 'Webchat',
    subtitle: 'Widget Nativo no Site',
    desc: 'Captura de visitantes em tempo real no seu site com retenção instantânea.',
    category: 'channels',
    badge: 'WEB WIDGET',
    badgeColor: 'bg-indigo-500/10 text-indigo-600 border-indigo-500/20',
    color: '#6366F1',
    logo: '/images/integrations/webchat.png'
  },
  {
    id: 'rocketchat',
    name: 'Rocket.Chat',
    subtitle: 'Omnichannel & Equipe',
    desc: 'Integração para comunicação interna, transbordo humano e helpdesk seguro.',
    category: 'channels',
    badge: 'OMNICHANNEL',
    badgeColor: 'bg-rose-500/10 text-rose-600 border-rose-500/20',
    color: '#F5455C',
    logo: '/images/integrations/rocketchat.png'
  },
  {
    id: 'gmail',
    name: 'Gmail (Webmail)',
    subtitle: 'Google Workspace Sync',
    desc: 'Respostas inteligentes para e-mails recebidos e acompanhamento de propostas.',
    category: 'channels',
    badge: 'EMAIL SYNC',
    badgeColor: 'bg-red-500/10 text-red-600 border-red-500/20',
    color: '#EA4335',
    logo: '/images/integrations/gmail.svg'
  },
  {
    id: 'email_corp',
    name: 'Email (IMAP/SMTP)',
    subtitle: 'Servidor Corporativo',
    desc: 'Conexão direta com qualquer provedor de e-mail corporativo para triagem de tickets.',
    category: 'channels',
    badge: 'EMAIL PROTOCOL',
    badgeColor: 'bg-slate-500/10 text-slate-600 border-slate-500/20',
    color: '#64748B',
    logo: '/images/integrations/email_corp.svg'
  },

  // 2. E-commerce & Marketplaces
  {
    id: 'mercadolivre',
    name: 'Mercado Livre',
    subtitle: 'Perguntas & Pós-Venda',
    desc: 'Resposta em segundos a dúvidas de anúncios e rastreamento automatizado.',
    category: 'ecommerce',
    badge: 'MARKETPLACE',
    badgeColor: 'bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-500/20',
    color: '#FFE600',
    logo: '/images/integrations/mercadolivre.svg'
  },
  {
    id: 'shopee',
    name: 'Shopee',
    subtitle: 'Chat da Loja & Pedidos',
    desc: 'Atendimento aos clientes da loja com status de entrega e aumento de reputação.',
    category: 'ecommerce',
    badge: 'ECOMMERCE',
    badgeColor: 'bg-orange-500/10 text-orange-600 border-orange-500/20',
    color: '#EE4D2D',
    logo: '/images/integrations/shopee.svg'
  },
  {
    id: 'shein',
    name: 'Shein',
    subtitle: 'Marketplace Seller',
    desc: 'Gestão de mensagens de compradores e suporte inteligente para vestuário e moda.',
    category: 'ecommerce',
    badge: 'MARKETPLACE',
    badgeColor: 'bg-neutral-500/10 text-neutral-700 dark:text-neutral-300 border-neutral-500/20',
    color: '#111827',
    logo: '/images/integrations/shein.svg'
  },
  {
    id: 'nuvemshop',
    name: 'Nuvemshop',
    subtitle: 'Carrinho & Estoque',
    desc: 'Recuperação de carrinho abandonado e consulta de pedidos direto no chat.',
    category: 'ecommerce',
    badge: 'LOJA VIRTUAL',
    badgeColor: 'bg-blue-600/10 text-blue-700 dark:text-blue-400 border-blue-600/20',
    color: '#2B3481',
    logo: '/images/integrations/nuvemshop.png'
  },
  {
    id: 'woocommerce',
    name: 'WooCommerce',
    subtitle: 'WordPress Commerce',
    desc: 'Sincronização de catálogo, cupons promocionais e confirmação de checkout.',
    category: 'ecommerce',
    badge: 'ECOMMERCE',
    badgeColor: 'bg-purple-500/10 text-purple-600 border-purple-500/20',
    color: '#96588A',
    logo: '/images/integrations/woocommerce.svg'
  },
  {
    id: 'olx',
    name: 'OLX',
    subtitle: 'Classificados & Chat',
    desc: 'Qualificação de compradores e negociação automática em anúncios classificados.',
    category: 'ecommerce',
    badge: 'CLASSIFICADOS',
    badgeColor: 'bg-orange-400/10 text-orange-600 border-orange-400/20',
    color: '#8626E3',
    logo: '/images/integrations/olx.png'
  },

  // 3. Redes Sociais & Conteúdo
  {
    id: 'tiktok',
    name: 'TikTok',
    subtitle: 'Comentários & Leads',
    desc: 'Engajamento instantâneo em vídeos virais e direcionamento para o funil.',
    category: 'social',
    badge: 'VIRAL SOCIAL',
    badgeColor: 'bg-slate-900/10 text-slate-800 dark:text-slate-200 border-slate-700/20',
    color: '#000000',
    logo: '/images/integrations/tiktok.svg'
  },
  {
    id: 'youtube',
    name: 'YouTube',
    subtitle: 'Comentários & Comunidade',
    desc: 'Triagem de dúvidas em vídeos e links automáticos para produtos promovidos.',
    category: 'social',
    badge: 'VÍDEO & SOCIAL',
    badgeColor: 'bg-red-500/10 text-red-600 border-red-500/20',
    color: '#FF0000',
    logo: '/images/integrations/youtube.svg'
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    subtitle: 'B2B & Social Selling',
    desc: 'Prospecção executiva e qualificação de tomadores de decisão corporativos.',
    category: 'social',
    badge: 'B2B NETWORK',
    badgeColor: 'bg-sky-600/10 text-sky-700 dark:text-sky-400 border-sky-600/20',
    color: '#0A66C2',
    logo: '/images/integrations/linkedin.svg'
  },
  {
    id: 'google',
    name: 'Google',
    subtitle: 'Google Meu Negócio & Ads',
    desc: 'Respostas a avaliações, mensagens do perfil da empresa e leads de campanhas.',
    category: 'social',
    badge: 'LOCAL & BUSCA',
    badgeColor: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20',
    color: '#4285F4',
    logo: '/images/integrations/google.svg'
  },

  // 4. Modelos de IA & LLMs
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    subtitle: 'OpenAI GPT-4o / o3',
    desc: 'Raciocínio avançado, respostas em linguagem natural e entendimento de contexto.',
    category: 'ai',
    badge: 'LLM CORE',
    badgeColor: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20',
    color: '#10A37F',
    logo: '/images/integrations/chatgpt.svg'
  },
  {
    id: 'claude',
    name: 'Claude',
    subtitle: 'Anthropic 3.5 / 3.7',
    desc: 'Comunicação empática, raciocínio detalhado e escrita precisa para negócios.',
    category: 'ai',
    badge: 'LLM RESEARCH',
    badgeColor: 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20',
    color: '#D97706',
    logo: '/images/integrations/claude.svg'
  },
  {
    id: 'gemini',
    name: 'Gemini',
    subtitle: 'Google DeepMind',
    desc: 'Processamento multimodal ultrarrápido com análise de documentos, imagens e áudios.',
    category: 'ai',
    badge: 'MULTIMODAL',
    badgeColor: 'bg-blue-500/10 text-blue-600 border-blue-500/20',
    color: '#1A73E8',
    logo: '/images/integrations/gemini.svg'
  },
  {
    id: 'deepseek',
    name: 'DeepSeek',
    subtitle: 'R1 / V3 Reasoning',
    desc: 'Raciocínio lógico e matemático de alta performance para resolução de problemas.',
    category: 'ai',
    badge: 'REASONING',
    badgeColor: 'bg-cyan-500/10 text-cyan-600 border-cyan-500/20',
    color: '#0EA5E9',
    logo: '/images/integrations/deepseek.svg'
  },
  {
    id: 'grok',
    name: 'Grok',
    subtitle: 'xAI Intelligence',
    desc: 'Análise de tendências em tempo real e visão direta dos fluxos informacionais.',
    category: 'ai',
    badge: 'REALTIME AI',
    badgeColor: 'bg-slate-700/10 text-slate-800 dark:text-slate-300 border-slate-600/20',
    color: '#000000',
    logo: '/images/integrations/grok.svg'
  },
  {
    id: 'qwen',
    name: 'Qwen',
    subtitle: 'Alibaba Cloud AI',
    desc: 'Modelo multilíngue de alta capacidade para comércio global e operações complexas.',
    category: 'ai',
    badge: 'GLOBAL AI',
    badgeColor: 'bg-purple-500/10 text-purple-600 border-purple-500/20',
    color: '#6366F1',
    logo: '/images/integrations/qwen.svg'
  },
  {
    id: 'ollama',
    name: 'Ollama',
    subtitle: 'Modelos Locais & On-Premise',
    desc: 'Execução de IAs privadas no seu próprio servidor com privacidade de dados total.',
    category: 'ai',
    badge: 'LOCAL / PRIVADO',
    badgeColor: 'bg-stone-500/10 text-stone-700 dark:text-stone-300 border-stone-500/20',
    color: '#44403C',
    logo: '/images/integrations/ollama.svg'
  },
  {
    id: 'lmstudio',
    name: 'LM Studio',
    subtitle: 'Custom Local LLMs',
    desc: 'Integração direta com endpoints de inferência local para máxima soberania.',
    category: 'ai',
    badge: 'LOCAL STUDIO',
    badgeColor: 'bg-slate-600/10 text-slate-700 dark:text-slate-300 border-slate-600/20',
    color: '#3B82F6',
    logo: '/images/integrations/lmstudio.png'
  },

  // 5. Automações, Agentes, Bots & Pagamentos
  {
    id: 'n8n',
    name: 'N8N',
    subtitle: 'Workflow Automation',
    desc: 'Disparo de fluxos no code/low code para conectar a Promp a mais de 500 apps.',
    category: 'automation',
    badge: 'WORKFLOW',
    badgeColor: 'bg-rose-500/10 text-rose-600 border-rose-500/20',
    color: '#EA4B71',
    logo: '/images/integrations/n8n.svg'
  },
  {
    id: 'dify',
    name: 'Dify',
    subtitle: 'AI Agent Workflows',
    desc: 'Construção de aplicações com RAG, base de conhecimento e agentes colaborativos.',
    category: 'automation',
    badge: 'AGENT RAG',
    badgeColor: 'bg-indigo-500/10 text-indigo-600 border-indigo-500/20',
    color: '#155EEF',
    logo: '/images/integrations/dify.png'
  },
  {
    id: 'typebot',
    name: 'Typebot',
    subtitle: 'Conversational Flow',
    desc: 'Criação de fluxos conversacionais dinâmicos integrados com os agentes Promp.',
    category: 'automation',
    badge: 'FLOW BUILDER',
    badgeColor: 'bg-sky-500/10 text-sky-600 border-sky-500/20',
    color: '#0042DA',
    logo: '/images/integrations/typebot.svg'
  },
  {
    id: 'dialogflow',
    name: 'Dialogflow',
    subtitle: 'Google Conversational AI',
    desc: 'Detecção avançada de intenções e entidades para automação de atendimento.',
    category: 'automation',
    badge: 'NLP ENGINE',
    badgeColor: 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20',
    color: '#FF9800',
    logo: '/images/integrations/dialogflow.svg'
  },
  {
    id: 'hub_notificame',
    name: 'Hub Notificame',
    subtitle: 'Notificações & Multi-Canal',
    desc: 'Disparos transacionais de alertas, status de pedidos e comunicações críticas.',
    category: 'automation',
    badge: 'NOTIFICAÇÕES',
    badgeColor: 'bg-violet-500/10 text-violet-600 border-violet-500/20',
    color: '#7C3AED',
    logo: '/images/integrations/hub_notificame.svg'
  },
  {
    id: 'asaas',
    name: 'Asaas',
    subtitle: 'Cobranças & Pix no Chat',
    desc: 'Geração de cobranças Pix, boletos e links de pagamento com baixa automática.',
    category: 'automation',
    badge: 'PAGAMENTOS',
    badgeColor: 'bg-teal-500/10 text-teal-600 border-teal-500/20',
    color: '#00A389',
    logo: '/images/integrations/asaas.svg'
  }
];

// Badges laterais flutuantes que reforçam o ecossistema
const floatingPillsLeft = [
  { name: 'Claude', logo: '/images/integrations/claude.svg' },
  { name: 'DeepSeek', logo: '/images/integrations/deepseek.svg' },
  { name: 'Gemini', logo: '/images/integrations/gemini.svg' },
  { name: 'Ollama', logo: '/images/integrations/ollama.svg' },
  { name: 'Typebot', logo: '/images/integrations/typebot.svg' }
];

const floatingPillsRight = [
  { name: 'Mercado Livre', logo: '/images/integrations/mercadolivre.svg' },
  { name: 'Shopee', logo: '/images/integrations/shopee.svg' },
  { name: 'TikTok', logo: '/images/integrations/tiktok.svg' },
  { name: 'Gmail', logo: '/images/integrations/gmail.svg' },
  { name: 'Asaas', logo: '/images/integrations/asaas.svg' }
];

const filteredIntegrations = computed(() => {
  if (activeCategory.value === 'all') return allIntegrations;
  return allIntegrations.filter(item => item.category === activeCategory.value);
});

// Apenas 8 visíveis inicialmente quando não expandido
const visibleIntegrations = computed(() => {
  if (isExpanded.value || activeCategory.value !== 'all') {
    return filteredIntegrations.value;
  }
  return filteredIntegrations.value.slice(0, 8);
});
</script>

<template>
  <section id="ecossistema" class="py-24 md:py-32 bg-slate-50 dark:bg-[#070B14] relative overflow-hidden transition-colors duration-300">
    <!-- Dot Matrix Pattern de Fundo Elegante -->
    <div class="absolute inset-0 bg-dot-pattern opacity-60 dark:opacity-30 pointer-events-none"></div>

    <!-- Glows radiais suaves -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[850px] md:h-[850px] bg-primary/10 dark:bg-primary/15 blur-[120px] rounded-full pointer-events-none -z-0"></div>
    <div class="absolute top-1/4 left-10 w-80 h-80 bg-amber-500/5 blur-[100px] rounded-full pointer-events-none"></div>
    <div class="absolute bottom-1/4 right-10 w-80 h-80 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none"></div>

    <div class="container mx-auto px-4 relative z-10 max-w-7xl">
      <!-- Header da Seção Estilo Playbook -->
      <div class="text-center max-w-4xl mx-auto mb-16 md:mb-20">
        <p class="text-xs md:text-sm font-bold tracking-[0.25em] text-slate-500 dark:text-slate-400 uppercase mb-5">
          O ECOSSISTEMA COMPLETO DE ATENDIMENTO
        </p>

        <div class="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-6">
          <div class="inline-flex items-center bg-slate-900 text-white dark:bg-white dark:text-slate-950 font-extrabold text-2xl sm:text-4xl md:text-5xl px-6 py-2.5 rounded-2xl shadow-xl tracking-tight">
            Escale sua operação
          </div>
          <span class="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center gap-3">
            com
            <img src="/icon.png" alt="Promp" class="w-10 h-10 md:w-14 md:h-14 rounded-2xl object-contain shadow-lg shadow-primary/25" />
          </span>
        </div>

        <p class="text-xs sm:text-sm font-semibold tracking-[0.18em] text-slate-600 dark:text-slate-300 uppercase">
          ORQUESTRAÇÃO INTEGRADA — A PROMP COMO NÚCLEO INTELIGENTE
        </p>
      </div>

      <!-- DIAGRAMA CENTRAL DE CATEGORIAS SIMPLIFICADAS COM LOGOS DENTRO (Desktop / Tablet) -->
      <div class="relative hidden lg:block my-8 py-8 px-4">
        <!-- Badges Flutuantes Laterais (Esquerda) -->
        <div class="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20 pointer-events-none opacity-80 xl:opacity-100">
          <div
            v-for="(pill, idx) in floatingPillsLeft"
            :key="pill.name"
            class="flex items-center gap-2.5 px-3 py-1.5 bg-slate-900 text-slate-100 border border-slate-800 rounded-full shadow-md text-xs font-semibold transition-all duration-300 hover:scale-105"
            :style="{ transform: `translateX(${Math.sin(idx) * 10}px)` }"
          >
            <div class="w-5 h-5 rounded-md bg-slate-950 flex items-center justify-center p-0.5">
              <img :src="pill.logo" :alt="pill.name" class="w-full h-full object-contain" />
            </div>
            {{ pill.name }}
          </div>
        </div>

        <!-- Badges Flutuantes Laterais (Direita) -->
        <div class="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20 pointer-events-none opacity-80 xl:opacity-100 items-end">
          <div
            v-for="(pill, idx) in floatingPillsRight"
            :key="pill.name"
            class="flex items-center gap-2.5 px-3 py-1.5 bg-slate-900 text-slate-100 border border-slate-800 rounded-full shadow-md text-xs font-semibold transition-all duration-300 hover:scale-105"
            :style="{ transform: `translateX(${-Math.sin(idx) * 10}px)` }"
          >
            <div class="w-5 h-5 rounded-md bg-slate-950 flex items-center justify-center p-0.5">
              <img :src="pill.logo" :alt="pill.name" class="w-full h-full object-contain" />
            </div>
            {{ pill.name }}
          </div>
        </div>

        <!-- Linhas SVG Conectoras Dinâmicas -->
        <svg class="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1000 600" fill="none" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="lineGrad" x1="50%" y1="10%" x2="50%" y2="100%">
              <stop offset="0%" stop-color="#E84624" stop-opacity="0.9" />
              <stop offset="50%" stop-color="#F59E0B" stop-opacity="0.6" />
              <stop offset="100%" stop-color="#F97316" stop-opacity="0.3" />
            </linearGradient>

            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          <!-- Linhas conectando o Núcleo Central (500, 120) aos 6 clusters de categorias -->
          <path d="M 450 120 C 330 120, 250 150, 230 195" stroke="url(#lineGrad)" stroke-width="2" stroke-dasharray="4 4" class="opacity-75" />
          <circle r="3.5" fill="#E84624" filter="url(#glow)">
            <animateMotion dur="3s" repeatCount="indefinite" path="M 450 120 C 330 120, 250 150, 230 195" />
          </circle>

          <path d="M 550 120 C 670 120, 750 150, 770 195" stroke="url(#lineGrad)" stroke-width="2" stroke-dasharray="4 4" class="opacity-75" />
          <circle r="3.5" fill="#E84624" filter="url(#glow)">
            <animateMotion dur="3.2s" repeatCount="indefinite" path="M 550 120 C 670 120, 750 150, 770 195" />
          </circle>

          <path d="M 465 150 C 370 210, 280 270, 230 350" stroke="url(#lineGrad)" stroke-width="2" stroke-dasharray="4 4" class="opacity-75" />
          <circle r="3.5" fill="#F59E0B" filter="url(#glow)">
            <animateMotion dur="3.5s" repeatCount="indefinite" path="M 465 150 C 370 210, 280 270, 230 350" />
          </circle>

          <path d="M 535 150 C 630 210, 720 270, 770 350" stroke="url(#lineGrad)" stroke-width="2" stroke-dasharray="4 4" class="opacity-75" />
          <circle r="3.5" fill="#F59E0B" filter="url(#glow)">
            <animateMotion dur="3.4s" repeatCount="indefinite" path="M 535 150 C 630 210, 720 270, 770 350" />
          </circle>

          <path d="M 480 160 C 430 250, 380 370, 360 460" stroke="url(#lineGrad)" stroke-width="2" stroke-dasharray="4 4" class="opacity-75" />
          <circle r="3.5" fill="#E84624" filter="url(#glow)">
            <animateMotion dur="3.8s" repeatCount="indefinite" path="M 480 160 C 430 250, 380 370, 360 460" />
          </circle>

          <path d="M 520 160 C 570 250, 620 370, 640 460" stroke="url(#lineGrad)" stroke-width="2" stroke-dasharray="4 4" class="opacity-75" />
          <circle r="3.5" fill="#E84624" filter="url(#glow)">
            <animateMotion dur="3.9s" repeatCount="indefinite" path="M 520 160 C 570 250, 620 370, 640 460" />
          </circle>
        </svg>

        <!-- Container do Hub Central e Clusters -->
        <div class="max-w-5xl mx-auto flex flex-col items-center">
          <!-- 1. BLOCO NÚCLEO CENTRAL: PROMP -->
          <div class="relative z-10 w-full max-w-sm mb-10 transform hover:scale-[1.02] transition-transform duration-300">
            <div class="relative bg-white dark:bg-slate-900 border-2 border-primary/40 dark:border-primary/50 rounded-2xl p-5 shadow-2xl shadow-primary/15 backdrop-blur-xl">
              <div class="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-gradient-to-r from-primary to-orange-500 text-white text-[10px] font-black rounded-full uppercase tracking-wider shadow-md">
                NÚCLEO CENTRAL DE IA
              </div>

              <div class="flex items-center gap-3.5 mb-2 mt-1">
                <img src="/icon.png" alt="Promp" class="w-11 h-11 rounded-xl object-contain shadow-md" />
                <div>
                  <h4 class="text-base font-bold text-slate-900 dark:text-white leading-tight">
                    Promp Intelligence
                  </h4>
                  <p class="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    Central Orchestrator & Agents
                  </p>
                </div>
              </div>

              <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                Processa intenções, aciona os melhores modelos de IA, executa fluxos e coordena todos os canais de atendimento em tempo real.
              </p>

              <div class="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800/80 text-[11px]">
                <span class="inline-flex items-center gap-1.5 text-primary font-bold">
                  <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Sempre Ativo 24/7
                </span>
                <span class="font-bold px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
                  CORE HUB
                </span>
              </div>
            </div>
          </div>

          <!-- 2. CARDS DE CATEGORIA COM AS LOGOS INTEGRADAS DENTRO DELES -->
          <!-- Linha 1: Canais de Atendimento & Modelos de IA -->
          <div class="grid grid-cols-2 gap-x-24 gap-y-8 w-full mb-8">
            <!-- Cluster 1: Canais de Atendimento -->
            <div class="bg-white/95 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-4 shadow-lg hover:shadow-xl hover:border-emerald-500/50 transition-all duration-300 transform hover:-translate-y-1">
              <div class="flex items-center justify-between gap-2 mb-2.5">
                <div>
                  <h5 class="text-sm font-bold text-slate-900 dark:text-white">{{ categoryClusters[0].title }}</h5>
                  <p class="text-[11px] text-slate-500 dark:text-slate-400">{{ categoryClusters[0].subtitle }}</p>
                </div>
                <span class="text-[9px] font-extrabold px-2 py-0.5 rounded border" :class="categoryClusters[0].badgeColor">
                  {{ categoryClusters[0].badge }}
                </span>
              </div>

              <!-- Grid de Logos Reais dos Canais -->
              <div class="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                <div
                  v-for="logo in categoryClusters[0].logos"
                  :key="logo.name"
                  class="group/logo relative p-2 bg-slate-900 border border-slate-800 rounded-xl transition-all duration-200 hover:scale-110 shadow-md flex items-center justify-center cursor-pointer"
                >
                  <!-- Tooltip no Hover com Nome da Empresa -->
                  <div class="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-slate-950 text-white text-[11px] font-bold rounded-lg whitespace-nowrap shadow-xl border border-slate-700 pointer-events-none opacity-0 group-hover/logo:opacity-100 transition-all duration-200 group-hover/logo:-translate-y-1 z-30 flex items-center justify-center">
                    {{ logo.name }}
                    <span class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-950 rotate-45 border-r border-b border-slate-700"></span>
                  </div>

                  <img :src="logo.icon" :alt="logo.name" class="w-6 h-6 sm:w-7 sm:h-7 object-contain" />
                </div>
              </div>
            </div>

            <!-- Cluster 2: Modelos de IA & LLMs -->
            <div class="bg-white/95 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-4 shadow-lg hover:shadow-xl hover:border-sky-500/50 transition-all duration-300 transform hover:-translate-y-1">
              <div class="flex items-center justify-between gap-2 mb-2.5">
                <div>
                  <h5 class="text-sm font-bold text-slate-900 dark:text-white">{{ categoryClusters[1].title }}</h5>
                  <p class="text-[11px] text-slate-500 dark:text-slate-400">{{ categoryClusters[1].subtitle }}</p>
                </div>
                <span class="text-[9px] font-extrabold px-2 py-0.5 rounded border" :class="categoryClusters[1].badgeColor">
                  {{ categoryClusters[1].badge }}
                </span>
              </div>

              <!-- Grid de Logos Reais de IA -->
              <div class="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                <div
                  v-for="logo in categoryClusters[1].logos"
                  :key="logo.name"
                  class="group/logo relative p-2 bg-slate-900 border border-slate-800 rounded-xl transition-all duration-200 hover:scale-110 shadow-md flex items-center justify-center cursor-pointer"
                >
                  <!-- Tooltip no Hover com Nome da Empresa -->
                  <div class="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-slate-950 text-white text-[11px] font-bold rounded-lg whitespace-nowrap shadow-xl border border-slate-700 pointer-events-none opacity-0 group-hover/logo:opacity-100 transition-all duration-200 group-hover/logo:-translate-y-1 z-30 flex items-center justify-center">
                    {{ logo.name }}
                    <span class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-950 rotate-45 border-r border-b border-slate-700"></span>
                  </div>

                  <img :src="logo.icon" :alt="logo.name" class="w-6 h-6 sm:w-7 sm:h-7 object-contain" />
                </div>
              </div>
            </div>
          </div>

          <!-- Linha 2: E-commerce & Automações -->
          <div class="grid grid-cols-2 gap-x-24 gap-y-8 w-full mb-8">
            <!-- Cluster 3: E-commerce -->
            <div class="bg-white/95 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-4 shadow-lg hover:shadow-xl hover:border-orange-500/50 transition-all duration-300 transform hover:-translate-y-1">
              <div class="flex items-center justify-between gap-2 mb-2.5">
                <div>
                  <h5 class="text-sm font-bold text-slate-900 dark:text-white">{{ categoryClusters[2].title }}</h5>
                  <p class="text-[11px] text-slate-500 dark:text-slate-400">{{ categoryClusters[2].subtitle }}</p>
                </div>
                <span class="text-[9px] font-extrabold px-2 py-0.5 rounded border" :class="categoryClusters[2].badgeColor">
                  {{ categoryClusters[2].badge }}
                </span>
              </div>

              <div class="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                <div
                  v-for="logo in categoryClusters[2].logos"
                  :key="logo.name"
                  class="group/logo relative p-2 bg-slate-900 border border-slate-800 rounded-xl transition-all duration-200 hover:scale-110 shadow-md flex items-center justify-center cursor-pointer"
                >
                  <!-- Tooltip no Hover com Nome da Empresa -->
                  <div class="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-slate-950 text-white text-[11px] font-bold rounded-lg whitespace-nowrap shadow-xl border border-slate-700 pointer-events-none opacity-0 group-hover/logo:opacity-100 transition-all duration-200 group-hover/logo:-translate-y-1 z-30 flex items-center justify-center">
                    {{ logo.name }}
                    <span class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-950 rotate-45 border-r border-b border-slate-700"></span>
                  </div>

                  <img :src="logo.icon" :alt="logo.name" class="w-6 h-6 sm:w-7 sm:h-7 object-contain" />
                </div>
              </div>
            </div>

            <!-- Cluster 4: Automações & Agentes -->
            <div class="bg-white/95 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-4 shadow-lg hover:shadow-xl hover:border-rose-500/50 transition-all duration-300 transform hover:-translate-y-1">
              <div class="flex items-center justify-between gap-2 mb-2.5">
                <div>
                  <h5 class="text-sm font-bold text-slate-900 dark:text-white">{{ categoryClusters[3].title }}</h5>
                  <p class="text-[11px] text-slate-500 dark:text-slate-400">{{ categoryClusters[3].subtitle }}</p>
                </div>
                <span class="text-[9px] font-extrabold px-2 py-0.5 rounded border" :class="categoryClusters[3].badgeColor">
                  {{ categoryClusters[3].badge }}
                </span>
              </div>

              <div class="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                <div
                  v-for="logo in categoryClusters[3].logos"
                  :key="logo.name"
                  class="group/logo relative p-2 bg-slate-900 border border-slate-800 rounded-xl transition-all duration-200 hover:scale-110 shadow-md flex items-center justify-center cursor-pointer"
                >
                  <!-- Tooltip no Hover com Nome da Empresa -->
                  <div class="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-slate-950 text-white text-[11px] font-bold rounded-lg whitespace-nowrap shadow-xl border border-slate-700 pointer-events-none opacity-0 group-hover/logo:opacity-100 transition-all duration-200 group-hover/logo:-translate-y-1 z-30 flex items-center justify-center">
                    {{ logo.name }}
                    <span class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-950 rotate-45 border-r border-b border-slate-700"></span>
                  </div>

                  <img :src="logo.icon" :alt="logo.name" class="w-6 h-6 sm:w-7 sm:h-7 object-contain" />
                </div>
              </div>
            </div>
          </div>

          <!-- Linha 3: Redes Sociais & Pagamentos -->
          <div class="grid grid-cols-2 gap-x-12 w-full max-w-3xl">
            <!-- Cluster 5: Redes Sociais -->
            <div class="bg-white/95 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-4 shadow-lg hover:shadow-xl hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-1">
              <div class="flex items-center justify-between gap-2 mb-2.5">
                <div>
                  <h5 class="text-sm font-bold text-slate-900 dark:text-white">{{ categoryClusters[4].title }}</h5>
                  <p class="text-[11px] text-slate-500 dark:text-slate-400">{{ categoryClusters[4].subtitle }}</p>
                </div>
                <span class="text-[9px] font-extrabold px-2 py-0.5 rounded border" :class="categoryClusters[4].badgeColor">
                  {{ categoryClusters[4].badge }}
                </span>
              </div>

              <div class="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                <div
                  v-for="logo in categoryClusters[4].logos"
                  :key="logo.name"
                  class="group/logo relative p-2 bg-slate-900 border border-slate-800 rounded-xl transition-all duration-200 hover:scale-110 shadow-md flex items-center justify-center cursor-pointer"
                >
                  <!-- Tooltip no Hover com Nome da Empresa -->
                  <div class="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-slate-950 text-white text-[11px] font-bold rounded-lg whitespace-nowrap shadow-xl border border-slate-700 pointer-events-none opacity-0 group-hover/logo:opacity-100 transition-all duration-200 group-hover/logo:-translate-y-1 z-30 flex items-center justify-center">
                    {{ logo.name }}
                    <span class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-950 rotate-45 border-r border-b border-slate-700"></span>
                  </div>

                  <img :src="logo.icon" :alt="logo.name" class="w-6 h-6 sm:w-7 sm:h-7 object-contain" />
                </div>
              </div>
            </div>

            <!-- Cluster 6: Pagamentos -->
            <div class="bg-white/95 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-4 shadow-lg hover:shadow-xl hover:border-teal-500/50 transition-all duration-300 transform hover:-translate-y-1">
              <div class="flex items-center justify-between gap-2 mb-2.5">
                <div>
                  <h5 class="text-sm font-bold text-slate-900 dark:text-white">{{ categoryClusters[5].title }}</h5>
                  <p class="text-[11px] text-slate-500 dark:text-slate-400">{{ categoryClusters[5].subtitle }}</p>
                </div>
                <span class="text-[9px] font-extrabold px-2 py-0.5 rounded border" :class="categoryClusters[5].badgeColor">
                  {{ categoryClusters[5].badge }}
                </span>
              </div>

              <div class="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                <div
                  v-for="logo in categoryClusters[5].logos"
                  :key="logo.name"
                  class="group/logo relative p-2 bg-slate-900 border border-slate-800 rounded-xl transition-all duration-200 hover:scale-110 shadow-md flex items-center justify-center cursor-pointer"
                >
                  <!-- Tooltip no Hover com Nome da Empresa -->
                  <div class="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-slate-950 text-white text-[11px] font-bold rounded-lg whitespace-nowrap shadow-xl border border-slate-700 pointer-events-none opacity-0 group-hover/logo:opacity-100 transition-all duration-200 group-hover/logo:-translate-y-1 z-30 flex items-center justify-center">
                    {{ logo.name }}
                    <span class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-950 rotate-45 border-r border-b border-slate-700"></span>
                  </div>

                  <img :src="logo.icon" :alt="logo.name" class="w-6 h-6 sm:w-7 sm:h-7 object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ÍNDICE DE INTEGRAÇÕES COM CONTROLE DE EXPANSÃO (VEJA TODAS / RECOLHER) -->
      <div class="mt-14 md:mt-20 pt-12 border-t border-slate-200/80 dark:border-slate-800/80">
        <div class="text-center mb-10">
          <h3 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-3">
            Conecte tudo o que sua empresa já usa
          </h3>
          <p class="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Mais de 30 canais, modelos de IA, ferramentas de automação e marketplaces plugados à Promp sem complicação.
          </p>
        </div>

        <!-- Filtros por Categoria -->
        <div class="flex flex-wrap items-center justify-center gap-2 mb-10 max-w-4xl mx-auto">
          <button
            v-for="cat in categories"
            :key="cat.id"
            @click="activeCategory = cat.id"
            class="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 border"
            :class="[
              activeCategory === cat.id
                ? 'bg-primary text-white border-primary shadow-md shadow-primary/20 scale-[1.02]'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800/60'
            ]"
          >
            {{ cat.label }}
          </button>
        </div>

        <!-- Container com Gradiente de Fade Out quando Recolhido -->
        <div class="relative">
          <!-- Grade de Cards das Integrações -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5 transition-all duration-500">
            <div
              v-for="item in visibleIntegrations"
              :key="item.id"
              class="group bg-white dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800 hover:border-primary/40 dark:hover:border-primary/40 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <!-- Topo do Card: Logo Oficial + Título + Categoria -->
                <div class="flex items-start justify-between gap-3 mb-3">
                  <div class="flex items-center gap-3">
                    <div
                      class="w-11 h-11 rounded-xl flex items-center justify-center p-2 shadow-md border border-slate-800 bg-slate-900 transition-transform duration-300 group-hover:scale-110"
                    >
                      <img :src="item.logo" :alt="item.name" class="w-full h-full object-contain" />
                    </div>

                    <div>
                      <h4 class="text-sm font-bold text-slate-900 dark:text-white leading-tight">
                        {{ item.name }}
                      </h4>
                      <p class="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                        {{ item.subtitle }}
                      </p>
                    </div>
                  </div>
                </div>

                <!-- Descrição -->
                <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {{ item.desc }}
                </p>
              </div>

              <!-- Footer do Card com Badge -->
              <div class="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                <span class="text-[10px] font-bold px-2.5 py-1 rounded-full border" :class="item.badgeColor">
                  {{ item.badge }}
                </span>
                <span class="text-[11px] font-semibold text-primary flex items-center gap-1 group-hover:translate-x-0.5 transition-transform duration-200">
                  Plugado
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </div>

          <!-- Efeito de Fade Out sutil na parte inferior quando não expandido -->
          <div
            v-if="!isExpanded && activeCategory === 'all'"
            class="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-50 dark:from-[#070B14] to-transparent pointer-events-none"
          ></div>
        </div>

        <!-- Botão "Veja Todas as Integrações" / "Mostrar Menos" -->
        <div v-if="activeCategory === 'all'" class="mt-8 text-center relative z-20">
          <button
            @click="isExpanded = !isExpanded"
            class="inline-flex items-center gap-2.5 px-6 py-3 rounded-2xl bg-white dark:bg-slate-900 border-2 border-primary/30 hover:border-primary text-slate-900 dark:text-white font-bold text-sm shadow-xl hover:shadow-primary/20 hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <span>{{ isExpanded ? 'Mostrar Menos Integrações' : `Ver Todas as ${allIntegrations.length} Integrações Conectadas` }}</span>
            <svg
              class="w-4 h-4 text-primary transition-transform duration-300"
              :class="{ 'rotate-180': isExpanded }"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        <!-- CTA Inferior da Seção -->
        <div class="mt-14 text-center">
          <div class="inline-flex flex-col sm:flex-row items-center gap-4 p-4 sm:p-2 sm:pr-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-lg">
            <span class="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 px-3">
              Não encontrou seu sistema? Conectamos via <strong>API REST e Webhooks</strong>.
            </span>
            <a
              href="https://wa.me/5522992371763?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20as%20integra%C3%A7%C3%B5es%20da%20Promp"
              target="_blank"
              class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-primary hover:bg-primary/90 text-white font-bold text-xs sm:text-sm shadow-md transition-all duration-200"
            >
              <span>Consultar Integração Personalizada</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bg-dot-pattern {
  background-image: radial-gradient(rgba(100, 116, 139, 0.25) 1px, transparent 1px);
  background-size: 24px 24px;
}

:global(.dark) .bg-dot-pattern {
  background-image: radial-gradient(rgba(148, 163, 184, 0.2) 1px, transparent 1px);
}
</style>
