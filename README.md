# KeepClose — Static Landing Template

This package contains a multi-page static landing site with:
- nicer design & subtle CSS animations
- two contact forms that POST to a Google Sheets Web App
- easy deployment instructions for GitHub Pages, Netlify, or Vercel

## Files
- index.html, about.html, features.html, contact.html
- assets/style.css
- assets/main.js
- README.md (this file)
- apps_script.gs (Google Apps Script code to deploy)

---

## 1) Quick local preview
Open `index.html` in your browser. For best results, serve via a simple static server (optional):
```
python -m http.server 8000
# then open http://localhost:8000
```

---

## 2) Google Sheets + Apps Script (form backend)
To save form submissions to Google Sheets:

1. Create a new Google Sheet. Note the Sheet ID from the URL.
2. Open **Extensions → Apps Script**.
3. Replace the default `Code.gs` with the contents of `apps_script.gs` (provided in this repo).
4. In the script, set `SHEET_NAME` correctly (default: 'responses').
5. Save, then **Deploy → New deployment → Select type: Web app**.
   - Set **Execute as**: Me
   - Set **Who has access**: Anyone
6. Deploy and copy the **Web app URL**.

7. Edit `assets/main.js` and replace the placeholder `WEBAPP_URL` with your Web app URL, then commit to the repo.

---

## 3) Deploy to GitHub Pages
1. Create a GitHub repo (public).
2. Upload all files (root should include `index.html`).
3. In the repo: Settings → Pages → Source: `main` branch, folder `/root`.
4. Save. Your site will be available at:
   `https://yourusername.github.io/your-repo-name/`

---

## 4) Deploy to Netlify (drag & drop)
1. Zip the site files (or use this repo).
2. Create a Netlify account.
3. Choose "Sites" → "Add new site" → "Deploy manually" → Drag & drop your site folder or zip.
4. The site is live at `https://<random>.netlify.app`. Configure custom domain later if needed.

---

## 5) Deploy to Vercel (from Git)
1. Create a Vercel account and link your GitHub repo.
2. Import the project and deploy.
3. Vercel gives you a URL like `https://keepclose.vercel.app`.

---

## 6) Notes & Next Steps
- Replace `WEBAPP_URL` in `assets/main.js` after creating the Apps Script web app.
- If you want form confirmations via email, modify the Apps Script to send MailApp emails.
- For production, secure your endpoint and consider reCAPTCHA to avoid spam.

---

Enjoy! If you'd like, I can:
- Replace the placeholder WEBAPP_URL for you (if you deploy Apps Script and paste the URL)
- Add serverless email confirmations
- Wire up Zapier / Make / Integromat integrations
- Improve accessibility and analytics
