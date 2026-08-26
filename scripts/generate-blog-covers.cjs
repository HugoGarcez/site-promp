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

function wrapText(text, maxChars = 28) {
  const words = String(text || '').split(' ');
  const lines = [];
  let current = '';

  for (const w of words) {
    if ((current + ' ' + w).trim().length <= maxChars) {
      current = (current + ' ' + w).trim();
    } else {
      if (current) lines.push(current);
      current = w;
    }
  }
  if (current) lines.push(current);
  return lines;
}

async function generateCover({ slug, title, badge, color1, color2 }) {
  const safeBadge = escapeXml(badge || 'PROMP BLOG');
  const titleLines = wrapText(title, 28);
  const startY = titleLines.length === 1 ? 300 : (titleLines.length === 2 ? 270 : 230);
  const lineHeight = 60;
  const tspans = titleLines
    .map((line, i) => `<tspan x="100" y="${startY + (i * lineHeight)}">${escapeXml(line)}</tspan>`)
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
      <text x="80" y="26" fill="#ffffff" font-family="DejaVu Sans, Arial, Helvetica, sans-serif" font-weight="900" font-size="20" text-anchor="middle" letter-spacing="2">PROMP.IA</text>
    </g>

    <!-- Badge -->
    <g transform="translate(100, 145)">
      <rect width="260" height="36" rx="18" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.25)" />
      <text x="130" y="23" fill="#FFB703" font-family="DejaVu Sans, Arial, Helvetica, sans-serif" font-weight="bold" font-size="13" text-anchor="middle" letter-spacing="1.5">${safeBadge}</text>
    </g>

    <!-- Title (Multi-line) -->
    <text fill="#FFFFFF" font-family="DejaVu Sans, Arial, Helvetica, sans-serif" font-weight="900" font-size="46">
      ${tspans}
    </text>
    
    <!-- Footer Bar inside Image -->
    <g transform="translate(100, 530)">
      <rect width="1000" height="2" fill="rgba(255,255,255,0.15)" />
      <text x="0" y="35" fill="#94A3B8" font-family="DejaVu Sans, Arial, Helvetica, sans-serif" font-size="16" font-weight="bold">promp.com.br/blog</text>
      <text x="1000" y="35" fill="#22C55E" font-family="DejaVu Sans, Arial, Helvetica, sans-serif" font-size="16" font-weight="bold" text-anchor="end">Automação Inteligente de Vendas</text>
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
  console.log('🎨 Regenerando capas de todos os artigos do blog com quebra de linha perfeita...');
  const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.md'));

  const metaMap = {
    'como-escalar-vendas-whatsapp-ia-humanizada': {
      aliases: ['escalar-vendas-whatsapp-ia'],
      badge: 'VENDAS & CONVERSÃO',
      c1: '#E84624',
      c2: '#0E1F4A'
    },
    'atendimento-24-7-whatsapp-converter-leads-noturnos': {
      aliases: ['atendimento-24-7-whatsapp'],
      badge: 'IA & ATENDIMENTO 24/7',
      c1: '#0E1F4A',
      c2: '#1E293B'
    },
    'centralizacao-multicanal-whatsapp-instagram-crm': {
      aliases: ['centralizacao-multicanal-crm'],
      badge: 'INTEGRAÇÃO MULTICANAL',
      c1: '#1E293B',
      c2: '#0E1F4A'
    },
    'recuperar-carrinhos-abandonados-whatsapp-ia': {
      aliases: [],
      badge: 'E-COMMERCE & CONVERSÃO',
      c1: '#E84624',
      c2: '#0E1F4A'
    },
    'follow-up-de-vendas-whatsapp-reengajar-leads': {
      aliases: [],
      badge: 'FOLLOW-UP & VENDAS',
      c1: '#0E1F4A',
      c2: '#1E293B'
    },
    'ia-para-clinicas-consultorios-agendamento-whatsapp': {
      aliases: [],
      badge: 'SAÚDE & CONSULTÓRIOS',
      c1: '#0E1F4A',
      c2: '#059669'
    }
  };

  for (const file of files) {
    const raw = fs.readFileSync(path.join(blogDir, file), 'utf-8');
    const { attributes } = matter(raw);
    const slug = attributes.slug || file.replace('.md', '');
    const meta = metaMap[slug] || {
      aliases: [],
      badge: attributes.category ? attributes.category.toUpperCase() : 'PROMP BLOG',
      c1: '#E84624',
      c2: '#0E1F4A'
    };

    // Gera com o slug padrão
    await generateCover({
      slug,
      title: attributes.title,
      badge: meta.badge,
      color1: meta.c1,
      color2: meta.c2
    });

    // Se tiver aliases antigos, gera também para não quebrar links
    for (const alias of meta.aliases) {
      await generateCover({
        slug: alias,
        title: attributes.title,
        badge: meta.badge,
        color1: meta.c1,
        color2: meta.c2
      });
    }
  }
  console.log('🎉 Todas as capas foram geradas com sucesso!');
}

run().catch(console.error);
