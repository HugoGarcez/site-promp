/**
 * useWebMCP — Composable para verificar suporte ao protocolo WebMCP
 * https://webmachinelearning.github.io/webmcp/
 */
export function useWebMCP() {
    const isSupported = ref(false)

    onMounted(() => {
        isSupported.value = typeof navigator !== 'undefined' && 'modelContext' in navigator
    })

    return {
        /** Indica se o browser suporta navigator.modelContext (WebMCP) */
        isSupported: readonly(isSupported),
    }
}
