const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dir = path.resolve(process.cwd(), 'public/images/blog');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const covers = [
  {
    name: 'escalar-vendas-whatsapp-ia.webp',
    title: 'Como Escalar Vendas no WhatsApp com IA',
    subtitle: 'Automação inteligente, áudios humanizados e 4x mais conversões',
    badge: 'VENDAS &amp; CONVERSÃO',
    color1: '#E84624',
    color2: '#0E1F4A'
  },
  {
    name: 'atendimento-24-7-whatsapp.webp',
    title: 'Atendimento 24/7 no WhatsApp',
    subtitle: 'Como capturar e converter leads fora do horário comercial',
    badge: 'IA &amp; ATENDIMENTO',
    color1: '#0E1F4A',
    color2: '#1E293B'
  },
  {
    name: 'centralizacao-multicanal-crm.webp',
    title: 'Centralização Multicanal com IA',
    subtitle: 'WhatsApp, Instagram e CRM sincronizados em um único painel',
    badge: 'INTEGRAÇÕES &amp; CRM',
    color1: '#1E293B',
    color2: '#0E1F4A'
  }
];

function escapeXml(unsafe) {
  return unsafe.replace(/[<>&'"]/g, function (c) {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
    }
  });
}

async function generateCover({ name, title, subtitle, badge, color1, color2 }) {
  const safeTitle = escapeXml(title);
  const safeSubtitle = escapeXml(subtitle);

  const svg = `
  <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${color1}" />
        <stop offset="100%" stop-color="${color2}" />
      </linearGradient>
      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="60" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>

    <!-- Background -->
    <rect width="1200" height="630" fill="url(#bgGrad)" />

    <!-- Glow Orbs -->
    <circle cx="1050" cy="150" r="250" fill="#E84624" opacity="0.3" filter="url(#glow)" />
    <circle cx="150" cy="500" r="200" fill="#22C55E" opacity="0.15" filter="url(#glow)" />

    <!-- Brand Header -->
    <g transform="translate(100, 80)">
      <rect width="160" height="40" rx="8" fill="#E84624" />
      <text x="80" y="26" fill="#ffffff" font-family="Arial, sans-serif" font-weight="900" font-size="20" text-anchor="middle" letter-spacing="2">PROMP.IA</text>
    </g>

    <!-- Badge -->
    <g transform="translate(100, 150)">
      <rect width="240" height="34" rx="17" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.25)" />
      <text x="120" y="22" fill="#FFB703" font-family="Arial, sans-serif" font-weight="bold" font-size="13" text-anchor="middle" letter-spacing="1.5">${badge}</text>
    </g>

    <!-- Title & Subtitle -->
    <text x="100" y="280" fill="#FFFFFF" font-family="Arial, sans-serif" font-weight="900" font-size="46">
      ${safeTitle}
    </text>
    
    <text x="100" y="360" fill="#CBD5E1" font-family="Arial, sans-serif" font-weight="400" font-size="24">
      ${safeSubtitle}
    </text>

    <!-- Footer Bar inside Image -->
    <g transform="translate(100, 520)">
      <rect width="1000" height="2" fill="rgba(255,255,255,0.15)" />
      <text x="0" y="30" fill="#94A3B8" font-family="Arial, sans-serif" font-size="16" font-weight="bold">promp.com.br/blog</text>
      <text x="1000" y="30" fill="#22C55E" font-family="Arial, sans-serif" font-size="16" font-weight="bold" text-anchor="end">Automação Inteligente de Vendas</text>
    </g>
  </svg>
  `;

  const outputPath = path.join(dir, name);
  await sharp(Buffer.from(svg.trim()))
    .webp({ quality: 90 })
    .toFile(outputPath);
  console.log(`Generated: ${outputPath}`);
}

async function run() {
  for (const c of covers) {
    await generateCover(c);
  }
}

run().catch(console.error);
