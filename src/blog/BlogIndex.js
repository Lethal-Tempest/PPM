import React from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ArrowRight, Clock } from "lucide-react";
import { getPostsForLang, BLOG_LOCALES, BLOG_HREFLANG, blogPath } from "./posts";
import { SITE } from "../config";
import { BlogNav, BlogFooter } from "./BlogChrome";

const UI = {
  en: {
    badge: "Knowledge Hub",
    h1: "Coco Peat & Coir Export Insights",
    sub: "Practical, technical guides for importers, greenhouse buyers and soil blenders sourcing coir substrates from India.",
    read: "Read guide",
    title: "Coco Peat & Coir Export Blog",
    metaDesc: "Expert B2B guides on sourcing coco peat and coir from India — EC/pH specs, container loading, phytosanitary compliance and procurement tips.",
  },
  ko: {
    badge: "지식 허브",
    h1: "코코피트 & 코이어 수출 인사이트",
    sub: "인도산 코이어 배양토를 소싱하는 수입업체, 온실 재배자, 배양토 배합업체를 위한 실용적이고 기술적인 가이드입니다.",
    read: "가이드 읽기",
    title: "코코피트 & 코이어 수출 블로그",
    metaDesc: "인도산 코코피트 및 코이어 소싱에 대한 B2B 전문 가이드 — EC/pH 사양, 컨테이너 적재, 식물검역 준수.",
  },
  cn: {
    badge: "知识中心",
    h1: "椰糠与椰壳纤维出口洞察",
    sub: "为从印度采购椰壳纤维基质的进口商、温室种植者和基质配制企业提供实用的技术指南。",
    read: "阅读指南",
    title: "椰糠与椰壳纤维出口博客",
    metaDesc: "关于从印度采购椰糠和椰壳纤维的 B2B 专业指南——EC/pH 规格、集装箱装载、植物检疫合规。",
  },
};

export default function BlogIndex() {
  const params = useParams();
  const lang = params.lang || "en";
  if (params.lang && !BLOG_LOCALES.includes(params.lang)) return <Navigate to="/blog" replace />;

  const t = UI[lang] || UI.en;
  const posts = getPostsForLang(lang);
  const blogUrl = `${SITE.url}${blogPath(lang)}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${t.title} | PPM Cocopeat`,
    inLanguage: BLOG_HREFLANG[lang] || "en",
    description: t.metaDesc,
    url: blogUrl,
    publisher: { "@type": "Organization", name: SITE.name, logo: { "@type": "ImageObject", url: SITE.logo } },
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.h1,
      url: `${SITE.url}${blogPath(lang, p.slug)}`,
      datePublished: p.datePublished,
      dateModified: p.dateModified,
    })),
  };

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800">
      <Helmet>
        <html lang={BLOG_HREFLANG[lang] || "en"} />
        <title>{t.title} | PPM Cocopeat</title>
        <meta name="description" content={t.metaDesc} />
        <link rel="canonical" href={blogUrl} />
        {BLOG_LOCALES.map((loc) => (
          <link key={loc} rel="alternate" hrefLang={BLOG_HREFLANG[loc]} href={`${SITE.url}${blogPath(loc)}`} />
        ))}
        <link rel="alternate" hrefLang="x-default" href={`${SITE.url}${blogPath("en")}`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${t.title} | PPM Cocopeat`} />
        <meta property="og:description" content={t.metaDesc} />
        <meta property="og:url" content={blogUrl} />
        <meta property="og:image" content={SITE.logo} />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <BlogNav lang={lang} />

      <header className="pt-32 pb-12 bg-white border-b border-stone-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest inline-block mb-4">
            {t.badge}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4">{t.h1}</h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">{t.sub}</p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((p) => (
            <Link
              key={p.slug}
              to={blogPath(lang, p.slug)}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition border border-stone-100 flex flex-col"
            >
              <div className="h-44 overflow-hidden">
                <img src={p.image} alt={p.h1} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-3 text-xs text-stone-500 mb-3">
                  <span className="bg-green-50 text-green-700 font-semibold px-2 py-0.5 rounded">{p.category}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {p.readingTime}</span>
                </div>
                <h2 className="text-xl font-bold text-stone-800 mb-2 leading-snug group-hover:text-green-700 transition">{p.h1}</h2>
                <p className="text-stone-600 text-sm leading-relaxed flex-1">{p.excerpt}</p>
                <span className="mt-4 inline-flex items-center text-green-700 font-semibold text-sm">
                  {t.read} <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition" />
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
