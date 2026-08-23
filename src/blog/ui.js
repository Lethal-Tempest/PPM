import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";
import { waLink, track } from "../config";

// --- Reusable article building blocks (Tailwind, matches site's stone/green theme) ---

export const H2 = ({ id, children }) => (
  <h2 id={id} className="text-3xl font-bold text-stone-800 mt-12 mb-4 scroll-mt-28">
    {children}
  </h2>
);

export const H3 = ({ children }) => (
  <h3 className="text-2xl font-semibold text-stone-800 mt-8 mb-3">{children}</h3>
);

export const H4 = ({ children }) => (
  <h4 className="text-xl font-semibold text-stone-700 mt-6 mb-2">{children}</h4>
);

export const P = ({ children }) => (
  <p className="text-lg text-stone-600 leading-relaxed mb-5">{children}</p>
);

export const UL = ({ children }) => (
  <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-stone-600">{children}</ul>
);

export const OL = ({ children }) => (
  <ol className="list-decimal pl-6 mb-6 space-y-2 text-lg text-stone-600">{children}</ol>
);

// Responsive data table — never overflows the page on mobile.
export const DataTable = ({ head, rows, caption }) => (
  <figure className="my-8">
    <div className="overflow-x-auto rounded-xl border border-stone-200 shadow-sm">
      <table className="w-full text-left text-sm md:text-base border-collapse">
        <thead>
          <tr className="bg-green-700 text-white">
            {head.map((h, i) => (
              <th key={i} className="px-4 py-3 font-semibold whitespace-nowrap">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, r) => (
            <tr key={r} className={r % 2 ? "bg-stone-50" : "bg-white"}>
              {row.map((cell, c) => (
                <td key={c} className="px-4 py-3 border-t border-stone-100 text-stone-700 align-top">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    {caption && <figcaption className="text-sm text-stone-400 mt-2 text-center">{caption}</figcaption>}
  </figure>
);

export const Callout = ({ children }) => (
  <div className="my-8 p-5 bg-green-50 border-l-4 border-green-600 rounded-r-lg text-stone-700">
    {children}
  </div>
);

// High-converting B2B CTA block for the end of every article.
export const CtaBox = ({ heading, sub }) => (
  <div className="my-12 p-8 bg-stone-900 rounded-2xl text-center shadow-xl">
    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
      {heading || "Ready to source export-grade coco peat?"}
    </h3>
    <p className="text-stone-300 mb-6 max-w-2xl mx-auto">
      {sub ||
        "Get lab-tested specifications, container pricing (FOB/CIF) and a free sample block shipped to your facility."}
    </p>
    <div className="flex flex-col sm:flex-row gap-3 justify-center">
      <Link
        to="/en#enquiry"
        className="inline-flex items-center justify-center px-7 py-3.5 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition shadow-lg"
      >
        Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
      </Link>
      <a
        href={waLink("Hi PPM, I read your blog and would like a quote for coco peat blocks.")}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => track("click_whatsapp", { link_location: "blog_cta" })}
        className="inline-flex items-center justify-center px-7 py-3.5 bg-white hover:bg-stone-100 text-stone-900 rounded-lg font-semibold transition"
      >
        <MessageCircle className="mr-2 h-5 w-5 text-green-600" /> Chat on WhatsApp
      </a>
    </div>
  </div>
);

// Renders the FAQ visually (the JSON-LD equivalent is injected separately in BlogPost).
export const FaqSection = ({ faqs }) => (
  <section>
    <H2 id="faq">Frequently Asked Questions</H2>
    <div className="divide-y divide-stone-200 border-t border-stone-200">
      {faqs.map((f, i) => (
        <details key={i} className="group py-4">
          <summary className="cursor-pointer list-none flex justify-between items-center text-lg font-semibold text-stone-800">
            {f.q}
            <span className="ml-4 text-green-600 group-open:rotate-45 transition-transform text-2xl leading-none">+</span>
          </summary>
          <p className="mt-3 text-stone-600 leading-relaxed">{f.a}</p>
        </details>
      ))}
    </div>
  </section>
);

// Inline internal link helper pointing at homepage anchors.
export const ProductLink = ({ children }) => (
  <Link to="/en#products" className="text-green-700 font-semibold underline decoration-green-300 hover:decoration-green-600">
    {children}
  </Link>
);
export const QuoteLink = ({ children }) => (
  <Link to="/en#enquiry" className="text-green-700 font-semibold underline decoration-green-300 hover:decoration-green-600">
    {children}
  </Link>
);

// Smart link: keep internal navigation inside the SPA, open external in a new tab.
const MdLink = ({ href = "", children }) => {
  const linkClass = "text-green-700 font-semibold underline decoration-green-300 hover:decoration-green-600";
  let path = href;
  try {
    if (href.startsWith("http")) {
      const u = new URL(href);
      if (u.hostname.replace(/^www\./, "") === "ppmcocopeat.com") {
        path = (u.pathname === "/" ? "" : u.pathname) + (u.hash || "");
      } else {
        return <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>{children}</a>;
      }
    }
  } catch (e) {
    return <a href={href} className={linkClass}>{children}</a>;
  }
  // Normalise bare homepage anchors to the /en homepage where the sections live.
  if (path.startsWith("#") || path.startsWith("/#")) path = "/en" + path.replace(/^\//, "");
  return <Link to={path || "/en"} className={linkClass}>{children}</Link>;
};

// Component map so Markdown posts render with the site's existing styling.
export const mdComponents = {
  h1: ({ children }) => <H2>{children}</H2>,
  h2: ({ children }) => <H2>{children}</H2>,
  h3: ({ children }) => <H3>{children}</H3>,
  h4: ({ children }) => <H4>{children}</H4>,
  p: ({ children }) => <P>{children}</P>,
  ul: ({ children }) => <UL>{children}</UL>,
  ol: ({ children }) => <OL>{children}</OL>,
  li: ({ children }) => <li className="text-lg text-stone-600 leading-relaxed">{children}</li>,
  a: MdLink,
  strong: ({ children }) => <strong className="font-semibold text-stone-800">{children}</strong>,
  blockquote: ({ children }) => <Callout>{children}</Callout>,
  table: ({ children }) => (
    <figure className="my-8">
      <div className="overflow-x-auto rounded-xl border border-stone-200 shadow-sm">
        <table className="w-full text-left text-sm md:text-base border-collapse">{children}</table>
      </div>
    </figure>
  ),
  thead: ({ children }) => <thead>{children}</thead>,
  tbody: ({ children }) => <tbody>{children}</tbody>,
  tr: ({ children }) => <tr className="odd:bg-white even:bg-stone-50">{children}</tr>,
  th: ({ children }) => <th className="bg-green-700 text-white px-4 py-3 font-semibold whitespace-nowrap">{children}</th>,
  td: ({ children }) => <td className="px-4 py-3 border-t border-stone-100 text-stone-700 align-top">{children}</td>,
};
