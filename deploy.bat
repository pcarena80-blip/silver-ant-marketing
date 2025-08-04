@echo off
echo 🚀 Starting deployment process...

REM Check if git is initialized
if not exist ".git" (
    echo 📁 Initializing git repository...
    git init
)

REM Add all files
echo 📦 Adding files to git...
git add .

REM Commit changes
echo 💾 Committing changes...
git commit -m "Deploy Silver Ant Marketing website with lazy loading"

REM Check if remote origin exists
git remote get-url origin >nul 2>&1
if errorlevel 1 (
    echo ⚠️  No remote origin found.
    echo Please add your GitHub repository as remote origin:
    echo git remote add origin https://github.com/YOUR_USERNAME/silver-ant-marketing.git
    pause
    exit /b 1
)

REM Push to GitHub
echo 🌐 Pushing to GitHub...
git push origin main

REM Build for production
echo 🔨 Building for production...
npm run build

echo ✅ Deployment completed!
echo.
echo 📋 Next steps:
echo 1. Go to Netlify.com
echo 2. Connect your GitHub repository
echo 3. Set build command: npm run build
echo 4. Set publish directory: out
echo 5. Deploy!
echo.
echo 🎉 Your website will be live with lazy loading functionality!
pause 