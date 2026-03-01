---
layout: post.njk
title: "Timeline to AGI: What Reasoning Models Tell Us"
excerpt: "OpenAI o3 scores 75% on ARC-AGI, a benchmark designed to resist memorization. Anthropic Claude Opus 4 reasons through complex multi-step problems. Are we on the verge of AGI, or just better at benchmarks? Here is what the recent progress actually means."
date: 2025-10-12
category: AI
tags:
  - AI
readingTime: 10 min read
featured: true
draft: true
---

OpenAI's o3 scores 75% on ARC-AGI, a benchmark designed to resist memorization. Anthropic's Claude Opus 4 reasons through complex multi-step problems. Are we on the verge of AGI, or just better at benchmarks? Here is what the recent progress actually means.

<!--excerpt-->

## Defining the Moving Target

AGI (Artificial General Intelligence) is a slippery term that means different things to different people. To some, AGI is human-level intelligence across all domains: an AI that can do anything a human can do, from writing code to cooking dinner to navigating social situations. To others, AGI is economically transformative AI, systems that can automate most knowledge work even if they do not perfectly replicate human cognition. To a few, AGI is the precursor to superintelligence, the threshold after which recursive self-improvement takes over and we get an intelligence explosion. The lack of consensus makes AGI timelines mostly speculation; we are arguing about when we will reach a finish line we have not agreed on. But recent developments in reasoning-centric models give us some datapoints to work with.

## What Changed with Reasoning Models

For two years, generative AI followed a predictable pattern: more data, bigger models, better hardware. Scale was the answer to everything, until it hit diminishing returns. GPT-4 was a huge leap over GPT-3.5, but the next generation turned out to be more capable without being transformative; the low-hanging fruit from scale was picked. Then OpenAI released o1, a model focused on reasoning rather than raw generation. Instead of predicting the next token, it "thinks" through problems step-by-step before responding, building internal chains of reasoning that are not exposed to the user. The results were striking: o1 outperformed GPT-4 on complex tasks that require multi-step logic like math problems, coding challenges, and scientific reasoning, anything where getting the answer requires more than pattern matching.

Then o3 came out, and the results got even better: 75% on ARC-AGI, a benchmark specifically designed to test reasoning ability rather than memorization, when previous models struggled to break 5%. Anthropic's Claude Opus 4 demonstrated similar capabilities: deep reasoning, logical chain-of-thought, the ability to evaluate different options before committing to an answer. This is qualitatively different from previous generations; it is not just bigger or faster, it is structurally different in how it approaches problems.

## What This Actually Demonstrates

Let me be clear: these models are not AGI, they are not even close. But they demonstrate something important: reasoning ability can be trained, and models can be built that do not just regurgitate patterns from training data. They can actually think through problems in ways that generalize to new situations. That was not obvious a year ago; the prevailing worry was that language models were fundamentally limited to pattern matching, great at tasks that look like the training data but useless at anything novel. Reasoning models disprove that: they handle problems they have never seen before and generalize beyond their training distribution in meaningful ways.

This suggests that the path to AGI is not blocked by a fundamental limitation of the architecture; it is an engineering problem, not a theoretical impossibility. That does not mean AGI is imminent. It means it is not ruled out.

## The Benchmark Problem

Here is the issue with AI benchmarks: we are really good at optimizing for them. Every time a new benchmark gets released, it takes a few years before models saturate it, then everyone declares the benchmark "solved" and moves on to a harder one. This happened with ImageNet for computer vision, it happened with SQuAD for reading comprehension, and it is happening with MMLU and HumanEval for language models. ARC-AGI was supposed to be different: it was explicitly designed to resist optimization and memorization, requiring abstract reasoning rather than pattern matching. You cannot just throw more data at it and expect to win.

And yet, o3 gets 75%. Either the benchmark failed to be as robust as intended, or the model actually has reasoning capabilities that generalize. I lean toward the latter; the ARC-AGI creators seem convinced that o3's performance reflects genuine reasoning, not benchmark hacking, though we have been fooled before. The real test is not benchmark scores. It is whether these models can handle completely novel tasks in the real world, outside the controlled environment of evaluation datasets.

## The Economic AGI Threshold

Forget human-level intelligence. Let me focus on economically transformative AI, because that is what actually matters for society. The threshold is not "can AI do everything humans can do" but rather "can AI automate most knowledge work in a way that is cheaper and more reliable than hiring humans." We are not there yet, but we are closer than most people realize.

**Programming** is already partially automated: Copilot, Cursor, and other AI coding assistants handle boilerplate, simple functions, and code refactoring. They do not replace developers, but they make them dramatically more productive; a 10x developer is not science fiction anymore, it is someone who knows how to use AI tools effectively. **Customer support** is being automated rapidly, with AI-powered chatbots handling tier 1 support at scale. They escalate to humans when needed, but they resolve a significant percentage of inquiries autonomously. That is not full automation, but it is a massive reduction in human labor required. **Content generation** is commoditized; marketing copy, product descriptions, and basic articles are increasingly AI-generated. Humans still do the high-value work, but the low-value content that used to employ thousands of writers is now machine-generated. **Data analysis and reporting** is shifting to AI: systems that pull data, generate insights, create visualizations, and draft reports, not perfect but good enough for routine tasks.

None of these are full automation; they are augmentation, with humans in the loop and AI doing the grunt work. But the trend is clear: the tasks AI can handle are expanding, the quality is improving, and the cost is dropping. At some point, the line shifts from augmentation to replacement, not for every role, but for enough roles that the labor market feels it.

## The Scaling Hypothesis vs. Algorithmic Breakthroughs

There are two competing theories about how we get to AGI. **The scaling hypothesis** says we just need bigger models, more data, more compute: intelligence emerges from scale, and if we keep pushing, we eventually hit human-level capability. This has worked so far; GPT-3 to GPT-4 was mostly about scale, same basic architecture but bigger and trained on more data. But diminishing returns are real: doubling compute does not double performance, and at some point, you hit limits, whether practical limits like energy consumption and cost, or theoretical limits in the architecture.

**The algorithmic breakthrough hypothesis** says we need fundamentally new approaches: better architectures, better training techniques, better ways of structuring reasoning and memory. Reasoning models like o3 and Opus 4 suggest algorithmic breakthroughs matter; these are not just scaled-up versions of previous models but use different training techniques, different inference processes, and different ways of handling reasoning tasks. The truth is probably both: we need scale and breakthroughs. Scaling gets you most of the way, but hitting the final milestones requires new ideas.

## What the Skeptics Get Right

There is a lot of hype around AGI timelines. Sam Altman talks about AGI being "closer than people think," and tech optimists project timelines of 2-5 years. I am skeptical of that for a few reasons.

**Reasoning models are still narrow.** They are better at reasoning than previous models, but they still fail in predictable ways; they struggle with tasks that require long-term planning, ambiguous goals, or navigating messy real-world situations. Benchmarks are clean, but reality is not. **Embodiment matters.** Most AGI definitions include the ability to interact with the physical world, but language models are disembodied: they can talk about cooking dinner, but they cannot cook dinner. Physical AI is still in its infancy; robotics is hard, and general-purpose robots that work reliably in unstructured environments are decades away, not years. **Social and contextual intelligence is underrated.** Humans navigate complex social dynamics, understand subtext, manage relationships, and adapt to cultural norms, but AI is nowhere close. It can fake it in controlled contexts, but it falls apart when situations get ambiguous or emotionally nuanced. **Safety and alignment are unsolved.** Even if we could build AGI tomorrow, we should not deploy it without solving alignment: making sure the AI does what we want, even in edge cases, is an open research problem, and deploying AGI without solving this is reckless.

So while the technical trajectory is impressive, there are real barriers beyond just "make the model bigger."

## My Gut Estimate

If AGI means human-level intelligence across all domains, including embodiment and social reasoning, we are 15-30 years away, maybe longer. If AGI means economically transformative AI that can automate most knowledge work, we are 5-10 years away. That is a wide range, and I have low confidence: too many unknowns. Algorithmic breakthroughs could accelerate things, regulatory constraints could slow them down, and energy costs could create scaling limits we have not hit yet. But the direction is clear: AI is getting better at reasoning, it is handling increasingly complex tasks, and the economic threshold where AI starts displacing labor at scale is coming, even if true AGI is still distant.

## What This Means for Society

The economic AGI threshold is more important than the technical AGI threshold. When AI can automate most knowledge work, labor markets shift, not overnight, but over a decade. Job displacement, wage pressure, increased productivity for some and unemployment for others. We are not ready for this; social safety nets are designed for a world where most people work, education systems train people for jobs that might not exist in 20 years, and economic policy assumes labor scarcity, not labor surplus.

If AI timelines are 5-10 years for economic transformation, we should be planning now: retraining programs, universal basic income pilots, rethinking education to focus on skills AI cannot replicate. We are not doing that; we are treating AI as an innovation story, not a structural economic shift. That is a mistake.

## The Existential Risk Question

Some people worry that AGI leads to existential risk: superintelligence that does not share human values could be catastrophic. I am not going to dismiss that; alignment is hard, we do not have good solutions yet, and once you build AGI, there is no take-backsies. You cannot un-invent it. But I am more worried about the near-term economic disruption than the long-term existential risk. The next decade will be shaped by AI that is good enough to displace labor but not smart enough to solve the problems that creates.

That is a recipe for social instability: job loss without replacement jobs, increased inequality as AI benefits flow to capital rather than labor, and political backlash against technology. We need to get ahead of that with proactive policy, thoughtful regulation, and investment in adaptation, not just innovation.

## Where I Stand

Reasoning models are a big deal: they demonstrate capabilities we were not sure were achievable and move the goalposts for what AI can do. But they are not AGI; they are a step toward AGI, in the same way that GPT-3 was a step toward GPT-4. Meaningful progress, not a finish line. The hype cycle around AGI timelines is annoying; everyone has an incentive to claim it is coming soon. AI companies want investment, researchers want funding, and media wants clicks.

I prefer to focus on what AI can do today and what it will plausibly do in the next 5 years: that is concrete, that is actionable, and that is what businesses and policymakers need to plan for. AGI might come in 5 years, it might come in 50, but economically transformative AI is coming in the next decade. That is the timeline that matters.

Plan accordingly.
