/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#E84624', // Promp Branding (Red/Orange)
                secondary: '#0E1F4A', // Promp Dark Blue Highlight
                'conversion-green': '#22C55E', // Rei do Zap Conversion Green
                dark: {
                    bg: '#0F172A',
                    surface: '#1E293B',
                    text: '#F8FAFC'
                },
                light: {
                    bg: '#FFFFFF',
                    surface: '#F1F5F9',
                    text: '#0F172A'
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.8s ease-out',
                'fade-in-right': 'fadeInRight 0.8s ease-out',
                'bounce-slow': 'bounce 3s infinite',
                'float': 'float 6s ease-in-out infinite',
                'float-delayed': 'float 6s ease-in-out 3s infinite',
                'float-slow': 'float 8s ease-in-out infinite',
                'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
                'progress': 'progressFill 2s ease-out forwards',
                'slide-up': 'slideUp 0.5s ease-out forwards',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeInRight: {
                    '0%': { opacity: '0', transform: 'translateX(20px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                pulseSoft: {
                    '0%, 100%': { opacity: '1', transform: 'scale(1)' },
                    '50%': { opacity: '0.8', transform: 'scale(1.02)' },
                },
                progressFill: {
                    '0%': { width: '0%' },
                    '100%': { width: '100%' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            }
        },
    },
    plugins: [],
}
