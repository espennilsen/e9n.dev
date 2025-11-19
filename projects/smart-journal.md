---
layout: base.njk
title: 'Smart Journal'
excerpt: 'An intelligent agent built with the Claude Agent SDK to manage, organize, and query Obsidian journal entries through natural language.'
date: 2025-01-05
tech:
  - Claude Agent SDK
  - Obsidian
  - TypeScript
github: https://github.com
image: https://picsum.photos/id/180/600/400
status: coming-soon
featured: false
---

# Smart Journal

An intelligent agent built with the Claude Agent SDK to manage, organize, and query Obsidian journal entries through natural language.

## The Idea

I keep two Obsidian vaults - one for work (in OneDrive) and one for personal notes. Searching through years of journal entries is difficult. I want to ask questions like "What were my main goals in Q4?" and get synthesized answers.

## What It Does

The agent integrates directly with Obsidian using the Claude Agent SDK. You can:

- **Query past entries** - "What did I learn from that failed project last year?"
- **Find patterns** - "When do I have my best creative thinking sessions?"
- **Summarize themes** - "What were my top priorities in December?"
- **Link related notes** - Automatically suggest connections between ideas

## Architecture

Built with the Claude Agent SDK for agent orchestration and Obsidian's API for vault access. The agent reads markdown files, builds context, and responds to natural language queries.

## Privacy

Everything runs locally. The work vault stays in OneDrive (company policy), the personal vault uses AI tools like Gemini for semantic search. No data leaves my machine except API calls for the personal vault.

## Status

Early prototype. Exploring different query patterns and seeing what's actually useful vs. novelty.
