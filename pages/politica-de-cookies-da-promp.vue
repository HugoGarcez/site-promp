<template>
    <div class="container mx-auto px-4 py-12 max-w-4xl">
        <h1 class="text-4xl font-bold mb-8 text-slate-900 dark:text-white">Política de Cookies</h1>
        <div class="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-300">
            <p class="mb-4">Esta Política de Cookies explica o que são cookies e como os usamos. Você deve ler esta
                política para entender o que são cookies, como os usamos, os tipos de cookies que usamos, ou seja, as
                informações que coletamos usando cookies e como essas informações são usadas e como controlar as
                preferências de cookies.</p>
            <p class="mb-4">Para mais informações sobre como usamos, armazenamos e mantemos seus dados pessoais seguros,
                consulte nossa <NuxtLink to="/politica-de-privacidade" class="text-primary hover:underline">Política de
                    Privacidade</NuxtLink>.</p>

            <h2 class="text-2xl font-bold mt-8 mb-4 text-slate-800 dark:text-slate-100">O que são cookies?</h2>
            <p class="mb-4">Cookies são pequenos arquivos de texto que são usados para armazenar pequenas informações.
                Os cookies são armazenados no seu dispositivo quando o site é carregado no seu navegador. Esses cookies
                nos ajudam a fazer o site funcionar corretamente, torná-lo mais seguro, fornecer uma melhor experiência
                ao usuário e entender como o site funciona e analisar o que funciona e onde precisa de melhorias.</p>

            <h2 class="text-2xl font-bold mt-8 mb-4 text-slate-800 dark:text-slate-100">Como usamos os cookies?</h2>
            <p class="mb-4">Como a maioria dos serviços online, nosso site usa cookies primários e de terceiros para
                diversos fins. Os cookies primários são principalmente necessários para que o site funcione corretamente
                e não coletam nenhum dos seus dados de identificação pessoal.</p>
            <p class="mb-4">Os cookies de terceiros usados em nossos sites são usados principalmente para entender como
                o site funciona, como você interage com nosso site, manter nossos serviços seguros, fornecer anúncios
                que sejam relevantes para você e, em geral, fornecer a você uma experiência de usuário melhor e
                aprimorada e ajudar a acelerar suas futuras interações com nosso site.</p>

            <h2 class="text-2xl font-bold mt-8 mb-4 text-slate-800 dark:text-slate-100">Tipos de Cookies que usamos</h2>
            <ul class="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Essenciais:</strong> Alguns cookies são essenciais para que você possa experimentar toda a
                    funcionalidade do nosso site. Eles nos permitem manter as sessões do usuário e prevenir quaisquer
                    ameaças à segurança. Eles não coletam ou armazenam nenhuma informação pessoal.</li>
                <li><strong>Estatísticos:</strong> Esses cookies armazenam informações como o número de visitantes do
                    site, o número de visitantes únicos, quais páginas do site foram visitadas, a origem da visita, etc.
                    Esses dados nos ajudam a entender e analisar o desempenho do site e onde ele precisa de melhorias.
                </li>
                <li><strong>Marketing:</strong> Nosso site exibe anúncios. Esses cookies são usados para personalizar os
                    anúncios que mostramos a você para que sejam significativos para você. Esses cookies também nos
                    ajudam a acompanhar a eficiência dessas campanhas publicitárias.</li>
                <li><strong>Funcionais:</strong> Esses são os cookies que auxiliam certas funcionalidades não essenciais
                    em nosso site. Essas funcionalidades incluem incorporar conteúdo como vídeos ou compartilhar
                    conteúdo no site em plataformas de mídia social.</li>
                <li><strong>Preferências:</strong> Esses cookies nos ajudam a armazenar suas configurações e
                    preferências de navegação, como preferências de idioma, para que você tenha uma experiência melhor e
                    mais eficiente em futuras visitas ao site.</li>
            </ul>

            <h2 class="text-2xl font-bold mt-8 mb-4 text-slate-800 dark:text-slate-100">Como posso controlar as
                preferências de cookies?</h2>
            <p class="mb-4">Caso decida alterar suas preferências posteriormente durante sua sessão de navegação, você
                pode clicar na guia "Política de Privacidade e Cookies" em sua tela. Isso exibirá o aviso de
                consentimento novamente, permitindo que você altere suas preferências ou retire seu consentimento
                inteiramente.</p>
            <p class="mb-4">Além disso, diferentes navegadores fornecem métodos diferentes para bloquear e excluir
                cookies usados por sites. Você pode alterar as configurações do seu navegador para bloquear/excluir os
                cookies. Para saber mais sobre como gerenciar e excluir cookies, visite <a href="https://wikipedia.org"
                    target="_blank" rel="noopener" class="text-primary hover:underline">wikipedia.org</a>, <a
                    href="https://www.allaboutcookies.org" target="_blank" rel="noopener"
                    class="text-primary hover:underline">www.allaboutcookies.org</a>.</p>
        </div>
    </div>
</template>

<script setup>
useHead({
    title: 'Política de Cookies - Promp',
    meta: [
        { name: 'description', content: 'Política de Cookies da Promp. Entenda como utilizamos cookies para melhorar sua experiência.' }
    ]
})
</script>
