<template>
  <div>
    <LandingHero
      badge="Automação de FAQ Inteligente"
      title="Sua equipe gasta 80% do dia respondendo as mesmas perguntas?"
      highlight="respondendo as mesmas perguntas"
      subtitle="Preço, localização, catálogo, formas de pagamento e prazos. A Promp resolve dúvidas repetitivas com IA treinada e liberta seu time para focar em fechar vendas complexas."
      cta-text="Assinar Agora"
      cta-link="https://app.promp.com.br/precos"
      whatsapp-text="ou fale com nosso especialista"
      :whatsapp-link="whatsappLink"
      :stats="heroStats"
    />

    <PainAgitation
      section-title="O desperdício de talento e tempo no atendimento manual"
      section-subtitle="Contratar pessoas qualificadas para virarem robôs de copiar e colar textos é caro e desmotivador."
      :cards="painCards"
    />

    <SolutionShowcase
      badge="A Solução Promp"
      title="Uma base de conhecimento viva que responde tudo com precisão cirúrgica"
      highlight="precisão cirúrgica"
      description="Carregue seus catálogos, manuais, tabelas e políticas da empresa. A Promp processa todo o conteúdo e responde com naturalidade, contextualização e segurança."
      :features="solutionFeatures"
      :before-after="beforeAfterData"
    />

    <HowItWorks
      title="Como automatizar suas dúvidas frequentes em 3 passos"
      subtitle="Treine sua IA em poucos minutos e livre sua equipe do trabalho braçal."
      :steps="howItWorksSteps"
    />

    <Testimonials
      title="Quem liberou a equipe do suporte repetitivo"
      :testimonials="testimonialsList"
    />

    <LandingFAQ
      title="Perguntas Frequentes sobre Base de Conhecimento com IA"
      subtitle="Tudo sobre o treinamento e precisão das respostas da Promp."
      :faqs="faqList"
    />

    <FinalCTA
      title="Livre sua equipe do trabalho repetitivo agora mesmo"
      subtitle="Coloque a IA para responder as dúvidas e deixe seus vendedores venderem."
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
  title: 'Respostas Automáticas e FAQ com IA no WhatsApp | Promp IA',
  ogTitle: 'Respostas Automáticas e FAQ com IA no WhatsApp | Promp IA',
  description: 'Pare de perder tempo respondendo as mesmas perguntas no WhatsApp. Base de conhecimento com IA para responder dúvidas repetitivas com precisão.',
  ogDescription: 'Pare de perder tempo respondendo as mesmas perguntas no WhatsApp.'
})

const whatsappLink = 'https://wa.me/5522992371763?text=' + encodeURIComponent('Olá! Quero treinar uma IA com os documentos da minha empresa para responder dúvidas frequentes automaticamente.')

const heroStats = [
  { value: '80%', label: 'Das dúvidas resolvidas pela IA' },
  { value: '4x', label: 'Mais tempo para sua equipe vender' },
  { value: '< 2s', label: 'Para responder qualquer dúvida técnica' }
]

const painCards = [
  {
    emoji: '📋',
    title: 'O ciclo infinito do copia e cola',
    description: 'Seus atendentes passam horas procurando mensagens padrão em blocos de notas para responder as mesmas 10 perguntas todo santo dia.',
    stat: 'Mais de 4 horas diárias gastas por atendente em mensagens repetidas'
  },
  {
    emoji: '🥱',
    title: 'Equipe desmotivada e com burnout',
    description: 'A rotina repetitiva desmotiva vendedores de alta performance, gerando erros, respostas frias e alta rotatividade de funcionários.',
    stat: 'Alta rotatividade no suporte por estresse e tédio operacional'
  },
  {
    emoji: '📉',
    title: 'Vendas de alto valor abandonadas',
    description: 'Enquanto o vendedor tira dúvidas básicas de quem só quer saber o endereço, clientes prontos para fechar grandes contratos ficam esperando.',
    stat: 'Oportunidades de alto ticket perdidas por falta de foco'
  }
]

const solutionFeatures = [
  {
    icon: '📚',
    title: 'Treinamento com qualquer tipo de documento',
    description: 'Suba PDFs de catálogo, planilhas de estoque, documentos de políticas ou links do seu site para a IA aprender.'
  },
  {
    icon: '⚡',
    title: 'Mensagens rápidas e atalhos inteligentes',
    description: 'Para os atendentes humanos, a Promp oferece biblioteca de mensagens rápidas com pré-visualização e busca instantânea.'
  },
  {
    icon: '🎙️',
    title: 'Respostas em áudio ultra-realista',
    description: 'Em vez de textos longos e cansativos, a IA pode explicar dúvidas complexas através de áudios calorosos e humanizados.'
  }
]

const beforeAfterData = {
  before: {
    title: 'Atendimento Tradicional',
    items: [
      'Atendentes digitando a mesma resposta 50 vezes ao dia',
      'Respostas com informações desatualizadas ou divergentes',
      'Demora para consultar tabelas complexas de preços',
      'Vendedores ocupados demais com SAC para prospectar'
    ]
  },
  after: {
    title: 'Atendimento com Promp IA',
    items: [
      '80% das dúvidas triviais resolvidas sem intervenção humana',
      'Informações 100% precisas e padronizadas em todos os canais',
      'Respostas imediatas mesmo sobre manuais de 100 páginas',
      'Vendedores com tempo livre para fazer reuniões e negociar'
    ]
  }
}

const howItWorksSteps = [
  {
    number: '1',
    title: 'Envie seus documentos',
    description: 'Faça upload de tabelas de preços, regras de frete, cardápios ou manuais.',
    icon: '📄'
  },
  {
    number: '2',
    title: 'Faça perguntas de teste',
    description: 'Converse com sua IA no painel para validar o tom e a precisão das respostas.',
    icon: '🧪'
  },
  {
    number: '3',
    title: 'Libere seu time para vender',
    description: 'Ative nos canais e veja as dúvidas serem respondidas no automático.',
    icon: '🚀'
  }
]

const testimonialsList = [
  {
    name: 'André Carvalho',
    role: 'Head de Suporte',
    company: 'SaaS CloudFlow',
    text: 'Temos um software com muitas configurações. Nossa equipe passava o dia explicando como redefinir senha ou emitir nota. A IA da Promp aprendeu toda a nossa base de ajuda e hoje responde 82% dos tickets sem tocar em um atendente humano.',
    stars: 5,
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80'
  },
  {
    name: 'Larissa Couto',
    role: 'Gerente Geral',
    company: 'Escola de Idiomas Global',
    text: 'Na época de matrículas eram centenas de pessoas perguntando valores de mensalidade, horários e metodologia. A Promp atendeu mais de 3 mil famílias e nossos consultores só entraram para formalizar o contrato. Batemos recorde histórico.',
    stars: 5,
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80'
  }
]

const faqList = [
  {
    question: 'Quais tipos de arquivo posso subir para a IA aprender?',
    answer: 'Você pode subir arquivos em PDF, planilhas Excel/CSV, documentos Word, arquivos de texto ou simplesmente colar links do seu site.'
  },
  {
    question: 'A IA responde se o cliente mandar áudio no WhatsApp?',
    answer: 'Sim! A Promp transcreve o áudio do cliente, compreende a dúvida e responde em texto ou áudio humanizado.'
  },
  {
    question: 'Como faço para atualizar informações quando um preço mudar?',
    answer: 'Você pode editar o documento ou subir uma nova versão no painel. O aprendizado da IA é atualizado imediatamente.'
  },
  {
    question: 'A IA consegue responder dúvidas técnicas com detalhes?',
    answer: 'Sim, se a informação estiver presente nos seus documentos de treinamento, ela detalha dimensões, voltagens, regras fiscais e procedimentos passo a passo.'
  }
]
</script>
