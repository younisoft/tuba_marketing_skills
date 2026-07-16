# Human Assistance

> **Part of:** [`../BRAND_BEHAVIOR_SYSTEM.md`](../BRAND_BEHAVIOR_SYSTEM.md)
> **The rule this document exists to enforce:** `BEHAVIOR_PRINCIPLES.md` §5 states that no automated flow is allowed to be a dead end. This document specifies exactly when a human must be reachable, how fast, and how the handoff carries context — the operational backbone behind `advertising-dna.md §2`'s brand promise, *"you will never have to figure this out alone."*

---

## The Categories That Always Route to a Human

1. **Any dispute or complaint** — never resolved by AI or self-serve flow alone, per `SERVICE_PHILOSOPHY.md`'s complaint-handling standard.
2. **Legal or regulatory questions** — licensing status disputes, contract interpretation, anything touching FAL/REGA compliance specifics beyond a stated fact.
3. **A rejected application the user wants to understand** — an AI or system can deliver the rejection plainly (`BEHAVIOR_PRINCIPLES.md` §7), but a person who wants to ask "why, specifically, and is there anything I can do" reaches a human, not a repeated automated explanation.
4. **Any repeated failure** — if an automated flow fails the same person twice on the same task, it escalates automatically rather than asking them to try a third time.
5. **Explicit request** — a visible, one-tap "talk to someone" option exists on every major flow, never buried behind several menu layers or a chatbot loop that has to be argued with to reach a person.

## Response-Time Standards

| Channel | Standard first response | Notes |
|---|---|---|
| WhatsApp / Chat (business hours) | Under 5 minutes | Matches the channel's inherent expectation of immediacy (`SERVICE_PHILOSOPHY.md`) |
| Phone | Answered directly, minimal hold | If a callback is genuinely necessary, a specific time is given and honored |
| Email / Formal request | Same business day | Even if full resolution takes longer, an acknowledgment with a real timeline arrives same-day |
| Escalated complaint | Immediate acknowledgment, resolution timeline within 24 hours | Per `SERVICE_PHILOSOPHY.md`'s complaint sequence |

## Context Always Travels With the Handoff

Per `EXPERIENCE_PRINCIPLES.md` §8, a person moving from AI chat, a self-serve form, or a previous call to a new human agent never re-explains their situation from scratch. Whatever was already shared — budget, family context, prior conversation history, the specific issue — is visible to the receiving agent before the conversation starts. A "can you tell me again what happened" opener is treated as a process failure, not a normal part of escalation.

## Human Assistance Is Not Reserved for When Things Go Wrong

Access to a person is available proactively, not only as a failure-recovery path — a first-time buyer overwhelmed mid-search, an investor wanting to talk through a decision before committing, a broker onboarding and hitting friction all have the same easy route to a human as someone with a complaint. Treating human help as an escape hatch only for problems would quietly signal that the product considers a human touch a cost to be minimized rather than a genuine part of the experience.

## The Agent Is Never Working Against the System's Own Record

Whatever a human agent tells a customer, the product's own automated systems must reflect consistently afterward — no agent promising an outcome the backend then contradicts. This is a coordination requirement between `SERVICE_PHILOSOPHY.md` and `PRODUCT_PHILOSOPHY.md`, not just a training issue: the systems and the people have to agree, because the customer experiences them as one brand, not two departments.

## What Human Assistance Must Never Do

- Never require a person to prove they've already tried the automated path before being allowed to reach someone.
- Never route a person through more than one transfer without a genuine reason stated.
- Never leave an escalated case without a clear, single owner (`SERVICE_PHILOSOPHY.md`'s internal-escalation standard).

## Cross-references
- The floor rule this document fully specifies: [`BEHAVIOR_PRINCIPLES.md`](BEHAVIOR_PRINCIPLES.md) §5
- The people-side standard human agents are held to once reached: [`SERVICE_PHILOSOPHY.md`](SERVICE_PHILOSOPHY.md)
- Where AI decides it has reached the edge of what it should answer: [`AI_BEHAVIOR.md`](AI_BEHAVIOR.md)
- The decision principle governing automation-versus-human conflicts: [`DECISION_PRINCIPLES.md`](DECISION_PRINCIPLES.md) §3
