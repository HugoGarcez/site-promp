const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const matter = require('front-matter');

const blogDir = path.resolve(process.cwd(), 'content/blog');
const publicCoversDir = path.resolve(process.cwd(), 'public/images/blog');
const outputCoversDir = path.resolve(process.cwd(), '.output/public/images/blog');

if (!fs.existsSync(publicCoversDir)) {
  fs.mkdirSync(publicCoversDir, { recursive: true });
}

function escapeXml(unsafe) {
  return String(unsafe || '').replace(/[<>&'"]/g, function (c) {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
    }
  });
}

function wrapText(text, maxCharsPerLine = 34) {
  const words = String(text || '').split(' ');
  const lines = [];
  let currentLine = '';

  for (const word of words) {
    if ((currentLine + ' ' + word).trim().length <= maxCharsPerLine) {
      currentLine = (currentLine + ' ' + word).trim();
    } else {
      if (currentLine) lines.push(currentLine);
      currentLine = word;
    }
  }
  if (currentLine) lines.push(currentLine);
  return lines;
}

async function generateCover({ slug, title, badge, color1, color2 }) {
  const safeBadge = escapeXml(badge || 'PROMP BLOG');
  const titleLines = wrapText(title, 34);
  const tspans = titleLines
    .map((line, i) => `<tspan x="100" dy="${i === 0 ? 0 : 54}">${escapeXml(line)}</tspan>`)
    .join('');

  const svg = `
  <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${color1 || '#E84624'}" />
        <stop offset="100%" stop-color="${color2 || '#0E1F4A'}" />
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
      <rect width="250" height="34" rx="17" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.25)" />
      <text x="125" y="22" fill="#FFB703" font-family="Arial, sans-serif" font-weight="bold" font-size="13" text-anchor="middle" letter-spacing="1.5">${safeBadge}</text>
    </g>

    <!-- Title -->
    <text x="100" y="260" fill="#FFFFFF" font-family="Arial, sans-serif" font-weight="900" font-size="42">
      ${tspans}
    </text>
    
    <!-- Footer Bar inside Image -->
    <g transform="translate(100, 520)">
      <rect width="1000" height="2" fill="rgba(255,255,255,0.15)" />
      <text x="0" y="30" fill="#94A3B8" font-family="Arial, sans-serif" font-size="16" font-weight="bold">promp.com.br/blog</text>
      <text x="1000" y="30" fill="#22C55E" font-family="Arial, sans-serif" font-size="16" font-weight="bold" text-anchor="end">Automação Inteligente de Vendas</text>
    </g>
  </svg>
  `;

  const fileName = `${slug}.webp`;
  const targetPublic = path.join(publicCoversDir, fileName);

  await sharp(Buffer.from(svg.trim()))
    .webp({ quality: 90 })
    .toFile(targetPublic);
  console.log(`✅ Gerada capa: ${fileName}`);

  if (fs.existsSync(outputCoversDir)) {
    fs.copyFileSync(targetPublic, path.join(outputCoversDir, fileName));
  }
  const serverOutput = '/var/www/site-promp/.output/public/images/blog';
  if (fs.existsSync(serverOutput)) {
    try {
      fs.copyFileSync(targetPublic, path.join(serverOutput, fileName));
    } catch {}
  }
}

async function run() {
  console.log('🎨 Regenerando capas de todos os artigos do blog...');
  const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.md'));

  const badgeMap = {
    'como-escalar-vendas-whatsapp-ia-humanizada': { badge: 'VENDAS & CONVERSÃO', c1: '#E84624', c2: '#0E1F4A' },
    'atendimento-24-7-whatsapp-converter-leads-noturnos': { badge: 'IA & ATENDIMENTO 24/7', c1: '#0E1F4A', c2: '#1E293B' },
    'centralizacao-multicanal-whatsapp-instagram-crm': { badge: 'INTEGRAÇÃO MULTICANAL', c1: '#1E293B', c2: '#0E1F4A' },
    'recuperar-carrinhos-abandonados-whatsapp-ia': { badge: 'E-COMMERCE & CONVERSÃO', c1: '#E84624', c2: '#0E1F4A' },
    'follow-up-de-vendas-whatsapp-reengajar-leads': { badge: 'FOLLOW-UP & VENDAS', c1: '#0E1F4A', c2: '#1E293B' },
    'ia-para-clinicas-consultorios-agendamento-whatsapp': { badge: 'SAÚDE & CONSULTÓRIOS', c1: '#0E1F4A', c2: '#059669' }
  };

  for (const file of files) {
    const raw = fs.readFileSync(path.join(blogDir, file), 'utf-8');
    const { attributes } = matter(raw);
    const slug = attributes.slug || file.replace('.md', '');
    const meta = badgeMap[slug] || { badge: attributes.category ? attributes.category.toUpperCase() : 'PROMP BLOG', c1: '#E84624', c2: '#0E1F4A' };

    await generateCover({
      slug,
      title: attributes.title,
      badge: meta.badge,
      color1: meta.c1,
      color2: meta.c2
    });
  }
  console.log('🎉 Todas as capas foram geradas com sucesso!');
}

run().catch(console.error);
