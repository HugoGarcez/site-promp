<template>
  <section class="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
    <div class="container mx-auto px-4">
      
      <div class="text-center max-w-3xl mx-auto mb-20">
        <h2 
          class="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4"
        >
          {{ title }}
        </h2>
        <p 
          v-if="subtitle"
          class="text-lg text-slate-600 dark:text-slate-400"
        >
          {{ subtitle }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
        <div 
          v-for="(step, index) in steps" 
          :key="index"
          class="relative flex flex-col items-center text-center group"
        >
          <!-- Circle with Number -->
          <div 
            :class="getStepColorClass(index)"
            class="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-bold text-white mb-8 shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
          >
            {{ step.icon || step.number }}
          </div>

          <span class="text-xs font-bold uppercase tracking-widest text-primary mb-2">Passo 0{{ index + 1 }}</span>

          <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
            {{ step.title }}
          </h3>

          <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-sm">
            {{ step.description }}
          </p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
interface Step {
  number: string | number
  title: string
  description: string
  icon?: string
}

withDefaults(defineProps<{
  title?: string
  subtitle?: string
  steps: Step[]
}>(), {
  title: 'Como funciona?',
})

const getStepColorClass = (index: number) => {
  switch (index) {
    case 0:
      return 'bg-gradient-to-br from-primary to-orange-600 shadow-primary/20'
    case 1:
      return 'bg-gradient-to-br from-secondary to-blue-700 shadow-secondary/20'
    case 2:
      return 'bg-gradient-to-br from-green-500 to-emerald-600 shadow-green-500/20'
    default:
      return 'bg-gradient-to-br from-primary to-orange-600 shadow-primary/20'
  }
}
</script>
