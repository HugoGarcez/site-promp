<template>
  <div>
    <LandingHero
      badge="Modernização com Inteligência Artificial"
      title="Seus concorrentes já vendem no piloto automático com IA. E a sua empresa?"
      highlight="no piloto automático com IA"
      subtitle="Não fique para trás na maior transformação do mercado. Coloque uma IA de atendimento de ponta para rodar no seu negócio em menos de 10 minutos."
      cta-text="Assinar Agora"
      cta-link="https://app.promp.com.br/precos"
      whatsapp-text="ou fale com nosso especialista"
      :whatsapp-link="whatsappLink"
      :stats="heroStats"
    />

    <PainAgitation
      section-title="O risco real de adiar a inovação no seu atendimento"
      section-subtitle="Enquanto você pensa, empresas do seu mesmo nicho estão cortando custos e vendendo 3x mais."
      :cards="painCards"
    />

    <SolutionShowcase
      badge="A Solução Promp"
      title="A tecnologia dos líderes de mercado acessível para o seu negócio"
      highlight="acessível para o seu negócio"
      description="A Promp entrega uma central completa de IA pronta para usar, com a mesma tecnologia de gigantes globais, configurada em minutos e personalizada com a identidade da sua marca."
      :features="solutionFeatures"
      :before-after="beforeAfterData"
    />

    <HowItWorks
      title="Como colocar sua empresa na era da IA hoje"
      subtitle="O processo mais simples e rápido do mercado."
      :steps="howItWorksSteps"
    />

    <Testimonials
      title="Quem já deu o salto tecnológico com a Promp"
      :testimonials="testimonialsList"
    />

    <LandingFAQ
      title="Dúvidas sobre Adotar IA no Atendimento"
      subtitle="Esclareça os mitos e comece com total segurança."
      :faqs="faqList"
    />

    <FinalCTA
      title="Não deixe seus concorrentes dominarem o seu mercado"
      subtitle="Dê o próximo passo na evolução do seu atendimento hoje mesmo."
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
  title: 'Modernize seu Atendimento com IA | Promp IA',
  ogTitle: 'Modernize seu Atendimento com IA | Promp IA',
  description: 'Coloque Inteligência Artificial de ponta no atendimento do seu negócio. Pare de perder clientes para a concorrência e escale suas vendas.',
  ogDescription: 'Coloque Inteligência Artificial de ponta no atendimento do seu negócio.'
})

const whatsappLink = 'https://wa.me/5522992371763?text=' + encodeURIComponent('Olá! Quero modernizar o atendimento da minha empresa com Inteligência Artificial na Promp.')

const heroStats = [
  { value: '10 min', label: 'Setup completo e intuitivo' },
  { value: 'Zero', label: 'Código ou complexidade' },
  { value: '10x', label: 'Mais capacidade de atendimento' }
]

const painCards = [
  {
    emoji: '📉',
    title: 'Perda de competitividade',
    description: 'Empresas com IA respondem instantaneamente, enviam áudios perfeitos e fecham vendas enquanto você ainda está contratando atendentes.',
    stat: 'Empresas com IA operam com 60% menos custo fixo'
  },
  {
    emoji: '🤯',
    title: 'Medo da tecnologia parecer complexa',
    description: 'Você acha que IA exige equipe técnica cara, programadores ou meses de treinamento complexo.',
    stat: 'A Promp foi criada para ser configurada sem nenhuma linha de código'
  },
  {
    emoji: '💸',
    title: 'Custo de folha de pagamento inflado',
    description: 'Para dobrar o atendimento você precisa dobrar funcionários, encargos, treinamento e gerência de conflitos.',
    stat: 'A IA escala infinitamente sem aumentar seu custo por lead'
  }
]

const solutionFeatures = [
  {
    icon: '🎓',
    title: 'Treinamento simples por documentos',
    description: 'Basta subir seus PDFs, tabelas de preços, catálogo ou links do site. A IA aprende tudo instantaneamente.'
  },
  {
    icon: '🤝',
    title: 'Parceiro Oficial Meta & WhatsApp',
    description: 'Segurança absoluta para o seu número, sem riscos de bloqueio por automações amadoras.'
  },
  {
    icon: '📊',
    title: 'Dashboard de inteligência e insights',
    description: 'Acompanhe em tempo real os tópicos mais perguntados pelos clientes e as objeções mais comuns.'
  }
]

const beforeAfterData = {
  before: {
    title: 'Negócio Tradicional',
    items: [
      'Dependência total de atendentes humanos para tarefas básicas',
      'Atendimento limitado a 8h por dia de segunda a sexta',
      'Tempo de resposta lento e qualidade inconsistente',
      'Dificuldade para escalar em períodos promocionais'
    ]
  },
  after: {
    title: 'Negócio Potencializado com Promp IA',
    items: [
      'IA treinada realizando 80% do trabalho repetitivo',
      'Operação 24/7 sem interrupções ou férias',
      'Padrão de excelência mantido em 100% das conversas',
      'Escalabilidade infinita para atender milhares de leads'
    ]
  }
}

const howItWorksSteps = [
  {
    number: '1',
    title: 'Crie sua conta',
    description: 'Escolha seu plano e acesse o painel intuitivo da Promp em instantes.',
    icon: '✨'
  },
  {
    number: '2',
    title: 'Suba o material da sua empresa',
    description: 'Envie seu manual de produtos, serviços e perguntas frequentes para a IA.',
    icon: '📚'
  },
  {
    number: '3',
    title: 'Conecte e supere a concorrência',
    description: 'Ative no WhatsApp e veja sua empresa atender com tecnologia de ponta.',
    icon: '🏆'
  }
]

const testimonialsList = [
  {
    name: 'Gustavo Mendonça',
    role: 'Diretor Comercial',
    company: 'Nexus Distribuidora',
    text: 'Estávamos perdendo espaço para um concorrente novo que atendia no WhatsApp em segundos. Implementamos a Promp em uma tarde e viramos o jogo. Hoje atendemos 5x mais clientes com a mesma equipe.',
    stars: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80'
  },
  {
    name: 'Patrícia Alencar',
    role: 'Fundadora',
    company: 'Clínica Bella Vita',
    text: 'Eu achava que IA no WhatsApp deixava o atendimento frio. Mas a humanização de voz e texto da Promp é tão perfeita que os pacientes elogiam a simpatia da nossa assistente virtual!',
    stars: 5,
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80'
  }
]

const faqList = [
  {
    question: 'Preciso de programador para configurar a Promp?',
    answer: 'Absolutamente não. A plataforma foi desenvolvida para que qualquer pessoa consiga configurar em poucos minutos sem nenhum conhecimento de código.'
  },
  {
    question: 'A IA pode inventar informações que não são da minha empresa?',
    answer: 'Não. Nossa IA é rigorosamente parametrizada para responder apenas com base nos documentos e regras que você fornecer.'
  },
  {
    question: 'E se eu quiser alterar preços ou informações depois?',
    answer: 'Basta editar no painel ou subir um novo documento. As atualizações passam a valer imediatamente para as próximas mensagens.'
  },
  {
    question: 'Existe fidelidade ou contrato de longo prazo?',
    answer: 'Não, você pode assinar mensalmente e cancelar a qualquer momento sem taxas ocultas.'
  }
]
</script>
