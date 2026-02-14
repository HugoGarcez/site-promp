#!/bin/bash

# Setup Script for Promp Site (Nuxt 3) on Ubuntu 20.04/22.04/24.04
# Usage: ./setup.sh

set -e

echo "🚀 Iniciando configuração do servidor para o Site Promp..."

# 1. Update System
echo "📦 Atualizando pacotes do sistema..."
sudo apt-get update && sudo apt-get upgrade -y
sudo apt-get install -y curl git nginx certbot python3-certbot-nginx build-essential

# 2. Install Node.js 20
if ! command -v node &> /dev/null; then
    echo "🟢 Instalando Node.js 20..."
    curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
    sudo apt-get install -y nodejs
else
    echo "✅ Node.js já instalado: $(node -v)"
fi

# 3. Install PM2
if ! command -v pm2 &> /dev/null; then
    echo "🔄 Instalando PM2..."
    sudo npm install -g pm2
    pm2 startup systemd
else
    echo "✅ PM2 já instalado."
fi

# 4. Setup Project Directory
PROJECT_DIR="/var/www/site-promp"
REPO_URL="https://github.com/HugoGarcez/site-promp.git"

if [ -d "$PROJECT_DIR" ]; then
    echo "📂 Diretório do projeto já existe. Atualizando repositório..."
    cd $PROJECT_DIR
    git pull origin master
else
    echo "📂 Clonando repositório em $PROJECT_DIR..."
    sudo mkdir -p $PROJECT_DIR
    sudo chown -R $USER:$USER /var/www
    git clone $REPO_URL $PROJECT_DIR
    cd $PROJECT_DIR
fi

# 5. Install Dependencies & Build
echo "🧶 Instalando dependências e fazendo Build..."
npm install
npm run build

# 6. Configure PM2
echo "⚙️ Configurando PM2..."
pm2 delete site-promp 2>/dev/null || true
PORT=3000 HOST=0.0.0.0 NITRO_PORT=3000 NITRO_HOST=0.0.0.0 pm2 start .output/server/index.mjs --name "site-promp"
pm2 save

# 7. Configure Nginx
echo "🌐 Configurando Nginx..."
read -p "Digite o seu domínio (ex: promp.com.br): " DOMAIN_NAME

NGINX_CONF="/etc/nginx/sites-available/site-promp"

sudo bash -c "cat > $NGINX_CONF" <<EOF
server {
    listen 80;
    server_name $DOMAIN_NAME www.$DOMAIN_NAME;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOF

sudo ln -sfn $NGINX_CONF /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx

# 8. Setup SSL with Certbot
echo "🔒 Configurando SSL (HTTPS)..."
sudo certbot --nginx -d $DOMAIN_NAME -d www.$DOMAIN_NAME --non-interactive --agree-tos -m admin@$DOMAIN_NAME --redirect

echo "✅ Setup Finalizado! Seu site deve estar no ar em: https://$DOMAIN_NAME"
