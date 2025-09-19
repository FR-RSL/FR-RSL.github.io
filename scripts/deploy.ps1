# Script de déploiement manuel sur GitHub Pages
$env:Path = "C:\Program Files\nodejs;" + $env:Path

Write-Host "🚀 FR-RSL React - Déploiement GitHub Pages" -ForegroundColor Yellow
Write-Host "============================================" -ForegroundColor Yellow

# Build de production
Write-Host "📦 Build en cours..." -ForegroundColor Blue
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Erreur lors du build" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Build terminé!" -ForegroundColor Green

# Déploiement via gh-pages
Write-Host "🌐 Déploiement vers GitHub Pages..." -ForegroundColor Blue

if (-not (Get-Command gh-pages -ErrorAction SilentlyContinue)) {
    Write-Host "📦 Installation de gh-pages..." -ForegroundColor Yellow
    npm install -g gh-pages
}

# Déployer le dossier dist
gh-pages -d dist

if ($LASTEXITCODE -eq 0) {
    Write-Host "🎉 Déploiement réussi!" -ForegroundColor Green
    Write-Host "🌍 Votre site sera bientôt disponible sur:" -ForegroundColor Blue
    Write-Host "   https://fr-rsl.github.io/FR-RSL.github.io/" -ForegroundColor Cyan
} else {
    Write-Host "❌ Erreur lors du déploiement" -ForegroundColor Red
}