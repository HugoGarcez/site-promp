<template>
    <div class="relative w-full h-full min-h-[300px] flex items-center justify-center overflow-hidden bg-transparent">

        <!-- Central Hub -->
        <div
            class="relative z-10 w-24 h-24 bg-white dark:bg-slate-800 rounded-full shadow-2xl flex items-center justify-center border-4 border-slate-50 dark:border-slate-700 animate-float">
            <NuxtImg src="/images/logo-black.png" alt="Promp" class="w-14 dark:hidden" quality="100" />
            <NuxtImg src="/images/logo-white.png" alt="Promp" class="w-14 hidden dark:block" quality="100" />
        </div>

        <!-- Orbiting Icons -->

        <!-- Mercado Pago (Top Left) -->
        <div class="absolute top-[15%] left-[15%] animate-float-delayed">
            <div
                class="w-14 h-14 bg-[#009EE3] rounded-2xl flex items-center justify-center shadow-lg transform -rotate-12 hover:rotate-0 transition-transform duration-300 hover:scale-110">
                <img src="https://cdn.simpleicons.org/mercadopago/ffffff" class="w-8 h-8" alt="Mercado Pago" />
            </div>
        </div>

        <!-- Shopee (Top Right) -->
        <div class="absolute top-[20%] right-[15%] animate-float-slow">
            <div
                class="w-14 h-14 bg-[#EE4D2D] rounded-2xl flex items-center justify-center shadow-lg transform rotate-6 hover:rotate-0 transition-transform duration-300 hover:scale-110">
                <img src="https://cdn.simpleicons.org/shopee/ffffff" class="w-8 h-8" alt="Shopee" />
            </div>
        </div>

        <!-- WhatsApp (Bottom Left) -->
        <div class="absolute bottom-[20%] left-[20%] animate-float">
            <div
                class="w-12 h-12 bg-[#25D366] rounded-xl flex items-center justify-center shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-300 hover:scale-110">
                <img src="https://cdn.simpleicons.org/whatsapp/ffffff" class="w-7 h-7" alt="WhatsApp" />
            </div>
        </div>

        <!-- OpenAI / ChatGPT (Bottom Right) -->
        <div class="absolute bottom-[25%] right-[20%] animate-float-delayed">
            <div
                class="w-12 h-12 bg-[#10A37F] rounded-xl flex items-center justify-center shadow-lg transform -rotate-6 hover:rotate-0 transition-transform duration-300 hover:scale-110">
                <img src="/images/chatgpt-3uic.png" class="w-8 h-8 object-contain" alt="ChatGPT" />
            </div>
        </div>

        <!-- n8n (Top Center-ish - Repl. WooCommerce) -->
        <div class="absolute top-[15%] left-1/2 -translate-x-1/2 animate-float">
            <div
                class="w-10 h-10 bg-white dark:bg-slate-700 rounded-lg flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300 border border-slate-100 dark:border-slate-600">
                <img src="https://cdn.simpleicons.org/n8n" class="w-6 h-6" alt="n8n" />
            </div>
        </div>

        <!-- Instagram (Bottom Center-ish) -->
        <div class="absolute bottom-[10%] left-1/2 -translate-x-1/2 animate-float-slow">
            <div
                class="w-10 h-10 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 rounded-lg flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
                <img src="https://cdn.simpleicons.org/instagram/ffffff" class="w-6 h-6" alt="Instagram" />
            </div>
        </div>

        <!-- Decorative Rings/Glow -->
        <div class="absolute inset-0 z-0">
            <div
                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-dashed border-slate-300 dark:border-slate-700 rounded-full animate-spin-slow opacity-30">
            </div>
            <div
                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-dashed border-slate-200 dark:border-slate-800 rounded-full animate-spin-reverse-slow opacity-20">
            </div>
        </div>

    </div>
</template>

<script setup>
// No props needed for simple mock
</script>

<style scoped>
.animate-spin-slow {
    animation: spin 20s linear infinite;
}

.animate-spin-reverse-slow {
    animation: spin 25s linear infinite reverse;
}

@keyframes spin {
    from {
        transform: translate(-50%, -50%) rotate(0deg);
    }

    to {
        transform: translate(-50%, -50%) rotate(360deg);
    }
}
</style>
