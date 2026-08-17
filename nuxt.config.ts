// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

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
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        // WebMCP — expõe ferramentas da Promp para agentes de IA
        // https://webmachinelearning.github.io/webmcp/
        { name: 'webmcp', content: 'enabled' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/png', sizes: '48x48', href: '/favicon-48x48.png' },
        { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/favicon-192x192.png' },
        { rel: 'shortcut icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'preconnect', href: 'https://ui-avatars.com' },
        { rel: 'dns-prefetch', href: 'https://ui-avatars.com' },
        { rel: 'preconnect', href: 'https://i.pravatar.cc' },
        { rel: 'dns-prefetch', href: 'https://i.pravatar.cc' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&display=swap' }
      ],
      script: [
        {
          src: '/webchat-widget-1-9259a5fb-c89d-4740-bf8b-9c066d56fc95.js?v=3',
          defer: true
        }
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
  modules: [
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode',
    'nuxt-schema-org'
  ],
  site: {
    url: 'https://promp.com.br',
    name: 'Promp',
    defaultLocale: 'pt-BR',
    description: 'Plataforma de Inteligência Artificial para Automação de Vendas e Atendimento Omnichannel'
  },
  // @ts-ignore
  colorMode: {
    classSuffix: ''
  },
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
    lazy: false,
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
    serveStatic: true,
    compressPublicAssets: true
  },
})
