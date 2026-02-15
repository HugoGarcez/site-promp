<template>
  <div class="relative w-full group perspective-1000">
    <!-- Floating Channel Icons -->

    <!-- WhatsApp (Top Left) -->
    <div class="absolute -top-6 -left-2 md:-top-12 md:-left-12 z-30 animate-float-slow">
      <div
        class="w-12 h-12 md:w-16 md:h-16 bg-[#25D366] rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/30 transform -rotate-12 hover:rotate-0 transition-transform duration-300 border-2 border-white dark:border-slate-800">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 md:w-9 md:h-9 text-white" viewBox="0 0 24 24"
          fill="currentColor">
          <path
            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.355-5.229c0-5.42 4.409-9.85 9.85-9.85 2.632 0 5.108 1.026 6.969 2.887 1.861 1.862 2.888 4.337 2.888 6.97.001 5.423-4.41 9.854-9.854 9.854" />
        </svg>
      </div>
    </div>

    <!-- Instagram (Top Right -> Repositioned higher) -->
    <div class="absolute -top-10 -right-2 md:-top-16 md:-right-10 z-30 animate-float-medium delay-700">
      <div
        class="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-tr from-[#FFD600] via-[#FF0100] to-[#D800B9] rounded-2xl flex items-center justify-center shadow-lg shadow-pink-500/30 transform rotate-12 hover:rotate-0 transition-transform duration-300 border-2 border-white dark:border-slate-800">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 md:w-9 md:h-9 text-white" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      </div>
    </div>

    <!-- Telegram (Bottom Right) -->
    <div class="absolute -bottom-4 -right-2 md:-bottom-8 md:-right-12 z-30 animate-float-fast delay-1000">
      <div
        class="w-12 h-12 md:w-16 md:h-16 bg-[#2CA5E0] rounded-2xl flex items-center justify-center shadow-lg shadow-blue-400/30 transform -rotate-6 hover:rotate-0 transition-transform duration-300 border-2 border-white dark:border-slate-800">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 md:w-9 md:h-9 text-white" viewBox="0 0 24 24"
          fill="currentColor">
          <path
            d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 11.944 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.638z" />
        </svg>
      </div>
    </div>

    <!-- Email (Bottom Left -> Moved up to avoid collision) -->
    <div class="absolute bottom-20 -left-2 md:bottom-24 md:-left-12 z-20 animate-float-slow delay-500">
      <div
        class="w-12 h-12 md:w-16 md:h-16 bg-slate-100 dark:bg-slate-700 rounded-2xl flex items-center justify-center shadow-lg shadow-slate-500/20 transform rotate-12 hover:rotate-0 transition-transform duration-300 border-2 border-white dark:border-slate-800">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 md:w-9 md:h-9 text-slate-600 dark:text-slate-300"
          viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
          stroke-linejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      </div>
    </div>

    <!-- Webchat (Right Middle) -->
    <div class="absolute top-[65%] -right-2 md:-right-10 z-30 animate-float-medium delay-200">
      <div
        class="w-12 h-12 md:w-16 md:h-16 bg-[#007BFF] rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30 transform rotate-6 hover:rotate-0 transition-transform duration-300 border-2 border-white dark:border-slate-800">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 md:w-9 md:h-9 text-white" viewBox="0 0 24 24"
          fill="currentColor">
          <path
            d="M2.004 22.003l2.003-6.002a10.003 10.003 0 1 1 7.996 4.002c-2.185 0-4.208-.7-5.856-1.89l-4.143 3.89zM12.003 4.004a8.003 8.003 0 0 0-6.398 12.802l.607.766L4.85 20.36l2.96-2.778.868.514a8.003 8.003 0 0 0 3.325.727 8.003 8.003 0 1 0 0-16.006z" />
          <circle cx="8.003" cy="12.003" r="1.5" />
          <circle cx="12.003" cy="12.003" r="1.5" />
          <circle cx="16.003" cy="12.003" r="1.5" />
        </svg>
      </div>
    </div>

    <!-- Phone (Left Middle) -->
    <div class="absolute top-[45%] -left-2 md:-left-10 z-30 animate-float-fast delay-300">
      <div
        class="w-10 h-10 md:w-14 md:h-14 bg-[#0E1F4A] rounded-2xl flex items-center justify-center shadow-lg shadow-secondary/30 transform -rotate-12 hover:rotate-0 transition-transform duration-300 border-2 border-white dark:border-slate-800 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 md:w-8 md:h-8" fill="none" stroke="currentColor"
          stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path
            d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
          </path>
        </svg>
      </div>
    </div>


    <div
      class="relative z-10 flex flex-col h-[500px] md:h-[600px] w-full bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700 font-sans text-left transition-all duration-500">

      <!-- Top Header -->
      <div
        class="h-14 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between px-4 shrink-0 z-30">
        <div class="flex items-center gap-4">
          <button class="text-slate-500 hover:text-primary transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div class="flex items-center gap-1">
            <span class="text-xl font-black text-slate-800 dark:text-white tracking-tighter">promp<span
                class="text-[#0E1F4A] italic">IA</span></span>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <!-- Notification Icons -->
          <div class="hidden sm:flex items-center gap-1 mr-2">
            <div class="relative p-2 text-slate-400 hover:text-primary cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span
                class="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center">30</span>
            </div>
            <div class="relative p-2 text-slate-400 hover:text-primary cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              <span
                class="absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center text-[8px] text-white">2</span>
            </div>
            <div class="p-2 text-slate-400 hover:text-primary cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
          </div>

          <div class="h-8 w-px bg-slate-200 dark:bg-slate-700 mx-1 hidden sm:block"></div>

          <div class="flex items-center gap-2">
            <div
              class="w-8 h-8 rounded-lg bg-green-500 flex items-center justify-center text-white border border-green-400 shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
              </svg>
            </div>
            <div
              class="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 font-bold text-xs border border-slate-200 dark:border-slate-700">
              H
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-1 overflow-hidden">
        <!-- Sidebar -->
        <div
          class="w-14 items-center bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-700 flex flex-col py-2 gap-2 flex-none z-20 overflow-y-auto no-scrollbar">

          <!-- Nav Icons -->
          <!-- Home -->
          <div @click="currentTab = 'home'"
            class="p-2 rounded-xl cursor-pointer transition-all duration-200 flex justify-center group"
            :class="currentTab === 'home' ? 'text-white bg-secondary shadow-lg shadow-secondary/30' : 'text-slate-400 hover:text-secondary hover:bg-slate-50 dark:hover:bg-slate-800'">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </svg>
          </div>
          <!-- Chat / Atendimentos -->
          <div @click="currentTab = 'chat'"
            class="p-2.5 rounded-xl cursor-pointer transition-all duration-200 flex justify-center group"
            :class="currentTab === 'chat' ? 'text-white bg-secondary shadow-lg shadow-secondary/30' : 'text-slate-400 hover:text-secondary hover:bg-slate-50 dark:hover:bg-slate-800'">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
            </svg>
          </div>
          <!-- Contacts / Kanban -->
          <div @click="currentTab = 'contacts'"
            class="p-2 rounded-xl cursor-pointer transition-all duration-200 flex justify-center group"
            :class="currentTab === 'contacts' ? 'text-white bg-secondary shadow-lg shadow-secondary/30' : 'text-slate-400 hover:text-secondary hover:bg-slate-50 dark:hover:bg-slate-800'">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <!-- Dashboard (Bar Chart) -->
          <div @click="currentTab = 'reports'"
            class="p-2 rounded-xl cursor-pointer transition-all duration-200 flex justify-center group"
            :class="currentTab === 'reports' ? 'text-white bg-secondary shadow-lg shadow-secondary/30' : 'text-slate-400 hover:text-secondary hover:bg-slate-50 dark:hover:bg-slate-800'">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <!-- User Shield -->
          <div @click="currentTab = 'admin'"
            class="p-2 rounded-xl cursor-pointer transition-all duration-200 flex justify-center group"
            :class="currentTab === 'admin' ? 'text-white bg-secondary shadow-lg shadow-secondary/30' : 'text-slate-400 hover:text-secondary hover:bg-slate-50 dark:hover:bg-slate-800'">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
        </div>

        <div v-if="currentTab === 'home'" class="flex-1 flex flex-col bg-slate-50 dark:bg-slate-900 overflow-hidden">
          <!-- Home Header -->
          <div class="p-8 pb-4">
            <div
              class="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-8 flex justify-between items-center relative overflow-hidden">
              <div class="relative z-10">
                <h1 class="text-3xl font-bold text-[#0E1F4A] dark:text-secondary mb-2">{{
                  $t('mockups.chat.welcome_user') }}</h1>
                <p class="text-slate-500 dark:text-slate-400 text-sm">{{ $t('mockups.chat.access_features') }}</p>
              </div>
              <div class="w-24 h-24 bg-secondary rounded-lg flex flex-wrap p-2 gap-1 opacity-90 relative z-10">
                <div class="w-[45%] h-[45%] bg-white/20 rounded-sm"></div>
                <div class="w-[45%] h-[45%] bg-white rounded-sm"></div>
                <div class="w-[45%] h-[45%] bg-white rounded-sm"></div>
                <div class="w-[45%] h-[45%] bg-white rounded-sm"></div>
              </div>
              <!-- Decorative circle -->
              <div class="absolute -right-10 -top-10 w-40 h-40 bg-secondary/5/50 dark:bg-blue-900/10 rounded-full">
              </div>
            </div>
          </div>

          <!-- Dashboard Cards Grid -->
          <div class="px-8 grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div @click="currentTab = 'reports'"
              class="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col items-center group text-center">
              <div
                class="w-12 h-12 bg-secondary/5 dark:bg-blue-900/30 text-secondary dark:text-secondary rounded-xl flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4" />
                </svg>
              </div>
              <h3 class="font-bold text-slate-800 dark:text-white mb-2">{{ $t('mockups.chat.dashboard') }}</h3>
              <p class="text-[10px] text-slate-500">{{ $t('mockups.chat.dashboard_desc') }}</p>
            </div>
            <div @click="currentTab = 'chat'"
              class="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col items-center group text-center">
              <div
                class="w-12 h-12 bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 class="font-bold text-slate-800 dark:text-white mb-2">{{ $t('mockups.chat.attendance') }}</h3>
              <p class="text-[10px] text-slate-500">{{ $t('mockups.chat.attendance_desc') }}</p>
            </div>
            <div @click="currentTab = 'contacts'"
              class="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col items-center group text-center">
              <div
                class="w-12 h-12 bg-secondary/5 dark:bg-blue-900/30 text-secondary dark:text-secondary rounded-xl flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 class="font-bold text-slate-800 dark:text-white mb-2">{{ $t('mockups.chat.contacts') }}</h3>
              <p class="text-[10px] text-slate-500">{{ $t('mockups.chat.contacts_desc') }}</p>
            </div>
          </div>

          <!-- Bottom Info Section -->
          <div class="px-8 grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 pb-8 flex-1 overflow-y-auto no-scrollbar">
            <!-- Informações Rápidas -->
            <div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6">
              <div class="flex items-center gap-2 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h2 class="font-bold text-slate-800 dark:text-white">{{ $t('mockups.chat.quick_info') }}</h2>
              </div>
              <div class="space-y-4">
                <div
                  class="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-700">
                  <span class="text-yellow-500 text-lg">⚡</span>
                  <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">{{ $t('mockups.chat.access_dashboard_hint')
                  }}
                  </p>
                </div>
                <div
                  class="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-700">
                  <span class="text-green-500 text-lg">✅</span>
                  <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">{{ $t('mockups.chat.system_optimized') }}
                  </p>
                </div>
                <div
                  class="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-700">
                  <div class="w-6 h-6 bg-secondary rounded flex items-center justify-center text-[10px] text-white">📊
                  </div>
                  <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">{{ $t('mockups.chat.browse_features') }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Links Rápidos -->
            <div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6">
              <div class="flex items-center gap-2 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <h2 class="font-bold text-slate-800 dark:text-white">{{ $t('mockups.chat.quick_links') }}</h2>
              </div>
              <div class="space-y-2">
                <div @click="currentTab = 'reports'"
                  class="flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-900/50 rounded-xl cursor-pointer group border border-transparent hover:border-slate-100 dark:hover:border-slate-700 transition-all">
                  <div class="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-secondary" fill="none"
                      viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4" />
                    </svg>
                    <div>
                      <h4 class="text-xs font-bold text-slate-800 dark:text-white">{{ $t('mockups.chat.dashboard') }}
                      </h4>
                      <p class="text-[9px] text-slate-500">{{ $t('mockups.chat.dashboard_desc') }}</p>
                    </div>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg"
                    class="w-4 h-4 text-slate-300 group-hover:text-secondary transition-colors" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <div @click="currentTab = 'reports'"
                  class="flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-900/50 rounded-xl cursor-pointer group border border-transparent hover:border-slate-100 dark:hover:border-slate-700 transition-all">
                  <div class="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-secondary" fill="none"
                      viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 17v-2a4 4 0 014-4h2m3 3l-3-3m3 3l-3 3" />
                      <rect x="5" y="5" width="4" height="14" rx="1" />
                    </svg>
                    <div>
                      <h4 class="text-xs font-bold text-slate-800 dark:text-white">{{ $t('mockups.chat.reports') }}</h4>
                      <p class="text-[9px] text-slate-500">{{ $t('mockups.chat.reports_desc') }}</p>
                    </div>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg"
                    class="w-4 h-4 text-slate-300 group-hover:text-secondary transition-colors" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else-if="currentTab === 'contacts'"
          class="flex-1 flex flex-col bg-slate-50 dark:bg-slate-900 overflow-hidden">
          <!-- Kanban Header -->
          <div
            class="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between px-6 shrink-0 z-10">
            <div class="flex items-center gap-4">
              <h2 class="text-xl font-bold text-slate-800 dark:text-white">{{ $t('mockups.chat.funnel') }}</h2>
              <div class="flex bg-slate-100 dark:bg-slate-800 rounded-lg p-1">
                <button class="px-3 py-1 bg-white dark:bg-slate-700 rounded shadow-sm text-[10px] font-bold">{{
                  $t('mockups.chat.kanban') }}</button>
                <button class="px-3 py-1 text-[10px] text-slate-500 font-bold">{{ $t('mockups.chat.list') }}</button>
              </div>
            </div>
            <button
              class="bg-primary text-white px-4 py-2 rounded-lg text-xs font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-colors flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
              </svg>
              {{ $t('mockups.chat.new_contact') }}
            </button>
          </div>

          <!-- Kanban Board -->
          <div class="flex-1 overflow-x-auto p-6 no-scrollbar">
            <div class="flex gap-6 h-full min-w-max">
              <!-- Columns -->
              <div v-for="col in kanbanColumns" :key="col.id" class="w-72 flex flex-col gap-4">
                <div class="flex items-center justify-between px-2">
                  <div class="flex items-center gap-2">
                    <h3 class="font-bold text-slate-700 dark:text-slate-300 text-sm uppercase tracking-wider">{{
                      $t(col.title) }}</h3>
                    <span
                      class="bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] px-2 py-0.5 rounded-full font-bold">
                      {{kanbanContacts.filter(c => c.stage === col.id).length}}
                    </span>
                  </div>
                  <button class="text-slate-400 hover:text-primary"><svg xmlns="http://www.w3.org/2000/svg"
                      class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg></button>
                </div>

                <div
                  class="flex-1 space-y-3 p-1 rounded-xl bg-slate-100/50 dark:bg-slate-800/30 border border-dashed border-slate-200 dark:border-slate-700">
                  <!-- Contact Cards -->
                  <div v-for="contact in kanbanContacts.filter(c => c.stage === col.id)" :key="contact.id"
                    class="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow cursor-pointer group">
                    <div class="flex items-start justify-between mb-3">
                      <div class="flex items-center gap-3">
                        <img :src="`https://ui-avatars.com/api/?name=${contact.name}&background=random`"
                          class="w-8 h-8 rounded-lg">
                        <div>
                          <h4
                            class="text-xs font-bold text-slate-800 dark:text-white group-hover:text-primary transition-colors">
                            {{ contact.name }}</h4>
                          <p class="text-[10px] text-slate-400">{{ contact.time }}</p>
                        </div>
                      </div>
                    </div>
                    <div
                      class="flex items-center justify-between mt-4 pt-4 border-t border-slate-50 dark:border-slate-700/50">
                      <span
                        class="text-[10px] font-black text-slate-600 dark:text-slate-400 uppercase tracking-tighter">{{
                          contact.value }}</span>
                      <div class="flex -space-x-2">
                        <div
                          class="w-5 h-5 rounded-full border-2 border-white dark:border-slate-800 bg-green-500 flex items-center justify-center text-white text-[8px]">
                          <svg xmlns="http://www.w3.org/2000/svg" class="w-2 h-2" fill="currentColor"
                            viewBox="0 0 24 24">
                            <path
                              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Drop Zone Placeholder -->
                  <div class="h-12 flex items-center justify-center text-slate-300 dark:text-slate-600">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else-if="currentTab === 'chat'" class="flex flex-1 min-w-0 h-full overflow-hidden">
          <!-- Chat List -->
          <div
            class="hidden xl:flex w-20 lg:w-52 bg-slate-50 dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 flex-col flex-none transition-all duration-300">
            <!-- Header (Hidden in compact mode) -->
            <div class="lg:block p-4 border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
              <div class="flex items-center gap-2 mb-4">
                <div class="flex bg-slate-100 dark:bg-slate-800 rounded-lg p-1 flex-1">
                  <button
                    class="flex-1 px-2 lg:px-3 py-1.5 bg-white dark:bg-slate-700 rounded-md shadow-sm text-[10px] lg:text-xs font-bold text-slate-900 dark:text-white">{{
                      $t('mockups.chat.open') }}</button>
                  <button
                    class="flex-1 px-2 lg:px-3 py-1.5 text-[10px] lg:text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white">{{
                      $t('mockups.chat.pending') }}</button>
                </div>
                <button
                  class="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                  </svg>
                </button>
              </div>
              <div class="relative">
                <input type="text" :placeholder="$t('mockups.chat.search_placeholder')"
                  class="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-lg text-xs focus:ring-1 focus:ring-primary/30 text-slate-900 dark:text-white placeholder-slate-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="absolute left-3 top-2.5 w-4 h-4 text-slate-400"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            <!-- Compact Header (Visible only in compact mode) -->
            <div
              class="lg:hidden p-4 border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-slate-400" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>

            <!-- List -->
            <div class="flex-1 overflow-y-auto no-scrollbar flex flex-col gap-1 p-2">

              <div v-for="chat in chats" :key="chat.id" @click="activeChatId = chat.id"
                class="p-3 border-b border-transparent cursor-pointer transition-colors rounded-lg group"
                :class="activeChatId === chat.id ? 'bg-secondary/5 dark:bg-secondary/10 border-l-4 border-l-secondary rounded-l-none' : 'lg:border-slate-100 dark:lg:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50'">
                <div class="flex justify-center lg:justify-between items-start mb-1">
                  <div class="flex items-center gap-3">
                    <div class="relative shrink-0">
                      <img :src="chat.avatar" class="w-10 h-10 rounded-full"
                        :class="{ 'grayscale opacity-70': activeChatId !== chat.id }">
                      <span v-if="activeChatId === chat.id"
                        class="absolute bottom-0 right-0 w-3 h-3 lg:w-2.5 lg:h-2.5 bg-green-500 border-2 border-white dark:border-slate-900 rounded-full"></span>
                    </div>
                    <div class="min-w-0 flex-1 hidden lg:block">
                      <h4 class="text-sm font-bold truncate"
                        :class="activeChatId === chat.id ? 'text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-300'">
                        {{ chat.name }}</h4>
                      <p class="text-[10px] font-medium truncate"
                        :class="activeChatId === chat.id ? 'text-primary' : 'text-slate-400'">{{ chat.tag }}</p>
                    </div>
                  </div>
                  <span class="text-[10px] text-slate-400 flex-none hidden lg:block">{{ chat.lastTime }}</span>
                </div>
                <p class="text-xs line-clamp-1 pl-[44px] hidden lg:block"
                  :class="activeChatId === chat.id ? 'text-slate-600 dark:text-slate-300' : 'text-slate-500 dark:text-slate-400'">
                  {{ chat.preview }}
                </p>
              </div>

            </div>
          </div>

          <!-- Main Chat Area -->
          <div class="flex-1 min-w-0 flex flex-col bg-[#efeae2] dark:bg-[#0b141a] relative transition-all duration-300">
            <!-- Chat Background Pattern -->
            <div class="absolute inset-0 opacity-[0.06] pointer-events-none"
              style="background-image: url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png');">
            </div>

            <!-- Header -->
            <div
              class="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between px-4 z-10 shrink-0">
              <div class="flex items-center gap-3 min-w-0">
                <img :src="activeChat.avatar" class="w-10 h-10 rounded-full">
                <div class="min-w-0">
                  <h3 class="font-bold text-slate-900 dark:text-white truncate">{{ activeChat.name }}</h3>
                  <p class="text-xs text-slate-500 flex items-center gap-1">
                    <span class="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                    {{ $t('mockups.chat.online') }}
                  </p>
                </div>
              </div>
              <div class="flex gap-2 text-slate-500">
                <button class="hover:text-primary transition-colors p-1"><svg xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg></button>
                <button class="hover:text-primary transition-colors p-1"><svg xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                  </svg></button>
              </div>
            </div>

            <!-- Messages -->
            <div class="flex-1 overflow-y-auto p-4 space-y-4 z-10">

              <!-- Date Divider -->
              <div class="flex justify-center">
                <span
                  class="px-3 py-1 bg-white/80 dark:bg-slate-800/80 rounded-lg text-xs font-medium text-slate-500 shadow-sm">{{
                    $t('mockups.chat.today') }}</span>
              </div>

              <!-- System Msg -->
              <div class="flex justify-center my-4">
                <div
                  class="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 text-xs px-2 py-2 rounded-lg shadow-sm border border-yellow-200 dark:border-yellow-800/50 flex items-center gap-1 max-w-full">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 shrink-0" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span class="truncate">{{ $t('mockups.chat.encryption_msg') }}</span>
                </div>
              </div>

              <div v-for="(msg, index) in activeChat.messages" :key="index" class="flex gap-2 w-full"
                :class="msg.sender === 'client' ? 'justify-start max-w-[85%] sm:max-w-[70%]' : 'justify-end self-end ml-auto !max-w-[95%] sm:!max-w-[80%]'">

                <!-- AI Icon (Right Side) -->
                <div v-if="msg.sender === 'ai'" class="shrink-0 self-end order-2 mb-4">
                  <div
                    class="w-8 h-8 rounded-full bg-white dark:bg-slate-800 border border-secondary/20 shadow-sm flex items-center justify-center p-1 overflow-hidden">
                    <img src="/images/3d-icon-ia-promp.svg" class="w-full h-full object-contain" alt="IA">
                  </div>
                </div>

                <div class="flex flex-col gap-1 w-full"
                  :class="msg.sender === 'client' ? 'items-start' : 'items-end order-1'">

                  <div class="px-4 py-2 rounded-lg shadow-sm text-sm relative group"
                    :class="msg.sender === 'client'
                      ? 'bg-white dark:bg-slate-800 rounded-tl-none text-slate-800 dark:text-slate-200'
                      : 'bg-secondary/10 dark:bg-secondary/30 rounded-tr-none text-[#0E1F4A] dark:text-blue-300 font-bold'">

                    <!-- Text Content -->
                    <p v-if="msg.text" class="whitespace-pre-line mb-1 font-medium">{{ msg.text }}</p>

                    <!-- Audio Player -->
                    <div v-if="msg.audio" class="flex items-center gap-3 min-w-[200px] py-1">
                      <button
                        class="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center shrink-0 hover:bg-slate-300 transition-colors"
                        @click="toggleAudio(msg.audio)">
                        <svg v-if="currentAudio !== msg.audio" xmlns="http://www.w3.org/2000/svg"
                          class="w-4 h-4 text-slate-600 dark:text-white ml-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                            clip-rule="evenodd" />
                        </svg>
                        <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-slate-600 dark:text-white"
                          viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clip-rule="evenodd" />
                        </svg>
                      </button>
                      <div class="flex-1 h-1 bg-slate-300 dark:bg-slate-600 rounded-full overflow-hidden">
                        <div class="h-full bg-slate-500 dark:bg-slate-400 rounded-full animate-pulse"
                          style="width: 45%">
                        </div>
                      </div>
                      <span class="text-[10px] text-slate-500 dark:text-slate-400">0:14</span>
                    </div>

                    <!-- Image Content -->
                    <div v-if="msg.image"
                      class="mt-2 mb-2 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 bg-white p-1">
                      <img :src="msg.image" class="max-w-full h-auto object-cover max-h-48 w-full rounded">
                      <!-- Dashboard Image Inspiration -->
                      <div v-if="msg.sender === 'ai'" class="p-2 space-y-1">
                        <p class="text-[10px] font-bold text-slate-900">Camisa Polo Premium</p>
                      </div>
                    </div>

                    <!-- Cart/Product Rich Message -->
                    <div v-if="msg.cartData" class="mt-2 text-xs">
                      <div
                        class="bg-white/50 dark:bg-black/20 rounded p-2 mb-2 border border-slate-200 dark:border-slate-700/30">
                        <div class="flex gap-2">
                          <img :src="msg.cartData.image" class="w-12 h-12 rounded bg-white object-cover">
                          <div class="flex-1 min-w-0">
                            <p class="font-bold truncate">{{ msg.cartData.name }}</p>
                            <p class="text-[10px]">Qtd: {{ msg.cartData.qtd }} | Cor: {{ msg.cartData.color }}</p>
                            <p class="font-bold text-green-700 dark:text-green-300 text-sm mt-0.5">R$ {{
                              msg.cartData.subtotal
                            }}</p>
                          </div>
                        </div>
                      </div>
                      <div
                        class="bg-green-600 text-white text-center py-1.5 rounded font-bold cursor-pointer hover:bg-green-700 transition-colors shadow-sm">
                        {{ $t('mockups.chat.finish_purchase') }}
                      </div>
                    </div>

                    <span class="text-[10px] absolute bottom-1 right-2"
                      :class="msg.sender === 'client' ? 'text-slate-400' : 'text-slate-500 dark:text-slate-400'">{{
                        msg.time
                      }}</span>
                    <span v-if="msg.sender === 'ai'"
                      class="text-[9px] text-slate-400 font-medium pr-1 self-end italic">{{ $t('mockups.chat.sent_by')
                      }}</span>
                  </div>

                </div>
              </div>
            </div> <!-- Closes Messages Container (Line 561) -->

            <!-- Input Area -->
            <div class="p-3 bg-white dark:bg-slate-900 z-10 flex items-center gap-2 shrink-0">
              <button class="text-slate-500 hover:text-primary p-2 hidden sm:block">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
              <div
                class="flex-1 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 text-sm text-slate-600 dark:text-slate-300 min-w-0 truncate select-none opacity-80">
                {{ $t('mockups.chat.type_message') }}
              </div>
              <button
                class="bg-secondary hover:bg-secondary/90 text-white p-3 rounded-xl transition-all shadow-lg shadow-secondary/20 transform hover:scale-105">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 translate-x-0.5" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div> <!-- Closes Main Chat Area (Line 527) -->

          <!-- Right Panel (Hidden on screens smaller than lg to allow space) -->
          <div
            class="hidden lg:flex w-60 bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-700 flex-col flex-none">

            <div class="p-6 border-b border-slate-100 dark:border-slate-800 flex flex-col items-center">
              <div
                class="w-20 h-20 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center mb-4 border-4 border-white dark:border-slate-800 shadow-sm">
                <span class="text-2xl font-black text-[#007BFF]">MC</span>
              </div>
              <h3 class="font-black text-xl text-slate-900 dark:text-white mb-1">{{ activeChat.name }}</h3>
              <p class="text-[11px] font-medium text-slate-400 mb-0.5">{{ activeChat.email }}</p>
              <p class="text-[11px] font-medium text-slate-400">{{ activeChat.phone }}</p>

              <div class="flex gap-2 mt-6 w-full">
                <button
                  class="flex-1 py-2.5 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-[#007BFF] hover:bg-blue-100 transition-all flex justify-center border border-blue-100 dark:border-blue-800">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </button>
                <button
                  class="flex-1 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-600 dark:text-slate-300 hover:text-primary transition-colors flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </button>
              </div>
            </div>

            <div class="p-6 flex-1 overflow-y-auto no-scrollbar">
              <h4 class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">{{
                $t('mockups.chat.funnel') }}</h4>
              <div
                class="bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800 rounded-xl p-3 mb-6">
                <div class="flex items-center gap-2 mb-2">
                  <div class="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  <span class="text-xs font-bold text-[#007BFF] dark:text-blue-400">{{ $t(activeChat.statusLabel)
                    }}</span>
                </div>
                <div class="w-full bg-blue-100 dark:bg-blue-800 h-1.5 rounded-full overflow-hidden">
                  <div class="h-full w-[70%] bg-green-500 rounded-full"></div>
                </div>
              </div>

              <h4 class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">{{
                $t('mockups.chat.protocol') }}</h4>
              <div
                class="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl p-4 shadow-sm">
                <div class="flex justify-between items-center mb-1">
                  <span class="text-xs font-black text-slate-800 dark:text-white">#2F02</span>
                  <span class="text-[10px] text-green-500 font-black uppercase tracking-tighter">{{
                    $t('mockups.chat.open_status') }}</span>
                </div>
                <p class="text-[10px] text-slate-400 mb-4">{{ $t('mockups.chat.started_on') }} 12/02/2026</p>
                <div class="flex gap-2">
                  <button
                    class="flex-1 py-1.5 text-[10px] font-bold bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg text-slate-600 dark:text-slate-300 hover:border-primary hover:text-primary transition-all">{{
                      $t('mockups.chat.transfer') }}</button>
                  <button
                    class="flex-1 py-1.5 text-[10px] font-bold bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-600 dark:text-slate-300 hover:border-primary hover:text-primary transition-all">{{
                      $t('mockups.chat.finish') }}</button>
                </div>
              </div>
            </div>
          </div>
        </div> <!-- Closes v-else-if="chat" (Line 450) -->

        <div v-else-if="currentTab === 'reports'"
          class="flex-1 flex flex-col bg-slate-50 dark:bg-slate-900 overflow-hidden relative">
          <!-- Dashboard Header -->
          <div
            class="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between px-6 z-10 shrink-0">
            <h2 class="text-xl font-bold text-[#0E1F4A] dark:text-secondary">{{ $t('mockups.chat.control_panel') }}</h2>

            <div class="flex items-center gap-2">
              <div
                class="flex items-center gap-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded p-1 text-[10px]">
                <span class="text-slate-400">Data/Hora</span>
                <span class="font-medium text-slate-700 dark:text-slate-300">13/08/2025</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 text-slate-400" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div
                class="flex items-center gap-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded p-1 text-[10px]">
                <span class="text-slate-400">Data/Hora</span>
                <span class="font-medium text-slate-700 dark:text-slate-300">19/08/2025</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 text-slate-400" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <button
                class="bg-secondary/5 dark:bg-blue-900/30 text-[#0E1F4A] dark:text-blue-300 border border-blue-200 dark:border-blue-800 px-3 py-1.5 rounded text-[10px] font-bold flex items-center gap-1 hover:bg-secondary/10 transition-colors uppercase">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                {{ $t('mockups.chat.generate') }}
              </button>
            </div>
          </div>

          <!-- Dashboard Content -->
          <div class="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 no-scrollbar">
            <div class="flex items-center gap-1 text-[#0E1F4A] dark:text-secondary font-bold text-sm cursor-pointer">
              {{ $t('mockups.chat.customize_panels') }}
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            <!-- Charts Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <!-- Atendimento por fila -->
              <div
                class="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-4 space-y-4">
                <div class="flex items-center justify-between">
                  <h3 class="text-[10px] font-bold text-slate-700 dark:text-slate-300 uppercase">{{
                    $t('mockups.chat.queue_attendance') }}
                  </h3>
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </div>
                <div class="aspect-square relative flex items-center justify-center">
                  <div class="w-32 h-32 rounded-full border-[18px] border-[#3B82F6]"></div>
                  <div class="absolute inset-0 flex items-center justify-center flex-col">
                    <span class="text-xs font-bold text-slate-600 dark:text-slate-400">100.0%</span>
                  </div>
                </div>
                <div class="flex justify-center items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-[#3B82F6]"></span>
                  <span class="text-[9px] text-slate-500">{{ $t('mockups.chat.commercial') }}</span>
                </div>
              </div>

              <!-- Atendimento por usuário -->
              <div
                class="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-4 space-y-4">
                <div class="flex items-center justify-between">
                  <h3 class="text-[10px] font-bold text-slate-700 dark:text-slate-300 uppercase">{{
                    $t('mockups.chat.user_attendance') }}
                  </h3>
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </div>
                <div class="aspect-square flex items-center justify-center p-4">
                  <div class="relative w-32 h-32 rounded-full overflow-hidden">
                    <div class="absolute inset-0 bg-[#1E3A8A] border-r-2 border-white"
                      style="clip-path: polygon(50% 50%, 100% 0, 100% 100%, 50% 100%)"></div>
                    <div class="absolute inset-0 bg-[#3B82F6] opacity-80"
                      style="clip-path: polygon(50% 50%, 0 0, 100% 0, 50% 50%)"></div>
                    <div class="absolute inset-0 bg-[#60A5FA] opacity-60"
                      style="clip-path: polygon(50% 50%, 0 100%, 0 0, 50% 50%)"></div>
                    <div class="absolute inset-0 bg-[#93C5FD] opacity-40"
                      style="clip-path: polygon(50% 50%, 50% 100%, 0 100%, 50% 50%)"></div>
                  </div>
                </div>
                <div class="grid grid-cols-2 gap-2 text-[8px] text-slate-500">
                  <div class="flex items-center gap-1"><span class="w-1.5 h-1.5 rounded-full bg-[#1E3A8A]"></span>
                    Micael
                  </div>
                  <div class="flex items-center gap-1"><span class="w-1.5 h-1.5 rounded-full bg-[#3B82F6]"></span>
                    Eliana
                  </div>
                  <div class="flex items-center gap-1"><span class="w-1.5 h-1.5 rounded-full bg-[#60A5FA]"></span>
                    Roberto
                  </div>
                  <div class="flex items-center gap-1"><span class="w-1.5 h-1.5 rounded-full bg-[#93C5FD]"></span>
                    Leticia
                  </div>
                </div>
              </div>

              <!-- Atendimento por status -->
              <div
                class="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-4 space-y-4">
                <div class="flex items-center justify-between">
                  <h3 class="text-[10px] font-bold text-slate-700 dark:text-slate-300 uppercase">{{
                    $t('mockups.chat.status_attendance') }}
                  </h3>
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </div>
                <div class="h-40 flex items-end gap-3 pb-4 pt-4 border-b border-slate-100 dark:border-slate-700">
                  <div
                    class="flex-1 bg-[#2563EB] rounded-t-sm h-[80%] relative flex justify-center group pointer-events-none">
                    <span class="absolute -top-6 text-[10px] font-bold text-slate-700 dark:text-slate-300">135</span>
                  </div>
                  <div
                    class="flex-1 bg-[#2563EB] rounded-t-sm h-[10%] relative flex justify-center group pointer-events-none">
                    <span class="absolute -top-6 text-[10px] font-bold text-slate-700 dark:text-slate-300">10</span>
                  </div>
                  <div
                    class="flex-1 bg-[#2563EB] rounded-t-sm h-[2%] relative flex justify-center group pointer-events-none">
                    <span class="absolute -top-6 text-[10px] font-bold text-slate-700 dark:text-slate-300">2</span>
                  </div>
                </div>
                <div class="flex justify-between text-[8px] text-slate-500">
                  <span>{{ $t('mockups.chat.open_plural') }}</span>
                  <span>{{ $t('mockups.chat.pending') }}</span>
                  <span>{{ $t('mockups.chat.closed_plural') }}</span>
                </div>
              </div>

              <!-- Atendimento por canal -->
              <div
                class="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-4 space-y-4">
                <div class="flex items-center justify-between">
                  <h3 class="text-[10px] font-bold text-slate-700 dark:text-slate-300 uppercase">{{
                    $t('mockups.chat.channel_attendance') }}
                  </h3>
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </div>
                <div
                  class="h-40 flex items-end justify-center pb-4 pt-4 border-b border-slate-100 dark:border-slate-700">
                  <div
                    class="w-[70%] bg-[#2563EB] rounded-t-sm h-[85%] relative flex justify-center group pointer-events-none">
                    <span class="absolute -top-6 text-[10px] font-bold text-slate-700 dark:text-slate-300">147</span>
                  </div>
                </div>
                <div class="text-center text-[9px] text-slate-500">WhatsApp</div>
              </div>

              <!-- Atendimento por demanda / Gauge -->
              <div
                class="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-4 space-y-4 lg:col-span-2">
                <div class="flex items-center justify-between">
                  <h3 class="text-[10px] font-bold text-slate-700 dark:text-slate-300 uppercase">{{
                    $t('mockups.chat.demand_attendance') }}
                  </h3>
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  <div class="relative h-32 flex items-center justify-center overflow-hidden">
                    <div
                      class="w-48 h-48 rounded-full border-[20px] border-slate-100 dark:border-slate-700 absolute -bottom-24">
                    </div>
                    <div class="w-48 h-48 rounded-full border-[20px] border-[#2563EB] absolute -bottom-24"
                      style="clip-path: inset(0 20% 0 0)"></div>
                    <div
                      class="w-1 h-16 bg-[#EF4444] absolute bottom-2 origin-bottom transform rotate-[45deg] rounded-full">
                    </div>
                    <div class="w-4 h-4 rounded-full bg-slate-800 dark:bg-white absolute bottom-[-4px]"></div>
                  </div>
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

const currentTab = ref('chat');
const activeChatId = ref(2);
const currentAudio = ref(null);

const chats = ref([
  {
    id: 2,
    name: 'Maria Costa',
    avatar: 'https://ui-avatars.com/api/?name=Maria+Costa&background=EBF4FF&color=7F9CF5',
    tag: '#19401 • Suporte',
    lastTime: '10:15',
    preview: 'Qual o valor do frete?',
    email: 'maria.costa@email.com',
    phone: '+55 21 98888-8888',
    statusLabel: 'mockups.chat.closing',
    statusColorClass: 'bg-green-500',
    messages: [
      { sender: 'client', text: 'Boa tarde! Vocês tem essa camisa na cor azul?', time: '10:12' },
      { sender: 'ai', text: 'Olá Maria! Temos sim. Olha só como ela é linda:', time: '10:12' },
      { sender: 'ai', image: '/images/camisa-exemplo.jpeg', time: '10:12' },
      { sender: 'client', text: 'Amei! Vou querer 2 unidades G.', time: '10:14' },
      { sender: 'ai', text: 'Excelente escolha! Já separei aqui. Confira o resumo do seu pedido:', time: '10:15' },
      {
        sender: 'ai',
        time: '10:15',
        cartData: {
          name: 'Camisa Polo Premium',
          qtd: 2,
          color: 'Azul Marinho',
          subtotal: '299,80',
          image: '/images/camisa-exemplo.jpeg'
        }
      },
      { sender: 'client', text: 'Perfeito, pode fechar!', time: '10:16' },
      { sender: 'ai', text: 'Pedido finalizado com sucesso! 🎉\nAcabamos de gerar o seu link de pagamento seguro via Asaas.', time: '10:16' }
    ]
  },
  {
    id: 1,
    name: 'João Maurício',
    avatar: 'https://ui-avatars.com/api/?name=João+Maurício&background=random',
    tag: '#21223 • Comercial',
    lastTime: '09:45',
    preview: 'Fechado! Pode enviar.',
    email: 'joao.mauricio@exemplo.com',
    phone: '+55 11 99999-9999',
    statusLabel: 'mockups.chat.negotiation',
    statusColorClass: 'bg-secondary/50',
    messages: [
      { sender: 'client', audio: '/audio/joao-camisa.m4a', time: '09:40' },
      { sender: 'ai', audio: '/audio/fernanda-camisa.m4a', time: '09:41' },
      { sender: 'ai', text: 'Separei essa opção que combina perfeitamente com o que você pediu: Camisa Linho Premium Bege. O que acha?', time: '09:41' },
      { sender: 'ai', image: '/images/camisa-pai.jpeg', time: '09:41' },
      { sender: 'client', text: 'Gostei muito dessa! O caimento parece ótimo.', time: '09:43' },
      { sender: 'ai', text: 'É excelente! Temos no tamanho G que você costuma usar. Posso confirmar o pedido?', time: '09:44' },
      { sender: 'client', text: 'Pode sim, vou querer.', time: '09:45' },
      {
        sender: 'ai',
        time: '09:45',
        cartData: {
          name: 'Camisa Linho Premium',
          qtd: 1,
          color: 'Bege',
          subtotal: '349,90',
          image: '/images/camisa-pai.jpeg'
        }
      }
    ]
  },
  {
    id: 3,
    name: 'Pedro Santos',
    avatar: 'https://ui-avatars.com/api/?name=Pedro+Santos&background=FEF3C7&color=D97706',
    tag: '#8080 • Logística',
    lastTime: '08:00',
    preview: 'Obrigado pela agilidade!',
    email: 'pedro.santos@log.com',
    phone: '+55 41 97777-7777',
    statusLabel: 'mockups.chat.delivered',
    statusColorClass: 'bg-orange-500',
    messages: [
      { sender: 'client', text: 'Bom dia, meu pedido já saiu para entrega?', time: '07:55' },
      { sender: 'ai', text: 'Bom dia Pedro! Sim, saiu hoje às 06:30. A previsão é chegar até o meio-dia.', time: '07:56' },
      { sender: 'client', text: 'Maravilha! Obrigado pela agilidade!', time: '08:00' }
    ]
  }
]);

const kanbanColumns = ref([
  { id: 'lead', title: 'mockups.chat.leads', color: 'bg-slate-100' },
  { id: 'interesse', title: 'mockups.chat.interest', color: 'bg-secondary/5' },
  { id: 'negociacao', title: 'mockups.chat.negotiation', color: 'bg-indigo-50' },
  { id: 'fechado', title: 'mockups.chat.closed', color: 'bg-green-50' }
]);

const kanbanContacts = ref([
  { id: 101, name: 'Carlos Oliveira', stage: 'lead', value: 'R$ 1.200', time: '2h atrás' },
  { id: 102, name: 'Ana Beatriz', stage: 'interesse', value: 'R$ 2.500', time: '1d atrás' },
  { id: 103, name: 'Marcos Silva', stage: 'interesse', value: 'R$ 800', time: '5h atrás' },
  { id: 104, name: 'Juliana Lima', stage: 'negociacao', value: 'R$ 15.000', time: '3d atrás' },
  { id: 105, name: 'Roberto Santos', stage: 'fechado', value: 'R$ 5.400', time: '2d atrás' }
]);

const activeChat = computed(() => {
  return chats.value.find(c => c.id === activeChatId.value) || chats.value[0];
});

function toggleAudio(src) {
  const audio = new Audio(src);
  if (currentAudio.value === src) {
    // rudimentary pause/stop logic simulation for the mockup state
    currentAudio.value = null;
  } else {
    currentAudio.value = src;
    audio.play().catch(e => console.log('Audio play mocked/prevented', e));
    // In a real app we would track the audio instance reference to pause it
    setTimeout(() => { currentAudio.value = null }, 5000); // Reset state after fake duration
  }
}
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

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-15px);
  }
}

@keyframes float-medium {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }
}

@keyframes float-fast {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-7px);
  }
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
