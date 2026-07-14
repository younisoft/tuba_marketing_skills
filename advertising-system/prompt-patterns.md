# Prompt Engineering Patterns — Tuba

> **Part of:** [Tuba Advertising Identity System](../ADVERTISING_IDENTITY_GUIDE.md) — Execution Layer
> **Use:** this document teaches an AI system (or a human prompting one) *how* to produce Tuba-quality output, not just what to produce. [ai-prompt-library.md](ai-prompt-library.md) gives ready-to-run prompts; this document explains the underlying technique so new prompts can be built correctly.

**The core problem this solves:** generic AI-generated advertising copy is instantly recognizable — hedged, adjective-heavy, symmetrical, and could belong to any brand in any category. Every pattern below is a specific technique for avoiding that, matched to a real weakness of default AI output.

---

## 1. Better Headlines

**Generic AI failure mode:** stacking adjectives instead of choosing one sharp image. *"Discover Your Dream Home Today in Beautiful Riyadh!"*

**Pattern:** pick exactly one formula from copywriting.md §3, commit to it fully, and cut every word that doesn't serve that formula.

| Instead of... | Do this |
|---|---|
| "Amazing villas now available in prime locations!" | "Ever imagined the street your kids grow up on?" (Open Dream formula) |
| "The best real estate platform for your needs" | "The secret is a licensed guide." (Quiet Reveal formula) |
| "Buy or rent — we have everything!" | "Ready-built, or watch it rise?" (Binary Choice formula) |

**Technique:** write 5 versions of the same headline using 5 different formulas, then pick the sharpest — never ship the first draft.

---

## 2. Luxury Tone

**Generic AI failure mode:** reaching for the word "luxury" itself, and its synonyms, as a substitute for actually specific detail. *"Experience unparalleled luxury in this exclusive, opulent residence."*

**Pattern:** replace every luxury *adjective* with one luxury *fact* — a specific, unrepeatable, sensory detail that only this property has.

| Instead of... | Do this |
|---|---|
| "A luxurious villa with stunning views" | "Four bedrooms. One view of the Red Sea that doesn't repeat anywhere else in the city." |
| "Exclusive, high-end finishes throughout" | "Marble sourced from the same quarry as [specific reference]. Doors that close without a sound." |

**Technique:** ask "what is true of this property that could not be copy-pasted onto a different listing?" If the sentence would work for any luxury property anywhere, it has failed.

---

## 3. Trust Language

**Generic AI failure mode:** asserting trust instead of demonstrating it. *"We are a trusted and reliable platform you can count on."*

**Pattern:** every trust claim must be paired with a specific, checkable mechanism — never a bare adjective.

| Instead of... | Do this |
|---|---|
| "We're trusted by thousands" | "Every listing carries a FAL license number you can verify yourself." |
| "Your safety is our priority" | "Every agent on Tuba is REGA-verified before their first listing goes live." |

**Technique:** for every sentence containing "trust," "reliable," "safe," or "secure," ask "trust *because of what, specifically*?" and replace the adjective with the answer.

---

## 4. Saudi Localization

**Generic AI failure mode:** producing Arabic that reads as translated from English — correct grammar, wrong rhythm, wrong register, sometimes literally pan-Arab/generic MSA instead of anything a Saudi reader would recognize as locally-voiced.

**Pattern:**
1. **Never translate a finished English draft.** Write the Arabic version from the same brief, independently, in Saudi/Gulf-inflected register (copywriting.md §7.1)
2. **Use direct address (أنت/ك)** as the dominant pronoun — mirrors "the customer is the hero" (advertising-dna.md §3)
3. **Anchor to real Saudi specifics** — actual city/district names, actual cultural moments (National Day's *current year's* official theme, real Ramadan financing conventions — not generic "holiday season" language), actual currency/numeral conventions (Western numerals, SAR)
4. **Test with the "would a Riyadh reader wince" check** — imported phrasing, over-formal bureaucratic Arabic ("يسعدنا إعلامكم"), or literal English idioms translated word-for-word ("امنح نفسك هدية" for "treat yourself") are the most common tells

| Instead of... | Do this |
|---|---|
| "نحن نقدم لكم أفضل الحلول العقارية" (generic corporate MSA, distancing "we") | "دعنا نساعدك في إيجاد بيتك القادم" (direct, warm, partnership register) |
| Literal translation of an English seasonal offer | An offer framed around the actual Saudi seasonal convention (e.g., Ramadan financing-not-discount — campaign-playbook.md §1.3) |

---

## 5. Emotional Messaging

**Generic AI failure mode:** naming an emotion instead of creating it. *"This home will make you feel happy and secure."*

**Pattern:** show the *moment* that produces the feeling; never state the feeling as a label.

| Instead of... | Do this |
|---|---|
| "You'll feel at peace in this home" | "The kind of quiet where you can hear the AC hum from the next room" |
| "This investment will give you confidence" | "Average 3-year appreciation in this district: 14%. The kind of number that lets you sleep at night." |

**Technique:** if a sentence contains "feel," "feeling," or an emotion-word as its main content, rewrite it as a concrete scene or fact that would *cause* that feeling in a reader, then delete the label.

---

## 6. High-Converting CTAs

**Generic AI failure mode:** defaulting to "Contact us today" or "Learn more" — technically a CTA, functionally invisible from overuse across every brand on earth.

**Pattern:** match the CTA to the specific next action available, using the approved list (copywriting.md §4) or a tightly-scoped variant of it — never a generic catch-all.

| Instead of... | Do this |
|---|---|
| "Contact us today!" | "Request your property" / "Talk to a guide" |
| "Click here to learn more" | "Understand the process" |
| "Sign up now" | "Grow with Tuba" (agent context) / "List with confidence" (seller context) |

**Technique:** ask "what does the reader literally do next, in their own words?" and use that as the CTA — not a marketing abstraction of the action.

---

## 7. Visual Concepts

**Generic AI failure mode:** describing visuals in mood-board adjectives with no actionable specificity. *"A modern, sleek, aspirational image that conveys luxury and trust."*

**Pattern:** describe visual concepts using the actual system vocabulary — named colors, named layout templates, named icon categories — so the output is directly buildable, not just evocative.

| Instead of... | Do this |
|---|---|
| "A warm, inviting background" | "Purple→Coral gradient at 135°, per visual-system.md §1.4, with a headline in the sparse zone (avoid the 50% midpoint where contrast is unreliable)" |
| "Icons that feel local and trustworthy" | "Saudi-house icon (iconography.md §3.1) paired with palm/desert icon (§3.6) per the Home+Place pairing logic (§4)" |

**Technique:** never describe a visual concept without naming which system component (visual-system.md §9, design-components.md) it maps to — if it doesn't map to an existing component or a clearly-flagged new one, the concept isn't ready to brief a designer.

---

## 8. Advertising Concepts (full campaign ideas)

**Generic AI failure mode:** producing a concept that is really just a tagline with an audience label attached, with no mechanism for *why* it would work.

**Pattern:** every campaign concept must state, explicitly:
1. Which competitor white space it exploits (competitor-analysis.md §11 — or a newly identified one)
2. Which Guidance Framework stages it uses and how (copywriting.md §1)
3. Which brand emotion it's activating (advertising-dna.md §4)
4. What the single CTA is

A concept missing any of these four is a mood, not a campaign.

---

## 9. The Anti-Generic-AI-Language Checklist

Run every AI-generated draft against this before it goes anywhere near a human reviewer:

- [ ] Contains zero instances of: "unlock," "elevate," "seamless," "revolutionize," "game-changing," "unparalleled," "in today's world," "look no further," "at the end of the day"
- [ ] Contains zero hedge-stacking ("truly exceptional," "genuinely remarkable") — pick one strong word, not two weak ones reinforcing each other
- [ ] No sentence could be swapped into a competitor's ad unchanged (advertising-dna.md §1's core test)
- [ ] At least one concrete, specific, non-generic detail appears (a real number, a real place name, a real sensory image) — abstraction-only copy is a fail
- [ ] Arabic was generated as a first-class independent draft, not a translation pass
- [ ] Every claim of trust/quality/luxury is backed by a specific mechanism or fact, not a bare adjective

---

## 10. Self-Review Instruction for AI Systems

Before presenting any Tuba creative output, run this internal check silently:

1. Does this pass §9's Anti-Generic-AI-Language Checklist?
2. Does the customer read as the hero, and Tuba as the guide? (advertising-dna.md Principle 1)
3. Is there exactly one CTA?
4. If this references a specific property/agent, is there a placeholder or real value for the FAL license?
5. If Arabic was requested, was it written natively, not translated?

If any answer is no, revise before presenting — don't present a draft and ask the human to catch the gap.

## Cross-references
- Ready-to-run prompt templates: [ai-prompt-library.md](ai-prompt-library.md)
- Full copywriting rule source: [copywriting.md](copywriting.md)
- Full visual rule source: [visual-system.md](visual-system.md)
- The permanent behavioral contract for any AI working on Tuba: [CLAUDE_SYSTEM_PROMPT.md](../CLAUDE_SYSTEM_PROMPT.md)
