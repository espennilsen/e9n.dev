# e9n.dev

> Last updated: 2026-03-08

Personal blog and portfolio site for Espen Nilsen at [https://e9n.dev](https://e9n.dev). Covers AI, enterprise sales leadership, and self-growth. The site is a static Eleventy (11ty) blog with a dark, terminal-inspired aesthetic, GSAP scroll animations, and auto-deployment to GitHub Pages.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Static Site Generator | Eleventy (11ty) v3 with Nunjucks templates |
| Styling | Tailwind CSS v4 with custom CSS properties |
| Animations | GSAP + ScrollTrigger (CDN) |
| Markdown | markdown-it with anchor plugin |
| Analytics | Umami (self-hosted at analytics.e9n.dev) |
| Feedback | PinPatch widget |
| Hosting | GitHub Pages (auto-deployed on push to `main`) |
| Domain | e9n.dev (via CNAME) |
| CI/CD | GitHub Actions — build verification + deploy |

## Architecture Style

Static site generator with file-based content. All content is authored in Markdown (blog posts) or Nunjucks templates (pages). Eleventy processes these into a static `_site/` directory at build time. Tailwind CSS compiles separately. There is no server-side runtime, no database, and no client-side framework — just HTML, CSS, and GSAP animations loaded from CDN. The build pipeline is: Eleventy renders templates → Tailwind compiles CSS → output goes to `_site/` → GitHub Actions deploys to GitHub Pages.

## Key Concepts

- **Post**: A Markdown file in `blog/` with frontmatter (title, excerpt, date, category, tags, readingTime). Uses `layout: post.njk`. Published posts are named `<slug>.md`.
- **Draft**: A blog post with `draft: true` in frontmatter, named `draft.<slug>.md`. Excluded from collections and permalinks in production builds (`NODE_ENV=production`). Visible in local dev.
- **Page**: A Nunjucks template in `pages/` (index, blog, about, cv, projects, tag). Uses `layout: base.njk`.
- **Project**: A Markdown file in `projects/` with tech stack, links, image, and status. Displayed on the projects page grid.
- **Collection**: An Eleventy concept — `posts`, `projects`, and `tagList` are defined in `eleventy.config.cjs` and used in templates for listing/iteration.
- **Excerpt Separator**: The `<!--excerpt-->` marker in post content splits the excerpt (above) from the body (below). Used by the `excerpt` and `postContent` filters.

## Entry Points

| Entry Point | File | Purpose |
|------------|------|---------|
| Eleventy Config | `eleventy.config.cjs` | Build config — filters, collections, passthrough, ignores |
| Tailwind Config | `tailwind.config.js` | Content paths, theme extensions, color system |
| CSS Source | `css/styles.css` | Tailwind imports + custom CSS properties + blog content styles |
| Base Layout | `_includes/base.njk` | HTML shell — head, nav, footer, GSAP, analytics |
| Post Layout | `_includes/post.njk` | Blog post template — header, metadata, content, tags |
| Homepage | `pages/index.njk` | Landing page with hero, focus areas, latest posts |
| Blog Index | `pages/blog.njk` | Full post archive with tag cloud |
| Deploy Workflow | `.github/workflows/deploy.yml` | GitHub Actions — build + deploy to GitHub Pages |
| CI Workflow | `.github/workflows/ci.yml` | GitHub Actions — build verification on push/PR |

## Changes Log

- 2026-03-08: Initial documentation generated
