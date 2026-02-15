<script setup>
const { locale, locales, setLocale } = useI18n()

const isOpen = ref(false)

const getFlag = (code) => {
    const map = {
        'pt-BR': '🇧🇷',
        'en-US': '🇺🇸',
        'es-ES': '🇪🇸'
    }
    return map[code] || '🌐'
}
</script>

<template>
    <div class="relative">
        <button @click="isOpen = !isOpen"
            class="flex items-center gap-1.5 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-lg"
            :aria-label="locale">
            <span>{{ getFlag(locale) }}</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 text-slate-400" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="m6 9 6 6 6-6" />
            </svg>
        </button>

        <div v-if="isOpen" @click.outside="isOpen = false"
            class="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 py-1 z-50 overflow-hidden">
            <button v-for="loc in locales" :key="loc.code" @click="setLocale(loc.code); isOpen = false"
                class="w-full text-left px-4 py-3 text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors flex items-center justify-between group"
                :class="locale === loc.code ? 'bg-primary/5' : ''">
                <span class="flex items-center gap-3">
                    <span class="text-lg">{{ getFlag(loc.code) }}</span>
                    <span
                        :class="locale === loc.code ? 'font-bold text-primary' : 'text-slate-600 dark:text-slate-300'">
                        {{ loc.name }}
                    </span>
                </span>
                <svg v-if="locale === loc.code" class="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                </svg>
            </button>
        </div>
    </div>
</template>
