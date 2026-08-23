# Module A — SEO Blog Articles (reference)

The three articles are **live in the React app** as prerendered, crawlable pages (source of
truth = the components under `src/blog/`, so there is no copy to drift out of sync). This file
is the SEO control sheet + repurposing reference.

| # | Live URL | Focus keyword | Component |
|---|---|---|---|
| 1 | `/blog/low-ec-vs-high-ec-coco-peat-procurement-guide` | low EC coco peat wholesale supplier | `src/blog/articles/LowVsHighEc.js` |
| 2 | `/blog/5kg-coco-peat-blocks-40ft-container-loading-guide` | 5kg coco peat blocks export container capacity | `src/blog/articles/ContainerLoading.js` |
| 3 | `/blog/import-coco-coir-from-india-phytosanitary-compliance-guide` | import coco coir from India | `src/blog/articles/ImportFromIndia.js` |

Each page ships with: unique `<title>` + meta description, canonical, Open Graph + Twitter
cards, and **three JSON-LD blocks** (`Article`, `FAQPage`, `BreadcrumbList`) rendered via
react-helmet and captured into static HTML by react-snap. Internal links point to
`/en#products` and `/en#enquiry`, and every article ends with a dual CTA (Quote + WhatsApp).

Metadata lives in `src/blog/posts.js` — edit there to tune titles/descriptions/FAQ.

---

## Article 1 — Low EC vs. High EC Coco Peat: The B2B Procurement Guide for Commercial Greenhouses
- **Focus keyword:** low EC coco peat wholesale supplier
- **Secondary:** buffered coco coir bulk · coco peat EC pH specifications · hydroponic substrate importer · washed vs unwashed coir pith
- **Meta title (57):** `Low EC vs High EC Coco Peat: B2B Buying Guide`
- **Meta description (150):** How commercial greenhouses choose between low EC and high EC coco peat. EC/pH specs, buffering, sample testing and wholesale sourcing from India.
- **Slug:** `low-ec-vs-high-ec-coco-peat-procurement-guide`
- **Schema:** Article + FAQPage + BreadcrumbList
- **Section outline:** What EC measures → Low vs High spec table → Washed/Unwashed/Buffered → Why cheapest ≠ cheapest → How to verify before ordering → Matching grade to market → CTA
- **FAQ (also in JSON-LD):** What EC for hydroponics? · Washed vs buffered? · Normal pH range? · How to verify EC before importing?

## Article 2 — 40ft HC Container Loading & Logistics Guide for 5kg Coco Peat Blocks
- **Focus keyword:** 5kg coco peat blocks export container capacity
- **Secondary:** 40ft HC container coco peat quantity · palletized vs floor loaded coir · coco peat blocks per container · coir pith shipping India
- **Meta title (52):** `5kg Coco Peat Blocks: 40ft Container Loading Guide`
- **Meta description (152):** How many 5kg coco peat blocks fit in a 40ft HC container? Palletized vs floor-loaded capacity, weight limits, expansion volume and logistics for importers.
- **Slug:** `5kg-coco-peat-blocks-40ft-container-loading-guide`
- **Schema:** Article + FAQPage + BreadcrumbList
- **Section outline:** Block weight & expansion → 40ft HC capacity table → Palletized vs floor-loaded → Container yield (blocks→litres) → Ports & lead time → Pre-order checklist → CTA
- **FAQ:** How many blocks per 40ft HC? · Palletized or floor-loaded? · How much does a block expand? · Moisture/weight tolerance?

## Article 3 — Importing Coir Substrates from India: Phytosanitary, Quality Testing, and HSN Compliance
- **Focus keyword:** import coco coir from India
- **Secondary:** phytosanitary certificate coco peat · HS code 53050040 coir · fumigation certificate coir export · coir import documentation
- **Meta title (48):** `Importing Coco Coir from India: Compliance Guide`
- **Meta description (151):** Phytosanitary certificates, fumigation, HS code 53050040 and quality testing explained. A step-by-step compliance checklist for importing coco coir from India.
- **Slug:** `import-coco-coir-from-india-phytosanitary-compliance-guide`
- **Schema:** Article + FAQPage + BreadcrumbList
- **Section outline:** Get the HS code right → Core document set table → Phytosanitary & fumigation → Quality testing → Supplier credentials → End-to-end workflow → CTA
- **FAQ:** HS code for coco peat? · Need a phytosanitary certificate? · Documents to import from India? · How to confirm quality?

---

## Repurposing ideas (same content, new channels)
- Turn each FAQ into a LinkedIn post or a short reel script.
- Combine the three into a gated "Importer's Guide to Indian Coco Peat" PDF (also becomes the
  `spec_sheet_pdf_download` lead magnet — see the deliverables README).
- Lift the spec tables into your IndiaMART / TradeKey product pages (Module C).

## Adding a 4th article later
1. Create `src/blog/articles/YourArticle.js` (use the `ui.js` helpers).
2. Add an entry to `src/blog/posts.js` (import the body, fill metadata + FAQ).
3. Add its `/blog/<slug>` path to the `reactSnap.include` array in `package.json`.
4. Add the URL to `public/sitemap.xml`.
