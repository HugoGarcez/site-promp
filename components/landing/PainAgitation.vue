<template>
  <section class="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
    <div class="container mx-auto px-4">
      
      <!-- Header -->
      <div class="max-w-3xl mx-auto text-center mb-16">
        <h2 
          class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4"
        >
          {{ sectionTitle }}
        </h2>
        <p 
          class="text-lg text-slate-600 dark:text-slate-400"
        >
          {{ sectionSubtitle }}
        </p>
      </div>

      <!-- Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div 
          v-for="(card, index) in cards" 
          :key="index"
          class="group bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 hover:border-red-500/50 dark:hover:border-red-500/50 hover:shadow-xl hover:shadow-red-500/5 transition-all duration-300 relative overflow-hidden"
        >
          <!-- Subtle top border accent on hover -->
          <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div class="text-4xl mb-6 bg-white dark:bg-slate-800 w-16 h-16 rounded-xl flex items-center justify-center shadow-sm">
            {{ card.emoji }}
          </div>
          
          <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-red-500 dark:group-hover:text-red-400 transition-colors">
            {{ card.title }}
          </h3>
          
          <p class="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed text-sm">
            {{ card.description }}
          </p>
          
          <div v-if="card.stat" class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 text-xs font-semibold">
            <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"></path></svg>
            {{ card.stat }}
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
interface PainCard {
  emoji: string
  title: string
  description: string
  stat?: string
}

defineProps<{
  sectionTitle: string
  sectionSubtitle: string
  cards: PainCard[]
}>()
</script>
