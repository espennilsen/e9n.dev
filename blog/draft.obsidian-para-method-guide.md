---
layout: post.njk
title: "How to Use Obsidian for Work: A Practical Guide with the PARA Method"
excerpt: "A practical guide to setting up Obsidian as your work knowledge system using the PARA method. No philosophy, just a system that works."
date: 2025-12-10
category: Productivity
tags:
  - Productivity
  - Tools
readingTime: 12 min read
featured: false
draft: true
---

I've tried most note-taking apps. Evernote, Notion, OneNote, Apple Notes, Google Keep. They all worked until they didn't. Either they became slow and bloated, or I couldn't find anything, or the structure I'd built stopped making sense.

Two years ago I switched to Obsidian with the PARA method. It stuck. Here's how I set it up and how I actually use it for work.

## Why Obsidian

Obsidian is a note-taking app that stores everything as plain text files on your computer. That might sound boring, but it solves real problems.

**It's fast.** No loading spinners. No sync delays. Search is instant even with thousands of notes.

**You own your data.** Your notes are just text files in a folder. If Obsidian disappears tomorrow, you still have everything. No export needed.

**It works offline.** No internet required. This matters more than you'd think.

**It's flexible.** You can make it as simple or as complex as you want. I keep mine simple.

The learning curve is real but manageable. You'll be productive within a day. Mastery takes longer, but you don't need mastery to get value.

## What Is the PARA Method

PARA is an organizational system created by Tiago Forte. It stands for Projects, Areas, Resources, and Archive. The idea is that everything in your life fits into one of these four categories.

**Projects** are outcomes you're working toward with a deadline. "Q1 sales proposal for Acme Corp" is a project. "Close the Nordics pipeline" is a project. Projects end.

**Areas** are ongoing responsibilities with no end date. "Sales territory" is an area. "Health" is an area. "Team management" is an area. You maintain these continuously.

**Resources** are topics you're interested in or reference material you might need. "AI tools" is a resource. "Competitor information" is a resource. "Sales methodologies" is a resource.

**Archive** is where finished projects and inactive material go. Out of sight, but searchable if you need it.

The power of PARA is that it mirrors how you actually think about your work and life. When you need to find something, you know which category to look in.

## My Obsidian Folder Structure

Here's my actual folder structure:

```
/0 Inbox
/1 Projects
/2 Areas
/3 Resources
/4 Archive
/Templates
```

The numbers keep folders in order. The Inbox catches everything before I organize it. Templates holds reusable note structures.

Inside each main folder:

```
/1 Projects
    /Acme Corp Q1 Proposal
    /ThinkSystem Campaign Nordics
    /Blog Relaunch
    /x10s Development

/2 Areas
    /Sales Territory
    /Team Management
    /Health and Fitness
    /Learning

/3 Resources
    /AI Tools
    /Sales Methodology
    /Competitors
    /Industry Trends
    /Technical Reference

/4 Archive
    /2024 Completed Projects
    /Old Resources
```

That's it. No complex hierarchies. No tags beyond the basics. Simple enough to maintain, structured enough to find things.

## How I Use It Day to Day

Let me walk through how this actually works in practice.

### Capturing Everything in the Inbox

When something comes up, I don't think about where it goes. I throw it in the Inbox. A quick note from a customer call. An idea for a blog post. A link I want to read later. A task I need to remember.

The Inbox is a dumping ground. No organization required. This removes friction from capturing.

Once or twice a day, I process the Inbox. Each item either becomes a note in the right folder, gets added to an existing note, or gets deleted. The Inbox should be empty by the end of the day. It rarely is, but that's the goal.

### Working in Projects

Most of my active work happens in project folders. Each project gets a main note that serves as a dashboard.

For a sales deal, the project note might look like:

```markdown
# Acme Corp Q1 Proposal

## Status
Proposal submitted, waiting for legal review

## Key Contacts
- Erik Hansen, VP Infrastructure (champion)
- Maria Olsen, CFO (economic buyer)
- Technical team: Jonas, Kristian

## Timeline
- Discovery calls: Complete
- Technical validation: Complete
- Proposal submitted: Dec 5
- Expected decision: Mid-January

## Open Questions
- Confirm budget allocation timing
- Legal review of data processing terms

## Meeting Notes
- [[2024-12-03 Acme Discovery Call]]
- [[2024-11-28 Acme Technical Deep Dive]]

## Related
- [[Acme Corp Account Profile]]
- [[Competitor Analysis - Pure Storage]]
```

The double brackets are Obsidian links. They connect notes together. Clicking them takes you to that note.

Meeting notes live as separate files linked from the project. When the project is done, the whole folder moves to Archive.

### Maintaining Areas

Areas are ongoing, so they work differently. Each area has a main note that I review regularly.

My "Sales Territory" area note includes:
- Current quarter targets and progress
- Account list with status
- Links to active project folders
- Recurring tasks and rhythms

My "Learning" area tracks:
- Skills I'm developing
- Courses in progress
- Books I'm reading
- Links to resource notes on topics I'm studying

Areas don't get "done." I review them weekly to make sure nothing's falling through the cracks.

### Building Resources

Resources are reference material. Things I want to find later.

My "Sales Methodology" resource has notes on MEDDPICC, discovery techniques, negotiation tactics. When I learn something useful, I add it there.

My "AI Tools" resource has notes on different tools I've tried, what they're good for, prompts that work well. It's a personal knowledge base.

My "Competitors" resource has profiles of companies I compete against. Positioning, strengths, weaknesses, common objections.

I don't create resources proactively. They emerge from project work. After writing a competitor analysis for a deal, I'll save a cleaned-up version to Resources. After figuring out a useful AI workflow, I'll document it in Resources.

Resources grow organically from doing real work.

### Weekly Review

Once a week, usually Friday afternoon, I do a review:

1. Process anything left in Inbox
2. Review each active project. What's the next action? Is it stuck?
3. Scan areas. Anything need attention?
4. Move completed projects to Archive
5. Clean up any mess that's accumulated

This takes 20-30 minutes. Without it, the system slowly falls apart. With it, I start each week knowing exactly where everything stands.

## Templates I Use

Obsidian lets you create templates for common note types. Here are mine:

**Meeting Note Template:**
```markdown
# Meeting: {{title}}
Date: {{date}}
Attendees:

## Context


## Discussion


## Decisions


## Action Items
- [ ]

## Follow-Up

```

**Project Template:**
```markdown
# {{title}}

## Outcome


## Status


## Key Dates


## Open Questions


## Notes and Links

```

**Weekly Review Template:**
```markdown
# Week of {{date}}

## What Got Done


## What's Stuck


## Next Week Focus


## Notes

```

Templates remove friction. When I create a new meeting note, the structure is already there. I just fill it in.

## Plugins I Actually Use

Obsidian has hundreds of plugins. Most are unnecessary. Here's what I use:

**Calendar.** Shows notes by date. Useful for finding meeting notes.

**Templater.** More powerful templates with dates and variables.

**Quick Add.** Fast capture to Inbox without thinking about where things go.

**Periodic Notes.** Creates daily and weekly notes automatically.

That's it. Four plugins. I've tried dozens of others and removed them. Complexity is the enemy of actually using the system.

## What Took Me a While to Learn

A few lessons from two years of using this setup:

**Don't over-organize.** My early attempts had too many folders, too many tags, too much structure. It became work to maintain. Simpler is better.

**The Inbox matters.** If capture is hard, you won't capture. Make it effortless to throw things into the Inbox. Organize later.

**Projects end, areas don't.** Getting this distinction right matters. If you treat an area like a project, you'll feel like you're never finishing anything. If you treat a project like an area, it'll drag on forever.

**Review is non-negotiable.** Without regular review, the system becomes a graveyard. Stuff goes in but never gets used. The weekly review is what makes it work.

**Search is your friend.** You don't need perfect organization because search is instant. If you can't remember where something is, search for it. This takes pressure off getting the structure exactly right.

**Let it evolve.** My system today looks different from my system a year ago. That's fine. As your work changes, your system should change too.

## Getting Started

If you want to try this, here's what I'd suggest:

**Day 1:** Install Obsidian. Create the five folders (Inbox, Projects, Areas, Resources, Archive). Start throwing things in the Inbox.

**Week 1:** Process the Inbox daily. Create project folders for what you're actively working on. Don't worry about getting it perfect.

**Month 1:** Do weekly reviews. Notice what's working and what isn't. Adjust the structure based on how you actually use it.

**Ongoing:** Add templates for note types you create often. Install a plugin or two if you feel genuine friction. Move completed projects to Archive. Keep it simple.

You don't need to migrate everything from your old system. Start fresh. Pull things over as you need them. Most of what's in your old notes you'll never look at anyway.

## Using AI to Manage Your Notes

If your workplace allows it, there's an interesting possibility worth exploring: using AI tools to work directly with your Obsidian vault.

Because Obsidian stores everything as plain markdown files in a folder, AI coding tools like Claude Code and Gemini CLI can read, create, and edit your notes directly. This opens up capabilities that aren't available with cloud-based note apps.

**What you could use this for:**

Creating notes from messy input. After a call, dump your rough notes or a transcript into an AI tool and ask it to create a properly formatted meeting note following your template. It can create the file directly in the right project folder.

Summarizing and connecting. Ask the AI to read multiple notes from a project folder and create a summary note, or identify connections you might have missed. "Read everything in the Acme Corp folder and give me a status summary" becomes possible.

Batch operations. Renaming files, moving completed projects to archive, updating templates across multiple notes. Things that would be tedious manually take seconds.

Research synthesis. Point an AI tool at your Resources folder and ask questions across all your reference material. "Based on my competitor notes, what are the common objections against Pure Storage?" pulls from everything you've collected.

Weekly review assistance. Ask the AI to scan your project folders and identify anything that hasn't been updated in two weeks. Surfaces stalled work you might have forgotten about.

**How to set this up:**

Both Claude Code and Gemini CLI can access local files. Point them at your Obsidian vault folder and they can read and write markdown files directly. No special configuration needed beyond giving them folder access.

The key is that your notes are just text files. Any tool that can work with text files can work with your Obsidian vault. This is one of the biggest advantages of local markdown over cloud-based apps where your data is locked away.

**A word of caution:**

Check your company's policy on AI tools before trying this with work notes. Many organizations have restrictions on what data can be processed by AI, especially customer information or confidential business content. Personal vaults are fair game, but work vaults might not be.

Back up your vault before experimenting. AI tools can edit and delete files. Have your vault synced and backed up before letting AI write to it.

Start with read-only operations until you trust your prompts. Asking AI to summarize is safe. Asking AI to "clean up my notes" could go wrong if you're not specific.

For those who can use it, this combination of Obsidian's simplicity and AI's capability is genuinely powerful. Your notes become a knowledge base you can query and manipulate, not just a place where information sits.

## Why This Works for Me

I've stuck with this system because it reduces cognitive load.

When something comes up, I know where to put it. When I need to find something, I know where to look. When I'm planning my week, I can see everything in one place.

It's not perfect. I still lose things occasionally. I still fall behind on reviews sometimes. But it's the most sustainable system I've found for managing the information overload that comes with work.

Obsidian plus PARA won't change your life. But it might make your work a little less chaotic. That's been enough for me.

---

*What system do you use for organizing work notes? I'm always curious how others handle this problem.*
