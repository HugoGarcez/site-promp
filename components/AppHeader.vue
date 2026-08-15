<template>
  <header
    class="fixed top-0 left-0 w-full z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 transition-colors duration-300">
    <div class="container mx-auto px-4 h-20 flex items-center justify-between">
      <!-- Left side: Logo -->
      <div class="flex-1 flex justify-start">
        <NuxtLink to="/" class="flex items-center gap-2 group">
          <NuxtImg src="/images/logo-fundo-claro.svg" alt="Promp" class="h-8 w-auto dark:hidden" />
          <NuxtImg src="/images/logo-fundo-escuro.svg" alt="Promp" class="h-8 w-auto hidden dark:block" />
        </NuxtLink>
      </div>

      <!-- Center: Desktop Menu with HERO Dropdown -->
      <nav class="hidden lg:flex items-center gap-7 justify-center">
        <!-- HERO Dropdown: Soluções -->
        <div class="relative group/solutions py-4">
          <button
            type="button"
            class="flex items-center gap-1.5 text-sm font-semibold text-slate-700 dark:text-slate-200 group-hover/solutions:text-primary dark:group-hover/solutions:text-primary transition-colors py-2 focus:outline-none cursor-pointer"
            @click="isSolutionsOpen = !isSolutionsOpen"
          >
            <span>Soluções</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 transition-transform duration-300 group-hover/solutions:rotate-180 group-hover/solutions:text-primary"
              :class="{ 'rotate-180 text-primary': isSolutionsOpen }"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <!-- Dropdown Mega Menu Panel (Style Hero / Freshworks) -->
          <div
            class="fixed left-1/2 -translate-x-1/2 top-[76px] w-[1140px] max-w-[96vw] transition-all duration-200 ease-out opacity-0 translate-y-2 pointer-events-none invisible group-hover/solutions:opacity-100 group-hover/solutions:translate-y-0 group-hover/solutions:pointer-events-auto group-hover/solutions:visible z-50 pt-2"
            :class="{ '!opacity-100 !translate-y-0 !pointer-events-auto !visible': isSolutionsOpen }"
          >
            <div class="bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)] border border-slate-200/90 dark:border-slate-800 p-6 lg:p-7 overflow-hidden">
              <div class="grid grid-cols-12 gap-6">
                <!-- Coluna 1: Vendas & Conversão -->
                <div class="col-span-4 space-y-3">
                  <div class="flex items-center gap-2 pb-2 border-b border-slate-100 dark:border-slate-800">
                    <span class="p-1 rounded-md bg-orange-100 dark:bg-orange-950/60 text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </span>
                    <h3 class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Vendas & Conversão</h3>
                  </div>

                  <NuxtLink
                    to="/solucoes/escalar-vendas-whatsapp"
                    @click="isSolutionsOpen = false"
                    class="group/item flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/70 transition-all"
                  >
                    <div class="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 group-hover/item:scale-110 transition-transform flex-shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 class="text-sm font-semibold text-slate-800 dark:text-white group-hover/item:text-primary transition-colors">Escalar Vendas WhatsApp</h4>
                      <p class="text-xs text-slate-500 dark:text-slate-400 leading-snug mt-0.5">Automação ativa de atendimento, qualificação e fechamento.</p>
                    </div>
                  </NuxtLink>

                  <NuxtLink
                    to="/solucoes/leads-que-nao-convertem"
                    @click="isSolutionsOpen = false"
                    class="group/item flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/70 transition-all"
                  >
                    <div class="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 group-hover/item:scale-110 transition-transform flex-shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                      </svg>
                    </div>
                    <div>
                      <h4 class="text-sm font-semibold text-slate-800 dark:text-white group-hover/item:text-primary transition-colors">Conversão de Anúncios</h4>
                      <p class="text-xs text-slate-500 dark:text-slate-400 leading-snug mt-0.5">Atenda leads do Meta Ads e Google no primeiro segundo.</p>
                    </div>
                  </NuxtLink>

                  <NuxtLink
                    to="/solucoes/follow-up-de-leads"
                    @click="isSolutionsOpen = false"
                    class="group/item flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/70 transition-all"
                  >
                    <div class="p-2 rounded-lg bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 group-hover/item:scale-110 transition-transform flex-shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </div>
                    <div>
                      <h4 class="text-sm font-semibold text-slate-800 dark:text-white group-hover/item:text-primary transition-colors">Follow-up Automático</h4>
                      <p class="text-xs text-slate-500 dark:text-slate-400 leading-snug mt-0.5">Reengajamento de contatos frios e recuperação de propostas.</p>
                    </div>
                  </NuxtLink>

                  <NuxtLink
                    to="/solucoes/concorrencia-com-ia"
                    @click="isSolutionsOpen = false"
                    class="group/item flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/70 transition-all"
                  >
                    <div class="p-2 rounded-lg bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 group-hover/item:scale-110 transition-transform flex-shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <div>
                      <h4 class="text-sm font-semibold text-slate-800 dark:text-white group-hover/item:text-primary transition-colors">Modernização com IA</h4>
                      <p class="text-xs text-slate-500 dark:text-slate-400 leading-snug mt-0.5">Treinamento com PDFs, catálogos e processos da empresa.</p>
                    </div>
                  </NuxtLink>
                </div>

                <!-- Coluna 2: Atendimento & Operação -->
                <div class="col-span-4 space-y-3">
                  <div class="flex items-center gap-2 pb-2 border-b border-slate-100 dark:border-slate-800">
                    <span class="p-1 rounded-md bg-blue-100 dark:bg-blue-950/60 text-secondary dark:text-blue-400">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </span>
                    <h3 class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Atendimento & Operação</h3>
                  </div>

                  <NuxtLink
                    to="/solucoes/demora-no-atendimento"
                    @click="isSolutionsOpen = false"
                    class="group/item flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/70 transition-all"
                  >
                    <div class="p-2 rounded-lg bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 group-hover/item:scale-110 transition-transform flex-shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 class="text-sm font-semibold text-slate-800 dark:text-white group-hover/item:text-primary transition-colors">Resposta Rápida (&lt;3s)</h4>
                      <p class="text-xs text-slate-500 dark:text-slate-400 leading-snug mt-0.5">Sem filas. Atendimento instantâneo com linguagem natural.</p>
                    </div>
                  </NuxtLink>

                  <NuxtLink
                    to="/solucoes/atendimento-fora-do-horario"
                    @click="isSolutionsOpen = false"
                    class="group/item flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/70 transition-all"
                  >
                    <div class="p-2 rounded-lg bg-sky-50 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400 group-hover/item:scale-110 transition-transform flex-shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                      </svg>
                    </div>
                    <div>
                      <h4 class="text-sm font-semibold text-slate-800 dark:text-white group-hover/item:text-primary transition-colors">Atendimento 24/7</h4>
                      <p class="text-xs text-slate-500 dark:text-slate-400 leading-snug mt-0.5">Venda e tire dúvidas nas noites, fins de semana e feriados.</p>
                    </div>
                  </NuxtLink>

                  <NuxtLink
                    to="/solucoes/atendimento-marketplaces"
                    @click="isSolutionsOpen = false"
                    class="group/item flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/70 transition-all"
                  >
                    <div class="p-2 rounded-lg bg-yellow-50 dark:bg-yellow-950/40 text-yellow-600 dark:text-yellow-400 group-hover/item:scale-110 transition-transform flex-shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                    </div>
                    <div>
                      <h4 class="text-sm font-semibold text-slate-800 dark:text-white group-hover/item:text-primary transition-colors">Atendimento Marketplaces</h4>
                      <p class="text-xs text-slate-500 dark:text-slate-400 leading-snug mt-0.5">Mercado Livre, Shopee e lojas virtuais automatizadas.</p>
                    </div>
                  </NuxtLink>

                  <NuxtLink
                    to="/solucoes/canais-descentralizados"
                    @click="isSolutionsOpen = false"
                    class="group/item flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/70 transition-all"
                  >
                    <div class="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 group-hover/item:scale-110 transition-transform flex-shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <div>
                      <h4 class="text-sm font-semibold text-slate-800 dark:text-white group-hover/item:text-primary transition-colors">Centralização Multicanal</h4>
                      <p class="text-xs text-slate-500 dark:text-slate-400 leading-snug mt-0.5">WhatsApp, Instagram Direct e WebChat em uma só tela.</p>
                    </div>
                  </NuxtLink>
                </div>

                <!-- Coluna 3: Inteligência & Gestão (Card Hero à Direita) -->
                <div class="col-span-4 flex flex-col justify-between space-y-3">
                  <div class="space-y-3">
                    <div class="flex items-center gap-2 pb-2 border-b border-slate-100 dark:border-slate-800">
                      <span class="p-1 rounded-md bg-teal-100 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </span>
                      <h3 class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Gestão & Conectividade</h3>
                    </div>

                    <NuxtLink
                      to="/solucoes/perguntas-repetitivas"
                      @click="isSolutionsOpen = false"
                      class="group/item flex items-start gap-3 p-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/70 transition-all"
                    >
                      <div class="p-1.5 rounded-lg bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 flex-shrink-0 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <div>
                        <h4 class="text-xs font-semibold text-slate-800 dark:text-white group-hover/item:text-primary transition-colors">FAQ & Base de IA</h4>
                        <p class="text-[11px] text-slate-500 dark:text-slate-400 leading-tight mt-0.5">Respostas precisas do seu conhecimento corporativo.</p>
                      </div>
                    </NuxtLink>

                    <NuxtLink
                      to="/solucoes/falta-de-controle"
                      @click="isSolutionsOpen = false"
                      class="group/item flex items-start gap-3 p-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/70 transition-all"
                    >
                      <div class="p-1.5 rounded-lg bg-cyan-50 dark:bg-cyan-950/40 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 class="text-xs font-semibold text-slate-800 dark:text-white group-hover/item:text-primary transition-colors">Gestão e Métricas</h4>
                        <p class="text-[11px] text-slate-500 dark:text-slate-400 leading-tight mt-0.5">Dashboards de conversão, tempo de resposta e leads.</p>
                      </div>
                    </NuxtLink>

                    <NuxtLink
                      to="/solucoes/integracoes-e-automacoes"
                      @click="isSolutionsOpen = false"
                      class="group/item flex items-start gap-3 p-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/70 transition-all"
                    >
                      <div class="p-1.5 rounded-lg bg-pink-50 dark:bg-pink-950/40 text-pink-600 dark:text-pink-400 flex-shrink-0 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      <div>
                        <h4 class="text-xs font-semibold text-slate-800 dark:text-white group-hover/item:text-primary transition-colors">Integrações e API</h4>
                        <p class="text-[11px] text-slate-500 dark:text-slate-400 leading-tight mt-0.5">Webhooks, CRMs, ERPs, Hotmart e ferramentas externas.</p>
                      </div>
                    </NuxtLink>
                  </div>

                  <!-- Card Destaque Hero (Estilo Freshworks) -->
                  <div class="rounded-xl bg-gradient-to-br from-secondary via-slate-900 to-secondary dark:from-slate-800 dark:via-slate-900 dark:to-slate-950 p-4 text-white shadow-md relative overflow-hidden border border-slate-700/50">
                    <div class="flex items-center justify-between mb-2">
                      <span class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary/30 text-orange-200 border border-primary/40">
                        ⚡ Destaque Promp
                      </span>
                      <div class="flex -space-x-1.5 overflow-hidden">
                        <span class="w-5 h-5 rounded-full bg-emerald-500/80 flex items-center justify-center text-[10px] text-white font-bold">W</span>
                        <span class="w-5 h-5 rounded-full bg-pink-500/80 flex items-center justify-center text-[10px] text-white font-bold">I</span>
                        <span class="w-5 h-5 rounded-full bg-blue-500/80 flex items-center justify-center text-[10px] text-white font-bold">M</span>
                      </div>
                    </div>
                    <h4 class="text-sm font-bold text-white mb-1">Pronto para acelerar?</h4>
                    <p class="text-xs text-slate-300 mb-3 leading-snug">Comece o teste grátis em menos de 2 minutos sem cartão.</p>
                    <a
                      href="https://app.promp.com.br/signup"
                      target="_blank"
                      class="inline-flex items-center justify-center w-full py-2 px-3 rounded-lg bg-primary hover:bg-red-600 text-white font-bold text-xs shadow-md transition-colors"
                    >
                      Experimente Grátis ➔
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a href="#ia" class="text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-primary transition-colors whitespace-nowrap">
          {{ $t('header.ai') }}
        </a>
        <a href="#informacoes" class="text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-primary transition-colors whitespace-nowrap">
          {{ $t('header.info') }}
        </a>
        <a href="#funcionalidades" class="text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-primary transition-colors whitespace-nowrap">
          {{ $t('header.features') }}
        </a>
        <a href="#depoimentos" class="text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-primary transition-colors whitespace-nowrap">
          Depoimentos
        </a>
        <a href="#precos" class="text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-primary transition-colors whitespace-nowrap">
          {{ $t('header.pricing') }}
        </a>
        <a href="#faq" class="text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-primary transition-colors whitespace-nowrap">
          {{ $t('header.faq') }}
        </a>
      </nav>

      <!-- Right Side: Switchers & Actions -->
      <div class="flex-1 hidden lg:flex items-center justify-end gap-6 text-sm">
        <div class="flex items-center gap-4 border-r border-slate-200 dark:border-slate-800 pr-6 mr-2">
          <LanguageSwitcher />

          <button @click="toggleTheme"
            class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Alternar Tema">
            <svg v-if="colorMode.value === 'dark'" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500"
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-slate-700 dark:text-slate-200"
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </button>
        </div>

        <div class="flex items-center gap-4">
          <a href="https://app.promp.com.br/signup"
            class="font-bold text-slate-700 dark:text-white hover:text-primary transition-colors">
            {{ $t('header.register') }}
          </a>
          <a href="https://app.promp.com.br/login"
            class="px-5 py-2.5 rounded-xl bg-primary hover:bg-red-600 text-white transition-all font-bold shadow-lg shadow-primary/20">
            {{ $t('header.login') }}
          </a>
        </div>
      </div>

      <!-- Mobile Menu Button -->
      <div class="lg:hidden flex items-center gap-3">
        <LanguageSwitcher />
        <button @click="toggleTheme"
          class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
          aria-label="Alternar Tema">
          <svg v-if="colorMode.value === 'dark'" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500"
            fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-slate-700 dark:text-slate-200" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        </button>
        <button
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="p-2 rounded-lg text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
          aria-label="Menu Principal"
        >
          <svg v-if="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Drawer Menu -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-if="isMobileMenuOpen"
        class="lg:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto"
      >
        <div class="space-y-2">
          <!-- Accordion Soluções -->
          <div class="border-b border-slate-100 dark:border-slate-800 pb-2">
            <button
              @click="isMobileSolutionsOpen = !isMobileSolutionsOpen"
              class="w-full flex items-center justify-between py-2.5 font-bold text-slate-900 dark:text-white"
            >
              <span>Soluções</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4 transition-transform duration-200"
                :class="{ 'rotate-180 text-primary': isMobileSolutionsOpen }"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div v-show="isMobileSolutionsOpen" class="space-y-1.5 pl-2 pt-1 pb-2">
              <NuxtLink
                v-for="sol in mobileSolutions"
                :key="sol.title"
                :to="sol.link"
                @click="isMobileMenuOpen = false"
                class="flex items-center gap-2.5 py-2 px-2.5 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                <span class="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                <span>{{ sol.title }}</span>
              </NuxtLink>
            </div>
          </div>

          <a href="#ia" @click="isMobileMenuOpen = false" class="block py-2.5 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-primary">
            {{ $t('header.ai') }}
          </a>
          <a href="#informacoes" @click="isMobileMenuOpen = false" class="block py-2.5 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-primary">
            {{ $t('header.info') }}
          </a>
          <a href="#funcionalidades" @click="isMobileMenuOpen = false" class="block py-2.5 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-primary">
            {{ $t('header.features') }}
          </a>
          <a href="#depoimentos" @click="isMobileMenuOpen = false" class="block py-2.5 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-primary">
            Depoimentos
          </a>
          <a href="#precos" @click="isMobileMenuOpen = false" class="block py-2.5 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-primary">
            {{ $t('header.pricing') }}
          </a>
          <a href="#faq" @click="isMobileMenuOpen = false" class="block py-2.5 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-primary">
            {{ $t('header.faq') }}
          </a>

          <div class="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2.5">
            <a href="https://app.promp.com.br/signup"
              class="w-full text-center py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 font-bold text-slate-700 dark:text-white">
              {{ $t('header.register') }}
            </a>
            <a href="https://app.promp.com.br/login"
              class="w-full text-center py-2.5 rounded-xl bg-primary hover:bg-red-600 text-white font-bold shadow-lg shadow-primary/20">
              {{ $t('header.login') }}
            </a>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const colorMode = useColorMode();
const isSolutionsOpen = ref(false);
const isMobileMenuOpen = ref(false);
const isMobileSolutionsOpen = ref(true);

const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
};

const mobileSolutions = [
  { title: 'Atendimento Marketplaces', link: '/solucoes/atendimento-marketplaces' },
  { title: 'Resposta Rápida (<3s)', link: '/solucoes/demora-no-atendimento' },
  { title: 'Modernização com IA', link: '/solucoes/concorrencia-com-ia' },
  { title: 'Conversão de Anúncios', link: '/solucoes/leads-que-nao-convertem' },
  { title: 'Follow-up Automático', link: '/solucoes/follow-up-de-leads' },
  { title: 'Atendimento 24/7', link: '/solucoes/atendimento-fora-do-horario' },
  { title: 'FAQ & Base de IA', link: '/solucoes/perguntas-repetitivas' },
  { title: 'Centralização Multicanal', link: '/solucoes/canais-descentralizados' },
  { title: 'Gestão e Métricas', link: '/solucoes/falta-de-controle' },
  { title: 'Escalar Vendas WhatsApp', link: '/solucoes/escalar-vendas-whatsapp' },
  { title: 'Integrações e API', link: '/solucoes/integracoes-e-automacoes' }
];
</script>
