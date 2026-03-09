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
})

useSchemaOrg([
  defineWebSite({
    name: 'Promp',
    url: siteUrl
  }),
  defineOrganization({
    name: 'Promp',
    logo: `${siteUrl}/icon.png`,
    sameAs: []
  })
])
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
