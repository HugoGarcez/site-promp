#!/bin/bash

# Navigate to project directory
cd /var/www/site-promp || exit

# Pull latest changes
echo "Pulling latest changes..."
git pull origin master

# Install dependencies (in case package.json changed)
echo "Installing dependencies..."
npm install

# Build the application
echo "Building application..."
npm run build

# Restart PM2 process
echo "Restarting application..."
pm2 restart site-promp

echo "Update completed successfully! 🚀"
