# Error Behavior

> **Part of:** [`../BRAND_BEHAVIOR_SYSTEM.md`](../BRAND_BEHAVIOR_SYSTEM.md)
> **The founding rule:** never blame the user. Never create frustration. Never create panic. Every error should preserve trust — a brand is judged harder in the sixty seconds after something breaks than in the entire smooth journey before it, because that's the moment a person finds out whether the warmth in the marketing was real.

---

## Never Blame the User

An error message is never phrased as the user's fault, even when it technically is (a malformed input, an expired session). "That doesn't look like a valid phone number — mind trying again?" behaves correctly; "Invalid input" or "You entered this incorrectly" does not. The distinction is not semantic — it changes whether the person feels capable of fixing the problem or feels scolded by software.

## Never Create Frustration

Every error state names, in plain language, what happened and what to do next — never a raw error code, a stack trace, or a vague "Something went wrong" with no path forward. If the system genuinely doesn't know what happened, it says so honestly ("we're not sure what happened there — here's how to reach someone who can help right away") rather than presenting confident-sounding language over an unknown failure, per `BEHAVIOR_PRINCIPLES.md` §2.

## Never Create Panic

This matters most for anything touching money, documents, or legal status — a failed payment, an unresponsive upload, a stalled application. The error state is explicit about what did *not* happen ("your payment was not charged — nothing was lost, just try again or use a different method") before it says anything else, because the first fear in a financial-error moment is always "did I just lose something," and that fear must be resolved in the first sentence.

## Severity-Matched Response

| Error class | Example | Required behavior |
|---|---|---|
| **Cosmetic** | A slow-loading image | Fails silently with a graceful placeholder — never surfaced to the user as an "error" at all |
| **Recoverable** | A form validation issue | Inline, specific, fixable in place — never a full-page interruption for a single-field problem |
| **Blocking** | A failed document upload | Clear explanation, a retry path, and a visible human-help option if retry fails twice |
| **Financial / Legal** | A failed payment, a licensing mismatch | Explicit reassurance of what did *not* happen, immediate human escalation path, and a follow-up confirmation once resolved — never left for the user to re-check on their own |

## Errors Are Explained at the Point of Failure, Never Relocated

A user should never have to leave the screen where something broke to understand what broke — no redirect to a generic support page that loses their context. If human help is needed, the handoff carries the full context forward automatically (`HUMAN_ASSISTANCE.md`), so the person never has to re-explain what already went wrong.

## Errors Are Logged as Product Signal, Not Just Handled as UX

Every error state that appears more than a handful of times in production is treated as a product defect to fix, not a permanent UX pattern to polish indefinitely — a beautifully worded error message for a bug that should simply be fixed is a missed priority, per `PRODUCT_PHILOSOPHY.md`'s friction-removal discipline.

## Tone

Calm and specific — never apologetic to the point of groveling ("We are so, so sorry!!"), and never clinically detached. One clear sentence stating what happened, one clear sentence stating what to do, in that order, every time.

## Cross-references
- The adjacent, but distinct, discipline for a state that isn't broken, just empty: [`EMPTY_STATES.md`](EMPTY_STATES.md)
- The floor rule this document enforces: [`BEHAVIOR_PRINCIPLES.md`](BEHAVIOR_PRINCIPLES.md) §2, §10
- Where an error hands off to a person: [`HUMAN_ASSISTANCE.md`](HUMAN_ASSISTANCE.md)
- The trust standard an error moment is ultimately tested against: [`TRUST_BEHAVIOR.md`](TRUST_BEHAVIOR.md)
