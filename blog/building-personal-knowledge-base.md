---
layout: post.njk
title: 'Building a Second Brain with Obsidian & Gemini'
excerpt: 'A technical deep dive into connecting your local markdown notes with Google''s Gemini API for semantic search.'
date: 2024-11-10
category: 'Tutorials'
tags:
  - Productivity
  - Code
  - Obsidian
  - Gemini
readingTime: '8 min read'
featured: true
---

# I Built a ChatGPT for My Brain (and It's Uncomfortably Accurate)

I've been journaling in Obsidian for 4 years. 1,247 markdown files. Meeting notes, project ideas, random thoughts at 2 AM, book highlights, workout logs—everything.

Last month I connected it to Gemini 2.0 Flash. Now I can ask my past self questions.

It's weird.

<!--excerpt-->

## The Problem I Was Solving

Ever had that feeling where you KNOW you wrote something down, but you can't find it?

Or worse: You're about to start a project, and you have this nagging sense you've already tried this exact thing before, but you can't remember the outcome?

That was me, constantly. I had years of accumulated knowledge sitting in markdown files, but it was effectively dead. Search only works if you remember the exact words you used.

## The Setup

Here's the stack:
- **Obsidian vault** - 4 years of markdown notes
- **Python script** - Chunks and embeds notes using Gemini's embedding API
- **ChromaDB** - Local vector database (runs on my laptop, no cloud)
- **Gemini 2.0 Flash** - The actual Q&A interface

The whole thing cost me $2.47 in API calls to set up. Ongoing cost is basically nothing because I'm using the free tier.

## How It Actually Works

```python
# Simplified version of my search flow
def ask_my_brain(question):
    # Find relevant note chunks
    results = chroma.query(
        query_texts=[question],
        n_results=5
    )

    # Feed to Gemini with context
    prompt = f"""
    Based on these notes:
    {results}

    Answer: {question}
    """

    response = genai.generate_content(prompt)
    return response.text
```

Nothing fancy. Embed the notes, store in vector DB, query with cosine similarity, feed top results to LLM. Standard RAG pattern.

## What I Actually Use It For

**"What was the outcome of that customer call with Acme Corp last quarter?"**

Pulls up my meeting notes from July. Turns out we discussed pricing and I noted they'd circle back in Q4. It's Q4 now. I would've completely forgotten.

**"What books have I read about negotiation?"**

Lists 6 books with highlights and my notes. I didn't remember half of them.

**"When was the last time I had a good workout week?"**

This one hurt. It's been 7 weeks. My past self is calling me out.

## The Uncomfortable Part

The AI version of my notes is sometimes better at remembering my ideas than I am.

I asked it: "What's my long-term career plan?"

It synthesized themes from 2 years of scattered journal entries and gave me a more coherent answer than I could've articulated myself.

That's both powerful and slightly horrifying.

## Why Gemini Over GPT-4?

Two reasons:

1. **Context window.** I can dump 100+ note chunks into a single prompt. GPT-4's context is great, but Gemini 2.0's is massive.

2. **Cost.** For my use case (querying my own notes), Gemini Flash is way cheaper and almost as good.

## The Code

I've open-sourced the whole setup. It's literally just:
- Script to chunk markdown files
- Embedding + ChromaDB storage
- Simple Python CLI to query

[Link to repo would go here]

Takes about 30 minutes to set up if you have basic Python knowledge.

## What I Learned

Having a searchable memory isn't about productivity. It's about not losing your past self.

Every idea I've had, every lesson I've learned, every connection I've made—it's all still there. I just needed a better interface to access it.

Now I have one.

And honestly? It's kind of magical.
