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

# Building a Second Brain

I've been using Obsidian for years. But recently, I integrated it with the Gemini API to chat with my notes.

<!--excerpt-->

## The Stack
* **Obsidian**: For markdown storage.
* **Python Script**: To vectorise notes.
* **Gemini 2.5 Flash**: For fast, context-aware answers.

```typescript
// Example interaction concept
const askMyNotes = async (question: string) => {
  const context = await searchVectorDB(question);
  const response = await ai.models.generateContent({
     model: 'gemini-2.5-flash',
     contents: `Context: ${context} \nQuestion: ${question}`
  });
  return response.text;
}
```

## Why Gemini?
The massive context window allows me to dump entire quarters of journaling into the prompt for quarterly reviews without complex RAG pipelines in some cases.
