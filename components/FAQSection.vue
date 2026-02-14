<script setup>
import { ref } from 'vue';

const openIndex = ref(null);

const faqs = [
    {
        question: "O que é a PROMP e como funciona?",
        answer: "A PROMP é uma plataforma de atendimento e **vendas** com inteligência artificial que automatiza conversas em múltiplos canais (WhatsApp, Instagram, Telegram e WebChat), organiza todos os dados em um painel único e gera relatórios de desempenho em tempo real. Ela centraliza contatos, históricos e indicadores em um só lugar, permitindo que sua empresa acompanhe a operação ao vivo, ajuste estratégias rapidamente e escale o atendimento sem aumentar o time."
    },
    {
        question: "Quais canais de atendimento posso integrar?",
        answer: "Você pode conectar WhatsApp, Instagram, Telegram e o WebChat nativo da PROMP ao mesmo painel. Todos os canais funcionam de forma integrada, permitindo que a IA atenda clientes em qualquer ponto de contato com a mesma eficiência e consistência."
    },
    {
        question: "A IA da PROMP substitui meu time de atendimento?",
        answer: "Sim, a IA da PROMP pode substituir totalmente o atendimento humano, desde o primeiro contato até a resolução completa das demandas, quando esse for o modelo desejado pela empresa. Se preferir, você também pode adotar um modelo **híbrido**, em que a IA qualifica leads, automatiza processos e transfere para o time humano apenas os casos que exigem atendimento personalizado, em tempo real."
    },
    {
        question: "A PROMP garante segurança dos meus dados?",
        answer: "Sim. Utilizamos criptografia e protocolos avançados de proteção, além de adotarmos práticas em conformidade com a LGPD para garantir segurança e governança dos dados. Você tem controle de permissões por equipe e acesso a logs de auditoria, mantendo a operação transparente e segura."
    },
    {
        question: "Como funciona a cobrança?",
        answer: "A PROMP opera no modelo de assinatura mensal, com planos que variam de acordo com o número de usuários, conexões de canais, recursos de IA e integrações disponíveis. Você escolhe o plano ideal conforme o estágio e as necessidades da sua empresa, sem fidelidade, podendo cancelar quando quiser."
    },
    {
        question: "É possível personalizar os fluxos de atendimento?",
        answer: "Sim. Você pode criar fluxos de conversa sob medida para cada cenário do seu negócio, com regras inteligentes, respostas condicionais e automações que se adaptam às suas necessidades. A IA aprende com as interações, permitindo que você refine continuamente os fluxos para aumentar conversão, satisfação e produtividade."
    },
    {
        question: "A PROMP gera relatórios e indicadores de desempenho?",
        answer: "Sim. O sistema coleta métricas essenciais como tempo médio de resposta, número de atendimentos concluídos, taxas de conversão e satisfação, além do desempenho por canal e por equipe. Tudo é apresentado em dashboards simples e visuais, para que você tome decisões rápidas e baseadas em dados confiáveis."
    },
    {
        question: "Posso integrar a PROMP com outros sistemas da minha empresa?",
        answer: "Sim. Além dos canais de atendimento, a PROMP oferece API aberta e webhooks para integrar com CRM, ERP, plataformas de telefonia, e‑commerce e outras ferramentas de gestão. Dessa forma, você cria uma operação realmente conectada, reduz retrabalho e amplia ainda mais o poder da automação."
    },
    {
        question: "Quais tipos de empresas podem usar a PROMP?",
        answer: "A PROMP é flexível e atende desde pequenos negócios até grandes empresas que desejam escalar vendas e atendimento com IA. Ela já é usada em setores como e‑commerce, educação, saúde, finanças, serviços locais e outros segmentos que dependem de relacionamento contínuo com clientes."
    }
];

const toggle = (index) => {
    openIndex.value = openIndex.value === index ? null : index;
};
</script>

<template>
    <section class="py-24 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800" id="faq">
        <div class="container mx-auto px-4 max-w-4xl">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                    Perguntas Frequentes
                </h2>
                <p class="text-lg text-slate-600 dark:text-slate-400">
                    Tire suas dúvidas sobre como a Promp transforma seu atendimento
                </p>
            </div>

            <div class="space-y-4">
                <div v-for="(faq, index) in faqs" :key="index"
                    class="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden transition-all duration-300"
                    :class="{ 'bg-slate-50 dark:bg-slate-800/50 border-primary/20': openIndex === index, 'bg-white dark:bg-slate-900': openIndex !== index }">
                    <button @click="toggle(index)"
                        class="w-full flex items-center justify-between p-6 text-left transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/80">
                        <span class="text-lg font-bold text-slate-900 dark:text-white pr-8">{{ faq.question }}</span>
                        <span class="flex-shrink-0 transition-transform duration-300"
                            :class="{ 'rotate-180': openIndex === index }">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-slate-400" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </span>
                    </button>

                    <div v-show="openIndex === index"
                        class="px-6 pb-6 text-slate-600 dark:text-slate-300 leading-relaxed text-base border-t border-slate-100 dark:border-slate-700/50 pt-4 animate-fade-in-down">
                        <div
                            v-html="faq.answer.replace(/\*\*(.*?)\*\*/g, '<strong class=\'text-primary dark:text-white\'>$1</strong>')">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.animate-fade-in-down {
    animation: fadeInDown 0.3s ease-out forwards;
}

@keyframes fadeInDown {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
