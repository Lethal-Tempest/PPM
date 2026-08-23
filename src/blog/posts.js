// Blog posts are authored as Markdown in content/blog/<locale>/*.md (editable via
// Sveltia CMS) and compiled to src/blog/generated-posts.js by scripts/build-content.js.
export {
  posts,
  postsByLang,
  getPost,
  getPostsForLang,
  BLOG_LOCALES,
  BLOG_HREFLANG,
} from "./generated-posts";

// Build the URL path for a blog post/index in a given locale.
export const blogPath = (lang, slug) => {
  const prefix = !lang || lang === "en" ? "" : `/${lang}`;
  return `${prefix}/blog${slug ? "/" + slug : ""}`;
};
