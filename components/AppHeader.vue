<template>
  <header
    class="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
    <div class="container mx-auto px-4 h-20 flex items-center justify-between">
      <!-- Left side: Logo -->
      <div class="flex-1 flex justify-start">
        <NuxtLink to="/" class="flex items-center gap-2 group">
          <NuxtImg src="/images/logo-fundo-claro.svg" alt="Promp" class="h-8 w-auto dark:hidden" />
          <NuxtImg src="/images/logo-fundo-escuro.svg" alt="Promp" class="h-8 w-auto hidden dark:block" />
        </NuxtLink>
      </div>

      <!-- Center: Menu -->
      <nav class="hidden md:flex items-center gap-8 justify-center">
        <a href="#ia" class="text-sm font-medium hover:text-primary transition-colors whitespace-nowrap">{{
          $t('header.ai') }}</a>
        <a href="#informacoes" class="text-sm font-medium hover:text-primary transition-colors whitespace-nowrap">{{
          $t('header.info') }}</a>
        <a href="#funcionalidades" class="text-sm font-medium hover:text-primary transition-colors whitespace-nowrap">{{
          $t('header.features') }}</a>
        <a href="#precos" class="text-sm font-medium hover:text-primary transition-colors whitespace-nowrap">{{
          $t('header.pricing') }}</a>
        <a href="#faq" class="text-sm font-medium hover:text-primary transition-colors whitespace-nowrap">{{
          $t('header.faq') }}</a>
      </nav>

      <!-- Right Side: Switchers & Actions -->
      <div class="flex-1 hidden md:flex items-center justify-end gap-6 text-sm">
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
          <a href="https://app.promp.com.br/#/signup"
            class="font-bold text-slate-700 dark:text-white hover:text-primary transition-colors">
            {{ $t('header.register') }}
          </a>
          <a href="https://app.promp.com.br/#/login"
            class="px-5 py-2.5 rounded-xl bg-primary hover:bg-red-600 text-white transition-all font-bold shadow-lg shadow-primary/20">
            {{ $t('header.login') }}
          </a>
        </div>
      </div>

      <!-- Mobile Menu Button -->
      <div class="md:hidden flex items-center gap-4">
        <LanguageSwitcher />
        <button @click="toggleTheme"
          class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors">
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
        <button class="p-2 text-slate-700 dark:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
const colorMode = useColorMode();

const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
};
</script>
