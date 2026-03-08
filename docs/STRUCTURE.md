# Project Structure

> Last updated: 2026-03-08

The project follows a flat, Eleventy-conventional layout. Content (Markdown) lives in top-level directories, templates in `_includes/`, styling in `css/`, and static assets in `static/`. Build output goes to `_site/` (git-ignored).

## Directory Tree

```
e9n.dev/
├── _includes/                  # Nunjucks layouts and partials
│   ├── base.njk                # Master HTML layout — nav, footer, head, GSAP, analytics
│   ├── post.njk                # Blog post layout — extends base.njk
│   ├── blog-posts.njk          # Blog data JSON template (outputs blog-data.json)
│   └── icons/                  # Inline SVG icon partials ({% include %}-able)
│       ├── arrow-right.svg
│       ├── github.svg
│       ├── linkedin.svg
│       ├── twitter.svg
│       ├── cpu.svg
│       ├── terminal.svg
│       ├── sparkles.svg
│       ├── tag.svg
│       └── ...                 # ~15 SVG icons total
├── _data/                      # Eleventy global data files (currently empty)
├── blog/                       # Blog posts (Markdown)
│   ├── building-this-blog-with-11ty.md       # Published posts
│   ├── human-in-the-loop-ai-development.md
│   ├── ...                                    # ~10 published posts
│   ├── draft.obsidian-para-method-guide.md   # Draft posts (draft: true)
│   ├── draft.ai-stress-test-career-path.md
│   └── ...                                    # ~20 drafts
├── pages/                      # Static pages (Nunjucks templates)
│   ├── index.njk               # Homepage — hero, focus areas, latest posts
│   ├── blog.njk                # Blog archive — tag cloud + full post list
│   ├── about.njk               # About page
│   ├── cv.njk                  # CV / résumé page
│   ├── projects.njk            # Projects grid page
│   └── tag.njk                 # Tag page template (paginated per tag)
├── projects/                   # Project pages (Markdown)
│   ├── aivena.md
│   ├── pi-extensions.md
│   ├── pilot.md
│   └── comfyui-cheatsheets.md
├── css/
│   └── styles.css              # Tailwind imports + CSS custom properties + blog prose styles
├── static/                     # Passthrough-copied assets
│   ├── images/
│   │   ├── espen.png           # Author photo (used in OG image)
│   │   └── projects/           # Project screenshots
│   ├── CV.pdf
│   └── Profile.pdf
├── public/
│   └── blog-data.json          # Generated blog data (JSON feed)
├── .github/workflows/
│   ├── deploy.yml              # GitHub Actions — build + deploy to GitHub Pages
│   └── ci.yml                  # GitHub Actions — build verification
├── docs/                       # This documentation
├── eleventy.config.cjs         # Eleventy config — filters, collections, passthrough
├── tailwind.config.js          # Tailwind config — content paths, theme, colors
├── postcss.config.js           # PostCSS config (Tailwind + autoprefixer)
├── metadata.json               # Site metadata (name, description)
├── sitemap.njk                 # Sitemap XML template (auto-built from collections)
├── robots.txt                  # Search engine directives
├── CNAME                       # GitHub Pages custom domain
├── package.json                # Dependencies and npm scripts
├── AGENTS.md                   # AI agent project context
└── README.md                   # Project readme
```

## Key Files

| File | Role |
|------|------|
| `eleventy.config.cjs` | Central build config — defines all filters (`excerpt`, `postContent`, `markdown`, `date`, `limit`, `slugify`), collections (`posts`, `projects`, `tagList`), draft exclusion logic, passthrough copy, and directory structure |
| `_includes/base.njk` | Master layout — HTML head with SEO meta/OG/Twitter/JSON-LD, responsive navbar with mobile menu, footer, GSAP scroll animation setup, Umami analytics |
| `_includes/post.njk` | Blog post layout — category badge, draft indicator, title/subtitle, date/reading time, rendered content, tag links |
| `css/styles.css` | Theme definition (CSS custom properties for dark mode), Tailwind import, all `.blog-content` prose styles (headings, paragraphs, lists, blockquotes, code blocks, links) |
| `pages/index.njk` | Homepage — hero section, 3 focus area cards (AI Integration, Technical Sales, Growth Mindset), latest 5 posts |
| `pages/blog.njk` | Blog archive — tag cloud from `collections.tagList`, full post list with category, date, excerpt, reading time, tags |
| `pages/tag.njk` | Tag filter page — uses Eleventy pagination to generate `/blog/tag/<tag>/` for each unique tag |
| `sitemap.njk` | Generates `/sitemap.xml` from collections — static pages + published posts + projects |
| `.github/workflows/deploy.yml` | CI/CD — checkout → Node setup → npm ci → build → upload artifact → deploy to GitHub Pages |

## Module Boundaries

This is a static site, not an application, so there are no import-based module boundaries. Instead, the dependency flow is:

- **Templates** (`pages/*.njk`, `blog/*.md`, `projects/*.md`) → reference **layouts** (`_includes/*.njk`) via frontmatter `layout:` field
- **Layouts** (`_includes/*.njk`) → include **icons** (`_includes/icons/*.svg`) and use **collections** defined in config
- **Config** (`eleventy.config.cjs`) → defines **filters** and **collections** consumed by all templates
- **CSS** (`css/styles.css`) → compiled by Tailwind CLI independently of Eleventy; scans templates for class usage
- **Build output** (`_site/`) → consumed by GitHub Actions deploy step

## Changes Log

- 2026-03-08: Initial documentation generated
