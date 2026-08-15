<template>
  <div>
    <LandingHero
      badge="Centralização Multicanal Completa"
      title="Chega de alternar entre WhatsApp, Instagram, Telegram e Email"
      highlight="WhatsApp, Instagram, Telegram e Email"
      subtitle="Reúna até 9 canais de atendimento em um único painel profissional com múltiplos atendentes, histórico unificado e suporte de Inteligência Artificial."
      cta-text="Assinar Agora"
      cta-link="https://app.promp.com.br/precos"
      whatsapp-text="ou fale com nosso especialista"
      :whatsapp-link="whatsappLink"
      :stats="heroStats"
    />

    <PainAgitation
      section-title="O caos de gerenciar múltiplos canais separados"
      section-subtitle="Celulares passando de mão em mão, mensagens esquecidas no Direct e clientes frustrados."
      :cards="painCards"
    />

    <SolutionShowcase
      badge="A Solução Promp"
      title="Um painel poderoso para sua equipe atender todos os canais juntos"
      highlight="todos os canais juntos"
      description="Conecte WhatsApp, Instagram Direct, Telegram, Webchat, Mercado Livre, Shopee, Email e mais em uma única plataforma fluida com gestão completa de equipe."
      :features="solutionFeatures"
      :before-after="beforeAfterData"
    />

    <HowItWorks
      title="Como unificar seu atendimento em 3 passos"
      subtitle="Centralize todos os seus canais em minutos."
      :steps="howItWorksSteps"
    />

    <Testimonials
      title="O que dizem os gestores que centralizaram seus canais"
      :testimonials="testimonialsList"
    />

    <LandingFAQ
      title="Perguntas Frequentes sobre Centralização de Canais"
      subtitle="Tudo sobre como funciona a unificação de canais na Promp."
      :faqs="faqList"
    />

    <FinalCTA
      title="Unifique seus canais e assuma o controle do seu atendimento"
      subtitle="Junte-se a centenas de empresas que abandonaram o caos de múltiplos celulares."
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
  title: 'Centralize WhatsApp, Instagram e Canais em 1 Painel | Promp IA',
  ogTitle: 'Centralize WhatsApp, Instagram e Canais em 1 Painel | Promp IA',
  description: 'Unifique WhatsApp, Instagram Direct, Telegram e mais em um só painel multicanal com suporte de IA e múltiplos atendentes.',
  ogDescription: 'Unifique WhatsApp, Instagram Direct, Telegram e mais em um só painel multicanal.'
})

const whatsappLink = 'https://wa.me/5522992371763?text=' + encodeURIComponent('Olá! Quero unificar WhatsApp, Instagram Direct e outros canais em um único painel com múltiplos atendentes.')

const heroStats = [
  { value: '9 Canais', label: 'Em um único painel' },
  { value: 'Zero', label: 'Mensagens perdidas' },
  { value: '100%', label: 'Histórico unificado por cliente' }
]

const painCards = [
  {
    emoji: '📱',
    title: 'A guerra dos celulares no escritório',
    description: 'Atendentes disputando aparelhos de celular para responder WhatsApp e deixando conversas importantes sem retorno.',
    stat: 'Perda de controle operacional e risco de extravio de contatos'
  },
  {
    emoji: '📥',
    title: 'Directs do Instagram ignorados por dias',
    description: 'Clientes comentam nos posts e mandam direct, mas a mensagem se perde entre notificações e ninguém responde a tempo.',
    stat: 'Mais de 40% das mensagens de Direct não são respondidas em menos de 24h'
  },
  {
    emoji: '🧩',
    title: 'Histórico de compras fragmentado',
    description: 'O cliente fala no WhatsApp, depois chama no Instagram e sua equipe não sabe o que já foi conversado anteriormente.',
    stat: 'Experiência amadora que desgasta a confiança do comprador'
  }
]

const solutionFeatures = [
  {
    icon: '🌐',
    title: '9 canais em uma única tela',
    description: 'WhatsApp Oficial, WhatsApp Web, Instagram Direct, Telegram, Webchat, Email, Mercado Livre, Shopee e WebPhone SIP.'
  },
  {
    icon: '👥',
    title: 'Múltiplos atendentes em um só número',
    description: 'Toda a sua equipe comercial atende simultaneamente pelo mesmo número de WhatsApp com controle de permissões.'
  },
  {
    icon: '🏷️',
    title: 'Filas, setores e transferências',
    description: 'Crie filas para Vendas, Suporte, Financeiro e transfira conversas internamente com notas privadas entre a equipe.'
  }
]

const beforeAfterData = {
  before: {
    title: 'Canais Isolados',
    items: [
      '1 aparelho de celular para cada funcionário sem controle',
      'Mensagens perdidas no Direct do Instagram',
      'Zero registro de quem atendeu qual cliente',
      'Impossibilidade de transferir atendimentos entre setores'
    ]
  },
  after: {
    title: 'Painel Centralizado Promp',
    items: [
      'Toda a equipe conectada via computador ou celular com login próprio',
      'Directs, WhatsApp e Telegram em um fluxo único e organizado',
      'Métricas completas de desempenho e tempo de resposta por atendente',
      'Transferência rápida com histórico completo compartilhado'
    ]
  }
}

const howItWorksSteps = [
  {
    number: '1',
    title: 'Conecte seus canais',
    description: 'Vincule seu WhatsApp, Instagram, Telegram e outros canais com QR Code ou autenticação.',
    icon: '🔌'
  },
  {
    number: '2',
    title: 'Cadastre sua equipe',
    description: 'Crie usuários com senhas e permissões para cada atendente e defina setores.',
    icon: '👥'
  },
  {
    number: '3',
    title: 'Atenda com total controle',
    description: 'Receba todas as conversas organizadas em um painel limpo e profissional.',
    icon: '🎯'
  }
]

const testimonialsList = [
  {
    name: 'Guilherme Sampaio',
    role: 'Diretor Operacional',
    company: 'Lojas Aliança',
    text: 'Tínhamos 4 celulares na loja e era uma confusão diária para saber quem tinha atendido quem. Com a Promp, colocamos 8 atendentes no mesmo WhatsApp pelo computador. Mudou completamente nosso ritmo de vendas.',
    stars: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80'
  },
  {
    name: 'Mariana Duarte',
    role: 'Head de Atendimento',
    company: 'Cosméticos Glow',
    text: 'Recebemos centenas de directs no Instagram todos os dias de influenciadoras e seguidoras. Ter o Direct e o WhatsApp na mesma tela com suporte de IA fez nossa taxa de resposta cair de 4 horas para 10 segundos.',
    stars: 5,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80'
  }
]

const faqList = [
  {
    question: 'Quantos atendentes podem usar a plataforma ao mesmo tempo?',
    answer: 'Depende do seu plano escolhido, podendo acomodar desde pequenas equipes de 2 atendentes até grandes operações com dezenas de operadores simultâneos.'
  },
  {
    question: 'Os atendentes precisam estar no mesmo local físico?',
    answer: 'Não! Cada um pode acessar de sua casa ou escritório, pelo computador ou aplicativo mobile.'
  },
  {
    question: 'É possível ver as mensagens que outro atendente está trocando?',
    answer: 'Sim, administradores e supervisores têm acesso a todas as conversas em tempo real com controle de visibilidade por setor.'
  },
  {
    question: 'Posso conectar mais de uma conta de WhatsApp ou Instagram?',
    answer: 'Sim! Você pode conectar múltiplas conexões de WhatsApp e redes sociais na mesma assinatura conforme a capacidade do plano.'
  }
]
</script>
