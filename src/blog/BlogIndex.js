import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ArrowRight, Clock } from "lucide-react";
import { posts } from "./posts";
import { SITE } from "../config";
import { BlogNav, BlogFooter } from "./BlogChrome";

export default function BlogIndex() {
  const blogUrl = `${SITE.url}/blog`;

  // Blog + ItemList JSON-LD so the index is understood as a content hub.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "PPM Cocopeat Blog",
    description:
      "Procurement, logistics and compliance guides for importing coco peat and coir substrates from India.",
    url: blogUrl,
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: { "@type": "ImageObject", url: SITE.logo },
    },
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.h1,
      url: `${blogUrl}/${p.slug}`,
      datePublished: p.datePublished,
      dateModified: p.dateModified,
    })),
  };

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800">
      <Helmet>
        <html lang="en" />
        <title>Coco Peat &amp; Coir Export Blog | PPM Cocopeat</title>
        <meta
          name="description"
          content="Expert B2B guides on sourcing coco peat and coir from India — EC/pH specs, container loading, phytosanitary compliance and procurement tips."
        />
        <link rel="canonical" href={blogUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Coco Peat & Coir Export Blog | PPM Cocopeat" />
        <meta property="og:description" content="B2B guides on sourcing coco peat and coir from India." />
        <meta property="og:url" content={blogUrl} />
        <meta property="og:image" content={SITE.logo} />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <BlogNav />

      <header className="pt-32 pb-12 bg-white border-b border-stone-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest inline-block mb-4">
            Knowledge Hub
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4">
            Coco Peat &amp; Coir Export Insights
          </h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Practical, technical guides for importers, greenhouse buyers and soil blenders sourcing
            coir substrates from India.
          </p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((p) => (
            <Link
              key={p.slug}
              to={`/blog/${p.slug}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition border border-stone-100 flex flex-col"
            >
              <div className="h-44 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.h1}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-3 text-xs text-stone-400 mb-3">
                  <span className="bg-green-50 text-green-700 font-semibold px-2 py-0.5 rounded">{p.category}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {p.readingTime}</span>
                </div>
                <h2 className="text-xl font-bold text-stone-800 mb-2 leading-snug group-hover:text-green-700 transition">
                  {p.h1}
                </h2>
                <p className="text-stone-600 text-sm leading-relaxed flex-1">{p.excerpt}</p>
                <span className="mt-4 inline-flex items-center text-green-700 font-semibold text-sm">
                  Read guide <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <BlogFooter />
    </div>
  );
}
