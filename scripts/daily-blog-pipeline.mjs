import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

// Carrega variáveis do arquivo .env se existir localmente
function loadLocalEnv() {
  const envPath = path.resolve(process.cwd(), '.env');
  if (fs.existsSync(envPath)) {
    try {
      const content = fs.readFileSync(envPath, 'utf-8');
      for (const line of content.split('\n')) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('#')) continue;
        const eqIdx = trimmed.indexOf('=');
        if (eqIdx > 0) {
          const k = trimmed.substring(0, eqIdx).trim();
          const v = trimmed.substring(eqIdx + 1).trim().replace(/^["']|["']$/g, '');
          if (!process.env[k]) {
            process.env[k] = v;
          }
        }
      }
    } catch (e) {
      console.warn('Não foi possível ler o arquivo .env:', e.message);
    }
  }
}
loadLocalEnv();

const BLOG_DIR = path.resolve(process.cwd(), 'content/blog');
const COVERS_DIR = path.resolve(process.cwd(), 'public/images/blog');

if (!fs.existsSync(BLOG_DIR)) fs.mkdirSync(BLOG_DIR, { recursive: true });
if (!fs.existsSync(COVERS_DIR)) fs.mkdirSync(COVERS_DIR, { recursive: true });

// Matriz de Pautas da Promp focadas em conversão, dores, features e integrações
const TOPIC_BACKLOG = [
  {
    title: "Como Recuperar Carrinhos Abandonados no WhatsApp com IA em Tempo Real",
    slug: "recuperar-carrinhos-abandonados-whatsapp-ia",
    description: "Mais de 70% dos carrinhos em e-commerce são abandonados. Veja como mensagens ativas e áudios com IA no WhatsApp recuperam até 35% das vendas perdidas.",
    category: "Vendas & Conversão",
    tags: ["E-commerce", "Carrinho Abandonado", "WhatsApp", "IA", "Vendas"],
    badge: "E-COMMERCE & CONVERSÃO",
    readingTime: "5 min",
    color1: "#E84624",
    color2: "#0E1F4A",
    solutionLink: "/solucoes/escalar-vendas-whatsapp",
    solutionName: "Escalar Vendas no WhatsApp",
    faq: [
      {
        question: "Quanto tempo após o abandono do carrinho a mensagem deve ser enviada?",
        answer: "O melhor intervalo é entre 15 a 30 minutos após o abandono, quando o cliente ainda está com a intenção de compra fresca na memória."
      },
      {
        question: "A IA da Promp pode enviar cupons dinâmicos de desconto?",
        answer: "Sim! A Promp se conecta à sua loja virtual (Shopify, WooCommerce, Nuvemshop) e pode gerar ofertas personalizadas baseadas no comportamento do lead."
      }
    ],
    contentBuilder: () => `
O abandono de carrinho é a maior dor de cabeça de quem vende online. No Brasil, estimativas apontam que mais de **70% das compras iniciadas não chegam à conclusão**.

O envio tradicional de e-mails de recuperação tem taxas de abertura cada vez mais baixas (em torno de 15% a 20%). Já no WhatsApp, as mensagens atingem **mais de 90% de abertura imediata**.

Neste artigo, você vai entender como a [Promp](/solucoes/escalar-vendas-whatsapp) utiliza **inteligência artificial e áudios personalizados** para transformar carrinhos abandonados em faturamento real.

---

## Por que os Clientes Abandonam Carrinhos?

1. **Dúvidas de Última Hora**: Incerteza sobre frete, prazo de entrega ou compatibilidade do produto.
2. **Falta do Meio de Pagamento Preferido**: O cliente queria pagar via Pix mas a página falhou ou gerou atrito.
3. **Distração Externa**: Notificações e interrupções no celular durante o checkout.

Quando a sua empresa aborda esse cliente no WhatsApp em até 20 minutos com um atendimento humanizado, a taxa de conversão dispara.

---

## O Poder da Abordagem Humanizada com IA

Em vez de disparar uma mensagem genérica de cobrança, a IA da Promp atua de forma consultiva:

\`\`\`
[Exemplo de Mensagem Humanizada Promp]:
"Olá Juliana! Tudo bem? Vi que você estava escolhendo o Vestido Floral no nosso site. Ficou com alguma dúvida sobre o tamanho ou sobre o prazo de entrega para sua região? Se quiser, posso calcular o frete expresso para você agora mesmo!"
\`\`\`

Se o cliente responder com dúvidas, a IA tira todas as dúvidas na hora e gera o link direto com Pix copiado e colado para pagamento imediato.

---

## Como Conectar a Promp ao seu E-commerce

A integração é realizada em poucos minutos através de [Integrações e Webhooks](/solucoes/integracoes-e-automacoes):
- Conexão nativa com Shopify, Nuvemshop, WooCommerce, Hotmart, Kiwify e Eduzz;
- Gatilho automático de abandono de checkout;
- Envio de áudios realistas tirando dúvidas frequentes de entrega e garantia.

---

## Conclusão

Recuperar carrinhos abandonados no WhatsApp é uma das estratégias de maior ROI para qualquer operação de vendas online. [Experimente a Promp gratuitamente](https://app.promp.com.br/signup) e veja suas vendas crescerem no piloto automático.
`
  },
  {
    title: "Follow-up de Vendas no WhatsApp: Como Reengajar Contatos Frios com IA",
    slug: "follow-up-de-vendas-whatsapp-reengajar-leads",
    description: "80% das vendas acontecem entre o 5º e o 12º contato. Saiba como automatizar réguas de follow-up inteligentes no WhatsApp sem parecer insistente.",
    category: "Vendas & Conversão",
    tags: ["Follow-up", "Vendas", "CRM", "Automação", "WhatsApp"],
    badge: "FOLLOW-UP & VENDAS",
    readingTime: "6 min",
    color1: "#0E1F4A",
    color2: "#1E293B",
    solutionLink: "/solucoes/follow-up-de-leads",
    solutionName: "Follow-up Automático de Leads",
    faq: [
      {
        question: "Quantas mensagens de follow-up devem ser enviadas?",
        answer: "Recomendamos uma régua de 3 a 5 contatos espaçados ao longo de 14 dias, sempre alternando os ganchos (conteúdo de valor, cases de sucesso e condições especiais)."
      },
      {
        question: "A IA para de enviar se o cliente responder?",
        answer: "Sim! A Promp detecta a resposta do cliente imediatamente e assume uma conversa consultiva em tempo real."
      }
    ],
    contentBuilder: () => `
A maioria dos vendedores desiste de um lead após a primeira ou segunda tentativa sem resposta. No entanto, pesquisas consagradas de vendas B2B e B2C revelam que **mais de 80% dos fechamentos ocorrem entre a 5ª e a 12ª interação**.

Manter esse acompanhamento manual é quase impossível para equipes sobrecarregadas. É aqui que entra a solução de [Follow-up Automático de Leads](/solucoes/follow-up-de-leads) da Promp.

---

## Os 3 Maiores Erros no Follow-up Tradicional

1. **Mensagens Invasivas e Frequentes Demais**: Enviar "Bom dia, já viu minha proposta?" repetidamente só gera bloqueios.
2. **Esquecer o Lead na Gaveta**: Perder o contato após enviar o orçamento.
3. **Falta de Personalização**: Enviar mensagens copiadas sem considerar o histórico da conversa.

---

## Como Criar uma Régua Inteligente com a IA da Promp

A inteligência artificial da Promp analisa o contexto da negociação anterior e programa mensagens estratégicas:

- **D+1 (24h pós-orçamento)**: Pergunta rápida sobre dúvidas do escopo;
- **D+3**: Envio de um case de sucesso ou depoimento de cliente do mesmo segmento;
- **D+7**: Áudio humanizado convidando para uma ligação rápida de 10 minutos;
- **D+14**: Mensagem de despedida elegante ("Breakup message"), que frequentemente reativa o interesse do cliente.

Veja também como organizar esses leads no funil com nosso guia de [Gestão e Métricas](/solucoes/falta-de-controle).

---

## Conclusão

Não deixe dinheiro na mesa por falta de acompanhamento. [Descubra a automação da Promp](https://app.promp.com.br/signup) e reative centenas de contatos na sua base hoje mesmo.
`
  },
  {
    title: "IA para Clínicas e Consultórios: Como Automatizar Agendamentos e Reduzir No-Shows",
    slug: "ia-para-clinicas-consultorios-agendamento-whatsapp",
    description: "Reduza faltas em consultas em até 70% com confirmações automáticas e agendamentos 24/7 via WhatsApp com a IA da Promp.",
    category: "Casos Reais",
    tags: ["Clínicas", "Consultórios", "Agendamento 24/7", "WhatsApp", "No-show"],
    badge: "SAÚDE & CONSULTÓRIOS",
    readingTime: "5 min",
    color1: "#0E1F4A",
    color2: "#059669",
    solutionLink: "/solucoes/atendimento-fora-do-horario",
    solutionName: "Atendimento 24/7",
    faq: [
      {
        question: "A IA consegue remarcar consultas caso o paciente não possa comparecer?",
        answer: "Sim! Ao receber um aviso de cancelamento, a IA oferece imediatamente novos horários livres na grade do profissional."
      },
      {
        question: "É seguro e compatível com a LGPD?",
        answer: "Totalmente. A Promp opera com criptografia de ponta a ponta e respeita todas as diretrizes da LGPD para dados sensíveis."
      }
    ],
    contentBuilder: () => `
Em consultórios médicos, odontológicos, clínicas de estética e psicologia, a **taxa de faltas (no-show)** pode ultrapassar 30% da agenda, causando prejuízos financeiros graves e horários ociosos.

Com a [IA da Promp](/solucoes/atendimento-fora-do-horario), clínicas conseguem transformar o WhatsApp em uma recepção digital inteligente que funciona 24 horas por dia.

---

## Como a IA Transforma a Recepção da sua Clínica

1. **Agendamento Noturno e aos Fins de Semana**: Pacientes frequentemente lembram de marcar consultas à noite. A IA consulta a agenda e confirma o horário em segundos.
2. **Confirmação Ativa em 2 Etapas**: Disparo de lembretes automáticos com botões de confirmação simples ("1 para Confirmar", "2 para Remarcar").
3. **Instruções Pré-Exame/Consulta**: Envio automático de orientações de preparo, endereço, mapa e recomendações.

Para saber mais sobre como otimizar o tempo da sua equipe, veja nossa solução de [Perguntas Repetitivas e Base de IA](/solucoes/perguntas-repetitivas).

---

## Conclusão

Dê mais produtividade à sua equipe e proporcione uma experiência impecável para seus pacientes com a [Promp](https://app.promp.com.br/signup).
`
  },
  {
    title: "Integração de WhatsApp com CRM: Sincronize Leads e Conversas Automaticamente",
    slug: "integrar-whatsapp-rd-station-hubspot-crm-ia",
    description: "Elimine o trabalho manual de copiar e colar contatos. Descubra como sincronizar conversas do WhatsApp com RD Station, HubSpot, Pipedrive e Ploomes em tempo real.",
    category: "Integrações",
    tags: ["CRM", "HubSpot", "RD Station", "WhatsApp", "Automação"],
    badge: "INTEGRAÇÕES & CRM",
    readingTime: "6 min",
    color1: "#0E1F4A",
    color2: "#3B82F6",
    solutionLink: "/solucoes/integracoes-e-automacoes",
    solutionName: "Integrações e API",
    faq: [
      {
        question: "Quais CRMs são compatíveis com a Promp?",
        answer: "A Promp integra-se nativamente com HubSpot, RD Station CRM, Pipedrive, Ploomes, Bitrix24, ActiveCampaign e qualquer sistema via Webhooks e API REST."
      },
      {
        question: "O histórico completo da conversa fica salvo no card do lead?",
        answer: "Sim! Toda a transcrição, dados coletados pela IA e status da negociação são atualizados automaticamente no CRM."
      }
    ],
    contentBuilder: () => `
Vendedores gastam até **30% do seu tempo diário** apenas preenchendo cadastros manuais, colando históricos de conversas do WhatsApp e movendo cards no CRM.

Além de improdutivo, esse processo causa vazamento de dados: quando um vendedor sai da empresa, ele frequentemente leva os contatos no WhatsApp pessoal.

Com a [solução de Integrações e API](/solucoes/integracoes-e-automacoes) da Promp, cada interação no WhatsApp é automaticamente documentada e sincronizada com o seu funil de vendas.

---

## Vantagens da Sincronização Automática

1. **Criação Instantânea de Oportunidades**: Assim que o lead envia a primeira mensagem no WhatsApp, a IA qualifica o perfil e cria o negócio na etapa correta do funil.
2. **Atualização de Campos Personalizados**: Nome, empresa, faturamento, interesse e orçamento coletados na conversa são preenchidos no CRM sem intervenção humana.
3. **Distribuição Inteligente de Leads (Round-Robin)**: Os leads qualificados são distribuídos em fila para os executivos de vendas disponíveis.

---

## Conclusão

Integre seu WhatsApp ao seu CRM em poucos cliques com a [Promp](https://app.promp.com.br/signup) e tenha visibilidade total do seu pipeline de vendas.
`
  },
  {
    title: "Áudios Humanizados com IA no WhatsApp: O Segredo para Multiplicar Suas Conversões",
    slug: "audios-humanizados-ia-whatsapp-aumentar-conversoes",
    description: "Por que mensagens de voz geram 3x mais confiança no WhatsApp do que textos frios? Veja como a Promp utiliza clonagem de voz e áudios naturais com IA para vender mais.",
    category: "Vendas & Conversão",
    tags: ["Áudios IA", "Vendas", "Humanização", "WhatsApp", "Conversão"],
    badge: "ÁUDIOS HUMANIZADOS & IA",
    readingTime: "5 min",
    color1: "#E84624",
    color2: "#8B5CF6",
    solutionLink: "/solucoes/escalar-vendas-whatsapp",
    solutionName: "Escalar Vendas no WhatsApp",
    faq: [
      {
        question: "Os clientes percebem que é uma inteligência artificial?",
        answer: "Não! A voz da Promp possui entonação natural brasileira, pausas realistas e respiração, transmitindo a sensação de um consultor de vendas dedicado."
      },
      {
        question: "Posso clonar a voz do meu melhor vendedor ou fundadores?",
        answer: "Sim, a plataforma permite treinar modelos de voz exclusivos para representar a identidade da sua marca."
      }
    ],
    contentBuilder: () => `
No Brasil, o WhatsApp é um canal essencialmente pessoal. Quando um cliente entra em contato e recebe um bloco de texto corporativo e robótico, a taxa de resposta cai drasticamente.

Por outro lado, quando ele recebe um **áudio curto, amigável e focado na sua dor**, a sensação de atenção exclusiva gera confiança instantânea.

A [Promp](/solucoes/escalar-vendas-whatsapp) é pioneira no uso de **áudios dinâmicos e ultra-humanizados** gerados por Inteligência Artificial.

---

## Por que Áudios com IA Convertem Tanto?

- **Quebra de Objeções complexas**: Explicar uma condição comercial por áudio soa consultivo e evita mal-entendidos.
- **Engajamento Emocional**: O tom de voz acolhedor aproxima o cliente da decisão de compra.
- **Velocidade de Resposta**: O cliente recebe o áudio em segundos, enquanto está pesquisando o seu produto.

---

## Dê o Próximo Passo

Quer testar como soam os áudios humanizados na sua operação? [Crie sua conta na Promp](https://app.promp.com.br/signup) e surpreenda seus clientes.
`
  },
  {
    title: "Como Qualificar Leads de Meta Ads no WhatsApp em Menos de 3 Segundos",
    slug: "qualificar-leads-meta-ads-whatsapp-ia",
    description: "Investindo alto em anúncios no Instagram e Facebook? Descubra como a IA da Promp atende os cliques em tempo real, filtra curiosos e entrega leads prontos para os vendedores.",
    category: "Tráfego & Ads",
    tags: ["Meta Ads", "Tráfego Pago", "Qualificação", "WhatsApp", "ROI"],
    badge: "TRÁFEGO PAGO & META ADS",
    readingTime: "5 min",
    color1: "#1E293B",
    color2: "#0E1F4A",
    solutionLink: "/solucoes/leads-que-nao-convertem",
    solutionName: "Conversão de Anúncios",
    faq: [
      {
        question: "Como a Promp rastreia a origem do anúncio (UTM)?",
        answer: "A Promp captura os parâmetros de campanha (UTM source, medium, campaign e ad) diretamente no link de clique para o WhatsApp e registra no CRM."
      },
      {
        question: "O que acontece com os leads desqualificados?",
        answer: "A IA responde de forma educada e tira dúvidas gerais, poupando o tempo dos vendedores para focar apenas nos leads com perfil ideal (ICP)."
      }
    ],
    contentBuilder: () => `
Se você investe em anúncios do tipo **Clique para o WhatsApp (CTWA)** no Meta Ads (Facebook e Instagram), já sabe que a cada minuto de demora na resposta, o Custo por Lead (CPL) e o Custo por Aquisição (CAC) aumentam.

Dados do setor revelam que responder a um lead nos **primeiros 5 minutos aumenta as chances de conversão em até 391%**.

Com a nossa solução de [Conversão de Anúncios](/solucoes/leads-que-nao-convertem), a IA acolhe o lead em menos de 3 segundos com contexto completo do anúncio que ele clicou.

---

## O Funil de Qualificação com IA

1. **Reconhecimento da Oferta**: A IA sabe exatamente qual anúncio o cliente viu e inicia a conversa abordando a oferta específica.
2. **Perguntas de Filtro (ICP)**: A IA coleta dados-chave (orçamento, urgência, tamanho da empresa) sem parecer um formulário burocrático.
3. **Agendamento com o Vendedor**: Se o lead estiver qualificado, a IA agenda a reunião no Google Calendar / Outlook do vendedor imediatamente.

---

## Conclusão

Pare de queimar verba de anúncios com leads frios. [Potencialize seus Meta Ads com a Promp](https://app.promp.com.br/signup).
`
  },
  {
    title: "IA para Imobiliárias e Corretores: Como Agendar Mais Visitas e Vender Imóveis",
    slug: "ia-para-imobiliarias-corretores-whatsapp",
    description: "Clientes imobiliários pesquisam à noite e aos finais de semana. Veja como a Promp envia fotos, plantas e agenda visitas no WhatsApp 24 horas por dia.",
    category: "Casos Reais",
    tags: ["Imobiliárias", "Corretores", "Imóveis", "Agendamento", "WhatsApp"],
    badge: "MERCADO IMOBILIÁRIO",
    readingTime: "6 min",
    color1: "#0E1F4A",
    color2: "#059669",
    solutionLink: "/solucoes/atendimento-fora-do-horario",
    solutionName: "Atendimento 24/7",
    faq: [
      {
        question: "A IA consegue enviar PDFs com fotos e plantas dos imóveis?",
        answer: "Sim! A Promp identifica o código ou localização do imóvel desejado e envia fotos, fichas técnicas e valores diretamente no chat."
      },
      {
        question: "Como o corretor é notificado quando a visita é agendada?",
        answer: "O corretor recebe um resumo no WhatsApp e a visita é inserida automaticamente na sua agenda com todos os dados do cliente."
      }
    ],
    contentBuilder: () => `
No mercado imobiliário, velocidade e disponibilidade são os fatores decisivos para fechar uma venda ou locação.

Quando um comprador encontra um imóvel nos portais (ZAP, VivaReal, OLX) às 21h e manda mensagem, ele quer saber detalhes na hora: valor do condomínio, fotos dos cômodos e se aceita financiamento.

Com a [Promp para Imobiliárias](/solucoes/atendimento-fora-do-horario), seu catálogo de imóveis ganha um consultor inteligente 24/7.

---

## Funcionalidades para Imobiliárias

- **Filtro de Preferências**: A IA pergunta número de quartos, bairro, faixa de preço e envia as opções disponíveis;
- **Agendamento de Visitas Presenciais e Virtuais**: O cliente escolhe dia e horário livres na grade do corretor responsável;
- **Simulação de Financiamento**: A IA calcula estimativas de parcelas e tira dúvidas de documentação.

---

## Conclusão

Multiplique seus agendamentos de visitas com a [Promp para o Mercado Imobiliário](https://app.promp.com.br/signup).
`
  },
  {
    title: "Como Recuperar Boletos e Pix Pendentes pelo WhatsApp com IA Humanizada",
    slug: "recuperar-boletos-pix-vendas-whatsapp",
    description: "Boletos e Pix não pagos representam até 40% das vendas perdidas. Descubra a estratégia de reativação suave no WhatsApp que recupera receitas no piloto automático.",
    category: "Vendas & Conversão",
    tags: ["Recuperação de Vendas", "Pix", "Boletos", "E-commerce", "WhatsApp"],
    badge: "RECUPERAÇÃO DE VENDAS",
    readingTime: "5 min",
    color1: "#E84624",
    color2: "#1E293B",
    solutionLink: "/solucoes/follow-up-de-leads",
    solutionName: "Follow-up Automático de Leads",
    faq: [
      {
        question: "Qual o melhor momento para enviar o lembrete de Pix?",
        answer: "Recomendamos enviar o primeiro lembrete suave entre 30 a 60 minutos após a geração do Pix, disponibilizando novamente a chave Copia e Cola."
      },
      {
        question: "A mensagem soa como uma cobrança agressiva?",
        answer: "Não! A IA adota tom acolhedor de suporte, perguntando se o cliente teve alguma dificuldade no app do banco ou com a aprovação."
      }
    ],
    contentBuilder: () => `
Gerar um boleto ou código Pix é sinal claro de intenção de compra. Contudo, na correria do dia a dia, muitos compradores esquecem de abrir o app do banco ou deixam o código expirar.

Disparar e-mails automáticos quase não traz resultado. Por outro lado, um lembrete consultivo no WhatsApp com o Pix Copia e Cola ao alcance de um clique recupera **até 38% dos pagamentos pendentes**.

Aprenda a aplicar o [Follow-up Automático da Promp](/solucoes/follow-up-de-leads) para maximizar sua taxa de conversão financeira.

---

## Passos para Recuperar Vendas com Pix e Boleto

1. **Aviso Imediato de Código Gerado**: Envio do código Pix de fácil cópia logo após a compra.
2. **Lembrete de Vencimento**: Aviso amigável 2 horas antes de o código expirar.
3. **Oferecimento de Alternativas**: Se o cliente desistir do boleto, a IA oferece parcelamento no cartão de crédito na hora.

---

## Conclusão

Transforme pedidos pendentes em dinheiro no caixa. [Conecte a Promp ao seu checkout](https://app.promp.com.br/signup).
`
  },
  {
    title: "Transbordo Inteligente: Como a IA Direciona Leads Prontos para os Melhores Vendedores",
    slug: "transbordo-inteligente-ia-atendentes-humanos",
    description: "Saiba como criar regras de roteamento avançadas para transferir conversas da IA para atendentes humanos no momento exato do fechamento.",
    category: "Gestão & Métricas",
    tags: ["Transbordo", "Equipe Comercial", "Roteamento", "WhatsApp", "Gestão"],
    badge: "GESTÃO & EQUIPE COMERCIAL",
    readingTime: "5 min",
    color1: "#0E1F4A",
    color2: "#F59E0B",
    solutionLink: "/solucoes/falta-de-controle",
    solutionName: "Gestão e Métricas",
    faq: [
      {
        question: "O atendente humano consegue ver o que a IA conversou antes?",
        answer: "Sim! O vendedor tem acesso à transcrição completa e ao resumo dos pontos principais identificados pela IA."
      },
      {
        question: "É possível configurar regras por especialidade ou região?",
        answer: "Com certeza. A Promp direciona o atendimento com base no produto de interesse, estado/cidade do cliente ou porte da empresa."
      }
    ],
    contentBuilder: () => `
O maior benefício da Inteligência Artificial em vendas não é substituir os seres humanos, mas sim **eliminar as tarefas repetitivas** para que os vendedores dediquem seu tempo exclusivamente a negociar e fechar contratos.

O **Transbordo Inteligente** da Promp atua como um maestro: a IA faz o primeiro contato, responde às perguntas frequentes e, quando detecta alta intenção de compra, transfere o lead para o vendedor certo.

Conheça mais no nosso painel de [Gestão e Métricas](/solucoes/falta-de-controle).

---

## Como Funciona o Gatilho de Transbordo

- **Detecção de Intenção**: A IA identifica frases como "quero fechar hoje", "pode me ligar?", "qual o desconto à vista?";
- **Notificação em Tempo Real**: O vendedor recebe um aviso sonoro e no celular com o link direto para a conversa;
- **Pausa Automática da IA**: A IA se silencia para que o humano conduza a negociação com total liberdade.

---

## Conclusão

Garanta que seus melhores vendedores recebam apenas leads quentes. [Implemente a Promp na sua operação](https://app.promp.com.br/signup).
`
  },
  {
    title: "Segurança e LGPD no WhatsApp com IA: O Guia Completo para Empresas",
    slug: "seguranca-lgpd-inteligencia-artificial-whatsapp",
    description: "Como utilizar inteligência artificial conversacional no WhatsApp em total conformidade com a Lei Geral de Proteção de Dados (LGPD) e garantir a privacidade dos clientes.",
    category: "Segurança & Legal",
    tags: ["LGPD", "Segurança", "Privacidade", "Compliance", "WhatsApp"],
    badge: "SEGURANÇA & CONFORMIDADE",
    readingTime: "6 min",
    color1: "#1E293B",
    color2: "#0E1F4A",
    solutionLink: "/lgpd-lei-geral-de-protecao-de-dados",
    solutionName: "Conformidade LGPD",
    faq: [
      {
        question: "Os dados das conversas dos meus clientes são usados para treinar IAs públicas?",
        answer: "Não! A Promp opera em infraestrutura privada com isolamento estrito de dados (Zero-Data Retention para modelos públicos)."
      },
      {
        question: "Como é tratado o consentimento no WhatsApp?",
        answer: "A Promp permite configurar termos de aceite e políticas de opt-in/opt-out automáticas no primeiro contato."
      }
    ],
    contentBuilder: () => `
A adoção de ferramentas de Inteligência Artificial exige responsabilidade e conformidade jurídica rigorosa.

Com a vigência da **Lei Geral de Proteção de Dados (LGPD)** no Brasil, empresas que processam dados pessoais no WhatsApp precisam garantir segurança de ponta a ponta, armazenamento seguro e controle de acesso.

A [Promp é desenvolvida sob as melhores práticas de conformidade](/lgpd-lei-geral-de-protecao-de-dados).

---

## Pilares de Segurança da Promp

1. **Criptografia em Trânsito e em Repouso**: Todos os dados são transmitidos via TLS 1.3 e armazenados com criptografia AES-256.
2. **Direito ao Esquecimento (Exclusão)**: Suporte completo à exclusão e anonimização de dados a pedido do titular.
3. **Controle Granular de Permissões**: Apenas atendentes e administradores autorizados têm acesso aos chats da empresa.

---

## Conclusão

Automatize seu atendimento com a tranquilidade de uma plataforma 100% segura. [Conheça a conformidade da Promp](https://app.promp.com.br/signup).
`
  },
  {
    title: "Como Reduzir o TMA para Menos de 3 Segundos no WhatsApp e Não Perder Mais Vendas",
    slug: "tma-reduzir-tempo-atendimento-whatsapp-ia",
    description: "O Tempo Médio de Atendimento (TMA) é o principal indicador de conversão no WhatsApp. Veja como a IA da Promp garante respostas instantâneas e sem filas.",
    category: "Vendas & Conversão",
    tags: ["TMA", "Tempo de Atendimento", "Velocidade", "WhatsApp", "Conversão"],
    badge: "RESPOSTA RÁPIDA & TMA",
    readingTime: "4 min",
    color1: "#E84624",
    color2: "#0E1F4A",
    solutionLink: "/solucoes/demora-no-atendimento",
    solutionName: "Resposta Rápida (<3s)",
    faq: [
      {
        question: "Quantos clientes a IA consegue atender ao mesmo tempo?",
        answer: "Ilimitados! A infraestrutura em nuvem da Promp escala automaticamente para responder milhares de pessoas simultaneamente sem nenhuma fila."
      },
      {
        question: "O tempo de resposta afeta o custo dos anúncios?",
        answer: "Sim! Respostas rápidas aumentam o engajamento e sinalizam ao algoritmo de anúncios que o seu destino tem alta taxa de conversão."
      }
    ],
    contentBuilder: () => `
No mundo digital contemporâneo, a paciência do consumidor é medida em segundos. Quando um cliente pergunta o preço no WhatsApp e espera 15 minutos, a chance de ele comprar de um concorrente aumenta em mais de 70%.

Com a solução de [Resposta Rápida em Menos de 3 Segundos](/solucoes/demora-no-atendimento) da Promp, sua empresa nunca mais deixará um comprador esperando.

---

## Impactos da Redução do TMA

- **Experiência 'Uau'**: O cliente é atendido no momento exato em que está mais motivado a comprar.
- **Fim dos Picos de Atendimento**: Lançamentos, promoções e Black Friday sem sobrecarga da equipe.
- **Aumento de 3x na Taxa de Fechamento**: Agilidade traduz-se diretamente em faturamento.

---

## Conclusão

Acelere o atendimento da sua empresa para a velocidade da luz com a [Promp](https://app.promp.com.br/signup).
`
  },
  {
    title: "Como Reativar Base de Clientes Inativos no WhatsApp e Aumentar seu LTV com IA",
    slug: "reativar-clientes-inativos-whatsapp-ia",
    description: "Vender para quem já comprou é até 7x mais barato do que adquirir novos clientes. Descubra como criar campanhas de reativação inteligentes no WhatsApp com a Promp.",
    category: "Vendas & Conversão",
    tags: ["Reativação de Base", "LTV", "Retenção", "WhatsApp", "Vendas"],
    badge: "RETENÇÃO & LTV",
    readingTime: "5 min",
    color1: "#0E1F4A",
    color2: "#10B981",
    solutionLink: "/solucoes/follow-up-de-leads",
    solutionName: "Follow-up Automático de Leads",
    faq: [
      {
        question: "Existe risco de bloqueio do WhatsApp ao disparar para a base?",
        answer: "A Promp utiliza regras inteligentes de espaçamento, aquecimento de número e mensagens hiper-personalizadas para garantir máxima segurança contra bloqueios."
      },
      {
        question: "A IA sabe o que o cliente comprou anteriormente?",
        answer: "Sim! Integrada ao seu ERP ou CRM, a Promp menciona o produto anterior e oferece itens complementares (Cross-sell e Upsell)."
      }
    ],
    contentBuilder: () => `
A maioria das empresas foca toda a sua energia em atrair novos clientes, ignorando a mina de ouro que já existe dentro do seu banco de dados: **clientes que compraram há 60, 90 ou 180 dias**.

Reativar esses contatos com ofertas personalizadas aumenta o **Lifetime Value (LTV)** e reduz a dependência de anúncios caros.

Veja como aplicar o [Follow-up Inteligente da Promp](/solucoes/follow-up-de-leads) para faturar mais com sua base atual.

---

## Estratégias de Reativação de Sucesso

1. **Reposição Automática**: Para produtos de consumo recorrente (suplementos, cosméticos, café), envio de lembrete no momento provável de término do produto.
2. **Condição Especial de Retorno**: Cupons de fidelidade para clientes que não compram há mais de 3 meses.
3. **Lançamentos Exclusivos em Primeira Mão**: Clientes antigos recebem novidades antes do público geral.

---

## Conclusão

Desbloqueie o faturamento escondido na sua base de contatos. [Comece a reativar clientes com a Promp](https://app.promp.com.br/signup).
`
  }
];

function wrapText(text, maxChars = 28) {
  const words = String(text || '').split(' ');
  const lines = [];
  let current = '';
  for (const w of words) {
    if ((current + ' ' + w).trim().length <= maxChars) {
      current = (current + ' ' + w).trim();
    } else {
      if (current) lines.push(current);
      current = w;
    }
  }
  if (current) lines.push(current);
  return lines;
}

async function generateCoverImage({ slug, title, badge, color1, color2 }) {
  const safeBadge = escapeXml(badge);
  const titleLines = wrapText(title, 28);
  const startY = titleLines.length === 1 ? 300 : (titleLines.length === 2 ? 270 : 230);
  const lineHeight = 60;
  const tspans = titleLines.map((line, i) => 
    `<tspan x="100" y="${startY + (i * lineHeight)}">${escapeXml(line)}</tspan>`
  ).join('');

  const svg = `
  <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${color1 || '#E84624'}" />
        <stop offset="100%" stop-color="${color2 || '#0E1F4A'}" />
      </linearGradient>
      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="60" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>

    <rect width="1200" height="630" fill="url(#bgGrad)" />
    <circle cx="1050" cy="150" r="250" fill="#E84624" opacity="0.3" filter="url(#glow)" />
    <circle cx="150" cy="500" r="200" fill="#22C55E" opacity="0.15" filter="url(#glow)" />

    <g transform="translate(100, 80)">
      <rect width="160" height="40" rx="8" fill="#E84624" />
      <text x="80" y="26" fill="#ffffff" font-family="DejaVu Sans, Arial, Helvetica, sans-serif" font-weight="900" font-size="20" text-anchor="middle" letter-spacing="2">PROMP.IA</text>
    </g>

    <g transform="translate(100, 145)">
      <rect width="260" height="36" rx="18" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.25)" />
      <text x="130" y="23" fill="#FFB703" font-family="DejaVu Sans, Arial, Helvetica, sans-serif" font-weight="bold" font-size="13" text-anchor="middle" letter-spacing="1.5">${safeBadge}</text>
    </g>

    <text fill="#FFFFFF" font-family="DejaVu Sans, Arial, Helvetica, sans-serif" font-weight="900" font-size="46">
      ${tspans}
    </text>
    
    <g transform="translate(100, 530)">
      <rect width="1000" height="2" fill="rgba(255,255,255,0.15)" />
      <text x="0" y="35" fill="#94A3B8" font-family="DejaVu Sans, Arial, Helvetica, sans-serif" font-size="16" font-weight="bold">promp.com.br/blog</text>
      <text x="1000" y="35" fill="#22C55E" font-family="DejaVu Sans, Arial, Helvetica, sans-serif" font-size="16" font-weight="bold" text-anchor="end">Automação Inteligente de Vendas</text>
    </g>
  </svg>
  `;

  const coverFileName = `${slug}.webp`;
  const outputPath = path.join(COVERS_DIR, coverFileName);

  await sharp(Buffer.from(svg.trim()))
    .webp({ quality: 90 })
    .toFile(outputPath);

  // Copia para .output/public se existir
  const outputPublicDir = path.resolve(process.cwd(), '.output/public/images/blog');
  if (fs.existsSync(outputPublicDir)) {
    fs.copyFileSync(outputPath, path.join(outputPublicDir, coverFileName));
  }
  const serverPublicDir = '/var/www/site-promp/.output/public/images/blog';
  if (fs.existsSync(serverPublicDir)) {
    try {
      fs.copyFileSync(outputPath, path.join(serverPublicDir, coverFileName));
    } catch {}
  }

  return `/images/blog/${coverFileName}`;
}

async function sendWhatsAppNotification(article) {
  let uazapiUrl = process.env.UAZAPI_URL || process.env.WHATSAPP_API_URL || process.env.PROMP_WEBHOOK_URL;
  const uazapiToken = process.env.UAZAPI_TOKEN || process.env.UAZAPI_KEY || process.env.WHATSAPP_API_KEY || process.env.WHATSAPP_API_TOKEN;
  const rawRecipient = process.env.UAZAPI_NUMBER || process.env.WHATSAPP_NOTIFY_NUMBER || process.env.WHATSAPP_RECIPIENT || '';
  
  const recipients = rawRecipient
    .split(/[,;]+/)
    .map(r => r.trim().replace(/\D/g, ''))
    .filter(Boolean);

  if (recipients.length === 0) {
    recipients.push('5521990408505');
  }

  const messageText = `🚀 *Novo Artigo Publicado no Blog da Promp!*

📰 *${article.title}*
📂 *Categoria:* ${article.category}
⏱️ *Leitura:* ${article.readingTime}
✍️ *Autora:* Letícia Vasconcelos

💡 *Resumo:*
${article.description}

🔗 *Acesse o artigo completo:*
https://promp.com.br/blog/${article.slug}

---
_Promp • Inteligência Artificial & Atendimento Omnichannel_`;

  console.log('\n--- [PREPARANDO NOTIFICAÇÃO UAZAPI / WHATSAPP] ---');
  console.log(`📱 Destinatários (${recipients.length}): ${recipients.join(', ')}`);
  console.log(messageText);
  console.log('--------------------------------------------------\n');

  if (uazapiUrl) {
    // Se a URL for apenas o domínio base ou não tiver endpoint, normaliza para /send/text
    if (!uazapiUrl.includes('/send/') && !uazapiUrl.includes('/message/') && !uazapiUrl.includes('/sendText') && !uazapiUrl.includes('/webhook')) {
      uazapiUrl = uazapiUrl.replace(/\/+$/, '') + '/send/text';
    }

    const headers = {
      'Content-Type': 'application/json'
    };

    if (uazapiToken) {
      headers['token'] = uazapiToken;
      headers['apikey'] = uazapiToken;
      headers['Authorization'] = `Bearer ${uazapiToken}`;
    }

    for (const recipient of recipients) {
      try {
        console.log(`📡 Disparando via UAzapi para ${recipient} em ${uazapiUrl}...`);

        const payload = {
          number: recipient,
          text: messageText,
          message: messageText,
          linkPreview: true,
          options: {
            delay: 1200,
            presence: 'composing',
            linkPreview: true
          }
        };

        const response = await fetch(uazapiUrl, {
          method: 'POST',
          headers,
          body: JSON.stringify(payload)
        });

        const responseText = await response.text();
        console.log(`📡 [${recipient}] Status HTTP: ${response.status} ${response.statusText}`);
        try {
          const json = JSON.parse(responseText);
          console.log(`📦 [${recipient}] Retorno UAzapi:`, JSON.stringify(json, null, 2));
        } catch {
          console.log(`📦 [${recipient}] Retorno UAzapi:`, responseText);
        }

        if (response.ok) {
          console.log(`✅ [${recipient}] Notificação WhatsApp enviada com sucesso!`);
        } else {
          console.warn(`⚠️ [${recipient}] UAzapi retornou status ${response.status}.`);
        }
      } catch (err) {
        console.error(`❌ [${recipient}] Falha na conexão com a API da UAzapi:`, err.message);
      }
    }
  } else {
    console.log('ℹ️ UAZAPI_URL não configurada no ambiente (.env). Mensagem simulada no console.');
  }
}

export async function runDailyBlogPipeline() {
  console.log('🚀 Iniciando Pipeline Diário de Conteúdo Promp (Claude-Blog Engine)...');

  const existingFiles = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.md'));
  const existingSlugs = existingFiles.map(f => {
    const raw = fs.readFileSync(path.join(BLOG_DIR, f), 'utf-8');
    const match = raw.match(/slug:\s*["']?([^"'\n]+)["']?/);
    return match ? match[1] : '';
  });

  // Encontrar o próximo artigo não publicado
  const nextTopic = TOPIC_BACKLOG.find(t => !existingSlugs.includes(t.slug));

  if (!nextTopic) {
    console.log('✅ Todos os tópicos da matriz básica já foram publicados. Para gerar novos, adicione pautas à matriz.');
    return;
  }

  console.log(`📝 Gerando artigo: "${nextTopic.title}"...`);

  // 1. Gerar imagem de capa
  const coverPath = await generateCoverImage(nextTopic);
  console.log(`🎨 Capa gerada em: ${coverPath}`);

  // 2. Data de publicação (hoje)
  const today = new Date().toISOString().split('T')[0];

  // 3. Montar arquivo Markdown
  const frontmatter = `---
title: "${nextTopic.title.replace(/"/g, '\\"')}"
slug: "${nextTopic.slug}"
description: "${nextTopic.description.replace(/"/g, '\\"')}"
date: "${today}"
author: "Letícia Vasconcelos"
authorRole: "Especialista em IA & Estratégia Conversacional | Promp"
authorAvatar: "/images/authors/leticia-vasconcelos.jpg"
category: "${nextTopic.category}"
tags: ${JSON.stringify(nextTopic.tags)}
coverImage: "${coverPath}"
coverAlt: "${nextTopic.title.replace(/"/g, '\\"')}"
readingTime: "${nextTopic.readingTime}"
featured: false
seoKeywords: ${JSON.stringify(nextTopic.tags.map(t => t.toLowerCase()))}
faq:
${nextTopic.faq.map(f => `  - question: "${f.question.replace(/"/g, '\\"')}"\n    answer: "${f.answer.replace(/"/g, '\\"')}"`).join('\n')}
---
`;

  const fullContent = frontmatter + nextTopic.contentBuilder();
  const filePath = path.join(BLOG_DIR, `${nextTopic.slug}.md`);

  fs.writeFileSync(filePath, fullContent.trim() + '\n', 'utf-8');
  console.log(`✔ Artigo publicado em: ${filePath}`);

  // 4. Disparar notificação no WhatsApp
  await sendWhatsAppNotification(nextTopic);

  console.log('🎉 Pipeline diário concluído com sucesso!');
}

// Executar quando chamado via CLI
if (process.argv[1] && process.argv[1].endsWith('daily-blog-pipeline.mjs')) {
  runDailyBlogPipeline().catch(console.error);
}
