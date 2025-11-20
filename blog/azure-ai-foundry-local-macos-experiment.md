---
layout: post.njk
title: "Experiment Log: Deploying Azure AI Foundry Local on macOS & Testing Azure Arc Integration"
excerpt: "A personal account of deploying Azure AI Foundry Local on macOS, tying it to Azure Arc, and putting its core AI features to the test. Rather than a polished tutorial, I'm sharing the steps I took—warts and all—so those following along can see not only what works, but also what's annoying, confusing, or worthy of scrutiny."
date: 2025-11-26
category: "Technology"
tags:
  - Azure
  - AI
  - macOS
  - Experiments
  - Arc
readingTime: "8 min read"
featured: false
draft: true
---

# Experiment Log: Deploying Azure AI Foundry Local on macOS & Testing Azure Arc Integration

This is a personal account of deploying Azure AI Foundry Local on macOS (my device: MacBook Pro M2 Max, 64 GB RAM), tying it to Azure Arc, and putting its core AI features to the test. Rather than a polished tutorial, I'm sharing the steps I took—warts and all—so those following along can see not only what works, but also what's annoying, confusing, or worthy of scrutiny.

## Why Even Try This?

I'll be honest: I'm skeptical of "hybrid AI" hype, especially when it promises seamless management between edge devices and the Azure cloud. The appeal of running big models privately on my own hardware is real, but I have plenty of questions about compatibility, manageability, and if Arc truly delivers convenience (or just more dashboards).

So, here's what I actually did...

## My Setup

- **Device:** MacBook Pro M2 Max, 64 GB RAM (mostly overkill, but it's my daily machine)
- **OS:** Latest macOS
- **Tools:** Already have Homebrew, Azure CLI, and a graveyard of developer toolkits from previous AI experiments

## Step 1: Installing Foundry Local

I started with the Homebrew commands:

```bash
brew tap microsoft/foundrylocal
brew install foundrylocal
```

It installed quickly, but I spent 5 minutes realizing I misread the output. The CLI is fast, but documentation for Apple Silicon/Metal acceleration was vague. "Hardware acceleration supported" is nice, but how do I know it's actually enabled? (Pro tip: run `foundry system info` and look for Metal or ONNX.)

## Step 2: Running Local Models

Listing models worked fine:

```bash
foundry model ls
```

Fetching models was... surprisingly straightforward. The actual test model spun up on the first try (`foundry model run phi-3-vision-large`). I've had lab setups where dependencies spiral out of control, but this one was clean—for now.

When I sent a test prompt via curl, it was weird to get an instant response. Honestly, I kept checking Activity Monitor to confirm something was actually running locally (yes, it was).

**Anecdote:** At one point, I made the rookie mistake of running two models at once. System handled it, but fans spun up and latency shot way up. Lesson: concurrency works, but monitor your resources!

## Step 3: Azure Arc Integration (The Real Story)

Now, here's where it got complicated, and if you're running macOS, you'll want to pay attention.

The official Azure Arc Connected Machine agent **does not support macOS natively**. All the documentation and installer scripts are built for Windows and Linux only. So, when you see blog posts or Microsoft docs suggesting a simple onboarding command for "your machine," they really mean "your Windows or Linux machine"—not Mac.

### How Did I Do It?

What worked for me, and might be an option for other Mac users, was one of two methods:

1. **Running a Linux VM locally** (I used UTM, but Parallels or VMware Fusion work fine) and installing the Arc agent inside that virtual machine. From there, I managed my Foundry Local deployment either directly inside the VM or via container/file bridge to my macOS host.

2. **Using an Azure Arc resource bridge VM/service**, which acts as a proxy, exposing select services or endpoints on your Mac to Azure as if they were Arc resources. This is a bit awkward and hacky, but it did let me manage and monitor workload health and run remote portal actions, even if my actual device was macOS.

When my "Mac" showed up in the Azure portal, it was actually Azure interacting with a Linux VM or bridge, masquerading as my endpoint. If you want to replicate this, set expectations accordingly: it's not seamless, and there's some technical debt in the process.

**Note:** I plan to write a dedicated post soon, detailing the process and all the gory troubleshooting steps for bridging an actual Mac to Azure Arc, including scripts, config files, and common pitfalls.

## Step 4: Testing & Benchmarking

Here's where skepticism set in:

- **Latency:** For small models, response times are great. For anything substantial, performance drops quickly (especially concurrent requests).

- **Resource Usage:** Foundry Local uses RAM and Apple GPU as expected, but there's ambiguity around full optimization. Activity Monitor gave more insight than any provided metrics.

- **Arc Management:** Policy and update features are "there," but felt experimental on macOS. I triggered remote model updates—worked once, failed once.

**Anecdote:** At one point, Arc portal showed my device as "offline," even though I was actively running inference. Turned out to be a blip in agent heartbeat. I fixed it by simply restarting the local agent (classic troubleshooting move).

## Final Thoughts

This experiment was both illuminating and frustrating. Foundry Local absolutely works on Mac, and running AI locally is fast and private. But Arc integration feels beta-ish for macOS—plenty of potential, more polish needed. I can see enterprise teams loving this in full-scale Windows/Linux deployments, but Mac is more for adventurous devs (with a willingness to Google through glitches).

**My advice:** Don't trust the "seamless" claims. If you like to tinker and troubleshoot, it's worth a go. If you want zero friction, stick to standard environments, or wait for a few more release cycles.

If you try this, share your war stories, especially integration fails. It helps others dodge pitfalls and improves the docs for all of us.

**Stay tuned:** I'll post a full, step-by-step guide on building your own Arc resource bridge or Linux VM workaround for Mac-to-Azure-Arc in the coming weeks!
