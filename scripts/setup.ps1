# Script d'installation et de démarrage pour FR-RSL React

Write-Host "🎮 FR-RSL React - Setup & Start" -ForegroundColor Yellow
Write-Host "================================" -ForegroundColor Yellow

# Vérifier si Node.js est installé
if (Get-Command node -ErrorAction SilentlyContinue) {
    Write-Host "✅ Node.js détecté : $(node --version)" -ForegroundColor Green
} else {
    Write-Host "❌ Node.js non détecté" -ForegroundColor Red
    Write-Host "Veuillez installer Node.js depuis https://nodejs.org/" -ForegroundColor Yellow
    Write-Host "Version recommandée : 18.x ou supérieure" -ForegroundColor Yellow
    exit 1
}

# Vérifier si npm est installé
if (Get-Command npm -ErrorAction SilentlyContinue) {
    Write-Host "✅ npm détecté : $(npm --version)" -ForegroundColor Green
} else {
    Write-Host "❌ npm non détecté" -ForegroundColor Red
    exit 1
}

# Installer les dépendances
Write-Host "📦 Installation des dépendances..." -ForegroundColor Blue
npm install

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Erreur lors de l'installation des dépendances" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Dépendances installées avec succès!" -ForegroundColor Green

# Proposer de démarrer le serveur de développement
$response = Read-Host "🚀 Voulez-vous démarrer le serveur de développement? (y/N)"
if ($response -eq "y" -or $response -eq "Y" -or $response -eq "yes") {
    Write-Host "🌐 Démarrage du serveur de développement..." -ForegroundColor Blue
    Write-Host "Le site sera accessible sur http://localhost:3000" -ForegroundColor Green
    npm run dev
}