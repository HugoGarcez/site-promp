<script setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { tm, t } = useI18n();
const openIndex = ref(null);

const faqs = computed(() => tm('faq.items'));

const toggle = (index) => {
    openIndex.value = openIndex.value === index ? null : index;
};
</script>

<template>
    <section class="py-24 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800" id="faq">
        <div class="container mx-auto px-4 max-w-4xl">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                    {{ t('faq.title') }}
                </h2>
                <p class="text-lg text-slate-600 dark:text-slate-400">
                    {{ t('faq.subtitle') }}
                </p>
            </div>

            <div class="space-y-4">
                <div v-for="(faq, index) in faqs" :key="index"
                    class="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden transition-all duration-300"
                    :class="{ 'bg-slate-50 dark:bg-slate-800/50 border-primary/20': openIndex === index, 'bg-white dark:bg-slate-900': openIndex !== index }">
                    <button @click="toggle(index)"
                        class="w-full flex items-center justify-between p-6 text-left transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/80">
                        <span class="text-lg font-bold text-slate-900 dark:text-white pr-8">{{ faq.question }}</span>
                        <span class="flex-shrink-0 transition-transform duration-300"
                            :class="{ 'rotate-180': openIndex === index }">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-slate-400" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </span>
                    </button>

                    <div v-show="openIndex === index"
                        class="px-6 pb-6 text-slate-600 dark:text-slate-300 leading-relaxed text-base border-t border-slate-100 dark:border-slate-700/50 pt-4 animate-fade-in-down">
                        <div
                            v-html="faq.answer.replace(/\*\*(.*?)\*\*/g, '<strong class=\'text-primary dark:text-white\'>$1</strong>')">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.animate-fade-in-down {
    animation: fadeInDown 0.3s ease-out forwards;
}

@keyframes fadeInDown {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
