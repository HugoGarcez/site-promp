import { getAllArticles, getAllCategories } from "~/server/utils/blog"

export default defineEventHandler((event) => {
  const query = getQuery(event)
  const category = query.category as string | undefined
  const search = query.search as string | undefined
  const tag = query.tag as string | undefined

  let articles = getAllArticles(false)

  if (category && category !== "Todos") {
    articles = articles.filter(a => a.category.toLowerCase() === category.toLowerCase())
  }

  if (tag) {
    articles = articles.filter(a => (a.tags || []).some(t => t.toLowerCase() === tag.toLowerCase()))
  }

  if (search) {
    const term = search.toLowerCase()
    articles = articles.filter(a => 
      a.title.toLowerCase().includes(term) ||
      a.description.toLowerCase().includes(term) ||
      (a.tags || []).some(t => t.toLowerCase().includes(term))
    )
  }

  const categories = getAllCategories()

  return {
    articles,
    categories,
    total: articles.length
  }
})
