<script setup>
const { locale, locales, setLocale } = useI18n()

const availableLocales = computed(() => {
    return (locales.value).filter(i => i.code !== locale.value)
})

const currentLocaleName = computed(() => {
    return (locales.value).find(i => i.code === locale.value)?.name
})

const isOpen = ref(false)
</script>

<template>
    <div class="relative">
        <button @click="isOpen = !isOpen"
            class="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-sm font-medium text-slate-700 dark:text-slate-200">
            <span class="uppercase">{{ locale.split('-')[0] }}</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="m6 9 6 6 6-6" />
            </svg>
        </button>

        <div v-if="isOpen" @click.outside="isOpen = false"
            class="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 py-1 z-50 overflow-hidden">
            <button v-for="loc in locales" :key="loc.code" @click="setLocale(loc.code); isOpen = false"
                class="w-full text-left px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors flex items-center justify-between group"
                :class="locale === loc.code ? 'text-primary font-bold bg-primary/5' : 'text-slate-600 dark:text-slate-300'">
                <span>{{ loc.name }}</span>
                <svg v-if="locale === loc.code" class="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                </svg>
            </button>
        </div>
    </div>
</template>
