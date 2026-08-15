<template>
  <div>
    <LandingHero
      badge="Escala de Vendas no WhatsApp"
      title="Como multiplicar suas vendas no WhatsApp sem precisar contratar um exército"
      highlight="sem precisar contratar um exército"
      subtitle="Disparos em massa segmentados, catálogos visuais, campanhas personalizadas e IA de fechamento. Escale seu faturamento no canal mais lucrativo do Brasil."
      cta-text="Assinar Agora"
      cta-link="https://app.promp.com.br/precos"
      whatsapp-text="ou fale com nosso especialista"
      :whatsapp-link="whatsappLink"
      :stats="heroStats"
    />

    <PainAgitation
      section-title="O teto de crescimento das vendas manuais no WhatsApp"
      section-subtitle="Você sabe que o WhatsApp é uma mina de ouro, mas seus braços não dão conta de escalar."
      :cards="painCards"
    />

    <SolutionShowcase
      badge="A Solução Promp"
      title="Uma máquina completa de prospecção, nutrição e fechamento no WhatsApp"
      highlight="máquina completa"
      description="A Promp combina disparos em massa inteligentes, galeria de mídia centralizada, catálogo integrado de produtos e IA capacitada para fechar compras no piloto automático."
      :features="solutionFeatures"
      :before-after="beforeAfterData"
    />

    <HowItWorks
      title="Como escalar suas vendas no WhatsApp em 3 passos"
      subtitle="Coloque seu motor de escala para rodar."
      :steps="howItWorksSteps"
    />

    <Testimonials
      title="Empresas que escalaram faturamento com a Promp"
      :testimonials="testimonialsList"
    />

    <LandingFAQ
      title="Perguntas Frequentes sobre Escala de Vendas no WhatsApp"
      subtitle="Tudo sobre disparos em massa, catálogos e automação de vendas."
      :faqs="faqList"
    />

    <FinalCTA
      title="Transforme seu WhatsApp na sua maior fonte de lucro"
      subtitle="Escale suas vendas sem limites operacionais com a tecnologia Promp IA."
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
  title: 'Como Escalar Vendas pelo WhatsApp com IA | Promp IA',
  ogTitle: 'Como Escalar Vendas pelo WhatsApp com IA | Promp IA',
  description: 'Multiplique suas vendas no WhatsApp com disparos em massa segmentados, catálogo integrado e Inteligência Artificial para atendimento e fechamento.',
  ogDescription: 'Multiplique suas vendas no WhatsApp com disparos em massa segmentados e IA.'
})

const whatsappLink = 'https://wa.me/5522992371763?text=' + encodeURIComponent('Olá! Quero escalar minhas vendas no WhatsApp com disparos em massa segmentados e IA de fechamento.')

const heroStats = [
  { value: '10x', label: 'Mais volume de vendas processadas' },
  { value: '98%', label: 'Taxa de abertura de mensagens' },
  { value: 'Milhares', label: 'De disparos simultâneos sem esforço' }
]

const painCards = [
  {
    emoji: '🧱',
    title: 'O limite físico de conversas por atendente',
    description: 'Um vendedor humano bem treinado consegue conduzir no máximo 30 a 50 conversas por dia com qualidade antes de travar.',
    stat: 'O crescimento da empresa fica limitado ao tamanho da equipe'
  },
  {
    emoji: '🚫',
    title: 'Medo de bloqueio em disparos amadores',
    description: 'Usar ferramentas piratas ou listas de transmissão inadequadas queima chips e destrói o patrimônio do seu número comercial.',
    stat: 'Chips banidos por falta de aquecimento e cadência profissional'
  },
  {
    emoji: '📁',
    title: 'Dificuldade para apresentar produtos',
    description: 'Ficar procurando fotos na galeria do celular e digitando preços manualmente cansa o cliente e atrasa a compra.',
    stat: 'Lentidão na apresentação derruba a conversão imediata'
  }
]

const solutionFeatures = [
  {
    icon: '🚀',
    title: 'Disparos em massa segmentados com segurança',
    description: 'Envie promoções, novidades e ofertas para milhares de contatos segmentados por etiquetas com intervalos inteligentes anti-bloqueio.'
  },
  {
    icon: '🖼️',
    title: 'Galeria de mídias e catálogo instantâneo',
    description: 'Envie fotos, vídeos de demonstração, PDFs de apresentação e áudios com um único toque ou via IA.'
  },
  {
    icon: '🤖',
    title: 'IA treinada para negociação e vendas',
    description: 'Apresenta condições de pagamento, calcula frete, tira dúvidas e gera links diretos de checkout para o cliente pagar.'
  }
]

const beforeAfterData = {
  before: {
    title: 'Vendas Manuais',
    items: [
      'Envio de mensagens uma a uma pelo celular',
      'Tempo gasto procurando fotos e links em pastas desorganizadas',
      'Incapacidade de aproveitar datas comemorativas (Black Friday, Natal)',
      'Gargalo humano impedindo a empresa de crescer'
    ]
  },
  after: {
    title: 'Vendas em Escala com Promp IA',
    items: [
      'Campanhas disparadas para toda a base com segmentação precisa',
      'Catálogo e materiais enviados instantaneamente',
      'Capacidade de absorver picos de milhares de clientes simultâneos',
      'Lucro escalando sem necessidade de contratações infladas'
    ]
  }
}

const howItWorksSteps = [
  {
    number: '1',
    title: 'Importe sua base de contatos',
    description: 'Suba sua lista de clientes e aplique etiquetas de interesse.',
    icon: '📥'
  },
  {
    number: '2',
    title: 'Crie sua campanha de disparo',
    description: 'Escreva sua oferta, adicione imagens ou áudios e programe o envio.',
    icon: '✉️'
  },
  {
    number: '3',
    title: 'Deixe a IA vender',
    description: 'A IA assume as respostas das pessoas interessadas e fecha os pedidos.',
    icon: '💰'
  }
]

const testimonialsList = [
  {
    name: 'Bernardo Guimarães',
    role: 'Fundador',
    company: 'NutriFit Suplementos',
    text: 'Na última Black Friday disparamos uma campanha para 14 mil clientes da nossa base pelo Promp. A IA atendeu mais de 4 mil pessoas que responderam ao mesmo tempo e bateu R$ 380 mil em vendas em 48 horas. Jamais conseguiríamos com equipe manual.',
    stars: 5,
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80'
  },
  {
    name: 'Renata Figueiredo',
    role: 'Diretora Comercial',
    company: 'Maison Joias',
    text: 'Usamos os disparos segmentados por data de aniversário e lançamentos de coleções. Os clientes se sentem exclusivos e a IA manda o catálogo em segundos. Nossas vendas pelo WhatsApp triplicaram.',
    stars: 5,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80'
  }
]

const faqList = [
  {
    question: 'Como a Promp protege meu número contra bloqueios?',
    answer: 'Nossa ferramenta utiliza temporizadores randômicos entre mensagens, rotação de variáveis de texto e segue as boas práticas de entrega aprovadas pela Meta.'
  },
  {
    question: 'Posso importar planilhas do Excel com contatos?',
    answer: 'Sim, você pode importar listas de contatos com nomes, telefones e tags personalizadas facilmente via arquivo CSV ou Excel.'
  },
  {
    question: 'A IA consegue enviar fotos dos produtos quando o cliente pedir?',
    answer: 'Sim! Você cadastra as fotos na galeria com palavras-chave e a IA envia a imagem correspondente durante a conversa.'
  },
  {
    question: 'Posso integrar com minha loja virtual para gerar links de pagamento?',
    answer: 'Sim, a Promp se integra com WooCommerce, Nuvemshop e gateways de pagamento para enviar o link direto de compra no chat.'
  }
]
</script>
