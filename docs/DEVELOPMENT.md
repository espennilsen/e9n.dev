# Development

> Last updated: 2026-03-08

Local development is straightforward — install dependencies, run the dev server, and edit files.

## Prerequisites

- Node.js 20+
- npm

## Setup

```bash
git clone git@github.com:espennilsen/e9n.dev.git
cd e9n.dev
npm install
```

## Development Server

```bash
npm run dev
```

This runs Eleventy's dev server and Tailwind in watch mode in parallel. The site is served at `http://localhost:8080` with hot reload.

- Editing `.md` or `.njk` files triggers an Eleventy rebuild
- Editing `css/styles.css` triggers a Tailwind recompile
- Draft posts (with `draft: true`) are visible in development

## Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| `dev` | `npm-run-all --parallel watch:css watch:11ty` | Start dev server + Tailwind watch |
| `serve` | Alias for `dev` | Same as above |
| `build` | `npm run build:11ty && npm run build:css` | Full production build |
| `build:11ty` | `NODE_ENV=production eleventy` | Build Eleventy (production mode) |
| `build:css` | `npx tailwindcss -i ./css/styles.css -o ./_site/css/styles.css --minify` | Compile + minify CSS |
| `preview` | `npm run build && python3 -m http.server 8080 --directory _site` | Build and serve production output locally |
| `watch:11ty` | `eleventy --serve` | Eleventy dev server |
| `watch:css` | `npx tailwindcss -i ./css/styles.css -o ./_site/css/styles.css --watch` | Tailwind watch mode |

## Adding Content

### New Blog Post

1. Create `blog/draft.<slug>.md` (start as draft)
2. Add required frontmatter:
   ```yaml
   ---
   layout: post.njk
   title: "Your Title"
   subtitle: "Optional subtitle"
   excerpt: "Short description for listings"
   date: 2026-03-08
   category: "AI"
   tags:
     - AI
     - Tools
   readingTime: "5 min read"
   featured: false
   draft: true
   ---
   ```
3. Write content using `<!--excerpt-->` to separate excerpt from body
4. Preview at `http://localhost:8080/blog/draft-<slug>/`
5. To publish: remove `draft: true`, rename file to `<slug>.md`, commit + push

### New Project

1. Create `projects/<name>.md`
2. Add frontmatter:
   ```yaml
   ---
   layout: base.njk
   title: "Project Name"
   excerpt: "Short description"
   date: 2026-03-08
   tech:
     - TypeScript
     - Node.js
   link: https://example.com
   github: https://github.com/user/repo
   image: https://picsum.photos/600/400
   status: live
   ---
   ```
3. Project appears automatically on `/projects/`

### New Static Page

1. Create `pages/<name>.njk`
2. Set frontmatter with `layout: base.njk` and `permalink: /<name>/`
3. Add navigation link in `_includes/base.njk` (desktop + mobile nav)
4. Add manual entry in `sitemap.njk` if it's a top-level page

## Debugging Tips

- **Draft not showing?** Check `NODE_ENV` — drafts are hidden in production. Use `npm run dev` (development mode).
- **CSS not updating?** Make sure both Eleventy and Tailwind watchers are running. Check that the template file is in Tailwind's `content` scanning paths in `tailwind.config.js`.
- **Page not in sitemap?** Published posts and projects are automatic. New top-level pages need a manual entry in `sitemap.njk`.
- **Build fails?** Run `npm run build` locally to see the error. Common issues: Nunjucks syntax errors, missing frontmatter fields, bad include paths.

## Changes Log

- 2026-03-08: Initial documentation generated
