import fs from "node:fs"
import path from "node:path"
import matter from "front-matter"
import { marked } from "marked"

export interface ArticleFrontmatter {
  title: string
  slug: string
  description: string
  date: string
  author: string
  authorRole?: string
  authorAvatar?: string
  category: string
  tags?: string[]
  coverImage: string
  coverAlt?: string
  readingTime?: string
  featured?: boolean
  seoKeywords?: string[]
  faq?: Array<{ question: string; answer: string }>
}

export interface TocItem {
  id: string
  text: string
  level: number
}

export interface Article extends ArticleFrontmatter {
  content: string
  html: string
  toc: TocItem[]
}

const BLOG_DIR = path.resolve(process.cwd(), "content/blog")

function ensureBlogDir() {
  if (!fs.existsSync(BLOG_DIR)) {
    fs.mkdirSync(BLOG_DIR, { recursive: true })
  }
}

function calculateReadingTime(text: string): string {
  const wordsPerMinute = 200
  const words = text.trim().split(/\s+/).length
  const minutes = Math.ceil(words / wordsPerMinute)
  return minutes + " min"
}

function extractToc(markdown: string): TocItem[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm
  const toc: TocItem[] = []
  let match: RegExpExecArray | null

  while ((match = headingRegex.exec(markdown)) !== null) {
    const level = match[1].length
    const text = match[2].trim().replace(/\*\*/g, "").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    const id = text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")

    toc.push({ id, text, level })
  }

  return toc
}

function customMarkedRenderer(): typeof marked {
  const renderer = new marked.Renderer()

  renderer.heading = function ({ text, depth }) {
    const rawText = text.replace(/<[^>]*>/g, "")
    const id = rawText
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")

    return "<h" + depth + " id=\"" + id + "\" class=\"scroll-mt-24 group flex items-center\"><span>" + text + "</span><a href=\"#" + id + "\" class=\"ml-2 opacity-0 group-hover:opacity-100 text-primary transition-opacity text-sm\" aria-label=\"Link para " + rawText + "\">#</a></h" + depth + ">"
  }

  marked.setOptions({
    gfm: true,
    breaks: true,
    renderer
  })

  return marked
}

export function getAllArticles(includeContent = false): Article[] {
  ensureBlogDir()
  const files = fs.readdirSync(BLOG_DIR).filter(file => file.endsWith(".md"))

  const articles: Article[] = []

  for (const file of files) {
    const fullPath = path.join(BLOG_DIR, file)
    const rawContent = fs.readFileSync(fullPath, "utf-8")
    const parsed = matter<ArticleFrontmatter>(rawContent)
    const attributes = parsed.attributes

    if (!attributes.title || !attributes.slug) {
      continue
    }

    const readingTime = attributes.readingTime || calculateReadingTime(parsed.body)
    const toc = extractToc(parsed.body)

    let html = ""
    if (includeContent) {
      const md = customMarkedRenderer()
      html = md.parse(parsed.body) as string
    }

    articles.push({
      ...attributes,
      tags: attributes.tags || [],
      readingTime,
      content: includeContent ? parsed.body : "",
      html,
      toc
    })
  }

  return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getArticleBySlug(slug: string): { article: Article | null; related: Article[] } {
  ensureBlogDir()
  const articles = getAllArticles(true)
  const article = articles.find(a => a.slug === slug) || null

  if (!article) {
    return { article: null, related: [] }
  }

  const related = articles
    .filter(a => a.slug !== slug)
    .map(a => {
      let score = 0
      if (a.category === article.category) score += 3
      const commonTags = (a.tags || []).filter(tag => (article.tags || []).includes(tag))
      score += commonTags.length
      return { article: a, score }
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map(item => item.article)

  return { article, related }
}

export function getAllCategories(): { name: string; count: number }[] {
  const articles = getAllArticles(false)
  const categoryMap: Record<string, number> = {}

  for (const article of articles) {
    if (article.category) {
      categoryMap[article.category] = (categoryMap[article.category] || 0) + 1
    }
  }

  return Object.entries(categoryMap).map(([name, count]) => ({ name, count }))
}
