<template>
  <header
    class="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
    <div class="container mx-auto px-4 h-20 flex items-center justify-between">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-2 group">
        <NuxtImg src="/images/logo-black.png" alt="Promp" class="h-8 w-auto dark:hidden" quality="100" />
        <NuxtImg src="/images/logo-white.png" alt="Promp" class="h-8 w-auto hidden dark:block" quality="100" />
      </NuxtLink>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center gap-8">
        <a href="#funcionalidades" class="text-sm font-medium hover:text-primary transition-colors">{{
          $t('header.features') }}</a>
        <a href="#beneficios" class="text-sm font-medium hover:text-primary transition-colors">{{ $t('header.benefits')
        }}</a>
        <a href="#planos" class="text-sm font-medium hover:text-primary transition-colors">{{ $t('header.plans') }}</a>

        <!-- Language Switcher -->
        <LanguageSwitcher />

        <!-- Theme Toggle -->
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

        <!-- Actions -->
        <div class="flex items-center gap-4">
          <a href="https://app.promp.com.br/register"
            class="text-sm font-bold text-slate-700 dark:text-white hover:text-primary transition-colors">
            {{ $t('header.register') }}
          </a>
          <a href="https://app.promp.com.br/login"
            class="px-5 py-2.5 rounded-xl bg-primary hover:bg-red-600 text-white transition-all text-sm font-bold shadow-lg shadow-primary/20">
            {{ $t('header.login') }}
          </a>
        </div>
      </nav>

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
        <button class="p-2">
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
