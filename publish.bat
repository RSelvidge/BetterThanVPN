@echo off
echo ==========================================
echo   Publishing BetterThanVPN to GitHub
echo ==========================================
echo.

echo 1. Staging all changes...
git add .

echo.
set /p CommitMessage="Enter a description of your changes: "
echo.

echo 2. Committing changes...
git commit -m "%CommitMessage%"

echo.
echo 3. Pushing to GitHub...
git push origin main

echo.
echo ==========================================
echo   Success! Cloudflare will build automatically.
echo ==========================================
pause
