// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@nuxt/image'],
  image: {
    format: ['webp', 'avif', 'jpeg'],
    quality: 80,
  },
  nitro: {
    preset: 'node-server',
    serveStatic: true
  },
})
