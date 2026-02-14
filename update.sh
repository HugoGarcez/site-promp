#!/bin/bash
set -e # Exit immediately if a command exits with a non-zero status

# Navigate to project directory
cd /var/www/site-promp || exit

echo "🚀 Starting update process..."

# Pull latest changes
echo "📥 Pulling latest changes..."
git pull origin master

# Install dependencies (cleaner approach)
echo "📦 Installing dependencies..."
# We use 'npm ci' if package-lock.json exists for faster/cleaner install, fall back to install
if [ -f "package-lock.json" ]; then
    npm ci
else
    npm install
fi

# Build the application
echo "🏗️  Building application..."
# Force Node.js to use up to 4GB of memory (utilizing swap)
export NODE_OPTIONS="--max-old-space-size=4096"
npm run build

# Restart PM2 process
echo "🔄 Restarting application..."
pm2 restart site-promp --update-env

echo "✅ Update completed successfully!"
