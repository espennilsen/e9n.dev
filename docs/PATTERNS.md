# Patterns & Conventions

> Last updated: 2026-03-08

The project follows Eleventy conventions with a few project-specific patterns for content management, styling, and SEO.

## Naming Conventions

### Files
- **Published blog posts**: `blog/<slug>.md` — kebab-case slug matching the URL
- **Draft blog posts**: `blog/draft.<slug>.md` — `draft.` prefix, excluded from git via `.gitignore`
- **Pages**: `pages/<name>.njk` — one file per static page
- **Projects**: `projects/<name>.md` — one file per project
- **Layouts**: `_includes/<name>.njk` — lowercase descriptive name
- **Icons**: `_includes/icons/<name>.svg` — inline SVG files, included via `{% include %}`

### CSS Classes
- Tailwind utility classes throughout templates
- Custom classes use `.blog-content` namespace for prose styles in `css/styles.css`
- GSAP animation classes: `animate-fade-up`, `animate-stagger`, `animate-scale`, `animate-slide-left`, `animate-slide-right`

### Frontmatter
- `layout` always points to a `.njk` file in `_includes/`
- `permalink` uses trailing slash convention (e.g., `/blog/`, `/about/`)
- Tags are an array, category is a single string

## Content Authoring Pattern

### Blog Post Lifecycle

1. Create `blog/draft.<slug>.md` with `draft: true` in frontmatter
2. Write content using `<!--excerpt-->` to separate excerpt from body
3. Preview locally with `npm run dev` (drafts visible in development)
4. When ready to publish:
   - Remove `draft: true` from frontmatter
   - Rename file from `draft.<slug>.md` to `<slug>.md`
   - Commit and push — CI builds, deploy publishes

### Excerpt Extraction

Posts use the `<!--excerpt-->` marker to split content:

```markdown
This paragraph becomes the excerpt shown in listings.

<!--excerpt-->

This is the full post body, shown only on the post page.
```

If no marker is present, the first paragraph is used as the excerpt (fallback in `eleventy.config.cjs`).

## Layout Inheritance

```
base.njk (HTML shell, nav, footer, head)
  └── post.njk (blog post wrapper — extends base.njk)
        └── blog/*.md (post content rendered into post.njk)

  └── pages/*.njk (each page directly uses base.njk as layout)

  └── projects/*.md (project content uses base.njk directly)
```

## Animation Pattern

GSAP animations are initialized in `_includes/base.njk` on `DOMContentLoaded`:

| CSS Class | Animation | Trigger |
|-----------|-----------|---------|
| `animate-fade-up` | Fade in + translate Y(30px→0) | Element enters viewport (top 95%) |
| `animate-stagger` | Children fade in with row-based delay | Container enters viewport |
| `animate-scale` | Scale(0.95→1) + fade in | Element enters viewport |
| `animate-slide-left` | Translate X(-30px→0) + fade in | Element enters viewport |
| `animate-slide-right` | Translate X(30px→0) + fade in | Element enters viewport |

Usage: Add the class to any element in a Nunjucks template. No JavaScript needed beyond the GSAP setup in base.njk.

## SEO Pattern

Every page automatically gets SEO metadata in `base.njk`:

1. **Title**: `{{ title }} — e9n.dev` (or site title for homepage)
2. **Description**: From `description` or `excerpt` frontmatter, truncated to 160 chars
3. **Canonical URL**: `https://e9n.dev{{ page.url }}`
4. **Open Graph**: Type (`article` for posts, `website` for pages), title, description, image, site name
5. **Twitter Card**: `summary_large_image` with same metadata
6. **JSON-LD**: `BlogPosting` schema for posts, `WebSite` schema for homepage

Blog posts also get:
- `article:published_time`
- `article:author`
- `article:tag` for each tag

## Sitemap Pattern

`sitemap.njk` generates `/sitemap.xml` at build time by iterating over Eleventy collections. When you add a new blog post or project, it's automatically included. Manual entries are only needed for new top-level static pages.

## Changes Log

- 2026-03-08: Initial documentation generated
