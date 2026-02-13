<template>
    <div class="container mx-auto px-4 py-12 max-w-4xl">
        <h1 class="text-4xl font-bold mb-8 text-slate-900 dark:text-white">Conformidade LGPD (Lei Geral de Proteção de
            Dados)</h1>
        <div class="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-300">
            <p class="mb-4">A Promp está em total conformidade com a <strong>LGPD (Lei nº 13.709/2018)</strong>,
                garantindo a transparência e a segurança no tratamento dos dados pessoais de nossos clientes e usuários.
            </p>

            <h2 class="text-2xl font-bold mt-8 mb-4 text-slate-800 dark:text-slate-100">Nossos Pilares de Conformidade
            </h2>
            <ul class="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Transparência:</strong> Informamos claramente como e por que coletamos dados.</li>
                <li><strong>Finalidade:</strong> Os dados são coletados apenas para fins específicos e legítimos.</li>
                <li><strong>Segurança:</strong> Implementamos medidas técnicas e administrativas para proteger os dados
                    contra acessos não autorizados.</li>
                <li><strong>Direitos do Titular:</strong> Facilitamos o exercício dos direitos de acesso, correção e
                    exclusão de dados pelos nossos usuários.</li>
            </ul>

            <h2 class="text-2xl font-bold mt-8 mb-4 text-slate-800 dark:text-slate-100">Encarregado de Dados (DPO)</h2>
            <p class="mb-4">Para solicitações relacionadas a dados pessoais, entre em contato com nosso Encarregado de
                Dados (DPO) através do e-mail:</p>
            <p class="mb-4">
                <a href="mailto:suporte@promp.com.br"
                    class="inline-flex items-center gap-2 text-primary hover:underline font-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                    suporte@promp.com.br
                </a>
            </p>
        </div>
    </div>
</template>

<script setup>
useHead({
    title: 'Conformidade LGPD - Promp',
    meta: [
        { name: 'description', content: 'Compromisso da Promp com a Lei Geral de Proteção de Dados (LGPD).' }
    ]
})
</script>
