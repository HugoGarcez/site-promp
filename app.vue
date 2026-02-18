<script setup lang="ts">
useHead({
  script: [
    {
      src: 'https://www.googletagmanager.com/gtag/js?id=G-T1CVFGDWDC',
      async: true
    },
    {
      innerHTML: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-T1CVFGDWDC');
      `
    }
  ]
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
