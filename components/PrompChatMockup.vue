<template>
  <div class="relative w-full max-w-full group perspective-1000 overflow-visible">
    <!-- Floating Channel Icons -->

    <!-- WhatsApp (Top Left) -->
    <div class="hidden md:block absolute -top-6 left-0 md:-top-12 md:-left-12 z-30 animate-float-slow">
      <div
        class="w-10 h-10 md:w-16 md:h-16 bg-[#25D366] rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/30 transform -rotate-12 hover:rotate-0 transition-transform duration-300 border-2 border-white dark:border-slate-800 p-2 md:p-3">
        <img src="/images/integrations/whatsapp.svg" class="w-full h-full object-contain" alt="WhatsApp" />
      </div>
    </div>

    <!-- Instagram (Top Right -> Repositioned higher) -->
    <div class="hidden md:block absolute -top-10 right-0 md:-top-16 md:-right-10 z-30 animate-float-medium delay-700">
      <div
        class="w-10 h-10 md:w-16 md:h-16 bg-gradient-to-tr from-[#FFD600] via-[#FF0100] to-[#D800B9] rounded-2xl flex items-center justify-center shadow-lg shadow-pink-500/30 transform rotate-12 hover:rotate-0 transition-transform duration-300 border-2 border-white dark:border-slate-800">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 md:w-9 md:h-9 text-white" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      </div>
    </div>

    <!-- Shopee (Bottom Right) -->
    <div class="hidden md:block absolute -bottom-4 right-0 md:-bottom-8 md:-right-12 z-30 animate-float-fast delay-1000">
      <div
        class="w-10 h-10 md:w-16 md:h-16 bg-[#EE4D2D] rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/30 transform -rotate-6 hover:rotate-0 transition-transform duration-300 border-2 border-white dark:border-slate-800 p-2 md:p-3">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full text-white fill-current" viewBox="0 0 24 24">
          <path d="M19.34 7.23H16.2a4.2 4.2 0 0 0-8.4 0H4.66A2.66 2.66 0 0 0 2 9.89l1.16 11.23A2.66 2.66 0 0 0 5.8 23.5h12.4a2.66 2.66 0 0 0 2.64-2.38l1.16-11.23a2.66 2.66 0 0 0-2.66-2.66zm-7.34-3.2a2.2 2.2 0 0 1 2.2 2.2H9.8a2.2 2.2 0 0 1 2.2-2.2zm1.6 12.37c-.33 1.83-1.6 2.6-3.4 2.6-1.5 0-2.9-.6-3.8-1.5l1.1-1.3c.7.7 1.6 1.1 2.6 1.1 1 0 1.7-.4 1.8-1.2.2-1-.6-1.6-2.1-2.1-2.2-.7-3.3-1.7-3-3.4.3-1.7 1.8-2.6 3.4-2.6 1.4 0 2.5.5 3.3 1.2l-1.1 1.3c-.6-.5-1.4-.8-2.2-.8-.9 0-1.5.4-1.6 1.1-.2.9.5 1.4 2 1.9 2.4.7 3.3 1.8 3 3.7z"/>
        </svg>
      </div>
    </div>

    <!-- Gmail (Bottom Left) -->
    <div class="hidden md:block absolute bottom-20 left-0 md:bottom-24 md:-left-12 z-20 animate-float-slow delay-500">
      <div
        class="w-10 h-10 md:w-16 md:h-16 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center shadow-lg shadow-slate-400/20 dark:shadow-slate-900/40 transform rotate-12 hover:rotate-0 transition-transform duration-300 border-2 border-white dark:border-slate-800 p-2 md:p-3.5">
        <img src="/images/integrations/gmail.svg" class="w-full h-full object-contain" alt="Gmail" />
      </div>
    </div>

    <!-- Mercado Livre (Right Middle) -->
    <div class="hidden md:block absolute top-[65%] right-0 md:-right-10 z-30 animate-float-medium delay-200">
      <div
        class="w-10 h-10 md:w-16 md:h-16 bg-[#FFE600] rounded-2xl flex items-center justify-center shadow-lg shadow-yellow-500/30 transform rotate-6 hover:rotate-0 transition-transform duration-300 border-2 border-white dark:border-slate-800 p-2 md:p-3">
        <img src="/images/integrations/mercadolivre.svg" class="w-full h-full object-contain" alt="Mercado Livre" />
      </div>
    </div>

    <!-- TikTok (Left Middle) -->
    <div class="hidden md:block absolute top-[45%] left-0 md:-left-10 z-30 animate-float-fast delay-300">
      <div
        class="w-8 h-8 md:w-14 md:h-14 bg-black rounded-2xl flex items-center justify-center shadow-lg shadow-slate-900/30 transform -rotate-12 hover:rotate-0 transition-transform duration-300 border-2 border-white dark:border-slate-800 p-1.5 md:p-2.5">
        <img src="/images/integrations/tiktok.svg" class="w-full h-full object-contain" alt="TikTok" />
      </div>
    </div>

    <!-- Main System Window -->
    <div
      class="relative z-10 flex flex-col h-[500px] sm:h-[540px] md:h-[620px] w-full max-w-full bg-[#f8fafc] dark:bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 text-left font-sans"
      :class="{ 'h-full !rounded-none !border-0 !shadow-none': embedded }">

      <!-- Top Header / Navigation Bar -->
      <div
        class="h-11 sm:h-14 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800 flex items-center justify-between px-2.5 sm:px-5 shrink-0 z-30 select-none">
        
        <!-- Left: Logo & Sidebar Toggle (Mobile / Desktop) -->
        <div class="flex items-center gap-2 sm:gap-3">
          <div class="flex items-center gap-1 cursor-pointer">
            <span class="text-base sm:text-xl font-bold text-slate-800 dark:text-white tracking-tight" style="font-family: 'Comfortaa', cursive, sans-serif;">promp<span
                class="bg-[#ff5722] text-white px-1 sm:px-1.5 py-0.5 rounded-md sm:rounded-lg text-[8px] sm:text-[10px] font-black ml-0.5 sm:ml-1 uppercase tracking-wider font-sans">IA</span></span>
          </div>

          <button @click="sidebarCollapsed = !sidebarCollapsed"
            class="hidden md:flex p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ml-1"
            title="Recolher Menu">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h10M4 18h16" />
            </svg>
          </button>
        </div>

        <!-- Center: Search Input Bar -->
        <div class="hidden md:flex flex-1 max-w-xs md:max-w-md mx-2 md:mx-6">
          <div class="relative flex items-center w-full">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input type="text" placeholder="Buscar..." readonly
              class="w-full pl-9 pr-10 py-1.5 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 rounded-xl text-xs text-slate-700 dark:text-slate-200 placeholder-slate-400 focus:outline-none cursor-default" />
            <div class="absolute right-2.5 px-1.5 py-0.5 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded text-[9px] font-semibold text-slate-400 shadow-2xs">
              ⌘K
            </div>
          </div>
        </div>

        <!-- Right: Actions & User Profile -->
        <div class="flex items-center gap-1.5 sm:gap-3">
          <!-- Connection Status & Language -->
          <div class="flex items-center gap-1.5 sm:gap-2 pr-1.5 sm:pr-2 border-r border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-600 dark:text-slate-300">
            <div class="flex items-center gap-1">
              <span class="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span class="text-amber-500 text-xs sm:text-sm">⚡</span>
            </div>
            <div class="flex items-center gap-1 px-1.5 py-0.5 rounded hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer">
              <span class="text-xs sm:text-sm">🇧🇷</span>
              <span class="text-[9px] sm:text-[11px] font-bold">PT</span>
            </div>
          </div>

          <!-- Quick Action Icons -->
          <div class="hidden sm:flex items-center gap-1 text-slate-500 dark:text-slate-400">
            <div class="relative p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span class="absolute top-0.5 right-0.5 w-3.5 h-3.5 bg-red-500 text-white text-[8px] font-bold rounded-full flex items-center justify-center">1</span>
            </div>
          </div>

          <!-- User Profile Avatar -->
          <div class="flex items-center gap-2 pl-0.5 sm:pl-1">
            <div class="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0052cc] text-white flex items-center justify-center font-bold text-[10px] sm:text-xs shadow-sm">
              GA
              <span class="absolute bottom-0 right-0 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-emerald-500 border-2 border-white dark:border-slate-900 rounded-full"></span>
            </div>
          </div>
        </div>
      </div>

      <!-- Main Layout Body (Sidebar + Content) -->
      <div class="flex flex-1 min-w-0 w-full max-w-full overflow-hidden">
        
        <!-- Sidebar Navigation (Full System Sidebar) -->
        <div
          class="bg-white dark:bg-slate-900 border-r border-slate-200/80 dark:border-slate-800 flex flex-col justify-between shrink-0 z-20 transition-all duration-300 overflow-y-auto no-scrollbar"
          :class="sidebarCollapsed ? 'w-10 sm:w-14' : 'w-10 sm:w-44 lg:w-48'">

          <!-- Menu Groups -->
          <div class="p-1 sm:p-2 space-y-1.5 sm:space-y-2.5">
            
            <!-- Group: PRINCIPAL -->
            <div>
              <div v-if="!sidebarCollapsed" class="hidden sm:flex items-center gap-1.5 px-2 py-0.5 text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                <span class="w-1 h-2.5 rounded-full bg-indigo-500"></span>
                <span>Principal</span>
              </div>
              <div class="space-y-0.5 mt-0.5">
                <!-- Home -->
                <button @click="currentTab = 'home'"
                  class="w-full flex items-center justify-center sm:justify-start gap-2 p-1.5 sm:px-2 sm:py-1.5 rounded-xl text-[11px] font-medium transition-all group"
                  :class="currentTab === 'home' ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300 font-bold shadow-xs' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/60'"
                  title="Home">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 sm:w-3.5 sm:h-3.5 shrink-0 text-slate-500 group-hover:text-slate-700 dark:group-hover:text-slate-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span v-if="!sidebarCollapsed" class="hidden sm:inline truncate">Home</span>
                </button>

                <!-- Dashboard (Active) -->
                <button @click="currentTab = 'reports'"
                  class="w-full flex items-center justify-center sm:justify-start gap-2 p-1.5 sm:px-2 sm:py-1.5 rounded-xl text-[11px] font-medium transition-all group"
                  :class="currentTab === 'reports' ? 'bg-[#dcfce7] text-[#0f5132] dark:bg-emerald-900/40 dark:text-emerald-300 font-bold shadow-xs' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/60'"
                  title="Dashboard">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 sm:w-3.5 sm:h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                  <span v-if="!sidebarCollapsed" class="hidden sm:inline truncate">Dashboard</span>
                </button>
              </div>
            </div>

            <!-- Group: ATENDIMENTO -->
            <div>
              <div v-if="!sidebarCollapsed" class="hidden sm:flex items-center justify-between px-2 py-0.5 text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                <div class="flex items-center gap-1.5 min-w-0">
                  <span class="w-1 h-2.5 rounded-full bg-cyan-500 shrink-0"></span>
                  <span class="truncate">Atendimento</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-2.5 h-2.5 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <div class="space-y-0.5 mt-0.5">
                <button @click="currentTab = 'chat'"
                  class="w-full flex items-center justify-center sm:justify-start gap-2 p-1.5 sm:px-2 sm:py-1.5 rounded-xl text-[11px] font-medium transition-all group"
                  :class="currentTab === 'chat' ? 'bg-[#dcfce7] text-[#0f5132] dark:bg-emerald-900/40 dark:text-emerald-300 font-bold shadow-xs' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/60'"
                  title="Conversas">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 sm:w-3.5 sm:h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                  <span v-if="!sidebarCollapsed" class="hidden sm:inline truncate">Conversas</span>
                </button>
              </div>
            </div>

            <!-- Group: GESTÃO COMERCIAL -->
            <div>
              <div v-if="!sidebarCollapsed" class="hidden sm:flex items-center justify-between px-2 py-0.5 text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                <div class="flex items-center gap-1.5 min-w-0">
                  <span class="w-1 h-2.5 rounded-full bg-amber-500 shrink-0"></span>
                  <span class="truncate">Comercial</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-2.5 h-2.5 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <div class="space-y-0.5 mt-0.5">
                <button @click="currentTab = 'contacts'"
                  class="w-full flex items-center justify-center sm:justify-start gap-2 p-1.5 sm:px-2 sm:py-1.5 rounded-xl text-[11px] font-medium transition-all group"
                  :class="currentTab === 'contacts' ? 'bg-[#dcfce7] text-[#0f5132] dark:bg-emerald-900/40 dark:text-emerald-300 font-bold shadow-xs' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/60'"
                  title="CRM & Funil">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 sm:w-3.5 sm:h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                  </svg>
                  <span v-if="!sidebarCollapsed" class="hidden sm:inline truncate">CRM & Funil</span>
                </button>
              </div>
            </div>

            <!-- Other Menu Items for Visual Realism -->
            <div v-if="!sidebarCollapsed" class="hidden sm:block space-y-1.5 pt-1.5 border-t border-slate-100 dark:border-slate-800">
              <div class="flex items-center justify-between px-2 py-0.5 text-[9px] font-bold text-slate-400 uppercase tracking-wider cursor-pointer hover:text-slate-600">
                <div class="flex items-center gap-1.5 min-w-0">
                  <span class="w-1 h-2.5 rounded-full bg-blue-500 shrink-0"></span>
                  <span class="truncate">Marketing</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-2.5 h-2.5 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>

              <div class="flex items-center justify-between px-2 py-0.5 text-[9px] font-bold text-slate-400 uppercase tracking-wider cursor-pointer hover:text-slate-600">
                <div class="flex items-center gap-1.5 min-w-0">
                  <span class="w-1 h-2.5 rounded-full bg-yellow-500 shrink-0"></span>
                  <span class="truncate">Gestão</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-2.5 h-2.5 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>

              <div class="flex items-center justify-between px-2 py-0.5 text-[9px] font-bold text-slate-400 uppercase tracking-wider cursor-pointer hover:text-slate-600">
                <div class="flex items-center gap-1.5 min-w-0">
                  <span class="w-1 h-2.5 rounded-full bg-rose-500 shrink-0"></span>
                  <span class="truncate">Administração</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-2.5 h-2.5 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>

              <div class="flex items-center justify-between px-2 py-0.5 text-[9px] font-bold text-slate-400 uppercase tracking-wider cursor-pointer hover:text-slate-600">
                <div class="flex items-center gap-1.5 min-w-0">
                  <span class="w-1 h-2.5 rounded-full bg-sky-500 shrink-0"></span>
                  <span class="truncate">Automação</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-2.5 h-2.5 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

          </div>

          <!-- Sidebar Footer (App info, dark mode, user) -->
          <div class="p-1.5 sm:p-2 border-t border-slate-100 dark:border-slate-800 space-y-1">
            <div class="flex items-center gap-2 px-1.5 py-1">
              <div class="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-center font-bold text-[9px] shrink-0">
                GA
              </div>
              <div v-if="!sidebarCollapsed" class="hidden sm:block min-w-0">
                <p class="text-[11px] font-semibold text-slate-800 dark:text-white truncate">Gabriel A.</p>
                <p class="text-[9px] text-slate-400 leading-none">Admin</p>
              </div>
            </div>
          </div>
        </div>

        <!-- TAB: DASHBOARD (Principal foco da reestruturação) -->
        <div v-if="currentTab === 'reports'" class="flex-1 min-w-0 w-full max-w-full flex flex-col bg-[#f8fafc] dark:bg-slate-900 overflow-y-auto overflow-x-hidden no-scrollbar">
          
          <!-- Dashboard Control Header -->
          <div class="bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800 p-2.5 sm:p-4 md:p-5 pb-2.5 w-full max-w-full min-w-0 shrink-0">
            
            <!-- Row 1: Greeting & Controls -->
            <div class="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-2.5 sm:gap-3 w-full min-w-0">
              
              <!-- Left: Greeting & Subtitle -->
              <div class="min-w-0">
                <div class="flex items-center gap-1.5 flex-wrap">
                  <h1 class="text-xs sm:text-base lg:text-lg font-bold text-slate-900 dark:text-white tracking-tight truncate">
                    Olá, Gabriel Albuquerque!
                  </h1>
                  <span class="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full border border-slate-300 text-slate-400 flex items-center justify-center text-[8px] sm:text-[9px] cursor-pointer" title="Ajuda">?</span>
                </div>
                <p class="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 font-medium">Painel de Controle</p>
              </div>

              <!-- Right: Quick Filters & Actions -->
              <div class="flex items-center gap-1 sm:gap-2 overflow-x-auto no-scrollbar py-0.5 w-full xl:w-auto">
                <!-- Quick Date Pills -->
                <div class="flex items-center bg-slate-100 dark:bg-slate-800 p-0.5 rounded-lg text-[9px] sm:text-[11px] font-medium shrink-0">
                  <button class="px-1.5 sm:px-2 py-0.5 rounded text-slate-600 dark:text-slate-400 hover:text-slate-900">Hoje</button>
                  <button class="px-1.5 sm:px-2 py-0.5 rounded text-slate-600 dark:text-slate-400 hover:text-slate-900">7d</button>
                  <button class="px-1.5 sm:px-2 py-0.5 rounded bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-2xs font-bold">30d</button>
                  <button class="hidden sm:inline px-2 py-0.5 rounded text-slate-600 dark:text-slate-400 hover:text-slate-900">90 dias</button>
                </div>

                <!-- Toggle Switch & Actions -->
                <div class="flex items-center gap-1 bg-slate-50 dark:bg-slate-800/60 px-1.5 sm:px-2 py-0.5 rounded-lg border border-slate-200/80 dark:border-slate-700 text-[9px] sm:text-[10px] text-slate-600 dark:text-slate-300 shrink-0">
                  <span class="w-4 h-2.5 sm:w-5 sm:h-3 bg-slate-300 dark:bg-slate-600 rounded-full flex items-center p-0.5 cursor-pointer">
                    <span class="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full shadow-sm"></span>
                  </span>
                  <span class="font-medium">Conversas</span>
                </div>

                <button class="p-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-500 hover:text-slate-800 transition-colors shrink-0" title="Atualizar">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </button>

                <button class="flex items-center gap-1 px-1.5 sm:px-2 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-[9px] sm:text-[11px] font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 transition-colors shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                  <span>Personalizar</span>
                </button>
              </div>

            </div>

            <!-- Row 2: Exact Date Pickers & Generate Button -->
            <div class="mt-2 pt-1.5 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between sm:justify-end gap-1.5 text-[9px] sm:text-[11px] overflow-x-auto no-scrollbar">
              <div class="flex items-center gap-1 text-slate-500 shrink-0">
                <span class="text-[9px]">De</span>
                <div class="flex items-center gap-1 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-1.5 py-0.5 rounded-md text-slate-700 dark:text-slate-200">
                  <span>12/08/2026</span>
                </div>
              </div>

              <div class="flex items-center gap-1 text-slate-500 shrink-0">
                <span class="text-[9px]">Até</span>
                <div class="flex items-center gap-1 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-1.5 py-0.5 rounded-md text-slate-700 dark:text-slate-200">
                  <span>13/08/2026</span>
                </div>
              </div>

              <button class="flex items-center gap-1 px-2 py-0.5 bg-[#0052cc] hover:bg-[#0747a6] text-white font-semibold rounded-md shadow-2xs transition-colors shrink-0">
                <span>Gerar</span>
              </button>
            </div>
          </div>

          <!-- Dashboard Main Container -->
          <div class="p-2.5 sm:p-4 md:p-5 space-y-3 sm:space-y-5 min-w-0 w-full max-w-full">

            <!-- Banner: Insights de IA -->
            <div class="bg-white dark:bg-slate-800/90 rounded-xl p-3 sm:p-4 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
              <div class="flex items-center gap-2.5 min-w-0">
                <div class="w-7 h-7 rounded-lg bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div class="min-w-0">
                  <h3 class="text-xs sm:text-sm font-bold text-slate-800 dark:text-white truncate">
                    Insights de IA
                  </h3>
                  <p class="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 italic truncate">
                    Clique em "Analisar" para gerar insights baseados nas métricas atuais.
                  </p>
                </div>
              </div>

              <div class="flex items-center gap-1.5 self-end sm:self-auto shrink-0">
                <button class="flex items-center gap-1 px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-[11px] font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Histórico</span>
                </button>

                <button class="flex items-center gap-1 px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-[11px] font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>Analisar</span>
                </button>
              </div>
            </div>

            <!-- Metric Cards: Row 1 (Volumes & Contacts) -->
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3.5">
              
              <!-- Card 1: Total de Atendimentos -->
              <div class="bg-white dark:bg-slate-800 rounded-xl p-3 sm:p-3.5 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs relative overflow-hidden flex flex-col justify-between">
                <div class="flex items-center justify-between mb-1.5">
                  <div class="flex items-center gap-1 text-[11px] font-medium text-slate-600 dark:text-slate-400 truncate">
                    <span class="truncate">Total Atendimentos</span>
                    <span class="text-[9px] text-slate-400 shrink-0">ⓘ</span>
                  </div>
                  <div class="w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-blue-50 dark:bg-blue-950/40 text-blue-600 flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                </div>
                <div class="space-y-0.5">
                  <div class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">44</div>
                  <div class="flex items-center gap-1 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 flex-wrap">
                    <span>↗ 131.6%</span>
                    <span class="font-normal text-slate-400">vs. ant.</span>
                  </div>
                </div>
                <!-- Subtle bottom line gradient -->
                <div class="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500 opacity-70"></div>
              </div>

              <!-- Card 2: Demanda Ativa -->
              <div class="bg-white dark:bg-slate-800 rounded-xl p-3 sm:p-3.5 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs relative overflow-hidden flex flex-col justify-between">
                <div class="flex items-center justify-between mb-1.5">
                  <div class="flex items-center gap-1 text-[11px] font-medium text-slate-600 dark:text-slate-400 truncate">
                    <span class="truncate">Demanda Ativa</span>
                    <span class="text-[9px] text-slate-400 shrink-0">ⓘ</span>
                  </div>
                  <div class="w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-cyan-50 dark:bg-cyan-950/40 text-cyan-600 flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                </div>
                <div class="space-y-0.5">
                  <div class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">26</div>
                  <div class="flex items-center gap-1 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 flex-wrap">
                    <span>↗ 225%</span>
                    <span class="font-normal text-slate-400">vs. ant.</span>
                  </div>
                </div>
                <div class="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-emerald-400 to-teal-500 opacity-70"></div>
              </div>

              <!-- Card 3: Demanda Receptiva -->
              <div class="bg-white dark:bg-slate-800 rounded-xl p-3 sm:p-3.5 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs relative overflow-hidden flex flex-col justify-between">
                <div class="flex items-center justify-between mb-1.5">
                  <div class="flex items-center gap-1 text-[11px] font-medium text-slate-600 dark:text-slate-400 truncate">
                    <span class="truncate">Demanda Receptiva</span>
                    <span class="text-[9px] text-slate-400 shrink-0">ⓘ</span>
                  </div>
                  <div class="w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
                <div class="space-y-0.5">
                  <div class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">18</div>
                  <div class="flex items-center gap-1 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 flex-wrap">
                    <span>↗ 63.6%</span>
                    <span class="font-normal text-slate-400">vs. ant.</span>
                  </div>
                </div>
                <div class="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-purple-400 via-indigo-500 to-blue-500 opacity-70"></div>
              </div>

              <!-- Card 4: Novos Contatos -->
              <div class="bg-white dark:bg-slate-800 rounded-xl p-3 sm:p-3.5 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs relative overflow-hidden flex flex-col justify-between">
                <div class="flex items-center justify-between mb-1.5">
                  <div class="flex items-center gap-1 text-[11px] font-medium text-slate-600 dark:text-slate-400 truncate">
                    <span class="truncate">Novos Contatos</span>
                    <span class="text-[9px] text-slate-400 shrink-0">ⓘ</span>
                  </div>
                  <div class="w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-amber-50 dark:bg-amber-950/40 text-amber-600 flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
                <div class="space-y-0.5">
                  <div class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">28</div>
                  <div class="flex items-center gap-1 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 flex-wrap">
                    <span>↗ 154.5%</span>
                    <span class="font-normal text-slate-400">vs. ant.</span>
                  </div>
                </div>
                <div class="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-amber-400 to-orange-500 opacity-70"></div>
              </div>

            </div>

            <!-- Metric Cards: Row 2 (Time SLAs: TMA, TME, TPR, TTE) -->
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3.5">
              
              <!-- Card: TMA -->
              <div class="bg-white dark:bg-slate-800 rounded-xl p-3 sm:p-3.5 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs flex flex-col justify-between">
                <div class="flex items-center justify-between mb-1.5">
                  <div class="flex items-center gap-1 text-[11px] font-semibold text-slate-700 dark:text-slate-300">
                    <span>TMA</span>
                    <span class="text-[9px] text-slate-400">ⓘ</span>
                  </div>
                  <div class="w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-blue-50 dark:bg-blue-950/40 text-blue-600 flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <div class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">2min 15s</div>
                  <div class="flex items-center gap-1 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 mt-0.5 flex-wrap">
                    <span>↘ 68.4%</span>
                    <span class="font-normal text-slate-400">vs. ant.</span>
                  </div>
                  <p class="text-[10px] text-slate-400 dark:text-slate-500 mt-1 font-medium truncate">Tempo Médio de Atendimento</p>
                </div>
              </div>

              <!-- Card: TME -->
              <div class="bg-white dark:bg-slate-800 rounded-xl p-3 sm:p-3.5 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs flex flex-col justify-between">
                <div class="flex items-center justify-between mb-1.5">
                  <div class="flex items-center gap-1 text-[11px] font-semibold text-slate-700 dark:text-slate-300">
                    <span>TME</span>
                    <span class="text-[9px] text-slate-400">ⓘ</span>
                  </div>
                  <div class="w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-blue-50 dark:bg-blue-950/40 text-blue-600 flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <div class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">14s</div>
                  <div class="flex items-center gap-1 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 mt-0.5 flex-wrap">
                    <span>↘ 89.2%</span>
                    <span class="font-normal text-slate-400">vs. ant.</span>
                  </div>
                  <p class="text-[10px] text-slate-400 dark:text-slate-500 mt-1 font-medium truncate">Tempo Médio de Espera</p>
                </div>
              </div>

              <!-- Card: TPR -->
              <div class="bg-white dark:bg-slate-800 rounded-xl p-3 sm:p-3.5 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs flex flex-col justify-between">
                <div class="flex items-center justify-between mb-1.5">
                  <div class="flex items-center gap-1 text-[11px] font-semibold text-slate-700 dark:text-slate-300">
                    <span>TPR</span>
                    <span class="text-[9px] text-slate-400">ⓘ</span>
                  </div>
                  <div class="w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-blue-50 dark:bg-blue-950/40 text-blue-600 flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                    </svg>
                  </div>
                </div>
                <div>
                  <div class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">3s</div>
                  <div class="flex items-center gap-1 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 mt-0.5 flex-wrap">
                    <span>↘ 94.5%</span>
                    <span class="font-normal text-slate-400">vs. ant.</span>
                  </div>
                  <p class="text-[10px] text-slate-400 dark:text-slate-500 mt-1 font-medium truncate">Tempo de 1ª Resposta</p>
                </div>
              </div>

              <!-- Card: TTE -->
              <div class="bg-white dark:bg-slate-800 rounded-xl p-3 sm:p-3.5 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs flex flex-col justify-between">
                <div class="flex items-center justify-between mb-1.5">
                  <div class="flex items-center gap-1 text-[11px] font-semibold text-slate-700 dark:text-slate-300">
                    <span>TTE</span>
                    <span class="text-[9px] text-slate-400">ⓘ</span>
                  </div>
                  <div class="w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-blue-50 dark:bg-blue-950/40 text-blue-600 flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <div class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">22s</div>
                  <div class="flex items-center gap-1 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 mt-0.5 flex-wrap">
                    <span>↘ 81.0%</span>
                    <span class="font-normal text-slate-400">vs. ant.</span>
                  </div>
                  <p class="text-[10px] text-slate-400 dark:text-slate-500 mt-1 font-medium truncate">Tempo Total de Espera</p>
                </div>
              </div>

            </div>

            <!-- Circular Charts Row: Por Fila | Por Status | Por Canal (Print 2) -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-3.5">
              
              <!-- Chart: Por Fila (Donut) -->
              <div class="bg-white dark:bg-slate-800 rounded-xl p-3.5 sm:p-4 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs flex flex-col justify-between">
                <h3 class="text-[11px] sm:text-xs font-bold text-slate-800 dark:text-white mb-2">Por Fila</h3>
                <div class="flex items-center justify-center py-1">
                  <div class="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center">
                    <svg viewBox="0 0 36 36" class="w-full h-full transform -rotate-90">
                      <!-- Segment 1: Representantes (Azul) 65% -->
                      <circle cx="18" cy="18" r="14" fill="none" stroke="#2563eb" stroke-width="5"
                        stroke-dasharray="65 100" stroke-dashoffset="0" />
                      <!-- Segment 2: Vendas Brusque SC (Verde) 25% -->
                      <circle cx="18" cy="18" r="14" fill="none" stroke="#10b981" stroke-width="5"
                        stroke-dasharray="25 100" stroke-dashoffset="-65" />
                      <!-- Segment 3: Loja (Laranja) 10% -->
                      <circle cx="18" cy="18" r="14" fill="none" stroke="#f59e0b" stroke-width="5"
                        stroke-dasharray="10 100" stroke-dashoffset="-90" />
                    </svg>
                  </div>
                </div>
                <div class="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-[9px] sm:text-[10px] text-slate-600 dark:text-slate-400 mt-2">
                  <div class="flex items-center gap-1">
                    <span class="w-1.5 h-1.5 rounded-full bg-[#2563eb]"></span>
                    <span>Representantes</span>
                  </div>
                  <div class="flex items-center gap-1">
                    <span class="w-1.5 h-1.5 rounded-full bg-[#10b981]"></span>
                    <span>Vendas Brusque SC</span>
                  </div>
                  <div class="flex items-center gap-1">
                    <span class="w-1.5 h-1.5 rounded-full bg-[#f59e0b]"></span>
                    <span>Loja</span>
                  </div>
                </div>
              </div>

              <!-- Chart: Por Status (Pie) -->
              <div class="bg-white dark:bg-slate-800 rounded-xl p-3.5 sm:p-4 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs flex flex-col justify-between">
                <h3 class="text-[11px] sm:text-xs font-bold text-slate-800 dark:text-white mb-2">Por Status</h3>
                <div class="flex items-center justify-center py-1">
                  <div class="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center">
                    <svg viewBox="0 0 36 36" class="w-full h-full transform -rotate-90">
                      <!-- Segment 1: Encerrado (Azul) 55% -->
                      <circle cx="18" cy="18" r="9" fill="none" stroke="#2563eb" stroke-width="18"
                        stroke-dasharray="55 100" stroke-dashoffset="0" />
                      <!-- Segment 2: Pendente (Verde) 25% -->
                      <circle cx="18" cy="18" r="9" fill="none" stroke="#10b981" stroke-width="18"
                        stroke-dasharray="25 100" stroke-dashoffset="-55" />
                      <!-- Segment 3: Em aberto (Laranja) 20% -->
                      <circle cx="18" cy="18" r="9" fill="none" stroke="#f59e0b" stroke-width="18"
                        stroke-dasharray="20 100" stroke-dashoffset="-80" />
                    </svg>
                  </div>
                </div>
                <div class="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-[9px] sm:text-[10px] text-slate-600 dark:text-slate-400 mt-2">
                  <div class="flex items-center gap-1">
                    <span class="w-1.5 h-1.5 rounded-full bg-[#2563eb]"></span>
                    <span>Encerrado</span>
                  </div>
                  <div class="flex items-center gap-1">
                    <span class="w-1.5 h-1.5 rounded-full bg-[#10b981]"></span>
                    <span>Pendente</span>
                  </div>
                  <div class="flex items-center gap-1">
                    <span class="w-1.5 h-1.5 rounded-full bg-[#f59e0b]"></span>
                    <span>Em aberto</span>
                  </div>
                </div>
              </div>

              <!-- Chart: Por Canal (Donut) -->
              <div class="bg-white dark:bg-slate-800 rounded-xl p-3.5 sm:p-4 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs flex flex-col justify-between">
                <h3 class="text-[11px] sm:text-xs font-bold text-slate-800 dark:text-white mb-2">Por Canal</h3>
                <div class="flex items-center justify-center py-1">
                  <div class="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center">
                    <svg viewBox="0 0 36 36" class="w-full h-full transform -rotate-90">
                      <!-- Segment 1: Uazapi (Azul) 60% -->
                      <circle cx="18" cy="18" r="14" fill="none" stroke="#2563eb" stroke-width="5"
                        stroke-dasharray="60 100" stroke-dashoffset="0" />
                      <!-- Segment 2: Instagram (Verde) 40% -->
                      <circle cx="18" cy="18" r="14" fill="none" stroke="#10b981" stroke-width="5"
                        stroke-dasharray="40 100" stroke-dashoffset="-60" />
                    </svg>
                  </div>
                </div>
                <div class="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[9px] sm:text-[10px] text-slate-600 dark:text-slate-400 mt-2">
                  <div class="flex items-center gap-1">
                    <span class="w-1.5 h-1.5 rounded-full bg-[#2563eb]"></span>
                    <span>Uazapi</span>
                  </div>
                  <div class="flex items-center gap-1">
                    <span class="w-1.5 h-1.5 rounded-full bg-[#10b981]"></span>
                    <span>Instagram</span>
                  </div>
                </div>
              </div>

            </div>

            <!-- Evolução por Período (Line / Area Chart - Print 2) -->
            <div class="bg-white dark:bg-slate-800 rounded-2xl p-3.5 sm:p-5 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs w-full max-w-full overflow-hidden">
              <h3 class="text-xs font-bold text-slate-800 dark:text-white mb-3 sm:mb-4">Evolução por Período</h3>
              
              <div class="relative h-40 sm:h-44 w-full max-w-full overflow-hidden">
                <!-- Y-Axis Lines & Labels -->
                <div class="absolute inset-0 flex flex-col justify-between text-[9px] sm:text-[10px] text-slate-400 pointer-events-none">
                  <div class="flex items-center w-full">
                    <span class="w-5 sm:w-6 text-right pr-1.5 sm:pr-2">28</span>
                    <div class="flex-1 border-b border-dashed border-slate-200 dark:border-slate-700/60"></div>
                  </div>
                  <div class="flex items-center w-full">
                    <span class="w-5 sm:w-6 text-right pr-1.5 sm:pr-2">21</span>
                    <div class="flex-1 border-b border-dashed border-slate-200 dark:border-slate-700/60"></div>
                  </div>
                  <div class="flex items-center w-full">
                    <span class="w-5 sm:w-6 text-right pr-1.5 sm:pr-2">14</span>
                    <div class="flex-1 border-b border-dashed border-slate-200 dark:border-slate-700/60"></div>
                  </div>
                  <div class="flex items-center w-full">
                    <span class="w-5 sm:w-6 text-right pr-1.5 sm:pr-2">7</span>
                    <div class="flex-1 border-b border-dashed border-slate-200 dark:border-slate-700/60"></div>
                  </div>
                  <div class="flex items-center w-full">
                    <span class="w-5 sm:w-6 text-right pr-1.5 sm:pr-2">0</span>
                    <div class="flex-1 border-b border-slate-300 dark:border-slate-700"></div>
                  </div>
                </div>

                <!-- SVG Area & Line Curve -->
                <div class="absolute inset-0 pl-5 sm:pl-6 pb-2 overflow-hidden">
                  <svg viewBox="0 0 100 100" preserveAspectRatio="none" class="w-full h-full">
                    <defs>
                      <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.25" />
                        <stop offset="100%" stop-color="#3b82f6" stop-opacity="0.02" />
                      </linearGradient>
                    </defs>
                    
                    <!-- Shaded Area -->
                    <polygon points="0,32 100,10 100,100 0,100" fill="url(#areaGradient)" />
                    
                    <!-- Growth Line -->
                    <polyline points="0,32 100,10" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round" />
                    
                    <!-- Endpoint Circle -->
                    <circle cx="100" cy="10" r="3" fill="#2563eb" class="animate-pulse" />
                  </svg>

                  <!-- Tooltip over data point -->
                  <div class="absolute top-1 right-2 bg-white dark:bg-slate-700 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl shadow-md border border-slate-100 dark:border-slate-600 text-center">
                    <p class="text-[8px] sm:text-[9px] text-slate-500 dark:text-slate-300">13/08/2026</p>
                    <p class="text-[11px] sm:text-xs font-bold text-slate-800 dark:text-white">25</p>
                  </div>
                </div>
              </div>

              <!-- X-Axis Labels -->
              <div class="flex justify-between pl-5 sm:pl-6 text-[9px] sm:text-[10px] text-slate-400 mt-2">
                <span>12/08/2026</span>
                <span>13/08/2026</span>
              </div>
            </div>

            <!-- Additional Charts Grid: Por Usuário, Por Fila, Por Demanda, Demandas por Fila (Print 3) -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
              
              <!-- Chart: Por Usuário (Barras Coloridas) -->
              <div class="bg-white dark:bg-slate-800 rounded-xl p-3.5 sm:p-4 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs">
                <h3 class="text-[11px] sm:text-xs font-bold text-slate-800 dark:text-white mb-3">Por Usuário</h3>
                
                <div class="relative h-40 flex items-end justify-between gap-1 px-2 pb-2 border-b border-slate-200 dark:border-slate-700 bg-slate-50/40 dark:bg-slate-900/30 rounded-lg p-2.5">
                  <!-- Dashed Grid Lines -->
                  <div class="absolute inset-x-2.5 inset-y-2.5 flex flex-col justify-between pointer-events-none opacity-40">
                    <div class="border-b border-dashed border-slate-300 dark:border-slate-600"></div>
                    <div class="border-b border-dashed border-slate-300 dark:border-slate-600"></div>
                    <div class="border-b border-dashed border-slate-300 dark:border-slate-600"></div>
                    <div class="border-b border-dashed border-slate-300 dark:border-slate-600"></div>
                  </div>

                  <!-- Colorful Bars -->
                  <div class="flex-1 bg-[#2563eb] rounded-t-sm h-[90%] transition-all hover:opacity-80"></div>
                  <div class="flex-1 bg-[#10b981] rounded-t-sm h-[32%] transition-all hover:opacity-80"></div>
                  <div class="flex-1 bg-[#f59e0b] rounded-t-sm h-[32%] transition-all hover:opacity-80"></div>
                  <div class="flex-1 bg-[#e11d48] rounded-t-sm h-[20%] transition-all hover:opacity-80"></div>
                  <div class="flex-1 bg-[#8b5cf6] rounded-t-sm h-[20%] transition-all hover:opacity-80"></div>
                  <div class="flex-1 bg-[#06b6d4] rounded-t-sm h-[20%] transition-all hover:opacity-80"></div>
                  <div class="flex-1 bg-[#eab308] rounded-t-sm h-[14%] transition-all hover:opacity-80"></div>
                  <div class="flex-1 bg-[#dc2626] rounded-t-sm h-[14%] transition-all hover:opacity-80"></div>
                  <div class="flex-1 bg-[#16a34a] rounded-t-sm h-[14%] transition-all hover:opacity-80"></div>
                  <div class="flex-1 bg-[#d946ef] rounded-t-sm h-[8%] transition-all hover:opacity-80"></div>
                  <div class="flex-1 bg-[#3b82f6] rounded-t-sm h-[8%] transition-all hover:opacity-80"></div>
                  <div class="flex-1 bg-[#14b8a6] rounded-t-sm h-[8%] transition-all hover:opacity-80"></div>
                </div>
              </div>

              <!-- Chart: Por Fila (Barras) -->
              <div class="bg-white dark:bg-slate-800 rounded-xl p-3.5 sm:p-4 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs">
                <h3 class="text-[11px] sm:text-xs font-bold text-slate-800 dark:text-white mb-3">Por Fila</h3>
                
                <div class="relative h-40 flex items-end justify-center gap-8 sm:gap-12 pb-2 border-b border-slate-200 dark:border-slate-700 bg-slate-50/40 dark:bg-slate-900/30 rounded-lg p-2.5">
                  <!-- Dashed Grid Lines -->
                  <div class="absolute inset-x-2.5 inset-y-2.5 flex flex-col justify-between pointer-events-none opacity-40">
                    <div class="border-b border-dashed border-slate-300 dark:border-slate-600"></div>
                    <div class="border-b border-dashed border-slate-300 dark:border-slate-600"></div>
                    <div class="border-b border-dashed border-slate-300 dark:border-slate-600"></div>
                    <div class="border-b border-dashed border-slate-300 dark:border-slate-600"></div>
                  </div>

                  <!-- 3 Bars -->
                  <div class="w-10 sm:w-12 bg-[#2563eb] rounded-t-sm h-[80%] transition-all hover:opacity-80"></div>
                  <div class="w-10 sm:w-12 bg-[#10b981] rounded-t-sm h-[48%] transition-all hover:opacity-80"></div>
                  <div class="w-10 sm:w-12 bg-[#f59e0b] rounded-t-sm h-[14%] transition-all hover:opacity-80"></div>
                </div>
              </div>

              <!-- Chart: Por Demanda (Donut) -->
              <div class="bg-white dark:bg-slate-800 rounded-xl p-3.5 sm:p-4 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs flex flex-col justify-between">
                <h3 class="text-[11px] sm:text-xs font-bold text-slate-800 dark:text-white mb-2">Por Demanda</h3>
                
                <div class="flex items-center justify-center py-1">
                  <div class="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center">
                    <svg viewBox="0 0 36 36" class="w-full h-full transform -rotate-90">
                      <!-- Segment 1: Venda Realizada (Azul) 45% -->
                      <circle cx="18" cy="18" r="14" fill="none" stroke="#2563eb" stroke-width="5"
                        stroke-dasharray="45 100" stroke-dashoffset="0" />
                      <!-- Segment 2: Sem resposta (Verde) 30% -->
                      <circle cx="18" cy="18" r="14" fill="none" stroke="#10b981" stroke-width="5"
                        stroke-dasharray="30 100" stroke-dashoffset="-45" />
                      <!-- Segment 3: Resolvido (Laranja) 25% -->
                      <circle cx="18" cy="18" r="14" fill="none" stroke="#f59e0b" stroke-width="5"
                        stroke-dasharray="25 100" stroke-dashoffset="-75" />
                    </svg>
                  </div>
                </div>

                <div class="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-[9px] sm:text-[10px] text-slate-600 dark:text-slate-400 mt-2">
                  <div class="flex items-center gap-1">
                    <span class="w-1.5 h-1.5 rounded-full bg-[#2563eb]"></span>
                    <span>Venda Realizada</span>
                  </div>
                  <div class="flex items-center gap-1">
                    <span class="w-1.5 h-1.5 rounded-full bg-[#10b981]"></span>
                    <span>Sem resposta</span>
                  </div>
                  <div class="flex items-center gap-1">
                    <span class="w-1.5 h-1.5 rounded-full bg-[#f59e0b]"></span>
                    <span>Resolvido</span>
                  </div>
                </div>
              </div>

              <!-- Chart: Demandas por Fila (Matriz / Grid) -->
              <div class="bg-white dark:bg-slate-800 rounded-xl p-3.5 sm:p-4 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs">
                <h3 class="text-[11px] sm:text-xs font-bold text-slate-800 dark:text-white mb-3">Demandas por Fila</h3>
                
                <div class="relative h-40 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50/40 dark:bg-slate-900/30 p-2.5 flex flex-col justify-between">
                  <div class="grid grid-cols-4 gap-2 h-full">
                    <div class="border-r border-dashed border-slate-200 dark:border-slate-700"></div>
                    <div class="border-r border-dashed border-slate-200 dark:border-slate-700"></div>
                    <div class="border-r border-dashed border-slate-200 dark:border-slate-700"></div>
                    <div></div>
                  </div>
                </div>
              </div>

            </div>

            <!-- Tabela: Desempenho por Usuário (Print 4) -->
            <div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-2xs overflow-hidden w-full max-w-full">
              <div class="p-3.5 sm:p-5 border-b border-slate-100 dark:border-slate-800">
                <h3 class="text-xs sm:text-sm font-bold text-slate-800 dark:text-white">Desempenho por Usuário</h3>
              </div>

              <div class="overflow-x-auto no-scrollbar w-full max-w-full">
                <table class="min-w-[680px] w-full text-left text-xs text-slate-600 dark:text-slate-300">
                  <thead class="bg-slate-50/80 dark:bg-slate-900/50 text-[10px] sm:text-[11px] font-semibold text-slate-500 dark:text-slate-400 border-b border-slate-200/80 dark:border-slate-800">
                    <tr>
                      <th class="py-2.5 px-3 sm:px-4">Usuário</th>
                      <th class="py-2.5 px-2.5 text-center">Pendentes ↕</th>
                      <th class="py-2.5 px-2.5 text-center">Atendendo ↕</th>
                      <th class="py-2.5 px-2.5 text-center">Resolvidos ↕</th>
                      <th class="py-2.5 px-2.5 text-center">Total ↕</th>
                      <th class="py-2.5 px-2.5 text-center">Avaliação ↕</th>
                      <th class="py-2.5 px-2.5 text-center">TME ↕</th>
                      <th class="py-2.5 px-2.5 text-center">TMA ↕</th>
                      <th class="py-2.5 px-2.5 text-center">TPR ↕</th>
                      <th class="py-2.5 px-2.5 text-center">TTE ↕</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                    <tr v-for="user in userPerformanceList" :key="user.email" class="hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition-colors">
                      
                      <!-- Usuário Info -->
                      <td class="py-3 px-4">
                        <div class="flex items-center gap-3">
                          <div class="w-7 h-7 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-[10px] flex items-center justify-center shrink-0">
                            {{ user.initials }}
                          </div>
                          <div class="min-w-0">
                            <p class="font-semibold text-slate-800 dark:text-white truncate">{{ user.name }}</p>
                            <p class="text-[10px] text-slate-400 truncate">{{ user.email }}</p>
                          </div>
                        </div>
                      </td>

                      <!-- Badges de Status -->
                      <td class="py-3 px-3 text-center">
                        <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[11px] font-bold bg-[#fef08a] text-[#854d0e]">
                          {{ user.pendentes }}
                        </span>
                      </td>

                      <td class="py-3 px-3 text-center">
                        <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[11px] font-bold bg-[#bfdbfe] text-[#1e40af]">
                          {{ user.atendendo }}
                        </span>
                      </td>

                      <td class="py-3 px-3 text-center">
                        <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[11px] font-bold bg-[#bbf7d0] text-[#166534]">
                          {{ user.resolvidos }}
                        </span>
                      </td>

                      <td class="py-3 px-3 text-center font-bold text-slate-900 dark:text-white">
                        {{ user.total }}
                      </td>

                      <td class="py-3 px-3 text-center">
                        <span class="inline-flex items-center gap-1 text-[11px] text-amber-500 font-medium">
                          ⭐ {{ user.rating }}
                        </span>
                      </td>

                      <td class="py-3 px-3 text-center text-slate-600 dark:text-slate-400 text-[11px]">
                        {{ user.tme }}
                      </td>

                      <td class="py-3 px-3 text-center text-slate-600 dark:text-slate-400 text-[11px]">
                        {{ user.tma }}
                      </td>

                      <td class="py-3 px-3 text-center text-slate-600 dark:text-slate-400 text-[11px]">
                        {{ user.tpr }}
                      </td>

                      <td class="py-3 px-3 text-center text-slate-600 dark:text-slate-400 text-[11px]">
                        {{ user.tte }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>

        </div>

        <!-- TAB: HOME / VISÃO GERAL -->
        <div v-else-if="currentTab === 'home'" class="flex-1 flex flex-col bg-[#f8fafc] dark:bg-slate-900 overflow-y-auto no-scrollbar p-3 sm:p-5 md:p-6 space-y-3 sm:space-y-5 min-w-0 w-full max-w-full">
          
          <!-- Banner de Boas-Vindas Principal -->
          <div class="bg-[#f0f5ff] dark:bg-slate-800/90 rounded-2xl p-3.5 sm:p-6 border border-blue-100/90 dark:border-slate-700/80 shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 min-w-0">
            <div class="flex items-start sm:items-center gap-3 sm:gap-3.5 min-w-0">
              <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#0052cc] text-white flex items-center justify-center font-bold text-xs sm:text-base shrink-0 shadow-xs">
                GA
              </div>
              <div class="min-w-0">
                <h1 class="text-sm sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight truncate">
                  Olá, Gabriel Albuquerque!
                </h1>
                <p class="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5 truncate">
                  Bem-vindo ao painel de controle Promp IA
                </p>
                <div class="flex items-center gap-2 mt-1.5 sm:mt-2">
                  <div class="flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-slate-700 dark:text-slate-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span>Multitex</span>
                  </div>
                  <span class="px-1.5 sm:px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/50 text-[#0052cc] dark:text-blue-300 text-[9px] sm:text-[10px] font-bold">
                    Admin
                  </span>
                </div>
              </div>
            </div>

            <!-- Ícone Decorativo Quadrado 4 módulos -->
            <div class="hidden sm:flex w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-blue-100/70 dark:bg-blue-900/30 text-[#0052cc] dark:text-blue-300 items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </div>
          </div>

          <!-- Linha de 3 Cards Principais de Navegação -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-4 min-w-0">
            
            <!-- Card 1: Atendimento -->
            <div @click="currentTab = 'chat'"
              class="bg-white dark:bg-slate-800 p-3.5 sm:p-5 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-2xs hover:shadow-md hover:border-emerald-200 dark:hover:border-emerald-800 transition-all cursor-pointer flex flex-col items-center text-center group">
              <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#dcfce7] dark:bg-emerald-950/50 text-[#16a34a] dark:text-emerald-400 flex items-center justify-center mb-2 sm:mb-3 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 class="font-bold text-slate-800 dark:text-white text-xs sm:text-base mb-0.5">Atendimento</h3>
              <p class="text-[10px] sm:text-xs text-slate-400 dark:text-slate-500">Gerencie seus atendimentos e conversas</p>
            </div>

            <!-- Card 2: Dashboard -->
            <div @click="currentTab = 'reports'"
              class="bg-white dark:bg-slate-800 p-3.5 sm:p-5 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-2xs hover:shadow-md hover:border-blue-200 dark:hover:border-blue-800 transition-all cursor-pointer flex flex-col items-center text-center group">
              <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#dbeafe] dark:bg-blue-950/50 text-[#2563eb] dark:text-blue-400 flex items-center justify-center mb-2 sm:mb-3 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 class="font-bold text-slate-800 dark:text-white text-xs sm:text-base mb-0.5">Dashboard</h3>
              <p class="text-[10px] sm:text-xs text-slate-400 dark:text-slate-500">Visualize métricas e estatísticas em tempo real</p>
            </div>

            <!-- Card 3: Configurações -->
            <div
              class="bg-white dark:bg-slate-800 p-3.5 sm:p-5 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-2xs hover:shadow-md hover:border-slate-300 dark:hover:border-slate-600 transition-all cursor-pointer flex flex-col items-center text-center group">
              <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center mb-2 sm:mb-3 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 class="font-bold text-slate-800 dark:text-white text-xs sm:text-base mb-0.5">Configurações</h3>
              <p class="text-[10px] sm:text-xs text-slate-400 dark:text-slate-500">Configure o sistema e preferências</p>
            </div>

          </div>

          <!-- Seção: Páginas recentes -->
          <div class="bg-white dark:bg-slate-800 rounded-2xl p-4 sm:p-5 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs">
            <div class="flex items-center gap-2 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-[#0052cc] dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">Páginas recentes</h3>
            </div>

            <div class="flex flex-wrap items-center gap-2">
              <button @click="currentTab = 'reports'"
                class="px-3.5 py-1.5 bg-white dark:bg-slate-700/60 border border-slate-200 dark:border-slate-600 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors shadow-2xs">
                Dashboard
              </button>
              <button @click="currentTab = 'chat'"
                class="px-3.5 py-1.5 bg-white dark:bg-slate-700/60 border border-slate-200 dark:border-slate-600 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors shadow-2xs">
                Atendimento
              </button>
              <button
                class="px-3.5 py-1.5 bg-white dark:bg-slate-700/60 border border-slate-200 dark:border-slate-600 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors shadow-2xs">
                Sessoes
              </button>
              <button
                class="px-3.5 py-1.5 bg-white dark:bg-slate-700/60 border border-slate-200 dark:border-slate-600 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors shadow-2xs">
                Cobrancas
              </button>
              <button
                class="px-3.5 py-1.5 bg-white dark:bg-slate-700/60 border border-slate-200 dark:border-slate-600 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors shadow-2xs">
                Catalogo
              </button>
            </div>
          </div>

          <!-- Grid Inferior (Informações Rápidas | Acesso Rápido) -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            
            <!-- Coluna 1: Informações Rápidas -->
            <div class="bg-white dark:bg-slate-800 rounded-2xl p-4 sm:p-5 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs flex flex-col justify-between">
              <div>
                <div class="flex items-center gap-2 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <h3 class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">Informações Rápidas</h3>
                </div>

                <div class="space-y-3.5 text-xs text-slate-600 dark:text-slate-300">
                  <div class="flex items-start gap-2.5">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-amber-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>Acesse o Dashboard para consultas detalhadas de métricas</span>
                  </div>

                  <div class="flex items-start gap-2.5">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span>Seus dados estão protegidos com criptografia ponta a ponta</span>
                  </div>

                  <div class="flex items-start gap-2.5">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-blue-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <span>Relatórios detalhados disponíveis no menu Relatórios</span>
                  </div>
                </div>
              </div>

              <!-- Item destacado: Integração telefonia -->
              <div class="mt-4 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-700/60 flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span class="font-medium">Integração com telefonia Wavoip disponível</span>
              </div>
            </div>

            <!-- Coluna 2: Acesso Rápido -->
            <div class="bg-white dark:bg-slate-800 rounded-2xl p-4 sm:p-5 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs">
              <div class="flex items-center gap-2 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-[#0052cc] dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                <h3 class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">Acesso Rápido</h3>
              </div>

              <div class="divide-y divide-slate-100 dark:divide-slate-700/60">
                
                <!-- Item: Dashboard -->
                <div @click="currentTab = 'reports'" class="py-2 flex items-center justify-between group cursor-pointer">
                  <div class="flex items-center gap-3">
                    <div class="w-7 h-7 rounded-lg bg-blue-50 dark:bg-blue-950/50 text-blue-600 flex items-center justify-center shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                      </svg>
                    </div>
                    <div>
                      <p class="text-xs font-bold text-slate-800 dark:text-white group-hover:text-[#0052cc] transition-colors">Dashboard</p>
                      <p class="text-[10px] text-slate-400">Métricas e gráficos</p>
                    </div>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 text-slate-300 group-hover:text-slate-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>

                <!-- Item: Chat Privado -->
                <div class="py-2 flex items-center justify-between group cursor-pointer">
                  <div class="flex items-center gap-3">
                    <div class="w-7 h-7 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 flex items-center justify-center shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </div>
                    <div>
                      <p class="text-xs font-bold text-slate-800 dark:text-white group-hover:text-indigo-600 transition-colors">Chat Privado</p>
                      <p class="text-[10px] text-slate-400">Converse com sua equipe</p>
                    </div>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 text-slate-300 group-hover:text-slate-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>

                <!-- Item: Filas -->
                <div class="py-2 flex items-center justify-between group cursor-pointer">
                  <div class="flex items-center gap-3">
                    <div class="w-7 h-7 rounded-lg bg-amber-50 dark:bg-amber-950/50 text-amber-600 flex items-center justify-center shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <div>
                      <p class="text-xs font-bold text-slate-800 dark:text-white group-hover:text-amber-600 transition-colors">Filas</p>
                      <p class="text-[10px] text-slate-400">Gerencie filas de atendimento</p>
                    </div>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 text-slate-300 group-hover:text-slate-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>

                <!-- Item: Usuários -->
                <div class="py-2 flex items-center justify-between group cursor-pointer">
                  <div class="flex items-center gap-3">
                    <div class="w-7 h-7 rounded-lg bg-pink-50 dark:bg-pink-950/50 text-pink-600 flex items-center justify-center shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <div>
                      <p class="text-xs font-bold text-slate-800 dark:text-white group-hover:text-pink-600 transition-colors">Usuários</p>
                      <p class="text-[10px] text-slate-400">Gerenciar usuários do sistema</p>
                    </div>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 text-slate-300 group-hover:text-slate-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>

                <!-- Item: Etiquetas -->
                <div class="py-2 flex items-center justify-between group cursor-pointer">
                  <div class="flex items-center gap-3">
                    <div class="w-7 h-7 rounded-lg bg-cyan-50 dark:bg-cyan-950/50 text-cyan-600 flex items-center justify-center shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                      </svg>
                    </div>
                    <div>
                      <p class="text-xs font-bold text-slate-800 dark:text-white group-hover:text-cyan-600 transition-colors">Etiquetas</p>
                      <p class="text-[10px] text-slate-400">Organize com etiquetas</p>
                    </div>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 text-slate-300 group-hover:text-slate-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>

                <!-- Item: Relatórios -->
                <div @click="currentTab = 'reports'" class="py-2 flex items-center justify-between group cursor-pointer">
                  <div class="flex items-center gap-3">
                    <div class="w-7 h-7 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 flex items-center justify-center shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div>
                      <p class="text-xs font-bold text-slate-800 dark:text-white group-hover:text-emerald-600 transition-colors">Relatórios</p>
                      <p class="text-[10px] text-slate-400">Relatórios e exportações</p>
                    </div>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 text-slate-300 group-hover:text-slate-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>

                <!-- Item: Configurações -->
                <div class="py-2 flex items-center justify-between group cursor-pointer">
                  <div class="flex items-center gap-3">
                    <div class="w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p class="text-xs font-bold text-slate-800 dark:text-white group-hover:text-slate-900 dark:group-hover:text-white transition-colors">Configurações</p>
                      <p class="text-[10px] text-slate-400">Configurações gerais</p>
                    </div>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 text-slate-300 group-hover:text-slate-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>

              </div>
            </div>

          </div>
        </div>

        <!-- TAB: CONTACTS / CRM & FUNIL DE VENDAS -->
        <div v-else-if="currentTab === 'contacts'" class="flex-1 min-w-0 w-full max-w-full flex flex-col bg-[#f8fafc] dark:bg-slate-900 overflow-y-auto overflow-x-hidden no-scrollbar relative">
          
          <!-- Top Header: Título & Subtítulo -->
          <div class="p-2.5 sm:p-5 pb-0 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800 shrink-0 w-full max-w-full min-w-0">
            
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-3 min-w-0">
              <div class="min-w-0">
                <h1 class="text-base sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight truncate">Funil de Vendas</h1>
                <p class="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5 truncate">Gerencie seu pipeline de vendas</p>
              </div>

              <!-- Banner Compacto de Movimentação por IA -->
              <div class="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:py-1.5 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200/80 dark:border-purple-800 text-purple-700 dark:text-purple-300 text-[10px] sm:text-xs font-semibold shadow-2xs self-start sm:self-auto">
                <span class="animate-pulse">✨</span>
                <span>Movimentação automática por IA</span>
              </div>
            </div>

            <!-- Abas Superiores Solicitadas: Vendas | Kanban | Funis | Agenda | Automação | Follow up -->
            <div class="flex items-center gap-1 sm:gap-2 overflow-x-auto no-scrollbar border-b border-slate-100 dark:border-slate-800 text-[11px] sm:text-xs font-bold text-slate-500 w-full max-w-full">
              <button @click="crmSubTab = 'vendas'"
                class="px-2.5 sm:px-3.5 py-2 sm:py-2.5 transition-all whitespace-nowrap shrink-0"
                :class="crmSubTab === 'vendas' ? 'border-b-2 border-[#0052cc] text-[#0052cc] dark:text-blue-400 font-bold' : 'hover:text-slate-800 dark:hover:text-slate-200'">
                Vendas
              </button>
              <button @click="crmSubTab = 'kanban'"
                class="px-2.5 sm:px-3.5 py-2 sm:py-2.5 transition-all whitespace-nowrap shrink-0"
                :class="crmSubTab === 'kanban' ? 'border-b-2 border-[#0052cc] text-[#0052cc] dark:text-blue-400 font-bold' : 'hover:text-slate-800 dark:hover:text-slate-200'">
                Kanban
              </button>
              <button @click="crmSubTab = 'funis'"
                class="px-2.5 sm:px-3.5 py-2 sm:py-2.5 transition-all whitespace-nowrap shrink-0"
                :class="crmSubTab === 'funis' ? 'border-b-2 border-[#0052cc] text-[#0052cc] dark:text-blue-400 font-bold' : 'hover:text-slate-800 dark:hover:text-slate-200'">
                Funis
              </button>
              <button @click="crmSubTab = 'agenda'"
                class="px-2.5 sm:px-3.5 py-2 sm:py-2.5 transition-all whitespace-nowrap shrink-0"
                :class="crmSubTab === 'agenda' ? 'border-b-2 border-[#0052cc] text-[#0052cc] dark:text-blue-400 font-bold' : 'hover:text-slate-800 dark:hover:text-slate-200'">
                Agenda
              </button>
              <button @click="crmSubTab = 'automacao'"
                class="px-2.5 sm:px-3.5 py-2 sm:py-2.5 transition-all whitespace-nowrap shrink-0"
                :class="crmSubTab === 'automacao' ? 'border-b-2 border-[#0052cc] text-[#0052cc] dark:text-blue-400 font-bold' : 'hover:text-slate-800 dark:hover:text-slate-200'">
                Automação
              </button>
              <button @click="crmSubTab = 'followup'"
                class="px-2.5 sm:px-3.5 py-2 sm:py-2.5 transition-all whitespace-nowrap shrink-0"
                :class="crmSubTab === 'followup' ? 'border-b-2 border-[#0052cc] text-[#0052cc] dark:text-blue-400 font-bold' : 'hover:text-slate-800 dark:hover:text-slate-200'">
                Follow up
              </button>
            </div>

          </div>

          <!-- Corpo Principal do CRM -->
          <div class="p-2.5 sm:p-5 space-y-3 sm:space-y-4 min-w-0 w-full max-w-full">

            <!-- Barra de Contadores e Botões de Ação do Kanban (Linha Única Enxuta) -->
            <div class="flex items-center justify-between gap-2.5 bg-white dark:bg-slate-800 p-2 sm:p-2.5 rounded-xl border border-slate-200/80 dark:border-slate-700 shadow-2xs overflow-x-auto no-scrollbar w-full max-w-full">
              
              <!-- Pílulas de Estatísticas em Linha Única -->
              <div class="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold shrink-0 whitespace-nowrap">
                <span class="text-slate-400 text-xs">ⓘ</span>
                <span class="px-1.5 sm:px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                  Oportunidades: <strong class="text-slate-900 dark:text-white">6</strong>
                </span>
                <span class="px-1.5 sm:px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                  Abertas: <strong class="text-slate-900 dark:text-white">6</strong>
                </span>
                <span class="px-1.5 sm:px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                  Em andamento: <strong class="text-slate-900 dark:text-white">6</strong>
                </span>
                <span class="px-2 py-0.5 rounded-lg bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-[#0052cc] dark:text-blue-300 font-bold">
                  Total: R$ 3.298,90
                </span>
              </div>

              <!-- Botões de Ação em Linha Única -->
              <div class="flex items-center gap-1 sm:gap-1.5 shrink-0 whitespace-nowrap">
                <button class="px-1.5 sm:px-2 py-1 rounded-lg border border-slate-200 dark:border-slate-700 text-[10px] sm:text-[11px] font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 flex items-center gap-1">
                  <span>Exportar</span>
                  <span class="text-[8px]">▾</span>
                </button>
                <button class="px-1.5 sm:px-2 py-1 rounded-lg border border-slate-200 dark:border-slate-700 text-[10px] sm:text-[11px] font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 flex items-center gap-1">
                  <span>📥 CSV</span>
                </button>
                <button class="px-1.5 sm:px-2 py-1 rounded-lg border border-slate-200 dark:border-slate-700 text-[10px] sm:text-[11px] font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 flex items-center gap-1">
                  <span>↻</span>
                </button>
                <button class="px-2 sm:px-2.5 py-1 rounded-lg bg-[#0052cc] text-white text-[10px] sm:text-[11px] font-bold shadow-xs hover:bg-blue-700 transition-colors flex items-center gap-1">
                  <span>+</span>
                  <span class="hidden xs:inline">Nova Oportunidade</span>
                </button>
              </div>

            </div>

            <!-- Barra de Busca e Filtros -->
            <div class="flex items-center justify-between gap-2.5 w-full min-w-0">
              <div class="relative flex-1 max-w-md min-w-0">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input type="text" placeholder="Buscar oportunidade..." class="w-full pl-8 sm:pl-9 pr-3 py-1 sm:py-1.5 text-[11px] sm:text-xs bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 rounded-xl text-slate-800 dark:text-slate-200 focus:outline-none focus:border-blue-500 placeholder:text-slate-400 shadow-2xs">
              </div>

              <button class="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 text-[11px] sm:text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 flex items-center gap-1 sm:gap-1.5 shadow-2xs shrink-0">
                <span>Filtros</span>
                <span class="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-blue-100 dark:bg-blue-900/60 text-[#0052cc] dark:text-blue-300 text-[9px] sm:text-[10px] flex items-center justify-center font-bold">1</span>
                <span class="text-[8px] sm:text-[9px]">▾</span>
              </button>
            </div>

            <!-- Quadro Kanban (Colunas & Cards com Scroll Suave) -->
            <div class="overflow-x-auto pb-4 no-scrollbar w-full max-w-full">
              <div class="flex gap-3 sm:gap-4 min-w-max pb-2">
                
                <!-- Loop pelas Colunas do Funil -->
                <div v-for="col in kanbanColumns" :key="col.id" class="w-60 sm:w-72 flex flex-col gap-2.5 sm:gap-3 shrink-0">
                  
                  <!-- Header da Coluna -->
                  <div class="bg-white dark:bg-slate-800 p-2 sm:p-2.5 rounded-xl border border-slate-200/80 dark:border-slate-700/80 shadow-2xs flex items-center justify-between">
                    <div class="flex items-center gap-1.5 min-w-0">
                      <span class="w-2 h-2 rounded-full shrink-0"
                        :class="{
                          'bg-amber-400': col.id === 'prospeccao',
                          'bg-blue-500': col.id === 'qualificacao',
                          'bg-purple-500': col.id === 'demonstracao',
                          'bg-cyan-500': col.id === 'proposta',
                          'bg-emerald-500': col.id === 'fechamento'
                        }">
                      </span>
                      <h3 class="font-bold text-slate-800 dark:text-white text-xs truncate">{{ col.title }}</h3>
                    </div>
                    <div class="flex items-center gap-1.5 shrink-0 text-xs">
                      <span class="font-bold text-emerald-600 dark:text-emerald-400 text-[10px] sm:text-[11px]">{{ col.totalValue }}</span>
                      <span class="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-[9px] sm:text-[10px] flex items-center justify-center font-bold">
                        {{ col.count }}
                      </span>
                    </div>
                  </div>

                  <!-- Container de Cards da Coluna -->
                  <div class="space-y-3 min-h-[380px] p-1 rounded-2xl bg-slate-100/50 dark:bg-slate-800/30 border border-dashed border-slate-200 dark:border-slate-700">
                    
                    <!-- Card de Oportunidade -->
                    <div v-for="opp in kanbanOpportunities.filter(o => o.stage === col.id)" :key="opp.id"
                      class="bg-white dark:bg-slate-800 p-3.5 rounded-2xl border border-slate-200/80 dark:border-slate-700 shadow-2xs hover:shadow-md transition-all cursor-pointer group space-y-2.5">
                      
                      <!-- Topo do Card: Badge de Status e Ações -->
                      <div class="flex items-center justify-between">
                        <span class="px-2 py-0.5 rounded-md bg-[#fef08a] dark:bg-yellow-950/60 text-[#854d0e] dark:text-yellow-300 text-[10px] font-bold uppercase tracking-wider">
                          {{ opp.status }}
                        </span>
                        
                        <div class="flex items-center gap-1.5 text-slate-400 opacity-60 group-hover:opacity-100 transition-opacity text-xs">
                          <button title="Conversa" @click.stop="currentTab = 'chat'; activeChatId = chats.find(c => c.name.includes(opp.name.split(' ')[0]))?.id || 1" class="hover:text-blue-600">💬</button>
                          <button title="Ver Detalhes" class="hover:text-slate-700">👁</button>
                          <button title="Enviar E-mail" class="hover:text-slate-700">✉️</button>
                          <button title="Arquivar" class="hover:text-red-500">🗑️</button>
                        </div>
                      </div>

                      <!-- Título da Oportunidade -->
                      <div>
                        <h4 class="text-xs font-bold text-slate-900 dark:text-white group-hover:text-[#0052cc] transition-colors line-clamp-1">
                          {{ opp.code }} - {{ opp.title }}
                        </h4>
                        <p class="text-sm font-black text-emerald-600 dark:text-emerald-400 mt-0.5">
                          {{ opp.value }}
                        </p>
                      </div>

                      <!-- Badge de Ação/Movimentação Inteligente por IA -->
                      <div v-if="opp.aiBadge" class="p-1.5 rounded-xl bg-purple-50 dark:bg-purple-950/50 border border-purple-100 dark:border-purple-900/60 text-[9px] text-purple-700 dark:text-purple-300 font-semibold flex items-center gap-1">
                        <span>🤖</span>
                        <span class="line-clamp-1">{{ opp.aiBadge }}</span>
                      </div>

                      <!-- Informações do Contato -->
                      <div class="pt-2 border-t border-slate-100 dark:border-slate-700/60 space-y-1.5 text-[10px]">
                        <div class="flex items-center gap-2">
                          <div class="w-6 h-6 rounded-full overflow-hidden shrink-0 border border-slate-200 dark:border-slate-700">
                            <img :src="opp.avatar" class="w-full h-full object-cover">
                          </div>
                          <div class="min-w-0">
                            <p class="font-bold text-slate-800 dark:text-slate-200 truncate">{{ opp.name }}</p>
                            <p class="text-slate-400 truncate">{{ opp.phone }}</p>
                          </div>
                        </div>

                        <!-- Datas de Fechamento e Criação -->
                        <div class="space-y-0.5 text-slate-500 dark:text-slate-400 pt-1 text-[9px]">
                          <div class="flex items-center gap-1">
                            <span>📅</span>
                            <span>Fechamento: <strong>{{ opp.dueDate }}</strong></span>
                          </div>
                          <div class="flex items-center gap-1 text-slate-400">
                            <span>🕒</span>
                            <span>Criado: {{ opp.createdDate }}</span>
                          </div>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>

              </div>
            </div>

          </div>

          <!-- Botão Flutuante de Ação Rápida (+) -->
          <button class="absolute bottom-6 right-6 w-11 h-11 rounded-full bg-[#0052cc] text-white shadow-xl hover:bg-blue-700 hover:scale-105 transition-all flex items-center justify-center text-xl font-bold z-20" title="Criar Nova Oportunidade">
            +
          </button>

        </div>

        <!-- TAB: CHAT / ATENDIMENTOS -->
        <div v-else-if="currentTab === 'chat'" class="flex flex-1 min-w-0 h-full overflow-hidden bg-slate-100 dark:bg-slate-900">
          
          <!-- Coluna 1: Lista de Atendimentos (Esquerda - Proporção Calibrada para Mobile e Desktop) -->
          <div
            class="w-28 xs:w-32 sm:w-56 md:w-64 lg:w-68 max-w-[38%] sm:max-w-none bg-white dark:bg-slate-800 border-r border-slate-200/80 dark:border-slate-700/80 flex flex-col shrink-0 min-w-0 z-10 transition-all duration-300">
            
            <!-- Header dos Atendimentos -->
            <div class="p-1.5 sm:p-3 border-b border-slate-100 dark:border-slate-700/60 space-y-1 sm:space-y-2">
              <div class="flex items-center justify-between gap-1">
                <h2 class="text-[10px] sm:text-sm font-bold text-slate-800 dark:text-white truncate">Atendimentos</h2>
                <div class="flex items-center gap-1 shrink-0">
                  <button class="flex items-center gap-0.5 px-1 sm:px-1.5 py-0.5 rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-700 text-[9px] sm:text-[10px] font-semibold text-slate-700 dark:text-slate-200" title="Filtros">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-2.5 h-2.5 sm:w-3 sm:h-3 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                    </svg>
                    <span class="hidden sm:inline">Filtros</span>
                    <span class="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#0052cc] text-white text-[7px] sm:text-[8px] flex items-center justify-center font-bold">1</span>
                  </button>
                  <button class="hidden sm:block px-1.5 py-0.5 rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-700 text-[10px] font-semibold text-slate-700 dark:text-slate-200">
                    •••
                  </button>
                </div>
              </div>

              <!-- Barra de Busca e Atalhos -->
              <div class="flex items-center gap-1">
                <div class="relative flex-1 min-w-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-2.5 h-2.5 sm:w-3 sm:h-3 absolute left-1.5 sm:left-2 top-1/2 -translate-y-1/2 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input type="text" placeholder="Buscar..." class="w-full pl-5 sm:pl-6 pr-1 py-0.5 sm:py-1 text-[9px] sm:text-[11px] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-800 dark:text-slate-200 focus:outline-none focus:border-blue-500 placeholder:text-[9px]">
                </div>
                <div class="flex items-center gap-0.5 px-1 py-0.5 sm:px-1.5 sm:py-1 rounded-md border border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 text-[8px] sm:text-[9px] font-bold shrink-0">
                  <span>📶</span>
                  <span>5</span>
                </div>
              </div>

              <!-- Abas de Status: Abertos (47) | Pendentes (38) | Fechados -->
              <div class="flex items-center gap-1 text-[9px] sm:text-[10px] pt-0.5 overflow-x-auto no-scrollbar">
                <button class="flex items-center gap-0.5 px-1.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700 font-bold text-slate-800 dark:text-white shrink-0">
                  <span>💬 Abertos</span>
                  <span class="px-1 rounded-full bg-[#0052cc] text-white text-[7px] sm:text-[8px] font-bold">47</span>
                </button>
                <button class="flex items-center gap-0.5 px-1.5 py-0.5 rounded-md text-slate-500 dark:text-slate-400 font-medium hover:bg-slate-50 shrink-0">
                  <span>🕒 38</span>
                </button>
                <button class="hidden sm:block px-1.5 py-0.5 rounded-md text-slate-400 font-medium hover:bg-slate-50 shrink-0">
                  <span>Fechados</span>
                </button>
              </div>
            </div>

            <!-- Lista de Conversas com WhatsApp / Instagram / Mercado Livre -->
            <div class="flex-1 overflow-y-auto no-scrollbar divide-y divide-slate-100 dark:divide-slate-700/60">
              <div v-for="chat in chats" :key="chat.id" @click="activeChatId = chat.id"
                class="p-1.5 sm:p-2.5 cursor-pointer transition-colors relative"
                :class="activeChatId === chat.id ? 'bg-blue-50/80 dark:bg-slate-700/60 border-l-2 sm:border-l-3 border-l-[#0052cc]' : 'hover:bg-slate-50/80 dark:hover:bg-slate-800/50'">
                
                <div class="flex items-start gap-1.5 sm:gap-2">
                  <!-- Avatar com Badge do Canal (WhatsApp / Instagram / Mercado Livre) -->
                  <div class="relative shrink-0">
                    <img :src="chat.avatar" class="w-6 h-6 xs:w-7 xs:h-7 sm:w-9 sm:h-9 rounded-full object-cover border border-slate-200 dark:border-slate-700">
                    
                    <!-- Ponto Online -->
                    <span class="absolute top-0 left-0 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-500 border border-white dark:border-slate-800 rounded-full"></span>

                    <!-- Badge do Canal: WhatsApp -->
                    <span v-if="chat.channel === 'whatsapp'" class="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-xs border border-white dark:border-slate-800" title="WhatsApp">
                      <svg class="w-1.5 h-1.5 sm:w-2 sm:h-2 fill-current" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                      </svg>
                    </span>

                    <!-- Badge do Canal: Instagram -->
                    <span v-else-if="chat.channel === 'instagram'" class="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600 text-white rounded-full flex items-center justify-center shadow-xs border border-white dark:border-slate-800" title="Instagram">
                      <svg class="w-1.5 h-1.5 sm:w-2 sm:h-2 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </span>

                    <!-- Badge do Canal: Mercado Livre -->
                    <span v-else-if="chat.channel === 'mercadolivre'" class="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 bg-[#ffe600] text-[#2d3277] rounded-full flex items-center justify-center shadow-xs border border-white dark:border-slate-800 font-black text-[6px] sm:text-[7px]" title="Mercado Livre">
                      🤝
                    </span>
                  </div>

                  <!-- Conteúdo do Card da Conversa -->
                  <div class="flex-1 min-w-0">
                    <div class="flex items-center justify-between gap-0.5">
                      <h4 class="text-[10px] sm:text-xs font-bold text-slate-800 dark:text-white truncate">{{ chat.name }}</h4>
                      <span class="text-[7px] sm:text-[9px] text-slate-400 shrink-0 font-medium">{{ chat.lastTime }}</span>
                    </div>

                    <p class="text-[8px] sm:text-[10px] text-slate-500 dark:text-slate-400 truncate mt-0.5">
                      {{ chat.preview }}
                    </p>

                    <!-- Setor da Empresa & Badge de IA -->
                    <div class="flex items-center gap-0.5 sm:gap-1 mt-0.5 sm:mt-1 flex-wrap">
                      <span class="px-1 py-0.2 rounded text-[7px] sm:text-[8px] font-bold truncate max-w-[80px] sm:max-w-none"
                        :class="{
                          'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300': chat.queue === 'Vendas',
                          'bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300': chat.queue === 'Suporte Técnico',
                          'bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300': chat.queue === 'Comercial',
                          'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300': chat.queue === 'Financeiro',
                          'bg-cyan-100 text-cyan-800 dark:bg-cyan-950/60 dark:text-cyan-300': chat.queue === 'Pós-Venda',
                          'bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300': chat.queue === 'SAC'
                        }">
                        {{ chat.queue }}
                      </span>
                      <span v-if="chat.isAiActive" class="px-1.5 py-0.5 rounded-md text-[7px] sm:text-[8px] font-extrabold bg-purple-100 text-purple-700 dark:bg-purple-950/70 dark:text-purple-300 border border-purple-200/80 dark:border-purple-800/60 inline-flex items-center gap-1 shadow-2xs" title="Atendimento feito por IA">
                        <span class="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse shrink-0"></span>
                        <span>IA</span>
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

          <!-- Coluna 2: Chat Central (Espaço Amplo com Destaque nas Mensagens) -->
          <div class="flex-1 min-w-0 flex flex-col bg-[#efeae2] dark:bg-[#0b141a] relative transition-all duration-300">
            
            <!-- Header do Chat -->
            <div class="h-11 sm:h-14 bg-white dark:bg-slate-800 border-b border-slate-200/80 dark:border-slate-700/80 flex items-center justify-between px-2 sm:px-4 z-10 shrink-0">
              
              <!-- Info do Contato Atual -->
              <div class="flex items-center gap-1.5 sm:gap-2.5 min-w-0">
                <div class="relative shrink-0">
                  <img :src="activeChat.avatar" class="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover border border-slate-200 dark:border-slate-700">
                  <!-- Canal no header -->
                  <span v-if="activeChat.channel === 'whatsapp'" class="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#25D366] text-white rounded-full flex items-center justify-center text-[5px] sm:text-[6px] border border-white">
                    ✓
                  </span>
                  <span v-else-if="activeChat.channel === 'instagram'" class="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600 text-white rounded-full flex items-center justify-center text-[5px] sm:text-[6px] border border-white">
                    📷
                  </span>
                  <span v-else-if="activeChat.channel === 'mercadolivre'" class="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#ffe600] text-[#2d3277] rounded-full flex items-center justify-center text-[5px] sm:text-[6px] border border-white">
                    🤝
                  </span>
                </div>

                <div class="min-w-0">
                  <div class="flex items-center gap-1 sm:gap-1.5">
                    <h3 class="text-[11px] sm:text-sm font-bold text-slate-900 dark:text-white truncate">
                      {{ activeChat.name }}
                    </h3>
                    <span v-if="activeChat.isAiActive" class="inline-flex px-1.5 py-0.5 rounded-md bg-purple-100 dark:bg-purple-950/70 text-purple-700 dark:text-purple-300 border border-purple-200/80 dark:border-purple-800/60 text-[8px] sm:text-[9px] font-bold items-center gap-1 shrink-0" title="Atendimento realizado por IA">
                      <span class="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse shrink-0"></span>
                      <span>Atendimento IA</span>
                    </span>
                  </div>
                  <div class="flex items-center gap-1 text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400 truncate">
                    <span class="font-medium text-slate-700 dark:text-slate-300">{{ activeChat.queue }}</span>
                    <span>•</span>
                    <span class="truncate">{{ activeChat.phone }}</span>
                  </div>
                </div>
              </div>

              <!-- Barra de Ferramentas / Ações do Topo -->
              <div class="flex items-center gap-1 text-slate-600 dark:text-slate-300 shrink-0">
                <button class="p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-700 text-[10px] sm:text-xs text-emerald-600" title="Resolver Atendimento">✓</button>
                <button class="hidden sm:block p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-700 text-xs" title="Transferir para Operador">⇄</button>
                <button class="p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-700 text-[10px] sm:text-xs" title="Buscar">🔍</button>
                
                <!-- Toggle do Painel de Detalhes -->
                <button @click="showContactDetails = !showContactDetails"
                  class="flex items-center gap-1 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-lg text-[10px] sm:text-xs transition-all border border-slate-200 dark:border-slate-700 shadow-2xs"
                  :class="showContactDetails ? 'bg-[#0052cc] text-white border-[#0052cc] font-bold' : 'bg-white dark:bg-slate-700 hover:bg-slate-50 text-slate-700 dark:text-slate-200'"
                  title="Detalhes do Contato">
                  <span>ⓘ</span>
                  <span class="hidden sm:inline text-[10px]">Detalhes</span>
                </button>
              </div>

            </div>

            <!-- Área de Mensagens do Chat -->
            <div class="flex-1 overflow-y-auto p-2 sm:p-4 space-y-2 sm:space-y-3 z-10 no-scrollbar">
              
              <!-- Pílula de Data -->
              <div class="flex justify-center">
                <span class="px-2 py-0.5 bg-white/80 dark:bg-slate-800/80 rounded-md text-[9px] sm:text-[10px] font-medium text-slate-500 shadow-2xs">
                  Hoje
                </span>
              </div>

              <!-- Lista de Mensagens do Chat Ativo -->
              <div v-for="(msg, index) in activeChat.messages" :key="index" class="flex flex-col gap-1">
                
                <!-- Mensagem do Cliente (Lado Esquerdo - Fundo Branco) -->
                <div v-if="msg.sender === 'client'" class="flex items-end gap-1.5 sm:gap-2 max-w-[92%] sm:max-w-[70%]">
                  <img :src="activeChat.avatar" class="w-5 h-5 sm:w-6 sm:h-6 rounded-full shrink-0 shadow-2xs object-cover">
                  <div class="bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl rounded-bl-xs p-2 sm:p-3 shadow-2xs border border-slate-200/60 dark:border-slate-700/60">
                    <p class="text-[9px] sm:text-[10px] font-bold text-slate-700 dark:text-slate-300 mb-0.5">{{ activeChat.name }}</p>
                    <p class="text-[11px] sm:text-xs text-slate-800 dark:text-slate-200 whitespace-pre-line leading-relaxed font-normal">{{ msg.text }}</p>
                    <div class="flex items-center justify-end gap-1 mt-0.5 text-[8px] sm:text-[9px] text-slate-400">
                      <span>{{ msg.time }}</span>
                    </div>
                  </div>
                </div>

                <!-- Mensagem da IA / Promp (Lado Direito - Fundo Azul Promp #0052cc) -->
                <div v-else class="flex items-end justify-end gap-1.5 sm:gap-2 max-w-[94%] sm:max-w-[75%] ml-auto">
                  <div class="bg-[#0052cc] text-white rounded-xl sm:rounded-2xl rounded-br-xs p-2 sm:p-3 shadow-2xs">
                    <div class="flex items-center gap-1 text-[8px] sm:text-[9px] font-bold text-blue-200 mb-0.5">
                      <span>Promp IA</span>
                      <span class="px-1 py-0.1 bg-white/20 rounded text-[7px] sm:text-[8px]">Resposta Instantânea</span>
                    </div>
                    <p class="text-[11px] sm:text-xs text-white whitespace-pre-line leading-relaxed font-normal">{{ msg.text }}</p>
                    <div class="flex items-center justify-end gap-1 mt-0.5 text-[8px] sm:text-[9px] text-blue-100">
                      <span>{{ msg.time }}</span>
                      <span>•</span>
                      <span>Setor: {{ activeChat.queue }}</span>
                      <span>✓✓</span>
                    </div>
                  </div>
                  <div class="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#0052cc] text-white text-[8px] sm:text-[9px] font-extrabold flex items-center justify-center shrink-0 border border-white shadow-2xs">
                    IA
                  </div>
                </div>

              </div>

            </div>

            <!-- Barra Inferior de Input de Mensagem -->
            <div class="p-1.5 sm:p-2.5 bg-white dark:bg-slate-800 border-t border-slate-200/80 dark:border-slate-700/80 shrink-0 z-10 space-y-1 sm:space-y-1.5 min-w-0">
              
              <!-- Linha de Ações / Ícones / Toggle Assinado -->
              <div class="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs px-0.5 sm:px-1 gap-1 min-w-0">
                <div class="flex items-center gap-1.5 sm:gap-2.5 min-w-0">
                  <button class="hover:text-slate-800 text-xs" title="Emoji">😊</button>
                  <button class="hover:text-slate-800 text-xs" title="Anexar arquivo">📎</button>
                  <button class="hidden sm:block hover:text-slate-800 text-xs" title="Respostas rápidas">💬</button>
                  
                  <!-- Dropdown IA / Ações -->
                  <div class="relative">
                    <button @click="showAiActions = !showAiActions" class="hover:text-purple-600 flex items-center gap-0.5 sm:gap-1 font-semibold text-purple-600 text-[10px] sm:text-[11px]">
                      <span>✨</span>
                      <span class="text-[9px] sm:text-[11px]">Ações IA</span>
                      <span class="text-[7px] sm:text-[8px]">▾</span>
                    </button>
                    
                    <!-- Menu Flutuante de IA -->
                    <div v-if="showAiActions" class="absolute bottom-6 left-0 w-44 sm:w-48 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 p-1.5 z-50 text-[11px] text-slate-700 dark:text-slate-200 space-y-1">
                      <div class="px-2 py-1 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg cursor-pointer flex items-center gap-1.5">
                        <span>✨</span>
                        <span>Reescrever com IA</span>
                      </div>
                      <div class="px-2 py-1 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg cursor-pointer flex items-center gap-1.5">
                        <span>📖</span>
                        <span>Resumir conversa</span>
                      </div>
                      <div class="px-2 py-1 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg cursor-pointer flex items-center gap-1.5">
                        <span>🤖</span>
                        <span>Copiloto de Vendas</span>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Toggle Assinado -->
                <div class="flex items-center gap-1 text-[9px] sm:text-[10px] shrink-0">
                  <span class="w-4 h-2.5 sm:w-5 sm:h-3 bg-[#0052cc] rounded-full flex items-center p-0.5 cursor-pointer justify-end">
                    <span class="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full shadow-sm"></span>
                  </span>
                  <span class="hidden xs:inline font-medium text-slate-700 dark:text-slate-300">Assinado</span>
                </div>
              </div>

              <!-- Input de Texto e Botão de Áudio -->
              <div class="flex items-center gap-1 min-w-0">
                <div class="flex-1 min-w-0 relative">
                  <input type="text" placeholder="Digite uma mensagem..."
                    class="w-full px-2 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg sm:rounded-xl text-slate-800 dark:text-slate-200 focus:outline-none focus:border-blue-500 placeholder:text-slate-400">
                </div>
                <button class="p-1 sm:p-1.5 rounded-lg sm:rounded-xl bg-slate-100 dark:bg-slate-700 hover:bg-blue-50 hover:text-[#0052cc] text-slate-600 dark:text-slate-300 transition-colors shrink-0 text-[10px] sm:text-xs" title="Gravar Áudio">
                  🎙️
                </button>
              </div>

            </div>

            <!-- Painel Lateral Direito (Drawer Overlay com Slide-in sem espremer o chat) -->
            <div v-if="showContactDetails"
              class="absolute top-0 right-0 bottom-0 w-64 sm:w-72 bg-white/95 dark:bg-slate-800/95 backdrop-blur-md border-l border-slate-200 dark:border-slate-700 shadow-2xl flex flex-col z-30 overflow-y-auto no-scrollbar transition-all duration-300">
              
              <!-- Header do Painel -->
              <div class="p-2.5 border-b border-slate-100 dark:border-slate-700/60 flex items-center justify-between">
                <h3 class="text-xs font-bold text-slate-900 dark:text-white">Detalhes do contato</h3>
                <button @click="showContactDetails = false" class="p-1 text-slate-400 hover:text-slate-700 dark:hover:text-white text-xs">✕</button>
              </div>

              <!-- Conteúdo Unificado dos Detalhes -->
              <div class="p-3 space-y-3 text-xs">
                
                <!-- Avatar (Tamanho Calibrado), Nome e Tags de Status -->
                <div class="flex flex-col items-center text-center">
                  <div class="w-12 h-12 rounded-full overflow-hidden border-2 border-slate-200 dark:border-slate-700 shadow-xs mb-1.5 shrink-0">
                    <img :src="activeChat.avatar" class="w-full h-full object-cover" alt="Avatar">
                  </div>
                  <h4 class="text-xs font-bold text-slate-900 dark:text-white">{{ activeChat.name }}</h4>
                  <div class="flex items-center gap-1 mt-1">
                    <span class="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-[9px] font-bold">Privado</span>
                    <span v-if="activeChat.isAiActive" class="px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-950/70 text-purple-700 dark:text-purple-300 border border-purple-200/80 dark:border-purple-800/60 text-[9px] font-bold flex items-center gap-1">
                      <span class="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse shrink-0"></span>
                      <span>Atendimento IA</span>
                    </span>
                  </div>
                </div>

                <!-- Informações Básicas (Telefone e Setor) -->
                <div class="space-y-1.5 p-2 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-700/60 text-[10px]">
                  <div class="flex items-center justify-between">
                    <span class="text-slate-400">📞 Telefone:</span>
                    <span class="font-semibold text-slate-700 dark:text-slate-200">{{ activeChat.phone }}</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-slate-400">🏢 Setor:</span>
                    <span class="font-semibold text-slate-700 dark:text-slate-200">{{ activeChat.queue }}</span>
                  </div>
                </div>

                <!-- Card: Etapa Ativa no CRM / Funil -->
                <div class="p-2.5 rounded-xl bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/50 space-y-1">
                  <div class="flex items-center justify-between text-[9px] font-bold uppercase tracking-wider text-indigo-900 dark:text-indigo-300">
                    <span class="flex items-center gap-1">
                      <span>🎯</span>
                      <span>Etapa Ativa no CRM</span>
                    </span>
                    <span class="text-[8px] bg-indigo-200/60 dark:bg-indigo-900/60 px-1.5 py-0.2 rounded font-bold">Funil</span>
                  </div>
                  <div class="flex items-center justify-between pt-0.5">
                    <span class="font-bold text-[11px] text-indigo-700 dark:text-indigo-300">
                      {{ activeChat.crmStage || 'Negociação • R$ 380,00' }}
                    </span>
                    <span class="text-[10px]">🔥</span>
                  </div>
                </div>

                <!-- Card: Análise de Sentimento com IA -->
                <div class="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-[10px] space-y-0.5">
                  <div class="flex items-center justify-between text-[9px] font-bold text-emerald-800 dark:text-emerald-300">
                    <span>✨ Análise de Sentimento</span>
                    <span>99% precisão</span>
                  </div>
                  <div class="flex items-center gap-1 font-semibold text-emerald-700 dark:text-emerald-300 text-[10px]">
                    <span>🟢</span>
                    <span>Positivo / Alto Interesse</span>
                  </div>
                </div>

                <!-- Seção: Etiquetas -->
                <div class="space-y-1">
                  <label class="text-[10px] font-bold text-slate-800 dark:text-white">Etiquetas</label>
                  <div class="flex flex-wrap gap-1">
                    <span class="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-slate-800 text-white text-[8px] font-medium">
                      Atendimento IA ✕
                    </span>
                    <span class="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-950/50 text-[#0052cc] dark:text-blue-300 text-[8px] font-semibold">
                      Lead Qualificado
                    </span>
                  </div>
                </div>

                <!-- Seção: Notas Rápidas -->
                <div class="space-y-1">
                  <label class="text-[10px] font-bold text-slate-800 dark:text-white">Notas Rápidas</label>
                  <textarea placeholder="Adicionar nota interna..." class="w-full p-2 text-[10px] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl h-14 resize-none focus:outline-none placeholder:text-slate-400"></textarea>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  embedded: {
    type: Boolean,
    default: false
  }
});

const currentTab = ref('chat');
const activeChatId = ref(1);
const currentAudio = ref(null);
const sidebarCollapsed = ref(false);
const showContactDetails = ref(false);
const showAiActions = ref(false);
const contactTab = ref('perfil');

const userPerformanceList = ref([
  { initials: 'BM', name: 'Beatriz Mendes', email: 'beatriz.mendes@empresa.com.br', pendentes: 0, atendendo: 0, resolvidos: 16, total: 16, rating: '4.9', tme: '12s', tma: '1min 45s', tpr: '2s', tte: '18s' },
  { initials: 'LR', name: 'Lucas Ramos', email: 'lucas.ramos@empresa.com.br', pendentes: 1, atendendo: 4, resolvidos: 0, total: 5, rating: '5.0', tme: '15s', tma: '2min 10s', tpr: '3s', tte: '22s' },
  { initials: 'MC', name: 'Mateus Costa', email: 'mateus.costa@empresa.com.br', pendentes: 4, atendendo: 0, resolvidos: 1, total: 5, rating: '4.8', tme: '18s', tma: '2min 30s', tpr: '4s', tte: '25s' },
  { initials: 'JR', name: 'Juliana Rocha', email: 'juliana.rocha@empresa.com.br', pendentes: 3, atendendo: 0, resolvidos: 0, total: 3, rating: '4.9', tme: '10s', tma: '1min 55s', tpr: '2s', tte: '14s' },
  { initials: 'RL', name: 'Rafael Lima', email: 'rafael.lima@empresa.com.br', pendentes: 1, atendendo: 2, resolvidos: 0, total: 3, rating: '5.0', tme: '14s', tma: '2min 20s', tpr: '3s', tte: '20s' },
  { initials: 'FC', name: 'Felipe Castro', email: 'felipe.castro@empresa.com.br', pendentes: 2, atendendo: 1, resolvidos: 0, total: 3, rating: '4.7', tme: '16s', tma: '2min 05s', tpr: '4s', tte: '24s' },
  { initials: 'BF', name: 'Bruno Farias', email: 'bruno.farias@empresa.com.br', pendentes: 2, atendendo: 0, resolvidos: 0, total: 2, rating: '4.9', tme: '11s', tma: '1min 40s', tpr: '3s', tte: '16s' },
  { initials: 'CS', name: 'Camila Souza', email: 'camila.souza@empresa.com.br', pendentes: 0, atendendo: 2, resolvidos: 0, total: 2, rating: '4.8', tme: '20s', tma: '2min 50s', tpr: '5s', tte: '30s' },
  { initials: 'VP', name: 'Vinícius Prado', email: 'vinicius.prado@empresa.com.br', pendentes: 0, atendendo: 0, resolvidos: 2, total: 2, rating: '5.0', tme: '13s', tma: '2min 15s', tpr: '3s', tte: '19s' },
  { initials: 'LD', name: 'Larissa Dias', email: 'larissa.dias@empresa.com.br', pendentes: 0, atendendo: 1, resolvidos: 0, total: 1, rating: '4.9', tme: '15s', tma: '1min 50s', tpr: '2s', tte: '21s' },
  { initials: 'EG', name: 'Eduardo Gomes', email: 'eduardo.gomes@empresa.com.br', pendentes: 0, atendendo: 1, resolvidos: 0, total: 1, rating: '5.0', tme: '12s', tma: '2min 00s', tpr: '3s', tte: '17s' }
]);

const chats = ref([
  {
    id: 1,
    name: 'Mariana',
    avatar: 'https://i.pravatar.cc/300?img=47',
    channel: 'whatsapp',
    tagNumber: '#48192',
    queue: 'Vendas',
    crmStage: 'Fechamento / Pix Gerado • R$ 189,00',
    isAiActive: true,
    phone: '+55 (11) 98765-4321',
    lastTime: 'Agora',
    preview: 'Pagamento identificado com sucesso! ✅',
    messages: [
      { sender: 'client', text: 'Boa tarde! Vocês tem essa camiseta na cor azul marinho tamanho G?', time: '14:30' },
      { sender: 'ai', text: 'Olá Mariana! Temos sim, restam 3 unidades no estoque. Hoje estamos com Frete Grátis e 5% de desconto no Pix! 🎉 Deseja que eu reserve para você?', time: '14:30' },
      { sender: 'client', text: 'Nossa, que rápido! Quero sim, me passa a chave Pix por favor.', time: '14:31' },
      { sender: 'ai', text: 'Perfeito! Chave Pix Copia e Cola gerada:\npix.promp.com.br/pay/9812 🚀\nAssim que pagar já libero seu código de rastreio.', time: '14:31' },
      { sender: 'client', text: 'Prontinho, acabei de pagar!', time: '14:32' },
      { sender: 'ai', text: 'Pagamento identificado com sucesso! ✅ Seu pedido #48192 foi emitido e despachado para entrega.', time: '14:32' }
    ]
  },
  {
    id: 2,
    name: 'Lucas Rocha',
    avatar: 'https://i.pravatar.cc/300?img=12',
    channel: 'instagram',
    tagNumber: '#21223',
    queue: 'Financeiro',
    crmStage: 'Fatura Regularizada • R$ 450,00',
    isAiActive: true,
    phone: '+55 (21) 97654-3210',
    lastTime: '2min',
    preview: 'Baixa registrada no sistema! ⭐',
    messages: [
      { sender: 'client', text: 'Olá, preciso da 2ª via da minha fatura de agosto que venceu ontem.', time: '11:10' },
      { sender: 'ai', text: 'Olá Lucas! Localizei seu cadastro. Já recalculei sua fatura sem juros até hoje! 📄\nLinha digitável:\n34191.79001 01043.510047 91020.150008 8 9820000018900', time: '11:10' },
      { sender: 'client', text: 'Muito obrigado! Paguei aqui pelo app do banco.', time: '11:12' },
      { sender: 'ai', text: 'Baixa registrada no sistema! Se precisar de mais alguma coisa, estou à disposição. Tenha um ótimo dia! ⭐', time: '11:12' }
    ]
  },
  {
    id: 3,
    name: 'Juliana',
    avatar: 'https://i.pravatar.cc/300?img=25',
    channel: 'mercadolivre',
    tagNumber: '#32456',
    queue: 'Comercial',
    crmStage: 'Pedido Fechado • R$ 890,00',
    isAiActive: true,
    phone: '+55 (41) 99834-0004',
    lastTime: '15min',
    preview: 'Excelente escolha! Pedido recebido...',
    messages: [
      { sender: 'client', text: 'Boa tarde! Se eu fechar o pedido agora, vocês postam ainda hoje?', time: '15:17' },
      { sender: 'ai', text: 'Boa tarde, Juliana! Comprando até às 15h seu pedido é despachado hoje mesmo pela nossa modalidade Full e chega amanhã até às 12h.', time: '15:17' },
      { sender: 'client', text: 'Maravilha, acabei de confirmar a compra de 2 unidades.', time: '15:19' },
      { sender: 'ai', text: 'Excelente escolha! Pedido recebido e já em separação no centro de distribuição 📦', time: '15:19' }
    ]
  },
  {
    id: 4,
    name: 'Camila',
    avatar: 'https://i.pravatar.cc/300?img=32',
    channel: 'whatsapp',
    tagNumber: '#32380',
    queue: 'Suporte Técnico',
    crmStage: 'Qualificação / Onboarding',
    isAiActive: true,
    phone: '+55 (31) 98888-1122',
    lastTime: '1h',
    preview: 'Você pode acessar Menu > Configurações...',
    messages: [
      { sender: 'client', text: 'Como faço para conectar a API com meu sistema de notas?', time: '14:20' },
      { sender: 'ai', text: 'Olá Camila! É super simples. Você pode acessar Menu > Configurações > Webhooks e gerar seu token de acesso. Também temos a documentação em doc.promp.ia com exemplos prontos.', time: '14:20' }
    ]
  },
  {
    id: 5,
    name: 'Rodrigo Dias',
    avatar: 'https://i.pravatar.cc/300?img=60',
    channel: 'instagram',
    tagNumber: '#32212',
    queue: 'Pós-Venda',
    crmStage: 'Fidelização / Recompra Ativa',
    isAiActive: true,
    phone: '+55 (47) 99111-2233',
    lastTime: '3h',
    preview: 'Ficamos muito felizes em saber, Rodrigo!',
    messages: [
      { sender: 'client', text: 'Meu pedido chegou hoje antes do prazo, adorei a qualidade!', time: '10:05' },
      { sender: 'ai', text: 'Ficamos muito felizes em saber, Rodrigo! Preparamos com muito carinho. Segue um cupom especial de 15% OFF para sua próxima compra: CLIENTEPROMP15 🎉', time: '10:06' }
    ]
  },
  {
    id: 6,
    name: 'Fernanda',
    avatar: 'https://i.pravatar.cc/300?img=68',
    channel: 'mercadolivre',
    tagNumber: '#32398',
    queue: 'SAC',
    crmStage: 'Atendimento Inicial',
    isAiActive: false,
    phone: '+55 (41) 98777-6655',
    lastTime: '5h',
    preview: 'Olá Fernanda! Sim, possui garantia...',
    messages: [
      { sender: 'client', text: 'Gostaria de saber se o produto tem garantia de fábrica.', time: '09:50' },
      { sender: 'ai', text: 'Olá Fernanda! Sim, possui garantia total de 12 meses direto pelo fabricante contra qualquer defeito.', time: '09:51' }
    ]
  }
]);

const crmSubTab = ref('kanban');

const kanbanColumns = ref([
  { id: 'prospeccao', title: 'Prospecção de leads', totalValue: 'R$ 350,00', count: 1 },
  { id: 'qualificacao', title: 'Qualificação (SDR)', totalValue: 'R$ 680,00', count: 1 },
  { id: 'demonstracao', title: 'Demonstração / Dúvidas', totalValue: 'R$ 739,90', count: 1 },
  { id: 'proposta', title: 'Proposta & Negociação', totalValue: 'R$ 890,00', count: 1 },
  { id: 'fechamento', title: 'Fechamento & Pós-Venda', totalValue: 'R$ 639,00', count: 2 }
]);

const kanbanOpportunities = ref([
  {
    id: 32212,
    code: '#32212',
    name: 'Rodrigo Dias',
    title: 'Oportunidade - Rodrigo Dias',
    stage: 'prospeccao',
    value: 'R$ 350,00',
    phone: '+55 (47) 99111-2233',
    avatar: 'https://i.pravatar.cc/300?img=60',
    initial: 'RD',
    channel: 'instagram',
    createdDate: 'Hoje • 10:05',
    dueDate: '20/08/2026',
    status: 'Aberto',
    aiBadge: '✨ IA ativou Cupom Fidelidade 15% OFF',
    isAiMoved: true
  },
  {
    id: 32380,
    code: '#32380',
    name: 'Camila',
    title: 'Oportunidade - Camila',
    stage: 'qualificacao',
    value: 'R$ 680,00',
    phone: '+55 (31) 98888-1122',
    avatar: 'https://i.pravatar.cc/300?img=32',
    initial: 'C',
    channel: 'whatsapp',
    createdDate: 'Hoje • 14:20',
    dueDate: '25/08/2026',
    status: 'Aberto',
    aiBadge: '✨ IA qualificou interesse em API & Webhooks',
    isAiMoved: true
  },
  {
    id: 32398,
    code: '#32398',
    name: 'Fernanda',
    title: 'Oportunidade - Fernanda',
    stage: 'demonstracao',
    value: 'R$ 739,90',
    phone: '+55 (41) 98777-6655',
    avatar: 'https://i.pravatar.cc/300?img=68',
    initial: 'F',
    channel: 'mercadolivre',
    createdDate: 'Hoje • 09:50',
    dueDate: '28/08/2026',
    status: 'Aberto',
    aiBadge: '✨ IA esclareceu garantia de 12 meses',
    isAiMoved: true
  },
  {
    id: 32456,
    code: '#32456',
    name: 'Juliana',
    title: 'Oportunidade - Juliana',
    stage: 'proposta',
    value: 'R$ 890,00',
    phone: '+55 (41) 99834-0004',
    avatar: 'https://i.pravatar.cc/300?img=25',
    initial: 'J',
    channel: 'mercadolivre',
    createdDate: 'Hoje • 15:17',
    dueDate: 'Hoje • 15:19',
    status: 'Aberto',
    aiBadge: '⚡ IA confirmou Envio Full no mesmo dia',
    isAiMoved: true
  },
  {
    id: 48192,
    code: '#48192',
    name: 'Mariana',
    title: 'Oportunidade - Mariana',
    stage: 'fechamento',
    value: 'R$ 189,00',
    phone: '+55 (11) 98765-4321',
    avatar: 'https://i.pravatar.cc/300?img=47',
    initial: 'M',
    channel: 'whatsapp',
    createdDate: 'Hoje • 14:30',
    dueDate: 'Concluído hoje',
    status: 'Aberto',
    aiBadge: '⚡ IA gerou Pix Copia e Cola & confirmou',
    isAiMoved: true
  },
  {
    id: 21223,
    code: '#21223',
    name: 'Lucas Rocha',
    title: 'Oportunidade - Lucas Rocha',
    stage: 'fechamento',
    value: 'R$ 450,00',
    phone: '+55 (21) 97654-3210',
    avatar: 'https://i.pravatar.cc/300?img=12',
    initial: 'LR',
    channel: 'instagram',
    createdDate: 'Hoje • 11:10',
    dueDate: 'Concluído hoje',
    status: 'Aberto',
    aiBadge: '⚡ IA recalculou 2ª via sem juros & deu baixa',
    isAiMoved: true
  }
]);

const activeChat = computed(() => {
  return chats.value.find(c => c.id === activeChatId.value) || chats.value[0];
});
</script>

<style scoped>
/* Custom scrollbar for chat list */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

@keyframes float-slow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

@keyframes float-medium {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes float-fast {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-7px); }
}

.animate-float-slow {
  animation: float-slow 4s ease-in-out infinite;
}

.animate-float-medium {
  animation: float-medium 3s ease-in-out infinite;
}

.animate-float-fast {
  animation: float-fast 2.5s ease-in-out infinite;
}

.perspective-1000 {
  perspective: 1000px;
}
</style>
