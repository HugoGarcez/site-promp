<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 text-white pt-24 pb-16">
    <!-- Animated Blobs -->
    <div class="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob"></div>
    <div class="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary/30 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
    <div class="absolute -bottom-32 left-1/2 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>

    <div class="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
      
      <!-- Badge -->
      <div 
        v-if="badge"
        class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8 animate-pulse"
      >
        <span class="w-2 h-2 rounded-full bg-primary"></span>
        <span class="text-sm font-medium tracking-wide text-slate-300">{{ badge }}</span>
      </div>

      <!-- Title -->
      <h1 
        class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 max-w-4xl leading-tight"
        v-html="formattedTitle"
      ></h1>

      <!-- Subtitle -->
      <p 
        class="text-lg md:text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed"
      >
        {{ subtitle }}
      </p>

      <!-- CTAs -->
      <div 
        class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 w-full max-w-md mx-auto"
      >
        <a 
          :href="ctaLink" 
          class="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-primary hover:bg-primary/90 rounded-2xl transition-all duration-300 shadow-xl shadow-primary/25 hover:-translate-y-1 w-full sm:w-auto text-center"
        >
          🚀 {{ ctaText }}
        </a>
        <a 
          :href="whatsappLink" 
          target="_blank"
          class="inline-flex items-center justify-center gap-2.5 text-slate-300 hover:text-white transition-colors duration-300 text-sm font-medium py-3 px-4 rounded-xl hover:bg-white/5"
        >
          <!-- Official WhatsApp Icon -->
          <svg class="w-6 h-6 shrink-0" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16 3C8.82 3 3 8.82 3 16c0 2.47.69 4.87 2 6.95L3 29l6.23-1.95A12.93 12.93 0 0016 29c7.18 0 13-5.82 13-13S23.18 3 16 3z" fill="#25D366"/>
            <path d="M22.5 19.3c-.3-.15-1.78-.88-2.06-.98-.27-.1-.47-.15-.67.15-.2.3-.77.98-.95 1.18-.18.2-.36.22-.66.07-1.68-.84-2.88-1.66-3.97-3.49-.18-.3.02-.28.75-.85.1-.1.2-.23.3-.35.1-.12.14-.2.21-.35.07-.15.03-.28-.02-.43-.05-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.09 4.49 1.95.84 2.72.92 3.7.77.6-.09 1.78-.73 2.03-1.43.25-.7.25-1.31.18-1.43-.07-.13-.27-.2-.57-.35z" fill="#FFFFFF"/>
          </svg>
          <span>{{ whatsappText }}</span>
        </a>
      </div>

      <!-- Social Proof -->
      <div 
        class="flex flex-col sm:flex-row items-center gap-4 mb-16 bg-white/5 border border-white/10 rounded-2xl px-6 py-3 backdrop-blur-sm"
      >
        <div class="flex -space-x-2">
          <img class="inline-block h-8 w-8 rounded-full ring-2 ring-slate-900 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="Avatar" />
          <img class="inline-block h-8 w-8 rounded-full ring-2 ring-slate-900 object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" alt="Avatar" />
          <img class="inline-block h-8 w-8 rounded-full ring-2 ring-slate-900 object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80" alt="Avatar" />
          <img class="inline-block h-8 w-8 rounded-full ring-2 ring-slate-900 object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80" alt="Avatar" />
        </div>
        <div class="text-left text-sm">
          <div class="flex items-center gap-1 text-yellow-400">
            <span>★★★★★</span>
            <span class="text-white font-bold ml-1">4.9/5</span>
          </div>
          <p class="text-slate-400 text-xs">+500 empresas confiam na Promp</p>
        </div>
      </div>

      <!-- Stats Bar -->
      <div 
        v-if="stats && stats.length"
        class="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl border-t border-slate-800/80 pt-10"
      >
        <div 
          v-for="(stat, index) in stats" 
          :key="index"
          class="flex flex-col items-center"
        >
          <span class="text-3xl sm:text-4xl font-extrabold text-primary mb-1">{{ stat.value }}</span>
          <span class="text-sm text-slate-400">{{ stat.label }}</span>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Stat {
  value: string
  label: string
}

const props = withDefaults(defineProps<{
  badge?: string
  title: string
  highlight?: string
  subtitle: string
  ctaText?: string
  ctaLink?: string
  whatsappText?: string
  whatsappLink?: string
  stats?: Stat[]
}>(), {
  ctaText: 'Assinar Agora',
  ctaLink: 'https://app.promp.com.br/precos',
  whatsappText: 'ou fale com nosso especialista',
  whatsappLink: 'https://wa.me/5522992371763',
})

const formattedTitle = computed(() => {
  if (!props.highlight) return props.title
  return props.title.replace(
    props.highlight, 
    `<span class="text-primary">${props.highlight}</span>`
  )
})
</script>

<style scoped>
@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}
.animate-blob {
  animation: blob 7s infinite;
}
.animation-delay-2000 {
  animation-delay: 2s;
}
.animation-delay-4000 {
  animation-delay: 4s;
}
</style>
