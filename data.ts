
import { BlogPost, Project } from './types';

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'future-of-sales-ai',
    title: 'The Future of Sales is AI-Augmented',
    excerpt: 'How Large Language Models are transforming the SDR workflow and why human empathy is becoming more valuable than ever.',
    date: '2024-11-16',
    category: 'Sales + AI',
    tags: ['AI', 'Sales', 'Strategy', 'LLM'],
    readingTime: '5 min read',
    featured: true,
    content: `
# The Future of Sales is AI-Augmented

The landscape of B2B sales is shifting beneath our feet. It's no longer about who can spam the most emails; it's about who can leverage intelligence to build genuine connections at scale.

## The Shift
Traditionally, Sales Development Representatives (SDRs) spent 40% of their time researching and 60% crafting generic outreach. With tools like Gemini and GPT-4, that ratio is flipping.

### Key Benefits
1. **Hyper-personalization**: AI analyzes prospect news, funding rounds, and LinkedIn posts to craft openers.
2. **Intent Detection**: Predictive models scoring leads based on subtle buying signals.
3. **Role Evolution**: SDRs are becoming "Prompt Engineers of Persuasion".

## The Human Element
Paradoxically, as AI handles the logic and data processing, the *human* element—empathy, tone, and trust—becomes the premium currency. AI opens the door; you have to walk through it.

> "AI won't replace sales leaders. Sales leaders who use AI will replace those who don't."

## Practical Steps
Start by automating your research phase. Use agents to summarize annual reports of your target accounts.
    `
  },
  {
    slug: 'building-personal-knowledge-base',
    title: 'Building a Second Brain with Obsidian & Gemini',
    excerpt: 'A technical deep dive into connecting your local markdown notes with Google\'s Gemini API for semantic search.',
    date: '2024-11-10',
    category: 'Tutorials',
    tags: ['Productivity', 'Code', 'Obsidian', 'Gemini'],
    readingTime: '8 min read',
    featured: true,
    content: `
# Building a Second Brain

I've been using Obsidian for years. But recently, I integrated it with the Gemini API to chat with my notes.

## The Stack
* **Obsidian**: For markdown storage.
* **Python Script**: To vectorise notes.
* **Gemini 2.5 Flash**: For fast, context-aware answers.

\`\`\`typescript
// Example interaction concept
const askMyNotes = async (question: string) => {
  const context = await searchVectorDB(question);
  const response = await ai.models.generateContent({
     model: 'gemini-2.5-flash',
     contents: \`Context: \${context} \\nQuestion: \${question}\`
  });
  return response.text;
}
\`\`\`

## Why Gemini?
The massive context window allows me to dump entire quarters of journaling into the prompt for quarterly reviews without complex RAG pipelines in some cases.
    `
  },
  {
    slug: 'growth-mindset-tech',
    title: 'Stoicism for Software Engineers',
    excerpt: 'Applying ancient philosophy to modern technical debt and sprint planning.',
    date: '2024-11-02',
    category: 'Growth Mindset',
    tags: ['Philosophy', 'Mental Health', 'Career'],
    readingTime: '6 min read',
    featured: false,
    content: `
# Stoicism for Engineers

**Control what you can.** You cannot control the API downtime. You can control your error handling.

## The Dichotomy of Control
In software, there are external dependencies and internal logic.
* **External**: AWS outages, changed requirements, legacy code.
* **Internal**: Code quality, test coverage, your reaction to bugs.

Focusing on the internal brings peace. Focusing on the external brings burnout.
    `
  },
  {
    slug: 'eleventy-vs-nextjs',
    title: 'Why I Chose Eleventy (Simulated) for this Blog',
    excerpt: 'Static Site Generators are making a comeback. Here is why simpler is often better for content sites.',
    date: '2024-10-27',
    category: 'Tool Reviews',
    tags: ['Web Dev', 'SSG', '11ty'],
    readingTime: '4 min read',
    featured: false,
    content: `
# Simplicity Wins

While React (which this site ironically runs on for this demo) is powerful, a blog often just needs HTML and CSS.

## Benefits of SSG
1. **Performance**: Pre-rendered HTML is unbeatable.
2. **Security**: No database to hack.
3. **Cost**: Free hosting on Vercel/Netlify.

## My Setup
I use Markdown for everything. It's portable, future-proof, and easy to migrate.
    `
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'comfyui',
    title: 'ComfyUI Cheatsheets',
    description: 'The comprehensive reference guide for ComfyUI nodes, workflows, and keyboard shortcuts. Streamlining the Stable Diffusion creative process.',
    tech: ['Stable Diffusion', 'ComfyUI', 'Documentation'],
    link: 'https://comfyui-cheatsheets.com',
    image: 'https://picsum.photos/id/250/600/400'
  },
  {
    id: 'x10s',
    title: 'x10s',
    description: 'An advanced AI Sandbox environment designed to orchestrate and run parallel autonomous agents. Built with React, TypeScript and PostgreSQL to handle high-performance multi-agent workflows and emergent behaviors.',
    tech: ['React', 'TypeScript', 'PostgreSQL', 'AI Agents'],
    link: '#',
    image: 'https://picsum.photos/id/532/600/400',
    status: 'coming-soon'
  },
  {
    id: '1',
    title: 'SalesGPT Agent',
    description: 'An autonomous agent that researches leads and drafts personalized outreach emails using Gemini Pro.',
    tech: ['Python', 'LangChain', 'Gemini API'],
    link: '#',
    github: 'https://github.com',
    image: 'https://picsum.photos/id/1/600/400',
    status: 'coming-soon'
  },
  {
    id: '3',
    title: 'Smart Journal',
    description: 'An intelligent agent built with the Claude Agent SDK to manage, organize, and query Obsidian journal entries through natural language.',
    tech: ['Claude Agent SDK', 'Obsidian', 'TypeScript'],
    link: '#',
    github: 'https://github.com',
    image: 'https://picsum.photos/id/180/600/400',
    status: 'coming-soon'
  }
];
