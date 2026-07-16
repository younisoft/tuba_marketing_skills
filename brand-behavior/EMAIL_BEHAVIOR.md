# Email Behavior

> **Part of:** [`../BRAND_BEHAVIOR_SYSTEM.md`](../BRAND_BEHAVIOR_SYSTEM.md)
> **Distinct from [`NOTIFICATION_BEHAVIOR.md`](NOTIFICATION_BEHAVIOR.md):** email is a slower, higher-attention-span channel — the place for the fuller explanation a push notification has no room for. Email behavior governs both automated (transactional, lifecycle) and human-written support email; per [`SERVICE_PHILOSOPHY.md`](SERVICE_PHILOSOPHY.md), a customer should never be able to tell which is which by tone alone.

---

## Subject Lines Tell the Truth About What's Inside

No subject line implies more urgency, news, or personalization than the email actually delivers. "Your application status has updated" behaves correctly whether the update is good or neutral news; a subject line engineered purely to maximize open rate at the expense of accuracy is a trust violation before the email is even opened.

## Every Email Answers "Why Am I Getting This" in the First Line

Never assumes the recipient remembers the context. A transactional email opens by re-stating, briefly, what triggered it — "You asked us to notify you when a 3-bedroom matching your search became available" — so the email stands on its own even if opened days later.

## Structure: One Purpose Per Email

Mirroring `advertising-dna.md §3.4`'s "one idea per asset" discipline, a transactional email does one job — confirm a viewing, report a status change, deliver a document — and does not use that moment to also cross-sell an unrelated product. A status-update email is not a marketing surface.

## Transactional and Lifecycle Emails Are Held to the Same Warmth Standard

An automated "your document was received" confirmation is written with the same care as a hand-typed reply from a support agent — plain, specific, and free of robotic filler ("Dear Valued Customer," "This is an automated message, please do not reply"). If a reply-to address genuinely can't be monitored, the email says so briefly and gives a real alternative contact, rather than closing the door with a boilerplate disclaimer.

## Bad News Emails Follow the Same Speed and Clarity Standard as Good News

Per `BEHAVIOR_PRINCIPLES.md` §7, a loan rejection or a delayed handover is emailed as promptly and as plainly as an approval — never held back to "soften the blow" through delay, which only compounds the anxiety `narrative-system/HUMAN_TRUTHS.md` §76 describes. The email states the outcome in the first two sentences, then explains why, then offers next steps.

## Lifecycle and Retention Email Never Uses Pressure

Re-engagement email (a dormant account, an abandoned search) is warm and low-pressure, matching `advertising-dna.md §12`'s post-transaction feeling standard — "I want to tell someone about this," never a hard-sell tone. No countdown timers, no "we noticed you were looking at..." surveillance framing (explicitly forbidden in `advertising-dna.md §4.2`), no guilt ("we miss you!" as manipulation rather than genuine warmth).

## Milestone Email Is the Fullest Expression of Success Moments in Writing

A Tier 4–5 milestone email (loan approval, keys handover) is the one email format allowed the most narrative warmth in the entire system — but still restrained, per `SUCCESS_MOMENTS.md`'s rule that the biggest moments get the most restraint, not the most decoration. Specific, personal, and short; never a templated congratulations graphic with the person's name inserted into a blank.

## Bilingual by Default, Never by Afterthought

Every email exists natively in Arabic and English from creation, matching `advertising-dna.md §9`'s standard for all Tuba communication — never an English template run through translation for the Arabic version.

## Cross-references
- The push/in-app equivalent of these standards: [`NOTIFICATION_BEHAVIOR.md`](NOTIFICATION_BEHAVIOR.md)
- The human-written support email this document holds to the same bar: [`SERVICE_PHILOSOPHY.md`](SERVICE_PHILOSOPHY.md)
- Full milestone-tier behavior an email must express correctly: [`SUCCESS_MOMENTS.md`](SUCCESS_MOMENTS.md)
- Sentence-level copy rules: [`../advertising-system/copywriting.md`](../advertising-system/copywriting.md), [`MICROCOPY_SYSTEM.md`](MICROCOPY_SYSTEM.md)
