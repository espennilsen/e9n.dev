---
layout: post.njk
title: "Three AIs Walk Into a Codebase"
subtitle: "How I Use a Coding Agent, a Review Bot, and a Personal Assistant for Human-in-the-Loop Development"
excerpt: "I build features by talking to one AI, get them reviewed by a second AI, and coordinate everything through a third. The human in the loop isn't writing code. He's making decisions."
date: 2026-03-07
category: "AI"
tags:
  - Agentic AI
  - AI
  - Software Development
  - Tools
readingTime: "9 min read"
featured: true
---

PR #1 on [Pilot](https://github.com/espennilsen/pilot) was a big feature: AI-assisted git conflict resolution. I described what I wanted to a coding agent. It built the entire thing, opened the PR, and pushed. Within minutes, my code review bot picked up the webhook, spun up a subagent in an isolated git worktree, and posted a structured review with inline comments. Two blockers, three warnings, and a handful of suggestions.

I read the review. One blocker was real. The other was a false positive. I told the coding agent to fix the legitimate issue and push. The review bot ran again, scoped only to the new commits. No new blockers. Approved. I merged.

Total time from spec to merged feature: minutes. Lines of code I wrote by hand: zero. Lines of code I reviewed: all of them.

That's the workflow I've been running for three months now. Three AI systems working together, each doing what it's good at, with me making the decisions that matter. Here's how it works.

<!--excerpt-->

## The Stack

Three tools, three roles:

[**Pi**](https://github.com/mariozechner/pi-coding-agent) is a terminal-first coding agent. I describe what I want, it writes the code, creates branches, and pushes to GitHub. It's the builder. I use it through [Pilot](https://github.com/espennilsen/pilot), a desktop app I'm building that wraps Pi's SDK in a GUI with diff review, git integration, and project management.

**pi-code-review** is a self-hosted PR review bot I built (also using Pi). It listens for GitHub webhooks, checks out each PR into an isolated git worktree, and runs a review subagent that posts structured feedback directly on the PR. Inline comments, severity classifications, the works. It runs on my own infrastructure, so my code never leaves my network.

[**Aivena**](https://aivena.dev) is my personal AI assistant. She has long-term memory, a CRM, a calendar, and a Telegram bridge. She keeps track of what I'm working on across projects, reminds me about follow-ups, and provides context that the other two tools don't have. When I context-switch between Pilot, pi-code-review, and my blog, she remembers where I left off.

None of these tools know about each other. They don't share state or communicate directly. I'm the integration layer. And that's the point.

## How a Feature Ships

Let me walk through a real example. PR #9 on Pilot: interactive rebase UI.

### Step 1: Write the spec

I spend 15 to 20 minutes describing what I want. Not in code. In plain language with enough specificity that the agent doesn't have to guess. What the UI should look like. What operations it should support (reorder, squash, edit, drop). How it integrates with the existing git service. What the IPC contract looks like between the main process and the renderer.

I usually co-author the spec with the AI. I describe the feature at a high level, the model asks clarifying questions, I answer them, and we converge on something tight. This is the same process I described in [The Spec Is the Product](/blog/the-spec-is-the-product/). It hasn't changed because it keeps working.

### Step 2: The agent builds it

I hand the spec to Pi and let it work. It reads the project's AGENTS.md (which documents the full architecture, IPC patterns, and conventions), creates a feature branch, and starts implementing. I watch the diffs come in. Pilot's sandboxed tools let me review every file change before it touches disk, so nothing lands without my eyes on it.

The agent handles the tedious parts: wiring up IPC channels, registering handlers, building React components, writing the Zustand store. The parts that are mechanical. I intervene when it makes architectural decisions I disagree with or when the implementation drifts from the spec.

When it's done, it commits to the feature branch and pushes. I open the PR on GitHub.

### Step 3: The review bot catches what I missed

Here's where it gets interesting. Within a minute of the PR being opened, pi-code-review picks up the webhook. It clones the repo into a PR-specific worktree (so it can review multiple PRs in parallel without branch conflicts), fetches the diff, and spins up a review subagent.

The review subagent reads the diff, cross-references it against the project's documentation, and produces structured findings. Each finding has an exact file path, line number, severity level, and a concrete fix direction. The bot posts these as inline comments on the PR, right where the code lives.

The severity classification matters. The bot uses three levels:

- 🔴 **BLOCKER** means "do not merge until this is fixed." Confirmed bugs, verified security vulnerabilities, data loss risks.
- 🟡 **WARNING** means "shippable, but fix this soon." Important issues that don't break anything right now.
- ⚪ **SUGGESTION** means "optional improvement." Nice-to-haves for the backlog.

Only blockers trigger another coding pass. Warnings and suggestions go into the review summary for my awareness, but they don't hold up the PR. This prevents the review loop from running forever, which is what happens when every finding has equal weight.

### Step 4: I make the call

This is the human-in-the-loop part. I read every review comment. Some are spot-on. Some are false positives. Some are technically correct but not worth fixing right now. I decide.

For legitimate blockers, I go back to Pi and say "fix the issue on line 47 of rebase-editor.ts." The agent pushes a fix to the same branch. The review bot runs again, but this time it only looks at the new commits. It doesn't re-review the entire PR. It doesn't re-raise resolved issues. It checks whether the fix actually addressed the problem and whether the new code introduced anything new.

For PR #9, the review bot found a real issue with how I was handling stale rebase state during interactive rebase. I addressed it, pushed a fix to the same branch, and the bot ran again. Clean pass. Merged.

### Step 5: Aivena keeps the context

When I'm done with Pilot for the day and switch to working on pi-code-review itself, or writing a blog post, or doing my actual job, Aivena remembers what I was working on. Tomorrow after my day job, when I open Telegram, she'll have a summary of what's pending. Which PRs are open. What I said I'd do next. What follow-ups I owe people.

She doesn't write code or review PRs. She holds the big picture so I don't have to keep it all in my head.

## Why Three Tools Instead of One

The obvious question: why not use a single AI that does everything?

Because specialization works. Each tool has a focused job with clear boundaries:

**Pi is optimized for building.** It has full access to the filesystem, can run commands, edit files, and push to git. It's powerful and needs to be. But that power means it should never be the one evaluating its own work. Asking the builder to review its own code is like asking a contractor to inspect their own plumbing.

**pi-code-review is optimized for criticism.** It runs in a sandboxed worktree with read-only access to the code and write access only to PR comments. It can't modify files, can't merge PRs, can't run arbitrary commands. Its entire job is to find problems. The system prompt explicitly tells it that approval is a valid output. Finding issues is not inherently better than approving. This prevents the review bot from inventing problems to justify its existence.

**Aivena is optimized for continuity.** She doesn't touch code. She holds memory, tracks tasks, and manages context across sessions and projects. She's the connective tissue between everything else.

The separation of concerns isn't just architectural cleanliness. It's a safety model. The thing that writes code should not be the thing that approves it. The thing that approves it should not be able to modify it. And something needs to remember what happened across all of it.

## The Human in the Loop Isn't Writing Code

I want to be explicit about what my role is in this workflow. I'm not writing code. I'm not debugging. I'm not configuring build tools or fighting with TypeScript.

I'm doing three things:

**Defining what to build.** The spec is the most important artifact I produce. If the spec is wrong, everything downstream is wrong. No amount of AI capability fixes a bad spec.

**Reviewing the work.** Not line-by-line code review in the traditional sense. I read the diffs to make sure the implementation matches my intent. I read the bot's review to catch things I missed. I make judgment calls about what's worth fixing now versus later.

**Making decisions the AIs can't make.** Should we use a single record with an RRULE or generate individual event instances? Should we handle this edge case or document it as a known limitation? Should we fix this review finding or push back with WONTFIX? These are product decisions, not engineering decisions. They require context about what I'm building and why.

The pattern is the same one I described in [Your Job Just Leveled Up](/blog/your-job-just-leveled-up/). The implementation isn't the bottleneck anymore. The thinking is. The spec. The review. The decisions.

## What Goes Wrong

This workflow isn't magic. Things fail regularly.

**The agent builds the wrong thing.** When my spec is vague, the agent fills in the gaps with its own assumptions. The result is usually functional but wrong in the ways that matter to my specific use case. The fix is always the same: better spec.

**The review bot flags false positives.** It's trained to be thorough, and sometimes that means flagging patterns that look dangerous but are actually safe. Dynamic SQL with parameterized values. InnerHTML with escaping functions. Auth middleware that's registered 200 lines from the route handler. I've tuned the system prompt to reduce these, but they still happen. The review bot's prompt includes an explicit list of common false positives to avoid, and it gets longer over time.

**Context doesn't transfer between tools.** Pi doesn't know what the review bot said. The review bot doesn't know what spec I gave Pi. Aivena doesn't know the technical details of either. I'm the one connecting the dots, and sometimes I drop one. A review finding gets lost. A spec decision doesn't make it into the AGENTS.md. A follow-up slips through.

**The review loop can cycle.** The bot finds an issue, Pi fixes it, the fix introduces a new issue, the bot catches that. Three rounds is the hard limit I've set in the review bot's system prompt. On round three, the only valid outputs are APPROVED or BLOCKED. This forces convergence.

## The Setup

If you want to try something similar, here's the minimum:

**For the coding agent,** [Pi](https://github.com/mariozechner/pi-coding-agent) is open source and free. Install it, point it at a project, and start describing what you want. Write an AGENTS.md that documents your project's architecture and conventions. The agent reads it and follows it.

**For the review bot,** pi-code-review is something I built for my own use and plan to open source once it's stable. It needs a server to run on (I use a VPS), a GitHub webhook, and API keys. The setup is more involved, but the payoff is automatic reviews on every PR. If you want something off-the-shelf, SaaS options like [CodeRabbit](https://coderabbit.ai), [Ellipsis](https://www.ellipsis.dev), or [Qodo](https://www.qodo.ai) offer similar automated PR reviews without the self-hosting overhead. If all of that is too heavy, you can get 80% of the value by just asking Pi to review your diffs before you push.

**For the personal assistant,** [Aivena](https://aivena.dev) is the full version, but you can start with just the [pi-memory](https://github.com/espennilsen/pi/tree/main/extensions/pi-memory) extension for persistent context across sessions. Add more extensions as you need them.

The key insight isn't the specific tools. It's the separation. Builder, reviewer, and memory should be different systems with different permissions and different incentives. Whether you use these tools or others, that pattern works.

## Ten PRs In

I've shipped ten PRs on Pilot using this workflow. AI-assisted conflict resolution. Desktop automation with Docker. Memory tools. Interactive rebase. Each one followed the same pattern: spec, build, review, fix, merge.

The quality is better than what I'd produce alone, not because the AI writes better code than I would, but because the review step catches things I'd miss if I were both the author and the reviewer. Having a second set of eyes, even artificial ones, breaks the tunnel vision that comes from building something yourself.

The speed is dramatically faster. Features that would take me days of manual coding ship in hours. Not because the code is simpler. Because the mechanical parts are handled by tools that are faster than me at typing, and the review cycle catches issues before they compound.

And the workflow is sustainable. I'm not burning out from context-switching between writing code, reviewing my own code, and remembering where I left off. Each tool handles one of those jobs. I handle the decisions.

That's the human in the loop. Not writing code. Not reviewing syntax. Making the calls that matter.

---

*[Pi](https://github.com/mariozechner/pi-coding-agent) is open source. [Aivena](https://aivena.dev) is available at [aivena.dev](https://aivena.dev). pi-code-review will be open source once it's stable. The [Pilot](https://github.com/espennilsen/pilot) project that ties them together is also open source. The workflow works because the tools are separated, not because they're integrated.*
