# Use a lightweight Node.js image for building
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files ensuring they are cached if unchanged
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the source code
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

# Set environment variables
ENV NITRO_HOST=0.0.0.0
ENV NITRO_PORT=3000
ENV NODE_ENV=production

# Start the server
CMD ["node", ".output/server/index.mjs"]
