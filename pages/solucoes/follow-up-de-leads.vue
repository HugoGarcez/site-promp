<template>
  <div>
    <LandingHero
      badge="Follow-up Automático com IA"
      title="80% das suas vendas são perdidas por falta de acompanhamento"
      highlight="por falta de acompanhamento"
      subtitle="A maioria das vendas acontece entre o 3º e o 5º contato. A Promp executa sequências automáticas e personalizadas de follow-up no WhatsApp para reaquecer leads frios."
      cta-text="Assinar Agora"
      cta-link="https://app.promp.com.br/precos"
      whatsapp-text="ou fale com nosso especialista"
      :whatsapp-link="whatsappLink"
      :stats="heroStats"
    />

    <PainAgitation
      section-title="O buraco negro dos orçamentos esquecidos no WhatsApp"
      section-subtitle="Sua equipe envia o preço, o cliente diz que 'vai pensar' e a conversa morre para sempre."
      :cards="painCards"
    />

    <SolutionShowcase
      badge="A Solução Promp"
      title="Automação de cadência que resgata clientes com mensagens humanizadas"
      highlight="resgata clientes"
      description="A Promp monitora o tempo sem resposta e dispara mensagens contextuais de acompanhamento pelo WhatsApp, trazendo o lead de volta para a conversa sem esforço humano."
      :features="solutionFeatures"
      :before-after="beforeAfterData"
    />

    <HowItWorks
      title="Como ativar o resgate automático de leads em 3 passos"
      subtitle="Coloque sua base de contatos para gerar receita hoje mesmo."
      :steps="howItWorksSteps"
    />

    <Testimonials
      title="O impacto do follow-up automático nos resultados"
      :testimonials="testimonialsList"
    />

    <LandingFAQ
      title="Perguntas Frequentes sobre Follow-up com IA"
      subtitle="Entenda como funciona a recuperação automática de contatos."
      :faqs="faqList"
    />

    <FinalCTA
      title="Recupere o dinheiro esquecido na sua caixa de entrada"
      subtitle="Ative sequências automáticas de acompanhamento e veja suas vendas crescerem."
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
  title: 'Follow-up Automático de Leads no WhatsApp | Promp IA',
  ogTitle: 'Follow-up Automático de Leads no WhatsApp | Promp IA',
  description: 'Pare de perder vendas por falta de acompanhamento. Sequências automáticas e inteligentes de follow-up no WhatsApp com a Promp IA.',
  ogDescription: 'Pare de perder vendas por falta de acompanhamento.'
})

const whatsappLink = 'https://wa.me/5522992371763?text=' + encodeURIComponent('Olá! Gostaria de ativar sequências automáticas de follow-up no WhatsApp para recuperar orçamentos parados.')

const heroStats = [
  { value: '5x', label: 'Mais chances de fechar vendas' },
  { value: 'Zero', label: 'Esforço manual de cobrança' },
  { value: '+38%', label: 'Recuperação de orçamentos parados' }
]

const painCards = [
  {
    emoji: '⚰️',
    title: 'Orçamentos que caem no esquecimento',
    description: 'Com centenas de conversas entrando todo dia, é impossível lembrar de chamar manualmente cada lead que não respondeu à proposta.',
    stat: 'Mais de 70% dos orçamentos enviados nunca recebem um follow-up'
  },
  {
    emoji: '⏰',
    title: 'Vendedores sem tempo para reaquecer',
    description: 'Sua equipe passa o dia correndo atrás de novas mensagens e não tem tempo para resgatar quem já demonstrou interesse antes.',
    stat: 'Reaquecer um lead existente custa 5x menos que comprar um novo lead'
  },
  {
    emoji: '🙅‍♂️',
    title: 'Medo de parecer chato ou invasivo',
    description: 'Sem mensagens personalizadas e cadenciadas, o follow-up manual parece spam e afasta o cliente em potencial.',
    stat: 'Follow-ups inteligentes com valor aumentam o engajamento em 40%'
  }
]

const solutionFeatures = [
  {
    icon: '📅',
    title: 'Cadência programada de follow-up',
    description: 'Defina lembretes inteligentes: após 2 horas, 24 horas, 3 dias ou 1 semana sem resposta para reengajar o cliente.'
  },
  {
    icon: '🏷️',
    title: 'Segmentação inteligente por status',
    description: 'Envie mensagens específicas para quem pediu orçamento, quem tirou dúvidas ou quem abandonou o carrinho.'
  },
  {
    icon: '📢',
    title: 'Disparo em massa segmentado',
    description: 'Crie campanhas de reativação de base para oferecer promoções exclusivas a contatos inativos.'
  }
]

const beforeAfterData = {
  before: {
    title: 'Sem Follow-up Automatizado',
    items: [
      'Propostas enviadas que nunca mais são lembradas',
      'Leads esfriando e comprando do concorrente dias depois',
      'Vendedores anotando lembretes em papéis ou planilhas perdidas',
      'Base de contatos antiga completamente abandonada'
    ]
  },
  after: {
    title: 'Com Follow-up Inteligente Promp',
    items: [
      'Sequências automáticas que retomam conversas pausadas',
      'Mensagens naturais e amigáveis que parecem feitas à mão',
      'Leads parados voltando ao funil e fechando compra',
      'Faturamento extra sem gastar 1 real a mais em anúncios'
    ]
  }
}

const howItWorksSteps = [
  {
    number: '1',
    title: 'Defina suas regras de follow-up',
    description: 'Escolha quanto tempo esperar após a última mensagem para reativar o contato.',
    icon: '⏱️'
  },
  {
    number: '2',
    title: 'Personalize o tom das mensagens',
    description: 'Configure abordagens com ofertas de ajuda, tira-dúvidas ou condições especiais.',
    icon: '💬'
  },
  {
    number: '3',
    title: 'Assista seus orçamentos virarem vendas',
    description: 'A Promp reengaja os contatos e sua equipe só fecha a transação.',
    icon: '💵'
  }
]

const testimonialsList = [
  {
    name: 'Rodrigo Medeiros',
    role: 'Diretor Comercial',
    company: 'AutoTech Veículos',
    text: 'Mais da metade das nossas vendas de consórcio e financiamento vinham de clientes que não fechavam no primeiro contato. O follow-up automático da Promp recuperou R$ 240 mil em contratos que já dávamos como perdidos.',
    stars: 5,
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80'
  },
  {
    name: 'Juliana Pires',
    role: 'Gerente de Vendas',
    company: 'Design & Interiores',
    text: 'Nossos projetos de marcenaria exigem acompanhamento de dias. A Promp manda mensagem amigável no 3º dia perguntando se o cliente teve tempo de ver a proposta. A taxa de resposta é impressionante!',
    stars: 5,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80'
  }
]

const faqList = [
  {
    question: 'O cliente pode achar que as mensagens são robóticas?',
    answer: 'Não. O texto é gerado com base no contexto específico da conversa anterior daquele cliente, soando totalmente natural e acolhedor.'
  },
  {
    question: 'E se o cliente responder dizendo que já comprou ou não tem interesse?',
    answer: 'A IA compreende a resposta, agradece educadamente e encerra a sequência automaticamente, sem insistência indevida.'
  },
  {
    question: 'Posso filtrar para quem o follow-up deve ser enviado?',
    answer: 'Sim, você pode aplicar filtros por etiquetas, etapas do funil Kanban ou canais de origem.'
  },
  {
    question: 'Existe risco de bloqueio do WhatsApp com envios de follow-up?',
    answer: 'Não, porque os envios são individuais, espaçados e direcionados apenas a pessoas que já iniciaram contato com a sua empresa.'
  }
]
</script>
