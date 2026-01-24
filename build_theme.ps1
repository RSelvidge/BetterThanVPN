Write-Host "Building BetterThanVPN for WordPress..."
npm run build

Write-Host "Copying Assets..."
Copy-Item -Path "dist\*" -Destination "betterthanvpn-theme" -Recurse -Force

Write-Host "Zipping Theme..."
# Remove old zip if exists
if (Test-Path "betterthanvpn-upload.zip") { Remove-Item "betterthanvpn-upload.zip" }
tar -a -c -f betterthanvpn-upload.zip betterthanvpn-theme

Write-Host "Done! Upload 'betterthanvpn-upload.zip' to WordPress."
Pause
