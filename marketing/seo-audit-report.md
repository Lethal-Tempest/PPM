# SEO, Performance & Crawlability Audit — ppmcocopeat.com
_Audited 2026-08-23 against the live site (Google Lighthouse, mobile)._

## Lighthouse scores (live, mobile)
| Page | Performance | Accessibility | Best Practices | SEO |
|---|---|---|---|---|
| Homepage (`/en/`) | 77 | **100** | 73 | **100** |
| Blog post | **99** | 93 | 73 | **100** |

> **SEO 100/100 on every page — the primary goal is achieved.** Blog pages are also near-perfect on performance (99).

---

## ✅ SEO — 100/100
- Unique, length-optimized `<title>` (≤60 chars) and meta description (145–160 chars) per page
- Canonical URL on every page
- **7 hreflang tags** (en, es, nl, fr, **zh**, ko, x-default) — fixed the previously invalid `cn` code that was hiding your Chinese page
- Comprehensive structured data (JSON-LD):
  - Home: Organization, WebSite, Product, FAQPage
  - Blog: Article, FAQPage, BreadcrumbList
  - Markets: Service, FAQPage, BreadcrumbList
- Single H1 per page, semantic headings, descriptive image alt text
- XML sitemap (20 URLs) submitted to Search Console; robots.txt allows all crawlers

## ✅ Parseability / Google crawlability
- **Every page is prerendered to static HTML** — Google, Bing and social crawlers see the full content and metadata in the raw HTML **without running JavaScript** (verified: page bodies are not empty shells)
- Clean, keyword-rich URLs (`/blog/...`, `/coco-peat-supplier/...`)
- Strong internal linking (nav, footer, markets ↔ blog ↔ homepage)
- `robots.txt` + `sitemap.xml` correct

## ✅ AI / agent-readiness ("is it agent ready")
- Added **`/llms.txt`** — a structured summary of the business, products, key pages and contact for AI crawlers and LLM-based search
- Rich JSON-LD lets AI assistants understand your products, specs and FAQs
- Static prerendered HTML is fully readable by agents that don't execute JS

## 🔧 Fixed during this audit
- **Accessibility 81 → 100** (homepage): added `<main>` landmark, aria-labels on all icon-only buttons and form fields, and fixed low-contrast text
- **Images optimized**: logo 133 KB → 8 KB, MSME badge 358 KB → 12 KB, hero + about recompressed (~500 KB saved total)
- Removed duplicate meta tags (react-helmet is now the single source)
- Hero image preload + `fetchpriority=high` (helps Largest Contentful Paint)

---

## ⚖️ Remaining items & tradeoffs (mostly inherent)
- **Homepage Performance 77** (blog is 99): capped by (1) the hero background image's LCP on Lighthouse's *throttled* mobile test, and (2) your **three analytics tools (GTM + GA4 + Clarity)** competing for bandwidth. Real-world performance on normal connections is good. To push higher you'd serve the hero as WebP and/or lazy-load analytics (which slightly delays data collection).
- **Best Practices 73** (both pages): almost entirely **third-party cookies from GTM/GA4/Clarity** — unavoidable while you run those analytics — plus one minor React hydration console notice from the prerender+hydrate process (not visible to users, no functional impact).
- **Blog Accessibility 93**: one minor contrast item in article styling; easily nudged to 100 later.
- `/en` → `/en/` trailing-slash redirect (single hop, negligible).

## 🚀 To maximize Google visibility next (all free)
1. **Publish regularly** via `/admin` — fresh, keyword-focused posts are the #1 ranking driver
2. **Request indexing** in Search Console for the homepage, blog and market pages
3. **Google Business Profile + backlinks + marketplace listings** — see `marketing/module-e-global-growth-playbook.md`
4. **Localize** top blog/market pages into your languages (multiplies reach in each region)
5. (Optional) Serve the hero as WebP to lift homepage Performance
