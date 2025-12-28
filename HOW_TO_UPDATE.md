# How to Update BetterThanVPN.us

Since you have connected Cloudflare Pages to your GitHub repository, updating your website is very simple.

## The Easy Way (One-Click)
I have created a script called `publish.bat` in your project folder.

1.  **Double-click** `publish.bat` in your folder.
2.  Enter a short message describing your changes (e.g., "Updated hero image").
3.  Press Enter.
4.  **That's it!** The script pushes your code to GitHub, and Cloudflare automatically detects the change and deploys it live.

## The Manual Way (Command Line)
If you prefer to use the terminal manually:

```powershell
# 1. Stage all your changes
git add .

# 2. Save the changes (Commit)
git commit -m "Describe your change here"

# 3. Upload to GitHub
git push origin main
```
