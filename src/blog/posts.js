// Blog posts are authored as Markdown in content/blog/*.md (editable via Sveltia CMS)
// and compiled to src/blog/generated-posts.js by scripts/build-content.js
// (runs automatically on `npm start` / `npm run build`).
export { posts, getPost } from "./generated-posts";
