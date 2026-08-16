<script setup>
import { onMounted, onUnmounted, ref, computed } from 'vue';

const colorMode = useColorMode();

const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
};

const platforms = [
  { name: 'WhatsApp', color: '#25D366', textColor: '#25D366', btnTextColor: '#FFFFFF' },
  { name: 'Instagram', color: '#E1306C', textColor: '#E1306C', btnTextColor: '#FFFFFF' },
  { name: 'Telegram', color: '#0088CC', textColor: '#0088CC', btnTextColor: '#FFFFFF' },
  { name: 'Email', color: '#EA4335', textColor: '#EA4335', btnTextColor: '#FFFFFF' },
  { name: 'Webchat', color: '#4F46E5', textColor: '#4F46E5', btnTextColor: '#FFFFFF' },
  { name: 'Shopee', color: '#EE4D2D', textColor: '#EE4D2D', btnTextColor: '#FFFFFF' },
  { name: 'Mercado Livre', color: '#FFE600', textColor: '#2D3277', btnTextColor: '#2D3277' },
  { name: 'Shein', color: '#000000', textColor: '#000000', btnTextColor: '#FFFFFF' },
  { name: 'Magalu', color: '#0086FF', textColor: '#0086FF', btnTextColor: '#FFFFFF' },
];

const currentIndex = ref(0);
const currentPlatform = computed(() => platforms[currentIndex.value]);
let intervalId = null;

const painFeedback = ref('');
const painFeedbackSent = ref(false);

const submitPainFeedback = () => {
  if (!painFeedback.value.trim()) return;
  
  const text = encodeURIComponent(`Olá! Tenho a seguinte dor no meu negócio: ${painFeedback.value.trim()}`);
  painFeedbackSent.value = true;
  
  if (process.client) {
    window.open(`https://wa.me/5522992371763?text=${text}`, '_blank');
  }
  
  setTimeout(() => {
    painFeedback.value = '';
    painFeedbackSent.value = false;
  }, 5000);
};

onMounted(() => {
  if (process.client) {
    // Animation for Lottie
    import('lottie-web').then((lottie) => {
      document.querySelectorAll('.lottie-container').forEach((container) => {
        lottie.default.loadAnimation({
          container: container,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          path: container.dataset.animationPath
        });
      });
    });

    // Cycle platforms
    intervalId = setInterval(() => {
      currentIndex.value = (currentIndex.value + 1) % platforms.length;
    }, 2000);
  }
});

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId);
});

useSeoMeta({
  title: 'Promp - Automação de Vendas com IA para WhatsApp',
  ogTitle: 'Promp - Automação de Vendas com IA para WhatsApp',
  description: 'Automatize seu atendimento no WhatsApp, Instagram e Telegram com a Inteligência Artificial da Promp. Venda 24/7, qualifique leads e integre seu CRM.',
  ogDescription: 'Automatize seu atendimento no WhatsApp, Instagram e Telegram com a Inteligência Artificial da Promp. Venda 24/7, qualifique leads e integre seu CRM.',
  ogImage: 'https://promp.com.br/images/ia-whatsapp.png',
  ogUrl: 'https://promp.com.br',
  ogType: 'website',
  ogSiteName: 'Promp',
  ogLocale: 'pt_BR',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Promp - Automação de Vendas com IA para WhatsApp',
  twitterDescription: 'Automatize seu atendimento no WhatsApp, Instagram e Telegram com a Inteligência Artificial da Promp. Venda 24/7, qualifique leads e integre seu CRM.',
  twitterImage: 'https://promp.com.br/images/ia-whatsapp.png',
  keywords: 'IA para WhatsApp, automação de vendas, chatbot WhatsApp com IA, CRM WhatsApp, atendimento inteligente, Promp IA, inteligência artificial comercial',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
})

</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>

<template>
  <div class="landing-page-root w-full">
  <!-- Header -->
  <!-- Hero Section -->
  <section id="hero" class="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
    <div class="container mx-auto px-4">
      <div class="grid lg:grid-cols-12 gap-12 items-center">
        <!-- Text Content -->
        <div class="space-y-8 animate-fade-in-up lg:col-span-5 w-full max-w-full">
          <div
            class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6 border border-primary/20">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            {{ $t('hero.badge') }}
          </div>

          <h1 class="text-3xl md:text-5xl lg:text-5xl xl:text-6xl font-black tracking-tight mb-6 leading-[1.1]">
            <span class="block">{{ $t('hero.title_start') }}</span>
            <span class="block text-primary whitespace-normal md:whitespace-nowrap">
              <span :style="{ color: (colorMode.value === 'dark' && currentPlatform.name === 'Shein') ? '#FFFFFF' : currentPlatform.color }">{{ currentPlatform.name }}</span>
              <span class="ml-2 text-slate-900 dark:text-white">{{ $t('hero.title_end') }}</span>
            </span>
            <span class="relative inline-block mt-2 max-w-full">
              <span class="relative z-10 text-slate-800 dark:text-white whitespace-normal break-words px-2 py-1">
                {{ $t('hero.title_highlight') }}
              </span>
              <span class="absolute inset-0 bg-primary/5 dark:bg-primary/10 -rotate-1 rounded-lg -z-0"></span>
              <span class="absolute bottom-1 left-0 w-full h-1.5 bg-primary/30 rounded-full -z-0"></span>
            </span>
          </h1>

          <p class="text-base md:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl leading-relaxed break-words">
            {{ $t('hero.subtitle') }}
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-stretch w-full sm:w-auto min-w-0">
            <a href="https://wa.me/5522992371763?text=Ol%C3%A1,%20quero%20mais%20informa%C3%A7%C3%B5es%20da%20IA%20para%20minha%20empresa"
              target="_blank"
              :style="{ backgroundColor: currentPlatform.color, color: currentPlatform.btnTextColor, boxShadow: `0 10px 15px -3px ${currentPlatform.color}66` }"
              class="inline-flex items-center justify-center px-4 py-3 md:px-8 md:py-4 text-sm md:text-base font-bold rounded-xl transition-all hover:-translate-y-1 hover:brightness-90 w-full sm:w-auto whitespace-normal sm:whitespace-nowrap text-center"
              aria-label="Falar com Especialista no WhatsApp">
              {{ $t('hero.cta') }}
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a href="#ia"
              class="inline-flex items-center justify-center px-5 py-3 md:px-8 md:py-4 text-sm md:text-base font-bold text-slate-700 dark:text-white bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-sm hover:shadow-md w-full sm:w-auto whitespace-normal md:whitespace-nowrap text-center">
              {{ $t('hero.how_it_works') }}
            </a>
          </div>

          <!-- Social Proof -->
          <div class="pt-4 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
            <div class="flex -space-x-2">
              <NuxtImg class="w-8 h-8 rounded-full border-2 border-white dark:border-slate-900 object-contain bg-white"
                src="/images/clients/empresa-dmboat.png" alt="Empresa 1" width="32" height="32" loading="lazy" />
              <NuxtImg class="w-8 h-8 rounded-full border-2 border-white dark:border-slate-900 object-cover bg-white"
                src="/images/clients/empresa-grossi.png" alt="Grossi Group" width="32" height="32" loading="lazy" />
              <NuxtImg class="w-8 h-8 rounded-full border-2 border-white dark:border-slate-900 object-cover bg-white"
                src="/images/clients/empresa-jit.jpeg" alt="Empresa 3" width="32" height="32" loading="lazy" />
            </div>
            <p>+500 empresas confiam na Promp</p>
          </div>
        </div>



        <!-- Feature Image / Mockup -->
        <div class="relative animate-fade-in-right lg:col-span-7 w-full max-w-full">
          <div
            class="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-primary to-purple-500 rounded-2xl blur-xl sm:blur-2xl opacity-20 animate-pulse pointer-events-none">
          </div>
          <!-- Mobile Wrapper with Responsive Width & Scale -->
          <div class="w-full max-w-full min-h-[480px] sm:min-h-[520px] md:min-h-[620px]">
            <ClientOnly>
              <PrompChatMockup class="sm:rotate-1 sm:hover:rotate-0 transition-transform duration-500" />
              <template #fallback>
                <div class="h-[480px] sm:h-[520px] md:h-[620px] w-full bg-[#f8fafc] dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl animate-pulse"></div>
              </template>
            </ClientOnly>
          </div>

          <!-- Floating Statistic Card -->
          <div
            class="absolute -bottom-4 left-2 sm:left-4 md:-left-6 bg-white dark:bg-slate-800 p-2.5 sm:p-4 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 flex items-center gap-2.5 sm:gap-4 animate-bounce-slow z-20 scale-90 sm:scale-100">
            <div class="p-2 sm:p-3 bg-green-100 dark:bg-green-900/30 rounded-lg text-green-600 dark:text-green-400">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                <polyline points="17 6 23 6 23 12"></polyline>
              </svg>
            </div>
            <div>
              <p class="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium">Conversão</p>
              <p class="text-base sm:text-lg font-bold text-slate-900 dark:text-white">+ 47%</p>
            </div>
          </div>

          <!-- Floating Statistics Card - Clients Removed -->
        </div>
      </div>
    </div>
  </section>

  <section class="border-y border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 py-8">
    <div class="container mx-auto px-4 text-center">
      <p class="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-6">Empresas que escalam com a Promp
      </p>
      <div class="flex flex-row flex-wrap justify-center items-center gap-8 md:gap-16 transition-all duration-300">
        <NuxtImg src="/images/clients/empresa-dmboat.png" alt="DM Boat" class="h-10 md:h-14 w-auto object-contain" />
        <NuxtImg src="/images/clients/empresa-grossi.png" alt="Grossi Group"
          class="h-10 md:h-14 w-auto object-contain" />
        <NuxtImg src="/images/clients/empresa-jit.jpeg" alt="JIT"
          class="h-10 md:h-14 w-auto object-contain rounded-lg" />
        <NuxtImg src="/images/clients/empresa-fripet.jpg" alt="Fripet"
          class="h-10 md:h-14 w-auto object-contain rounded-lg" />
        <NuxtImg src="/images/clients/empresa-unifahe.png" alt="Unifahe" class="h-10 md:h-14 w-auto object-contain" />
      </div>
    </div>
  </section>


  <!-- Comparison Section -->
  <section id="ia" class="py-20 bg-white dark:bg-slate-900 overflow-hidden">
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Text Content -->
        <div class="space-y-6">
          <div
            class="inline-block px-3 py-1 rounded-full bg-secondary/10 dark:bg-blue-500/20 text-secondary dark:text-blue-200 text-xs font-bold border border-secondary/20 dark:border-blue-500/30">
            A SOLUÇÃO DEFINITIVA
          </div>
          <h2 class="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
            A IA da sua empresa <br>
            <span class="text-4xl md:text-6xl text-secondary dark:text-blue-300 drop-shadow-sm font-black">pronta em 5
              minutos</span>
            <br>
            <span class="text-slate-500 font-normal">e treinada para vender</span>
          </h2>
          <p class="text-lg text-slate-600 dark:text-slate-400">
            Chega de configurações complexas. Com a Promp, você sobe seus documentos, site ou manuais e nossa IA
            aprende
            tudo sobre seu negócio instantaneamente. Tenha um especialista digital que trabalha 24h por dia,
            qualificando e fechando vendas sem você precisar mover um dedo.
          </p>
          <div class="flex flex-wrap gap-4 pt-2">
            <div
              class="flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-full text-sm font-bold border border-green-100 dark:border-green-800">
              <div class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              IA Humanizada
            </div>
            <div
              class="flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full text-sm font-bold border border-blue-100 dark:border-blue-800">
              ⚡ Setup em Segundos
            </div>
          </div>
          <a href="#precos"
            class="inline-flex items-center justify-center px-10 py-4 text-lg font-black text-white bg-primary hover:bg-primary/90 rounded-2xl shadow-xl shadow-secondary/20 hover:-translate-y-1 transition-all group">
            Começar Agora
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>

        <!-- AI Power Showcase Visual -->
        <div class="relative py-10">
          <!-- Floating IA Icon -->
          <NuxtImg src="/images/3d-icon-ia-promp.svg"
            class="absolute top-20 -right-10 w-24 h-24 z-50 drop-shadow-2xl animate-float-slow select-none pointer-events-none"
            alt="Agente IA" width="96" height="96" loading="lazy" />

          <!-- Background Decorative Elements -->
          <div
            class="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl scale-125 -z-10 animate-pulse-soft">
          </div>

          <!-- Main AI Framework Container -->
          <div
            class="relative bg-white dark:bg-slate-800 rounded-[2.5rem] border border-slate-200 dark:border-slate-700 shadow-2xl overflow-hidden p-6 min-h-[480px]">

            <!-- Dashboard Header Simulation -->
            <div class="flex items-center justify-between mb-8 border-b border-slate-100 dark:border-slate-700 pb-4">
              <div class="flex gap-2">
                <div class="w-3 h-3 rounded-full bg-red-400/50"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-400/50"></div>
                <div class="w-3 h-3 rounded-full bg-green-400/50"></div>
              </div>
              <div
                class="bg-primary/10 dark:bg-primary/20 px-4 py-1.5 rounded-full text-[10px] font-bold text-secondary dark:text-white animate-pulse italic">
                TREINANDO AGENTE INTELIGENTE...
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
              <!-- Training Progress Card -->
              <div class="space-y-4">
                <div
                  class="bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-4 border border-slate-100 dark:border-slate-800 animate-float shadow-sm relative overflow-hidden">
                  <div class="absolute top-0 right-0 w-16 h-16 bg-secondary/5 rounded-bl-3xl"></div>
                  <h4 class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Base de
                    Conhecimento</h4>
                  <div class="space-y-3">
                    <div
                      class="flex items-center gap-3 p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 group hover:border-secondary/30 transition-colors">
                      <div
                        class="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-lg flex items-center justify-center font-black text-[10px]">
                        PDF</div>
                      <div class="flex-1 min-w-0">
                        <p class="text-[11px] font-bold text-slate-700 dark:text-white truncate">Cidades Atendidas.pdf
                        </p>
                        <div class="mt-1.5 w-full bg-slate-100 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                          <div class="h-full bg-secondary rounded-full animate-progress"></div>
                        </div>
                      </div>
                      <span class="text-[10px] font-bold text-secondary">100%</span>
                    </div>

                    <div
                      class="flex items-center gap-3 p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 group hover:border-secondary/30 transition-colors delay-150">
                      <div
                        class="w-8 h-8 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 rounded-lg flex items-center justify-center font-black text-[10px]">
                        XLSX</div>
                      <div class="flex-1 min-w-0">
                        <p class="text-[11px] font-bold text-slate-700 dark:text-white truncate">Tabela de Preços
                          V2.xlsx
                        </p>
                        <div class="mt-1.5 w-full bg-slate-100 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                          <div class="h-full bg-emerald-500 rounded-full animate-progress-slow"></div>
                        </div>
                      </div>
                      <span class="text-[10px] font-bold text-emerald-500">100%</span>
                    </div>
                  </div>
                </div>

                <!-- Persona Preview Card -->
                <div
                  class="bg-secondary/5 dark:bg-primary/10 rounded-2xl p-5 border border-primary/10 animate-float-delayed relative">
                  <div
                    class="absolute -top-3 -right-3 bg-green-500 text-white text-[8px] font-black px-2 py-1 rounded-full shadow-lg animate-pulse uppercase">
                    Follow-up Inteligente [ON]
                  </div>

                  <div class="flex flex-col gap-4 mb-2">
                    <div class="flex items-center gap-4">
                      <div class="relative">
                        <NuxtImg src="https://ui-avatars.com/api/?name=Bia&background=E84624&color=fff"
                          class="w-12 h-12 rounded-2xl shadow-lg border-2 border-white dark:border-slate-700"
                          alt="Bia Agent" width="48" height="48" loading="lazy" />
                        <div
                          class="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-500 rounded-full border-4 border-white dark:border-slate-800 animate-pulse">
                        </div>
                      </div>
                      <div>
                        <h4 class="text-sm font-black text-slate-900 dark:text-white">Bia (Agente IA)</h4>
                        <p class="text-[10px] text-secondary font-black uppercase tracking-widest">Tom: Entusiasta 🚀
                        </p>
                      </div>
                    </div>

                    <div class="bg-white/50 dark:bg-slate-800/50 rounded-xl p-3 border border-primary/5">
                      <div class="flex items-center gap-2 mb-1">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 text-secondary" viewBox="0 0 24 24"
                          fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"
                          stroke-linejoin="round">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                        <span class="text-[10px] font-bold text-slate-600 dark:text-slate-300">Follow-up
                          Automático</span>
                      </div>
                      <p class="text-[9px] text-slate-500 dark:text-slate-400 leading-tight">
                        Recupera o assunto das conversas anteriores para um atendimento personalizado.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Live Interaction Mockup -->
              <div class="flex flex-col justify-end relative">
                <div
                  class="bg-slate-50 dark:bg-slate-900/80 rounded-[2rem] p-6 border border-slate-100 dark:border-slate-700 shadow-xl space-y-4 relative z-10 overflow-hidden">
                  <h4 class="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <span class="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                    Conversa em Tempo Real
                  </h4>

                  <div class="space-y-4">
                    <div class="flex justify-end animate-slide-up" style="animation-delay: 1.2s">
                      <div
                        class="bg-primary text-white text-[11px] font-medium px-4 py-2.5 rounded-2xl rounded-tr-none shadow-lg max-w-[80%] uppercase tracking-tight">
                        quero marcar um cardiologista
                      </div>
                    </div>

                    <div class="flex gap-2 animate-slide-up" style="animation-delay: 2.2s">
                      <div
                        class="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center flex-none text-[8px] font-bold">
                        IA</div>
                      <div
                        class="bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-[11px] leading-relaxed p-4 rounded-2xl rounded-tl-none border border-slate-200 dark:border-slate-700 shadow-sm max-w-[85%] font-medium">
                        Olá! Temos horários disponíveis com o Dr. Ricardo para esta semana. Quinta às 14h ou Sexta às
                        09h. Qual prefere? 🩺
                      </div>
                    </div>

                    <div class="flex justify-end animate-slide-up" style="animation-delay: 4.2s">
                      <div
                        class="bg-primary text-white text-[11px] font-medium px-4 py-2.5 rounded-2xl rounded-tr-none shadow-lg max-w-[80%] uppercase tracking-tight">
                        Quinta as 14h por favor
                      </div>
                    </div>

                    <div class="flex gap-2 animate-slide-up" style="animation-delay: 5.2s">
                      <div
                        class="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center flex-none text-[8px] font-bold">
                        IA</div>
                      <div
                        class="bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-[11px] leading-relaxed p-4 rounded-2xl rounded-tl-none border border-slate-200 dark:border-slate-700 shadow-sm max-w-[85%] font-medium">
                        Agendado! ✅ Quinta-feira, 14h com Dr. Ricardo. Já enviei a confirmação para seu WhatsApp. Algo
                        mais?
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Floating 24/7 Badge -->
                <div
                  class="absolute -bottom-10 -right-4 bg-slate-900 border-4 border-white dark:border-slate-900 text-white px-8 py-5 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] z-40 transform hover:scale-105 transition-all group cursor-default">
                  <div class="text-4xl font-black italic tracking-tighter text-white transition-colors leading-none">
                    24/7</div>
                  <div class="text-[10px] font-black uppercase tracking-[0.2em] opacity-60 mt-2">Sempre Online</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Bento Grid Section -->
  <section id="informacoes" class="py-20 bg-slate-100 dark:bg-slate-900">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-6">

        <!-- Card 1: IA Humanizada (Large - Left) -->
        <div
          class="md:col-span-7 bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 pb-0 md:pb-0 relative overflow-hidden flex flex-col md:flex-row items-center md:items-end gap-8 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
          <div class="flex-1 z-10 text-left pb-8 md:pb-12">
            <div
              class="w-12 h-12 bg-white dark:bg-slate-700 rounded-2xl flex items-center justify-center mb-6 shadow-sm text-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2a10 10 0 1 0 10 10H12V2z"></path>
                <path d="M21.18 8.02c-.99-2.62-3.23-4.57-5.96-5.2"></path>
                <path d="M2.82 15.98C3.81 18.6 6.05 20.55 8.78 21.2"></path>
              </svg>
            </div>
            <h3 class="text-3xl font-bold text-slate-900 dark:text-white mb-4">{{ $t('bento_grid.human_ai.title') }}
            </h3>
            <p class="text-slate-600 dark:text-slate-400 mb-6">
              {{ $t('bento_grid.human_ai.desc') }}
            </p>
            <a href="#"
              class="inline-block px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-xl transition-colors">
              {{ $t('bento_grid.human_ai.cta') }}
            </a>
          </div>

          <!-- Image -->
          <div class="relative w-full md:w-1/2 shrink-0 flex justify-end">
            <NuxtImg src="/images/ia-whatsapp.png" alt="IA Humanizada no WhatsApp"
              class="max-w-full h-auto object-contain object-bottom block" width="600" height="600" quality="100" />
          </div>
        </div>

        <!-- Card 2: Segurança (Small - Top Right) -->
        <div
          class="md:col-span-5 bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 flex flex-col justify-center shadow-sm hover:shadow-md transition-shadow relative">

          <!-- Floating Statistics Card - Clients -->
          <div
            class="absolute top-6 right-6 bg-white dark:bg-slate-800 p-3 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 flex flex-col gap-2 animate-bounce-slow delay-700 z-30 max-w-[150px] transform scale-90 origin-top-right">
            <div class="flex -space-x-2 items-center overflow-hidden py-1">
              <img
                class="inline-block h-6 w-6 rounded-full ring-2 ring-white dark:ring-slate-800 object-contain bg-white"
                src="/images/clients/empresa-dmboat.png" alt="Client 1" />
              <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white dark:ring-slate-800 object-cover bg-white"
                src="/images/clients/empresa-grossi.png" alt="Grossi Group" />
              <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white dark:ring-slate-800 object-cover bg-white"
                src="/images/clients/empresa-jit.jpeg" alt="Client 3" />
              <div
                class="h-6 w-6 rounded-full ring-2 ring-white dark:ring-slate-800 bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-[10px] font-bold text-slate-500">
                +500</div>
            </div>
            <div>
              <p class="text-[9px] text-slate-500 dark:text-slate-400 font-medium leading-tight">Empresas que confiam
              </p>
              <div class="flex items-center gap-1 mt-0.5">
                <span class="flex h-1.5 w-1.5 relative">
                  <span
                    class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                </span>
                <p class="text-[9px] font-bold text-slate-900 dark:text-gray-200">Ativas agora</p>
              </div>
            </div>
          </div>

          <div
            class="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-4">{{ $t('bento_grid.security.title') }}
          </h3>
          <p class="text-sm text-slate-600 dark:text-slate-400 mb-6">
            {{ $t('bento_grid.security.desc') }}
          </p>
          <ul class="space-y-3">
            <li class="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
              <svg class="w-5 h-5 text-orange-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"></path>
              </svg>
              {{ $t('bento_grid.security.item1') }}
            </li>
            <li class="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
              <svg class="w-5 h-5 text-orange-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"></path>
              </svg>
              {{ $t('bento_grid.security.item2') }}
            </li>
          </ul>
        </div>

        <!-- Card 3: Atendimento (Small - Bottom Left) -->
        <div
          class="md:col-span-5 bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 flex flex-col justify-center shadow-sm hover:shadow-md transition-shadow">
          <div
            class="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="3"></circle>
              <path
                d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z">
              </path>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-4">{{ $t('bento_grid.support.title') }}
          </h3>
          <p class="text-sm text-slate-600 dark:text-slate-400 mb-6">
            {{ $t('bento_grid.support.desc') }}
          </p>
          <ul class="space-y-3">
            <li class="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
              <svg class="w-5 h-5 text-orange-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"></path>
              </svg>
              WhatsApp
            </li>
            <li class="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
              <svg class="w-5 h-5 text-orange-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"></path>
              </svg>
              Instagram Direct
            </li>
            <li class="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
              <svg class="w-5 h-5 text-orange-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"></path>
              </svg>
              Telegram
            </li>
            <li class="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
              <svg class="w-5 h-5 text-orange-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"></path>
              </svg>
              WebChat nativo
            </li>
          </ul>
        </div>

        <!-- Card 4: Integre (Large - Bottom Right) -->
        <div
          class="md:col-span-7 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between relative overflow-hidden gap-8 shadow-sm hover:shadow-md transition-shadow">
          <div class="relative z-10 max-w-sm text-left">
            <h3 class="text-3xl font-bold text-slate-900 dark:text-white mb-4">{{ $t('bento_grid.integration.title') }}
            </h3>
            <p class="text-slate-600 dark:text-slate-400 mb-8">
              {{ $t('bento_grid.integration.desc') }}
            </p>
            <a href="#"
              class="inline-block px-8 py-4 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-xl transition-colors shadow-lg shadow-blue-700/20">
              {{ $t('bento_grid.integration.cta') }}
            </a>
          </div>

          <!-- Integration Animation -->
          <div class="relative w-full md:w-1/2 h-64 md:h-auto rounded-2xl overflow-hidden shrink-0 min-h-[300px]">
            <FloatingIntegrations />
          </div>
        </div>
      </div>
    </div>
  </section>


  <!-- ==========================================  -->
  <!-- PAIN POINTS NAVIGATOR — "Qual a maior dor?" -->
  <!-- ==========================================  -->
  <section id="dores" class="py-20 md:py-28 bg-white dark:bg-slate-950 relative overflow-hidden">
    <!-- Decorative background -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none"></div>

    <div class="container mx-auto px-4 relative z-10">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest rounded-full mb-6">
          Descubra sua solução
        </span>
        <h2 class="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
          Qual a maior <span class="text-primary">dor</span> do seu negócio hoje?
        </h2>
        <p class="text-lg text-slate-500 dark:text-slate-400">
          Clique na que mais te representa e descubra como resolver agora.
        </p>
      </div>

      <!-- Pain Cards Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl mx-auto">
        <!-- Card 1: Marketplaces -->
        <NuxtLink to="/solucoes/atendimento-marketplaces"
          class="group relative bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 cursor-pointer">
          <span class="text-3xl mb-4 block group-hover:scale-110 transition-transform">🏪</span>
          <h3 class="text-sm font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
            Dificuldade em responder todos os marketplaces
          </h3>
          <p class="text-xs text-slate-400 dark:text-slate-500">Shopee, ML, Nuvemshop e mais — tudo espalhado</p>
          <svg class="w-4 h-4 text-slate-300 dark:text-slate-600 absolute top-6 right-6 group-hover:text-primary group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </NuxtLink>

        <!-- Card 2: Demora -->
        <NuxtLink to="/solucoes/demora-no-atendimento"
          class="group relative bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 cursor-pointer">
          <span class="text-3xl mb-4 block group-hover:scale-110 transition-transform">🔴</span>
          <h3 class="text-sm font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
            Perco vendas porque demoro para responder
          </h3>
          <p class="text-xs text-slate-400 dark:text-slate-500">Leads esfriando enquanto você está ocupado</p>
          <svg class="w-4 h-4 text-slate-300 dark:text-slate-600 absolute top-6 right-6 group-hover:text-primary group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </NuxtLink>

        <!-- Card 3: Concorrência IA -->
        <NuxtLink to="/solucoes/concorrencia-com-ia"
          class="group relative bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 cursor-pointer">
          <span class="text-3xl mb-4 block group-hover:scale-110 transition-transform">🤖</span>
          <h3 class="text-sm font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
            Concorrentes já usam IA e estou ficando para trás
          </h3>
          <p class="text-xs text-slate-400 dark:text-slate-500">Modernize antes que seja tarde</p>
          <svg class="w-4 h-4 text-slate-300 dark:text-slate-600 absolute top-6 right-6 group-hover:text-primary group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </NuxtLink>

        <!-- Card 4: Leads não convertem -->
        <NuxtLink to="/solucoes/leads-que-nao-convertem"
          class="group relative bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 cursor-pointer">
          <span class="text-3xl mb-4 block group-hover:scale-110 transition-transform">💰</span>
          <h3 class="text-sm font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
            Invisto em anúncios mas leads não convertem
          </h3>
          <p class="text-xs text-slate-400 dark:text-slate-500">Tráfego pago sem retorno</p>
          <svg class="w-4 h-4 text-slate-300 dark:text-slate-600 absolute top-6 right-6 group-hover:text-primary group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </NuxtLink>

        <!-- Card 5: Follow-up -->
        <NuxtLink to="/solucoes/follow-up-de-leads"
          class="group relative bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 cursor-pointer">
          <span class="text-3xl mb-4 block group-hover:scale-110 transition-transform">📞</span>
          <h3 class="text-sm font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
            Não consigo fazer follow-up dos leads
          </h3>
          <p class="text-xs text-slate-400 dark:text-slate-500">Leads entram e ninguém acompanha</p>
          <svg class="w-4 h-4 text-slate-300 dark:text-slate-600 absolute top-6 right-6 group-hover:text-primary group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </NuxtLink>

        <!-- Card 6: Fora do horário -->
        <NuxtLink to="/solucoes/atendimento-fora-do-horario"
          class="group relative bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 cursor-pointer">
          <span class="text-3xl mb-4 block group-hover:scale-110 transition-transform">🌙</span>
          <h3 class="text-sm font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
            Não consigo atender fora do horário comercial
          </h3>
          <p class="text-xs text-slate-400 dark:text-slate-500">Vendas perdidas à noite e fins de semana</p>
          <svg class="w-4 h-4 text-slate-300 dark:text-slate-600 absolute top-6 right-6 group-hover:text-primary group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </NuxtLink>

        <!-- Card 7: Perguntas repetitivas -->
        <NuxtLink to="/solucoes/perguntas-repetitivas"
          class="group relative bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 cursor-pointer">
          <span class="text-3xl mb-4 block group-hover:scale-110 transition-transform">🔁</span>
          <h3 class="text-sm font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
            Equipe gasta o dia respondendo as mesmas perguntas
          </h3>
          <p class="text-xs text-slate-400 dark:text-slate-500">80% do tempo em FAQ, não em vendas</p>
          <svg class="w-4 h-4 text-slate-300 dark:text-slate-600 absolute top-6 right-6 group-hover:text-primary group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </NuxtLink>

        <!-- Card 8: Canais descentralizados -->
        <NuxtLink to="/solucoes/canais-descentralizados"
          class="group relative bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 cursor-pointer">
          <span class="text-3xl mb-4 block group-hover:scale-110 transition-transform">📱</span>
          <h3 class="text-sm font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
            Conversas espalhadas em vários canais
          </h3>
          <p class="text-xs text-slate-400 dark:text-slate-500">WhatsApp, Instagram, Telegram — caos total</p>
          <svg class="w-4 h-4 text-slate-300 dark:text-slate-600 absolute top-6 right-6 group-hover:text-primary group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </NuxtLink>

        <!-- Card 9: Falta de controle -->
        <NuxtLink to="/solucoes/falta-de-controle"
          class="group relative bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 cursor-pointer">
          <span class="text-3xl mb-4 block group-hover:scale-110 transition-transform">📊</span>
          <h3 class="text-sm font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
            Não sei o que minha equipe fala com clientes
          </h3>
          <p class="text-xs text-slate-400 dark:text-slate-500">Sem visibilidade de métricas e qualidade</p>
          <svg class="w-4 h-4 text-slate-300 dark:text-slate-600 absolute top-6 right-6 group-hover:text-primary group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </NuxtLink>

        <!-- Card 10: Escalar WhatsApp -->
        <NuxtLink to="/solucoes/escalar-vendas-whatsapp"
          class="group relative bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 cursor-pointer">
          <span class="text-3xl mb-4 block group-hover:scale-110 transition-transform">📈</span>
          <h3 class="text-sm font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
            Quero escalar vendas pelo WhatsApp
          </h3>
          <p class="text-xs text-slate-400 dark:text-slate-500">Limitado por atendimento manual</p>
          <svg class="w-4 h-4 text-slate-300 dark:text-slate-600 absolute top-6 right-6 group-hover:text-primary group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </NuxtLink>

        <!-- Card 11: Integrações -->
        <NuxtLink to="/solucoes/integracoes-e-automacoes"
          class="group relative bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 cursor-pointer">
          <span class="text-3xl mb-4 block group-hover:scale-110 transition-transform">🔗</span>
          <h3 class="text-sm font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
            Preciso integrar com outras ferramentas
          </h3>
          <p class="text-xs text-slate-400 dark:text-slate-500">CRM, e-commerce, ERP — tudo manual</p>
          <svg class="w-4 h-4 text-slate-300 dark:text-slate-600 absolute top-6 right-6 group-hover:text-primary group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </NuxtLink>

        <!-- Card 12: Outra — Qual? (Feedback) -->
        <div class="relative bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800/80 dark:to-slate-800/50 border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <span class="text-3xl mb-4 block">💬</span>
            <h3 class="text-sm font-bold text-slate-900 dark:text-white mb-2">
              Outra dor? Conte para nós!
            </h3>
            <p class="text-xs text-slate-400 dark:text-slate-500 mb-4">Qual é o maior desafio do seu negócio?</p>
          </div>
          <form @submit.prevent="submitPainFeedback" class="space-y-2">
            <input
              v-model="painFeedback"
              type="text"
              placeholder="Descreva sua dor aqui..."
              class="w-full px-3 py-2 text-xs bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all text-slate-900 dark:text-white placeholder-slate-400"
            />
            <button
              type="submit"
              :disabled="!painFeedback.trim()"
              class="w-full px-3 py-2 text-xs font-bold text-white bg-primary hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed rounded-lg transition-all"
            >
              {{ painFeedbackSent ? '✓ Enviado! Obrigado!' : 'Enviar' }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>


  <!-- How It Works -->
  <section class="py-20 bg-slate-50 dark:bg-slate-800/50">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Do Lead ao Fechamento em 4
          Passos</h2>
        <p class="text-slate-600 dark:text-slate-400">Simples de configurar, poderoso para vender.</p>
      </div>

      <div class="relative">
        <!-- Connecting Line (Desktop) -->
        <div class="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 dark:bg-slate-700"></div>

        <div class="grid md:grid-cols-4 gap-8 relative z-10">
          <!-- Step 1 -->
          <div class="text-center group">
            <div
              class="w-24 h-24 mx-auto bg-white dark:bg-slate-800 border-4 border-primary rounded-full flex items-center justify-center text-2xl font-bold text-secondary mb-6 shadow-lg group-hover:scale-110 transition-transform">
              1</div>
            <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">Conecte</h3>
            <p class="text-sm text-slate-600 dark:text-slate-400 px-4">Vincule seu WhatsApp em segundos com QR Code.
            </p>
          </div>
          <!-- Step 2 -->
          <div class="text-center group">
            <div
              class="w-24 h-24 mx-auto bg-white dark:bg-slate-800 border-4 border-slate-200 dark:border-slate-600 rounded-full flex items-center justify-center text-2xl font-bold text-slate-400 mb-6 shadow-lg group-hover:border-primary group-hover:text-secondary transition-colors">
              2</div>
            <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">Configure</h3>
            <p class="text-sm text-slate-600 dark:text-slate-400 px-4">Defina os gatilhos e o tom de voz da sua IA.
            </p>
          </div>
          <!-- Step 3 -->
          <div class="text-center group">
            <div
              class="w-24 h-24 mx-auto bg-white dark:bg-slate-800 border-4 border-slate-200 dark:border-slate-600 rounded-full flex items-center justify-center text-2xl font-bold text-slate-400 mb-6 shadow-lg group-hover:border-primary group-hover:text-secondary transition-colors">
              3</div>
            <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">Automatize</h3>
            <p class="text-sm text-slate-600 dark:text-slate-400 px-4">A Promp atende, qualifica e agenda reuniões.
            </p>
          </div>
          <!-- Step 4 -->
          <div class="text-center group">
            <div
              class="w-24 h-24 mx-auto bg-white dark:bg-slate-800 border-4 border-slate-200 dark:border-slate-600 rounded-full flex items-center justify-center text-2xl font-bold text-slate-400 mb-6 shadow-lg group-hover:border-primary group-hover:text-secondary transition-colors">
              4</div>
            <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">Monitore</h3>
            <p class="text-sm text-slate-600 dark:text-slate-400 px-4">Acompanhe métricas de conversão em tempo
              real.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Detailed Features Section (Inspired by reidozap) -->
  <section id="funcionalidades" class="py-24 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden">
    <!-- Background detail -->
    <div
      class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent">
    </div>

    <div class="container mx-auto px-4">
      <div class="text-center max-w-3xl mx-auto mb-20 animate-fade-in">
        <h2 class="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">Central de Funcionalidades
        </h2>
        <p class="text-lg text-slate-600 dark:text-slate-400">Um ecossistema completo para dominar o atendimento e as
          vendas da sua empresa em um só lugar.</p>
      </div>

      <!-- Features Center Showcase (Moved) -->
      <div class="mb-24">
        <div class="grid lg:grid-cols-3 gap-8 items-center">
          <!-- Left Features -->
          <div class="space-y-12">
            <div class="text-right group">
              <div class="flex items-center justify-end gap-3 mb-2">
                <h3 class="text-xl font-bold text-slate-900 dark:text-white">{{ $t('features_center.config_rapid') }}
                </h3>
                <div
                  class="w-10 h-10 rounded-full bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-slate-600 dark:text-slate-300 group-hover:bg-primary group-hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
              </div>
              <p class="text-slate-600 dark:text-slate-400 text-sm">{{ $t('features_center.config_rapid_desc') }}</p>
            </div>

            <div class="text-right group">
              <div class="flex items-center justify-end gap-3 mb-2">
                <h3 class="text-xl font-bold text-slate-900 dark:text-white">{{ $t('features_center.multi_agent') }}
                </h3>
                <div
                  class="w-10 h-10 rounded-full bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-slate-600 dark:text-slate-300 group-hover:bg-primary group-hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
              </div>
              <p class="text-slate-600 dark:text-slate-400 text-sm">{{ $t('features_center.multi_agent_desc') }}</p>
            </div>

            <div class="text-right group">
              <div class="flex items-center justify-end gap-3 mb-2">
                <h3 class="text-xl font-bold text-slate-900 dark:text-white">{{ $t('features_center.mass_send') }}</h3>
                <div
                  class="w-10 h-10 rounded-full bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-slate-600 dark:text-slate-300 group-hover:bg-primary group-hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path
                      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
                    </path>
                  </svg>
                </div>
              </div>
              <p class="text-slate-600 dark:text-slate-400 text-sm">{{ $t('features_center.mass_send_desc') }}</p>
            </div>
          </div>

          <!-- Center Image -->
          <div class="relative flex justify-center py-12 lg:py-0">
            <!-- Decorative Rings -->
            <div
              class="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent rounded-full blur-3xl scale-150">
            </div>
            <div
              class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-slate-200 dark:border-slate-800/50 rounded-full animate-[spin_60s_linear_infinite]">
            </div>
            <div
              class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-slate-200 dark:border-slate-800/50 rounded-full animate-[spin_40s_linear_infinite_reverse]">
            </div>

            <video src="/video/funcionalidades-promp.mp4" autoplay loop muted playsinline
              class="relative z-10 w-full max-w-[500px] object-contain bg-transparent"></video>
            <!-- <DeviceMockup3D /> -->
          </div>

          <!-- Right Features -->
          <div class="space-y-12">
            <div class="text-left group">
              <div class="flex items-center justify-start gap-3 mb-2">
                <div
                  class="w-10 h-10 rounded-full bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-slate-600 dark:text-slate-300 group-hover:bg-primary group-hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-slate-900 dark:text-white">{{ $t('features_center.crm_visual') }}</h3>
              </div>
              <p class="text-slate-600 dark:text-slate-400 text-sm">{{ $t('features_center.crm_visual_desc') }}</p>
            </div>

            <div class="text-left group">
              <div class="flex items-center justify-start gap-3 mb-2">
                <div
                  class="w-10 h-10 rounded-full bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-slate-600 dark:text-slate-300 group-hover:bg-primary group-hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                    <line x1="12" y1="19" x2="12" y2="23"></line>
                    <line x1="8" y1="23" x2="16" y2="23"></line>
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-slate-900 dark:text-white">{{ $t('features_center.human_audio') }}
                </h3>
              </div>
              <p class="text-slate-600 dark:text-slate-400 text-sm">{{ $t('features_center.human_audio_desc') }}</p>
            </div>

            <div class="text-left group">
              <div class="flex items-center justify-start gap-3 mb-2">
                <div
                  class="w-10 h-10 rounded-full bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-slate-600 dark:text-slate-300 group-hover:bg-primary group-hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10"></line>
                    <line x1="12" y1="20" x2="12" y2="4"></line>
                    <line x1="6" y1="20" x2="6" y2="14"></line>
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-slate-900 dark:text-white">{{ $t('features_center.reports') }}</h3>
              </div>
              <p class="text-slate-600 dark:text-slate-400 text-sm">{{ $t('features_center.reports_desc') }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        <!-- Item 1: Atendimentos -->
        <div
          class="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:border-secondary/30 transition-all group">
          <div class="flex items-center gap-4">
            <div
              class="w-10 h-10 bg-secondary/5 dark:bg-blue-500/10 text-secondary dark:text-blue-300 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            <div>
              <h3 class="font-bold text-slate-800 dark:text-white text-sm">{{ $t('bento_grid.items.attendance.title') }}
              </h3>
              <p class="text-[11px] text-slate-500 dark:text-slate-400">{{ $t('bento_grid.items.attendance.desc') }}</p>
            </div>
          </div>
        </div>

        <!-- Item 2: Contatos -->
        <div
          class="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:border-secondary/30 transition-all group">
          <div class="flex items-center gap-4">
            <div
              class="w-10 h-10 bg-secondary/5 dark:bg-blue-500/10 text-secondary dark:text-blue-300 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <div>
              <h3 class="font-bold text-slate-800 dark:text-white text-sm">{{ $t('bento_grid.items.contacts.title') }}
              </h3>
              <p class="text-[11px] text-slate-500 dark:text-slate-400">{{ $t('bento_grid.items.contacts.desc') }}</p>
            </div>
          </div>
        </div>

        <!-- Item 3: Chat -->
        <div
          class="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:border-secondary/30 transition-all group">
          <div class="flex items-center gap-4">
            <div
              class="w-10 h-10 bg-secondary/5 dark:bg-blue-500/10 text-secondary dark:text-blue-300 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path
                  d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z">
                </path>
              </svg>
            </div>
            <div>
              <h3 class="font-bold text-slate-800 dark:text-white text-sm">{{ $t('bento_grid.items.chat.title') }}</h3>
              <p class="text-[11px] text-slate-500 dark:text-slate-400">{{ $t('bento_grid.items.chat.desc') }}</p>
            </div>
          </div>
        </div>

        <!-- Item 4: Funil -->
        <div
          class="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:border-secondary/30 transition-all group">
          <div class="flex items-center gap-4">
            <div
              class="w-10 h-10 bg-secondary/5 dark:bg-blue-500/10 text-secondary dark:text-blue-300 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z"></path>
              </svg>
            </div>
            <div>
              <h3 class="font-bold text-slate-800 dark:text-white text-sm">{{ $t('bento_grid.items.funnel.title') }}
              </h3>
              <p class="text-[11px] text-slate-500 dark:text-slate-400">{{ $t('bento_grid.items.funnel.desc') }}</p>
            </div>
          </div>
        </div>

        <!-- Item 5: Kanban -->
        <div
          class="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:border-secondary/30 transition-all group">
          <div class="flex items-center gap-4">
            <div
              class="w-10 h-10 bg-secondary/5 dark:bg-blue-500/10 text-secondary dark:text-blue-300 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="9" y1="3" x2="9" y2="21"></line>
                <line x1="15" y1="3" x2="15" y2="21"></line>
              </svg>
            </div>
            <div>
              <h3 class="font-bold text-slate-800 dark:text-white text-sm">{{ $t('bento_grid.items.kanban.title') }}
              </h3>
              <p class="text-[11px] text-slate-500 dark:text-slate-400">{{ $t('bento_grid.items.kanban.desc') }}</p>
            </div>
          </div>
        </div>

        <!-- Item 6: Tarefas -->
        <div
          class="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:border-secondary/30 transition-all group">
          <div class="flex items-center gap-4">
            <div
              class="w-10 h-10 bg-secondary/5 dark:bg-blue-500/10 text-secondary dark:text-blue-300 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="9 11 12 14 22 4"></polyline>
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
              </svg>
            </div>
            <div>
              <h3 class="font-bold text-slate-800 dark:text-white text-sm">{{ $t('bento_grid.items.tasks.title') }}</h3>
              <p class="text-[11px] text-slate-500 dark:text-slate-400">{{ $t('bento_grid.items.tasks.desc') }}</p>
            </div>
          </div>
        </div>

        <!-- Item 7: Mensagens Rápidas -->
        <div
          class="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:border-secondary/30 transition-all group">
          <div class="flex items-center gap-4">
            <div
              class="w-10 h-10 bg-secondary/5 dark:bg-blue-500/10 text-secondary dark:text-blue-300 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
              </svg>
            </div>
            <div>
              <h3 class="font-bold text-slate-800 dark:text-white text-sm">{{
                $t('bento_grid.items.quick_messages.title') }}</h3>
              <p class="text-[11px] text-slate-500 dark:text-slate-400">{{ $t('bento_grid.items.quick_messages.desc') }}
              </p>
            </div>
          </div>
        </div>

        <!-- Item 8: Galeria -->
        <div
          class="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:border-secondary/30 transition-all group">
          <div class="flex items-center gap-4">
            <div
              class="w-10 h-10 bg-secondary/5 dark:bg-blue-500/10 text-secondary dark:text-blue-300 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
            </div>
            <div>
              <h3 class="font-bold text-slate-800 dark:text-white text-sm">{{ $t('bento_grid.items.gallery.title') }}
              </h3>
              <p class="text-[11px] text-slate-500 dark:text-slate-400">{{ $t('bento_grid.items.gallery.desc') }}</p>
            </div>
          </div>
        </div>

        <!-- Item 9: Disparo em Massa -->
        <div
          class="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:border-secondary/30 transition-all group">
          <div class="flex items-center gap-4">
            <div
              class="w-10 h-10 bg-secondary/5 dark:bg-blue-500/10 text-secondary dark:text-blue-300 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                <path d="M2 17l10 5 10-5"></path>
                <path d="M2 12l10 5 10-5"></path>
              </svg>
            </div>
            <div>
              <h3 class="font-bold text-slate-800 dark:text-white text-sm">{{ $t('bento_grid.items.mass_send.title') }}
              </h3>
              <p class="text-[11px] text-slate-500 dark:text-slate-400">{{ $t('bento_grid.items.mass_send.desc') }}</p>
            </div>
          </div>
        </div>

        <!-- Item 10: ChatFlow -->
        <div
          class="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:border-secondary/30 transition-all group">
          <div class="flex items-center gap-4">
            <div
              class="w-10 h-10 bg-secondary/5 dark:bg-blue-500/10 text-secondary dark:text-blue-300 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <div>
              <h3 class="font-bold text-slate-800 dark:text-white text-sm">{{ $t('bento_grid.items.chatbot.title') }}
              </h3>
              <p class="text-[11px] text-slate-500 dark:text-slate-400">{{ $t('bento_grid.items.chatbot.desc') }}</p>
            </div>
          </div>
        </div>

        <!-- Item 11: Campanha -->
        <div
          class="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:border-secondary/30 transition-all group">
          <div class="flex items-center gap-4">
            <div
              class="w-10 h-10 bg-secondary/5 dark:bg-blue-500/10 text-secondary dark:text-blue-300 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                <line x1="4" y1="22" x2="4" y2="15"></line>
              </svg>
            </div>
            <div>
              <h3 class="font-bold text-slate-800 dark:text-white text-sm">{{ $t('bento_grid.items.campaigns.title') }}
              </h3>
              <p class="text-[11px] text-slate-500 dark:text-slate-400">{{ $t('bento_grid.items.campaigns.desc') }}</p>
            </div>
          </div>
        </div>

        <!-- Item 12: Relatórios -->
        <div
          class="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:border-secondary/30 transition-all group">
          <div class="flex items-center gap-4">
            <div
              class="w-10 h-10 bg-secondary/5 dark:bg-blue-500/10 text-secondary dark:text-blue-300 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="20" x2="18" y2="10"></line>
                <line x1="12" y1="20" x2="12" y2="4"></line>
                <line x1="6" y1="20" x2="6" y2="14"></line>
              </svg>
            </div>
            <div>
              <h3 class="font-bold text-slate-800 dark:text-white text-sm">{{ $t('bento_grid.items.reports.title') }}
              </h3>
              <p class="text-[11px] text-slate-500 dark:text-slate-400">{{ $t('bento_grid.items.reports.desc') }}</p>
            </div>
          </div>
        </div>

        <!-- Item 13: Filas -->
        <div
          class="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:border-secondary/30 transition-all group">
          <div class="flex items-center gap-4">
            <div
              class="w-10 h-10 bg-secondary/5 dark:bg-blue-500/10 text-secondary dark:text-blue-300 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="8" y1="6" x2="21" y2="6"></line>
                <line x1="8" y1="12" x2="21" y2="12"></line>
                <line x1="8" y1="18" x2="21" y2="18"></line>
                <line x1="3" y1="6" x2="3.01" y2="6"></line>
                <line x1="3" y1="12" x2="3.01" y2="12"></line>
                <line x1="3" y1="18" x2="3.01" y2="18"></line>
              </svg>
            </div>
            <div>
              <h3 class="font-bold text-slate-800 dark:text-white text-sm">{{ $t('bento_grid.items.queues.title') }}
              </h3>
              <p class="text-[11px] text-slate-500 dark:text-slate-400">{{ $t('bento_grid.items.queues.desc') }}</p>
            </div>
          </div>
        </div>

        <!-- Item 14: API -->
        <div
          class="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:border-secondary/30 transition-all group">
          <div class="flex items-center gap-4">
            <div
              class="w-10 h-10 bg-secondary/5 dark:bg-blue-500/10 text-secondary dark:text-blue-300 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            </div>
            <div>
              <h3 class="font-bold text-slate-800 dark:text-white text-sm">{{ $t('bento_grid.items.api.title') }}</h3>
              <p class="text-[11px] text-slate-500 dark:text-slate-400">{{ $t('bento_grid.items.api.desc') }}</p>
            </div>
          </div>
        </div>

        <!-- Item 15: Agendamentos -->
        <div
          class="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:border-secondary/30 transition-all group">
          <div class="flex items-center gap-4">
            <div
              class="w-10 h-10 bg-secondary/5 dark:bg-blue-500/10 text-secondary dark:text-blue-300 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            </div>
            <div>
              <h3 class="font-bold text-slate-800 dark:text-white text-sm">{{ $t('bento_grid.items.scheduling.title') }}
              </h3>
              <p class="text-[11px] text-slate-500 dark:text-slate-400">{{ $t('bento_grid.items.scheduling.desc') }}</p>
            </div>
          </div>
        </div>

        <!-- Item 16: Avaliações -->
        <div
          class="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:border-secondary/30 transition-all group">
          <div class="flex items-center gap-4">
            <div
              class="w-10 h-10 bg-secondary/5 dark:bg-blue-500/10 text-secondary dark:text-blue-300 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polygon
                  points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                </polygon>
              </svg>
            </div>
            <div>
              <h3 class="font-bold text-slate-800 dark:text-white text-sm">{{ $t('bento_grid.items.ratings.title') }}
              </h3>
              <p class="text-[11px] text-slate-500 dark:text-slate-400">{{ $t('bento_grid.items.ratings.desc') }}</p>
            </div>
          </div>
        </div>

        <!-- Item 17: Horário -->
        <div
          class="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:border-secondary/30 transition-all group">
          <div class="flex items-center gap-4">
            <div
              class="w-10 h-10 bg-secondary/5 dark:bg-blue-500/10 text-secondary dark:text-blue-300 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <div>
              <h3 class="font-bold text-slate-800 dark:text-white text-sm">{{ $t('bento_grid.items.hours.title') }}</h3>
              <p class="text-[11px] text-slate-500 dark:text-slate-400">{{ $t('bento_grid.items.hours.desc') }}</p>
            </div>
          </div>
        </div>

        <!-- Item 18: Etiquetas -->
        <div
          class="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:border-secondary/30 transition-all group">
          <div class="flex items-center gap-4">
            <div
              class="w-10 h-10 bg-secondary/5 dark:bg-blue-500/10 text-secondary dark:text-blue-300 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                <line x1="7" y1="7" x2="7.01" y2="7"></line>
              </svg>
            </div>
            <div>
              <h3 class="font-bold text-slate-800 dark:text-white text-sm">{{ $t('bento_grid.items.tags.title') }}</h3>
              <p class="text-[11px] text-slate-500 dark:text-slate-400">{{ $t('bento_grid.items.tags.desc') }}</p>
            </div>
          </div>
        </div>

        <!-- Item 19: Wavoip -->
        <div
          class="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:border-secondary/30 transition-all group">
          <div class="flex items-center gap-4">
            <div
              class="w-10 h-10 bg-secondary/5 dark:bg-blue-500/10 text-secondary dark:text-blue-300 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
                </path>
              </svg>
            </div>
            <div>
              <h3 class="font-bold text-slate-800 dark:text-white text-sm">{{ $t('bento_grid.items.wavoip.title') }}
              </h3>
              <p class="text-[11px] text-slate-500 dark:text-slate-400">{{ $t('bento_grid.items.wavoip.desc') }}</p>
            </div>
          </div>
        </div>

        <!-- Item 20: Equipes -->
        <div
          class="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:border-secondary/30 transition-all group">
          <div class="flex items-center gap-4">
            <div
              class="w-10 h-10 bg-secondary/5 dark:bg-blue-500/10 text-secondary dark:text-blue-300 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <div>
              <h3 class="font-bold text-slate-800 dark:text-white text-sm">{{ $t('bento_grid.items.teams.title') }}</h3>
              <p class="text-[11px] text-slate-500 dark:text-slate-400">{{ $t('bento_grid.items.teams.desc') }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action below grid -->
      <div class="mt-16 text-center animate-fade-in-up">
        <p class="text-slate-500 dark:text-slate-400 text-sm mb-6 font-medium">{{ $t('bento_grid.cta_all.text') }}</p>
        <a href="#precos"
          class="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:scale-105 transition-all shadow-lg shadow-secondary/20">
          {{ $t('bento_grid.cta_all.button') }}
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </div>
    </div>
  </section>



  <!-- Pricing Section -->
  <section id="precos" class="py-20 bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">{{ $t('pricing.title') }}
        </h2>
        <p class="text-lg text-slate-600 dark:text-slate-400">{{ $t('pricing.subtitle') }}</p>
      </div>

      <div class="grid md:grid-cols-4 gap-6 items-start">
        <!-- Profissional Liberal -->
        <div
          class="p-6 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-primary/50 transition-all shadow-sm hover:shadow-md bg-white dark:bg-slate-800 flex flex-col h-full transform hover:-translate-y-1 duration-300">
          <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">{{ $t('pricing.plans.liberal.name') }}</h3>
          <p class="text-slate-500 dark:text-slate-400 text-xs mb-4">{{ $t('pricing.plans.liberal.target') }}</p>
          <div class="flex items-baseline mb-6">
            <span class="text-3xl font-bold text-slate-900 dark:text-white">R$ 179,90</span>
            <span class="text-slate-500 dark:text-slate-400 text-xs ml-1">{{ $t('pricing.period') }}</span>
          </div>

          <!-- Icons -->
          <div class="flex flex-wrap gap-2 mb-6">
            <div class="bg-white p-1.5 rounded-lg text-green-600 flex items-center gap-1" title="WhatsApp">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span class="text-[10px] font-bold">WhatsApp</span>
            </div>
            <div class="bg-teal-100 text-teal-700 px-3 py-1 rounded-md text-[10px] font-bold flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2a10 10 0 1 0 10 10H12V2z"></path>
              </svg>
              ChatGPT
            </div>
          </div>

          <ul class="space-y-3 mb-8 text-xs text-slate-600 dark:text-slate-300 flex-grow">
            <li class="flex items-center"><svg class="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.users_4') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.connections_1') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.galeria_liberal') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.mensagens_rapidas') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.agendamentos') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.aniversarios') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.funil_kanban') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.tarefas') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.agenda') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.catalogo_produtos') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.avaliacoes_nps') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.relatorios') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.api_externa') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.woocommerce') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.google_calendar') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.integracoes_meta') }}</li>
          </ul>
          <a href="https://app.promp.com.br/signup?plano=4"
            class="block w-full py-2 px-4 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-600 text-slate-900 dark:text-white font-bold rounded-lg text-center text-sm transition-colors">{{
              $t('pricing.cta') }}</a>
        </div>

        <!-- Starter -->
        <div
          class="p-6 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-primary/50 transition-all shadow-sm hover:shadow-md bg-white dark:bg-slate-800 flex flex-col h-full transform hover:-translate-y-1 duration-300">
          <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">{{ $t('pricing.plans.starter.name') }}</h3>
          <p class="text-slate-500 dark:text-slate-400 text-xs mb-4">{{ $t('pricing.plans.starter.target') }}</p>
          <div class="flex items-baseline mb-6">
            <span class="text-3xl font-bold text-slate-900 dark:text-white">R$ 597,00</span>
            <span class="text-slate-500 dark:text-slate-400 text-xs ml-1">{{ $t('pricing.period') }}</span>
          </div>

          <!-- Icons -->
          <div class="flex flex-wrap gap-2 mb-6">
            <div class="bg-green-100 text-green-600 p-1.5 rounded-lg flex items-center gap-1" title="WhatsApp">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span class="text-[10px] font-bold">WhatsApp</span>
            </div>
            <div class="bg-blue-100 text-blue-600 p-1.5 rounded-lg flex items-center gap-1" title="Telegram">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 11.944 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
              <span class="text-[10px] font-bold">Telegram</span>
            </div>
            <div class="bg-teal-100 text-teal-700 px-3 py-1 rounded-md text-[10px] font-bold flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2a10 10 0 1 0 10 10H12V2z"></path>
              </svg>
              ChatGPT
            </div>
            <div
              class="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-md text-[10px] font-bold flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path
                  d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z">
                </path>
              </svg>
              Gemini
            </div>
            <div
              class="bg-purple-100 text-purple-700 px-3 py-1 rounded-md text-[10px] font-bold flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2a10 10 0 1 0 10 10H12V2z"></path>
              </svg>
              {{ $t('pricing.features.integracoes_ia') }}
            </div>
          </div>

          <ul class="space-y-3 mb-8 text-xs text-slate-600 dark:text-slate-300 flex-grow">
            <li class="flex items-center"><svg class="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.users_5') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.connections_2') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.envio_massa') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.galeria_starter') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.mensagens_rapidas') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.chatflow') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.agendamentos') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.aniversarios') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.integracoes_ia') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.funil_kanban') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.tarefas') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.agenda') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.agendamento_publico') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.catalogo_produtos') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.comentarios_redes') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.avaliacoes_nps') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.relatorios') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.api_externa') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.woocommerce') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.nuvemshop') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.google_calendar') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.rocketchat') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.integracoes_meta') }}</li>
          </ul>
          <a href="https://app.promp.com.br/signup?plano=1"
            class="block w-full py-2 px-4 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-600 text-slate-900 dark:text-white font-bold rounded-lg text-center text-sm transition-colors">Assinar
            Starter</a>
        </div>

        <!-- Advance (Highlighted) -->
        <div
          class="p-6 rounded-2xl bg-slate-900 text-white border-2 border-primary relative transform md:-translate-y-4 shadow-xl z-10 flex flex-col h-full">
          <div
            class="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg rounded-tr-lg">
            RECOMENDADO</div>
          <h3 class="text-lg font-bold mb-2">Advance</h3>
          <p class="text-slate-400 text-xs mb-4">Empresas em expansão.</p>
          <div class="flex items-baseline mb-6">
            <span class="text-3xl font-bold">R$ 1.897,00</span>
            <span class="text-slate-400 text-xs ml-1">/mês</span>
          </div>

          <!-- Icons -->
          <div class="flex flex-wrap gap-2 mb-6 text-black">
            <!-- Channels -->
            <div class="bg-white p-1.5 rounded-lg text-green-600 flex items-center gap-1" title="WhatsApp">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span class="text-[10px] font-bold text-white">WhatsApp</span>
            </div>
            <div class="bg-white p-1.5 rounded-lg text-pink-600 flex items-center gap-1" title="Instagram">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.163 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span class="text-[10px] font-bold text-white">Instagram</span>
            </div>
            <div class="bg-white text-slate-800 px-2 py-1.5 rounded-lg text-[10px] font-bold flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path
                  d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z">
                </path>
              </svg>
              WebChat
            </div>

            <!-- AIs -->
            <div class="bg-teal-500 text-white px-2 py-1.5 rounded-lg text-[10px] font-bold flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2a10 10 0 1 0 10 10H12V2z"></path>
              </svg>
              GPT-4
            </div>
            <div class="bg-indigo-500 text-white px-2 py-1.5 rounded-lg text-[10px] font-bold flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path
                  d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z">
                </path>
              </svg>
              Gemini
            </div>
            <div class="bg-slate-700 text-white px-2 py-1.5 rounded-lg text-[10px] font-bold flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 16v-4"></path>
                <path d="M12 8h.01"></path>
              </svg>
              Grok
            </div>
            <div class="bg-orange-500 text-white px-2 py-1.5 rounded-lg text-[10px] font-bold flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polygon
                  points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                </polygon>
              </svg>
              Qwen
            </div>
            <div class="bg-purple-500 text-white px-2 py-1.5 rounded-lg text-[10px] font-bold flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2a10 10 0 1 0 10 10H12V2z"></path>
              </svg>
              {{ $t('pricing.features.integracoes_ia') }}
            </div>
          </div>

          <ul class="space-y-3 mb-8 text-xs text-slate-300 flex-grow">
            <li class="flex items-center"><svg class="w-3 h-3 text-secondary mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.users_15') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-secondary mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.connections_5') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-secondary mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.campanhas') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-secondary mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.envio_massa') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-secondary mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.galeria_advance') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-secondary mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.mensagens_rapidas') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-secondary mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.chatflow') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-secondary mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.agendamentos') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-secondary mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.aniversarios') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-secondary mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.integracoes_ia') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-secondary mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.funil_kanban') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-secondary mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.tarefas') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-secondary mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.agenda') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-secondary mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.agendamento_publico') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-secondary mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.catalogo_produtos') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-secondary mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.comentarios_redes') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-secondary mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.avaliacoes_nps') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-secondary mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.relatorios') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-secondary mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.protocolos') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-secondary mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.registro_chamadas') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-secondary mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.wavoip') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-secondary mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.webphone_sip') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-secondary mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.api_externa') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-secondary mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.woocommerce') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-secondary mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.nuvemshop') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-secondary mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.google_calendar') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-secondary mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.integracoes_meta') }}</li>
          </ul>
          <a href="https://app.promp.com.br/signup?plano=2"
            class="block w-full py-3 px-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg text-center text-sm transition-colors shadow-lg shadow-primary/30">Assinar
            Advance</a>
        </div>

        <!-- Prime -->
        <div
          class="p-6 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-primary/50 transition-all shadow-sm hover:shadow-md bg-white dark:bg-slate-800 flex flex-col h-full relative overflow-hidden">
          <div class="absolute -right-12 -top-12 w-24 h-24 bg-orange-200 rounded-full blur-2xl opacity-50"></div>
          <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">{{ $t('pricing.plans.prime.name') }}</h3>
          <p class="text-slate-500 dark:text-slate-400 text-xs mb-4">{{ $t('pricing.plans.prime.target') }}</p>
          <div class="flex items-baseline mb-6">
            <span class="text-3xl font-bold text-slate-900 dark:text-white">R$ 2.497,00</span>
            <span class="text-slate-500 dark:text-slate-400 text-xs ml-1">/mês</span>
          </div>

          <!-- Icons -->
          <div class="flex flex-wrap gap-1.5 mb-6">
            <div class="bg-green-100 text-green-700 px-1.5 py-0.5 rounded text-[9px] font-bold flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z">
                </path>
              </svg>
              WhatsApp
            </div>
            <div class="bg-pink-100 text-pink-700 px-1.5 py-0.5 rounded text-[9px] font-bold flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              Instagram
            </div>
            <div class="bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded text-[9px] font-bold flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path
                  d="M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-8.609 3.33c-2.068.8-4.133 1.598-5.724 2.21a405.15 405.15 0 0 1-2.849 1.09c-.42.147-.99.332-1.473.901-.728.968.193 1.798.919 2.286 1.61.516 3.275 1.009 4.654 1.472.509 1.793.997 3.592 1.48 5.388.16.69.506 1.287.842 1.563.345.24.575.193.699.141.26-.102.438-.353.71-.67l1.32-1.563 5.406-6.509c.2-.24.549-.787.085-1.127-.473-.398-1.29-.12-1.542.066l-4.524 5.433-1.033-3.66 8.525-4.832c2.049-1.16 4.316-2.439 5.867-3.328.71-.397 1.23-.746 1.264-1.218.026-.4-.252-.802-.57-1.025a2.228 2.228 0 0 0-1.22-.38z" />
              </svg>
              Telegram
            </div>
            <div
              class="bg-indigo-100 text-indigo-700 px-1.5 py-0.5 rounded text-[9px] font-bold flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path
                  d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z">
                </path>
              </svg>
              WebChat
            </div>
            <div
              class="bg-yellow-100 text-yellow-700 px-1.5 py-0.5 rounded text-[9px] font-bold flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              Mercado Livre
            </div>
            <div
              class="bg-orange-100 text-orange-700 px-1.5 py-0.5 rounded text-[9px] font-bold flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              Shopee
            </div>
            <div class="bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded text-[9px] font-bold flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                <line x1="7" y1="7" x2="7.01" y2="7"></line>
              </svg>
              Shein
            </div>
            <div class="bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded text-[9px] font-bold flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              Magalu
            </div>
            <div
              class="bg-purple-100 text-purple-700 px-1.5 py-0.5 rounded text-[9px] font-bold flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z">
                </path>
                <circle cx="12" cy="12" r="10"></circle>
              </svg>
              Claude
            </div>
            <div class="bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded text-[9px] font-bold flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2a10 10 0 1 0 10 10H12V2z"></path>
              </svg>
              Deepseek
            </div>
            <div class="border border-slate-200 text-slate-500 px-1.5 py-0.5 rounded text-[9px] font-bold">
              + Ollama/HF
            </div>
          </div>

          <ul class="space-y-3 mb-8 text-xs text-slate-600 dark:text-slate-300 flex-grow">
            <li class="flex items-center"><svg class="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.users_100') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.connections_30') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.campanhas') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.envio_massa') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.galeria_prime') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.mensagens_rapidas') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.chatflow') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.agendamentos') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.aniversarios') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.integracoes_ia') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.funil_kanban') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.tarefas') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.agenda') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.agendamento_publico') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.catalogo_produtos') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.comentarios_redes') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.avaliacoes_nps') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.relatorios') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.protocolos') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.registro_chamadas') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.wavoip') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.webphone_sip') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.api_externa') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.woocommerce') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.nuvemshop') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.google_calendar') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.rocketchat') }}</li>
            <li class="flex items-center"><svg class="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg> {{ $t('pricing.features.integracoes_meta') }}</li>
          </ul>
          <a href="https://app.promp.com.br/signup?plano=3"
            class="block w-full py-2 px-4 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-600 text-slate-900 dark:text-white font-bold rounded-lg text-center text-sm transition-colors">{{
              $t('pricing.cta') }}</a>
        </div>
      </div>
    </div>
  </section>




  <!-- Testimonials Section -->
  <TestimonialsSection />

  <GlobalPresence />

  <!-- FAQ Section -->
  <FAQSection />

  <!-- Mobile App Section -->
  <section class="pt-20 md:pt-28 pb-0 bg-slate-50 dark:bg-[#070b14] border-t border-slate-200/80 dark:border-slate-800/80 relative z-10 overflow-hidden transition-colors duration-300">
    <div class="container mx-auto px-4">
      <div class="flex flex-col lg:flex-row items-end gap-12 lg:gap-16">
        <!-- Text Content -->
        <div class="w-full lg:w-1/2 z-10 pb-12 lg:pb-24 self-center">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 dark:bg-blue-950/60 text-secondary dark:text-blue-300 text-xs font-bold border border-secondary/20 dark:border-blue-800/50 mb-4 shadow-2xs">
            {{ $t('mobile_app.label') }}
          </div>
          <h2 class="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
            {{ $t('mobile_app.title') }}
          </h2>
          <p class="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
            {{ $t('mobile_app.desc') }}
          </p>

          <div class="flex flex-col sm:flex-row gap-4">
            <!-- Google Play Button -->
            <a href="https://play.google.com/store/apps/details?id=com.converta.apppromp&hl=pt_BR" target="_blank"
              class="flex items-center bg-slate-900 dark:bg-slate-800 text-white px-6 py-3.5 rounded-xl hover:bg-slate-800 dark:hover:bg-slate-700 border border-transparent dark:border-slate-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              aria-label="Baixar aplicativo na Google Play Store">
              <svg class="w-8 h-8 mr-3 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.17L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              <div class="text-left">
                <div class="text-[10px] uppercase tracking-wide opacity-80">{{ $t('mobile_app.download_google') }}</div>
                <div class="text-sm font-bold">Google Play</div>
              </div>
            </a>

            <!-- App Store Button -->
            <a href="https://apps.apple.com/br/app/promp-ia-vendas-e-marketing/id6752315649" target="_blank"
              class="flex items-center bg-slate-900 dark:bg-slate-800 text-white px-6 py-3.5 rounded-xl hover:bg-slate-800 dark:hover:bg-slate-700 border border-transparent dark:border-slate-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              aria-label="Baixar aplicativo na App Store">
              <svg class="w-8 h-8 mr-3 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.37 12.36,4.26 13,3.5Z" />
              </svg>
              <div class="text-left">
                <div class="text-[10px] uppercase tracking-wide opacity-80">{{ $t('mobile_app.download_apple') }}</div>
                <div class="text-sm font-bold">App Store</div>
              </div>
            </a>
          </div>
        </div>

        <!-- Mockup Image -->
        <div class="w-full lg:w-1/2 flex justify-center items-end relative self-end">
          <!-- Background Blob -->
          <div class="absolute inset-0 bg-primary/20 blur-3xl rounded-full translate-y-4 scale-75 pointer-events-none"></div>

          <img src="/images/modelo-app.png" alt="App Mobile Promp"
            class="relative z-10 w-auto max-w-full h-auto max-h-[600px] object-contain object-bottom block -mb-px" />

          <!-- Floating Lottie Notification -->
          <div class="absolute -left-8 top-1/4 z-20 hidden md:block w-72">
            <ClientOnly>
              <div class="lottie-container w-full min-h-[120px]" data-animation-path="/images/Notification-remix.json">
              </div>
            </ClientOnly>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Final CTA -->
  <section class="py-24 bg-primary text-white relative z-10 overflow-hidden" style="background-color: #E84624;">
    <!-- Decor elements -->
    <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

    <div class="container mx-auto px-4 text-center relative z-10">
      <h2 class="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">{{ $t('final_cta.title') }}</h2>
      <p class="text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">{{ $t('final_cta.subtitle') }}</p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <NuxtLink to="https://app.promp.com.br/signup"
          class="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-slate-900 bg-white hover:bg-slate-50 rounded-xl shadow-xl transition-transform hover:-translate-y-1">
          {{ $t('final_cta.button_trial') }}
        </NuxtLink>
        <a href="https://wa.me/5522992371763?text=Ol%C3%A1,%20quero%20mais%20informa%C3%A7%C3%B5es%20da%20IA%20para%20minha%20empresa"
          target="_blank"
          class="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white border-2 border-white/40 hover:bg-white/10 rounded-xl transition-colors">
          {{ $t('final_cta.button_whatsapp') }}
        </a>
      </div>
    </div>
  </section>
  </div>
</template>
