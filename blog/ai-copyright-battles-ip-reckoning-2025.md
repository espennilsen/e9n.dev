---
layout: post.njk
title: "AI Copyright Battles: The IP Reckoning of 2025"
excerpt: "The New York Times is suing OpenAI. Getty Images is suing Stability AI. Artists are suing Midjourney. Courts are starting to rule that training data use matters. The legal landscape around AI and intellectual property is shifting fast, and nobody knows where it will land."
date: 2025-10-19
category: AI
tags:
  - AI
  - Copyright
  - Legal
  - IP Rights
readingTime: 7 min read
featured: false
draft: true
---

# AI Copyright Battles: The IP Reckoning of 2025

The New York Times is suing OpenAI. Getty Images is suing Stability AI. Artists are suing Midjourney. Courts are starting to rule that training data use matters. The legal landscape around AI and intellectual property is shifting fast, and nobody knows where it will land.

<!--excerpt-->

## The Core Question

Did AI companies commit copyright infringement at scale by training models on copyrighted content without permission? Their defense has been consistent: training is transformative use, protected by fair use doctrine. The models do not copy content, they learn patterns, just like a human learns by reading books without paying royalties for every book that influenced their thinking. Rights holders disagree; they argue that AI companies built billion-dollar businesses on the back of copyrighted content without compensation or consent, and that the scale of copying (billions of copyrighted works) cannot be hand-waved away as transformative. Courts are starting to weigh in, and the initial rulings suggest that AI companies cannot just claim fair use and move on.

## What is Actually Happening

The lawsuits are piling up, and they follow predictable patterns.

### Publishers and Media Companies

The New York Times sued OpenAI and Microsoft in December 2023, claiming their models were trained on Times content without permission and can reproduce Times articles verbatim when prompted correctly. Other publishers are following. The Authors Guild filed a class action on behalf of thousands of writers, and News Corp is in negotiations for licensing deals, implying they believe they have leverage. These cases hinge on whether training constitutes copying, and whether the output competes with the original content.

### Visual Artists and Image Rights

Getty Images sued Stability AI in 2023, claiming Stable Diffusion was trained on millions of Getty images, including watermarked ones. Getty is not just claiming copyright infringement; they are claiming trademark infringement because some generated images include mangled Getty watermarks. A class action lawsuit by visual artists against Midjourney, Stability AI, and DeviantArt makes similar claims; the models can generate images "in the style of" specific artists, which artists argue is derivative work that requires licensing. Musicians are starting to file similar suits, the RIAA sent takedown notices to AI music generation companies, and litigation will follow.

### The Fair Use Defense

AI companies are relying on fair use, a legal doctrine that allows limited use of copyrighted material without permission for purposes like criticism, commentary, research, and education. Four factors determine fair use: purpose and character of use (is it transformative?), nature of the copyrighted work (factual vs. creative), amount used (small excerpt vs. entire work), and effect on market (does it substitute for the original?). AI companies argue training is transformative. They are not selling access to the copyrighted works, they are creating new capabilities, and the models do not output the training data but generate novel content. Rights holders counter that the purpose is commercial, the amount used is everything, and the effect on the market is direct substitution; why license stock photos from Getty when Stable Diffusion generates similar images for free? Courts will decide, but early rulings are not going entirely in AI companies' favor.

## Recent Legal Developments

The courts are not buying the blanket fair use argument. In 2024, a judge refused to dismiss the Getty lawsuit, finding that Stability AI's fair use defense was not strong enough to dismiss the case at the pleading stage. The case will go to trial. Another judge ruled that GitHub Copilot's use of code from public repositories could constitute copyright infringement, depending on how the output relates to the training data, and that case is ongoing. The Authors Guild case survived a motion to dismiss, meaning OpenAI will have to defend its training practices in court. None of these are final rulings on the merits, but they signal that courts are taking these claims seriously. Fair use is not an automatic win for AI companies.

## Why This Matters for the Industry

If courts rule that training on copyrighted content without permission is infringement, the entire foundation of AI development shifts.

### Licensing Becomes Mandatory

AI companies would need to license training data, which means negotiations with publishers, image libraries, music labels, and individual creators. Some of this is already happening. OpenAI has signed licensing deals with publishers like Axel Springer and the Associated Press, and Adobe trained Firefly exclusively on licensed stock images and public domain content to avoid infringement claims. But comprehensive licensing at the scale needed for frontier models would be expensive and complex; billions of copyrighted works, millions of rights holders, no standardized licensing framework. It is a nightmare.

### Training Costs Increase Dramatically

If you have to pay for every copyrighted work in your training set, costs explode. Training GPT-4 allegedly cost over $100 million in compute alone. Add licensing costs for billions of documents, images, and videos, and you could double or triple that. That favors incumbents with deep pockets and existing licensing relationships; it hurts startups and open-source projects that rely on freely available web data.

### Open-Source Models Face Existential Threats

Most open-source AI models were trained on datasets like Common Crawl, which scrapes the public web without checking copyright status. If that is ruled infringing, those models become legal liabilities. Companies using open-source models could face secondary liability for using models trained on infringing data, which would chill adoption and innovation. Some open-source projects are already responding; projects like OpenAssistant are trying to build models on permissively licensed or user-contributed data, but the performance gap compared to models trained on the full internet is real.

### Innovation Slows Down

Uncertainty kills innovation. If companies do not know whether their training practices are legal, they will be more conservative: fewer experiments, more risk aversion, slower iteration. That is bad for progress; AI is moving fast because experimentation is cheap and the legal environment has been permissive. Change that, and the pace slows.

## The Creator Perspective

I have talked to artists, writers, and musicians about this, and their frustration is understandable. They spent years developing their craft. Their work is distinctive, valuable, and copyrighted. Then AI companies scraped it off the internet, trained models on it, and built billion-dollar businesses without asking, without compensating. Now those models can generate content "in the style of" the original creators, undercutting their market; why hire an illustrator when Midjourney can make something similar in 30 seconds? From their perspective, this is theft (maybe not in the legal sense, but in the moral sense); their work was used to build tools that compete with them, and they got nothing for it.

The counterargument is that this is how all human creativity works. We learn from what came before, influence is not infringement, and styles cannot be copyrighted. But scale changes things; one artist learning from another is different from a corporation scraping millions of works to build a commercial product.

## What Happens Next

This will take years to resolve. Litigation moves slowly, appeals will drag cases out even longer, and by the time we have definitive rulings, the technology will have evolved. A few possible outcomes:

### Licensing Framework Emerges

Congress or industry groups create a compulsory licensing regime for AI training data, similar to how music licensing works. Rights holders get compensated, AI companies get legal certainty, and everyone moves on. This is the optimistic scenario; it requires legislative action, which is slow and politically fraught, but it is the cleanest solution.

### Courts Split the Difference

Some uses are ruled fair, others are not. Training on factual data is fine, training on creative works requires licensing, generating output that directly competes with original works is infringement, and everything else is case-by-case. This creates legal uncertainty but allows the industry to function; it also creates a cottage industry of copyright lawyers helping AI companies navigate the rules.

### AI Companies Win on Fair Use

Courts rule that training is transformative and does not constitute infringement, the industry continues as-is, and rights holders get nothing. This seems less likely given recent rulings, but it is possible; if it happens, expect legislative pushback. Europe is already moving toward requiring transparency about training data, and the US could follow.

### AI Companies Lose, Chaos Ensues

Courts rule that training on copyrighted content is infringement, with no clear path to licensing. Existing models become legal liabilities, and innovation freezes while the industry figures out what is allowed. This is the worst-case scenario; it is also unlikely because courts and regulators generally try to avoid killing entire industries, but it is possible.

## What Enterprises Should Do

If you are deploying AI in your business, this legal uncertainty is a risk factor. Evaluate your exposure: if you are using AI to generate content that could infringe copyrights, understand the risk; if you are in a regulated industry, check whether your compliance framework accounts for AI-generated IP issues. Prefer licensed models; Adobe Firefly, for example, was trained on licensed content and offers indemnification if you get sued for copyright infringement, and OpenAI and Google are starting to offer similar protections for enterprise customers, which shifts legal risk to the vendor. Review your contracts: if you are building custom models or using open-source models, make sure your vendors are not exposing you to liability; who is responsible if training data is infringing? Monitor the litigation. This is evolving fast, and a ruling that seems minor could have massive implications. Stay informed.

## Where I Stand

I am conflicted. I see the value AI creates. I use these tools every day, they make me more productive, they enable things that were not possible before. But I also see the creator perspective; scraping copyrighted content at scale and calling it fair use feels like a legal loophole, not a principled position. The industry needs a better answer than "move fast and let courts figure it out later". Proactive licensing, transparency about training data, and compensation mechanisms for creators would build a more sustainable foundation.

Right now, we are in a gold rush. Companies are racing to train the biggest models on the most data, legal consequences be damned, and that is not sustainable. The IP reckoning is coming; how the industry responds will shape whether AI continues to move fast or gets mired in legal battles for the next decade. I hope we end up with a licensing framework that compensates creators and enables innovation, but hope is not a strategy, and the current trajectory is toward protracted litigation. Watch this space: it is going to get messy before it gets resolved.
