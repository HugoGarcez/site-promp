#!/bin/bash
set -e

PROJECT_DIR="/var/www/site-promp"
LOG_DIR="${PROJECT_DIR}/logs"
LOG_FILE="${LOG_DIR}/blog-cron.log"

mkdir -p "${LOG_DIR}"

echo "==================================================" >> "${LOG_FILE}"
echo "[$(date '+%Y-%m-%d %H:%M:%S')] 🚀 Iniciando execução agendada do Blog Promp..." >> "${LOG_FILE}"

cd "${PROJECT_DIR}"

# Garante PATH com Node.js e npm
export PATH="/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:$PATH"

# Executa o pipeline diário
if npm run blog >> "${LOG_FILE}" 2>&1; then
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] ✅ Pipeline executado com sucesso." >> "${LOG_FILE}"
    
    # Sincroniza imagens estáticas para o diretório de build se existir
    if [ -d "${PROJECT_DIR}/.output/public/images" ]; then
        cp -r "${PROJECT_DIR}/public/images/"* "${PROJECT_DIR}/.output/public/images/" 2>/dev/null || true
    fi
    
    # Tenta comitar e enviar para o repositório git se configurado
    git add content/blog/ public/images/blog/ 2>/dev/null || true
    git commit -m "chore(blog): auto-publish daily article [$(date '+%Y-%m-%d')]" 2>/dev/null || true
    git push origin master 2>/dev/null || true
else
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] ⚠️ Aviso durante execução do pipeline de blog." >> "${LOG_FILE}"
fi

echo "[$(date '+%Y-%m-%d %H:%M:%S')] 🏁 Concluído." >> "${LOG_FILE}"
echo "==================================================" >> "${LOG_FILE}"
