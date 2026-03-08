# Architecture

> Last updated: 2026-03-08

e9n.dev is a static site built with Eleventy (11ty) and Tailwind CSS. There is no server, no database, and no client-side framework. Content is authored in Markdown and Nunjucks, compiled to static HTML at build time, and deployed to GitHub Pages. The architecture is deliberately simple — the complexity lives in the content, not the infrastructure.

## System Overview

The site serves as a personal blog and portfolio. Users visit the site, browse blog posts and projects, filter by tags, and read content. Everything is pre-rendered HTML. The only dynamic elements are GSAP scroll animations and Umami analytics tracking (both loaded from external CDNs).

## Component Map

| Component | Location | Responsibility |
|-----------|----------|---------------|
| Eleventy Config | `eleventy.config.cjs` | Build orchestration — collections, filters, passthrough, draft logic |
| Base Layout | `_includes/base.njk` | HTML shell — head, nav, footer, SEO, analytics, animations |
| Post Layout | `_includes/post.njk` | Blog post rendering — metadata, content, tags |
| Homepage | `pages/index.njk` | Landing page — hero, feature cards, latest posts feed |
| Blog Archive | `pages/blog.njk` | Full post list with tag cloud |
| Tag Pages | `pages/tag.njk` | Per-tag filtered post lists (pagination) |
| Projects Page | `pages/projects.njk` | Project card grid |
| Blog Posts | `blog/*.md` | Individual blog post content |
| Project Pages | `projects/*.md` | Individual project descriptions |
| Theme / Styles | `css/styles.css` | CSS custom properties, Tailwind, blog prose styles |
| Tailwind Config | `tailwind.config.js` | Content scanning, color tokens, font config |
| Sitemap | `sitemap.njk` | Auto-generated XML sitemap from collections |
| SEO | `_includes/base.njk` | Meta tags, Open Graph, Twitter Cards, JSON-LD structured data |
| CI/CD | `.github/workflows/` | Build verification and GitHub Pages deployment |

## Data Flow

### Build Pipeline (Eleventy + Tailwind)

```
Content files (blog/*.md, pages/*.njk, projects/*.md)
  → Eleventy reads files + frontmatter
    → Applies computed data (draft exclusion logic)
    → Builds collections (posts, projects, tagList)
    → Processes Nunjucks templates + Markdown
    → Applies filters (excerpt, postContent, date, slugify, markdown)
    → Renders through layouts (post.njk → base.njk)
    → Writes static HTML to _site/

CSS source (css/styles.css)
  → Tailwind CLI scans templates for class usage
  → Compiles utility CSS + custom properties
  → Outputs minified CSS to _site/css/styles.css

Static assets (static/*)
  → Passthrough-copied to _site/static/
```

### Deployment Pipeline

```
git push to main
  → GitHub Actions triggers deploy.yml
    → Checkout repo
    → Setup Node.js 20
    → npm ci (install deps)
    → npm run build (Eleventy + Tailwind)
    → Copy CNAME to _site/
    → Upload _site/ as Pages artifact
    → Deploy to GitHub Pages
  → Site live at https://e9n.dev
```

### User Request Flow (at runtime)

```
Browser requests https://e9n.dev/blog/some-post/
  → GitHub Pages CDN serves pre-built _site/blog/some-post/index.html
  → Browser loads CSS from /css/styles.css
  → Browser loads GSAP from CDN → scroll animations activate
  → Umami analytics script fires pageview
  → PinPatch feedback widget loads
```

## Key Abstractions

### Draft System

- **What**: Blog posts can be marked as drafts and are automatically excluded from production builds
- **Where**: `eleventy.config.cjs` (computed data for `permalink` and `eleventyExcludeFromCollections`)
- **How**: Posts with `draft: true` frontmatter get `permalink: false` and are excluded from all collections when `NODE_ENV=production`. In development, drafts are visible and browsable.
- **Convention**: Draft files are named `draft.<slug>.md` (also matched by `.gitignore` pattern `draft.*` — drafts are not committed to git)

### Excerpt System

- **What**: Splits blog post content into excerpt and body using the `<!--excerpt-->` marker
- **Where**: `eleventy.config.cjs` — `excerpt` and `postContent` filters
- **Used by**: `pages/index.njk` (latest posts), `pages/blog.njk` (archive), `_includes/post.njk` (post page)
- **Fallback**: If no `<!--excerpt-->` marker exists, the first paragraph is used as the excerpt

### Collection System

- **What**: Eleventy collections group content for iteration in templates
- **Where**: `eleventy.config.cjs`
- **Collections**:
  - `posts` — all `blog/*.md` files, sorted newest-first, drafts filtered in production
  - `projects` — all `projects/*.md` files, sorted newest-first
  - `tagList` — unique set of all tags across published posts, sorted alphabetically

### Theme / Color System

- **What**: Dark terminal-inspired theme using CSS custom properties
- **Where**: `css/styles.css` (defined in `@theme` block), `tailwind.config.js` (mapped to Tailwind tokens)
- **Colors**: `background` (#0a0a0a), `surface` (#121212), `text` (#ffffff), `muted` (#888), `primary` (#00ff88 — green), `secondary` (#00ccff — blue), `border` (#222)
- **Used by**: All templates reference these as Tailwind classes (`bg-background`, `text-primary`, etc.)

### SEO System

- **What**: Comprehensive meta tags, Open Graph, Twitter Cards, and JSON-LD structured data
- **Where**: `_includes/base.njk` (head section)
- **Logic**: Computes `pageTitle`, `pageDescription`, `pageUrl`, `pageImage` from frontmatter. Blog posts get `article` OG type and `BlogPosting` JSON-LD. Homepage gets `WebSite` JSON-LD with author `sameAs` links.

## External Dependencies (Runtime)

| Dependency | Purpose | Integration Point |
|-----------|---------|-------------------|
| GSAP + ScrollTrigger | Scroll animations (fade-up, stagger, scale, slide) | CDN script tags in `_includes/base.njk` |
| Umami Analytics | Privacy-friendly pageview tracking | Script tag in `_includes/base.njk`, hosted at `analytics.e9n.dev` |
| PinPatch | User feedback widget | Script tag in `_includes/base.njk` |
| GitHub Pages | Static hosting + CDN | `.github/workflows/deploy.yml` |

## Architectural Decisions

- **No client-side framework**: Pure static HTML + CSS. No React, no hydration, no JavaScript bundling. GSAP is the only JS, loaded from CDN for scroll animations.
- **Separate CSS build**: Tailwind runs as a separate CLI step rather than an Eleventy plugin, keeping the build pipeline simple and parallelizable.
- **CommonJS config**: `eleventy.config.cjs` uses CommonJS despite `"type": "module"` in package.json — this is an Eleventy v3 convention.
- **Draft convention**: Drafts use both a frontmatter flag (`draft: true`) and a filename convention (`draft.*`). The filename convention integrates with `.gitignore` to keep drafts out of version control.
- **No build-time CSS purge needed**: Tailwind v4 with the CLI handles tree-shaking automatically by scanning template files.

## Changes Log

- 2026-03-08: Initial documentation generated
