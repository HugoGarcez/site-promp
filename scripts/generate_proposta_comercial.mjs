// Gera a Proposta Comercial da Promp em PDF (A4).
// Uso: node scripts/generate_proposta_comercial.mjs ["Nome do Cliente"] [a|o]
// Formulário web: /proposta (usa o mesmo template via server/api/proposta.post.ts)
import fs from 'fs';
import path from 'path';
import { buildPropostaHtml, renderPropostaPdf } from './proposta/template.mjs';

const html = buildPropostaHtml({ cliente: process.argv[2], artigo: (process.argv[3] || '').toLowerCase() });
if (process.env.DEBUG_HTML) fs.writeFileSync(process.env.DEBUG_HTML, html);
const out = path.join(process.cwd(), 'Proposta_Comercial_Promp.pdf');
fs.writeFileSync(out, await renderPropostaPdf(html));
console.log(`✅ PDF gerado: ${out}`);
