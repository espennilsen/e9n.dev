---
layout: post.njk
title: "The Spec Is the Product"
excerpt: "I built 18 extensions by talking to a coding agent. The ones with specs shipped clean. The ones without specs shipped twice. Here's the framework I use now."
date: 2026-02-21
category: "AI"
tags:
  - AI
  - Agentic AI
  - Productivity
  - Software Development
readingTime: "7 min read"
featured: true
---

I've built 18 TypeScript extensions over the past few months by describing what I want to a coding agent. No manual coding. Just conversation — explain the feature, review the output, iterate until it works.

Some of those extensions shipped clean on the first session. Others took three or four rewrites before they did what I actually needed. The difference was never the agent. It was whether I'd spent 20 minutes writing a spec before opening my mouth.

<!--excerpt-->

## The Pattern I Kept Seeing

My personal AI assistant, [Aivena](/blog/introducing-aivena-personal-ai-assistant), is composed entirely of extensions — standalone modules that each add a specific capability. A CRM. A calendar. Long-term memory. Telegram integration. Task management. Eighteen in total, all built through conversation with a coding agent.

Early on, I'd start sessions like this:

> "Build me a personal CRM extension."

The agent would get to work immediately. Schema design, tool registration, query functions — it would produce something functional within minutes. And every time, the result would be subtly wrong. Not broken. Just not what I actually needed.

The contact model would be too flat. The interaction logging would miss a field I cared about. The search would work by name but not by company. Birthday reminders would fire but not tell me whose birthday it was. Each issue was small. Collectively, they meant I'd spend the next two sessions reworking something that could have been right the first time.

Then I started writing specs.

## What a Spec Actually Looks Like

Not a formal document. Not a PRD with acceptance criteria and stakeholder sign-offs. Just a clear description of what the thing should do, written before the agent touches any code.

Here's a condensed version of what I wrote before building the CRM extension the second time:

> **pi-personal-crm**
>
> Contacts: first name, last name, company, title, email, phone, LinkedIn URL, notes, tags, created/updated timestamps. Companies are a separate table linked to contacts.
>
> Interactions: log meetings, calls, emails, messages. Each has a date, type, summary, and linked contact. Query by contact, by date range, by type.
>
> Reminders: birthdays and custom dates. Query "who has a birthday this week" and "what follow-ups are overdue."
>
> Search: full-text across name, company, notes, and tags. Return ranked results.
>
> Tools: contact_lookup, log_interaction, search_contacts, upcoming_reminders. Each tool should work as a single function call from the agent.

That took maybe 15 minutes to write. The agent built the entire extension in one session. No rework. The schema was right because I'd specified it. The search worked the way I needed because I'd described the query patterns. The reminders did what I wanted because I'd defined what "overdue" meant before the agent had to guess.

## Why Agents Need Specs More Than Humans Do

When you hand a task to a senior developer, they bring context. They've built CRMs before. They know that contacts and companies should be separate tables. They'll ask questions when something is ambiguous. They'll push back on bad ideas.

A coding agent brings none of that judgment. It brings capability — it can write the code, design the schema, wire up the API. But it fills every ambiguity with its own assumptions, and it never pushes back. If you say "build me a CRM," it will build you a CRM. It just won't be your CRM.

The assumptions aren't random. They're the statistical average of every CRM the model has seen in its training data. You get a generic solution that's competent but wrong in all the ways that matter to your specific use case.

A spec eliminates the ambiguity before the agent encounters it. Instead of making 50 small assumptions, the agent makes zero. Every decision that matters has already been made — by you.

## The Spec Doesn't Have to Be Solo Work

Here's the part most people miss: writing the spec is itself a great use of AI.

My process now starts with a conversation, not a prompt. I describe what I want at a high level. The model asks clarifying questions. I answer them. It proposes a structure. I challenge the parts I disagree with. We go back and forth until the spec is tight.

This conversation is the design phase. It forces me to make decisions I'd otherwise defer — and deferring decisions is exactly what causes rework later.

A typical spec conversation looks like this:

**Me:** I want a calendar extension that stores events and sends reminders via Telegram.

**Model:** What fields does an event need? Just title and datetime, or also location, description, recurrence?

**Me:** Title, datetime, optional end time, optional description. Recurrence is important — weekly and monthly at minimum.

**Model:** How should reminders work? Fixed time before the event? Configurable per event?

**Me:** Default 30 minutes before, configurable per event. Reminders go through the existing pi-channels extension, not directly to Telegram.

**Model:** Should recurring events generate individual instances in the database, or store one record with a recurrence rule?

**Me:** One record with an RRULE. Compute the next occurrence at query time.

Ten minutes of Q&A. Every important design decision made. When I hand this to the coding agent, it's executing a plan, not exploring a problem space. The difference in output quality is night and day.

## What Goes in a Spec

After 18 extensions, I've settled on a template. Not every spec needs all of these, but thinking through each one takes five minutes and saves hours:

**Data model.** What are the entities? What fields do they have? What are the relationships? If there's a database, what do the tables look like?

**Operations.** What can the user (or agent) do? List the actions explicitly. "Create a contact," "log an interaction," "search by company." If it's not in the list, it doesn't get built.

**Query patterns.** How will the data be accessed? This shapes indexes, API design, and tool interfaces. "Show me all interactions with Acme in the last 30 days" implies different things than "show me my most recent interaction."

**Edge cases.** What happens with duplicates? Empty fields? Invalid input? The agent will handle these somehow. Better that you decide how.

**Integration points.** How does this module talk to others? Does the calendar extension need to know about the CRM? Does the reminder system use the notification channel or something else?

**What it doesn't do.** This is underrated. Explicitly stating what's out of scope prevents the agent from gold-plating. "This extension does not handle recurring billing" saves you from getting a billing system you didn't ask for.

## The Extensions That Shipped Clean

The ones with specs:

- **pi-personal-crm** — Contacts, companies, interactions, reminders. Spec defined the schema, query patterns, and tool interfaces. Built in one session.
- **pi-calendar** — Events with recurrence, configurable reminders via pi-channels. Spec defined the RRULE approach and the integration with the notification system. One session.
- **pi-heartbeat** — Periodic wake-up, checklist-driven health checks, autonomous action. Spec defined the checklist format and the action/report loop. One session.

## The Extensions That Didn't

The ones without:

- **The first CRM attempt** — "Build me a CRM." Flat schema, no company table, no interaction types, search by name only. Rebuilt from scratch.
- **The first memory system** — "Add long-term memory." The agent built something that stored facts but couldn't retrieve them usefully. Needed a complete rethink of how memory was structured and queried.
- **The first Telegram integration** — "Connect to Telegram." Worked for basic messages but couldn't handle threads, didn't preserve formatting, and had no concept of message bridging. Took three iterations.

Same agent. Same codebase. Same developer. The only variable was whether I'd spent 15 minutes thinking before talking.

## It's Not About the AI

This principle predates coding agents by decades. "Weeks of coding can save hours of planning" is an old joke because it's true. What's different now is the speed at which you can build the wrong thing.

When writing code by hand, the friction of implementation forces you to think. You can't accidentally build an entire CRM in the wrong direction in 10 minutes because it takes hours to write one. The slowness is a feature — it gives you time to notice mistakes.

With an agent, the implementation friction is gone. You describe something, and it exists 5 minutes later. If the description was wrong, you've got a fully built wrong thing. And the agent will defend its implementation, extending and patching it instead of admitting the foundation is off. You end up iterating on the wrong design instead of starting over with the right one.

The spec is the replacement for that friction. It's the 15 minutes of thinking that the implementation no longer forces you to do. Skip it, and you'll spend an hour fixing what could have been right from the start.

## The Framework

Before starting any session with a coding agent, I ask myself one question:

**Could I explain what "done" looks like in two paragraphs?**

If yes, I write those two paragraphs and hand them to the agent. The session will be fast and clean.

If no, I'm not ready to build yet. I open a conversation — with the model, with a whiteboard, with a notepad — and figure out what I actually want. The spec comes first. The code comes after.

Twenty minutes of planning. Hours of saved rework. Every single time.

---

*All 18 extensions that make up [Aivena](https://aivena.dev) are open source. The specs evolved through conversation, not committee. Sometimes the best design document is a chat log where you argued with a machine until both of you understood what you were building.*
