// Gera a proposta comercial a partir do formulário de /proposta.
// POST /api/proposta            -> application/pdf (download)
// POST /api/proposta?format=html -> HTML da proposta (pré-visualização)
// Acesso livre (página não tem link no site). Proteção: 1 PDF por vez e entradas escapadas no template.
import { buildPropostaHtml, renderPropostaPdf } from '~~/scripts/proposta/template.mjs'

let running = 0
const MAX_CONCURRENT = 1 // VPS tem 1 GB de RAM

export default defineEventHandler(async (event) => {
  const body = (await readBody(event).catch(() => null)) || {}
  const html = buildPropostaHtml(body)

  if (getQuery(event).format === 'html') {
    setHeader(event, 'content-type', 'text/html; charset=utf-8')
    return html
  }

  if (running >= MAX_CONCURRENT) {
    throw createError({ statusCode: 429, statusMessage: 'Muitas propostas sendo geradas agora. Tente em alguns segundos.' })
  }
  running++
  try {
    const pdf = await renderPropostaPdf(html)
    const slug = String(body.cliente || 'cliente')
      .normalize('NFD').replace(/[̀-ͯ]/g, '')
      .replace(/[^a-zA-Z0-9]+/g, '_').replace(/^_|_$/g, '').slice(0, 50) || 'cliente'
    setHeader(event, 'content-type', 'application/pdf')
    setHeader(event, 'content-disposition', `attachment; filename="Proposta_Promp_${slug}.pdf"`)
    return Buffer.from(pdf)
  } finally {
    running--
  }
})
