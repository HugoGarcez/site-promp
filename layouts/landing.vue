<template>
  <div class="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
    <main class="flex-grow">
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>
