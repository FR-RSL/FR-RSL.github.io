# Script de build pour production

Write-Host "🏗️  FR-RSL React - Build Production" -ForegroundColor Yellow
Write-Host "====================================" -ForegroundColor Yellow

# Nettoyer le dossier dist précédent
if (Test-Path "dist") {
    Write-Host "🧹 Nettoyage du build précédent..." -ForegroundColor Blue
    Remove-Item -Path "dist" -Recurse -Force
}

# Build de production
Write-Host "📦 Build en cours..." -ForegroundColor Blue
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Erreur lors du build" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Build terminé avec succès!" -ForegroundColor Green
Write-Host "📁 Les fichiers sont dans le dossier 'dist/'" -ForegroundColor Green

# Proposer de prévisualiser
$response = Read-Host "👀 Voulez-vous prévisualiser le build? (y/N)"
if ($response -eq "y" -or $response -eq "Y" -or $response -eq "yes") {
    Write-Host "🌐 Démarrage de la prévisualisation..." -ForegroundColor Blue
    npm run preview
}