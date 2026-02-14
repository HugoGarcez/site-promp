# Guia de Deploy no Easypanel (Método Simplificado)

Este projeto foi configurado para ser implantado no Easypanel utilizando o método **Nixpacks** (Zero Config), que detecta automaticamente que é um projeto Nuxt 3 e configura tudo para você.

## Passos para o Deploy

### 1. Limpeza (Se você já tentou antes)
Se você já tinha um aplicativo criado no Easypanel que estava dando erro, a recomendação é **excluí-lo** e criar um novo para garantir que não restem configurações antigas de Docker.

### 2. Criar o Aplicativo
1. No seu Projeto no Easypanel, clique no botão **+ Service** (ou + App).
2. Escolha **App**.
3. Dê o nome `site-promp` (ou outro de sua preferência).

### 3. Configurar a Fonte (Source)
1. Vá na aba **General** > seção **Source**.
2. Selecione **GitHub**.
3. Escolha o repositório: `HugoGarcez/site-promp`.
4. Branch: `master`.
5. Clique em **Save**.

### 4. Configurar o Build (MUITO IMPORTANTE)
1. Vá na aba **Build**.
2. Em **Build Method**, selecione **Nixpacks** (NÃO use Dockerfile).
3. Certifique-se de que os campos de configuração do Nixpacks estejam vazios (padrão) ou automáticos.
4. Clique em **Save**.

### 5. Configurar Variáveis (Opcional, mas Recomendado)
1. Vá na aba **Environment**.
2. Adicione as seguintes variáveis para garantir:
   - `HOST`: `0.0.0.0`
   - `PORT`: `3000`
   - `NITRO_PRESET`: `node-server`
3. Clique em **Save**.

### 6. Implantar
1. Clique no botão **Deploy** (no topo à direita).
2. Acompanhe os logs. O Nixpacks irá automaticamente:
   - Instalar o Node.js
   - Rodar `npm install`
   - Rodar `npm run build`
   - Iniciar o servidor com o comando correto.

## Solução de Problemas
- Se o deploy ficar "verde" mas o site não abrir, verifique se a **Porta do Container** na aba **Network** está definida como `3000`.
