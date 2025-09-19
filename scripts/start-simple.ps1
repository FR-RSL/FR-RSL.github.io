# Script simple pour demarrer le serveur React
$env:Path = "C:\Program Files\nodejs;" + $env:Path

Write-Host "Demarrage du serveur de developpement React..." -ForegroundColor Green
Write-Host "URL: http://localhost:3000" -ForegroundColor Blue

npm run dev