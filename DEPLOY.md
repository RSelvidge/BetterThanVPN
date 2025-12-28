# How to Publish BetterThanVPN

You can publish this website easily using either **Cloudflare Pages** (Recommended for speed) or **GitHub**.

## Option 1: Cloudflare Pages (Fastest)
Since you already have the `dist` folder built, you can deploy it directly without using Git if you prefer, or connect it to Git later.

### Method A: Drag and Drop
1.  Go to the [Cloudflare Dashboard](https://dash.cloudflare.com/).
2.  Navigate to **Workers & Pages** -> **Create Application** -> **Pages** -> **Upload Assets**.
3.  Open your project folder: `c:\Users\rick\OneDrive - Richard Selvidge\Desktop\AntiGravity Projects\BetterThanVPN`
4.  Drag the `dist` folder into the upload area on Cloudflare.
5.  Done! You will get a `*.pages.dev` URL immediately.

## Option 2: GitHub + Cloudflare (Best for Updates)
This sets up a pipeline so the site updates automatically when you change code.

1.  **Create a Repo**: Go to [GitHub.com](https://github.com/new) and create a new repository named `BetterThanVPN`. Do not add a README or .gitignore.
2.  **Push Code**: Run these commands in your terminal (I have already initialized the git repo for you):
    ```powershell
    git add .
    git commit -m "Initial launch"
    git branch -M main
    git remote add origin https://github.com/YOUR_USERNAME/BetterThanVPN.git
    git push -u origin main
    ```
    *(Replace `YOUR_USERNAME` with your actual GitHub username)*
3.  **Connect Cloudflare**:
    *   Go to **Cloudflare Dashboard** -> **Workers & Pages** -> **Create Application** -> **Connect to Git**.
    *   Select your `BetterThanVPN` repository.
    *   **Build Settings**:
        *   **Framework Preset**: Vite
        *   **Build Command**: `npm run build`
        *   **Output Directory**: `dist`
    *   Click **Save and Deploy**.

## Option 3: GitHub Pages
If you prefer hosting directly on GitHub:
1.  Push your code to GitHub (follow steps in Option 2).
2.  Go to Repo **Settings** -> **Pages**.
3.  Source: **GitHub Actions**.
4.  We would need to add a workflow file. Let me know if you want this option and I will create the workflow file for you.
