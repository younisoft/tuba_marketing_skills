# Notification Behavior

> **Part of:** [`../BRAND_BEHAVIOR_SYSTEM.md`](../BRAND_BEHAVIOR_SYSTEM.md)
> **The risk this document exists to prevent:** a notification is the one channel where a brand can interrupt a person's day uninvited. Every notification either earns that interruption or spends trust the brand can't easily get back. This document governs push and in-app notifications; SMS/WhatsApp inherits the same rules with channel-specific pacing in [`SERVICE_PHILOSOPHY.md`](SERVICE_PHILOSOPHY.md).

---

## The One Test Before Any Notification Ships

**Would the person, if asked directly, say this was worth being interrupted for?** If the honest answer is no — a re-engagement nudge with no new information, a "we miss you" message with nothing behind it — the notification doesn't ship, regardless of what it might do for an engagement metric.

## Notifications Are Earned by New, Real Information

A notification exists only when something has genuinely changed since the person last checked: a price drop on a saved listing, a status update on an application, a new message from a broker, a listing matching a saved search. Nothing is sent purely to bring someone back to the app.

## Frequency and Backoff

Per `BEHAVIOR_PRINCIPLES.md` §4, an unresponded notification is never followed by an escalating sequence of reminders. One clear notification per genuine update; if it goes unopened, the next contact happens only when there's *new* information, not a repeat of the same one with more urgency. No streaks, no "last chance," no artificial re-engagement countdowns.

## Timing Respects Real Life

Notifications are scheduled with awareness of prayer times and reasonable hours by default — nothing routine sent during Maghrib or late at night unless the person has explicitly opted into that timing or the update is genuinely time-sensitive (a same-day viewing confirmation). This is `BEHAVIOR_PRINCIPLES.md` §9's structural cultural respect applied to the literal send-time logic, not just messaging tone.

## Content Is Specific, Not Templated

A notification names the actual thing — "Your saved villa in Al Nakheel dropped SAR 40,000" behaves correctly; "New updates on your saved properties!" does not. If a notification's copy could be sent to every user on the platform unchanged, it hasn't done its job (`BRAND_BEHAVIOR.md`'s "shown to anyone" test, applied at notification scale).

## Severity Matches Delivery Channel

| Update type | Channel | Behavior |
|---|---|---|
| Routine (new match, saved-search update) | In-app / push, low priority | Batched sensibly, never more than a few per day |
| Time-sensitive (viewing reminder, document deadline) | Push, WhatsApp if opted in | Sent promptly, once, clearly actionable |
| Financial / Legal (payment due, application status) | Push + Email, and a call if unresolved past a threshold | Never relies on a single channel alone for something consequential |

## What Notifications Must Never Do

- Never use manufactured urgency or scarcity language (`advertising-dna.md §5`, inherited without exception).
- Never disguise a marketing message as a transactional one (a promotional push styled to look like a status update).
- Never notify about another user's activity in a way that feels like surveillance ("Someone else is viewing this listing right now!") — this is the exact pressure-tactic register `advertising-dna.md §4.2` bans in copy, and it applies identically here.
- Never send a notification whose only purpose is to report that nothing has happened yet ("still processing") unless the person has asked for a status check — silence during a genuine wait is fine as long as the wait itself was set with an honest timeline (`EXPERIENCE_PRINCIPLES.md` §3).

## Cross-references
- The floor rule on respecting silence: [`BEHAVIOR_PRINCIPLES.md`](BEHAVIOR_PRINCIPLES.md) §4, §9
- The email-specific version of these standards: [`EMAIL_BEHAVIOR.md`](EMAIL_BEHAVIOR.md)
- The sentence-level writing rules notifications are held to: [`MICROCOPY_SYSTEM.md`](MICROCOPY_SYSTEM.md)
- The design instinct behind respecting the waiting period: [`EXPERIENCE_PRINCIPLES.md`](EXPERIENCE_PRINCIPLES.md) §3
