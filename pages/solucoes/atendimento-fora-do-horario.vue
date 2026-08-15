<template>
  <div>
    <LandingHero
      badge="Atendimento 24/7 com IA"
      title="Sua empresa fecha às 18h, mas seus clientes continuam querendo comprar"
      highlight="continuam querendo comprar"
      subtitle="40% das mensagens de compra chegam à noite, nos fins de semana e feriados. Com a Promp, sua empresa atende, tira dúvidas e vende 24 horas por dia, 7 dias por semana."
      cta-text="Assinar Agora"
      cta-link="https://app.promp.com.br/precos"
      whatsapp-text="ou fale com nosso especialista"
      :whatsapp-link="whatsappLink"
      :stats="heroStats"
    />

    <PainAgitation
      section-title="O prejuízo de desligar o atendimento no fim do expediente"
      section-subtitle="O consumidor atual pesquisa e decide compras nos momentos livres: no sofá, à noite ou no domingo."
      :cards="painCards"
    />

    <SolutionShowcase
      badge="A Solução Promp"
      title="Uma equipe de vendas incansável que nunca dorme nem tira folga"
      highlight="nunca dorme nem tira folga"
      description="A Promp assume seu WhatsApp no momento em que sua equipe encerra o expediente, mantendo o mesmo padrão de atendimento, tirando dúvidas, agendando compromissos e fechando vendas."
      :features="solutionFeatures"
      :before-after="beforeAfterData"
    />

    <HowItWorks
      title="Como ativar o atendimento noturno e fins de semana"
      subtitle="Coloque seu negócio para faturar 24h em 3 passos simples."
      :steps="howItWorksSteps"
    />

    <Testimonials
      title="Quem já vende 24h por dia com a Promp"
      :testimonials="testimonialsList"
    />

    <LandingFAQ
      title="Perguntas Frequentes sobre Atendimento 24 Horas"
      subtitle="Tudo sobre a operação ininterrupta com inteligência artificial."
      :faqs="faqList"
    />

    <FinalCTA
      title="Comece a vender 24 horas por dia ainda hoje"
      subtitle="Não perca mais nenhuma venda no momento em que seu cliente quer comprar."
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
  title: 'Atendimento 24/7 no WhatsApp com Inteligência Artificial | Promp IA',
  ogTitle: 'Atendimento 24/7 no WhatsApp com Inteligência Artificial | Promp IA',
  description: 'Atenda, qualifique e venda 24 horas por dia no WhatsApp, inclusive à noite e finais de semana, sem custos com equipes de plantão.',
  ogDescription: 'Atenda, qualifique e venda 24 horas por dia no WhatsApp.'
})

const whatsappLink = 'https://wa.me/5522992371763?text=' + encodeURIComponent('Olá! Preciso de atendimento 24 horas no WhatsApp para não perder vendas à noite e nos fins de semana.')

const heroStats = [
  { value: '24/7', label: 'Operação ininterrupta' },
  { value: '+35%', label: 'Vendas geradas no contraturno' },
  { value: 'R$ 0', label: 'Custo com horas extras ou turno noturno' }
]

const painCards = [
  {
    emoji: '🌙',
    title: 'A mensagem fria de ausência',
    description: 'Mensagens automáticas secas avisando que você só volta amanhã empurram o lead direto para o concorrente que está online.',
    stat: '85% dos leads desistem da compra ao ver mensagem de ausência'
  },
  {
    emoji: '☕',
    title: 'A avalanche de mensagens na segunda de manhã',
    description: 'Sua equipe chega ao trabalho com centenas de mensagens acumuladas do fim de semana e passa a manhã toda apagando incêndio.',
    stat: 'Horas perdidas apenas para triar contatos atrasados'
  },
  {
    emoji: '💰',
    title: 'Custo inviável de equipe noturna',
    description: 'Contratar atendentes para turnos da noite, madrugada e finais de semana traz custos trabalhistas altíssimos que inviabilizam a operação.',
    stat: 'Turnos adicionais aumentam os custos de folha em mais de 70%'
  }
]

const solutionFeatures = [
  {
    icon: '⏰',
    title: 'Horários e regras flexíveis',
    description: 'Configure para a IA atuar 24h por dia ou apenas fora do horário comercial, feriados e finais de semana.'
  },
  {
    icon: '📅',
    title: 'Agendamento automático de compromissos',
    description: 'A IA consulta sua disponibilidade e agenda reuniões, consultas ou visitas diretamente na sua agenda do Google Calendar.'
  },
  {
    icon: '💳',
    title: 'Envio de links de pagamento e propostas',
    description: 'Apresente valores, gere links de checkout ou envie chaves Pix para que o cliente pague na hora sem esperar o dia seguinte.'
  }
]

const beforeAfterData = {
  before: {
    title: 'Sem Atendimento 24/7',
    items: [
      'Empresa parada 16 horas por dia e fins de semana inteiros',
      'Leads de campanhas noturnas completamente desperdiçados',
      'Mensagens automáticas secas que não tiram dúvidas',
      'Manhãs caóticas com fila de clientes impacientes'
    ]
  },
  after: {
    title: 'Com a Promp IA 24/7',
    items: [
      'Vendas e agendamentos acontecendo enquanto você dorme',
      'Clientes atendidos com empatia e respostas completas a qualquer hora',
      'Acorde com reuniões confirmadas e pagamentos realizados',
      'Zero estresse na abertura do expediente da sua equipe'
    ]
  }
}

const howItWorksSteps = [
  {
    number: '1',
    title: 'Conecte seu WhatsApp',
    description: 'Vincule seu número à Promp em menos de 1 minuto.',
    icon: '📲'
  },
  {
    number: '2',
    title: 'Defina o horário de atuação',
    description: 'Escolha se a IA atende sempre ou assume quando seu time desloga.',
    icon: '🌙'
  },
  {
    number: '3',
    title: 'Fature enquanto descansa',
    description: 'Seus clientes recebem atendimento premium em qualquer dia e horário.',
    icon: '🏆'
  }
]

const testimonialsList = [
  {
    name: 'Marcelo Rezende',
    role: 'Proprietário',
    company: 'Auto Peças Express',
    text: 'Mais de 40% das nossas vendas de peças acontecem entre 20h e 23h, quando as pessoas chegam em casa e vão consertar o carro. Com a Promp, a IA identifica a peça pelo modelo do veículo e envia o link de pagamento. Faturamento subiu 30%.',
    stars: 5,
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&auto=format&fit=crop&q=80'
  },
  {
    name: 'Fernanda Martins',
    role: 'Diretora',
    company: 'Studio Pilates & Fisioterapia',
    text: 'As pessoas decidem cuidar da saúde no domingo à noite. Antes elas mandavam mensagem e quando respondíamos na segunda já tinham esfriado. Hoje a IA agenda a aula experimental no domingo mesmo.',
    stars: 5,
    avatar: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=150&auto=format&fit=crop&q=80'
  }
]

const faqList = [
  {
    question: 'Posso usar a IA apenas fora do horário comercial?',
    answer: 'Sim! Você define no painel seu horário de expediente (ex: das 8h às 18h). Dentro do horário sua equipe atende; fora dele, a Promp assume automaticamente.'
  },
  {
    question: 'A IA consegue agendar consultas e reuniões sozinha?',
    answer: 'Sim, através da integração com Google Calendar, ela verifica horários vagos, propõe opções ao cliente e confirma o agendamento.'
  },
  {
    question: 'E se o cliente quiser falar com uma pessoa urgentemente?',
    answer: 'A IA registra o recado, sinaliza a prioridade no painel e envia uma notificação para o seu time retornar no início do próximo expediente.'
  },
  {
    question: 'A IA funciona nos feriados nacionais e locais?',
    answer: 'Sim! Você pode cadastrar feriados ou deixar ativado permanentemente.'
  }
]
</script>
