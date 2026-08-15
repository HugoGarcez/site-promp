<template>
  <section class="py-24 bg-slate-900 dark:bg-slate-950 text-white transition-colors duration-300 relative overflow-hidden">
    <div class="container mx-auto px-4 relative z-10">
      
      <!-- Title -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="inline-block px-4 py-1 bg-white/10 text-primary-300 text-xs font-bold uppercase tracking-widest rounded-full mb-4">
          Prova Social
        </span>
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
          {{ title }}
        </h2>
        <p class="text-slate-400 text-base">
          Histórias reais de quem transformou o atendimento e escalou resultados.
        </p>
      </div>

      <!-- Testimonials Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
        <div 
          v-for="(t, index) in testimonials" 
          :key="index"
          class="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm flex flex-col justify-between hover:border-white/20 transition-all duration-300 shadow-xl"
        >
          <div>
            <!-- Stars -->
            <div class="flex items-center gap-1 text-yellow-400 mb-6">
              <span v-for="star in (t.stars || 5)" :key="star">★</span>
            </div>
            
            <!-- Quote Text -->
            <p class="text-slate-300 italic mb-8 leading-relaxed text-base">
              "{{ t.text }}"
            </p>
          </div>

          <!-- Author Info -->
          <div class="flex items-center gap-4 border-t border-white/10 pt-6">
            <img 
              :src="t.avatar" 
              :alt="t.name"
              class="w-12 h-12 rounded-full object-cover ring-2 ring-primary/40 shrink-0" 
            />
            <div>
              <h4 class="font-bold text-white text-base">{{ t.name }}</h4>
              <p class="text-slate-400 text-xs">{{ t.role }} · <span class="text-primary font-medium">{{ t.company }}</span></p>
            </div>
          </div>
        </div>
      </div>

      <!-- Badges Section -->
      <div v-if="showBadges" class="border-t border-white/10 pt-12 text-center">
        <p class="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-8">
          Tecnologia Homologada e Parcerias Oficiais
        </p>
        <div class="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-80 hover:opacity-100 transition-opacity">
          <img src="/images/promp-meta-partner.png" alt="Meta Tech Provider" class="h-10 md:h-12 w-auto object-contain brightness-0 invert" />
          <img src="/images/promp-whatsapp-partner.png" alt="WhatsApp Provider" class="h-10 md:h-12 w-auto object-contain brightness-0 invert" />
          <img src="/images/meta-provider-2026.png" alt="Meta Provider 2026" class="h-10 md:h-12 w-auto object-contain brightness-0 invert" />
          <img src="/images/whatsapp-provider-2026.png" alt="WhatsApp Provider 2026" class="h-10 md:h-12 w-auto object-contain brightness-0 invert" />
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
interface Testimonial {
  name: string
  role: string
  company: string
  text: string
  stars?: number
  avatar: string
}

withDefaults(defineProps<{
  title?: string
  testimonials: Testimonial[]
  showBadges?: boolean
}>(), {
  title: 'O que nossos clientes dizem',
  showBadges: true
})
</script>
