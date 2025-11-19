---
layout: post.njk
title: 'Why I Chose Eleventy (Simulated) for this Blog'
excerpt: 'Static Site Generators are making a comeback. Here is why simpler is often better for content sites.'
date: 2024-12-26
category: 'Tool Reviews'
tags:
  - Web Dev
  - SSG
  - 11ty
readingTime: '4 min read'
featured: false
---

# Killing the React Hydration Monster

I spent three years building enterprise SaaS dashboards in React. Complex state management, infinite scroll tables, real-time WebSocket updates—the works. So when I sat down to build this blog, my muscle memory reached for `create-next-app`.

Then I stopped myself. What the hell was I doing?

<!--excerpt-->

## The Realization

A blog doesn't need React. It doesn't need hydration. It doesn't need a 200KB JavaScript bundle just to show text on a screen. This isn't a dashboard—it's words on the internet.

So I picked Eleventy. Build time: 0.08 seconds. Bundle size: whatever CSS I write. JavaScript: only for the menu toggle and scroll animations.

## What I Actually Gained

**Speed that feels illegal.** Lighthouse scores of 100 across the board without even trying. Every page loads before you finish blinking.

**No build complexity.** No webpack configs. No hydration errors at 2 AM. No "use client" directives scattered everywhere like landmines.

**Markdown as the source of truth.** I write in Obsidian, commit to GitHub, and it's live. No CMS. No database. No mental overhead about where content lives.

## The Trade-offs

Yeah, I don't have client-side routing. Each page is an actual page load. In 2024, that's apparently controversial.

But you know what? It's fine. Better than fine. The site is fast enough that you don't notice. And I don't wake up to Vercel bills or database connection errors.

## The Lesson

Not everything needs to be a SPA. Sometimes the simplest tool is the right tool. I'll save React for when I actually need it—when I'm building something that requires complex interactivity.

For words? HTML wins.
