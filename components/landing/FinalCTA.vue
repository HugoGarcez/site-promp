<template>
  <section class="py-20 md:py-28 bg-gradient-to-br from-primary via-red-600 to-slate-950 text-white relative overflow-hidden">
    <!-- Decorative background elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      <div class="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      <div class="absolute -bottom-24 -right-24 w-96 h-96 bg-black rounded-full blur-3xl"></div>
    </div>

    <div class="container mx-auto px-4 relative z-10 text-center max-w-4xl mx-auto">
      
      <!-- Headline -->
      <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
        {{ title }}
      </h2>

      <!-- Subtitle -->
      <p class="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
        {{ subtitle }}
      </p>

      <!-- Buttons -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 w-full max-w-md mx-auto">
        <a 
          :href="ctaLink" 
          class="inline-flex items-center justify-center px-8 py-4 text-base font-extrabold text-slate-900 bg-white hover:bg-slate-100 rounded-2xl transition-all duration-300 shadow-2xl hover:-translate-y-1 w-full sm:w-auto text-center"
        >
          🚀 {{ ctaText }}
        </a>
        <a 
          :href="whatsappLink" 
          target="_blank"
          class="inline-flex items-center justify-center gap-2.5 text-white hover:text-white/90 transition-colors duration-300 text-sm font-medium py-3 px-5 rounded-xl hover:bg-white/10"
        >
          <!-- Official WhatsApp Icon -->
          <svg class="w-6 h-6 shrink-0" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16 3C8.82 3 3 8.82 3 16c0 2.47.69 4.87 2 6.95L3 29l6.23-1.95A12.93 12.93 0 0016 29c7.18 0 13-5.82 13-13S23.18 3 16 3z" fill="#25D366"/>
            <path d="M22.5 19.3c-.3-.15-1.78-.88-2.06-.98-.27-.1-.47-.15-.67.15-.2.3-.77.98-.95 1.18-.18.2-.36.22-.66.07-1.68-.84-2.88-1.66-3.97-3.49-.18-.3.02-.28.75-.85.1-.1.2-.23.3-.35.1-.12.14-.2.21-.35.07-.15.03-.28-.02-.43-.05-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.09 4.49 1.95.84 2.72.92 3.7.77.6-.09 1.78-.73 2.03-1.43.25-.7.25-1.31.18-1.43-.07-.13-.27-.2-.57-.35z" fill="#FFFFFF"/>
          </svg>
          <span>{{ whatsappText }}</span>
        </a>
      </div>

      <!-- Trust Badges -->
      <div class="text-xs text-white/70 font-medium tracking-wide">
        {{ guaranteeText }}
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  title: string
  subtitle: string
  ctaText?: string
  ctaLink?: string
  whatsappText?: string
  whatsappLink?: string
  guaranteeText?: string
}>(), {
  ctaText: 'Assinar Agora',
  ctaLink: 'https://app.promp.com.br/precos',
  whatsappText: 'ou fale com nosso especialista',
  whatsappLink: 'https://wa.me/5522992371763',
  guaranteeText: '✓ Sem cartão de crédito  ✓ Setup em 5 minutos  ✓ Suporte humano dedicado'
})
</script>
