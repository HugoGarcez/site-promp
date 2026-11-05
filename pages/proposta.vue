<script setup lang="ts">
// Gerador interno de propostas comerciais: formulário -> prévia -> PDF (via /api/proposta)
definePageMeta({ layout: false })
useHead({
  title: 'Gerador de Proposta Comercial · Promp',
  meta: [{ name: 'robots', content: 'noindex, nofollow' }],
})

const pad = (n: number) => String(n).padStart(2, '0')
const iso = (d: Date) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`

function defaults() {
  const hoje = new Date()
  const fim = new Date(hoje.getFullYear(), hoje.getMonth() + 1, 0)
  return {
    cliente: '',
    artigo: 'auto' as 'auto' | 'a' | 'o',
    numero: `PRP-${hoje.getFullYear()}${pad(hoje.getMonth() + 1)}${pad(hoje.getDate())}`,
    emissao: iso(hoje),
    validade: iso(fim),
    consultor: '',
    whatsapp: '5522992371763',
    precos: { starter: 597, advance: 1897, prime: 2497 },
  }
}

const form = reactive(defaults())
const chave = ref('')
const previewHtml = ref('')
const loadingPreview = ref(false)
const loadingPdf = ref(false)
const erro = ref('')

// Mesma regra do template: feminino se a 1ª palavra terminar em -a, -ade, -agem, -ção/-são
function deduzirArtigo(nome: string) {
  const p = nome.trim().split(/\s+/)[0].toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
  return /(a|ade|agem|cao|sao)$/.test(p) ? 'a' : 'o'
}
const artigoFinal = computed(() =>
  form.artigo !== 'auto' ? form.artigo : form.cliente.trim() ? deduzirArtigo(form.cliente) : 'a',
)
const nomeExibido = computed(() => form.cliente.trim() || 'Sua Empresa')
const fmtBR = (v: string) => (v ? v.split('-').reverse().join('/') : '')

onMounted(() => {
  chave.value = localStorage.getItem('proposta_key') || ''
  atualizarPrevia()
})
watch(chave, (v) => localStorage.setItem('proposta_key', v))

async function chamar(format?: 'html') {
  return await $fetch.raw('/api/proposta', {
    method: 'POST',
    query: format ? { format } : undefined,
    body: { ...form, artigo: form.artigo },
    headers: chave.value ? { 'x-proposta-key': chave.value } : {},
    responseType: format ? 'text' : 'blob',
  })
}

function mensagemErro(e: any) {
  return e?.data?.statusMessage || e?.statusMessage || e?.message || 'Erro ao gerar proposta.'
}

let timer: ReturnType<typeof setTimeout> | undefined
watch(form, () => {
  clearTimeout(timer)
  timer = setTimeout(atualizarPrevia, 700)
}, { deep: true })

// Estilo só da prévia: páginas em "folhas" sobre fundo cinza, reduzidas para caber na coluna
const PREVIEW_CSS = `<style>
  html { background: #e2e8f0; zoom: 0.62; }
  body { padding: 24px 0; }
  .page { margin: 0 auto 24px; box-shadow: 0 10px 30px rgba(15,23,42,.18); }
</style>`

async function atualizarPrevia() {
  loadingPreview.value = true
  erro.value = ''
  try {
    const res = await chamar('html')
    previewHtml.value = String(res._data).replace('</head>', `${PREVIEW_CSS}</head>`)
  } catch (e: any) {
    erro.value = mensagemErro(e)
  } finally {
    loadingPreview.value = false
  }
}

async function gerarPdf() {
  loadingPdf.value = true
  erro.value = ''
  try {
    const res = await chamar()
    const blob = res._data as Blob
    const nome = (res.headers.get('content-disposition') || '').match(/filename="([^"]+)"/)?.[1] || 'Proposta_Promp.pdf'
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = nome
    a.click()
    setTimeout(() => URL.revokeObjectURL(url), 5000)
  } catch (e: any) {
    erro.value = mensagemErro(e)
  } finally {
    loadingPdf.value = false
  }
}

function resetar() {
  Object.assign(form, defaults())
}
</script>

<template>
  <div class="min-h-screen bg-slate-50 text-slate-900 font-sans">
    <header class="border-b border-slate-200 bg-white">
      <div class="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <img src="/images/logo-fundo-claro.svg" alt="Promp" class="h-7" />
          <span class="text-xs font-bold uppercase tracking-widest text-slate-400">Gerador de Proposta</span>
        </div>
        <span class="text-xs text-slate-400">Uso interno</span>
      </div>
    </header>

    <main class="max-w-[1400px] mx-auto px-6 py-8 grid lg:grid-cols-[420px_1fr] gap-8 items-start">
      <!-- Formulário -->
      <form class="space-y-5" @submit.prevent="gerarPdf">
        <section class="bg-white border border-slate-200 rounded-2xl p-5 space-y-4">
          <h2 class="text-sm font-extrabold">Cliente</h2>
          <label class="block">
            <span class="lbl">Nome da empresa</span>
            <input v-model="form.cliente" maxlength="80" placeholder="Ex.: Clínica OdontoPrime" class="inp" />
          </label>
          <div>
            <span class="lbl">Artigo na capa</span>
            <div class="grid grid-cols-3 gap-2">
              <button
                v-for="op in [{ v: 'auto', t: `Auto (${deduzirArtigo(form.cliente || 'Sua')})` }, { v: 'a', t: 'a' }, { v: 'o', t: 'o' }]"
                :key="op.v" type="button"
                class="seg" :class="form.artigo === op.v ? 'seg-on' : ''"
                @click="form.artigo = op.v as any"
              >{{ op.t }}</button>
            </div>
          </div>
          <div class="rounded-xl bg-slate-50 border border-slate-200 p-4">
            <span class="lbl">Título da capa</span>
            <p class="text-lg font-black leading-tight tracking-tight">
              Transforme {{ artigoFinal }} <span class="text-[#25D366]">{{ nomeExibido }}</span> em uma Máquina de Vendas
            </p>
          </div>
        </section>

        <section class="bg-white border border-slate-200 rounded-2xl p-5 space-y-4">
          <h2 class="text-sm font-extrabold">Proposta</h2>
          <label class="block">
            <span class="lbl">Número</span>
            <input v-model="form.numero" maxlength="40" class="inp" />
          </label>
          <div class="grid grid-cols-2 gap-3">
            <label class="block">
              <span class="lbl">Emissão</span>
              <input v-model="form.emissao" type="date" class="inp" />
            </label>
            <label class="block">
              <span class="lbl">Validade da oferta</span>
              <input v-model="form.validade" type="date" class="inp" />
            </label>
          </div>
          <p class="text-xs text-slate-500">
            Implantação gratuita (Advance e Prime) válida até <b>{{ fmtBR(form.validade) }}</b>. Starter: "A consultar".
          </p>
        </section>

        <section class="bg-white border border-slate-200 rounded-2xl p-5 space-y-4">
          <h2 class="text-sm font-extrabold">Preços mensais (R$)</h2>
          <div class="grid grid-cols-3 gap-3">
            <label v-for="(t, k) in { starter: 'Starter', advance: 'Advance', prime: 'Prime' }" :key="k" class="block">
              <span class="lbl">{{ t }}</span>
              <input v-model.number="form.precos[k]" type="number" min="1" step="0.01" class="inp" />
            </label>
          </div>
        </section>

        <section class="bg-white border border-slate-200 rounded-2xl p-5 space-y-4">
          <h2 class="text-sm font-extrabold">Contato</h2>
          <label class="block">
            <span class="lbl">Consultor (opcional)</span>
            <input v-model="form.consultor" maxlength="60" placeholder="Ex.: Hugo Garcez" class="inp" />
          </label>
          <label class="block">
            <span class="lbl">WhatsApp (com DDI, só números)</span>
            <input v-model="form.whatsapp" inputmode="numeric" placeholder="5522992371763" class="inp" />
          </label>
        </section>

        <section class="bg-white border border-slate-200 rounded-2xl p-5 space-y-3">
          <label class="block">
            <span class="lbl">Chave de acesso</span>
            <input v-model="chave" type="password" autocomplete="off" placeholder="PROPOSTA_ACCESS_KEY" class="inp" />
          </label>
          <p v-if="erro" class="text-sm font-semibold text-red-600">{{ erro }}</p>
          <button type="submit" :disabled="loadingPdf" class="w-full rounded-xl bg-primary text-white font-bold py-3 hover:brightness-110 disabled:opacity-60">
            {{ loadingPdf ? 'Gerando PDF…' : 'Gerar PDF' }}
          </button>
          <button type="button" class="w-full text-sm font-semibold text-slate-500 hover:text-slate-800" @click="resetar">
            Restaurar valores padrão
          </button>
        </section>
      </form>

      <!-- Prévia -->
      <section class="lg:sticky lg:top-6">
        <div class="flex items-center justify-between mb-3">
          <h2 class="text-sm font-extrabold">Pré-visualização</h2>
          <span class="text-xs text-slate-400">{{ loadingPreview ? 'Atualizando…' : 'Atualiza automaticamente' }}</span>
        </div>
        <div class="rounded-2xl border border-slate-200 overflow-hidden bg-slate-200">
          <iframe
            v-if="previewHtml"
            :srcdoc="previewHtml"
            sandbox=""
            title="Prévia da proposta"
            class="w-full h-[calc(100vh-140px)] min-h-[600px] bg-slate-200"
          />
          <div v-else class="h-[600px] flex items-center justify-center text-sm text-slate-500">
            {{ loadingPreview ? 'Carregando prévia…' : 'Prévia indisponível' }}
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
.lbl { display: block; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: .08em; color: #64748b; margin-bottom: 6px; }
.inp { width: 100%; border: 1px solid #e2e8f0; border-radius: 12px; padding: 10px 12px; font-size: 14px; background: #fff; color: #0f172a; outline: none; }
.inp:focus { border-color: #E84624; box-shadow: 0 0 0 3px rgba(232, 70, 36, .15); }
.seg { border: 1px solid #e2e8f0; border-radius: 10px; padding: 8px; font-size: 13px; font-weight: 700; color: #475569; background: #fff; }
.seg-on { border-color: #E84624; background: #fdece7; color: #E84624; }
</style>
