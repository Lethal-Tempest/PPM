# Module B — GTM, GA4, Clarity Tracking Blueprint

This blueprint matches **what is already wired into the codebase**. The React app pushes
clean custom events to `window.dataLayer`; GTM just needs to listen for them and forward
to GA4. This is more reliable than guessing at DOM selectors, because the events fire from
the components themselves.

> **First: replace the placeholder container ID.**
> In `public/index.html` (two places) swap `GTM-XXXXXXX` for your real GTM container ID.
> Nothing below works until this is done.

---

## 0. The dataLayer contract (already implemented)

`src/config.js` exposes `track(event, params)`. These events already fire:

| Event name (dataLayer) | Fires when | Extra params pushed | Code location |
|---|---|---|---|
| `click_whatsapp` | User clicks the floating WhatsApp button or a blog WhatsApp CTA | `link_location` (`floating_widget` / `blog_cta`) | `src/App.js` (`WhatsAppButton`), `src/blog/ui.js` (`CtaBox`) |
| `quote_inquiry_submit` | Enquiry form is submitted | `form_id`, `buyer_country`, `language` | `src/App.js` (`handleSubmit`) |
| `spec_sheet_pdf_download` | Spec-sheet PDF link is clicked | `file_name` | `src/App.js` (products section) |

Because the events are explicit, you do **not** need DOM-scraping triggers. (A fallback
"click contains `wa.me`" trigger is documented at the end in case you add WhatsApp links
elsewhere.)

---

## 1. GTM setup

### 1a. Variables (Variables → New → Data Layer Variable)

Create one Data Layer Variable per custom parameter so GA4 can receive them:

| Variable name | Data Layer Variable Name | Version |
|---|---|---|
| `dlv - link_location` | `link_location` | 2 |
| `dlv - buyer_country` | `buyer_country` | 2 |
| `dlv - language` | `language` | 2 |
| `dlv - form_id` | `form_id` | 2 |
| `dlv - file_name` | `file_name` | 2 |

Also enable the built-in variables **Page Path**, **Page URL**, **Click URL**, **Click Text**
(Variables → Configure).

### 1b. Triggers (Triggers → New → Custom Event)

| Trigger name | Type | Event name (regex off) |
|---|---|---|
| `CE - whatsapp_click` | Custom Event | `click_whatsapp` |
| `CE - quote_submit` | Custom Event | `quote_inquiry_submit` |
| `CE - spec_download` | Custom Event | `spec_sheet_pdf_download` |

### 1c. Tags

**GA4 Configuration tag** (create first):
- Tag type: **Google Tag** (GA4)
- Measurement ID: `G-ECLRHFHF8E` (your GA4 property)
- Trigger: **Initialization - All Pages**

**Three GA4 Event tags** (Tag type: *Google Analytics: GA4 Event*, all reference the config above):

| Tag name | Event name | Event parameters | Trigger |
|---|---|---|---|
| `GA4 - whatsapp_click` | `whatsapp_click` | `link_location` = `{{dlv - link_location}}` | `CE - whatsapp_click` |
| `GA4 - quote_submission` | `generate_lead` | `buyer_country` = `{{dlv - buyer_country}}`, `language` = `{{dlv - language}}`, `form_id` = `{{dlv - form_id}}` | `CE - quote_submit` |
| `GA4 - spec_download` | `file_download` | `file_name` = `{{dlv - file_name}}` | `CE - spec_download` |

> Using GA4's semantic names (`generate_lead`, `file_download`) means GA4 recognises them in
> default reports. Keep the raw `whatsapp_click` custom name — there is no standard equivalent.

### 1d. Publish & verify
1. GTM → **Preview**, enter the site URL.
2. Click the WhatsApp button, submit the enquiry form, click the spec-sheet link.
3. Confirm each `CE - *` trigger fires and the matching GA4 tag fires in Tag Assistant.
4. In GA4 → **DebugView**, confirm `whatsapp_click`, `generate_lead`, `file_download` arrive.
5. **Submit** the GTM container version.

---

## 2. Microsoft Clarity via GTM

### 2a. Install Clarity
1. Get your **Clarity project ID** from clarity.microsoft.com → Settings → Setup.
2. GTM → new tag → **Custom HTML**:
   ```html
   <script type="text/javascript">
     (function(c,l,a,r,i,t,y){
         c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
         t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
         y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
     })(window, document, "clarity", "script", "y6g3y04r21");
   </script>
   ```
3. Trigger: **Initialization - All Pages**. (Set tag firing priority above other tags so the
   session records from the start.)

### 2b. Custom tags (buyer country, landing-page type, bounce signals)
Clarity lets you segment recordings by custom tags. Add a second **Custom HTML** tag,
triggered on **All Pages (DOM Ready)**, that classifies the visitor:

```html
<script>
  (function () {
    if (typeof window.clarity !== 'function') return;
    var path = location.pathname;
    // Landing page type
    var type = path.indexOf('/blog') === 0 ? 'blog'
             : (path === '/' || /^\/(en|es|nl|fr|cn|ko)\/?$/.test(path)) ? 'homepage'
             : 'other';
    window.clarity('set', 'landing_page_type', type);
    // Language from the URL prefix
    var m = path.match(/^\/(en|es|nl|fr|cn|ko)\b/);
    window.clarity('set', 'site_language', m ? m[1] : 'en');
  })();
</script>
```

- **Buyer country:** Clarity auto-captures country from IP — filter recordings by *Country*
  in the dashboard. For self-declared country, add a Clarity tag inside the form-submit flow
  (mirror the `buyer_country` value). Optional enhancement, not required.
- **Bounce signals:** Clarity automatically flags **Dead clicks**, **Rage clicks**, **Excessive
  scrolling** and **Quick backs** — no config needed. Use the "Quick back" and "Scroll depth"
  filters to find pages losing buyers.

### 2c. Recommended Clarity segments
Create saved filters for: `landing_page_type = blog`, `Country = South Korea / Netherlands /
United States`, and `Rage clicks = yes`. Review weekly.

---

## 3. GA4 — Key Events (conversions) & Lead Acquisition funnel

### 3a. Mark events as Key Events
1. Trigger each event at least once (via GTM Preview) so GA4 registers it.
2. GA4 → **Admin → Events** (or **Key events**). Toggle **Mark as key event** for:
   - `generate_lead` — primary conversion (form submissions)
   - `whatsapp_click` — secondary conversion (WhatsApp intent)
   - `file_download` — micro-conversion (spec-sheet interest)
3. (Optional) Import these key events into Google Ads if you run campaigns later.

### 3b. Build the Lead Acquisition funnel (Explore)
GA4 → **Explore → Funnel exploration**:

- **Steps:**
  1. `session_start` (or `page_view`)
  2. `view_item` — *(optional; add a `view_item` push when the products section scrolls into
     view if you want this step. Not currently implemented.)*
  3. `file_download` — spec-sheet download
  4. `whatsapp_click` **OR** `generate_lead` — engaged intent
  5. `generate_lead` — completed lead
- **Breakdown dimension:** `buyer_country` (register it first as a custom dimension, below).
- **Segment comparisons:** blog visitors vs homepage visitors (dimension: Landing page).

### 3c. Register custom dimensions
GA4 → **Admin → Custom definitions → Create custom dimension** (event-scoped):

| Dimension name | Event parameter |
|---|---|
| Buyer Country | `buyer_country` |
| Site Language | `language` |
| WhatsApp Location | `link_location` |
| Spec File | `file_name` |

(These take ~24–48h to populate historically but apply to new data immediately.)

---

## 4. Fallback: click-based WhatsApp trigger (only if you add raw wa.me links elsewhere)

If you later add WhatsApp links **outside** the tracked components, catch them without code:

- Trigger: **Click - Just Links**, fires on *Click URL* matches RegEx `wa\.me|api\.whatsapp\.com`.
- Tag: reuse `GA4 - whatsapp_click` (event `whatsapp_click`), set `link_location` = `{{Click URL}}`.

The floating widget and blog CTAs are already covered by the dataLayer event, so keep this
disabled unless needed (otherwise you may double-count).

---

## Checklist
- [ ] Replace `GTM-XXXXXXX` in `public/index.html` (2 places)
- [ ] Create GA4 property, add Measurement ID to the GA4 config tag
- [ ] Create variables, triggers, tags (sections 1a–1c)
- [ ] Add Clarity tag + custom tags (section 2)
- [ ] GTM Preview → verify all 3 events → Publish
- [ ] Mark `generate_lead`, `whatsapp_click`, `file_download` as key events
- [ ] Register custom dimensions, build funnel exploration
