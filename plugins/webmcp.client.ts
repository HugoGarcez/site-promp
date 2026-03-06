/**
 * WebMCP Plugin — Promp
 * Protocolo: https://webmachinelearning.github.io/webmcp/
 *
 * Registra ferramentas da Promp para agentes de IA (ChatGPT, Claude, Gemini, etc.)
 * via navigator.modelContext (Web Machine Learning Community Group / W3C draft).
 *
 * Cada ferramenta expõe uma ação ou dado do site que o agente pode invocar.
 */

interface ModelContextTool {
    name: string
    description: string
    inputSchema?: object
    execute: (input: Record<string, unknown>, client: unknown) => Promise<unknown>
    annotations?: { readOnlyHint?: boolean }
}

interface ModelContext {
    registerTool: (tool: ModelContextTool) => void
    unregisterTool: (name: string) => void
}

declare global {
    interface Navigator {
        modelContext?: ModelContext
    }
}

export default defineNuxtPlugin(() => {
    // Aguarda o navigator estar disponível (client-side only)
    if (typeof navigator === 'undefined' || !('modelContext' in navigator) || !navigator.modelContext) {
        // WebMCP não suportado pelo browser atual — aguarda suporte nativo futuro
        console.debug('[WebMCP] navigator.modelContext não disponível neste browser. Suporte chegará com adoção da spec.')
        return
    }

    const ctx = navigator.modelContext

    const tools: ModelContextTool[] = [
        // ── Informações do site ──────────────────────────────────────────────────
        {
            name: 'get_site_info',
            description: 'Retorna informações gerais sobre a Promp: produto, URL, logo e descrição resumida da plataforma.',
            annotations: { readOnlyHint: true },
            execute: async () => ({
                name: 'Promp',
                url: 'https://promp.com.br',
                logo: 'https://promp.com.br/icon.png',
                description: 'Plataforma de automação de vendas e atendimento com IA para WhatsApp, Instagram, Telegram e outros canais.',
                country: 'Brasil',
                language: 'pt-BR',
            }),
        },

        // ── Planos e preços ──────────────────────────────────────────────────────
        {
            name: 'get_pricing_plans',
            description: 'Lista os planos de preço disponíveis na Promp com funcionalidades incluídas e links de contratação.',
            annotations: { readOnlyHint: true },
            execute: async () => ({
                currency: 'BRL',
                billing: 'mensal',
                plans: [
                    {
                        id: 'starter',
                        name: 'Starter',
                        description: 'Ideal para pequenas empresas começando com IA.',
                        features: [
                            '1 canal conectado',
                            'IA humanizada',
                            'Base de conhecimento',
                            'Suporte por WhatsApp',
                        ],
                        cta_url: 'https://wa.me/5522992371763?text=Quero+o+plano+Starter+da+Promp',
                    },
                    {
                        id: 'growth',
                        name: 'Growth',
                        description: 'Para empresas que querem escalar atendimento e vendas.',
                        features: [
                            'Múltiplos canais (WhatsApp, Instagram, Telegram)',
                            'Multi-agentes',
                            'CRM visual integrado',
                            'Disparo em massa',
                            'Relatórios avançados',
                        ],
                        cta_url: 'https://wa.me/5522992371763?text=Quero+o+plano+Growth+da+Promp',
                    },
                    {
                        id: 'enterprise',
                        name: 'Enterprise',
                        description: 'Solução personalizada para grandes operações.',
                        features: [
                            'Tudo do Growth',
                            'Integrações customizadas',
                            'SLA garantido',
                            'Onboarding dedicado',
                            'API access',
                        ],
                        cta_url: 'https://wa.me/5522992371763?text=Quero+conhecer+o+plano+Enterprise+da+Promp',
                    },
                ],
                pricing_section_url: 'https://promp.com.br/#precos',
            }),
        },

        // ── Funcionalidades ──────────────────────────────────────────────────────
        {
            name: 'get_features',
            description: 'Lista as funcionalidades da plataforma Promp disponíveis para os clientes.',
            annotations: { readOnlyHint: true },
            execute: async () => ({
                features: [
                    { id: 'ia_humanizada', name: 'IA Humanizada', description: 'IA com tom de voz personalizado, treinada nos documentos da empresa.' },
                    { id: 'multi_canal', name: 'Multi-canal', description: 'WhatsApp, Instagram, Telegram, Email, Webchat, Shopee, Mercado Livre, Shein, Magalu.' },
                    { id: 'multi_agente', name: 'Multi-agente', description: 'Múltiplos agentes de IA operando simultaneamente.' },
                    { id: 'crm_visual', name: 'CRM Visual', description: 'Kanban de leads e clientes integrado à plataforma.' },
                    { id: 'disparo_massa', name: 'Disparo em Massa', description: 'Envio de mensagens em lote para listas de contatos.' },
                    { id: 'follow_up', name: 'Follow-up Inteligente', description: 'Recuperação automática de conversas abandonadas.' },
                    { id: 'audio_humano', name: 'Áudio Humano', description: 'Respostas em áudio geradas por IA com voz natural.' },
                    { id: 'relatorios', name: 'Relatórios', description: 'Métricas de conversão, atendimento e desempenho da IA.' },
                    { id: 'config_rapida', name: 'Configuração Rápida', description: 'IA pronta em 5 minutos com upload de documentos.' },
                    { id: 'seguranca', name: 'Segurança', description: 'Dados protegidos com criptografia e conformidade LGPD.' },
                ],
                features_section_url: 'https://promp.com.br/#funcionalidades',
            }),
        },

        // ── Contato ──────────────────────────────────────────────────────────────
        {
            name: 'get_contact_info',
            description: 'Retorna formas de contato com a equipe Promp para suporte, vendas ou parcerias.',
            annotations: { readOnlyHint: true },
            execute: async () => ({
                whatsapp: {
                    number: '+55 22 99237-1763',
                    link: 'https://wa.me/5522992371763',
                    message_template: 'Olá, quero mais informações da IA para minha empresa',
                },
                website: 'https://promp.com.br',
                country: 'Brasil',
                support_hours: '24/7 via IA, equipe humana em horário comercial (BRT)',
            }),
        },

        // ── Navegar para seção ───────────────────────────────────────────────────
        {
            name: 'navigate_to_section',
            description: 'Navega para uma seção específica da página do site Promp. Use isso para guiar o usuário para informações relevantes.',
            inputSchema: {
                type: 'object',
                properties: {
                    section: {
                        type: 'string',
                        enum: ['hero', 'ia', 'informacoes', 'funcionalidades', 'precos', 'depoimentos'],
                        description: 'ID da seção de destino na página.',
                    },
                },
                required: ['section'],
            },
            execute: async (input) => {
                const section = input.section as string
                const el = document.getElementById(section)
                if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    return { success: true, navigated_to: section }
                }
                return { success: false, error: `Seção "${section}" não encontrada na página.` }
            },
        },

        // ── Iniciar trial / contato de vendas ────────────────────────────────────
        {
            name: 'start_trial',
            description: 'Inicia o processo de trial ou contato de vendas da Promp redirecionando o usuário para o WhatsApp com uma mensagem contextual.',
            inputSchema: {
                type: 'object',
                properties: {
                    plan: {
                        type: 'string',
                        enum: ['starter', 'growth', 'enterprise', 'generico'],
                        description: 'Plano de interesse do usuário. Use "generico" se não souber.',
                    },
                    message: {
                        type: 'string',
                        description: 'Mensagem personalizada opcional para incluir no contato.',
                    },
                },
                required: ['plan'],
            },
            execute: async (input) => {
                const plan = input.plan as string
                const customMessage = input.message as string | undefined

                const planMessages: Record<string, string> = {
                    starter: 'Olá, tenho interesse no plano Starter da Promp!',
                    growth: 'Olá, tenho interesse no plano Growth da Promp!',
                    enterprise: 'Olá, quero conhecer o plano Enterprise da Promp!',
                    generico: 'Olá, quero mais informações sobre a Promp!',
                }

                const message: string = customMessage ?? planMessages[plan] ?? planMessages['generico']!
                const url = `https://wa.me/5522992371763?text=${encodeURIComponent(message)}`

                window.open(url, '_blank', 'noopener,noreferrer')
                return { success: true, plan, whatsapp_url: url }
            },
        },
    ]

    // Registrar todas as ferramentas
    let registered = 0
    for (const tool of tools) {
        try {
            ctx.registerTool(tool)
            registered++
        }
        catch (err) {
            console.warn(`[WebMCP] Erro ao registrar ferramenta "${tool.name}":`, err)
        }
    }

    console.info(`[WebMCP] ${registered}/${tools.length} ferramentas registradas com sucesso. 🤖`)
})
