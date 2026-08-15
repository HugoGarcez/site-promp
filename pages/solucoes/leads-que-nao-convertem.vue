<template>
  <div>
    <LandingHero
      badge="Otimização de Tráfego Pago"
      title="Pare de queimar dinheiro em anúncios com leads que nunca compram"
      highlight="que nunca compram"
      subtitle="O problema não é o tráfego, é o que acontece depois do clique. A Promp qualifica, aquece e conduz cada lead do anúncio diretamente para a conversão."
      cta-text="Assinar Agora"
      cta-link="https://app.promp.com.br/precos"
      whatsapp-text="ou fale com nosso especialista"
      :whatsapp-link="whatsappLink"
      :stats="heroStats"
    />

    <PainAgitation
      section-title="O buraco negro do tráfego pago sem funil automático"
      section-subtitle="Você investe pesado em Meta Ads e Google, mas o WhatsApp vira um cemitério de contatos frios."
      :cards="painCards"
    />

    <SolutionShowcase
      badge="A Solução Promp"
      title="Transforme cada clique em uma oportunidade real de venda"
      highlight="oportunidade real de venda"
      description="A Promp se integra aos seus anúncios de WhatsApp e Instagram, faz a triagem imediata com perguntas estratégicas de qualificação e entrega leads quentes para o seu time fechar."
      :features="solutionFeatures"
      :before-after="beforeAfterData"
    />

    <HowItWorks
      title="Como multiplicar o ROI dos seus anúncios em 3 passos"
      subtitle="Integração fluida com suas campanhas ativas do Meta Ads e Google."
      :steps="howItWorksSteps"
    />

    <Testimonials
      title="Resultados comprovados por gestores de tráfego e empresários"
      :testimonials="testimonialsList"
    />

    <LandingFAQ
      title="Perguntas Frequentes sobre Conversão de Anúncios"
      subtitle="Tudo sobre como extrair o máximo do seu tráfego pago."
      :faqs="faqList"
    />

    <FinalCTA
      title="Pare de rasgar dinheiro com anúncios sem conversão"
      subtitle="Multiplique o retorno do seu tráfego pago hoje mesmo com a Promp IA."
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
  title: 'Converta Mais Leads de Tráfego Pago no WhatsApp | Promp IA',
  ogTitle: 'Converta Mais Leads de Tráfego Pago no WhatsApp | Promp IA',
  description: 'Pare de perder dinheiro com anúncios que não convertem. Qualifique e converta leads de tráfego pago automaticamente no WhatsApp com a Promp IA.',
  ogDescription: 'Pare de perder dinheiro com anúncios que não convertem.'
})

const whatsappLink = 'https://wa.me/5522992371763?text=' + encodeURIComponent('Olá! Invisto em anúncios e quero qualificar e converter mais leads no WhatsApp com a Promp IA.')

const heroStats = [
  { value: '3x', label: 'Mais ROI no tráfego pago' },
  { value: '100%', label: 'Leads qualificados na entrada' },
  { value: '-60%', label: 'Custo por aquisição de cliente' }
]

const painCards = [
  {
    emoji: '💸',
    title: 'Custo por clique cada vez mais caro',
    description: 'O leilão de mídia está mais concorrido. Desperdiçar um único lead qualificado por falta de atendimento rápido corrói sua margem de lucro.',
    stat: 'Preço do tráfego subiu mais de 35% no último ano'
  },
  {
    emoji: '👻',
    title: 'Curiosos que somem após o primeiro oi',
    description: 'Sua equipe perde horas respondendo pessoas sem perfil de compra e não sobra tempo para os clientes com real intenção.',
    stat: '65% dos leads de anúncios são desqualificados'
  },
  {
    emoji: '📉',
    title: 'Falta de métricas pós-clique',
    description: 'Você sabe quanto gastou no anúncio, mas não sabe quais mensagens realmente geraram dinheiro no caixa da empresa.',
    stat: 'Gestores de tráfego às cegas sem funil de vendas visual'
  }
]

const solutionFeatures = [
  {
    icon: '🎯',
    title: 'Funil Kanban visual de conversão',
    description: 'Acompanhe visualmente a jornada de cada lead: Novo contato, Qualificado, Proposta enviada, Em negociação e Ganho.'
  },
  {
    icon: '🏷️',
    title: 'Segmentação por campanha e anúncio',
    description: 'Saiba exatamente qual criativo ou campanha gerou o lead e personalize o primeiro contato de acordo com a oferta clicada.'
  },
  {
    icon: '🤖',
    title: 'IA treinada para contorno de objeções',
    description: 'A IA sabe contornar dúvidas de preço, formas de pagamento, garantias e frete de maneira persuasiva.'
  }
]

const beforeAfterData = {
  before: {
    title: 'Tráfego sem a Promp',
    items: [
      'Leads esperando horas e esfriando',
      'Equipe de vendas perdida no WhatsApp sem organização',
      'Dinheiro gasto em mídia sem saber o retorno real',
      'Curiosos consumindo o tempo dos melhores vendedores'
    ]
  },
  after: {
    title: 'Tráfego com a Promp IA',
    items: [
      'Atendimento imediato no segundo exato do clique',
      'Leads qualificados automaticamente por critérios claros',
      'Funil Kanban organizado com métricas de fechamento',
      'ROI dos anúncios multiplicado com a mesma verba'
    ]
  }
}

const howItWorksSteps = [
  {
    number: '1',
    title: 'Conecte suas campanhas',
    description: 'Aponte seus anúncios direto para o WhatsApp integrado à Promp com tags automáticas.',
    icon: '🎯'
  },
  {
    number: '2',
    title: 'Configure o roteiro de qualificação',
    description: 'Defina quais perguntas a IA deve fazer para filtrar quem tem perfil e orçamento.',
    icon: '📝'
  },
  {
    number: '3',
    title: 'Colha vendas com ROI máximo',
    description: 'Receba leads aquecidos e prontos para comprar no seu painel ou agende chamadas.',
    icon: '📈'
  }
]

const testimonialsList = [
  {
    name: 'Felipe Queiroz',
    role: 'Gestor de Tráfego',
    company: 'Scale Media',
    text: 'Gerenciamos mais de R$ 80 mil mensais em tráfego para nossos clientes. A Promp virou ferramenta obrigatória. O tempo de resposta imediato triplicou a taxa de conversão dos leads de WhatsApp.',
    stars: 5,
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80'
  },
  {
    name: 'Beatriz Vasconcelos',
    role: 'Head de Vendas',
    company: 'Solar Energia',
    text: 'Nosso ticket é alto e precisávamos filtrar quem tinha conta de luz acima de R$ 500. A IA da Promp faz essa qualificação em segundos antes de passar para o consultor. Nossa equipe agora só fala com leads prontos!',
    stars: 5,
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&auto=format&fit=crop&q=80'
  }
]

const faqList = [
  {
    question: 'A Promp se integra com anúncios de clique para WhatsApp do Facebook e Instagram?',
    answer: 'Sim, perfeitamente! A IA detecta a mensagem padrão do anúncio e continua o fluxo de forma contextualizada.'
  },
  {
    question: 'Como funciona o funil Kanban?',
    answer: 'Você pode criar colunas personalizadas como: Novos leads, Qualificados, Proposta apresentada, Negociação e Fechados, arrastando os contatos facilmente.'
  },
  {
    question: 'Posso disparar mensagens para leads antigos que não compraram?',
    answer: 'Sim! A Promp possui ferramenta de disparo em massa com etiquetas para reaquecer leads frios com novas ofertas.'
  },
  {
    question: 'Consigo ver qual anúncio gerou mais vendas?',
    answer: 'Sim, usando as etiquetas e relatórios por canal e campanha você identifica a origem exata dos seus melhores clientes.'
  }
]
</script>
