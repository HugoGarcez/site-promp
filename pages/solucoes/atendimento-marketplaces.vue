<template>
  <div>
    <LandingHero
      badge="Centralização de Marketplaces"
      title="Pare de perder tempo alternando entre Shopee, Mercado Livre e WhatsApp"
      highlight="Mercado Livre e WhatsApp"
      subtitle="Centralize todas as perguntas de anúncios, mensagens pós-venda e canais de venda em uma única tela com atendimento automático por Inteligência Artificial."
      cta-text="Assinar Agora"
      cta-link="https://app.promp.com.br/precos"
      whatsapp-text="ou fale com nosso especialista"
      :whatsapp-link="whatsappLink"
      :stats="heroStats"
    />

    <PainAgitation
      section-title="O caos de vender em múltiplos canais sem automação"
      section-subtitle="Você gasta horas trocando de abas e ainda perde o timing perfeito da compra."
      :cards="painCards"
    />

    <SolutionShowcase
      badge="A Solução Promp"
      title="Um único inbox inteligente com IA treinada no seu catálogo"
      highlight="IA treinada"
      description="A Promp se conecta aos seus canais de venda e responde dúvidas de produtos, estoque, especificações e envios instantaneamente — 24 horas por dia."
      :features="solutionFeatures"
      :before-after="beforeAfterData"
    />

    <HowItWorks
      title="Como centralizar seus marketplaces em 3 passos"
      subtitle="Configuração simples, rápida e sem necessidade de conhecimento técnico."
      :steps="howItWorksSteps"
    />

    <Testimonials
      title="Resultados reais de quem vende em marketplaces"
      :testimonials="testimonialsList"
    />

    <LandingFAQ
      title="Dúvidas frequentes sobre atendimento em marketplaces"
      subtitle="Tudo que você precisa saber sobre a integração da Promp com seus canais de venda."
      :faqs="faqList"
    />

    <FinalCTA
      title="Pronto para unificar seus canais e vender mais?"
      subtitle="Junte-se a centenas de lojas que transformaram o atendimento em uma máquina de vendas automática."
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
  title: 'Atendimento Centralizado para Marketplaces | Promp IA',
  ogTitle: 'Atendimento Centralizado para Marketplaces | Promp IA',
  description: 'Centralize mensagens da Shopee, Mercado Livre e WhatsApp com atendimento por IA 24h. Aumente suas conversões de anúncios e reduza custos operacionais.',
  ogDescription: 'Centralize mensagens da Shopee, Mercado Livre e WhatsApp com atendimento por IA 24h.'
})

const whatsappLink = 'https://wa.me/5522992371763?text=' + encodeURIComponent('Olá! Gostaria de saber como centralizar o atendimento dos meus marketplaces (Shopee, Mercado Livre, etc.) com IA na Promp.')

const heroStats = [
  { value: '1 Painel', label: 'Todos os canais integrados' },
  { value: '< 3s', label: 'Tempo de resposta da IA' },
  { value: '+65%', label: 'Mais perguntas convertidas em vendas' }
]

const painCards = [
  {
    emoji: '📑',
    title: 'Dezenas de abas abertas',
    description: 'Responder Shopee em uma aba, Mercado Livre em outra e WhatsApp no celular gera estresse, erros e atrasos constantes.',
    stat: '3x mais tempo gasto com SAC'
  },
  {
    emoji: '⏳',
    title: 'Cliente compra do concorrente',
    description: 'Nos marketplaces, quem responde a dúvida de estoque ou frete primeiro fecha a venda. Demorar 15 minutos é perder o pedido.',
    stat: '70% dos compradores escolhem a resposta mais rápida'
  },
  {
    emoji: '📦',
    title: 'Pós-venda desorganizado',
    description: 'Código de rastreio, notas e atualizações de entrega geram avalanche de mensagens repetitivas para sua equipe.',
    stat: '80% das mensagens de pós-venda são perguntas repetitivas'
  }
]

const solutionFeatures = [
  {
    icon: '⚡',
    title: 'Respostas instantâneas a perguntas de anúncios',
    description: 'A IA consulta as especificações do seu produto e responde dúvidas de compatibilidade, cores e medidas em segundos.'
  },
  {
    icon: '🔄',
    title: 'Centralização multicanal completa',
    description: 'Mercado Livre, Shopee, Nuvemshop, WooCommerce, WhatsApp e Instagram reunidos no mesmo painel com histórico unificado.'
  },
  {
    icon: '🏷️',
    title: 'Organização automática por etiquetas',
    description: 'Classifique automaticamente contatos por canal de origem, produto de interesse e status do pedido.'
  }
]

const beforeAfterData = {
  before: {
    title: 'Sem a Promp',
    items: [
      'Atendentes alternando entre 5 sistemas diferentes',
      'Perguntas de anúncios sem resposta durante a noite',
      'Tempo médio de resposta superior a 45 minutos',
      'Perda de reputação por tempo de resposta alto'
    ]
  },
  after: {
    title: 'Com a Promp IA',
    items: [
      '100% das mensagens centralizadas em um só painel',
      'IA respondendo dúvidas de produtos 24/7 em segundos',
      'Taxa de conversão de anúncios até 4x maior',
      'Sua equipe humana focada apenas em casos especiais'
    ]
  }
}

const howItWorksSteps = [
  {
    number: '1',
    title: 'Conecte suas contas',
    description: 'Vincule seus canais de vendas e WhatsApp à plataforma Promp em poucos cliques.',
    icon: '🔗'
  },
  {
    number: '2',
    title: 'Alimente a IA com seus produtos',
    description: 'Insira seu catálogo, links ou manuais para que a IA aprenda tudo sobre o que você vende.',
    icon: '🧠'
  },
  {
    number: '3',
    title: 'Venda em piloto automático',
    description: 'A IA responde instantaneamente nos marketplaces e no WhatsApp, gerando mais vendas.',
    icon: '🚀'
  }
]

const testimonialsList = [
  {
    name: 'Renato Silveira',
    role: 'Fundador',
    company: 'EletroTech E-commerce',
    text: 'Vendemos no Mercado Livre e Shopee. Antes perdíamos muitas vendas de madrugada porque ninguém respondia as perguntas de compatibilidade. Com a Promp, nossas conversões no anúncio subiram 54% no primeiro mês.',
    stars: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80'
  },
  {
    name: 'Juliana Barbosa',
    role: 'Gerente de E-commerce',
    company: 'Moda Prime',
    text: 'O maior alívio foi tirar a equipe de suporte do modo bombeiro. Todas as mensagens de prazo, rastreio e tabela de medidas são resolvidas pela IA antes mesmo de chegarem a nós.',
    stars: 5,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80'
  }
]

const faqList = [
  {
    question: 'A IA realmente entende as variações dos meus produtos?',
    answer: 'Sim! Você pode carregar manuais, fichas técnicas, tabelas de medidas e perguntas frequentes. A IA da Promp compreende variações de voltagem, tamanho, cor e compatibilidade.'
  },
  {
    question: 'E se a IA não souber responder algo muito específico?',
    answer: 'Ela transfere a conversa de forma transparente para um atendente humano da sua equipe com todo o histórico organizado.'
  },
  {
    question: 'Posso usar mais de um número de WhatsApp com os marketplaces?',
    answer: 'Sim, a Promp permite conectar múltiplos números e canais para que toda a sua equipe atenda simultaneamente sob a mesma conta.'
  },
  {
    question: 'Preciso instalar algum software no meu computador?',
    answer: 'Não, a plataforma é 100% em nuvem. Você pode acessar do computador ou celular a qualquer momento.'
  }
]
</script>
