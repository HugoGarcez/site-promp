<script setup lang="ts">
const testimonials = [
  {
    name: 'Juliana Mendes',
    role: 'Fundadora',
    company: 'Lumière E-commerce',
    avatar: 'https://i.pravatar.cc/300?img=32',
    highlight: '+42% de Conversão',
    text: 'Implementamos a IA da Promp no nosso WhatsApp e Instagram. No primeiro mês, o tempo de resposta caiu para segundos e as conversões aumentaram em 42%. Indispensável para quem quer escalar.',
    stars: 5,
    verified: true
  },
  {
    name: 'Rodrigo Silva',
    role: 'Diretor Comercial',
    company: 'Nexus Tech & Distribuição',
    avatar: 'https://i.pravatar.cc/300?img=11',
    highlight: 'Atendimento 24/7 sem fila',
    text: 'Nossa equipe recebia centenas de leads fora do horário comercial e perdia vendas quentes. Hoje a IA qualifica o cliente, tira dúvidas técnicas e já agenda reuniões diretamente.',
    stars: 5,
    verified: true
  },
  {
    name: 'Camila Ferreira',
    role: 'Head de Atendimento',
    company: 'FitLife Suplementos',
    avatar: 'https://i.pravatar.cc/300?img=44',
    highlight: '98% de Satisfação NPS',
    text: 'O suporte ao cliente nunca foi tão ágil. A IA responde sobre rastreio, detalhes dos produtos e recomendações com uma linguagem humanizada e precisa. Recomendo de olhos fechados!',
    stars: 5,
    verified: true
  },
  {
    name: 'Lucas Albuquerque',
    role: 'CEO',
    company: 'Albuquerque Imóveis',
    avatar: 'https://i.pravatar.cc/300?img=60',
    highlight: '3x mais agendamentos',
    text: 'A integração com nosso catálogo de imóveis transformou nossa captação. O cliente recebe as melhores opções em instantes e o corretor só entra no momento certo do fechamento.',
    stars: 5,
    verified: true
  },
  {
    name: 'Beatriz Lima',
    role: 'Gerente de Operações',
    company: 'Clínica OdontoPrime',
    avatar: 'https://i.pravatar.cc/300?img=49',
    highlight: '-50% de Faltas (No-Show)',
    text: 'Agendamentos automáticos pelo WhatsApp sem precisar de atendente manual. Reduzimos as faltas pela metade com as confirmações e lembretes inteligentes da Promp.',
    stars: 5,
    verified: true
  },
  {
    name: 'Marcelo Duarte',
    role: 'Sócio-Diretor',
    company: 'Grossi Group Consultoria',
    avatar: 'https://i.pravatar.cc/300?img=59',
    highlight: 'Economia de 30h/semana',
    text: 'A robustez da plataforma e a facilidade de treinar a IA com nossos próprios manuais e planilhas superou todas as expectativas. Uma solução moderna de nível enterprise.',
    stars: 5,
    verified: true
  }
]
</script>

<template>
  <section id="depoimentos" class="py-24 bg-slate-50 dark:bg-[#070b14] relative overflow-hidden border-t border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300">
    <!-- Background glow decor -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-primary/10 dark:bg-blue-500/10 rounded-full blur-[140px] pointer-events-none"></div>

    <div class="container mx-auto px-4 relative z-10">
      <!-- Section Header -->
      <div class="max-w-3xl mx-auto text-center mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 dark:bg-blue-950/60 text-secondary dark:text-blue-300 text-xs font-bold border border-primary/20 dark:border-blue-800/50 mb-4 shadow-2xs">
          <span>⭐ PROVA SOCIAL COMPROVADA</span>
        </div>
        <h2 class="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
          Quem usa a Promp, <span class="text-secondary dark:text-blue-400">escala sem limites</span>
        </h2>
        <p class="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          Mais de 500 empresas confiam na nossa IA para acelerar vendas, qualificar leads e encantar clientes 24 horas por dia.
        </p>
      </div>

      <!-- Testimonials Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <div
          v-for="(item, idx) in testimonials"
          :key="idx"
          class="bg-white dark:bg-slate-800/90 rounded-2xl p-6 md:p-8 border border-slate-200/80 dark:border-slate-700/80 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
        >
          <div>
            <!-- Header card: Stars + Highlight Badge -->
            <div class="flex items-center justify-between gap-2 mb-4">
              <div class="flex gap-1 text-amber-400">
                <svg v-for="s in item.stars" :key="s" class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <span class="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/80">
                {{ item.highlight }}
              </span>
            </div>

            <!-- Quote Text -->
            <p class="text-slate-700 dark:text-slate-300 text-sm md:text-base leading-relaxed mb-6 italic">
              "{{ item.text }}"
            </p>
          </div>

          <!-- Author Info -->
          <div class="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-700/80">
            <img
              :src="item.avatar"
              :alt="item.name"
              class="w-12 h-12 rounded-full object-cover ring-2 ring-primary/30 flex-shrink-0"
              loading="lazy"
            />
            <div class="min-w-0">
              <div class="flex items-center gap-1.5">
                <h4 class="font-bold text-slate-900 dark:text-white text-sm truncate">
                  {{ item.name }}
                </h4>
                <svg v-if="item.verified" class="w-4 h-4 text-[#0052cc] dark:text-blue-400 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
              </div>
              <p class="text-xs text-slate-500 dark:text-slate-400 truncate">
                {{ item.role }} • <span class="text-slate-700 dark:text-slate-300 font-medium">{{ item.company }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Trust Badge Footer -->
      <div class="mt-14 pt-8 border-t border-slate-200/60 dark:border-slate-800 flex flex-wrap items-center justify-center gap-8 text-slate-500 dark:text-slate-400 text-sm font-medium">
        <div class="flex items-center gap-2">
          <span class="text-emerald-500 dark:text-emerald-400 font-bold text-lg">4.9/5</span>
          <span>Média de satisfação dos usuários</span>
        </div>
        <div class="hidden sm:block w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700"></div>
        <div class="flex items-center gap-2">
          <span class="text-secondary dark:text-blue-400 font-bold text-lg">+10 milhões</span>
          <span>De mensagens automatizadas</span>
        </div>
        <div class="hidden sm:block w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700"></div>
        <div class="flex items-center gap-2">
          <span class="text-emerald-500 dark:text-emerald-400 font-bold text-lg">99.9%</span>
          <span>Uptime garantido</span>
        </div>
      </div>
    </div>
  </section>
</template>
