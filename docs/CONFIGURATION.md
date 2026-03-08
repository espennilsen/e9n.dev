# Configuration

> Last updated: 2026-03-08

Configuration is minimal and file-based. There are no environment variables beyond `NODE_ENV`, no feature flags, and no secrets. All config lives in committed files.

## Environment Variables

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `NODE_ENV` | No | `development` | Set to `production` in CI/CD builds. Controls draft exclusion — drafts are hidden when `production`. |

## Config Files

| File | Purpose |
|------|---------|
| `eleventy.config.cjs` | Core build config — filters, collections, passthrough copy, ignored files, output directory |
| `tailwind.config.js` | Tailwind content scanning paths, theme color mapping, font family |
| `postcss.config.js` | PostCSS plugin chain (tailwindcss + autoprefixer) |
| `metadata.json` | Site-level metadata (name, description) — available in templates as `metadata` |
| `tsconfig.json` | TypeScript config (exists but not actively used in the build) |
| `CNAME` | GitHub Pages custom domain (`e9n.dev`) |
| `robots.txt` | Search engine crawl directives — allows all, points to sitemap |

## Eleventy Config Details (`eleventy.config.cjs`)

### Directory Structure
```javascript
{
  dir: {
    input: '.',            // Root directory is the input
    includes: '_includes', // Layouts and partials
    data: '_data',         // Global data files
    output: '_site'        // Build output
  },
  markdownTemplateEngine: 'njk',  // Nunjucks pre-processing for .md files
  htmlTemplateEngine: 'njk',
  templateFormats: ['md', 'njk', 'html']
}
```

### Custom Filters
| Filter | Usage | Description |
|--------|-------|-------------|
| `excerpt` | `{{ content \| excerpt }}` | Extracts content before `<!--excerpt-->` marker, renders as HTML |
| `postContent` | `{{ content \| postContent }}` | Extracts content after `<!--excerpt-->` marker |
| `markdown` | `{{ text \| markdown }}` | Renders markdown string to HTML |
| `date` | `{{ post.date \| date }}` | Formats date as `YYYY-MM-DD` |
| `limit` | `{{ array \| limit(5) }}` | Takes first N items from array |
| `slugify` | `{{ tag \| slugify }}` | URL-safe lowercase slug from string |

### Passthrough Copy
- `static/` → copied as-is to `_site/static/`
- `robots.txt` → copied to `_site/robots.txt`

### Ignored Files
The config explicitly ignores legacy files that exist in the repo root: `index.html`, `index.tsx`, `App.tsx`, `components/**`, `vite.config.ts`, `tsconfig.json`, `types.ts`, `data.ts`, `README.md`, `AGENTS.md`, `blog-posts.njk`.

## Tailwind Config Details (`tailwind.config.js`)

### Content Scanning Paths
```javascript
content: [
  "./_includes/**/*.{njk,html,js}",
  "./*.{njk,html,md}",
  "./pages/**/*.{njk,html,md}",
  "./blog/**/*.md"
]
```

### Theme Colors
All colors are mapped from CSS custom properties defined in `css/styles.css`:

| Token | CSS Property | Value | Usage |
|-------|-------------|-------|-------|
| `background` | `--color-background` | `#0a0a0a` | Page background |
| `surface` | `--color-surface` | `#121212` | Cards, elevated elements |
| `text` | `--color-text` | `#ffffff` | Body text, headings |
| `muted` | `--color-muted` | `#888888` | Secondary text, metadata |
| `primary` | `--color-primary` | `#00ff88` | Accent (green) — CTAs, links, active nav |
| `secondary` | `--color-secondary` | `#00ccff` | Secondary accent (blue) — categories, tech tags |
| `border` | `--color-border` | `#222222` | Borders, dividers |

## Blog Post Frontmatter Schema

Every published blog post in `blog/*.md` requires:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `layout` | string | Yes | Always `post.njk` |
| `title` | string | Yes | Post title |
| `subtitle` | string | No | Displayed below title in lighter text |
| `excerpt` | string | Yes | Short description for listings and SEO |
| `date` | date | Yes | Publication date (YYYY-MM-DD) |
| `category` | string | Yes | Single category (e.g., "AI", "Web Dev", "Sales") |
| `tags` | string[] | Yes | Array of tags for filtering |
| `readingTime` | string | Yes | Reading time estimate (e.g., "6 min read") |
| `featured` | boolean | No | Whether to highlight the post |
| `draft` | boolean | No | Set to `true` to exclude from production builds |
| `description` | string | No | Override SEO meta description (falls back to excerpt) |
| `ogImage` | string | No | Override Open Graph image path |

## Project Frontmatter Schema

Every project in `projects/*.md` requires:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `layout` | string | Yes | Always `base.njk` |
| `title` | string | Yes | Project name |
| `excerpt` | string | Yes | Short description |
| `date` | date | Yes | Project date |
| `tech` | string[] | Yes | Technology tags |
| `link` | string | No | Live URL |
| `github` | string | No | GitHub repo URL |
| `image` | string | Yes | Preview image URL |
| `status` | string | No | `live` or `coming-soon` |

## Changes Log

- 2026-03-08: Initial documentation generated
