<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const colorMode = useColorMode()

// Animated counter
const counters = ref({
  empresas: 0,
  mensagens: 0,
  conversao: 0,
  tempo: 0,
})

const targetCounters = {
  empresas: 500,
  mensagens: 2,
  conversao: 47,
  tempo: 24,
}

// FAQ toggle
const openFaq = ref(null)
const toggleFaq = (i) => { openFaq.value = openFaq.value === i ? null : i }

// Intersection observer for animations
const observerElements = ref([])

onMounted(() => {
  if (process.client) {
    // Animate counters
    const duration = 2000
    const steps = 60
    const interval = duration / steps

    let step = 0
    const timer = setInterval(() => {
      step++
      const progress = Math.min(step / steps, 1)
      const easeOut = 1 - Math.pow(1 - progress, 3)

      counters.value.empresas = Math.round(targetCounters.empresas * easeOut)
      counters.value.mensagens = +(targetCounters.mensagens * easeOut).toFixed(1)
      counters.value.conversao = Math.round(targetCounters.conversao * easeOut)
      counters.value.tempo = Math.round(targetCounters.tempo * easeOut)

      if (step >= steps) clearInterval(timer)
    }, interval)

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1 })

    setTimeout(() => {
      document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        observer.observe(el)
      })
    }, 100)
  }
})

// WhatsApp CTA link
const whatsappLink = 'https://wa.me/5522992371763?text=Ol%C3%A1%2C%20quero%20conhecer%20a%20IA%20da%20Promp%20para%20minha%20empresa'
const signupLink = 'https://app.promp.com.br/#/signup'

// FAQ items
const faqItems = [
  {
    question: 'A IA realmente entende sobre o meu negócio?',
    answer: 'Sim! Diferente de chatbots genéricos, a IA da Promp é treinada exclusivamente com os seus documentos, catálogos, tabelas de preço e informações do seu negócio. Ela responde com a precisão de um funcionário que conhece tudo da sua empresa.'
  },
  {
    question: 'Preciso de conhecimento técnico para configurar?',
    answer: 'Zero. Você só precisa enviar seus arquivos (PDFs, planilhas, textos) e a IA aprende sozinha em menos de 5 minutos. Não precisa programar nada, instalar nada, nem contratar desenvolvedor.'
  },
  {
    question: 'Funciona em quais canais além do WhatsApp?',
    answer: 'A Promp funciona no WhatsApp, Instagram Direct, Telegram, Webchat, Email, Shopee, Mercado Livre, Shein e Magalu. Todos os canais em um único painel, com a mesma IA respondendo.'
  },
  {
    question: 'A IA substitui minha equipe de vendas?',
    answer: 'A IA trabalha como uma assistente incansável: qualifica leads, responde dúvidas, envia orçamentos e agenda reuniões 24h por dia. Sua equipe pode focar nas negociações mais complexas enquanto a IA cuida do atendimento repetitivo.'
  },
  {
    question: 'Quanto tempo leva para ver resultados?',
    answer: 'A maioria dos nossos clientes reporta aumento de conversão já na primeira semana. Em média, empresas que usam a Promp têm 47% mais conversões e reduzem em 80% o tempo de resposta ao cliente.'
  },
  {
    question: 'E se o cliente quiser falar com um humano?',
    answer: 'A IA identifica automaticamente quando o cliente prefere falar com uma pessoa e transfere a conversa para sua equipe com todo o contexto e histórico. Nenhum lead é perdido.'
  },
  {
    question: 'Posso testar antes de contratar?',
    answer: 'Sim! Oferecemos acesso gratuito para você testar todas as funcionalidades. Sem cartão de crédito, sem compromisso. Comece agora e veja o resultado na prática.'
  }
]

// Testimonials
const testimonials = [
  {
    name: 'João Maurício',
    role: 'CEO, DM Boat',
    image: 'https://i.pravatar.cc/300?img=12',
    text: 'A Promp transformou nosso atendimento. Antes perdíamos 70% dos leads por demora na resposta. Hoje a IA responde em segundos e nossas vendas aumentaram 52% em 3 meses.',
    stars: 5,
  },
  {
    name: 'Maria Costa',
    role: 'Diretora Comercial',
    image: 'https://i.pravatar.cc/300?img=47',
    text: 'Eu era cética com IA, mas a Promp me provou errada. A IA sabe responder sobre todos os nossos produtos e preços. É como ter um vendedor que nunca dorme e nunca erra.',
    stars: 5,
  },
  {
    name: 'Pedro Santos',
    role: 'Gestor de Tráfego',
    image: 'https://i.pravatar.cc/300?img=68',
    text: 'Gastamos R$15 mil por mês em tráfego pago e metade dos leads eram desperdiçados. Com a Promp, cada lead é atendido instantaneamente. O ROI do tráfego subiu 3x.',
    stars: 5,
  },
]

definePageMeta({
  layout: 'landing',
})

useSeoMeta({
  title: 'Promp IA — Atendimento Inteligente que Vende 24h | Automação com IA',
  ogTitle: 'Promp IA — Atendimento Inteligente que Vende 24h',
  description: 'Pare de perder clientes por demora no atendimento. A IA da Promp responde, qualifica e vende pelo WhatsApp, Instagram e mais — 24 horas por dia, sem parar.',
  ogDescription: 'Pare de perder clientes por demora no atendimento. A IA da Promp responde, qualifica e vende pelo WhatsApp, Instagram e mais — 24 horas por dia.',
  ogImage: '/images/ia-em-acao.jpg',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div>
  <!-- ========================================= -->
  <!-- HERO SECTION — Impacto imediato + urgência -->
  <!-- ========================================= -->
  <section class="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-secondary/90">
    <!-- Background effects -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-1/4 -right-32 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse-soft"></div>
      <div class="absolute bottom-0 -left-32 w-[500px] h-[500px] bg-secondary/30 rounded-full blur-[100px]"></div>
      <div class="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent"></div>
    </div>
    <!-- Grid pattern overlay -->
    <div class="absolute inset-0 opacity-[0.03]" style="background-image: url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;1&quot;%3E%3Cpath d=&quot;M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"></div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="max-w-4xl mx-auto text-center">
        <!-- Urgency badge -->
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 border border-primary/30 mb-8 animate-fade-in-up">
          <span class="relative flex h-2.5 w-2.5">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
          </span>
          <span class="text-primary font-bold text-sm tracking-wide">VOCÊ ESTÁ PERDENDO VENDAS AGORA</span>
        </div>

        <!-- Main headline -->
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-[1.05] tracking-tight animate-fade-in-up">
          Seus clientes mandam mensagem
          <br class="hidden md:block" />
          <span class="relative inline-block">
            <span class="text-primary">e ninguém responde?</span>
            <span class="absolute -bottom-2 left-0 w-full h-1.5 bg-primary/40 rounded-full"></span>
          </span>
        </h1>

        <!-- Subheadline -->
        <p class="text-lg md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed font-light animate-fade-in-up">
          A <strong class="text-white font-bold">IA da Promp</strong> responde, qualifica e fecha vendas no
          <strong class="text-green-400">WhatsApp</strong>, <strong class="text-pink-400">Instagram</strong> e
          <strong class="text-blue-400">Telegram</strong> — <span class="underline decoration-primary decoration-2 underline-offset-4">24 horas por dia, sem parar.</span>
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up">
          <a :href="whatsappLink" target="_blank"
            class="group relative inline-flex items-center justify-center px-8 py-4 md:px-10 md:py-5 text-base md:text-lg font-black text-white bg-primary rounded-2xl shadow-2xl shadow-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-primary/50 w-full sm:w-auto overflow-hidden">
            <span class="absolute inset-0 bg-gradient-to-r from-primary to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span class="relative flex items-center gap-3">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Quero a IA Agora
            </span>
          </a>

          <a :href="signupLink"
            class="inline-flex items-center justify-center px-8 py-4 md:px-10 md:py-5 text-base md:text-lg font-bold text-white border-2 border-white/20 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto backdrop-blur-sm">
            Testar Grátis →
          </a>
        </div>

        <!-- Social proof micro -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-slate-400 animate-fade-in-up">
          <div class="flex items-center gap-2">
            <div class="flex -space-x-2">
              <img class="w-8 h-8 rounded-full border-2 border-slate-800 object-contain bg-white" src="/images/clients/empresa-dmboat.png" alt="Cliente" />
              <img class="w-8 h-8 rounded-full border-2 border-slate-800 object-cover bg-white" src="/images/clients/empresa-grossi.png" alt="Grossi Group" />
              <img class="w-8 h-8 rounded-full border-2 border-slate-800 object-cover bg-white" src="/images/clients/empresa-jit.jpeg" alt="Cliente" />
            </div>
            <span>+500 empresas confiam na Promp</span>
          </div>
          <div class="flex items-center gap-2">
            <div class="flex gap-0.5">
              <svg v-for="s in 5" :key="s" class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <span>4.9/5 de avaliação</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <svg class="w-6 h-6 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  </section>

  <!-- ========================================= -->
  <!-- METRICS BAR — Números que geram confiança -->
  <!-- ========================================= -->
  <section class="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 py-10">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <p class="text-3xl md:text-4xl font-black text-primary">+{{ counters.empresas }}</p>
          <p class="text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium">Empresas ativas</p>
        </div>
        <div>
          <p class="text-3xl md:text-4xl font-black text-primary">{{ counters.mensagens }}M+</p>
          <p class="text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium">Mensagens enviadas/mês</p>
        </div>
        <div>
          <p class="text-3xl md:text-4xl font-black text-primary">+{{ counters.conversao }}%</p>
          <p class="text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium">Aumento em conversões</p>
        </div>
        <div>
          <p class="text-3xl md:text-4xl font-black text-primary">{{ counters.tempo }}h</p>
          <p class="text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium">Funcionando por dia</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ============================================ -->
  <!-- PAIN POINTS — Agite as dores do cliente      -->
  <!-- ============================================ -->
  <section class="py-20 md:py-28 bg-slate-50 dark:bg-slate-900">
    <div class="container mx-auto px-4">
      <div class="max-w-3xl mx-auto text-center mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
        <div class="inline-block px-4 py-1.5 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs font-bold mb-6 border border-red-200 dark:border-red-800">
          ⚠️ ISSO ESTÁ ACONTECENDO NA SUA EMPRESA?
        </div>
        <h2 class="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
          Cada minuto sem resposta é um
          <span class="text-primary">cliente perdido</span>
        </h2>
      </div>

      <div class="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <!-- Pain 1 -->
        <div class="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 group bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 hover:border-red-300 dark:hover:border-red-700 transition-colors shadow-sm hover:shadow-xl">
          <div class="w-14 h-14 bg-red-100 dark:bg-red-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg class="w-7 h-7 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-3">Leads esfriando na fila</h3>
          <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
            Seu time demora horas (ou dias) para responder. O cliente já foi para o concorrente que respondeu primeiro.
          </p>
          <div class="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700">
            <p class="text-sm text-red-500 font-bold flex items-center gap-1">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
              73% dos leads compram de quem responde primeiro
            </p>
          </div>
        </div>

        <!-- Pain 2 -->
        <div class="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 group bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 hover:border-red-300 dark:hover:border-red-700 transition-colors shadow-sm hover:shadow-xl">
          <div class="w-14 h-14 bg-red-100 dark:bg-red-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg class="w-7 h-7 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-3">Dinheiro jogado fora em tráfego</h3>
          <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
            Você investe pesado em anúncios, mas metade dos leads que chegam não recebem atendimento adequado.
          </p>
          <div class="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700">
            <p class="text-sm text-red-500 font-bold flex items-center gap-1">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
              Até 60% do investimento em ads é desperdiçado
            </p>
          </div>
        </div>

        <!-- Pain 3 -->
        <div class="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-300 group bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 hover:border-red-300 dark:hover:border-red-700 transition-colors shadow-sm hover:shadow-xl">
          <div class="w-14 h-14 bg-red-100 dark:bg-red-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg class="w-7 h-7 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-3">Equipe sobrecarregada</h3>
          <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
            Seu time responde as mesmas perguntas repetitivas o dia inteiro, sem tempo para focar nas vendas que realmente importam.
          </p>
          <div class="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700">
            <p class="text-sm text-red-500 font-bold flex items-center gap-1">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
              80% das perguntas são repetitivas e genéricas
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ============================================== -->
  <!-- SOLUTION — Apresenta a solução com autoridade  -->
  <!-- ============================================== -->
  <section class="py-20 md:py-28 bg-white dark:bg-slate-950 overflow-hidden relative">
    <!-- Background decor -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px]"></div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Text -->
        <div class="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
          <div class="inline-block px-4 py-1.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs font-bold mb-6 border border-green-200 dark:border-green-800">
            ✅ A SOLUÇÃO QUE VOCÊ PRECISA
          </div>
          <h2 class="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight mb-6">
            Uma IA treinada no
            <span class="text-secondary dark:text-blue-400">seu negócio</span>,
            <br class="hidden md:block" />
            vendendo por você
            <span class="text-primary">24 horas por dia</span>
          </h2>
          <p class="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
            A Promp não é um chatbot genérico. É uma <strong>Inteligência Artificial personalizada</strong>
            que aprende tudo sobre seus produtos, preços e processos — e atende cada cliente como um vendedor expert.
          </p>

          <div class="space-y-4 mb-10">
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <div>
                <h4 class="font-bold text-slate-900 dark:text-white">Resposta instantânea</h4>
                <p class="text-slate-500 dark:text-slate-400 text-sm">Seu cliente nunca mais espera. A IA responde em menos de 3 segundos, qualquer horário.</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg class="w-5 h-5 text-secondary dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
              <div>
                <h4 class="font-bold text-slate-900 dark:text-white">Conhece seu negócio</h4>
                <p class="text-slate-500 dark:text-slate-400 text-sm">Treinada com seus documentos, catálogos e tabelas. Responde com precisão sobre preços, prazos e produtos.</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg class="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <div>
                <h4 class="font-bold text-slate-900 dark:text-white">Converte em vendas</h4>
                <p class="text-slate-500 dark:text-slate-400 text-sm">Não só responde perguntas — qualifica leads, envia orçamentos e fecha vendas automaticamente.</p>
              </div>
            </div>
          </div>

          <a :href="whatsappLink" target="_blank"
            class="inline-flex items-center justify-center px-8 py-4 text-lg font-black text-white bg-primary hover:bg-primary/90 rounded-2xl shadow-xl shadow-primary/20 hover:-translate-y-1 transition-all group">
            Quero IA na Minha Empresa
            <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </a>
        </div>

        <!-- Visual / Mockup -->
        <div class="relative animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200">
          <div class="absolute -inset-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl blur-2xl"></div>

          <!-- Dashboard simulation -->
          <div class="relative bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-2xl overflow-hidden">
            <!-- Window chrome -->
            <div class="flex items-center gap-2 px-6 py-4 border-b border-slate-100 dark:border-slate-700">
              <div class="w-3 h-3 rounded-full bg-red-400/50"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-400/50"></div>
              <div class="w-3 h-3 rounded-full bg-green-400/50"></div>
              <div class="flex-1 text-center">
                <span class="text-xs text-slate-400 font-mono">promp.com.br — Painel IA</span>
              </div>
            </div>

            <div class="p-6 space-y-4">
              <!-- Chat simulation -->
              <div class="flex gap-3 items-start">
                <div class="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-600 flex items-center justify-center text-xs font-bold text-slate-500 dark:text-slate-300">C</div>
                <div class="bg-slate-100 dark:bg-slate-700 rounded-2xl rounded-tl-md px-4 py-3 max-w-[80%]">
                  <p class="text-sm text-slate-700 dark:text-slate-200">Olá, vocês fazem entrega para Niterói? Qual o prazo?</p>
                  <p class="text-[10px] text-slate-400 mt-1">10:32</p>
                </div>
              </div>

              <div class="flex gap-3 items-start justify-end">
                <div class="bg-primary/10 dark:bg-primary/20 rounded-2xl rounded-tr-md px-4 py-3 max-w-[80%] border border-primary/20">
                  <div class="flex items-center gap-1.5 mb-1.5">
                    <div class="w-4 h-4 rounded-full bg-primary flex items-center justify-center">
                      <svg class="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
                    </div>
                    <span class="text-[10px] font-bold text-primary">IA Promp</span>
                  </div>
                  <p class="text-sm text-slate-700 dark:text-slate-200">Sim! 🚀 Entregamos em Niterói com prazo de 2 a 4 dias úteis. Para pedidos acima de R$150, o frete é grátis! Quer que eu envie nosso catálogo com os preços atualizados?</p>
                  <p class="text-[10px] text-slate-400 mt-1">10:32 · Resposta em 2s</p>
                </div>
                <div class="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <NuxtImg src="/images/3d-icon-ia-promp.svg" alt="IA" class="w-6 h-6" width="24" height="24" />
                </div>
              </div>

              <div class="flex gap-3 items-start">
                <div class="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-600 flex items-center justify-center text-xs font-bold text-slate-500 dark:text-slate-300">C</div>
                <div class="bg-slate-100 dark:bg-slate-700 rounded-2xl rounded-tl-md px-4 py-3 max-w-[80%]">
                  <p class="text-sm text-slate-700 dark:text-slate-200">Sim, pode enviar! E quanto custa o modelo XR-500?</p>
                  <p class="text-[10px] text-slate-400 mt-1">10:33</p>
                </div>
              </div>

              <div class="flex gap-3 items-start justify-end">
                <div class="bg-primary/10 dark:bg-primary/20 rounded-2xl rounded-tr-md px-4 py-3 max-w-[80%] border border-primary/20">
                  <div class="flex items-center gap-1.5 mb-1.5">
                    <div class="w-4 h-4 rounded-full bg-primary flex items-center justify-center">
                      <svg class="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
                    </div>
                    <span class="text-[10px] font-bold text-primary">IA Promp</span>
                  </div>
                  <p class="text-sm text-slate-700 dark:text-slate-200">O modelo XR-500 está por <strong>R$1.299,00</strong> à vista ou em até 12x de R$129,90 sem juros! 💳 Posso gerar um link de pagamento para você finalizar agora?</p>
                  <p class="text-[10px] text-slate-400 mt-1">10:33 · Resposta em 1s</p>
                </div>
                <div class="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <NuxtImg src="/images/3d-icon-ia-promp.svg" alt="IA" class="w-6 h-6" width="24" height="24" />
                </div>
              </div>

              <!-- Typing indicator -->
              <div class="flex gap-3 items-start justify-end">
                <div class="bg-primary/5 dark:bg-primary/10 rounded-2xl px-4 py-3 border border-primary/10">
                  <div class="flex gap-1.5 items-center">
                    <span class="text-[10px] font-bold text-primary mr-2">IA digitando</span>
                    <span class="w-2 h-2 bg-primary/40 rounded-full animate-bounce" style="animation-delay: 0ms"></span>
                    <span class="w-2 h-2 bg-primary/40 rounded-full animate-bounce" style="animation-delay: 150ms"></span>
                    <span class="w-2 h-2 bg-primary/40 rounded-full animate-bounce" style="animation-delay: 300ms"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Floating card -->
          <div class="absolute -bottom-4 -left-4 md:-left-8 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 p-4 flex items-center gap-3 animate-float">
            <div class="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
              <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
            </div>
            <div>
              <p class="text-xs text-slate-400 font-medium">Tempo de Resposta</p>
              <p class="text-lg font-black text-slate-900 dark:text-white">&lt; 3 segundos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ============================================ -->
  <!-- HOW IT WORKS — 3 passos simples               -->
  <!-- ============================================ -->
  <section class="py-20 md:py-28 bg-slate-50 dark:bg-slate-900">
    <div class="container mx-auto px-4">
      <div class="max-w-3xl mx-auto text-center mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
        <div class="inline-block px-4 py-1.5 rounded-full bg-secondary/10 dark:bg-blue-900/30 text-secondary dark:text-blue-400 text-xs font-bold mb-6 border border-secondary/20 dark:border-blue-800">
          SIMPLES DE COMEÇAR
        </div>
        <h2 class="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
          3 passos para ter sua
          <span class="text-primary">IA vendendo</span>
        </h2>
        <p class="text-lg text-slate-500 dark:text-slate-400">Sem código, sem complicação, sem dor de cabeça.</p>
      </div>

      <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <!-- Step 1 -->
        <div class="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 relative text-center">
          <div class="absolute top-12 left-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent hidden md:block"></div>
          <div class="relative w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary to-red-600 rounded-2xl flex items-center justify-center shadow-xl shadow-primary/20 rotate-3 hover:rotate-0 transition-transform">
            <span class="text-3xl font-black text-white">1</span>
          </div>
          <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-3">Envie seus arquivos</h3>
          <p class="text-slate-500 dark:text-slate-400">
            PDFs, planilhas, catálogos, link do site — a IA absorve tudo sobre seu negócio em minutos.
          </p>
        </div>

        <!-- Step 2 -->
        <div class="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 relative text-center">
          <div class="relative w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-secondary to-blue-700 rounded-2xl flex items-center justify-center shadow-xl shadow-secondary/20 -rotate-3 hover:rotate-0 transition-transform">
            <span class="text-3xl font-black text-white">2</span>
          </div>
          <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-3">Conecte seus canais</h3>
          <p class="text-slate-500 dark:text-slate-400">
            WhatsApp, Instagram, Telegram e mais — integre em 2 cliques e a IA começa a responder.
          </p>
        </div>

        <!-- Step 3 -->
        <div class="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-300 relative text-center">
          <div class="relative w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-xl shadow-green-500/20 rotate-3 hover:rotate-0 transition-transform">
            <span class="text-3xl font-black text-white">3</span>
          </div>
          <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-3">Venda no automático</h3>
          <p class="text-slate-500 dark:text-slate-400">
            A IA qualifica leads, responde dúvidas, envia orçamentos e fecha vendas — 24h por dia, 7 dias por semana.
          </p>
        </div>
      </div>

      <div class="text-center mt-14 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-400">
        <a :href="signupLink"
          class="inline-flex items-center justify-center px-10 py-4 text-lg font-black text-white bg-primary hover:bg-primary/90 rounded-2xl shadow-xl shadow-primary/20 hover:-translate-y-1 transition-all">
          Começar Agora — É Grátis
        </a>
        <p class="text-sm text-slate-400 mt-3">Sem cartão de crédito. Cancele quando quiser.</p>
      </div>
    </div>
  </section>

  <!-- ========================================= -->
  <!-- BENEFITS — Grade de benefícios poderosos  -->
  <!-- ========================================= -->
  <section class="py-20 md:py-28 bg-white dark:bg-slate-950">
    <div class="container mx-auto px-4">
      <div class="max-w-3xl mx-auto text-center mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
        <h2 class="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
          Tudo que sua empresa precisa para
          <span class="text-primary">vender mais</span>
        </h2>
        <p class="text-lg text-slate-500 dark:text-slate-400">Uma plataforma completa de automação de vendas com IA.</p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <!-- Benefit cards -->
        <div v-for="(benefit, i) in [
          { icon: '🤖', title: 'IA Humanizada', desc: 'Conversas naturais que parecem de verdade. Seus clientes nem percebem que estão falando com uma IA.', color: 'primary' },
          { icon: '📊', title: 'Painel de Vendas', desc: 'Dashboard completo com funil Kanban, métricas de conversão e relatórios em tempo real.', color: 'secondary' },
          { icon: '📱', title: 'Multi-Canal', desc: 'WhatsApp, Instagram, Telegram, Webchat, Email — todos os canais num único painel.', color: 'green-500' },
          { icon: '🔗', title: 'Integrações', desc: 'Conecte com Shopee, Mercado Livre, WooCommerce, NuvemShop, Google Calendar e mais.', color: 'purple-500' },
          { icon: '📋', title: 'Catálogo de Produtos', desc: 'Cadastre seus produtos com fotos, preços e variações. A IA sabe tudo sobre seu estoque.', color: 'orange-500' },
          { icon: '📈', title: 'Campanhas em Massa', desc: 'Envie mensagens personalizadas para milhares de contatos com um clique.', color: 'blue-500' },
        ]" :key="i"
          class="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 group bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-7 border border-slate-100 dark:border-slate-800 hover:border-primary/30 dark:hover:border-primary/30 hover:shadow-lg transition-all">
          <div class="text-3xl mb-4 group-hover:scale-110 transition-transform inline-block">{{ benefit.icon }}</div>
          <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">{{ benefit.title }}</h3>
          <p class="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{{ benefit.desc }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ========================================= -->
  <!-- BEFORE/AFTER — Comparação visual          -->
  <!-- ========================================= -->
  <section class="py-20 md:py-28 bg-slate-50 dark:bg-slate-900">
    <div class="container mx-auto px-4">
      <div class="max-w-3xl mx-auto text-center mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
        <h2 class="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
          Antes vs Depois da <span class="text-primary">Promp</span>
        </h2>
      </div>

      <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <!-- Before -->
        <div class="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 bg-white dark:bg-slate-800 rounded-2xl p-8 border-2 border-red-200 dark:border-red-900/50 relative">
          <div class="absolute -top-4 left-6 px-4 py-1 bg-red-500 text-white text-xs font-bold rounded-full">❌ SEM PROMP</div>
          <ul class="space-y-4 mt-2">
            <li v-for="(item, i) in [
              'Leads esperando horas por resposta',
              'Equipe sobrecarregada com perguntas repetitivas',
              'Atendimento só em horário comercial',
              'Clientes indo para o concorrente',
              'Dinheiro desperdiçado em tráfego pago',
              'Sem controle das conversas e métricas',
            ]" :key="i" class="flex items-start gap-3">
              <svg class="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
              </svg>
              <span class="text-slate-600 dark:text-slate-400 text-sm">{{ item }}</span>
            </li>
          </ul>
        </div>

        <!-- After -->
        <div class="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 bg-white dark:bg-slate-800 rounded-2xl p-8 border-2 border-green-200 dark:border-green-900/50 relative shadow-lg shadow-green-500/5">
          <div class="absolute -top-4 left-6 px-4 py-1 bg-green-500 text-white text-xs font-bold rounded-full">✅ COM PROMP</div>
          <ul class="space-y-4 mt-2">
            <li v-for="(item, i) in [
              'Resposta instantânea em menos de 3 segundos',
              'IA resolve 80% das dúvidas automaticamente',
              'Atendimento 24h, 7 dias por semana',
              'Cada lead recebe atenção personalizada',
              'ROI do tráfego multiplica 3x',
              'Painel completo com métricas e funil',
            ]" :key="i" class="flex items-start gap-3">
              <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              <span class="text-slate-600 dark:text-slate-400 text-sm font-medium">{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- ========================================= -->
  <!-- TESTIMONIALS — Prova social poderosa      -->
  <!-- ========================================= -->
  <section class="py-20 md:py-28 bg-white dark:bg-slate-950">
    <div class="container mx-auto px-4">
      <div class="max-w-3xl mx-auto text-center mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
        <h2 class="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
          Quem usa, <span class="text-primary">não volta atrás</span>
        </h2>
        <p class="text-lg text-slate-500 dark:text-slate-400">Veja o que empresários reais dizem sobre a Promp.</p>
      </div>

      <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div v-for="(t, i) in testimonials" :key="i"
          class="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 relative">
          <!-- Quote icon -->
          <svg class="absolute top-6 right-6 w-8 h-8 text-primary/10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10H0z"/>
          </svg>
          <!-- Stars -->
          <div class="flex gap-0.5 mb-4">
            <svg v-for="s in t.stars" :key="s" class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
          </div>
          <!-- Text -->
          <p class="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed text-sm italic">"{{ t.text }}"</p>
          <!-- Author -->
          <div class="flex items-center gap-3">
            <img :src="t.image" :alt="t.name" class="w-12 h-12 rounded-full object-cover border-2 border-primary/20" />
            <div>
              <p class="font-bold text-slate-900 dark:text-white text-sm">{{ t.name }}</p>
              <p class="text-xs text-slate-400">{{ t.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ========================================= -->
  <!-- FAQ — Elimina objeções                     -->
  <!-- ========================================= -->
  <section class="py-20 md:py-28 bg-white dark:bg-slate-950">
    <div class="container mx-auto px-4">
      <div class="max-w-3xl mx-auto">
        <div class="text-center mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
          <h2 class="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
            Perguntas <span class="text-primary">Frequentes</span>
          </h2>
          <p class="text-lg text-slate-500 dark:text-slate-400">Tudo que você precisa saber antes de começar.</p>
        </div>

        <div class="space-y-4">
          <div v-for="(faq, i) in faqItems" :key="i"
            class="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
            <button @click="toggleFaq(i)"
              class="w-full flex items-center justify-between p-6 text-left hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              <span class="font-bold text-slate-900 dark:text-white pr-4">{{ faq.question }}</span>
              <svg class="w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300"
                :class="{ 'rotate-180': openFaq === i }"
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            <div v-show="openFaq === i" class="px-6 pb-6">
              <p class="text-slate-600 dark:text-slate-400 leading-relaxed">{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ========================================= -->
  <!-- FINAL CTA — Urgência máxima               -->
  <!-- ========================================= -->
  <section class="py-24 md:py-32 relative overflow-hidden bg-gradient-to-br from-primary via-red-600 to-primary">
    <!-- Background effects -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-0 right-0 w-80 h-80 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white opacity-5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-white/5 to-transparent rounded-full blur-3xl"></div>
    </div>

    <div class="container mx-auto px-4 relative z-10 text-center">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
          Enquanto você lê isso, seus
          <br class="hidden md:block" />
          concorrentes já estão usando IA
        </h2>
        <p class="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
          Cada hora sem automação é dinheiro perdido. Comece agora e veja resultados na primeira semana.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <a :href="whatsappLink" target="_blank"
            class="group inline-flex items-center justify-center px-10 py-5 text-lg font-black text-primary bg-white rounded-2xl shadow-2xl shadow-black/20 hover:-translate-y-1 transition-all w-full sm:w-auto">
            <svg class="w-5 h-5 mr-2 text-green-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Falar com Especialista
            <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </a>
          <a :href="signupLink"
            class="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white border-2 border-white/30 rounded-2xl hover:bg-white/10 transition-all w-full sm:w-auto">
            Testar Grátis por 7 Dias
          </a>
        </div>

        <p class="text-white/60 text-sm">
          ✓ Sem cartão de crédito &nbsp; ✓ Setup em 5 minutos &nbsp; ✓ Suporte humano dedicado
        </p>
      </div>
    </div>
  </section>

  </div>
</template>

<style scoped>
.animate-on-scroll {
  transition: opacity 0.7s ease-out, transform 0.7s ease-out;
}
.animate-visible {
  opacity: 1 !important;
  transform: translateY(0) !important;
}
</style>
