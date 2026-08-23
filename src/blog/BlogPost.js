import React, { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { getPost, posts } from "./posts";
import { SITE } from "../config";
import { BlogNav, BlogFooter } from "./BlogChrome";
import { FaqSection, CtaBox } from "./ui";

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPost(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) return <Navigate to="/blog" replace />;

  const url = `${SITE.url}/blog/${post.slug}`;
  const imageUrl = post.image.startsWith("http") ? post.image : `${SITE.url}${post.image}`;

  // Article JSON-LD
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.h1,
    description: post.metaDescription,
    image: [imageUrl],
    author: { "@type": "Organization", name: SITE.name, url: SITE.url },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: { "@type": "ImageObject", url: SITE.logo },
    },
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    keywords: [post.focusKeyword, ...post.secondaryKeywords].join(", "),
  };

  // FAQPage JSON-LD
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  // Breadcrumb JSON-LD
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE.url}/en` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE.url}/blog` },
      { "@type": "ListItem", position: 3, name: post.h1, item: url },
    ],
  };

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800">
      <Helmet>
        <html lang="en" />
        <title>{post.metaTitle} | PPM Cocopeat</title>
        <meta name="description" content={post.metaDescription} />
        <meta name="keywords" content={[post.focusKeyword, ...post.secondaryKeywords].join(", ")} />
        <link rel="canonical" href={url} />
        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.metaTitle} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={imageUrl} />
        <meta property="article:published_time" content={post.datePublished} />
        <meta property="article:modified_time" content={post.dateModified} />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.metaTitle} />
        <meta name="twitter:description" content={post.metaDescription} />
        <meta name="twitter:image" content={imageUrl} />
        {/* Structured data */}
        <script type="application/ld+json">{JSON.stringify(articleLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>
      </Helmet>

      <BlogNav />

      <article className="pt-28">
        {/* Header */}
        <header className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-stone-400 mb-6" aria-label="Breadcrumb">
            <Link to="/en" className="hover:text-green-700">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/blog" className="hover:text-green-700">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-stone-500">{post.category}</span>
          </nav>
          <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest inline-block mb-4">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 leading-tight mb-5">
            {post.h1}
          </h1>
          <div className="flex items-center gap-5 text-sm text-stone-500 mb-8">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> Updated {post.dateModified}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {post.readingTime}</span>
          </div>
        </header>

        {/* Hero image */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <div className="rounded-2xl overflow-hidden shadow-lg h-64 md:h-96">
            <img src={post.image} alt={post.h1} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Body */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="prose prose-lg prose-stone max-w-none prose-headings:font-bold prose-headings:text-stone-800 prose-a:text-green-700 prose-a:font-semibold prose-strong:text-stone-800 prose-th:bg-green-700 prose-th:text-white prose-td:align-top"
            dangerouslySetInnerHTML={{ __html: post.bodyHtml }}
          />

          <CtaBox />

          <FaqSection faqs={post.faqs} />

          {/* Related */}
          <section className="mt-16 pt-10 border-t border-stone-200">
            <h2 className="text-2xl font-bold text-stone-800 mb-6">Keep reading</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to={`/blog/${r.slug}`}
                  className="group p-5 bg-white rounded-xl border border-stone-100 shadow-sm hover:shadow-md transition"
                >
                  <span className="text-xs font-semibold text-green-700">{r.category}</span>
                  <h3 className="font-bold text-stone-800 mt-1 group-hover:text-green-700 transition">{r.h1}</h3>
                </Link>
              ))}
            </div>
          </section>

          <div className="mt-12 mb-16">
            <Link to="/blog" className="inline-flex items-center text-green-700 font-semibold hover:text-green-800">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to all guides
            </Link>
          </div>
        </div>
      </article>

      <BlogFooter />
    </div>
  );
}
