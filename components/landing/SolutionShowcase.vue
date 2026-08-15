<template>
  <section class="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300 overflow-hidden">
    <div class="container mx-auto px-4">
      
      <!-- Main Content -->
      <div class="flex flex-col lg:flex-row items-center gap-16 max-w-7xl mx-auto">
        
        <!-- Left Column: Content & Features -->
        <div class="w-full lg:w-1/2">
          <div 
            v-if="badge"
            class="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wide mb-6"
          >
            {{ badge }}
          </div>
          
          <h2 
            class="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight"
            v-html="formattedTitle"
          ></h2>
          
          <p 
            class="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed"
          >
            {{ description }}
          </p>

          <div class="space-y-6">
            <div 
              v-for="(feature, index) in features" 
              :key="index"
              class="flex items-start gap-4 group"
            >
              <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-2xl group-hover:scale-110 group-hover:shadow-primary/20 transition-all duration-300">
                {{ feature.icon }}
              </div>
              <div>
                <h4 class="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary transition-colors">
                  {{ feature.title }}
                </h4>
                <p class="text-slate-600 dark:text-slate-400 text-sm">
                  {{ feature.description }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column: Visual / Before & After -->
        <div class="w-full lg:w-1/2 relative">
          <div class="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl blur-3xl transform rotate-3 scale-105 opacity-50 dark:opacity-30 pointer-events-none"></div>
          
          <div class="relative bg-white dark:bg-slate-950 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8 overflow-hidden">
            
            <div v-if="beforeAfter" class="space-y-6">
              
              <!-- Before Box -->
              <div class="bg-red-50/50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/40 rounded-2xl p-6">
                <div class="flex items-center gap-3 mb-4">
                  <span class="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-400 flex items-center justify-center text-xs font-bold">✕</span>
                  <h4 class="font-bold text-red-950 dark:text-red-300 text-base">{{ beforeAfter.before.title }}</h4>
                </div>
                <ul class="space-y-2">
                  <li 
                    v-for="(item, idx) in beforeAfter.before.items" 
                    :key="idx"
                    class="text-xs sm:text-sm text-red-900/80 dark:text-red-300/80 flex items-start gap-2"
                  >
                    <span class="text-red-400 shrink-0">•</span>
                    {{ item }}
                  </li>
                </ul>
              </div>

              <!-- After Box -->
              <div class="bg-green-50/50 dark:bg-green-950/20 border border-green-200 dark:border-green-900/40 rounded-2xl p-6">
                <div class="flex items-center gap-3 mb-4">
                  <span class="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 flex items-center justify-center text-xs font-bold">✓</span>
                  <h4 class="font-bold text-green-950 dark:text-green-300 text-base">{{ beforeAfter.after.title }}</h4>
                </div>
                <ul class="space-y-2">
                  <li 
                    v-for="(item, idx) in beforeAfter.after.items" 
                    :key="idx"
                    class="text-xs sm:text-sm text-green-900/80 dark:text-green-300/80 flex items-start gap-2 font-medium"
                  >
                    <span class="text-green-500 shrink-0">✓</span>
                    {{ item }}
                  </li>
                </ul>
              </div>

            </div>

          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Feature {
  icon: string
  title: string
  description: string
}

interface BeforeAfterSide {
  title: string
  items: string[]
}

interface BeforeAfter {
  before: BeforeAfterSide
  after: BeforeAfterSide
}

const props = withDefaults(defineProps<{
  badge?: string
  title: string
  highlight?: string
  description: string
  features: Feature[]
  beforeAfter?: BeforeAfter
}>(), {
  badge: 'A SOLUÇÃO',
})

const formattedTitle = computed(() => {
  if (!props.highlight) return props.title
  return props.title.replace(
    props.highlight, 
    `<span class="text-primary">${props.highlight}</span>`
  )
})
</script>
