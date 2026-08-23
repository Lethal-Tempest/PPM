# PPM Cocopeat — Growth & SEO Package

Delivered as a mix of **live code changes** and **reference docs**. This is the index.

## What's in this folder
| Doc | Module | Contents |
|---|---|---|
| `module-a-blog-articles.md` | A | SEO control sheet for the live blog articles (keywords, meta, schema, outlines) |
| `module-b-gtm-analytics-blueprint.md` | B | GTM + GA4 + Clarity setup, matching the dataLayer events already in code |
| `module-c-outreach-engine.md` | C | Cold email sequences (3 personas × 3 steps), directory listings, product template, response scripts |
| `module-d-onpage-seo.md` | D | Homepage/landing on-page SEO changes (what changed & why) + reusable copy |
| `module-e-global-growth-playbook.md` | E | **Free** zero-budget reach & lead plan: Search Console, Google Business, marketplaces, LinkedIn, backlinks, 30-day checklist |

## What changed in the app (code)
- **Blog:** `/blog` index + **6 article routes** (`src/blog/`), each with Article + FAQPage +
  BreadcrumbList JSON-LD, OG/Twitter tags, internal links and CTAs.
- **Market landing pages:** `/coco-peat-supplier` + **6 country pages** (South Korea, Netherlands,
  USA, Australia, New Zealand, Spain) targeting "coco peat supplier to <country>" (`src/markets/`),
  each with Service + FAQPage + Breadcrumb schema and local shipping/crop detail.
- **Prerendering:** `react-snap` generates crawlable static HTML for **all 20 pages** on every
  `npm run build` (`src/index.js` hydrates, config in `package.json`).
- **hreflang fix:** invalid `cn` replaced with valid `zh` for the Chinese page (`src/config.js`,
  `App.js`, `sitemap.xml`) so Google indexes it.
- **Lead form upgrade:** enquiry form now submits via **Web3Forms** (free) with success/error UI,
  falling back to `mailto:` until a key is added (`src/App.js`, `src/config.js`).
- **Homepage FAQ:** new FAQ section + FAQPage JSON-LD (`src/translations.js`, `src/App.js`).
- **Analytics:** GTM (`GTM-PM7GRFLN`) in `public/index.html`; `click_whatsapp`,
  `quote_inquiry_submit`, `spec_sheet_pdf_download` pushed to `dataLayer` (`src/config.js`).
- **WhatsApp widget:** floating button (bottom-left) in `src/App.js`.
- **Homepage SEO:** rewritten English copy + Organization/WebSite/Product JSON-LD + OG/Twitter;
  Markets + Blog added to nav and footer.
- **PWA manifest:** proper app name, description, brand theme color (`public/manifest.json`).
- **Sitemap:** `public/sitemap.xml` = all languages + 6 blog posts + 7 market pages.

---

## ⚠️ Manual steps you must complete (placeholders in code)

| # | What | Where | Status |
|---|---|---|---|
| 1 | GTM container ID `GTM-PM7GRFLN` | `public/index.html` | ✅ Done |
| 2 | GA4 Measurement ID `G-ECLRHFHF8E` — enter it in the GTM Google Tag | GTM (see Module B §1c) | ⬜ Do in GTM |
| 3 | WhatsApp number `919818572757` | `src/config.js` → `SITE.whatsapp` | ✅ Confirmed |
| 4 | Apache SPA fallback (`.htaccess`) for Spaceship | `public/.htaccess` (auto-copied to `build/`) | ✅ Done |
| 5 | Microsoft Clarity project ID `y6g3y04r21` installed via GTM | GTM Custom HTML tag | ✅ Done |
| 6 | Spec-sheet PDF generated | `public/assets/PPM-CocoPeat-Spec-Sheet.pdf` | ✅ Done |
| 7 | Web3Forms key added | `src/config.js` → `WEB3FORMS_KEY` | ✅ Done |
| 8 | (Recommended) Domain mailbox e.g. `sales@ppmcocopeat.com` | Email host | ⬜ For outreach |
| 9 | Add social/marketplace URLs | `src/config.js` → `SITE.sameAs` | ⬜ Optional |
| 10 | Add an Open Graph share image (1200×630) | `public/` + reference in `index.html` | ⬜ Optional |

**To get a Web3Forms key (step 7):** go to [web3forms.com](https://web3forms.com), enter your email,
copy the access key it emails you, paste it into `WEB3FORMS_KEY` in `src/config.js`, rebuild. Leads
then arrive directly in your inbox (no coding, no server).

---

## Building & deploying

```bash
npm run build      # runs CRA build, then react-snap prerenders to /build
```

Output: `build/en/index.html`, `build/ko/index.html`, …, `build/blog/<slug>/index.html` — each a
full static HTML page (view-source shows the content + JSON-LD).

### Host config (important for a prerendered SPA)
- Serve the static `build/` folder. Each prerendered route has its own `index.html`, so
  `/blog/<slug>` resolves directly.
- For any **unknown** path, fall back to `build/200.html` (react-snap's SPA shell) — **not** the
  prerendered `index.html`. Examples:
  - **Netlify** `_redirects`: `/*  /200.html  200`
  - **Vercel** rewrite: `{ "source": "/(.*)", "destination": "/200.html" }`
  - **Apache**: rewrite non-existent files to `/200.html`
- Keep `public/robots.txt` + `sitemap.xml` as-is; submit the sitemap in Google Search Console.

### Build troubleshooting
- **`react-snap can not run twice` / `Device or resource busy`:** a Chromium process from a prior
  interrupted build is still open. Kill stray `chrome`/`chromium` processes, then rebuild. (Normal
  one-shot `npm run build` doesn't hit this.)
- react-snap runs at **concurrency 1** with **crawl off** (only the `reactSnap.include` routes are
  prerendered) — this was tuned for reliability with React 19. If you add routes, add them to
  `reactSnap.include` in `package.json`.
- The wider `browserslist.production` (adds `safari >=12`, `chrome >=73`) is intentional: it makes
  CRA transpile optional chaining so react-snap's older headless Chromium can parse the bundle.

---

## Suggested rollout order
1. Complete manual steps 1–5 above.
2. `npm run build`, deploy, add host fallback rule, submit sitemap in Search Console.
3. Configure GTM + GA4 + Clarity (Module B), verify events, publish.
4. Publish directory listings (Module C §2) on IndiaMART / TradeKey / Go4World / FIEO.
5. Launch cold outreach sequences (Module C §1) from the domain mailbox.
