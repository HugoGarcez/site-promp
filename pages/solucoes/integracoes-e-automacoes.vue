<template>
  <div>
    <LandingHero
      badge="Integrações e Automações de Ponta"
      title="Conecte seu WhatsApp ao seu CRM, Loja Virtual e Ferramentas Favoritas"
      highlight="CRM, Loja Virtual e Ferramentas"
      subtitle="Elimine o retrabalho manual. A Promp se integra nativamente via API, Webhooks, WooCommerce, Nuvemshop, Google Calendar e Typebot para sincronizar dados em tempo real."
      cta-text="Assinar Agora"
      cta-link="https://app.promp.com.br/precos"
      whatsapp-text="ou fale com nosso especialista"
      :whatsapp-link="whatsappLink"
      :stats="heroStats"
    />

    <PainAgitation
      section-title="O custo invisível da desconexão entre seus sistemas"
      section-subtitle="Copiar e colar dados de clientes do WhatsApp para o CRM ou ERP rouba horas preciosas todos os dias."
      :cards="painCards"
    />

    <SolutionShowcase
      badge="A Solução Promp"
      title="Um ecossistema conectado que trabalha em perfeita sincronia"
      highlight="perfeita sincronia"
      description="Automatize fluxos completos: quando um pedido for criado na loja, envie o rastreio no WhatsApp. Quando uma reunião for agendada, salve no Google Calendar. Tudo no piloto automático."
      :features="solutionFeatures"
      :before-after="beforeAfterData"
    />

    <HowItWorks
      title="Como conectar suas ferramentas em 3 passos"
      subtitle="Sem dor de cabeça e com suporte especializado."
      :steps="howItWorksSteps"
    />

    <Testimonials
      title="Quem automatizou seus processos com a Promp"
      :testimonials="testimonialsList"
    />

    <LandingFAQ
      title="Perguntas Frequentes sobre Integrações e API"
      subtitle="Tudo sobre conectividade, webhooks e integrações nativas."
      :faqs="faqList"
    />

    <FinalCTA
      title="Conecte todas as suas ferramentas e turbine sua produtividade"
      subtitle="Elimine processos manuais e crie fluxos inteligentes com a Promp IA."
      cta-text="Assinar Agora"
      cta-link="https://app.promp.com.br/precos"
      whatsapp-text="ou fale com nosso especialista"
      :whatsapp-link="whatsappLink"
    />
  </div>
</template>

<script setup lang="ts">
import LandingHero from '~/components/landing/LandingHero.vue'
import PainAgitation from '~/components/landing/PainAgitation.vue'
import SolutionShowcase from '~/components/landing/SolutionShowcase.vue'
import HowItWorks from '~/components/landing/HowItWorks.vue'
import Testimonials from '~/components/landing/Testimonials.vue'
import LandingFAQ from '~/components/landing/LandingFAQ.vue'
import FinalCTA from '~/components/landing/FinalCTA.vue'

definePageMeta({
  layout: 'landing'
})

useSeoMeta({
  title: 'Integrações e Automações com WhatsApp API | Promp IA',
  ogTitle: 'Integrações e Automações com WhatsApp API | Promp IA',
  description: 'Conecte seu WhatsApp com CRM, E-commerce (WooCommerce, Nuvemshop), Google Calendar, Webhooks e API completa da Promp IA.',
  ogDescription: 'Conecte seu WhatsApp com CRM, E-commerce, Google Calendar e API aberta.'
})

const whatsappLink = 'https://wa.me/5522992371763?text=' + encodeURIComponent('Olá! Quero integrar o WhatsApp da minha empresa com meu CRM, e-commerce ou API via Promp.')

const heroStats = [
  { value: '+15', label: 'Integrações nativas prontas' },
  { value: 'API Aberta', label: 'Para desenvolvedores e automações' },
  { value: 'Zero', label: 'Digitação manual repetitiva' }
]

const painCards = [
  {
    emoji: '⛓️',
    title: 'Sistemas isolados que não se conversam',
    description: 'A venda acontece no WhatsApp, mas o atendente esquece de atualizar o CRM ou emitir o pedido no e-commerce.',
    stat: 'Mais de 30% dos dados de clientes ficam desatualizados por erro humano'
  },
  {
    emoji: '⏳',
    title: 'Horas perdidas em digitação manual',
    description: 'Seu time gasta um tempo absurdo preenchendo cadastros, planilhas e gerando comprovantes manualmente.',
    stat: 'Equipes perdem até 2 horas por dia em digitação burocrática'
  },
  {
    emoji: '🧩',
    title: 'Falta de flexibilidade para automações',
    description: 'Plataformas engessadas que não oferecem API aberta ou Webhooks impedem sua empresa de criar fluxos avançados.',
    stat: 'Empresas sem integração gastam 4x mais em operação'
  }
]

const solutionFeatures = [
  {
    icon: '🔌',
    title: 'API completa e Webhooks em tempo real',
    description: 'Envie e receba eventos, crie mensagens automáticas disparadas por sistemas externos e integre com n8n, Make ou Zapier.'
  },
  {
    icon: '🛍️',
    title: 'E-commerce (WooCommerce, Nuvemshop e mais)',
    description: 'Recuperação de carrinho abandonado, status de pedido, envio de código Pix e aviso de postagem no WhatsApp.'
  },
  {
    icon: '🤖',
    title: 'Integração com Typebot e ChatFlows',
    description: 'Combine fluxos de decisão estruturados com o poder generativo e natural da Inteligência Artificial da Promp.'
  }
]

const beforeAfterData = {
  before: {
    title: 'Processos Manuais',
    items: [
      'Copiar dados do WhatsApp e colar no CRM',
      'Envio manual de links de rastreio e notas fiscais',
      'Agendamentos com choque de horários na agenda',
      'Sistemas desconectados gerando retrabalho'
    ]
  },
  after: {
    title: 'Processos Automatizados com Promp',
    items: [
      'Dados do cliente enviados automaticamente para o seu CRM',
      'Notificações de pedido disparadas no WhatsApp em milissegundos',
      'Google Calendar sincronizado sem conflitos de agenda',
      'Operação fluida e escalável sem erros humanos'
    ]
  }
}

const howItWorksSteps = [
  {
    number: '1',
    title: 'Escolha a integração',
    description: 'Selecione seu e-commerce, CRM, Typebot ou gere sua chave de API.',
    icon: '⚡'
  },
  {
    number: '2',
    title: 'Configure os gatilhos',
    description: 'Defina quais ações disparam mensagens automáticas no WhatsApp.',
    icon: '⚙️'
  },
  {
    number: '3',
    title: 'Veja tudo rodando sincronizado',
    description: 'Seus dados fluem entre as ferramentas sem nenhuma intervenção manual.',
    icon: '🔄'
  }
]

const testimonialsList = [
  {
    name: 'Thiago Castilho',
    role: 'CTO',
    company: 'Inova Finanças',
    text: 'A API da Promp é extremamente estável e bem documentada. Integramos nosso sistema bancário para envio de 2ª via de boletos e confirmação de pagamento via WhatsApp em apenas 2 dias de desenvolvimento.',
    stars: 5,
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80'
  },
  {
    name: 'Isabela Fontes',
    role: 'Gerente de E-commerce',
    company: 'Aura Calçados',
    text: 'Conectamos nossa loja Nuvemshop com a Promp. Quando o cliente abandona o carrinho, a IA chama no WhatsApp 15 minutos depois com o link pronto e tira dúvidas sobre tamanho. Recuperamos 28% dos carrinhos!',
    stars: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
  }
]

const faqList = [
  {
    question: 'A Promp possui API aberta para qualquer plano?',
    answer: 'Sim, a API está disponível para integração de acordo com as permissões do plano contratado.'
  },
  {
    question: 'Consigo integrar com n8n, Make e Zapier?',
    answer: 'Sim, você pode usar Webhooks e requisições HTTP para disparar fluxos automatizados em qualquer ferramenta no-code.'
  },
  {
    question: 'Como funciona a recuperação de carrinho no e-commerce?',
    answer: 'Quando a loja detecta o abandono de checkout, ela notifica a Promp via webhook, que inicia uma conversa personalizada com o cliente no WhatsApp.'
  },
  {
    question: 'Existe limite de requisições de API?',
    answer: 'Os limites são dimensionados para suportar com tranquilidade operações de alta intensidade e grandes volumes.'
  }
]
</script>
