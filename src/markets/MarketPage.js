import React, { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ArrowLeft, Anchor, Ship, Leaf, CheckCircle } from "lucide-react";
import { getMarket, markets } from "./marketsData";
import { SITE } from "../config";
import { BlogNav, BlogFooter } from "../blog/BlogChrome";
import { DataTable, CtaBox, FaqSection } from "../blog/ui";

export default function MarketPage() {
  const { country } = useParams();
  const market = getMarket(country);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [country]);

  if (!market) return <Navigate to="/coco-peat-supplier" replace />;

  const url = `${SITE.url}/coco-peat-supplier/${market.slug}`;
  const h1 = `Coco Peat Supplier & Exporter to ${market.country}`;

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE.url}/en` },
      { "@type": "ListItem", position: 2, name: "Markets", item: `${SITE.url}/coco-peat-supplier` },
      { "@type": "ListItem", position: 3, name: market.country, item: url },
    ],
  };
  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Coco peat and coir substrate export",
    provider: { "@type": "Organization", name: SITE.name, url: SITE.url },
    areaServed: market.country,
    description: market.metaDesc,
    url,
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: market.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const others = markets.filter((m) => m.slug !== market.slug);

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800">
      <Helmet>
        <html lang="en" />
        <title>{market.metaTitle} | PPM Cocopeat</title>
        <meta name="description" content={market.metaDesc} />
        <link rel="canonical" href={url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${market.metaTitle} | PPM Cocopeat`} />
        <meta property="og:description" content={market.metaDesc} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={`${SITE.url}/assets/coco-block.jpeg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqLd)}</script>
      </Helmet>

      <BlogNav />

      {/* Hero */}
      <header className="pt-32 pb-12 bg-white border-b border-stone-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-stone-400 mb-6" aria-label="Breadcrumb">
            <Link to="/en" className="hover:text-green-700">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/coco-peat-supplier" className="hover:text-green-700">Markets</Link>
            <span className="mx-2">/</span>
            <span className="text-stone-500">{market.country}</span>
          </nav>
          <div className="text-5xl mb-4">{market.flag}</div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 leading-tight mb-5">{h1}</h1>
          <p className="text-lg text-stone-600 leading-relaxed">{market.intro}</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Why this market */}
        <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mb-6 flex items-center gap-2">
          <Leaf className="text-green-700" /> Why {market.demonym} growers choose Indian coco peat
        </h2>
        <ul className="space-y-3 mb-12">
          {market.whyPoints.map((p, i) => (
            <li key={i} className="flex gap-3 text-lg text-stone-600">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" /> {p}
            </li>
          ))}
        </ul>

        {/* Crops */}
        <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mb-4">Crops we supply substrate for</h2>
        <div className="flex flex-wrap gap-3 mb-12">
          {market.crops.map((c, i) => (
            <span key={i} className="px-4 py-2 bg-green-50 text-green-800 rounded-full font-medium border border-green-100">{c}</span>
          ))}
        </div>

        {/* Recommended grades */}
        <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mb-4">Recommended grades for {market.country}</h2>
        <DataTable
          head={["Product", "Specification", "Best for"]}
          rows={market.recommendedGrades.map((g) => [g.grade, g.spec, g.use])}
        />

        {/* Shipping */}
        <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mt-12 mb-6 flex items-center gap-2">
          <Ship className="text-green-700" /> Shipping & logistics to {market.country}
        </h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <div className="p-5 bg-white rounded-xl border border-stone-100 shadow-sm">
            <div className="flex items-center gap-2 text-stone-500 text-sm font-semibold mb-1"><Anchor className="w-4 h-4" /> Destination ports</div>
            <p className="text-stone-800 font-medium">{market.destinationPorts}</p>
          </div>
          <div className="p-5 bg-white rounded-xl border border-stone-100 shadow-sm">
            <div className="flex items-center gap-2 text-stone-500 text-sm font-semibold mb-1"><Ship className="w-4 h-4" /> Typical transit</div>
            <p className="text-stone-800 font-medium">{market.transit}</p>
          </div>
        </div>
        <p className="text-lg text-stone-600 leading-relaxed mb-4">{market.localNote}</p>
        <p className="text-lg text-stone-600 leading-relaxed mb-12">
          Every container to {market.country} ships with a batch lab report plus phytosanitary,
          fumigation and certificate-of-origin documentation under HS code 53050040. New to importing
          from India? Read our{" "}
          <Link to="/blog/import-coco-coir-from-india-phytosanitary-compliance-guide" className="text-green-700 font-semibold underline decoration-green-300 hover:decoration-green-600">
            compliance guide
          </Link>{" "}
          and our{" "}
          <Link to="/blog/5kg-coco-peat-blocks-40ft-container-loading-guide" className="text-green-700 font-semibold underline decoration-green-300 hover:decoration-green-600">
            container loading guide
          </Link>.
        </p>

        <FaqSection faqs={market.faqs} />

        <CtaBox
          heading={`Get a coco peat quote for ${market.country}`}
          sub={`Tell us your port and target volume — we'll return FOB/CIF pricing, lead time and a free sample block.`}
        />

        {/* Other markets */}
        <section className="mt-16 pt-10 border-t border-stone-200">
          <h2 className="text-2xl font-bold text-stone-800 mb-6">We also export to</h2>
          <div className="flex flex-wrap gap-3">
            {others.map((m) => (
              <Link key={m.slug} to={`/coco-peat-supplier/${m.slug}`} className="px-4 py-2 bg-white border border-stone-200 rounded-full hover:border-green-400 hover:text-green-700 transition font-medium">
                {m.flag} {m.country}
              </Link>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/coco-peat-supplier" className="inline-flex items-center text-green-700 font-semibold hover:text-green-800">
              <ArrowLeft className="mr-2 h-4 w-4" /> All export markets
            </Link>
          </div>
        </section>
      </main>

      <BlogFooter />
    </div>
  );
}
