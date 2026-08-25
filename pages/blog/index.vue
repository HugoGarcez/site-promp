<template>
  <div class="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300 py-12 lg:py-16">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      
      <!-- Breadcrumb -->
      <nav class="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-8" aria-label="Breadcrumb">
        <NuxtLink to="/" class="hover:text-primary transition-colors flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Início
        </NuxtLink>
        <span>/</span>
        <span class="text-slate-900 dark:text-white font-medium">Blog</span>
      </nav>

      <!-- Hero Header -->
      <div class="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-4">
          <span class="w-2 h-2 rounded-full bg-primary animate-ping"></span>
          Conteúdo & Inteligência de Mercado
        </div>
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
          Blog da <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">Promp</span>
        </h1>
        <p class="text-base sm:text-lg text-slate-600 dark:text-slate-300">
          Estratégias práticas, tendências de IA conversacional e tutoriais para transformar seu WhatsApp em uma máquina de vendas e atendimento 24/7.
        </p>
      </div>

      <!-- Search & Filters -->
      <div class="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200 dark:border-slate-800">
        <!-- Search Input -->
        <div class="relative w-full md:w-80">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Buscar artigos ou temas..."
            class="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/80 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
          />
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-slate-400 absolute left-3.5 top-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        <!-- Categories Filters -->
        <div class="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
          <button
            v-for="cat in availableCategories"
            :key="cat"
            @click="selectedCategory = cat"
            :class="[
              selectedCategory === cat
                ? 'bg-primary text-white shadow-md shadow-primary/20'
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
            ]"
            class="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap border border-slate-200 dark:border-slate-700/60"
          >
            {{ cat }}
          </button>
        </div>
      </div>

      <!-- Featured Post (se houver e estiver na aba Todos e sem busca) -->
      <div v-if="featuredArticle && selectedCategory === 'Todos' && !searchQuery" class="mb-12">
        <div class="group relative bg-gradient-to-br from-slate-900 to-secondary text-white rounded-3xl overflow-hidden shadow-2xl border border-slate-800 hover:border-primary/50 transition-all duration-300">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center p-6 sm:p-8 lg:p-10">
            <div class="lg:col-span-7 space-y-4">
              <div class="flex items-center gap-3">
                <span class="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary text-white">
                  ★ Artigo em Destaque
                </span>
                <span class="text-xs text-slate-300">{{ featuredArticle.category }}</span>
                <span class="text-xs text-slate-400">• {{ featuredArticle.readingTime }} de leitura</span>
              </div>
              <h2 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight group-hover:text-primary transition-colors">
                <NuxtLink :to="'/blog/' + featuredArticle.slug">
                  {{ featuredArticle.title }}
                </NuxtLink>
              </h2>
              <p class="text-slate-300 text-sm sm:text-base leading-relaxed line-clamp-3">
                {{ featuredArticle.description }}
              </p>
              <div class="flex items-center justify-between pt-4">
                <div class="flex items-center gap-3">
                  <img
                    :src="featuredArticle.authorAvatar || '/images/authors/leticia-vasconcelos.jpg'"
                    :alt="featuredArticle.author || 'Letícia Vasconcelos'"
                    class="w-10 h-10 rounded-full object-cover border border-white/20 shadow-md"
                    width="40"
                    height="40"
                  />
                  <div>
                    <div class="text-xs font-bold text-white">{{ featuredArticle.author || 'Letícia Vasconcelos' }}</div>
                    <div class="text-[11px] text-slate-400">{{ formatDate(featuredArticle.date) }}</div>
                  </div>
                </div>
                <NuxtLink
                  :to="'/blog/' + featuredArticle.slug"
                  class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary hover:bg-red-600 text-white font-bold text-sm transition-colors shadow-lg shadow-primary/30"
                >
                  Ler Artigo Completo
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </NuxtLink>
              </div>
            </div>
            <div class="lg:col-span-5">
              <NuxtLink :to="'/blog/' + featuredArticle.slug" class="block overflow-hidden rounded-2xl">
                <img
                  :src="featuredArticle.coverImage"
                  :alt="featuredArticle.title"
                  class="w-full h-64 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-500 rounded-2xl"
                  loading="lazy"
                />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <!-- Articles Grid -->
      <div v-if="filteredArticles.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article
          v-for="article in filteredArticles"
          :key="article.slug"
          class="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700/80 hover:border-primary dark:hover:border-primary/80 transition-all duration-300 flex flex-col shadow-sm hover:shadow-xl hover:-translate-y-1"
        >
          <!-- Cover Image -->
          <NuxtLink :to="'/blog/' + article.slug" class="block relative aspect-video overflow-hidden bg-slate-100 dark:bg-slate-900">
            <img
              :src="article.coverImage"
              :alt="article.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <span class="absolute top-3 left-3 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider bg-slate-900/80 backdrop-blur-md text-white border border-slate-700">
              {{ article.category }}
            </span>
          </NuxtLink>

          <!-- Content -->
          <div class="p-6 flex flex-col flex-grow justify-between">
            <div>
              <div class="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-3">
                <time :datetime="article.date">{{ formatDate(article.date) }}</time>
                <span>•</span>
                <span>{{ article.readingTime }} de leitura</span>
              </div>
              <h3 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors line-clamp-2 mb-2 leading-snug">
                <NuxtLink :to="'/blog/' + article.slug">
                  {{ article.title }}
                </NuxtLink>
              </h3>
              <p class="text-slate-600 dark:text-slate-300 text-sm line-clamp-3 mb-4 leading-relaxed">
                {{ article.description }}
              </p>
            </div>

            <!-- Footer of card -->
            <div class="pt-4 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between">
              <div class="flex items-center gap-2">
                <img
                  :src="article.authorAvatar || '/images/authors/leticia-vasconcelos.jpg'"
                  :alt="article.author || 'Letícia Vasconcelos'"
                  class="w-7 h-7 rounded-full object-cover border border-slate-200 dark:border-slate-700"
                  width="28"
                  height="28"
                />
                <span class="text-xs font-semibold text-slate-700 dark:text-slate-300">{{ article.author || 'Letícia Vasconcelos' }}</span>
              </div>
              <NuxtLink
                :to="'/blog/' + article.slug"
                class="text-xs font-bold text-primary hover:text-red-600 flex items-center gap-1 group-hover:translate-x-1 transition-all"
              >
                Ler mais ➔
              </NuxtLink>
            </div>
          </div>
        </article>
      </div>

      <!-- Empty State -->
      <div v-else class="text-center py-16 bg-white dark:bg-slate-800 rounded-3xl border border-dashed border-slate-300 dark:border-slate-700 p-8">
        <div class="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">Nenhum artigo encontrado</h3>
        <p class="text-sm text-slate-500 dark:text-slate-400 mb-6">Tente ajustar seus termos de busca ou remover os filtros de categoria.</p>
        <button
          @click="selectedCategory = 'Todos'; searchQuery = ''"
          class="px-5 py-2.5 rounded-xl bg-primary text-white font-bold text-sm hover:bg-red-600 transition-colors"
        >
          Limpar Filtros
        </button>
      </div>

      <!-- Bottom Conversion Banner -->
      <div class="mt-16 lg:mt-24 rounded-3xl bg-gradient-to-r from-secondary via-slate-900 to-secondary text-white p-8 sm:p-12 relative overflow-hidden border border-slate-800 shadow-2xl">
        <div class="relative z-10 max-w-3xl">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-conversion-green/20 text-conversion-green text-xs font-bold mb-4 border border-conversion-green/30">
            ⚡ Automação Inteligente de Vendas
          </div>
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4">
            Pronto para transformar seu WhatsApp em uma máquina de conversão?
          </h2>
          <p class="text-slate-300 text-sm sm:text-base mb-8">
            Junte-se a centenas de empresas que utilizam a Promp para automatizar atendimentos 24/7, enviar áudios humanizados e qualificar leads em escala.
          </p>
          <div class="flex flex-wrap gap-4">
            <a
              href="https://app.promp.com.br/signup"
              target="_blank"
              class="px-6 py-3.5 rounded-xl bg-primary hover:bg-red-600 text-white font-bold text-sm shadow-xl shadow-primary/30 transition-all"
            >
              Criar Conta Gratuita
            </a>
            <a
              href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20ver%20uma%20demonstra%C3%A7%C3%A3o%20da%20Promp"
              target="_blank"
              class="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all flex items-center gap-2"
            >
              Falar com Especialista
            </a>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// SEO Head
useHead({
  title: 'Blog da Promp - Inteligência Artificial, Vendas & Atendimento Omnichannel',
  meta: [
    {
      name: 'description',
      content: 'Aprenda como escalar vendas no WhatsApp, automatizar atendimento 24/7 com IA humanizada, integrar CRMs e qualificar leads com o Blog da Promp.'
    },
    { property: 'og:title', content: 'Blog da Promp - Inteligência Artificial, Vendas & Atendimento Omnichannel' },
    { property: 'og:description', content: 'Artigos, estratégias práticas e tendências sobre IA conversacional e WhatsApp Marketing.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://promp.com.br/blog' }
  ]
})

// Buscar artigos da API
const { data, pending } = await useFetch('/api/blog')

const articles = computed(() => data.value?.articles || [])
const categories = computed(() => data.value?.categories || [])

const searchQuery = ref('')
const selectedCategory = ref('Todos')

const availableCategories = computed(() => {
  const list = ['Todos']
  categories.value.forEach((c: { name: string; count: number }) => {
    if (!list.includes(c.name)) list.push(c.name)
  })
  return list
})

const featuredArticle = computed(() => {
  return articles.value.find((a: { featured?: boolean }) => a.featured) || articles.value[0]
})

const filteredArticles = computed(() => {
  let list = articles.value

  if (selectedCategory.value !== 'Todos') {
    list = list.filter((a: { category: string }) => a.category.toLowerCase() === selectedCategory.value.toLowerCase())
  }

  if (searchQuery.value.trim()) {
    const term = searchQuery.value.toLowerCase().trim()
    list = list.filter((a: { title: string; description: string; tags?: string[] }) =>
      a.title.toLowerCase().includes(term) ||
      a.description.toLowerCase().includes(term) ||
      (a.tags || []).some(t => t.toLowerCase().includes(term))
    )
  }

  if (selectedCategory.value === 'Todos' && !searchQuery.value && featuredArticle.value) {
    list = list.filter((a: { slug: string }) => a.slug !== featuredArticle.value.slug)
  }

  return list
})

function formatDate(dateStr: string) {
  if (!dateStr) return ''
  const [year, month, day] = dateStr.split('-')
  if (!year || !month || !day) return dateStr
  const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  })
}
</script>
