<template>
    <footer class="bg-slate-900 text-white pt-20 pb-10 relative overflow-hidden">
        <!-- Background Gradient (Subtle) -->
        <div class="absolute inset-0 bg-gradient-to-br from-blue-950/50 to-slate-900 pointer-events-none"></div>

        <div class="container mx-auto px-4 relative z-10">

            <!-- Top Section: CTA & Badges -->
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mb-16">
                <div class="max-w-xl">
                    <h2
                        class="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                        Transforme sua<br>empresa com IA</h2>
                    <p class="text-slate-400 text-lg">Milhares de empresas já impulsionaram suas vendas com a força da
                        inteligência artificial.</p>
                </div>

                <div class="flex gap-4 items-center">
                    <!-- Meta Partner Badge -->
                    <div class="hover:scale-105 transition-transform duration-300">
                        <img src="/images/promp-meta-partner.png" alt="Meta Tech Provider 2025"
                            class="h-32 w-auto object-contain" />
                    </div>
                    <!-- WhatsApp Partner Badge -->
                    <div class="hover:scale-105 transition-transform duration-300">
                        <img src="/images/promp-whatsapp-partner.png" alt="WhatsApp Provider 2025"
                            class="h-32 w-auto object-contain" />
                    </div>
                </div>
            </div>

            <!-- Divider -->
            <div class="border-t border-slate-800 mb-16"></div>

            <!-- Middle Section: Main Content -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-16">

                <!-- Brand Column -->
                <div class="lg:col-span-2">
                    <!-- Logo -->
                    <div class="flex items-center gap-2 mb-4">
                        <span class="text-2xl font-bold tracking-tight text-white">promp</span>
                        <span class="bg-secondary text-white text-xs font-bold px-1 py-0.5 rounded">IA</span>
                    </div>

                    <p class="text-slate-400 text-sm mb-6">Inteligência artificial para empresas</p>

                    <!-- Status -->
                    <div class="flex items-center mb-6">
                        <div
                            class="bg-slate-700 text-xs font-bold px-2 py-1 rounded-l text-slate-300 uppercase tracking-wider">
                            Status</div>
                        <div
                            class="bg-green-500 text-xs font-bold px-2 py-1 rounded-r text-white uppercase tracking-wider">
                            UP</div>
                    </div>

                    <!-- Socials -->
                    <div class="flex gap-4">
                        <a href="#"
                            class="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-slate-800 hover:border-slate-600 transition-colors">
                            <!-- Facebook Icon (Lucide-like) -->
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="text-slate-400">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                        </a>
                        <a href="#"
                            class="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-slate-800 hover:border-slate-600 transition-colors">
                            <!-- Instagram Icon -->
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="text-slate-400">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                            </svg>
                        </a>
                        <a href="#"
                            class="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-slate-800 hover:border-slate-600 transition-colors">
                            <!-- Monitor Icon (WebApp/Login) -->
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="text-slate-400">
                                <rect width="20" height="14" x="2" y="3" rx="2"></rect>
                                <line x1="8" x2="16" y1="21" y2="21"></line>
                                <line x1="12" x2="12" y1="17" y2="21"></line>
                            </svg>
                        </a>
                    </div>
                </div>

                <!-- Links Columns -->
                <div class="lg:col-span-1">
                    <h4 class="font-bold text-white mb-6">Links rápidos</h4>
                    <ul class="space-y-4 text-sm text-slate-400">
                        <li><a href="#" class="hover:text-white transition-colors">Início</a></li>
                        <li><a href="#features" class="hover:text-white transition-colors">Funcionalidades</a></li>
                        <li><a href="#pricing" class="hover:text-white transition-colors">Planos e Preços</a></li>
                        <li><a href="#" class="hover:text-white transition-colors">Fale conosco</a></li>
                    </ul>
                </div>

                <div class="lg:col-span-1">
                    <h4 class="font-bold text-white mb-6">Soluções</h4>
                    <ul class="space-y-4 text-sm text-slate-400">
                        <li><a href="#" class="hover:text-white transition-colors">Atendimento Inteligente</a></li>
                        <li><a href="#" class="hover:text-white transition-colors">Vendas Automatizadas</a></li>
                    </ul>
                </div>

                <div class="lg:col-span-1">
                    <h4 class="font-bold text-white mb-6">Recursos</h4>
                    <ul class="space-y-4 text-sm text-slate-400">
                        <li><a href="#" class="hover:text-white transition-colors">Relatórios em Tempo Real</a></li>
                        <li><a href="#" class="hover:text-white transition-colors">Painel de Controle Unificado</a></li>
                    </ul>
                </div>

                <div class="lg:col-span-1">
                    <h4 class="font-bold text-white mb-6">Legal</h4>
                    <ul class="space-y-4 text-sm text-slate-400">
                        <li>
                            <NuxtLink to="/politica-de-privacidade" class="hover:text-white transition-colors">Política
                                de Privacidade</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/politica-de-privacidade" class="hover:text-white transition-colors">Termos de
                                Uso</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/politica-de-cookies-da-promp" class="hover:text-white transition-colors">
                                Política de Cookies</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/lgpd-lei-geral-de-protecao-de-dados"
                                class="hover:text-white transition-colors">Conformidade LGPD</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/acessibilidade-na-promp" class="hover:text-white transition-colors">
                                Acessibilidade</NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Bottom Section: Copyright -->
            <div class="border-t border-slate-800 pt-8 text-center">
                <p class="text-slate-500 text-xs">
                    &copy; 2025 feito com muito ☕ por PROMP IA BUSINESS LTDA 60.671.760/0001-52
                </p>
            </div>

        </div>
    </footer>
</template>

<script setup>
// SiteFooter component
</script>
