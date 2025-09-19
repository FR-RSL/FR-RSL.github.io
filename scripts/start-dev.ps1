# Script de démarrage du serveur de développement
$env:Path = "C:\Program Files\nodejs;" + $env:Path

Write-Host "🎮 FR-RSL React - Démarrage du serveur de développement" -ForegroundColor Yellow
Write-Host "==========================================================" -ForegroundColor Yellow

# Vérification de Node.js
try {
    $nodeVersion = node --version
    Write-Host "✅ Node.js version: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Node.js non trouvé. Veuillez redémarrer PowerShell ou votre ordinateur." -ForegroundColor Red
    exit 1
}

# Vérification de npm
try {
    $npmVersion = npm --version
    Write-Host "✅ npm version: $npmVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ npm non trouvé" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "🚀 Démarrage du serveur..." -ForegroundColor Blue
Write-Host "📍 URL: http://localhost:3000" -ForegroundColor Green
Write-Host "⏹️ Arrêter avec Ctrl+C" -ForegroundColor Yellow
Write-Host ""

# Démarrer le serveur
npm run dev