import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ArrowRight, Globe } from "lucide-react";
import { markets } from "./marketsData";
import { SITE } from "../config";
import { BlogNav, BlogFooter } from "../blog/BlogChrome";

export default function MarketsIndex() {
  const url = `${SITE.url}/coco-peat-supplier`;

  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "PPM Cocopeat Export Markets",
    itemListElement: markets.map((m, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `Coco Peat Supplier to ${m.country}`,
      url: `${url}/${m.slug}`,
    })),
  };

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800">
      <Helmet>
        <html lang="en" />
        <title>Coco Peat Supplier & Exporter — Global Markets | PPM Cocopeat</title>
        <meta
          name="description"
          content="PPM Cocopeat exports lab-tested coco peat and coir from India to South Korea, the Netherlands, the USA, Australia, New Zealand and Spain. Find your market."
        />
        <link rel="canonical" href={url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Coco Peat Supplier & Exporter — Global Markets | PPM Cocopeat" />
        <meta property="og:description" content="Lab-tested coco peat & coir exported from India worldwide." />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={SITE.logo} />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(itemListLd)}</script>
      </Helmet>

      <BlogNav />

      <header className="pt-32 pb-12 bg-white border-b border-stone-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest inline-block mb-4">
            <Globe className="inline w-3.5 h-3.5 mr-1 -mt-0.5" /> Global Export
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4">
            Coco Peat Supplier &amp; Exporter Worldwide
          </h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            We ship lab-tested coco peat and coir substrate from India to greenhouse growers,
            nurseries and soil blenders across the globe. Choose your market for local shipping,
            crop and grade details.
          </p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {markets.map((m) => (
            <Link
              key={m.slug}
              to={`/coco-peat-supplier/${m.slug}`}
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition border border-stone-100 flex flex-col"
            >
              <div className="text-4xl mb-3">{m.flag}</div>
              <h2 className="text-xl font-bold text-stone-800 group-hover:text-green-700 transition mb-2">
                Coco Peat Supplier to {m.country}
              </h2>
              <p className="text-stone-600 text-sm leading-relaxed flex-1">
                {m.crops.slice(0, 3).join(" · ")} — CIF {m.destinationPorts.split(",")[0]}.
              </p>
              <span className="mt-4 inline-flex items-center text-green-700 font-semibold text-sm">
                View {m.country} details <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition" />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/en#enquiry"
            className="inline-flex items-center px-7 py-3.5 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition shadow-lg"
          >
            Request a Quote for Your Country <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </main>

      <BlogFooter />
    </div>
  );
}
