#!/usr/bin/env bash
set -e

# ==============================================================================
# Deploy Script: Promp Site -> VPS (DigitalOcean Droplet)
# ==============================================================================

SSH_HOST="${SSH_HOST:-site-promp}"
REMOTE_DIR="${REMOTE_DIR:-/var/www/site-promp}"
BRANCH="${BRANCH:-master}"
AUTO_APPROVE=false

for arg in "$@"; do
    case $arg in
        -y|--yes)
            AUTO_APPROVE=true
            ;;
    esac
done

echo "=================================================="
echo "🚀 Iniciando Deploy para VPS ($SSH_HOST)"
echo "=================================================="

# 1. Verificar alterações locais e enviar para o GitHub
echo "🔍 [1/3] Verificando repositório Git local..."
if [ -n "$(git status --porcelain)" ]; then
    echo "⚠️  Existem alterações locais pendentes:"
    git status -s
    
    if [ "$AUTO_APPROVE" = true ]; then
        CONFIRM="s"
        COMMIT_MSG="Deploy automático via deploy-vps [$(date '+%d/%m/%Y %H:%M')]"
    else
        read -p "Deseja commitar e enviar todas as alterações para o GitHub agora? (s/N): " -r CONFIRM
        if [[ $CONFIRM =~ ^[Ss]$ ]]; then
            read -p "Mensagem de commit [Deploy automático]: " COMMIT_MSG
            COMMIT_MSG=${COMMIT_MSG:-"Deploy automático via deploy-vps [$(date '+%d/%m/%Y %H:%M')]"}
        fi
    fi

    if [[ $CONFIRM =~ ^[Ss]$ ]]; then
        git add .
        git commit -m "$COMMIT_MSG"
        echo "📤 Enviando alterações para origin/$BRANCH..."
        git push origin "$BRANCH"
    else
        echo "⏭️  Prosseguindo com o deploy com os commits já existentes..."
    fi
else
    # Verifica se há commits locais ainda não enviados (ahead)
    UNPUSHED=$(git log origin/"$BRANCH".."$BRANCH" 2>/dev/null || true)
    if [ -n "$UNPUSHED" ]; then
        echo "📤 Enviando commits locais pendentes para origin/$BRANCH..."
        git push origin "$BRANCH"
    else
        echo "✅ Código local sincronizado com GitHub."
    fi
fi

# 2. Conectar via SSH e executar atualização remota no VPS
echo ""
echo "📦 [2/3] Conectando ao servidor VPS e atualizando aplicação..."
ssh -o BatchMode=yes -o StrictHostKeyChecking=accept-new "$SSH_HOST" bash -s << 'EOF'
set -e

cd /var/www/site-promp || exit 1

echo "📥 [VPS] Atualizando código via Git..."
git fetch origin master
git reset --hard origin/master

echo "🧶 [VPS] Instalando dependências..."
npm install

echo "🏗️  [VPS] Compilando aplicação Nuxt..."
export NODE_OPTIONS="--max-old-space-size=4096"
npm run build

echo "🔄 [VPS] Reiniciando serviço no PM2..."
pm2 restart site-promp --update-env || pm2 start .output/server/index.mjs --name site-promp --cwd /var/www/site-promp
pm2 save

echo "🔍 [VPS] Status do processo:"
pm2 status site-promp
EOF

# 3. Health check
echo ""
echo "🩺 [3/3] Validando resposta do site..."
HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" https://promp.com.br || true)

if [[ "$HTTP_STATUS" =~ ^(200|301|302|304|307|308)$ ]]; then
    echo "✅ Health check HTTP: $HTTP_STATUS OK"
else
    echo "⚠️ Resposta HTTP: $HTTP_STATUS"
fi

echo ""
echo "=================================================="
echo "🎉 Deploy concluído com sucesso no VPS!"
echo "🌐 Site no ar: https://promp.com.br"
echo "=================================================="
