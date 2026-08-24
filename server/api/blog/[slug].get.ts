import { getArticleBySlug } from "~/server/utils/blog"

export default defineEventHandler((event) => {
  const slug = getRouterParam(event, "slug")
  if (!slug) {
    throw createError({ statusCode: 400, statusMessage: "Slug é obrigatório" })
  }

  const { article, related } = getArticleBySlug(slug)

  if (!article) {
    throw createError({ statusCode: 404, statusMessage: "Artigo não encontrado" })
  }

  return {
    article,
    related
  }
})
