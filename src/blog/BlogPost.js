import React, { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { getPost, getPostsForLang, BLOG_LOCALES, BLOG_HREFLANG, blogPath } from "./posts";
import { SITE } from "../config";
import { BlogNav, BlogFooter } from "./BlogChrome";
import { FaqSection, CtaBox } from "./ui";

const UI = {
  en: { home: "Home", blog: "Blog", keepReading: "Keep reading", back: "Back to all guides", updated: "Updated" },
  ko: { home: "홈", blog: "블로그", keepReading: "계속 읽기", back: "모든 가이드로 돌아가기", updated: "업데이트" },
  cn: { home: "首页", blog: "博客", keepReading: "继续阅读", back: "返回所有指南", updated: "更新" },
};

export default function BlogPost() {
  const params = useParams();
  const slug = params.slug;
  const lang = params.lang || "en";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug, lang]);

  // Unknown language → send to English blog.
  if (params.lang && !BLOG_LOCALES.includes(params.lang)) return <Navigate to="/blog" replace />;

  const post = getPost(slug, lang);
  if (!post) return <Navigate to={blogPath(lang)} replace />;

  const t = UI[lang] || UI.en;
  const url = `${SITE.url}${blogPath(lang, slug)}`;
  const imageUrl = post.image.startsWith("http") ? post.image : `${SITE.url}${post.image}`;

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    inLanguage: BLOG_HREFLANG[lang] || "en",
    headline: post.h1,
    description: post.metaDescription,
    image: [imageUrl],
    author: { "@type": "Organization", name: SITE.name, url: SITE.url },
    publisher: { "@type": "Organization", name: SITE.name, logo: { "@type": "ImageObject", url: SITE.logo } },
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    keywords: [post.focusKeyword, ...post.secondaryKeywords].join(", "),
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: t.home, item: `${SITE.url}/${lang}` },
      { "@type": "ListItem", position: 2, name: t.blog, item: `${SITE.url}${blogPath(lang)}` },
      { "@type": "ListItem", position: 3, name: post.h1, item: url },
    ],
  };

  const related = getPostsForLang(lang).filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800">
      <Helmet>
        <html lang={BLOG_HREFLANG[lang] || "en"} />
        <title>{post.metaTitle} | PPM Cocopeat</title>
        <meta name="description" content={post.metaDescription} />
        <meta name="keywords" content={[post.focusKeyword, ...post.secondaryKeywords].join(", ")} />
        <link rel="canonical" href={url} />
        {/* hreflang alternates across languages */}
        {BLOG_LOCALES.map((loc) => (
          <link key={loc} rel="alternate" hrefLang={BLOG_HREFLANG[loc]} href={`${SITE.url}${blogPath(loc, slug)}`} />
        ))}
        <link rel="alternate" hrefLang="x-default" href={`${SITE.url}${blogPath("en", slug)}`} />
        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.metaTitle} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:locale" content={BLOG_HREFLANG[lang] || "en"} />
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

      <BlogNav lang={lang} />

      <article className="pt-28">
        <header className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-stone-400 mb-6" aria-label="Breadcrumb">
            <Link to={`/${lang}`} className="hover:text-green-700">{t.home}</Link>
            <span className="mx-2">/</span>
            <Link to={blogPath(lang)} className="hover:text-green-700">{t.blog}</Link>
            <span className="mx-2">/</span>
            <span className="text-stone-500">{post.category}</span>
          </nav>
          <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest inline-block mb-4">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 leading-tight mb-5">{post.h1}</h1>
          <div className="flex items-center gap-5 text-sm text-stone-500 mb-8">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {t.updated} {post.dateModified}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {post.readingTime}</span>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <div className="rounded-2xl overflow-hidden shadow-lg h-64 md:h-96">
            <img src={post.image} alt={post.h1} className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="prose prose-lg prose-stone max-w-none prose-headings:font-bold prose-headings:text-stone-800 prose-a:text-green-700 prose-a:font-semibold prose-strong:text-stone-800 prose-th:bg-green-700 prose-th:text-white prose-td:align-top"
            dangerouslySetInnerHTML={{ __html: post.bodyHtml }}
          />

          <CtaBox lang={lang} />

          <FaqSection faqs={post.faqs} />

          <section className="mt-16 pt-10 border-t border-stone-200">
            <h2 className="text-2xl font-bold text-stone-800 mb-6">{t.keepReading}</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {related.map((r) => (
                <Link key={r.slug} to={blogPath(lang, r.slug)} className="group p-5 bg-white rounded-xl border border-stone-100 shadow-sm hover:shadow-md transition">
                  <span className="text-xs font-semibold text-green-700">{r.category}</span>
                  <h3 className="font-bold text-stone-800 mt-1 group-hover:text-green-700 transition">{r.h1}</h3>
                </Link>
              ))}
            </div>
          </section>

          <div className="mt-12 mb-16">
            <Link to={blogPath(lang)} className="inline-flex items-center text-green-700 font-semibold hover:text-green-800">
              <ArrowLeft className="mr-2 h-4 w-4" /> {t.back}
            </Link>
          </div>
        </div>
      </article>

      <BlogFooter />
    </div>
  );
}
