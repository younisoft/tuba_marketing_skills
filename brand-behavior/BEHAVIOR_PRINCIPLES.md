# Behavior Principles

> **Part of:** [`../BRAND_BEHAVIOR_SYSTEM.md`](../BRAND_BEHAVIOR_SYSTEM.md)
> **What this is:** the non-negotiable rules every behavior in this folder inherits, the way every document in `advertising-system/` inherits `advertising-dna.md`. Where `BRAND_BEHAVIOR.md` explains *why* behavior matters more than communication, this document sets the actual rules a designer, developer, or AI engineer checks a decision against.

---

## The Ten Principles

### 1. Never require a user to prove they're worth helping
No behavior should make a person justify why they deserve clarity, patience, or a straight answer — not a first-time renter with a modest budget, not a skeptical investor. `advertising-dna.md §4.2` already forbids talking down to anyone; this principle extends it to *access*, not just tone.

### 2. Never simulate certainty Tuba doesn't have
If a price estimate is a model's best guess, it says so. If an AI recommendation is a first pass, it behaves like one — inviting correction, not asserting authority it hasn't earned. Confident-sounding wrongness is a worse trust failure than an honest "here's my best estimate, still learning your preferences" (`narrative-system/HUMAN_TRUTHS.md` §36: *"people forgive a slow answer, they rarely forgive a confident wrong one"*).

### 3. Never make the fastest path also the least honest one
A flow is never allowed to hide a fee, bury a condition, or make "skip this" the path of least resistance when skipping costs the user something they'd want to know about. Speed and honesty are optimized together or not at all.

### 4. Silence is always a valid, respected answer
A user who doesn't respond to a nudge, doesn't finish a form, or goes quiet after a message is never chased with escalating urgency. `AI_BEHAVIOR.md` and `NOTIFICATION_BEHAVIOR.md` both specify exact backoff rules built on this principle — inherited directly from `advertising-dna.md §5`'s ban on manufactured urgency, now applied to retention behavior, not only sales copy.

### 5. Every automated behavior has a human escape hatch
No flow — AI chat, self-serve application, automated valuation — is allowed to be a dead end. There is always a visible, working path to a person, specified fully in [`HUMAN_ASSISTANCE.md`](HUMAN_ASSISTANCE.md).

### 6. Personalization must be provable, not just plausible
A recommendation, a homepage, or a reply that *could* have been generic doesn't count as personalized, even if it happens to be accurate. See [`PERSONALIZATION_SYSTEM.md`](PERSONALIZATION_SYSTEM.md) for the proof standard.

### 7. Bad news is delivered as plainly as good news
A loan rejection, a delayed handover, or an unavailable listing is communicated with the same clarity and speed as an approval — never softened into vagueness, never delayed to avoid an awkward moment. `narrative-system/CONVERSATION_SYSTEM.md`'s "How Tuba Comforts" mode is the tone; this principle is the operational guarantee that the bad news actually arrives on time.

### 8. The brand never outperforms the truth
No streak, badge, countdown, or "X people viewed this" device is shown unless it is real and currently true at render time. Fabricated social proof is a harder violation here than a merely tacky one — it directly contradicts the Trust Pillars' enforcement standard (`advertising-dna.md §8.3`).

### 9. Cultural and religious rhythm is respected structurally, not decoratively
Prayer times, Ramadan, and regional variation shape *when and how* the product behaves (notification timing, availability of human support, seasonal defaults) — never shown as a banner or a "Ramadan Kareem" pop-up standing in for actual behavioral adjustment. Direct product-layer extension of `narrative-system/CULTURAL_TRUTHS.md`'s Religion entry: *"present, structural, and entirely unremarked upon."*

### 10. Every behavior must be able to fail gracefully
Search can return nothing. AI can be uncertain. A payment can fail. A document can be missing. None of these are edge cases carved out of the design — they are first-class behaviors with their own specification (`EMPTY_STATES.md`, `ERROR_BEHAVIOR.md`), because a brand is judged hardest exactly when something has already gone wrong.

## How to Use These Principles

Before shipping any customer-facing behavior, ask: does it violate any of the ten? A single violation is a blocker, not a note for next sprint — these are floor rules, not aspirations, mirroring the hard-boundary standard `evaluation/quality-thresholds.md §3` already applies to creative output, now applied to product and service behavior.

## Cross-references
- Why these rules exist, not just what they are: [`BRAND_BEHAVIOR.md`](BRAND_BEHAVIOR.md)
- What good behavior looks like, not just what's forbidden: [`EXPERIENCE_PRINCIPLES.md`](EXPERIENCE_PRINCIPLES.md)
- How a genuine conflict between two principles gets resolved: [`DECISION_PRINCIPLES.md`](DECISION_PRINCIPLES.md)
- The measurement layer that checks these are actually held: [`BRAND_BEHAVIOR_SCORECARD.md`](BRAND_BEHAVIOR_SCORECARD.md)
