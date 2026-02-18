# AGENTS.md — e9n.dev

## Project overview

Personal blog and portfolio site for Espen Nilsen at https://e9n.dev. Topics: AI, sales leadership, self-development.

## Tech stack

- **Static site generator:** Eleventy (11ty) v3 with Nunjucks templates
- **Styling:** Tailwind CSS with PostCSS
- **Hosting:** GitHub Pages (auto-deployed on push to `main`)
- **Domain:** e9n.dev (via CNAME)

## Project structure

```
pages/           → Static pages (index, about, blog, cv, projects)
blog/            → Blog posts (Markdown). Drafts prefixed with `draft.`
projects/        → Project pages (Markdown)
_includes/       → Nunjucks layouts and partials
_data/           → Global data files
css/             → Source CSS (Tailwind)
static/          → Images and static assets (passthrough copy)
_site/           → Build output (git-ignored)
```

## Build & dev

- `npm run dev` — local dev server (11ty + Tailwind watch)
- `npm run build` — production build (11ty + Tailwind minified)
- Drafts (`draft: true` in frontmatter) are excluded in production (`NODE_ENV=production`)

## Key conventions

- Blog posts use `layout: post.njk` and require frontmatter: `title`, `excerpt`, `date`, `category`, `tags`, `readingTime`
- Draft posts are named `draft.<slug>.md` and have `draft: true` in frontmatter
- The `<!--excerpt-->` separator in post content splits excerpt from body

## SEO & sitemap

- **`sitemap.njk`** generates `/sitemap.xml` at build time from Eleventy collections
- It automatically includes all static pages, published blog posts, and project pages
- Drafts are excluded in production builds
- **When adding or removing pages, blog posts, or projects, no manual sitemap update is needed** — it rebuilds from collections automatically
- If you add a new top-level static page (beyond index/blog/about/cv/projects), add it manually to `sitemap.njk`
