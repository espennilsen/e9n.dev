# e9n.dev

Personal website and blog exploring the intersection of AI, Sales, and Self-Growth.

Built with [11ty](https://www.11ty.dev/), styled with [Tailwind CSS](https://tailwindcss.com/), and animated with [GSAP](https://greensock.com/gsap/).

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📂 Project Structure

```
e9n.dev/
├── _data/              # Global data files
├── _includes/          # Layout templates and partials
│   ├── base.njk       # Main layout template
│   ├── post.njk       # Blog post layout
│   └── icons/         # SVG icon components
├── blog/              # Blog posts (Markdown)
├── pages/             # Site pages (Nunjucks)
│   ├── index.njk      # Homepage
│   ├── about.njk      # About page
│   ├── blog.njk       # Blog archive
│   └── projects.njk   # Projects showcase
├── css/               # Styles
│   └── styles.css     # Tailwind CSS
├── _site/             # Build output (auto-generated)
└── eleventy.config.cjs # 11ty configuration
```

## 🎨 Features

- **Static Site Generation** - Built with 11ty for fast, SEO-friendly pages
- **Modern Styling** - Tailwind CSS v4 with custom design system
- **Smooth Animations** - GSAP scroll-triggered animations
- **Blog System** - Markdown-based blog with categories and tags
- **Responsive Design** - Mobile-first approach
- **Dark Theme** - Custom dark color scheme
- **Icon System** - Reusable SVG components

## 🌐 Deployment

This site automatically deploys to GitHub Pages via GitHub Actions when pushing to the `main` branch.

### GitHub Pages Setup

1. Go to your repository Settings → Pages
2. Set Source to "GitHub Actions"
3. The workflow will automatically build and deploy on push

### Custom Domain Setup

The site is configured for the custom domain `e9n.dev`:

1. Add your domain in GitHub repository settings (Settings → Pages → Custom domain)
2. Configure DNS records with your domain provider:
   - Add an `A` record pointing to GitHub Pages IPs:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - Or add a `CNAME` record pointing to `<username>.github.io`

The `CNAME` file ensures your custom domain persists after each deployment.

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server with live reload
- `npm run build` - Build site for production
- `npm run build:11ty` - Build 11ty only
- `npm run build:css` - Build CSS only
- `npm run watch:css` - Watch and rebuild CSS
- `npm run preview` - Build and serve production site locally

### Adding Blog Posts

Create a new Markdown file in the `blog/` directory:

```markdown
---
title: "Your Post Title"
date: 2024-01-15
category: "AI Deep Dives"
tags: ["AI", "Tutorial"]
readingTime: "5 min read"
excerpt: "Brief description of your post"
---

Your blog post content here...
```

### Adding Icons

Add new SVG icons to `_includes/icons/` and reference them in templates:

```nunjucks
{% include "icons/your-icon.svg" %}
```

## 📝 License

© 2024 e9n.dev. All rights reserved.
