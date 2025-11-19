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
layout: post.njk
title: "Your Post Title"
excerpt: "Brief description of your post"
date: 2024-01-15
category: "AI"
tags:
  - AI
  - Tutorial
readingTime: "5 min read"
featured: false
draft: true
---

Your blog post content here...
```

#### Draft Posts

Posts marked with `draft: true` will:
- ✅ **Appear in development** (`npm run dev`) with a visible DRAFT badge
- ❌ **Be excluded from production builds** (`npm run build`)
- ❌ **Not be deployed** to the live site via GitHub Actions

To publish a post, simply remove the `draft: true` line from the front matter.

### Adding Icons

Add new SVG icons to `_includes/icons/` and reference them in templates:

```nunjucks
{% include "icons/your-icon.svg" %}
```

## 📝 License

© 2025 e9n.dev. All rights reserved.
