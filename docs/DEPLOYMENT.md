# Deployment

> Last updated: 2026-03-08

The site is deployed to GitHub Pages via GitHub Actions. Every push to `main` triggers an automatic build and deploy. There is also a separate CI workflow for build verification on PRs.

## Build Process

### Local Build

```bash
npm run build
```

This runs two steps sequentially:
1. `npm run build:11ty` — `NODE_ENV=production eleventy` — renders all templates to `_site/`
2. `npm run build:css` — `npx tailwindcss -i ./css/styles.css -o ./_site/css/styles.css --minify` — compiles and minifies CSS

### Local Development

```bash
npm run dev
```

Runs in parallel:
- `watch:11ty` — `eleventy --serve` — Eleventy dev server with hot reload
- `watch:css` — Tailwind CSS in watch mode, outputs to `_site/css/styles.css`

Drafts are visible in development (no `NODE_ENV=production`).

### Preview Production Build

```bash
npm run preview
```

Runs `npm run build` then serves `_site/` on localhost:8080 via Python's HTTP server.

## CI/CD Workflows

### Deploy Workflow (`.github/workflows/deploy.yml`)

**Trigger**: Push to `main` or manual dispatch

**Steps**:
1. Checkout code
2. Setup Node.js 20 with npm cache
3. `npm ci` — install dependencies
4. `npm run build` — build with `NODE_ENV=production`
5. Copy `CNAME` to `_site/CNAME` (preserves custom domain)
6. Upload `_site/` as GitHub Pages artifact
7. Deploy to GitHub Pages

**Permissions**: `contents: read`, `pages: write`, `id-token: write`

**Concurrency**: `group: "pages"`, `cancel-in-progress: false` — only one deploy at a time, queued not cancelled.

### CI Workflow (`.github/workflows/ci.yml`)

**Trigger**: Push to `main` or PR to `main`

**Steps**:
1. Checkout, setup Node.js 20, `npm ci`
2. `npm run build` with `NODE_ENV=production`
3. Verify critical output files exist:
   - `_site/index.html`
   - `_site/css/styles.css`
   - `_site/sitemap.xml`
4. Report total HTML page count

## Infrastructure

| Component | Provider | Details |
|-----------|----------|---------|
| Hosting | GitHub Pages | Static file serving with CDN |
| Domain | e9n.dev | Custom domain via `CNAME` file |
| DNS | (configured externally) | Points to GitHub Pages |
| Analytics | Umami | Self-hosted at `analytics.e9n.dev` |
| SSL | GitHub Pages | Automatic HTTPS via Let's Encrypt |

## Domain Configuration

The `CNAME` file in the repo root contains `e9n.dev`. The deploy workflow copies this to `_site/CNAME` to ensure GitHub Pages maintains the custom domain after each deployment.

## Changes Log

- 2026-03-08: Initial documentation generated
