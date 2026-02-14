// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: 'pt-BR'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://ui-avatars.com' },
        { rel: 'dns-prefetch', href: 'https://ui-avatars.com' }
      ]
    }
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@nuxt/image', '@nuxtjs/i18n'],
  i18n: {
    locales: [
      { code: 'pt-BR', iso: 'pt-BR', file: 'pt-BR.json', name: 'Português' },
      { code: 'en-US', iso: 'en-US', file: 'en-US.json', name: 'English' },
      { code: 'es-ES', iso: 'es-ES', file: 'es-ES.json', name: 'Español' },
      { code: 'ar-AR', iso: 'ar-AR', file: 'ar-AR.json', name: 'العربية', dir: 'rtl' },
      { code: 'de-DE', iso: 'de-DE', file: 'de-DE.json', name: 'Deutsch' },
      { code: 'it-IT', iso: 'it-IT', file: 'it-IT.json', name: 'Italiano' },
      { code: 'fr-FR', iso: 'fr-FR', file: 'fr-FR.json', name: 'Français' },
      { code: 'ja-JP', iso: 'ja-JP', file: 'ja-JP.json', name: '日本語' },
      { code: 'zh-CN', iso: 'zh-CN', file: 'zh-CN.json', name: '中文' }
    ],
    defaultLocale: 'pt-BR',
    langDir: 'locales',
    lazy: true,
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    }
  },
  image: {
    format: ['webp', 'avif', 'jpeg'],
    quality: 80,
  },
  nitro: {
    preset: 'node-server',
    serveStatic: true
  },
})
