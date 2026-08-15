<template>
  <section class="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
    <div class="container mx-auto px-4">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest rounded-full mb-4">
          Tire Suas Dúvidas
        </span>
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
          {{ title }}
        </h2>
        <p v-if="subtitle" class="text-lg text-slate-600 dark:text-slate-400">
          {{ subtitle }}
        </p>
      </div>

      <!-- FAQ Accordion -->
      <div class="max-w-3xl mx-auto space-y-4">
        <div 
          v-for="(faq, index) in faqs" 
          :key="index"
          class="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden bg-slate-50/50 dark:bg-slate-900/50 transition-all duration-200"
          :class="{ 'border-primary/50 dark:border-primary/50 ring-1 ring-primary/20': openIndex === index }"
        >
          <button 
            type="button"
            class="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 dark:text-white text-base md:text-lg hover:text-primary transition-colors focus:outline-none"
            @click="toggle(index)"
          >
            <span>{{ faq.question }}</span>
            <span 
              class="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 text-lg shrink-0 transition-transform duration-300"
              :class="{ 'rotate-180 bg-primary text-white': openIndex === index }"
            >
              {{ openIndex === index ? '−' : '+' }}
            </span>
          </button>

          <div 
            v-show="openIndex === index"
            class="px-6 pb-6 pt-2 text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed border-t border-slate-200/50 dark:border-slate-800/50"
          >
            {{ faq.answer }}
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface FAQItem {
  question: string
  answer: string
}

withDefaults(defineProps<{
  title?: string
  subtitle?: string
  faqs: FAQItem[]
}>(), {
  title: 'Perguntas Frequentes',
})

const openIndex = ref<number | null>(0)

const toggle = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index
}
</script>
