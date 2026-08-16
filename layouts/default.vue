<template>
  <div class="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300 overflow-x-hidden w-full max-w-full">
    <AppHeader />
    <main class="flex-grow pt-16 overflow-x-hidden w-full max-w-full">
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>
