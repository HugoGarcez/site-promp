import fs from 'node:fs';
import path from 'node:path';
import { TOPIC_TEMPLATES } from './blog-articles-database.js';

const blogDir = path.resolve(process.cwd(), 'content/blog');

for (const topic of TOPIC_TEMPLATES) {
  const filePath = path.join(blogDir, `${topic.slug}.md`);
  const today = new Date().toISOString().split('T')[0];

  const frontmatter = `---
title: "${topic.title.replace(/"/g, '\\"')}"
slug: "${topic.slug}"
description: "${topic.description.replace(/"/g, '\\"')}"
date: "${today}"
author: "Letícia Vasconcelos"
authorRole: "Especialista em IA & Estratégia Conversacional | Promp"
authorAvatar: "/images/authors/leticia-vasconcelos.jpg"
category: "${topic.category}"
tags: ${JSON.stringify(topic.tags)}
coverImage: "/images/blog/${topic.slug}.webp"
coverAlt: "${topic.title.replace(/"/g, '\\"')}"
readingTime: "${topic.readingTime || '8 min'}"
featured: false
seoKeywords: ${JSON.stringify(topic.tags.map(t => t.toLowerCase()))}
faq:
${topic.faq.map(f => `  - question: "${f.question.replace(/"/g, '\\"')}"\n    answer: "${f.answer.replace(/"/g, '\\"')}"`).join('\n')}
---
`;

  const fullContent = frontmatter + topic.contentBuilder();
  fs.writeFileSync(filePath, fullContent.trim() + '\n', 'utf-8');
  console.log(`✅ Sincronizado com profundidade máxima: ${topic.slug}.md`);
}
