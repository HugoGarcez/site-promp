<template>
  <div>
    <LandingHero
      badge="Gestão e Métricas de Atendimento"
      title="Você sabe exatamente como sua equipe está atendendo seus clientes?"
      highlight="como sua equipe está atendendo"
      subtitle="Sem métricas, tempo de resposta e histórico de conversas, você gerencia no escuro. A Promp entrega visibilidade total em tempo real com relatórios, NPS e protocolos."
      cta-text="Assinar Agora"
      cta-link="https://app.promp.com.br/precos"
      whatsapp-text="ou fale com nosso especialista"
      :whatsapp-link="whatsappLink"
      :stats="heroStats"
    />

    <PainAgitation
      section-title="Os perigos da falta de supervisão no WhatsApp da sua empresa"
      section-subtitle="Mensagens apagadas, clientes mal atendidos e oportunidades ignoradas sem que você fique sabendo."
      :cards="painCards"
    />

    <SolutionShowcase
      badge="A Solução Promp"
      title="Visibilidade absoluta sobre cada mensagem trocada na sua empresa"
      highlight="Visibilidade absoluta"
      description="Supervisione sua operação com dashboards dinâmicos, métricas individuais por atendente, notas privadas de orientação e pesquisas automáticas de satisfação (NPS)."
      :features="solutionFeatures"
      :before-after="beforeAfterData"
    />

    <HowItWorks
      title="Como implantar o controle profissional em 3 passos"
      subtitle="Supervisione seu atendimento com total clareza."
      :steps="howItWorksSteps"
    />

    <Testimonials
      title="O que mudou para os líderes que adotaram a Promp"
      :testimonials="testimonialsList"
    />

    <LandingFAQ
      title="Perguntas Frequentes sobre Gestão de Equipe e Métricas"
      subtitle="Tudo sobre relatórios, auditoria e controle de atendimento."
      :faqs="faqList"
    />

    <FinalCTA
      title="Tenha controle total e transforme seu atendimento em referência"
      subtitle="Supervisione sua equipe com métricas claras e encante seus clientes."
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
  title: 'Gestão e Relatórios de Atendimento no WhatsApp | Promp IA',
  ogTitle: 'Gestão e Relatórios de Atendimento no WhatsApp | Promp IA',
  description: 'Supervisione sua equipe de atendimento no WhatsApp com métricas de tempo de resposta, relatórios por operador, notas NPS e protocolos.',
  ogDescription: 'Supervisione sua equipe de atendimento no WhatsApp com métricas completas.'
})

const whatsappLink = 'https://wa.me/5522992371763?text=' + encodeURIComponent('Olá! Gostaria de ter relatórios, métricas de tempo de resposta e supervisão da minha equipe no WhatsApp.')

const heroStats = [
  { value: '100%', label: 'Conversas auditáveis em tempo real' },
  { value: 'NPS', label: 'Avaliações automáticas de satisfação' },
  { value: 'Tempo real', label: 'Dashboards e relatórios por operador' }
]

const painCards = [
  {
    emoji: '🙈',
    title: 'Gestão às cegas',
    description: 'Você não sabe quanto tempo cada atendente demora para responder, quantas conversas finalizou ou se foi educado com o cliente.',
    stat: 'Falta de padrão derruba a retenção de clientes em 45%'
  },
  {
    emoji: '🗑️',
    title: 'Conversas perdidas ou deletadas',
    description: 'Em celulares convencionais, conversas podem ser apagadas ou contatos levados embora por funcionários que se desligam da empresa.',
    stat: 'Risco jurídico e perda de patrimônio comercial'
  },
  {
    emoji: '📉',
    title: 'Sem dados para tomar decisões',
    description: 'Você não consegue identificar quais produtos têm mais dúvidas, quais atendentes vendem mais e quais horários têm maior demanda.',
    stat: 'Decisões comerciais tomadas sem base sólida de dados'
  }
]

const solutionFeatures = [
  {
    icon: '📊',
    title: 'Relatórios analíticos completos',
    description: 'Monitore tempo médio de espera (TME), tempo médio de atendimento (TMA), volume de mensagens e taxa de resolução.'
  },
  {
    icon: '⭐',
    title: 'Pesquisa de avaliação (NPS) automática',
    description: 'Ao finalizar o atendimento, o cliente recebe uma pesquisa de satisfação de 1 a 5 estrelas para avaliar o atendente.'
  },
  {
    icon: '🔒',
    title: 'Protocolos de atendimento e auditoria',
    description: 'Geração automática de número de protocolo para cada atendimento, garantindo segurança jurídica e rastreabilidade.'
  }
]

const beforeAfterData = {
  before: {
    title: 'Gestão Descentralizada',
    items: [
      'Dono da empresa sem acesso às conversas dos vendedores',
      'Zero controle sobre o tempo que o cliente espera para ser atendido',
      'Impossibilidade de medir a qualidade ou satisfação do público',
      'Perda de histórico quando um atendente sai da empresa'
    ]
  },
  after: {
    title: 'Gestão Profissional com Promp',
    items: [
      'Painel administrativo com visualização de todos os chats ao vivo',
      'Métricas claras de desempenho para premiar os melhores colaboradores',
      'Pesquisas de NPS automáticas para calibrar a qualidade',
      'Base de dados 100% segura e pertencente à sua empresa'
    ]
  }
}

const howItWorksSteps = [
  {
    number: '1',
    title: 'Cadastre seus atendentes',
    description: 'Crie acessos individuais com permissões personalizadas para cada membro.',
    icon: '👤'
  },
  {
    number: '2',
    title: 'Ative protocolos e NPS',
    description: 'Configure regras de pesquisa de satisfação e geração de números de protocolo.',
    icon: '📋'
  },
  {
    number: '3',
    title: 'Acompanhe pelo dashboard',
    description: 'Visualize gráficos, relatórios e métricas de desempenho em tempo real.',
    icon: '📈'
  }
]

const testimonialsList = [
  {
    name: 'Cláudio Albuquerque',
    role: 'Diretor Geral',
    company: 'Rede FarmaMais',
    text: 'Com 12 filiais, era impossível saber como os atendentes tratavam os clientes no WhatsApp. A Promp nos deu um painel unificado com relatórios diários de TMA e notas de avaliação. Nossa nota média de atendimento subiu de 3.8 para 4.9 estrelas.',
    stars: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80'
  },
  {
    name: 'Viviane Rocha',
    role: 'Gerente de Operações',
    company: 'Seguros Confiança',
    text: 'O recurso de gerar protocolo de atendimento e auditar conversas nos deu a segurança jurídica que precisávamos no setor financeiro. A equipe sabe que está sendo acompanhada e o padrão de excelência virou realidade.',
    stars: 5,
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&auto=format&fit=crop&q=80'
  }
]

const faqList = [
  {
    question: 'O atendente consegue ver as conversas de outros colegas?',
    answer: 'Você decide! É possível configurar para que cada atendente veja apenas seus próprios chats ou tenha visão geral do setor.'
  },
  {
    question: 'Posso intervir em uma conversa sem que o cliente perceba?',
    answer: 'Sim, você pode adicionar Notas Internas visíveis apenas para sua equipe ou assumir o chat diretamente.'
  },
  {
    question: 'Os relatórios podem ser exportados?',
    answer: 'Sim, você pode exportar relatórios de atendimentos, contatos e métricas em planilhas para análises gerenciais.'
  },
  {
    question: 'O histórico das mensagens fica salvo por quanto tempo?',
    answer: 'Todas as mensagens, mídias e notas ficam armazenadas com segurança na nuvem enquanto sua conta estiver ativa.'
  }
]
</script>
