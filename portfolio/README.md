# Krushna Padole — BI Developer Portfolio

A single-page portfolio: hero, a grid of 7 dashboard cards that open live Power BI
reports directly, an about/skills section, and contact links.

Files:
- `index.html`
- `styles.css`
- `script.js`

No build step, no dependencies — it's plain HTML/CSS/JS.

## Run it locally in VS Code

1. Open the `portfolio` folder in VS Code.
2. Install the **Live Server** extension (by Ritwick Dey) if you don't have it.
3. Right-click `index.html` → **Open with Live Server**.

Or, without any extension, from a terminal in this folder:

```bash
python3 -m http.server 5500
```

Then open `http://localhost:5500` in your browser.

## Before you publish

- Swap the seven dashboard cards for your own Power BI reports (title,
  description, screenshot, and the `href` on each `<a class="card">`).
- Update the email address and LinkedIn/GitHub links in the contact section.
- Rewrite the "About" paragraph with your own experience.

## Deploy

### Option A — GitHub Pages (free, no server needed)

```bash
cd portfolio
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

Then in the GitHub repo: **Settings → Pages → Source → Deploy from branch →
main / root → Save**. Your site will be live at
`https://<your-username>.github.io/<repo-name>/` within a minute or two.

### Option B — Netlify (drag and drop)

1. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag the `portfolio` folder onto the page.
3. Netlify gives you a live URL immediately; you can add a custom domain
   later from the site settings.

### Option C — Vercel

```bash
npm install -g vercel
cd portfolio
vercel
```

Follow the prompts (accept the defaults for a static site) and Vercel gives
you a live URL.
