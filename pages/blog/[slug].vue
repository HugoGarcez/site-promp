<template>
  <div class="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
    
    <!-- Reading Progress Bar -->
    <div class="fixed top-0 left-0 right-0 h-1 z-50 bg-slate-200 dark:bg-slate-800">
      <div class="h-full bg-gradient-to-r from-primary to-orange-500 transition-all duration-150" :style="{ width: readingProgress + '%' }"></div>
    </div>

    <main class="py-10 sm:py-14 lg:py-16">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        <!-- Top Navigation / Breadcrumb -->
        <nav class="flex items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-8" aria-label="Breadcrumb">
          <NuxtLink to="/" class="hover:text-primary transition-colors flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Início
          </NuxtLink>
          <span>/</span>
          <NuxtLink to="/blog" class="hover:text-primary transition-colors">Blog</NuxtLink>
          <span>/</span>
          <span class="text-slate-700 dark:text-slate-300 font-medium truncate max-w-[200px] sm:max-w-xs">{{ article.category }}</span>
        </nav>

        <!-- Article Header -->
        <header class="mb-10 max-w-4xl">
          <div class="flex flex-wrap items-center gap-3 mb-4">
            <span class="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
              {{ article.category }}
            </span>
            <span class="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {{ formatDate(article.date) }}
            </span>
            <span class="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {{ article.readingTime }} de leitura
            </span>
          </div>

          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight sm:leading-tight mb-6">
            {{ article.title }}
          </h1>

          <p class="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            {{ article.description }}
          </p>

          <!-- Author Info & Share Bar -->
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4 border-y border-slate-200 dark:border-slate-800">
            <div class="flex items-center gap-3">
              <img
                :src="article.authorAvatar || '/images/authors/leticia-vasconcelos.jpg'"
                :alt="article.author || 'Letícia Vasconcelos'"
                class="w-11 h-11 rounded-full object-cover border-2 border-primary/30 shadow-md"
                width="44"
                height="44"
              />
              <div>
                <div class="text-sm font-bold text-slate-900 dark:text-white">{{ article.author || 'Letícia Vasconcelos' }}</div>
                <div class="text-xs text-slate-500 dark:text-slate-400">{{ article.authorRole || 'Especialista em IA & Estratégia Conversacional | Promp' }}</div>
              </div>
            </div>

            <!-- Share Buttons -->
            <div class="flex items-center gap-2">
              <span class="text-xs font-semibold text-slate-400 mr-1">Compartilhar:</span>
              <a
                :href="shareWhatsAppUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="p-2 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/20 transition-colors"
                title="Compartilhar no WhatsApp"
              >
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </a>
              <a
                :href="shareLinkedInUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="p-2 rounded-xl bg-blue-600/10 text-blue-600 dark:text-blue-400 hover:bg-blue-600/20 transition-colors"
                title="Compartilhar no LinkedIn"
              >
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <button
                @click="copyArticleLink"
                class="p-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
                :title="copied ? 'Link Copiado!' : 'Copiar Link'"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
          </div>
        </header>

        <!-- Cover Image -->
        <div class="mb-12 rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-950">
          <img
            :src="article.coverImage ? (article.coverImage.includes('?') ? article.coverImage : `${article.coverImage}?v=3`) : ''"
            :alt="article.coverAlt || article.title"
            class="w-full h-auto max-h-[500px] object-cover"
          />
        </div>

        <!-- 2-Column Article Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <!-- Main Content (8 cols) -->
          <div class="lg:col-span-8">
            
            <!-- Article Body -->
            <div
              ref="articleBody"
              class="prose prose-lg dark:prose-invert max-w-none
                     prose-headings:font-bold prose-headings:text-slate-900 dark:prose-headings:text-white
                     prose-h2:text-2xl sm:prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-4
                     prose-h3:text-xl sm:prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
                     prose-p:text-slate-700 dark:prose-p:text-slate-300 prose-p:leading-relaxed
                     prose-a:text-primary hover:prose-a:underline prose-a:font-semibold
                     prose-strong:text-slate-900 dark:prose-strong:text-white
                     prose-blockquote:border-l-primary prose-blockquote:bg-slate-100 dark:prose-blockquote:bg-slate-800/50 prose-blockquote:p-4 prose-blockquote:rounded-r-xl
                     prose-ul:text-slate-700 dark:prose-ul:text-slate-300
                     prose-li:my-1
                     prose-table:border prose-table:border-slate-200 dark:prose-table:border-slate-700
                     prose-th:bg-slate-100 dark:prose-th:bg-slate-800 prose-th:p-3
                     prose-td:p-3 prose-td:border-t prose-td:border-slate-200 dark:prose-td:border-slate-700"
              v-html="article.html"
            ></div>

            <!-- Mid-Article Conversion Box -->
            <div class="my-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-orange-500/10 via-primary/10 to-orange-500/10 border border-primary/30 relative overflow-hidden">
              <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div class="space-y-2">
                  <span class="text-xs font-bold uppercase tracking-wider text-primary">Automação com IA da Promp</span>
                  <h4 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    Quer implementar essas estratégias no seu WhatsApp hoje mesmo?
                  </h4>
                  <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    A Promp automatiza 100% da qualificação de leads, envia áudios reais e agenda reuniões no piloto automático.
                  </p>
                </div>
                <a
                  href="https://app.promp.com.br/signup"
                  target="_blank"
                  class="px-5 py-3 rounded-xl bg-primary hover:bg-red-600 text-white font-bold text-xs sm:text-sm transition-colors whitespace-nowrap shadow-lg shadow-primary/20"
                >
                  Experimentar Grátis ➔
                </a>
              </div>
            </div>

            <!-- FAQ Section (if available) -->
            <div v-if="article.faq && article.faq.length > 0" class="mt-14 pt-8 border-t border-slate-200 dark:border-slate-800">
              <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Perguntas Frequentes sobre este tema
              </h3>
              <div class="space-y-4">
                <div
                  v-for="(item, idx) in article.faq"
                  :key="idx"
                  class="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/80 overflow-hidden"
                >
                  <button
                    @click="toggleFaq(idx)"
                    class="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 dark:text-white hover:text-primary transition-colors"
                  >
                    <span>{{ item.question }}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 text-primary transition-transform duration-200 flex-shrink-0"
                      :class="{ 'rotate-180': openFaqs.includes(idx) }"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    v-show="openFaqs.includes(idx)"
                    class="px-4 sm:px-5 pb-5 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-700/60 pt-4"
                  >
                    {{ item.answer }}
                  </div>
                </div>
              </div>
            </div>

            <!-- Tags Cloud -->
            <div v-if="article.tags && article.tags.length > 0" class="mt-10 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-2">
              <span class="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2">Tags:</span>
              <NuxtLink
                v-for="tag in article.tags"
                :key="tag"
                :to="'/blog?search=' + encodeURIComponent(tag)"
                class="px-3 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-primary/10 hover:text-primary transition-colors"
              >
                #{{ tag }}
              </NuxtLink>
            </div>

            <!-- Author Bio Card -->
            <div class="mt-12 p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 flex flex-col sm:flex-row items-center gap-5">
              <img
                :src="article.authorAvatar || '/images/authors/leticia-vasconcelos.jpg'"
                :alt="article.author || 'Letícia Vasconcelos'"
                class="w-16 h-16 rounded-full object-cover border-2 border-primary shadow-lg flex-shrink-0"
                width="64"
                height="64"
              />
              <div class="text-center sm:text-left">
                <div class="text-base font-bold text-slate-900 dark:text-white">{{ article.author || 'Letícia Vasconcelos' }}</div>
                <div class="text-xs text-primary font-semibold mb-2">{{ article.authorRole || 'Especialista em IA & Estratégia Conversacional | Promp' }}</div>
                <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Especialista em Inteligência Artificial conversacional, fluxos de qualificação comercial e estratégias de conversão no WhatsApp. Ajuda empresas e times de vendas a escalarem seus resultados com atendimento humanizado 24/7.
                </p>
              </div>
            </div>

          </div>

          <!-- Sticky Sidebar (4 cols) -->
          <aside class="lg:col-span-4 space-y-8">
            <div class="sticky top-24 space-y-8">
              
              <!-- Table of Contents -->
              <div v-if="article.toc && article.toc.length > 0" class="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 shadow-sm">
                <h4 class="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
                  </svg>
                  Neste Artigo
                </h4>
                <nav class="space-y-2 text-xs sm:text-sm">
                  <a
                    v-for="item in article.toc"
                    :key="item.id"
                    :href="'#' + item.id"
                    :class="[
                      item.level === 3 ? 'pl-4 text-slate-500 dark:text-slate-400' : 'font-medium text-slate-700 dark:text-slate-300',
                      activeHeading === item.id ? 'text-primary font-bold' : 'hover:text-primary'
                    ]"
                    class="block transition-colors py-0.5 line-clamp-1"
                  >
                    {{ item.text }}
                  </a>
                </nav>
              </div>

              <!-- Promp Conversion Card -->
              <div class="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-secondary text-white border border-slate-800 shadow-xl relative overflow-hidden">
                <div class="relative z-10 space-y-4">
                  <div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/20 text-orange-300 text-[11px] font-bold">
                    🚀 Promp para Empresas
                  </div>
                  <h4 class="text-lg font-bold leading-snug">
                    Venda mais com IA no WhatsApp
                  </h4>
                  <ul class="space-y-2 text-xs text-slate-300">
                    <li class="flex items-center gap-2">
                      <span class="text-conversion-green font-bold">✓</span> Atendimento 24/7 sem fila de espera
                    </li>
                    <li class="flex items-center gap-2">
                      <span class="text-conversion-green font-bold">✓</span> Áudios humanizados com voz real
                    </li>
                    <li class="flex items-center gap-2">
                      <span class="text-conversion-green font-bold">✓</span> CRM Kanban & Disparos em massa
                    </li>
                  </ul>
                  <a
                    href="https://app.promp.com.br/signup"
                    target="_blank"
                    class="block text-center w-full py-3 px-4 rounded-xl bg-primary hover:bg-red-600 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-lg shadow-primary/30"
                  >
                    Começar Teste Grátis
                  </a>
                </div>
              </div>

              <!-- Related Solutions on Promp -->
              <div class="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 shadow-sm">
                <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Soluções Relacionadas</h4>
                <div class="space-y-3 text-xs">
                  <NuxtLink to="/solucoes/escalar-vendas-whatsapp" class="block p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 hover:bg-primary/5 hover:text-primary transition-all">
                    <div class="font-bold text-slate-800 dark:text-white mb-0.5">Escalar Vendas no WhatsApp</div>
                    <div class="text-slate-500 dark:text-slate-400 text-[11px]">Como dobrar conversões com IA ativa.</div>
                  </NuxtLink>
                  <NuxtLink to="/solucoes/atendimento-fora-do-horario" class="block p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 hover:bg-primary/5 hover:text-primary transition-all">
                    <div class="font-bold text-slate-800 dark:text-white mb-0.5">Atendimento Fora do Horário</div>
                    <div class="text-slate-500 dark:text-slate-400 text-[11px]">Recupere leads de noites e finais de semana.</div>
                  </NuxtLink>
                  <NuxtLink to="/solucoes/integracoes-e-automacoes" class="block p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 hover:bg-primary/5 hover:text-primary transition-all">
                    <div class="font-bold text-slate-800 dark:text-white mb-0.5">Integrações & Webhooks</div>
                    <div class="text-slate-500 dark:text-slate-400 text-[11px]">Conecte seu CRM, ERP e plataformas.</div>
                  </NuxtLink>
                </div>
              </div>

            </div>
          </aside>

        </div>

        <!-- Related Articles Grid -->
        <section v-if="relatedArticles.length > 0" class="mt-20 pt-12 border-t border-slate-200 dark:border-slate-800">
          <div class="flex items-center justify-between mb-8">
            <h3 class="text-2xl font-bold text-slate-900 dark:text-white">Artigos Recomendados</h3>
            <NuxtLink to="/blog" class="text-sm font-bold text-primary hover:underline">Ver todos os artigos ➔</NuxtLink>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <article
              v-for="rel in relatedArticles"
              :key="rel.slug"
              class="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700/80 hover:border-primary transition-all flex flex-col shadow-sm"
            >
              <NuxtLink :to="'/blog/' + rel.slug" class="block relative aspect-video overflow-hidden bg-slate-100 dark:bg-slate-900">
                <img :src="rel.coverImage" :alt="rel.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
              </NuxtLink>
              <div class="p-5 flex flex-col flex-grow justify-between">
                <div>
                  <span class="text-[11px] font-bold uppercase tracking-wider text-primary">{{ rel.category }}</span>
                  <h4 class="text-base font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors line-clamp-2 mt-1 mb-2">
                    <NuxtLink :to="'/blog/' + rel.slug">{{ rel.title }}</NuxtLink>
                  </h4>
                  <p class="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">{{ rel.description }}</p>
                </div>
                <div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-[11px] text-slate-400">
                  <span>{{ rel.readingTime }} de leitura</span>
                  <span class="font-bold text-primary">Ler ➔</span>
                </div>
              </div>
            </article>
          </div>
        </section>

      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

const route = useRoute()
const slug = computed(() => route.params.slug as string)

// Buscar dados do artigo
const { data, error } = await useFetch(() => `/api/blog/${slug.value}`)

if (error.value || !data.value?.article) {
  throw createError({ statusCode: 404, statusMessage: 'Artigo não encontrado' })
}

const article = computed(() => data.value.article)
const relatedArticles = computed(() => data.value.related || [])

// Estado de FAQs
const openFaqs = ref<number[]>([0])
function toggleFaq(idx: number) {
  if (openFaqs.value.includes(idx)) {
    openFaqs.value = openFaqs.value.filter(i => i !== idx)
  } else {
    openFaqs.value.push(idx)
  }
}

// Barra de Leitura e Scroll Spy
const readingProgress = ref(0)
const activeHeading = ref('')
const articleBody = ref<HTMLElement | null>(null)

function updateScroll() {
  const totalHeight = document.documentElement.scrollHeight - window.innerHeight
  if (totalHeight > 0) {
    readingProgress.value = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100))
  }

  // Detect heading ativo
  const headings = document.querySelectorAll('.prose h2, .prose h3')
  for (let i = headings.length - 1; i >= 0; i--) {
    const el = headings[i] as HTMLElement
    const rect = el.getBoundingClientRect()
    if (rect.top <= 140) {
      activeHeading.value = el.id
      break
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', updateScroll, { passive: true })
  updateScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScroll)
})

// Compartilhamento
const currentUrl = computed(() => `https://promp.com.br/blog/${slug.value}`)
const shareWhatsAppUrl = computed(() => {
  const text = encodeURIComponent(`${article.value.title} - Leia no Blog da Promp: ${currentUrl.value}`)
  return `https://api.whatsapp.com/send?text=${text}`
})
const shareLinkedInUrl = computed(() => {
  return `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl.value)}`
})

const copied = ref(false)
function copyArticleLink() {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(currentUrl.value)
    copied.value = true
    setTimeout(() => { copied.value = false }, 2000)
  }
}

function formatDate(dateStr: string) {
  if (!dateStr) return ''
  const [year, month, day] = dateStr.split('-')
  if (!year || !month || !day) return dateStr
  const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  })
}

// Meta tags SEO
useHead({
  title: computed(() => `${article.value.title} | Blog Promp`),
  meta: computed(() => [
    { name: 'description', content: article.value.description },
    { property: 'og:title', content: article.value.title },
    { property: 'og:description', content: article.value.description },
    { property: 'og:type', content: 'article' },
    { property: 'og:url', content: currentUrl.value },
    { property: 'og:image', content: article.value.coverImage },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: article.value.title },
    { name: 'twitter:description', content: article.value.description },
    { name: 'twitter:image', content: article.value.coverImage }
  ])
})

// Schema.org Article
useSchemaOrg([
  defineArticle({
    headline: computed(() => article.value.title),
    description: computed(() => article.value.description),
    image: computed(() => article.value.coverImage),
    datePublished: computed(() => article.value.date),
    dateModified: computed(() => article.value.date),
    author: [
      {
        name: computed(() => article.value.author),
        url: 'https://promp.com.br'
      }
    ]
  }),
  defineBreadcrumb({
    itemListElement: [
      { name: 'Início', item: 'https://promp.com.br' },
      { name: 'Blog', item: 'https://promp.com.br/blog' },
      { name: computed(() => article.value.title), item: currentUrl.value }
    ]
  })
])
</script>
