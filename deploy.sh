#!/bin/bash

# Silver Ant Marketing - Deployment Script
echo "🚀 Starting deployment process..."

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📁 Initializing git repository..."
    git init
fi

# Add all files
echo "📦 Adding files to git..."
git add .

# Commit changes
echo "💾 Committing changes..."
git commit -m "Deploy Silver Ant Marketing website with lazy loading"

# Check if remote origin exists
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "⚠️  No remote origin found."
    echo "Please add your GitHub repository as remote origin:"
    echo "git remote add origin https://github.com/YOUR_USERNAME/silver-ant-marketing.git"
    exit 1
fi

# Push to GitHub
echo "🌐 Pushing to GitHub..."
git push origin main

# Build for production
echo "🔨 Building for production..."
npm run build

echo "✅ Deployment completed!"
echo ""
echo "📋 Next steps:"
echo "1. Go to Netlify.com"
echo "2. Connect your GitHub repository"
echo "3. Set build command: npm run build"
echo "4. Set publish directory: out"
echo "5. Deploy!"
echo ""
echo "🎉 Your website will be live with lazy loading functionality!" 