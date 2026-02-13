# Use Node.js LTS (Long Term Support) version
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies (ci for clean install)
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# --- Production Stage ---
FROM node:20-alpine AS production

# Set working directory
WORKDIR /app

# Copy built application from builder stage
COPY --from=builder /app/.output ./.output
# Copy public assets if needed (Nuxt usually bundles them in .output/public)
# COPY --from=builder /app/public ./public 

# Expose port (Easypanel expects 3000 or env PORT)
EXPOSE 3000

# Environment variables
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000
ENV NODE_ENV=production

# Start the application
CMD ["node", ".output/server/index.mjs"]
