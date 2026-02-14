# Use a lightweight Node.js image for building
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files ensuring they are cached if unchanged
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the source code
COPY . .

# Build the application
RUN npm run build

# Use a lightweight Node.js image for running
FROM node:20-alpine AS runner

# Set working directory
WORKDIR /app

# Copy the build output from the builder stage
COPY --from=builder /app/.output ./.output

# Expose the port
EXPOSE 3000

# Set environment variables for production
# Ensures the server binds to all interfaces, not just localhost
ENV HOST=0.0.0.0
ENV PORT=3000
ENV NITRO_HOST=0.0.0.0
ENV NITRO_PORT=3000
ENV NODE_ENV=production

# Healthcheck to ensure the container is running properly
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost:3000/ || exit 1

# Start the server directly
CMD ["node", ".output/server/index.mjs"]
