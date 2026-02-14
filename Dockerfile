# Estágio de Build
FROM node:20-alpine AS builder

# Diretório de trabalho
WORKDIR /app

# Copia os arquivos de dependência
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o código fonte
COPY . .

# Executa o build
RUN npm run build

# Estágio de Execução (Runner)
FROM node:20-alpine AS runner

# Diretório de trabalho
WORKDIR /app

# Copia apenas o resultado do build do estágio anterior
COPY --from=builder /app/.output ./.output

# Define variáveis de ambiente para produção
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000
ENV NITRO_HOST=0.0.0.0
ENV NITRO_PORT=3000

# Expõe a porta 3000
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["node", ".output/server/index.mjs"]
