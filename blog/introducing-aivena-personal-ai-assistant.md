---
layout: post.njk
title: "Introducing Aivena: A Vibe Coded AI Assistant"
excerpt: "I vibe coded a personal AI assistant that remembers everything, manages my contacts, tracks my calendar, chats with me on Telegram, and runs background jobs. Every extension, every feature — built by talking to the agent."
date: 2026-02-14
category: "AI"
tags:
  - AI
  - Pi
  - Extensions
  - Personal Assistant
  - Agentic AI
  - Vibe Coding
readingTime: "8 min read"
featured: true
---

I wanted a personal AI assistant. Not a chatbot. Not a coding agent that forgets me every session. Something that actually knows who I am, remembers what we talked about last Tuesday, nudges me about birthdays, and keeps working when I close the terminal.

So I built one. It's called [Aivena](https://aivena.dev), and the entire thing was vibe coded — every extension, every feature, every line of TypeScript — by talking to the agent instead of writing code by hand.

<!--excerpt-->

## What Even Is This?

Aivena is a personal AI assistant that lives in my terminal. She has long-term memory, a personal CRM, a calendar, a task tracker, cron jobs, a heartbeat, and a Telegram bridge — so I can talk to her from my phone while I'm out grabbing coffee.

She's built on [Pi](https://github.com/mariozechner/pi-coding-agent), a terminal-first coding agent, and composed entirely from extensions — 18 of them — that plug into Pi's event system. Each extension is a standalone TypeScript module that adds a specific capability. Snap them together and you get something that feels like a real assistant.

The whole thing was vibe coded. I described what I wanted, the agent wrote the code, I tested it, gave feedback, and iterated. I never opened an editor to manually write extension code. It was all conversation.

## The Journey: 11,000 Lines, Three Versions, One Approach

Aivena didn't appear fully formed. It went through three distinct phases — and all three were vibe coded.

**v1 was a monolith.** 11,589 lines of TypeScript. A custom memory system, a hand-rolled CRM, bespoke Telegram integration, a calendar built from scratch. I described each feature to Pi, it built them, and I kept stacking. It worked, but it was fragile. Every feature was tightly coupled. Updating one thing risked breaking three others.

**v2 was the migration.** I started pulling features out into Pi extensions — standalone modules with clean interfaces. The CRM became `pi-personal-crm`. Memory became `pi-memory`. Telegram became `pi-channels`. Again, all vibe coded. I'd say "extract the CRM into its own extension" and the agent would refactor it. The monolith shrank to about 1,000 lines of glue code.

**v3 was the realization.** Every remaining line of custom code had been replaced by an extension that did the job better. The Aivena workspace itself became pure configuration — a `settings.json`, some markdown files, and symlinks to extensions. The code didn't disappear. It moved into reusable building blocks, each one built the same way: by talking to the agent.

## What Vibe Coding Actually Looks Like at This Scale

People hear "vibe coding" and think it's asking ChatGPT to write a script. It's not. Building Aivena meant sustained, iterative conversations across hundreds of sessions. Here's what that actually looked like:

- **"Build me a personal CRM extension"** — that's not one prompt. That's a conversation that spans database schema design, tool registration, query patterns, interaction logging, birthday reminders, and edge cases around duplicate contacts.
- **"The heartbeat should check for overdue tasks and message me on Telegram"** — that means wiring together three separate extensions (`pi-heartbeat`, `pi-cron`, `pi-channels`) and making them coordinate through Pi's event system.
- **"Extract this into its own extension"** — refactoring a tightly coupled feature into a standalone module with clean boundaries. The agent does the surgery, I verify nothing broke.

Each extension went through multiple rounds of "try this, that's not quite right, what about this edge case, actually let's redesign that part." The agent wrote the code. I drove the product decisions.

## The Extensions

Eighteen extensions, each doing one thing well:

- **pi-heartbeat** — The one that makes her alive. She wakes up periodically, checks her systems, takes action on what she finds, and goes back to sleep. No one has to prompt her.
- **pi-memory** — Long-term memory and daily journals. Preferences, decisions, context — it all persists across sessions.
- **pi-channels** — Telegram adapter and chat bridge. I talk to her from my phone, and she responds in the same conversation thread.
- **pi-personal-crm** — Contacts, companies, interactions, relationships. She reminds me about birthdays and follow-ups.
- **pi-calendar** — Events, reminders, recurring schedules.
- **pi-cron** — Scheduled background jobs with configurable active hours.
- **pi-subagent** — She can spawn isolated sub-agents for parallel work.
- **pi-workon** — Point her at any project in `~/Dev` and she loads its full context.

Plus `pi-kysely` for shared SQLite, `pi-webserver` for a local HTTP server, `pi-td` for task management, and a handful more. Every single one is open source on [GitHub](https://github.com/espennilsen/pi/tree/main/extensions).

## The Heartbeat Is the Whole Point

Most AI assistants are reactive. You ask, they answer. Close the window and they stop existing.

Aivena has a heartbeat. Every hour (configurable), she wakes up on her own, reads her `HEARTBEAT.md` checklist, and works through it. Check for overdue tasks. Review upcoming calendar events. Look for contacts I haven't reached out to in a while. Run any pending cron jobs. Report anything important to me via Telegram.

She does this whether I'm at my desk or not. That's the difference between a coding agent and an assistant.

## What the Architecture Looks Like

```
workspace/
├── .pi/
│   ├── settings.json      ← config for all extensions
│   ├── extensions/         ← symlinked building blocks
│   │   ├── pi-memory/
│   │   ├── pi-channels/
│   │   ├── pi-heartbeat/
│   │   └── ... (15 more)
│   ├── skills/             ← specialized prompt files
│   └── memory/
├── MEMORY.md               ← what she remembers
├── HEARTBEAT.md            ← her health checklist
├── memory/                 ← daily journal logs
└── aivena.db               ← SQLite (CRM, calendar)
```

The workspace itself has no application code — just configuration and data. All the logic lives in the extensions, which are reusable across any Pi workspace. You could take `pi-personal-crm` and drop it into a completely different assistant.

## Vibe Coding Without a Spec Is Just Hoping

Here's the thing people get wrong about vibe coding: they think it means firing off short, open-ended prompts and letting the agent figure it out. "Build me a CRM." "Add memory." "Make it work with Telegram." That's not vibe coding. That's abdicating decisions.

When you leave the spec to the AI, you get the AI's opinions baked into your product. Its assumptions about data models, its default UX patterns, its idea of what "done" looks like. Sometimes that's fine. Usually it's not — and you don't notice until you're three features deep and the foundation is wrong.

Every major piece of Aivena started with a spec. Not a formal document — a clear description of what the extension should do, how it should store data, what the tool interfaces should look like, and what the edge cases are. For the CRM extension, that meant specifying the schema (contacts, companies, interactions, relationships), the query patterns I'd actually use, how birthday reminders should work, and how it should handle duplicates.

The spec doesn't have to be written alone, either. I co-authored most of mine with an LLM. Describe what you want at a high level, let the model ask clarifying questions, challenge its suggestions, and iterate until the spec is tight. That conversation _is_ the design phase. By the time you hand it to the coding agent, the important decisions are already made.

This is what made the vibe coding work at scale. Not the prompting — the planning.

## Why Vibe Coding Works for This

With the specs in place, the actual building went fast. AI extensions follow a consistent pattern: register tools, handle events, read/write data. Once the agent understands Pi's extension API, it can crank out new extensions quickly. The structure is predictable. The interfaces are clean. The feedback loop is tight — I can test each extension immediately by talking to the assistant.

This is the sweet spot for vibe coding: projects where the building blocks are well-defined, the iteration cycle is quick, and you've done the thinking upfront. You're not fighting the agent on architecture — you're collaborating on product.

## You Can Build Your Own

Aivena isn't a product. She's a pattern. The [docs on aivena.dev](https://aivena.dev/docs) walk you through the full setup in about 10 minutes:

1. Create a workspace directory
2. Clone the extensions repo
3. Symlink the ones you want
4. Add your API keys to `settings.json`
5. Write an `AGENTS.md` that gives your assistant a name and personality
6. Run `pi`

Start with `pi-memory` and `pi-heartbeat`, add more extensions as you need them, and suddenly you have a personal assistant that knows your name and checks in on you every morning.

## What's Next

I've only been running Aivena for a few days, but she already manages my contacts, reminds me about follow-ups, tracks my projects, and sends me a morning summary on Telegram. The extensions keep getting better — and the nice thing about vibe coding is that improving them is just another conversation.

If you're interested, check out the site at [aivena.dev](https://aivena.dev), browse the [extensions on GitHub](https://github.com/espennilsen/pi/tree/main/extensions), or just start with the [docs](https://aivena.dev/docs). Everything is open source.

The future of personal AI isn't a subscription to someone else's assistant. It's building your own — by talking to one.
