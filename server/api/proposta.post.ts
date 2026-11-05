// Gera a proposta comercial a partir do formulário de /proposta.
// POST /api/proposta            -> application/pdf (download)
// POST /api/proposta?format=html -> HTML da proposta (pré-visualização)
// Em produção exige chave de acesso (header x-proposta-key), pois cada PDF abre um Chrome no servidor.
// Chave: env PROPOSTA_ACCESS_KEY ou arquivo .proposta-key na raiz do projeto (fora do git).
import fs from 'node:fs'
import path from 'node:path'
import { buildPropostaHtml, renderPropostaPdf } from '~~/scripts/proposta/template.mjs'

let running = 0
const MAX_CONCURRENT = 1 // VPS tem 1 GB de RAM

function accessKey() {
  if (process.env.PROPOSTA_ACCESS_KEY) return process.env.PROPOSTA_ACCESS_KEY
  try {
    return fs.readFileSync(path.join(process.cwd(), '.proposta-key'), 'utf8').trim() || undefined
  } catch {
    return undefined
  }
}

export default defineEventHandler(async (event) => {
  const key = accessKey()
  if (!key && process.env.NODE_ENV === 'production') {
    throw createError({ statusCode: 503, statusMessage: 'Gerador de propostas desativado: defina PROPOSTA_ACCESS_KEY ou .proposta-key no servidor.' })
  }
  if (key && getHeader(event, 'x-proposta-key') !== key) {
    throw createError({ statusCode: 401, statusMessage: 'Chave de acesso inválida.' })
  }

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
