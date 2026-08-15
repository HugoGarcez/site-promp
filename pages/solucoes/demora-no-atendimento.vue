<template>
  <div>
    <LandingHero
      badge="Atendimento Imediato com IA"
      title="Pare de perder vendas para concorrentes que respondem mais rápido"
      highlight="respondem mais rápido"
      subtitle="73% dos clientes compram da primeira empresa que responde. A Promp atende seus leads em menos de 3 segundos no WhatsApp, 24 horas por dia."
      cta-text="Assinar Agora"
      cta-link="https://app.promp.com.br/precos"
      whatsapp-text="ou fale com nosso especialista"
      :whatsapp-link="whatsappLink"
      :stats="heroStats"
    />

    <PainAgitation
      section-title="O custo invisível da lentidão no seu atendimento"
      section-subtitle="Cada minuto que o lead espera no WhatsApp reduz drasticamente sua chance de fechar negócio."
      :cards="painCards"
    />

    <SolutionShowcase
      badge="A Solução Promp"
      title="Atendimento instantâneo, humanizado e focado em fechar a venda"
      highlight="fechar a venda"
      description="Nossa IA atua como seu melhor vendedor: acolhe o lead imediatamente, entende a necessidade com linguagem natural e conduz até o fechamento ou agendamento."
      :features="solutionFeatures"
      :before-after="beforeAfterData"
    />

    <HowItWorks
      title="Como ativar o atendimento imediato no seu WhatsApp"
      subtitle="Pronto para rodar em poucos minutos, sem mexer no seu número atual."
      :steps="howItWorksSteps"
    />

    <Testimonials
      title="O que mudou para quem adotou resposta imediata"
      :testimonials="testimonialsList"
    />

    <LandingFAQ
      title="Perguntas Frequentes sobre Rapidez no Atendimento"
      subtitle="Tire suas dúvidas e veja como a Promp acelera suas vendas."
      :faqs="faqList"
    />

    <FinalCTA
      title="Pare de perder clientes para a demora agora mesmo"
      subtitle="Atenda seus leads no momento exato em que eles querem comprar."
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
  title: 'Atendimento Rápido no WhatsApp com IA | Promp IA',
  ogTitle: 'Atendimento Rápido no WhatsApp com IA | Promp IA',
  description: 'Atenda clientes em menos de 3 segundos no WhatsApp e nunca mais perca vendas por demora. Inteligência artificial humanizada com suporte 24h.',
  ogDescription: 'Atenda clientes em menos de 3 segundos no WhatsApp e nunca mais perca vendas por demora.'
})

const whatsappLink = 'https://wa.me/5522992371763?text=' + encodeURIComponent('Olá! Quero acelerar o tempo de resposta do meu WhatsApp para menos de 3 segundos com a Promp IA.')

const heroStats = [
  { value: '< 3s', label: 'Tempo de primeira resposta' },
  { value: '+47%', label: 'Aumento na taxa de conversão' },
  { value: '24/7', label: 'Disponibilidade ininterrupta' }
]

const painCards = [
  {
    emoji: '🧊',
    title: 'O lead esfria em 5 minutos',
    description: 'A empolgação da compra passa rápido. Se você não responder no momento do interesse, o lead esquece ou desiste.',
    stat: 'Queda de 80% na taxa de conversão após 10 minutos'
  },
  {
    emoji: '🏃‍♂️',
    title: 'O concorrente responde primeiro',
    description: 'Seu cliente em potencial chamou 3 empresas ao mesmo tempo. A que responder de forma clara primeiro leva o pedido.',
    stat: '73% dos negócios fecham com quem atende primeiro'
  },
  {
    emoji: '😫',
    title: 'Equipe sobrecarregada nos horários de pico',
    description: 'Dezenas de pessoas chamando ao mesmo tempo geram filas intermináveis e atendimento superficial por pressa.',
    stat: 'Atendentes humanos não conseguem manter conversas paralelas com qualidade'
  }
]

const solutionFeatures = [
  {
    icon: '⚡',
    title: 'Velocidade instantânea de resposta',
    description: 'Seu cliente é acolhido em menos de 3 segundos com mensagens personalizadas que nunca parecem robóticas.'
  },
  {
    icon: '🎙️',
    title: 'Áudio humanizado idêntico a uma pessoa',
    description: 'A Promp pode responder por áudios naturais com entonação humana, criando uma conexão forte de confiança.'
  },
  {
    icon: '🎯',
    title: 'Qualificação prévia e direcionamento',
    description: 'A IA faz as perguntas certas, identifica o perfil de compra e só passa para o time humano quem realmente está pronto para fechar.'
  }
]

const beforeAfterData = {
  before: {
    title: 'Antes da Promp',
    items: [
      'Tempo médio de espera: 25 a 60 minutos',
      'Leads perdidos à noite, fins de semana e almoço',
      'Respostas genéricas em lista de opções numéricas frias',
      'Desperdício de orçamento de tráfego pago'
    ]
  },
  after: {
    title: 'Depois da Promp IA',
    items: [
      'Tempo de resposta: menos de 3 segundos',
      'Atendimento impecável 24 horas por dia, 7 dias por semana',
      'Conversas fluidas como se fosse um atendente experiente',
      'Aproveitamento máximo de cada lead gerado'
    ]
  }
}

const howItWorksSteps = [
  {
    number: '1',
    title: 'Conecte seu WhatsApp',
    description: 'Leia o QR Code na plataforma Promp e conecte seu número comercial em segundos.',
    icon: '📱'
  },
  {
    number: '2',
    title: 'Personalize o tom e as regras',
    description: 'Defina a personalidade da sua IA, regras de preços, links de pagamento e agenda.',
    icon: '⚙️'
  },
  {
    number: '3',
    title: 'Veja as conversões explodirem',
    description: 'Seus leads são atendidos no exato segundo em que mandam mensagem.',
    icon: '💰'
  }
]

const testimonialsList = [
  {
    name: 'Lucas Nogueira',
    role: 'Sócio-Diretor',
    company: 'Imóveis Prime',
    text: 'No mercado imobiliário, velocidade é tudo. Antes da Promp, o corretor demorava 2 horas para retornar o portal. Agora a IA envia fotos, tira dúvidas de metragem e agenda a visita na hora. Nossos agendamentos dobraram.',
    stars: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80'
  },
  {
    name: 'Camila Fernandes',
    role: 'CEO',
    company: 'OdontoEstética',
    text: 'Recebemos dezenas de mensagens por dia no WhatsApp de anúncios do Instagram. Com a resposta instantânea da Promp, nossa taxa de agendamento de consultas passou de 18% para 44%. Pagou-se no primeiro dia.',
    stars: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
  }
]

const faqList = [
  {
    question: 'A IA substitui completamente meus atendentes?',
    answer: 'A IA cuida da triagem, respostas rápidas, dúvidas recorrentes e qualificação. Quando o lead precisa de uma negociação especial, ela transfere suavemente para seu atendente humano.'
  },
  {
    question: 'O cliente sabe que está falando com uma IA?',
    answer: 'A comunicação é tão natural e contextual que a imensa maioria dos clientes acredita estar conversando com uma pessoa da equipe.'
  },
  {
    question: 'Consigo pausar a IA e responder manualmente quando eu quiser?',
    answer: 'Sim! Com 1 clique no painel você assume a conversa a qualquer instante e a IA pausa automaticamente.'
  },
  {
    question: 'Funciona com WhatsApp Business e API Oficial?',
    answer: 'Sim, a Promp é parceira oficial Meta e suporta tanto WhatsApp Web quanto API Oficial da Cloud Meta.'
  }
]
</script>
