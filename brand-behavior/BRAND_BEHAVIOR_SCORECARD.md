# Brand Behavior Scorecard

> **Part of:** [`../BRAND_BEHAVIOR_SYSTEM.md`](../BRAND_BEHAVIOR_SYSTEM.md)
> **Purpose:** the mandate is explicit — if a behavior can't be tested, the framework is incomplete. `evaluation/quality-thresholds.md` already established the unified PASS / REVISE / REJECT logic for creative output; this document extends the same discipline to behavior — features, emails, notifications, UX flows, and AI responses — so "did this actually behave like Tuba" has one consistent, checkable answer across every team that ships something a customer experiences.

---

## 1. The Five Dimensions

Every reviewable unit — a feature, an email, a notification, a UX flow, an AI response — is scored 1–10 against the same five dimensions, each drawn directly from a foundation document in this folder:

| Dimension | Question | Source |
|---|---|---|
| **Clarity** | Did this reduce confusion, or just explain around it? | [`EXPERIENCE_PRINCIPLES.md`](EXPERIENCE_PRINCIPLES.md) §1 |
| **Warmth** | Would a real person feel cared for, not processed? | [`SERVICE_PHILOSOPHY.md`](SERVICE_PHILOSOPHY.md), [`VOICE_GUIDELINES.md`](VOICE_GUIDELINES.md) |
| **Proof** | Is every claim, badge, or figure operationally true right now? | [`TRUST_BEHAVIOR.md`](TRUST_BEHAVIOR.md) |
| **Specificity** | Could this have been shown to anyone, about anything? | [`BRAND_BEHAVIOR.md`](BRAND_BEHAVIOR.md), [`PERSONALIZATION_SYSTEM.md`](PERSONALIZATION_SYSTEM.md) |
| **Graceful failure** | If this breaks, is there still a dignified, human path forward? | [`ERROR_BEHAVIOR.md`](ERROR_BEHAVIOR.md), [`HUMAN_ASSISTANCE.md`](HUMAN_ASSISTANCE.md) |

## 2. Verdict Logic (inherits `evaluation/quality-thresholds.md §1–2` exactly)

```
PASS:    Average ≥ 8.0  AND  no single dimension below 6
REVISE:  Average 6.0–7.9  OR  one dimension between 4-5
REJECT:  Average below 6.0  OR  any dimension at 3 or below  OR  any hard-boundary violation
```

## 3. The Hard-Boundary Override (automatic REJECT, no exceptions)

Regardless of numeric average:
- Any violation of a [`BEHAVIOR_PRINCIPLES.md`](BEHAVIOR_PRINCIPLES.md) principle
- Manufactured urgency, scarcity, or social proof that isn't real and current (`advertising-dna.md §5`)
- An automated flow with no visible human escape hatch (`HUMAN_ASSISTANCE.md`)
- A "verified" or "licensed" claim that isn't operationally true at test time (`TRUST_BEHAVIOR.md`)
- Personalization that's provably fake — the same output shown to two meaningfully different test profiles

## 4. How Each Surface Is Tested

This is the section the mandate specifically requires — proof the framework covers every surface it claims to.

| Surface | Test method |
|---|---|
| **A feature / UX flow** | Walk it as each of the four core personas (`FIRST_HOME_EXPERIENCE.md`, `INVESTOR_EXPERIENCE.md`, `BROKER_EXPERIENCE.md`, `DEVELOPER_EXPERIENCE.md`); score each pass independently — a flow can pass for one persona and fail for another |
| **An email** | Score against the five dimensions plus `EMAIL_BEHAVIOR.md`'s subject-line-honesty and one-purpose-per-email checks |
| **A notification** | Score against the five dimensions plus `NOTIFICATION_BEHAVIOR.md`'s "worth the interruption" test — a notification that fails that single test is an automatic REVISE regardless of other scores |
| **An AI response** | Score against the five dimensions plus `AI_BEHAVIOR.md`'s four hard boundaries — any hard-boundary breach in an AI response is an automatic REJECT of that response pattern, not just that instance |
| **An empty or error state** | Score against the five dimensions plus the specific "never disappoint / never blame the user" tests in `EMPTY_STATES.md` and `ERROR_BEHAVIOR.md` |
| **Personalization itself** | The adversarial test from `PERSONALIZATION_SYSTEM.md`: run two meaningfully different real user profiles through the identical flow; score how meaningfully the outputs differ, and whether they differ for defensible reasons |

## 5. Incident-Triggered Review

Any support pattern, complaint theme, or user-research finding that reveals a documented behavior wasn't actually happening in production triggers an out-of-cycle review of the relevant document — this is the enforcement mechanism behind `README.md`'s quarterly-plus-incident review cadence, and the practical application of `DECISION_PRINCIPLES.md` §7 (new evidence outranks a past decision, with the reversal logged and explained).

## 6. Verdict Ownership

| Verdict | Who can issue it |
|---|---|
| PASS | Any trained reviewer within the owning function (Product, Support, AI Engineering) |
| REVISE | Any trained reviewer |
| REJECT (numeric) | Any trained reviewer |
| REJECT (hard-boundary) | Any reviewer — mechanical trigger, not a judgment call |
| Exception to any of the above | Brand Owner / Experience lead jointly, mirroring `advertising-system/advertising-playbook.md §6`'s exception-ownership model |

## Best Practices
- Apply the hard-boundary override (§3) before computing any numeric average, exactly as `evaluation/quality-thresholds.md` recommends for creative scoring — it's faster and catches the most serious issues first.
- Score UX flows per-persona, never once for a generic "the user" — a single average across all personas hides exactly the fragmentation this framework exists to catch.

## Common Mistakes
- Treating a high average as license to overlook a hard-boundary violation buried in one part of a flow.
- Scoring an AI response once, at ship time, and never again — `AI_BEHAVIOR.md` governs a system that changes with retraining, so its scorecard needs periodic re-sampling, not a one-time certification.

## Cross-references
- The unified verdict logic this scorecard inherits: [`../evaluation/quality-thresholds.md`](../evaluation/quality-thresholds.md)
- The floor rules whose violation triggers the hard-boundary override: [`BEHAVIOR_PRINCIPLES.md`](BEHAVIOR_PRINCIPLES.md)
- The document every score ultimately answers to: [`../BRAND_BEHAVIOR_SYSTEM.md`](../BRAND_BEHAVIOR_SYSTEM.md)
