# Guia de Deploy na Digital Ocean (Droplet)

Este guia explica como colocar o site no ar usando um Droplet (VPS) da Digital Ocean, que oferece mais controle e estabilidade.

## 1. Criar o Droplet

1.  Acesse sua conta na [Digital Ocean](https://cloud.digitalocean.com/).
2.  Clique em **Create** > **Droplets**.
3.  **Choose Region:** Escolha a região mais próxima (ex: New York ou San Francisco).
4.  **Choose Image:** Selecione **Ubuntu 24.04 (LTS)** (ou 22.04).
5.  **Choose Size:**
    *   Basic
    *   Regular
    *   **$6/mo** (1 GB / 1 CPU) - **Recomendado** (Suficiente para este site).
6.  **Authentication Method:**
    *   **SSH Key:** (Mais seguro) Selecione sua chave SSH pública.
    *   **Password:** (Mais fácil) Crie uma senha forte para o usuário `root`.
7.  **Hostname:** Dê um nome, ex: `site-promp-server`.
8.  Clique em **Create Droplet**.

## 2. Configurar o DNS

1.  Vá onde você comprou seu domínio (Godaddy, Registro.br, etc).
2.  Crie um registro **Tipo A**.
    *   **Nome/Host:** `@` (ou o subdomínio que desejar)
    *   **Valor/Destino:** O endereço IP do seu novo Droplet (ex: `143.244.xxx.xxx`).

## 3. Rodar o Script de Instalação

Abra o terminal no seu computador e conecte-se ao servidor:

```bash
ssh root@SEU_IP_DO_DROPLET
# (Digite sua senha se escolheu Password)
```

Agora, rode os comandos abaixo para baixar e executar o instalador automático:

```bash
# 1. Baixar o script
curl -O https://raw.githubusercontent.com/HugoGarcez/site-promp/master/setup.sh

# 2. Dar permissão de execução
chmod +x setup.sh

# 3. Rodar o script
./setup.sh
```

O script vai te perguntar apenas uma coisa:
*   **Seu Domínio:** Digite o domínio (ex: `site.promp.com.br` ou `promp.com.br`).

Ele fará todo o resto: instalará Node, Nginx, baixará o site, fará o build e configurará o HTTPS.

## 4. Como Atualizar o Site

Sempre que você fizer alterações no código e enviar para o GitHub (`git push`), entre no servidor e rode estes comandos para atualizar:

```bash
cd /var/www/site-promp
git pull origin master
npm install
npm run build
pm2 restart site-promp
```
