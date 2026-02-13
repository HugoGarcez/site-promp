<template>
    <div class="container mx-auto px-4 py-12 max-w-4xl">
        <h1 class="text-4xl font-bold mb-8 text-slate-900 dark:text-white">Acessibilidade na PROMP</h1>
        <div class="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-300">
            <p class="mb-4">Na PROMP, acreditamos que a tecnologia deve ser acessível a todas as pessoas. Nosso
                compromisso é garantir que nosso site e nossas soluções possam ser utilizadas de forma inclusiva,
                independentemente de limitações físicas, sensoriais, cognitivas ou tecnológicas.</p>

            <h2 class="text-2xl font-bold mt-8 mb-4 text-slate-800 dark:text-slate-100">Nosso Compromisso</h2>
            <ul class="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Inclusão digital:</strong> buscamos desenvolver páginas que atendam a diferentes perfis de
                    usuários.</li>
                <li><strong>Diretrizes internacionais:</strong> seguimos as recomendações da WCAG (Web Content
                    Accessibility Guidelines) para tornar o conteúdo mais claro e navegável.</li>
                <li><strong>Acessibilidade contínua:</strong> entendemos que acessibilidade não é um recurso fixo, mas
                    um processo de melhoria constante.</li>
            </ul>

            <h2 class="text-2xl font-bold mt-8 mb-4 text-slate-800 dark:text-slate-100">Recursos de Acessibilidade</h2>
            <ul class="list-disc pl-6 mb-4 space-y-2">
                <li>Navegação compatível com leitores de tela.</li>
                <li>Textos alternativos em imagens para melhor compreensão.</li>
                <li>Estrutura de conteúdo clara, com títulos e subtítulos hierárquicos.</li>
                <li>Contraste adequado para leitura em diferentes dispositivos.</li>
                <li>Compatibilidade com navegação por teclado.</li>
            </ul>

            <h2 class="text-2xl font-bold mt-8 mb-4 text-slate-800 dark:text-slate-100">Entre em Contato</h2>
            <p class="mb-4">Caso encontre alguma barreira de acessibilidade em nosso site ou tenha sugestões de
                melhoria, entre em contato:</p>
            <p class="mb-4">
                <a href="mailto:acessibilidade@promp.com.br"
                    class="inline-flex items-center gap-2 text-primary hover:underline font-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                    acessibilidade@promp.com.br
                </a>
            </p>
        </div>
    </div>
</template>

<script setup>
useHead({
    title: 'Acessibilidade - Promp',
    meta: [
        { name: 'description', content: 'Compromisso da Promp com a acessibilidade e inclusão digital.' }
    ]
})
</script>
