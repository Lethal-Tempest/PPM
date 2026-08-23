# Module D — Homepage & Core Landing Page On-Page SEO (implemented)

All changes below are **already applied** to the React app. This documents what changed and why,
and gives you the copy to reuse elsewhere.

---

## 1. Metadata (per-language, via react-helmet in `src/App.js`)

Every language route now emits: `<title>`, meta description, canonical, **Open Graph**
(`og:type`, `og:site_name`, `og:title`, `og:description`, `og:url`, `og:image`, `og:locale`),
**Twitter Card** (`summary_large_image`), and hreflang alternates (already present).

**English homepage (`src/translations.js` → `en.meta`):**
- **Title (54):** `Coco Peat Exporter & Supplier in India | PPM Cocopeat`
- **Description (158):** `Wholesale supplier & exporter of low EC washed coco peat, 5kg coir pith blocks & buffered coir from India. Lab-tested, MSME & RCMC certified. Request a quote.`

The static `public/index.html` shell also carries default title / description / OG so the page
is meaningful before React hydrates and for any crawler that reads the raw shell.

## 2. Structured data (JSON-LD in `src/App.js`)

Three blocks now render on the homepage:
- **Organization** — name, legal name, logo, email, phone, postal address (Delhi), `sameAs` (add
  your social/marketplace URLs in `src/config.js`).
- **WebSite** — name, url, language.
- **Product** (one per catalogue item) — name, description, image, HSN as `additionalProperty`, brand.

## 3. Above-the-fold copy (`src/translations.js` → `en`)

| Element | Before | After |
|---|---|---|
| H1 | "Nature's Best Substrate" | **"Export-Grade Coco Peat & Coir Blocks from India"** |
| Sub-headline | "Premium Organic Coir Pith & Coco Peat Blocks for Global Export." | "Low EC washed coco peat, buffered coir & 5kg blocks — lab-tested and shipped worldwide by container. MSME & RCMC certified exporter." |
| Primary CTA | "Get a Quote" | "Get a Free Quote" |
| Trust badges | (unchanged) MSME · GST · EPC · RCMC certification banner | (unchanged, still shown) |

> The H1 now leads with the primary keyword ("Coco Peat … from India") instead of a slogan, while
> the sub-headline carries the high-intent secondary keywords (low EC, buffered, 5kg, container).

## 4. Product section (crawler + buyer scannable)

Product names and descriptions were rewritten to include real specs (`src/translations.js`):
- **"Washed Low EC Coco Peat Blocks (5kg)"** — EC <0.5 mS/cm, pH 5.5–6.8, 75–80 L expansion.
- **"Buffered Coir Blocks, Grow Bags & Slabs"** — EC <0.8 mS/cm, pH 5.8–6.5, calcium-buffered.

A **"Download Full Specification Sheet (PDF)"** button was added below the product grid — it is
tracked as `spec_sheet_pdf_download` (Module B) and doubles as a lead magnet. **You must add the
actual PDF** at `public/assets/PPM-CocoPeat-Spec-Sheet.pdf` (see deliverables README).

## 5. Other on-page wins shipped alongside
- **Blog** added to the main nav (desktop + mobile) and to the footer — internal-link equity to
  the new content hub.
- **WhatsApp floating widget** (bottom-left) — conversion + tracked click event.
- Homepage `theme-color` set to brand green (`#15803d`).
- `public/sitemap.xml` expanded to all 6 languages + blog index + 3 articles.

---

## Recommended follow-ups (copy-level, optional)
- Add customer/spec logos or a short "Trusted by growers in 6 countries" line near the hero for trust.
- Add an FAQ section to the homepage (mirror the blog FAQs) with `FAQPage` schema for rich results.
- Localise the improved English hero/product copy into es/nl/fr/cn/ko (only English was rewritten;
  other languages keep their existing copy + the new `blog` nav label).
