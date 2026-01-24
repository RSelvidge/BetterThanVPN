# How to Update Your WordPress Site

Because your site is a high-performance custom application wrapped in a WordPress Theme, you cannot edit the design or content directly inside the WordPress Dashboard (like you would with a standard template).

**You must make changes locally on your computer, then update the theme.**

## The Workflow

### 1. Make Changes Locally
Open your project folder and edit the files in `src/` just like before.
*   **Content**: Edit text in `src/pages/*.js`
*   **Styles**: Edit `src/style.css`
*   **Images**: Add to `public/` and update code references.

### 2. Prepare the Update (Build)
Once you are happy with your changes locally (previewing with `npm run dev`), you need to package them for WordPress.

1.  Open your terminal in VS Code.
2.  Run the following commands to build and package a new ZIP:

```powershell
# 1. Build the code (Minify and Optimize)
npm run build

# 2. Update the theme folder (Copy new assets)
Copy-Item -Path "dist\*" -Destination "betterthanvpn-theme" -Recurse -Force

# 3. Create the Upload Zip (Standard format)
tar -a -c -f betterthanvpn-upload.zip betterthanvpn-theme
```

### 3. Upload to WordPress
1.  Go to your **WordPress Dashboard** -> **Appearance** -> **Themes**.
2.  *Optional but Recommended*: Activate a different theme temporarily (like "Twenty Twenty-Four") so you can delete the old "BetterThanVPN" theme, OR use a plugin like "Easy Theme and Plugin Upgrades" that allows you to overwrite themes.
3.  Click **Add New** -> **Upload Theme**.
4.  Select your new `betterthanvpn-upload.zip` file.
5.  Click **Install Now** -> **Activate**.

## Fast Edit Tip
If you are just changing **Text** or **CSS** and don't want to re-upload the whole theme every time:
1.  You *can* technically edit `style.css` in **Appearance -> Theme File Editor**, but your changes will be overwritten next time you upload the theme.
2.  It is strictly better to keep your local code as the "Source of Truth".
