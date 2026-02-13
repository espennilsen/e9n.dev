---
layout: base.njk
title: 'SalesGPT Agent'
excerpt: 'An autonomous agent that researches leads and drafts personalized outreach emails using Gemini Pro.'
date: 2025-02-01
tech:
  - Python
  - LangChain
  - Gemini API
github: https://github.com
image: https://picsum.photos/id/1/600/400
status: coming-soon
featured: false
---

# SalesGPT Agent

An autonomous agent that researches leads and drafts personalized outreach emails using Gemini Pro.

## The Problem

Sales outreach is time-consuming. You need to research each lead, understand their business, find relevant talking points, and craft a personalized message. Doing this manually for dozens of leads per day is exhausting.

## The Solution

An AI agent that handles the research phase automatically. Give it a list of leads, and it will:

- Research each company's recent activity (blog posts, news, LinkedIn updates)
- Identify relevant pain points and opportunities
- Draft personalized email templates based on actual context
- Flag high-priority leads based on buying signals

## How It Works

Built with LangChain for agent orchestration and Gemini Pro for research and writing. The agent follows a multi-step process:

1. **Discovery** - Scrapes public data about the company
2. **Analysis** - Identifies relevant themes and opportunities
3. **Drafting** - Generates personalized email templates
4. **Review** - Human reviews and edits before sending

## Status

Proof of concept works. Currently refining the research quality and email tone to sound less AI-generated.
