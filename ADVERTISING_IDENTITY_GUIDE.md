# Tuba Advertising Identity System

> **The master rulebook.** If you create advertising for Tuba — as a designer, copywriter, marketer, campaign manager, motion designer, or AI system — this document plus its linked files is everything you need. You should never need information outside this system to produce on-brand Tuba creative.
>
> **This document now sits inside a larger architecture.** For the fastest possible orientation — especially if you're an AI assistant — start at [AI_KNOWLEDGE_PLATFORM.md](AI_KNOWLEDGE_PLATFORM.md) instead, which explains how this rulebook relates to the knowledge graph, context packs, task routing, evaluation, and evolution layers built on top of it. For creative or narrative judgment calls specifically, start even earlier, at [NARRATIVE_SYSTEM.md](NARRATIVE_SYSTEM.md) — the world, voice, and story material every execution in this rulebook ultimately serves. This file remains fully valid as the master rulebook for brand/advertising *content*; AI_KNOWLEDGE_PLATFORM.md is the map of the *entire system*; NARRATIVE_SYSTEM.md is the creative DNA above both.

**Platform:** Tuba Real Estate — [tuba.com.sa](https://www.tuba.com.sa)
**Brand colors:** Tuba Purple `#2A0C72` · Tuba Coral `#F95A60`

---

## How this system is organized

```
knowledge-base/          WHY Tuba is what it is — discovery, brand assets, competitors
advertising-system/      HOW to execute — strategy layer (DNA→campaigns) + operating layer (workflows→AI prompts)
brand-intelligence/      WHAT Tuba knows — evergreen psychology, personas, language, and creative libraries
brand-memory/            WHAT Tuba has learned — the living, continuously-updated record of real campaigns and decisions
knowledge-graph/         HOW to navigate it all — entities, relationships, taxonomy, ontology, the AI's homepage
context-packs/           Compressed (≤300-line) domain summaries for fast AI context loading
routing/                 100+ task-to-document mappings and Mermaid decision trees
metadata/                Frontmatter, tagging, naming, and document-lifecycle standards
evaluation/              Scorecards, quality thresholds, review prompts, the review process itself
brand-evolution/         Changelog, decisions, timeline, versioning, and roadmap for the platform itself
research/                Raw research material (competitor intelligence)
references/              Index of original source files (logos, guidelines, live product)
AI_KNOWLEDGE_PLATFORM.md The architecture document — read this FIRST
CLAUDE_SYSTEM_PROMPT.md  The permanent AI behavioral contract — load this every session
```

Read in this order if you're new to the brand:

1. [project-analysis.md](knowledge-base/project-analysis.md) — who Tuba is, its market, audience, and opportunity
2. [current-brand-analysis.md](knowledge-base/current-brand-analysis.md) — what already exists in the official logo/asset library and what's immutable
3. [competitor-analysis.md](knowledge-base/competitor-analysis.md) — the Saudi real estate advertising landscape and where Tuba's white space is
4. [advertising-dna.md](advertising-system/advertising-dna.md) — the strategic center: promise, principles, archetype, voice, personality
5. The strategy documents in `advertising-system/` (§visual, icons, copy, content, social, campaigns, components) — the execution layer, built to express the DNA consistently
6. The operating-system documents in `advertising-system/` (checklists, workflows, briefs, reviews, AI prompts, decision trees) — how work actually gets produced, reviewed, and shipped day to day
7. `brand-intelligence/` — deep psychology, personas, and creative libraries to draw on once you're producing real work, not just following rules
8. `brand-memory/` — check this before starting anything non-trivial; it holds what's actually been tried, what worked, and what didn't
9. [CLAUDE_SYSTEM_PROMPT.md](CLAUDE_SYSTEM_PROMPT.md) — if you are an AI assistant, load this at the start of every Tuba session

---

## The One-Page Summary

**Brand promise:** *"You will never have to figure this out alone."*

**Advertising philosophy:** Tuba does not advertise listings. Tuba advertises relief. Every asset should make the viewer feel less alone in a hard decision — never the biggest, never the loudest, always the most useful and most human.

**Brand archetype:** The Sage (Guide), with Caregiver as secondary — a wise, warm friend who happens to know the Saudi real estate system inside and out.

**Five voice adjectives:** Warm · Clear · Grounded · Guiding · Respectful

**Color system:** Purple `#2A0C72` (60-30% of any layout, authority/structure) + Coral `#F95A60` (≤10%, the one thing to notice) + a Canvas/neutral base — see [visual-system.md §1](advertising-system/visual-system.md#1-color-system) for full tokens.

**Why this matters competitively:** every verified or credibly-reported category leader (Aqar, Bayut, and even the government-adjacent NHC rebrand) sits on the green spectrum, and every one of them leads with either scale claims or procedural trust-badging rather than warmth. Purple/coral plus an emotionally guided voice is Tuba's most efficient, hardest-to-copy differentiator — see [competitor-analysis.md §2](knowledge-base/competitor-analysis.md#2-visual-identity-comparison) and [§11](knowledge-base/competitor-analysis.md#11-what-not-to-copy-explicit-anti-patterns).

---

## Quick-Reference Rules (the ones most often needed)

| Question | Answer | Full detail |
|---|---|---|
| What are the exact brand colors? | Purple `#2A0C72`, Coral `#F95A60` — never introduce a third "brand" hue | [visual-system.md §1](advertising-system/visual-system.md) |
| What fonts do we use? | Almarai (Arabic) + Plus Jakarta Sans (Latin) | [visual-system.md §2](advertising-system/visual-system.md) |
| Can icons be coral? | No — icons are Purple only; Coral is reserved for the mark/CTAs/accents | [iconography.md §1](advertising-system/iconography.md), [current-brand-analysis.md §8](knowledge-base/current-brand-analysis.md) |
| How do I write a headline? | Use a formula from [copywriting.md §3](advertising-system/copywriting.md) — never more than 2 formulas layered, 5-8 words max |
| What CTA do I use? | Exactly one per asset, from [copywriting.md §4](advertising-system/copywriting.md) |
| Where does the FAL/license badge go? | Every commerce-adjacent asset, bottom corner, elegant pill+QR — see [design-components.md §2.1](advertising-system/design-components.md) |
| What's the logo rule I'm most likely to break? | Never place the two-tone color logo on a solid/gradient color background — use white or black only | [current-brand-analysis.md §5](knowledge-base/current-brand-analysis.md) |
| Which social platforms matter most? | Snapchat and TikTok first (evidenced, not assumed), then Instagram; YouTube is the biggest white-space opportunity | [social-media-playbook.md §1](advertising-system/social-media-playbook.md) |
| How do I handle Ramadan offers? | Financing-term incentives, never direct price cuts | [campaign-playbook.md §1.3](advertising-system/campaign-playbook.md) |
| Is Tuba a luxury brand? | No — accessible-premium by default; luxury register only for explicit luxury-segment campaigns | [advertising-dna.md §10](advertising-system/advertising-dna.md) |

---

## Full Document Index

### `knowledge-base/` — Discovery & Foundation
| Document | Contents |
|---|---|
| [project-analysis.md](knowledge-base/project-analysis.md) | Mission, vision, personality, audience/personas, business & marketing goals, brand perception, values, trust signals, USPs, advertising opportunities |
| [current-brand-analysis.md](knowledge-base/current-brand-analysis.md) | Full logo/asset audit — construction logic, color system, versions, backgrounds, incorrect uses, icon construction discipline, what must never change |
| [competitor-analysis.md](knowledge-base/competitor-analysis.md) | Aqar, Bayut, Wasalt, Deal/Daleel, Sakani, REGA, NHC — visual identity, campaigns, social platforms, trust mechanisms, content patterns, explicit anti-patterns |

### `advertising-system/` — Execution
| Document | Contents |
|---|---|
| [advertising-dna.md](advertising-system/advertising-dna.md) | Philosophy, brand promise, principles, emotions, archetype, communication/trust pillars, voice, personality dimensions |
| [visual-system.md](advertising-system/visual-system.md) | Full color tokens, typography, spacing/grid, shadows, components, photography direction, motion principles, layout templates for every format |
| [iconography.md](advertising-system/iconography.md) | Icon style rules, categories, home+place pairing logic, do/don't, gap-filling roadmap |
| [copywriting.md](advertising-system/copywriting.md) | The Guidance Framework, voice/tone, headline & CTA formulas, copy registers by purpose, language-specific style, vocabulary (preferred/forbidden), persuasion techniques |
| [content-system.md](advertising-system/content-system.md) | Content pillars, formats, funnel roles, recurring content property recommendation |
| [social-media-playbook.md](advertising-system/social-media-playbook.md) | Platform-by-platform specs — Instagram, TikTok, Snapchat, LinkedIn, X, Facebook, YouTube, Threads, Pinterest |
| [campaign-playbook.md](advertising-system/campaign-playbook.md) | Seasonal (National Day, Ramadan, Eid, White Friday, etc.) and business-driven (launch, listing, B2B, investment, luxury) campaign systems |
| [design-components.md](advertising-system/design-components.md) | Reusable component specs — cards, badges, stats, CTAs, testimonials, maps, pricing |

### `advertising-system/` — Operating System (Execution Layer)
| Document | Contents |
|---|---|
| [advertising-checklists.md](advertising-system/advertising-checklists.md) | Pre-publish checklists — visual, copy, brand, typography, color, spacing, icon, accessibility, trust, REGA/FAL, CTA, mobile, social, consistency, export, designer & manager sign-off |
| [campaign-workflows.md](advertising-system/campaign-workflows.md) | Mermaid flowcharts for every stage — planning, briefing, research, copy, design, review, approval, publishing, A/B testing, optimization, reporting, retrospective |
| [creative-brief-template.md](advertising-system/creative-brief-template.md) | Reusable full and short-form brief templates + a brief-quality gate |
| [design-review-checklist.md](advertising-system/design-review-checklist.md) | 15-dimension senior-art-director scoring framework (1-10), pass thresholds, common failure patterns |
| [content-review-checklist.md](advertising-system/content-review-checklist.md) | Headline-to-SEO copy review, Saudi Arabic suitability, quick-fail conditions |
| [ai-prompt-library.md](advertising-system/ai-prompt-library.md) | Ready-to-run, brand-injected prompts for every format — social, ads, email, WhatsApp, campaigns |
| [prompt-patterns.md](advertising-system/prompt-patterns.md) | Prompt-engineering technique guide — how to avoid generic AI output, with before/after patterns |
| [asset-library.md](advertising-system/asset-library.md) | Governance spec + status (exists/gap) for every reusable asset category and commissioning priority |
| [visual-decision-tree.md](advertising-system/visual-decision-tree.md) | Mermaid decision trees routing any campaign type to its correct layout/photography/typography/CTA/animation |
| [messaging-framework.md](advertising-system/messaging-framework.md) | Audience × Goal × Emotion × CTA matrix across 10 audience personas |
| [psychological-triggers.md](advertising-system/psychological-triggers.md) | Persuasion frameworks with explicit WHEN/WHEN-NOT guardrails |
| [advertising-playbook.md](advertising-system/advertising-playbook.md) | Master execution playbook — ownership matrix, approval tiers, quality gates, KPI reference, worked example |

### `brand-intelligence/` — Evergreen Strategic Knowledge
| Document | Contents |
|---|---|
| [market-psychology.md](brand-intelligence/market-psychology.md) | How Saudi real estate customers actually think — motivation, trust, fear, risk, bias, generational and digital behavior |
| [saudi-real-estate-language.md](brand-intelligence/saudi-real-estate-language.md) · [market-language.md](brand-intelligence/market-language.md) · [real-estate-terminology.md](brand-intelligence/real-estate-terminology.md) | Three distinct language layers — how customers speak, how the market/press speaks, and the neutral technical glossary underneath both |
| [decision-triggers.md](brand-intelligence/decision-triggers.md) · [emotional-keywords.md](brand-intelligence/emotional-keywords.md) | What actually moves a decision forward, and the categorized emotional vocabulary bank behind copywriting.md |
| [buyer-personas.md](brand-intelligence/buyer-personas.md) · [seller-personas.md](brand-intelligence/seller-personas.md) · [broker-personas.md](brand-intelligence/broker-personas.md) · [developer-personas.md](brand-intelligence/developer-personas.md) · [investor-personas.md](brand-intelligence/investor-personas.md) | Deep, multi-sub-type persona profiles — goals, fears, objections, journey, content/visual preferences |
| [customer-journey.md](brand-intelligence/customer-journey.md) | The six-stage master journey map tying personas, triggers, and content pillars together |
| [headline-library.md](brand-intelligence/headline-library.md) · [cta-library.md](brand-intelligence/cta-library.md) · [content-hooks.md](brand-intelligence/content-hooks.md) | Categorized, reusable formula libraries with the psychology behind each |
| [storytelling-framework.md](brand-intelligence/storytelling-framework.md) · [visual-metaphors.md](brand-intelligence/visual-metaphors.md) | Nine narrative models and twelve symbolic visual metaphors |
| [creative-principles.md](brand-intelligence/creative-principles.md) | The ten durable creative heuristics above any single format rule |
| [campaign-ideas.md](brand-intelligence/campaign-ideas.md) | The combinatorial concept matrix (300+ generatable concepts) plus curated starters |
| [swipe-file.md](brand-intelligence/swipe-file.md) · [creative-inspirations.md](brand-intelligence/creative-inspirations.md) | Pattern extraction — in-category (competitor) and cross-industry (Airbnb, Apple, IKEA, Google, HubSpot) — mechanisms only, never imitation |
| [competitor-differentiation.md](brand-intelligence/competitor-differentiation.md) | The applied, message-by-message differentiation playbook against each named competitor |
| [trust-framework.md](brand-intelligence/trust-framework.md) · [luxury-framework.md](brand-intelligence/luxury-framework.md) | Deep operational models for trust-building and luxury-segment creative |
| [brand-positioning-framework.md](brand-intelligence/brand-positioning-framework.md) | The formal positioning statement, pillars, and positioning map |

### `brand-memory/` — Living, Continuously-Updated Record
| Document | Contents |
|---|---|
| [README.md](brand-memory/README.md) | How Brand Memory works — ownership, update cadence, governance, and how it promotes patterns into Brand Intelligence |
| [campaign-history.md](brand-memory/campaign-history.md) · [winning-campaigns.md](brand-memory/winning-campaigns.md) · [failed-campaigns.md](brand-memory/failed-campaigns.md) | The permanent campaign database, and curated wins/failures with no-blame learning |
| [creative-experiments.md](brand-memory/creative-experiments.md) · [ab-tests.md](brand-memory/ab-tests.md) | Every deliberate creative test, formal and informal |
| [copy-library.md](brand-memory/copy-library.md) · [visual-library.md](brand-memory/visual-library.md) | Archives of actual finished, shipped assets |
| [headline-performance.md](brand-memory/headline-performance.md) · [cta-performance.md](brand-memory/cta-performance.md) | Ranked, evidence-based performance of headline formulas and CTAs |
| [customer-feedback.md](brand-memory/customer-feedback.md) | Recurring real customer language, converted into content opportunities |
| [marketing-insights.md](brand-memory/marketing-insights.md) · [market-observations.md](brand-memory/market-observations.md) · [competitor-watch.md](brand-memory/competitor-watch.md) | Insights from Tuba's own campaigns, external market signals, and living competitor intelligence |
| [monthly-retrospectives.md](brand-memory/monthly-retrospectives.md) · [lessons-learned.md](brand-memory/lessons-learned.md) | Fixed-cadence synthesis and the curated, durable-lesson record |
| [knowledge-log.md](brand-memory/knowledge-log.md) | The memory journal — every major strategic decision, its reasoning, and its outcome |

> **Note on current state:** brand-memory/ is fully scaffolded but not yet populated — no campaigns have run under this system yet. Every file contains a template and an explicitly-labeled illustrative example only. Populating it with real entries as work happens is the single most important way this system stays alive rather than becoming a static artifact — see [brand-memory/README.md §2](brand-memory/README.md).

### `knowledge-graph/`, `context-packs/`, `routing/`, `metadata/`, `evaluation/`, `brand-evolution/` — the AI-Native Retrieval Layer

Full detail on every document in these six folders lives in [AI_KNOWLEDGE_PLATFORM.md](AI_KNOWLEDGE_PLATFORM.md) and [knowledge-graph/INDEX.md](knowledge-graph/INDEX.md) — summarized here so this index stays complete without duplicating that detail:

| Folder | What it holds |
|---|---|
| [knowledge-graph/](knowledge-graph/INDEX.md) | Master index, entity/relationship/taxonomy/ontology models, the natural-language query guide, the unified tag system, and [AI_INDEX.md](knowledge-graph/AI_INDEX.md) — the AI's homepage |
| [context-packs/](context-packs/branding.md) | 11 compressed, ≤300-line domain summaries (branding, advertising, copywriting, social-media, campaigns, performance-marketing, design, video-production, sales, seo, customer-support) |
| [routing/](routing/TASK_ROUTER.md) | 110+ task-to-document mappings, detailed task input/output definitions, and Mermaid routing decision trees |
| [metadata/](metadata/FRONTMATTER_STANDARD.md) | The frontmatter schema, tagging process, file-naming rules, and document lifecycle states every file in this platform should follow |
| [evaluation/](evaluation/evaluation-framework.md) | Five scorecards (brand/copy/design/campaign/prompt), unified PASS/REVISE/REJECT thresholds, reusable AI review prompts, and the full review process |
| [brand-evolution/](brand-evolution/README.md) | Changelog, decision records, historical timeline, versioning scheme, and roadmap for the platform's own evolution |

### `research/` & `references/`
| Document | Contents |
|---|---|
| [research/competitor-research-notes.md](research/competitor-research-notes.md) | Raw, source-cited competitive intelligence |
| [references/source-assets-index.md](references/source-assets-index.md) | Pointer index to every original brand asset file this system was built from |

---

## The Non-Negotiables (from every document, in one place)

1. **Colors:** Purple `#2A0C72` + Coral `#F95A60` only, at a 60/30/10 (Canvas/Purple/Coral) visual-weight ratio — no third brand hue, ever
2. **The mark's construction** (globe + flipped letter + hut) is never redrawn, distorted, recolored, or reinterpreted outside the official files
3. **Icons are Purple-only**; Coral never appears as an icon fill
4. **One CTA per asset**, always
5. **The FAL/license trust badge appears on every commerce-adjacent asset** — non-negotiable, per both brand trust strategy and Saudi regulatory requirement
6. **Arabic is never a translation of English creative** — every campaign is conceived bilingually from brief stage
7. **No fear-based urgency, no unverifiable superlatives, no fabricated social proof, no disparaging competitors**
8. **The customer is always the hero of the copy — Tuba is the guide, never the subject**
9. **Warmth is backed by verifiable substance** — every emotional claim pairs with a real, checkable trust signal
10. **Seasonal campaign timing is fixed to the real cultural calendar** (National Day's official yearly theme, Ramadan's financing-not-discount convention, etc.) — never shifted for internal convenience

---

## Maintaining This System

This system was built from primary sources — the official Tuba brand guideline PDF, the actual logo/icon SVG files, the live tuba.com.sa platform, and dated competitive research (July 2026). As the brand, product, or market evolves:

- **New official brand guidelines supersede** anything in `knowledge-base/current-brand-analysis.md` marked as a gap this system filled (typography, photography, motion, iconography rules) — update that document first, then propagate to `advertising-system/`
- **Re-run competitive research periodically** — competitor-analysis.md is a point-in-time snapshot (July 2026); social platform standings, campaign tactics, and even category color conventions can shift
- **Every new document added to this system should cross-reference back to advertising-dna.md** — if a proposed addition can't be traced to the brand promise, principles, or archetype defined there, it doesn't belong in the system
- **[CLAUDE_SYSTEM_PROMPT.md](CLAUDE_SYSTEM_PROMPT.md) is the distilled, fast-reference version of everything above** — update it whenever a Non-Negotiable, forbidden pattern, or default assumption changes anywhere in the system, so it never drifts out of sync with the full documents it summarizes
- **`brand-intelligence/` is reviewed annually (some documents semi-annually — check each file's header)** — it should change rarely; when it does, the change should usually be *evidence-driven*, promoted up from `brand-memory/` rather than opinion-driven
- **`brand-memory/` is never "done"** — see [brand-memory/README.md](brand-memory/README.md) for the full update-cadence table. A version of this system with an empty or stale `brand-memory/` folder six months from now is a sign the system stopped being used, not a sign nothing happened
