---
layout: post.njk
title: 'Building This Blog with 11ty and Claude Code'
excerpt: 'How I went from idea to deployed blog in a few hours using Claude Code, 11ty, and GitHub Pages. Plus lessons learned and what''s coming next.'
date: 2025-01-19
category: 'Web Dev'
tags:
  - 11ty
  - Claude Code
  - Web Dev
  - Meta
readingTime: '6 min read'
featured: true
---

# Building This Blog with 11ty and Claude Code

I wanted a simple personal blog. No CMS, no database, no unnecessary complexity. Just markdown files and fast-loading pages.

So I spent a few hours with Claude Code and built this.

<!--excerpt-->

## Why 11ty?

I've built React apps before. I know Next.js, I've used Gatsby. But for a blog? That felt like overkill.

11ty generates static HTML at build time. No JavaScript hydration. No client-side routing overhead. Just pure, fast HTML and CSS.

The entire site builds in under a second. Lighthouse scores are perfect without even trying.

## The Stack

The foundation is 11ty, a static site generator that uses Nunjucks templates to turn markdown into HTML at build time. For styling, I went with Tailwind CSS v4 and built a custom dark theme from scratch. The smooth scroll animations come from GSAP, which adds just enough motion without feeling overdone. Everything deploys to GitHub Pages for free, pointing to my custom domain. And Claude Code handled the entire development process from start to finish.

## Working with Claude Code

I've used Claude Code on other projects before, but this was a good test of how quickly you can go from idea to deployed site.

### What Worked Really Well

The speed of iteration was incredible. I could describe what I wanted, watch it get built, then immediately refine it. No context switching between coding and designing. Just a conversation that produced working code.

When I asked about static site generators, Claude Code didn't just suggest 11ty - it explained the trade-offs between 11ty, Next.js, and Gatsby in the context of what I was actually building. That kind of contextual reasoning made the recommendation feel trustworthy.

I made mistakes along the way. At one point I accidentally deleted my 11ty templates thinking they were old Vite files from a previous setup. Claude Code caught it, restored them from git, and we kept moving. No panic, no lost work.

The SVG refactoring was another win. I had inline SVGs cluttering my templates, making them hard to read. I mentioned it once, and within seconds every icon was extracted into its own component file. The codebase immediately felt cleaner and more maintainable.

### What I Learned

Specificity matters when working with AI. When I said "add animations," Claude Code added them everywhere. I should've specified which sections first, then expanded. The more precise the request, the better the output.

AI-generated content needs your voice. The initial blog posts Claude Code drafted sounded fine structurally, but they were generic. I had to give feedback, inject personality, make them mine. AI is excellent at structure and flow, but authenticity still comes from you.

Git became my safety net. Claude Code commits frequently, which meant when something broke, we could just roll back and try again. That made experimentation feel low-risk. I could ask "what if we tried this instead?" without worrying about losing progress.

### Unexpected Benefits

I learned more about 11ty's architecture by watching Claude Code build it than I would have from just reading documentation. Seeing the patterns emerge in real-time - how data files work, how layouts cascade, how filters transform content - made everything click in a way tutorials never did.

I also ended up with a deployment pipeline I actually understand. It's not magic anymore. It's just GitHub Actions running `npm run build` and pushing the output to the right branch. Simple, transparent, easy to modify if I need to.

## The Development Process

The project started with converting a React/Vite starter into an 11ty site. That meant ripping out all the client-side routing, component logic, and build complexity, replacing it with simple templates and markdown files.

Then came styling. I set up Tailwind CSS with a custom dark theme, tweaking colors and spacing until everything felt right. The content structure emerged naturally - blog posts live in markdown files, static pages use Nunjucks templates.

Once the basics worked, I added GSAP for scroll-triggered animations. Subtle fade-ins and stagger effects that make the site feel more alive without being distracting.

Refactoring came next. I extracted inline SVGs into separate component files, cleaned up template logic, and organized things in a way that'll be easy to maintain. Good structure matters when you're the only one maintaining it.

Finally, deployment. I set up a GitHub Actions workflow that builds the site and pushes it to GitHub Pages whenever I push to main. Point the custom domain at it, and we're live.

The whole thing took one evening. A few hours from nothing to a deployed blog with custom domain and all. Most of that time was decision-making and refinement, not actual coding.

## What's Next

This is version 1.0. It works, but there's more I want to add.

An RSS feed is the obvious next step. Readers should be able to subscribe without checking back manually. 11ty has plugins for this, so it's just a matter of wiring it up.

Search functionality would be nice too. Probably something client-side like Lunr.js or Pagefind to keep things fast and self-contained. No external services, no server-side logic.

I'm thinking about adding a reading progress indicator for longer posts. It's a small UI detail, but it helps readers know how much is left. And I'll need proper code syntax highlighting since I plan to write technical posts with code examples.

Longer-term, I want to make tags and categories actually functional instead of just decorative. Right now they're labels. Eventually they should filter and organize content. Related posts at the end of each article would be good too - help readers discover more without leaving the site.

The theme is hardcoded to dark right now because that's what I prefer. But I should probably add a toggle. Some people like light themes, and it's a better default for accessibility.

Newsletter integration is on my radar. Maybe Buttondown or ConvertKit for email subscribers. Not urgent, but once there's enough content, it makes sense to let people subscribe.

Content-wise, I want to write about how I'm using M365 Copilot at Lenovo for sales research. There's a lot happening there that isn't getting talked about outside of sales circles. Personal knowledge management is another area - I keep two Obsidian vaults. One for work that lives in OneDrive on my company laptop, and one personal vault where I can experiment with AI tools like Gemini. And I'll write about self-development stuff: Stoicism, habit formation, growth mindset.

Side projects will show up too, whatever I'm building or learning at the time. The goal is one post per week. That feels sustainable without sacrificing quality.

## Lessons Learned

Start simple. I resisted the urge to add every feature upfront. Ship something basic first, then iterate based on what you actually need rather than what you think you might need someday.

Static sites are underrated. For content-heavy sites like blogs, pre-rendered HTML is hard to beat. It's fast, reliable, and cheap to host. No database to maintain, no server to monitor, no security patches to worry about.

AI coding tools are powerful but they need guidance. Claude Code accelerated development massively, but I had to steer it. You need to know what you want, give clear feedback, and review everything it produces. The better your input, the better the output.

Own your platform. I could've used Medium or Substack, but then I'd be renting. This is just markdown files in a git repo. I control the design, the domain, the data, everything. If I want to migrate or change something fundamental, I can. No vendor lock-in, no algorithm changes breaking my reach.

## The Numbers

For transparency, hosting costs nothing. GitHub Pages is free. The domain runs about $12 per year, which works out to $1 per month. Development took a few hours in one evening. Maintenance is basically zero—there's no database to back up, no plugins to update, no security patches to install.

Compare that to a WordPress site with hosting fees, or a Webflow subscription at $15-30 per month. There's no contest. Static sites win on cost alone, and that's before you factor in speed and reliability.

## Try It Yourself

If you want to build something similar, the setup is straightforward. Install 11ty with `npm install @11ty/eleventy`, add Tailwind CSS for styling, and start writing markdown files in a blog folder. Set up GitHub Pages for deployment, point a domain at it if you want, and you're done.

11ty's documentation is excellent. You can follow it step by step and have a working site in an hour or two.

And if you have access to Claude Code? It's even easier. Just describe what you want and let it handle the implementation. You'll learn the architecture by watching it get built.

## Final Thoughts

This blog exists because I stopped overthinking and just built it.

No perfect design. No feature completeness. No waiting for the "right time."

I wanted a place to share ideas. Now I have one.

Version 1.0 is live. Version 1.1 will come when I need it.

That's the beauty of owning your stack - you can iterate forever.
