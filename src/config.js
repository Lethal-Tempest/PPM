// --- CENTRAL SITE CONFIG ---
// Single source of truth for contact + brand constants used across the app,
// analytics instrumentation and structured data (JSON-LD).

export const SITE = {
  name: "PPM Cocopeat",
  legalName: "PPM Impex",
  url: "https://www.ppmcocopeat.com",
  logo: "https://www.ppmcocopeat.com/logo.png",
  email: "ppmcocopeat@gmail.com",
  // Primary WhatsApp business number in international format, digits only.
  // TODO(owner): confirm this is the WhatsApp-enabled line.
  whatsapp: "919818572757",
  phones: ["+919818572757", "+919899187493"],
  address: {
    street: "Patparganj Industrial Area",
    city: "Delhi",
    postalCode: "110092",
    country: "IN",
  },
  sameAs: [
    // TODO(owner): add real social/marketplace profile URLs when live.
  ],
};

// Site UI languages (URL path segment) mapped to VALID hreflang codes.
// NOTE: "cn" is NOT a valid hreflang value — Chinese must be "zh". We keep the
// existing /cn URL but emit the correct hreflang so Google indexes it properly.
export const LANGS = ["en", "es", "nl", "fr", "cn", "ko"];
export const HREFLANG = {
  en: "en",
  es: "es",
  nl: "nl",
  fr: "fr",
  cn: "zh",
  ko: "ko",
};

// Free lead-capture backend (https://web3forms.com — unlimited free submissions).
// Leads submitted through the enquiry form are emailed to the address registered
// with this Web3Forms access key.
export const WEB3FORMS_KEY = "884ecfeb-5c7b-4b4a-8b5f-5566ffcc75be";

export const waLink = (message) =>
  `https://wa.me/${SITE.whatsapp}${message ? `?text=${encodeURIComponent(message)}` : ""}`;

// Safe dataLayer push helper (works before/after GTM loads, and during SSR/prerender).
export const track = (event, params = {}) => {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
};
