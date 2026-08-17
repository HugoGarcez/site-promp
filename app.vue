<script setup lang="ts">
const route = useRoute()
const siteUrl = 'https://promp.com.br'

useHead({
  link: [
    {
      rel: 'canonical',
      href: `${siteUrl}${route.path === '/' ? '' : route.path}`
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'WebSite',
            '@id': `${siteUrl}/#website`,
            'url': siteUrl,
            'name': 'Promp',
            'description': 'Automação de Vendas e Atendimento com Inteligência Artificial para WhatsApp, Instagram e CRM'
          },
          {
            '@type': 'Organization',
            '@id': `${siteUrl}/#organization`,
            'name': 'Promp',
            'url': siteUrl,
            'logo': `${siteUrl}/icon.png`,
            'description': 'Plataforma líder em Inteligência Artificial para WhatsApp, automação de vendas e atendimento omnichannel no Brasil.',
            'sameAs': [
              'https://www.instagram.com/promp.ia',
              'https://www.facebook.com/p/Promp-IA-para-Empresas-61576733933332/',
              'https://play.google.com/store/apps/details?id=com.converta.apppromp',
              'https://apps.apple.com/br/app/promp-ia-vendas-e-marketing/id6752315649'
            ]
          },
          {
            '@type': 'SoftwareApplication',
            '@id': `${siteUrl}/#software`,
            'name': 'Promp IA',
            'applicationCategory': 'BusinessApplication',
            'operatingSystem': 'Web, iOS, Android',
            'offers': {
              '@type': 'Offer',
              'price': '0',
              'priceCurrency': 'BRL',
              'description': 'Teste Gratuito Disponível'
            },
            'aggregateRating': {
              '@type': 'AggregateRating',
              'ratingValue': '4.9',
              'ratingCount': '500'
            }
          }
        ]
      })
    }
  ]
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
