# KeepClose — Static Landing Template (GitHub Pages ready)

This is a multi-page static landing template for KeepClose with:
- responsive design, subtle CSS animations
- two contact forms that POST JSON to a Google Sheets Web App (Apps Script)
- simple files you can upload to GitHub and serve via GitHub Pages

## Files
- index.html, about.html, features.html, contact.html
- assets/style.css
- assets/main.js
- apps_script.gs (Google Apps Script)
- README.md

---

## 1) Local preview
For quick testing, open `index.html` in your browser. For a better preview run a local server:
```
python -m http.server 8000
# open http://localhost:8000
```

---

## 2) Google Sheets + Apps Script (form backend)
A) Create a Google Sheet. Name the first worksheet `responses` (or edit apps_script.gs to use your sheet name).

B) Open **Extensions → Apps Script** in the sheet, replace the default code with the contents of `apps_script.gs`.

C) Save, then **Deploy → New deployment → Web app**:
 - Execute as: **Me**
 - Who has access: **Anyone**
Deploy and copy the **Web app URL**.

D) Edit `assets/main.js` and replace `REPLACE_WITH_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL` with your Web app URL. Commit the change.

---

## 3) Upload to GitHub & enable Pages
Option A — GitHub web UI (quick):
1. Create a new public repository (e.g., `keepclose`).
2. Upload all files (click "Add file" → "Upload files") — make sure `index.html` is at repo root.
3. Commit changes.

Option B — Git (local):
```
git init
git add .
git commit -m "Initial KeepClose site"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo>.git
git push -u origin main
```

Enable Pages:
1. Go to repo → Settings → Pages.
2. Source: Branch `main` and folder `/ (root)`.
3. Save. GitHub shows a URL like: `https://yourusername.github.io/keepclose/`
The site is live in ~20-60 seconds.

---

## 4) Notes & suggestions
- If forms fail, check your Apps Script deployment and CORS (Apps Script web apps accept POSTs).
- To avoid spam, add a simple honeypot field or later use reCAPTCHA via a serverless function.
- For SSL and a nicer URL, keep using GitHub Pages (HTTPS enabled) or connect a custom domain.

---

If you want, I can:
- Insert your Apps Script web app URL into `assets/main.js` now (paste URL here).
- Create the Git commands with your GitHub username/repo name filled in.
