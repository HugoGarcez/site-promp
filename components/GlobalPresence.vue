<script setup>
const { t } = useI18n()
</script>

<template>
    <section class="py-12 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div class="container mx-auto px-4 text-center">
            <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                {{ t('global_presence.title') }}
            </h2>
            <p class="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
                {{ t('global_presence.subtitle') }}
            </p>

            <div class="flex flex-wrap justify-center gap-4">
                <div v-for="lang in ['🇧🇷 PT-BR', '🇺🇸 EN-US', '🇪🇸 ES-ES', '🇸🇦 AR-AR', '🇩🇪 DE-DE', '🇮🇹 IT-IT', '🇫🇷 FR-FR', '🇯🇵 JA-JP', '🇨🇳 ZH-CN']"
                    :key="lang"
                    class="px-4 py-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-700 dark:text-slate-300 hover:scale-105 transition-transform cursor-default">
                    {{ lang }}
                </div>
            </div>
        </div>
    </section>
</template>
