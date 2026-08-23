import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { SITE } from "../config";
import { blogPath } from "./posts";

const NAV_UI = {
  en: { products: "Products", markets: "Markets", blog: "Blog", quote: "Get a Quote" },
  ko: { products: "제품", markets: "수출 시장", blog: "블로그", quote: "견적 요청" },
  cn: { products: "产品", markets: "出口市场", blog: "博客", quote: "获取报价" },
};

// Shared header + footer for all blog pages (keeps the SPA nav consistent).
export const BlogNav = ({ lang = "en" }) => {
  const t = NAV_UI[lang] || NAV_UI.en;
  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to={`/${lang}`} className="flex items-center gap-2">
            <img src="/logo.png" alt="PPM Cocopeat Logo" className="h-16 w-auto" />
          </Link>
          <div className="flex items-center gap-6">
            <Link to={`/${lang}#products`} className="hidden sm:inline text-stone-600 hover:text-green-700 font-medium">{t.products}</Link>
            <Link to="/coco-peat-supplier" className="hidden sm:inline text-stone-600 hover:text-green-700 font-medium">{t.markets}</Link>
            <Link to={blogPath(lang)} className="text-stone-600 hover:text-green-700 font-medium">{t.blog}</Link>
            <Link
              to={`/${lang}#enquiry`}
              className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition"
            >
              {t.quote} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export const BlogFooter = () => (
  <footer className="bg-stone-900 text-stone-400 py-12 mt-16">
    <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-8">
      <div className="max-w-xs">
        <div className="flex items-center gap-3 mb-4">
          <img src="/logo.png" alt="PPM Cocopeat Logo" className="h-12 w-auto" />
          <span className="text-stone-200 font-bold text-2xl tracking-wider">PPM</span>
        </div>
        <p className="text-sm opacity-60">
          Premium quality Coir Pith and Coco Peat substrates for global agriculture.
        </p>
      </div>
      <div className="space-y-4">
        <h3 className="text-stone-100 font-semibold text-lg">Contact Us</h3>
        <div className="flex items-center gap-3 text-stone-300 text-sm">
          <MapPin className="w-5 h-5 text-green-600 flex-shrink-0" /> Patparganj Industrial Area, Delhi-110092
        </div>
        <div className="flex items-center gap-3 text-stone-300 text-sm">
          <Mail className="w-5 h-5 text-green-600 flex-shrink-0" />
          <a href={`mailto:${SITE.email}`} className="hover:text-white">{SITE.email}</a>
        </div>
        <div className="flex items-center gap-3 text-stone-300 text-sm">
          <Phone className="w-5 h-5 text-green-600 flex-shrink-0" />
          <a href={`tel:${SITE.phones[0]}`} className="hover:text-white">{SITE.phones[0]}</a>
        </div>
      </div>
    </div>
    <div className="border-t border-stone-800 mt-10 pt-8 text-center text-sm opacity-50">
      <p>© 2026 PPM Cocopeat. All rights reserved. · <Link to="/blog" className="hover:text-white">Blog</Link></p>
    </div>
  </footer>
);
