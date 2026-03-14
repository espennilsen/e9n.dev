---
layout: post.njk
title: "The Agent Infrastructure Race"
subtitle: "Everyone Shipped Agent Plumbing This Week. The Model Wars Are Over."
excerpt: "In one week, NVIDIA open-sourced a 120B agentic model, Stanford released a local-first agent framework, Anthropic renamed their SDK, and Meta delayed their next frontier model. The frontier models are converging. The fight is about everything around them now."
date: 2026-03-14
category: "AI"
tags:
  - AI
  - Agentic AI
  - Infrastructure
  - Software Development
readingTime: "8 min read"
featured: true
---

Four companies shipped agent infrastructure in the same week. Not models. Not benchmarks. Plumbing. The scaffolding that turns a language model into something that actually does work on your behalf.

That's the story. Not any single release — the pattern.

<!--excerpt-->

## What Happened This Week

Here's the shortlist:

**NVIDIA** released [Nemotron 3 Super](https://research.nvidia.com/labs/nemotron/Nemotron-3-Super/), a 120-billion-parameter open-weight model with only 12 billion active parameters per token. It's a [hybrid of three architectures](https://venturebeat.com/technology/nvidias-new-open-weights-nemotron-3-super-combines-three-different): Mamba (state-space model), Transformer attention, and Mixture-of-Experts routing. Specifically designed for multi-agent systems. They also announced NemoClaw, an open-source platform for deploying agents. They released 10 trillion tokens of training data alongside the model.

**Stanford** released [OpenJarvis](https://scalingintelligence.stanford.edu/blogs/openjarvis/), a local-first agent framework from the lab behind FlashAttention. Five composable primitives: Intelligence, Engine, Agents, Tools & Memory, Learning. The "Learning" part is novel. It captures structured trace data on-device and uses it to continuously improve the model without cloud dependencies. It supports both MCP and A2A protocols. [Source on GitHub](https://github.com/open-jarvis/OpenJarvis).

**Anthropic** renamed the Claude Code SDK to the [Claude Agent SDK](https://letsdatascience.com/blog/claude-agent-sdk-tutorial) and launched [Claude Code Review](https://thenewstack.io/anthropic-launches-a-multi-agent-code-review-tool-for-claude-code/), a multi-agent system for PR review.

**Meta** [delayed their next-generation model](https://www.reuters.com/technology/meta-delays-rollout-new-ai-model-nyt-reports-2026-03-12/), codenamed Avocado, from March to May. Even with $135 billion in AI investment, shipping frontier models reliably remains hard.

One week. Four companies. All shipping the same category of thing: infrastructure for agents.

## The Models Have Converged

The latest frontier models (Claude Opus 4.6, GPT-5, Gemini 3.1 Pro) all score within two to three percentage points of each other on most evaluations. The gap between them is noise at this point, not signal. If you're choosing between them based on benchmark scores, you're optimizing the wrong variable.

This wasn't the case a year ago. In early 2025, there were clear tiers. GPT-4o was meaningfully better than Claude 3 Opus on coding tasks. Gemini lagged on complex reasoning. The gaps were big enough to matter for production decisions.

Now they don't. The models are commoditizing. Not in the sense that they're cheap, but in the sense that raw intelligence is no longer the differentiator. Every frontier model is smart enough. The question is what you build around it.

This is the same pattern we've seen in every infrastructure cycle. CPUs commoditized, so the value shifted to operating systems and developer tools. Cloud compute commoditized, so the value shifted to managed services and developer experience. Now model intelligence is commoditizing, and the value is shifting to agent infrastructure. The plumbing that turns a capable model into something that reliably does useful work.

## What "Agent Infrastructure" Actually Means

Strip away the marketing and there are four layers that matter.

The first is tool integration: how the agent interacts with the outside world. Native computer use is one approach: give the model a screen and a mouse. MCP (Model Context Protocol) was supposed to be another: standardized tool definitions that any model can call. But there's growing skepticism about whether MCP is the right abstraction. More agents are just shelling out to CLIs directly. It's less elegant, but CLIs are battle-tested, composable, and already exist for almost everything. The tool integration layer is less settled than it looked six months ago.

Then there's orchestration. A single agent with a single model is useful but limited. Real workflows involve multiple agents with different roles: a builder, a reviewer, a planner, a researcher. The orchestration layer manages who talks to whom, how context flows between agents, and when a human needs to step in. This is where most of the action is right now.

Efficiency is the third layer, and it's more urgent than people realize. Multi-agent systems can generate many times the token volume of single-agent workflows. That's the difference between an agent workflow costing $0.50 and $5.00 per run. Nemotron 3 Super activating only 12B of 120B parameters per token attacks this from the model side. Frontier-quality reasoning at a fraction of the compute.

Finally, local execution. Can agents run without the cloud? Stanford's research behind OpenJarvis suggests [local models can handle 88.7% of single-turn queries](https://www.marktechpost.com/2026/03/12/stanford-researchers-release-openjarvis/) at interactive latencies. Small open-weight models are catching up fast. Efficient models with single-digit billion parameters now rival much larger ones on reasoning benchmarks. If most agent tasks can run locally, the cost structure changes fundamentally. So does the privacy model.

## Why This Matters for Builders

I run a multi-agent development workflow every day. A coding agent builds features. A review bot evaluates the output. A personal assistant maintains context across sessions. Three separate systems, each with clear boundaries.

The infrastructure announcements this week are relevant because they address real friction I hit constantly:

When a review bot runs three rounds on a large PR, the token cost adds up fast. Right now I'm running everything through Claude with no model routing and no local fallback. Efficient MoE architectures like Nemotron 3 Super's (12B active parameters out of 120B) point toward a future where that cost drops significantly. This isn't academic. It determines whether you can afford to run a review bot on every PR or only the important ones.

Every agent call in my setup is a network round trip to Anthropic's API. I'm heavily dependent on Claude for everything: coding, review, coordination. If I could run a local model for quick decisions (lint checks, simple refactors, boilerplate generation) and escalate to Claude only for complex reasoning, the workflow would get faster and cheaper. I'm not there yet, but between local-first frameworks and efficient open-weight models, this architecture is becoming feasible for the first time.

Every time I connect a new tool to my agent setup, I'm also writing custom integration code. MCP was supposed to fix this, but the jury is still out. In practice, a lot of agents are just calling CLIs and parsing the output. It's crude but it works. A2A (Agent-to-Agent protocol) is starting to fix the inter-agent communication side. The less custom plumbing I have to maintain, the more time I spend on the actual product.

And open weights matter for self-hosting. I run my review bot on my own infrastructure because my code shouldn't leave my network. NVIDIA releasing Nemotron 3 Super with [open weights and 10 trillion tokens of training data](https://dataconomy.com/2026/03/12/nvidia-launches-120b-parameter-nemotron-3-super-open-model/) isn't charity. It's a strategic play to make NVIDIA hardware the default for self-hosted agent deployments. But the effect is the same: I get a frontier-quality model I can run on my own terms.

## The Architecture That's Emerging

If you squint at this week's announcements, a reference architecture for agent systems is taking shape:

A frontier model in the cloud handles complex reasoning, planning, and multi-step tasks. Claude Opus 4.6, GPT-5, or Gemini 3.1 Pro. You pick based on pricing, developer experience, and specific capability strengths, not raw intelligence, because they're all roughly equivalent.

An efficient open model on local or edge handles high-frequency, low-complexity tasks. Nemotron 3 Super, Llama, or similar open-weight models. The 88% of queries that don't need frontier intelligence. Keeps costs down and latency low.

An agent framework sits in between, managing orchestration, tool integration, and memory. There's no shortage of options: LangGraph, CrewAI, the Claude Agent SDK, and now local-first entries like OpenJarvis. The framework manages the routing between local and cloud models.

And standard protocols are supposed to tie it together. A2A for agent communication looks promising. MCP for tool access is more uncertain. If agents keep reaching for CLIs instead of MCP servers, the "standard protocol" for tool integration might end up being `stdout`.

This is a hybrid architecture. Not pure cloud, not pure local. The smart routing between them, knowing which tasks need frontier intelligence and which don't, is the value layer that agent frameworks compete on.

## What's Still Missing

The infrastructure is maturing fast, but there are gaps:

How do you know if your agent system is working well? Benchmarks measure individual model capability, not end-to-end agent workflow quality. I can tell you how a model scores on OSWorld, but I can't tell you whether my three-agent development workflow produces better code than a single-agent setup. There's no standard way to measure this. Evaluation is still a mess.

Memory is another gap. Every agent framework has a different approach: vector stores, structured databases, knowledge graphs, local traces. None of them work reliably across sessions and contexts. Some frameworks are experimenting with closing the loop between execution traces and model improvement, but it's early.

The security story isn't great either. When an agent can use your computer, read your filesystem, or talk to other agents via A2A, the attack surface is large. Most agent frameworks treat security as an afterthought. The separation of concerns I use (builder can't review, reviewer can't modify) is a manual solution to a problem that should be solved at the infrastructure level.

And when a multi-agent workflow produces a bad result, good luck tracing the failure back to a specific agent, a specific prompt, or a specific tool call. It's harder than debugging distributed systems. At least distributed systems have structured logging standards. Agent systems mostly have chat logs.

## The Bet

The bet embedded in this week's announcements is clear: the companies that win the next phase of AI aren't the ones with the smartest model. They're the ones with the best infrastructure for turning smart models into reliable agents.

NVIDIA is betting on open hardware-optimized models. Make their GPUs the default for self-hosted agents. Stanford is betting on local-first. Prove that most agent work doesn't need the cloud. Anthropic is betting on developer experience. Make the SDK the easiest path to production agents.

They can't all be right about strategy. But they're all right about the direction. The model is becoming the commodity. The infrastructure is becoming the product.

For practitioners, the implication is straightforward: stop optimizing for which model to use and start optimizing for the system around it. The orchestration, the tool integration, the efficiency, the evaluation. That's where the leverage is now.

The model wars are over. The infrastructure wars just started.

---

*I build with agents daily: a coding agent, a review bot, and a personal assistant, each with clear boundaries and different permissions. The infrastructure announcements this week directly affect how I architect these systems. If you're building agent workflows, the plumbing matters more than the model now.*
