# Campaign 09 — Broker WhatsApp Activation

> **Sources retrieved:** [`../../brand-intelligence/broker-personas.md`](../../brand-intelligence/broker-personas.md) §1, §4 · [`../../brand-intelligence/cta-library.md`](../../brand-intelligence/cta-library.md) §6, §9 · [`../../advertising-system/copywriting.md`](../../advertising-system/copywriting.md) §5.13 · [`../../advertising-system/visual-system.md`](../../advertising-system/visual-system.md) §5.2 · [`../../advertising-system/design-components.md`](../../advertising-system/design-components.md) §1.2, §4.2 · [`../production/format-specifications.md`](../production/format-specifications.md)
> **Campaign type:** Broker activation via owned channel (WhatsApp subscriber list) — distinct from Campaign 04's cold B2B acquisition (`campaign-playbook.md §2.4`); this is a warm audience that has already opted in, so the Hook/Recognize stages compress in favor of a direct Guide→Decide message, per the WhatsApp register rule (`copywriting.md §5.13`: "most conversational register in the system... because WhatsApp is a 1:1 channel").
> **Not one of the original 8:** this is a live production request, built the same way the 8 demonstration campaigns in this folder were — every decision below traces to an existing document, cited inline.

---

## Strategic Objective

Convert already-subscribed broker contacts (opted into Tuba's WhatsApp list but not yet active platform partners) into registered, app-using agents — closing the gap between *interest* and *activation* rather than generating new interest from a cold audience.

## Audience

Real estate brokers currently on Tuba's WhatsApp subscriber list. Primarily **Independent/Solo Agent** (`broker-personas.md §1` — largest broker sub-type, proof/ROI-sensitive) with secondary relevance to **New/Junior Agent** (`broker-personas.md §4` — highest need for a low-friction onboarding nudge). Not the Boutique/Luxury Broker segment (`broker-personas.md §3`) — that persona is relationship-first and should never receive broadcast-style outreach.

## Emotional Territory

**Confidence**, with quiet pride as undertone (`messaging-framework.md §9`'s Broker/Agent row) — the message should read as a practical nudge from a partner, not a sales push to a stranger.

## Message (compressed Guidance Framework, warm-audience register)

Because this audience already knows Tuba, Hook/Recognize collapse into one line and the message moves straight to Solve/Decide — matching the WhatsApp register rule above.

> **Guide/Solve:** أكمل تسجيلك كوسيط موثّق وابدأ تستقبل طلبات عملاء حقيقيين مطابقة لعروضك — مو صندوق وارد مشترك، طلب مباشر يوصلك.
> **Decide:** سجّل الآن، وحمّل التطبيق عشان تدير طلباتك من جوالك أينما كنت.

**English (reference only — live send is Arabic-native, not translated, per `copywriting.md §7.1`):**
> Complete your registration as a verified broker and start receiving real client requests matched to your listings — not a shared inbox, a direct request that reaches you.
> Register now, and download the app to manage your requests from your phone, wherever you are.

## On the two buttons (deliberate exception, stated directly)

`advertising-dna.md §10` and `cta-library.md`'s Selection Logic rule ("never combine two categories in one asset — one CTA, one category, always") normally cap every asset at one CTA. This brief is a documented exception, not an oversight: WhatsApp Business template messages natively support up to two CTA buttons, and the two actions here are not competing asks — they're sequential steps in the same funnel (register → then manage via app), matching the **Primary/Secondary button hierarchy** already defined in `visual-system.md §5.2` (Coral-fill Primary vs. Purple-outline Secondary) rather than two equal-weight competing CTAs. The same hierarchy pattern is already used elsewhere in the system (e.g., the agent/broker card's Secondary "Contact" CTA, `design-components.md §1.2`), so this isn't a new visual mechanic — only a new context for it.

| Priority | Button label (AR) | Button label (EN) | Style | CTA-library source |
|---|---|---|---|---|
| Primary | **سجّل الآن** | Register now | Coral fill, white text, pill radius (`visual-system.md §5.2`) | New literal-action phrasing — the closest catalogued entry is Broker Acquisition's "Grow with Tuba" (`cta-library.md §9`), but the user-facing button must name the reader's literal next action (`cta-library.md` Best Practices), so this campaign uses the more literal "Register now" and should be logged into `cta-library.md §9` at the next semi-annual review if it performs |
| Secondary | **حمّل التطبيق** | Download the app | Purple outline (1.5–2px), Purple text, transparent fill, same pill radius | `cta-library.md §6` (Downloads) — used verbatim |

## Design Output Spec

Not one of the 13 formats in `../production/format-specifications.md` (that sheet's only WhatsApp entry is Status, "a single message, single image, no dense layout, no buttons"). Specified fresh here:

**Format 14 — WhatsApp Broadcast Message (image header + native CTA buttons)**

| Element | Spec |
|---|---|
| Image (header) | 1080×1080, square — renders cleanly in the chat thread without cropping. Keep this element visual and light: mark + headline only, per the same "one focal point" discipline as every other format. Do **not** bake the body paragraph or the buttons into the image pixels — WhatsApp Business templates render buttons as native interactive UI below the image, not as part of the graphic, and native text stays legible/accessible where drawn-in text on a compressed JPEG does not. |
| Headline (in-image) | ≤8 words, Purple `#2A0C72` background or Canvas `#F7F5FC`, white or Ink `#1A0E35` type, Almarai Bold (Arabic display, `visual-system.md §2.2`) |
| Body text | Delivered as the WhatsApp message's native caption/body text (this is "the text" — see Message section above), not drawn into the image |
| Buttons | Two native CTA buttons attached to the template: Primary (Coral fill) + Secondary (Purple outline), per the table above |
| Fallback (no native buttons available — e.g. posted to WhatsApp Channels/Status instead of sent via Business API template) | Draw both buttons into the image itself as pill-shaped graphic elements per `visual-system.md §5.2`'s exact button spec, stacked or side-by-side in the bottom third, with the registration link as the primary tap target (image itself becomes tappable/links out) |

### Headline options

| # | Arabic (live) | English (reference) |
|---|---|---|
| 1 | طلبات عملاء حقيقيين بانتظار تسجيلك | Real client requests are waiting on your registration |
| 2 | خطوة وحدة بينك وبين عملاء يطابقون عروضك | One step between you and clients matched to your listings |
| 3 | أكمل تسجيلك، شريكك من طوبة بانتظارك | Complete your registration — your partner at Tuba is waiting |

Recommended: **#1** — leads with the concrete outcome (real client requests) rather than the platform, matching `broker-personas.md §1`'s proof-over-brand-messaging preference.

## Success Metrics

- Registration completion rate among the WhatsApp broker subscriber segment (primary KPI — this is an activation campaign, not an awareness one)
- App download attribution from this specific broadcast (secondary button click-through)
- Time from click to completed registration
- Feed results into [`brand-memory/cta-performance.md`](../../brand-memory/cta-performance.md) — this is the first real-world use of the "Register now" phrasing, so it's a direct test case for promoting it into `cta-library.md §9` at the next review

---

## Brand Review

Hard-boundary check: no fabricated data, no false urgency, FAL/verified badge correctly absent (non-listing, non-commerce asset, same documented exception as Campaign 01). **One stated exception, not a violation:** two CTA buttons, justified above via the existing Primary/Secondary hierarchy rather than two competing asks.

| Scorecard | Dimension | Score |
|---|---|---|
| **Campaign** | Business Alignment 9 · Audience Fit 9 · Creative Strength 7 · Offer N/A · Message 9 · Channel Fit 9 · KPIs 9 · Expected Impact 7 | **Avg 8.4 — PASS** |
| **Copy** | Headline 8 · CTA 8 · Persuasion 8 · Readability 9 · Grammar 9 · Saudi Localization 9 · Brand Tone 9 · Clarity 9 | **Avg 8.6 — PASS** |
| **Design** | Layout 8 · Typography 9 · Contrast 9 · Color 9 · Balance 8 | **Avg 8.6 — PASS** |

**Honest note:** Creative Strength and Expected Impact are scored lower (7) because this is a functional activation nudge, not a brand-emotion asset — that's the correct register for a warm, transactional WhatsApp send, not a weakness to fix with more creative flourish (`copywriting.md §5.13`'s conversational-register rule argues directly against over-producing this format).

## Cross-references
- Broker acquisition (cold, LinkedIn-led): [`04-real-estate-brokers.md`](04-real-estate-brokers.md)
- CTA library: [`../../brand-intelligence/cta-library.md`](../../brand-intelligence/cta-library.md)
- Button component spec: [`../../advertising-system/visual-system.md`](../../advertising-system/visual-system.md) §5.2
