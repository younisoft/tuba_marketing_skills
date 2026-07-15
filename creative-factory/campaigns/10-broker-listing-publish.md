# Campaign 10 — Broker Listing Publish

> **Sources retrieved:** [`../../brand-intelligence/broker-personas.md`](../../brand-intelligence/broker-personas.md) §1, §4 · [`../../advertising-system/ai-prompt-library.md`](../../advertising-system/ai-prompt-library.md) §13 (ease-of-listing point) · [`../../advertising-system/prompt-patterns.md`](../../advertising-system/prompt-patterns.md) §3, §7 · [`../motion/motion-treatments.md`](../motion/motion-treatments.md) (Campaign 04 row — governing motion instinct reused, same audience register) · [`../../advertising-system/visual-system.md`](../../advertising-system/visual-system.md) §1–§5
> **Campaign type:** Broker activation — the step *after* [`09-broker-whatsapp-activation.md`](09-broker-whatsapp-activation.md). 09 gets a subscriber to register; this campaign gets a registered broker to publish their first listing. Different objective, same funnel, same audience pool one stage further along.
> **Source asset:** a real product screenshot of the "إضافة عقار جديد" (Add New Property) modal — used directly rather than invented, so the walkthrough below matches the actual product.

---

## Strategic Objective

Move registered brokers from *has an account* to *has a live listing* — the real supply-side unlock, since a broker who registers but never publishes contributes nothing to network liquidity.

## Human Insight

Brokers assume listing on a new platform means re-entering everything by hand — the same paperwork fatigue every FAL/REGA-adjacent process trains them to expect. Tuba's actual mechanism removes exactly that friction: enter the ad license number once, and the system pulls the property data automatically from the Real Estate General Authority (REGA) platform. That's a claim best *shown*, not asserted (`prompt-patterns.md §3`'s trust-language pattern: pair every trust claim with a specific, checkable mechanism) — which is why this campaign's primary asset is a short UI-walkthrough motion piece, not a copy-led post.

## Audience

Brokers who completed registration (Campaign 09) but haven't published a first listing — same core personas: **Independent/Solo Agent** and **New/Junior Agent** (`broker-personas.md §1, §4`), both fluent in "will this actually be simple, or bureaucratic" skepticism.

## Emotional Territory

**Confidence**, earned through demonstrated ease — not asserted through adjectives (`prompt-patterns.md §3`'s core pattern applied to a product-mechanic claim rather than a brand claim).

## Motion Direction

Reuses Campaign 04's governing motion instinct (`motion-treatments.md`): **understated, clarity over craft, a UI walkthrough only, no cinematic dissolve treatment.** This register earns trust through the honesty of showing the real screen, not through visual poetry — a match-cut or Purple-reveal treatment here would misplace craft where clarity is the actual job.

## The Four-Step Flow (as it actually works in-product)

1. **إدخال رقم ترخيص الإعلان ورقم هوية المعلن** — broker enters the ad license number and the advertiser's ID/CR number
2. **جلب بيانات العقار تلقائياً من منصة الهيئة العامة للعقار (REGA)** — the system auto-fetches the property data, no manual re-entry
3. **إضافة وسائط العقار** — broker adds photos/media
4. **النشر مباشرة** — the listing publishes

---

## Motion Design Prompt (ready to run in an AI video tool)

```
You are producing a short product-explainer motion piece for Tuba, a Saudi real estate
platform (tuba.com.sa).

BRAND VISUAL SYSTEM (obey exactly, no substitutions):
- Tuba Purple #2A0C72 — dominant color: backgrounds, primary buttons, headline type,
  outline icons
- Tuba Coral #F95A60 — accent only, used sparingly (≤10% of any frame): the medal/ribbon
  detail on the license icon, one highlight per step, never a full background fill
- Purple 8 #F0ECFB — light section backgrounds / card fills
- Ink #1A0E35 — body text on light backgrounds (never pure black)
- Buttons: pill radius (999px), Coral fill + white text for primary actions, Purple
  outline + Purple text for secondary actions (visual-system.md §5.2)
- Cards/modals: 16-20px corner radius, soft Purple-tinted shadow, white/Surface #FFFFFF fill
- Icons: single-color Purple line icons, Coral used only as a small accent detail within
  an icon (never a full-color icon) — this is the exact license/certificate icon style
  already used in-product (a purple outline document/certificate with a small coral
  ribbon-medal in the lower right) — reuse this icon exactly, do not redesign it
- Arabic type: Almarai Bold for headlines/labels, right-to-left layout throughout
  (this is an Arabic-first product, not a mirrored English layout)
- Motion register: understated, UI-walkthrough pacing — soft fades and gentle slide-ins
  between steps, NEVER a hard graphic wipe, NEVER a cinematic dissolve, NEVER a
  speed-ramp or countdown. Motion exists to make the flow legible, not to perform
  excitement about it. If a transition would still make sense at half speed, it's the
  right transition; if it wouldn't, cut it.

FORMAT: vertical, 1080x1920, 20-22 seconds total, silent-readable (captions/on-screen
text carry the meaning; a quiet, minimal voiceover or soft ambient track is optional,
never music-led or upbeat/"corporate stock" in tone).

STRUCTURE — four beats, one per real product step, ~5 seconds each, soft cross-fade
between beats (0.3-0.4s, never a wipe):

BEAT 1 (0-5s) — "أدخل بيانات الترخيص" (Enter your license details)
Show the real product modal: a white rounded card (18px radius, soft purple shadow) on
a Purple 8 (#F0ECFB) background. Top-right: a small "×" close control. Centered icon:
the purple-outline certificate/license icon with the small coral ribbon-medal detail.
Below it, Ink-colored helper text: "يرجى ادخال بيانات ترخيص الإعلان" (Please enter the
ad license data). A Purple-outline pill button reads: "السجل التجاري/ الهوية الوطنية"
(Commercial Registry / National ID). Below that: a label "نوع الترخيص" (License type)
next to a small Purple-filled pill reading "منشأة" (Establishment). Two input fields
animate in with a gentle upward slide, values typing in naturally (not instant-paste):
"الرقم الموحد" (Unified Number) → 7000000001, then "رقم ترخيص الإعلان" (Ad License
Number) → 7200000001. A full-width Coral-fill pill button at the bottom reads:
"إستمرار" (Continue) — it receives a soft press/scale-down micro-interaction as the
beat ends, cueing the transition.

BEAT 2 (5-10s) — "تُجلب بياناتك تلقائياً" (Your data is fetched automatically)
The license-entry card cross-fades into a simple, calm loading/confirmation state: a
thin Purple progress indicator (no spinner cliché, a clean horizontal fill) moves left
to right (RTL: right to left) beneath the text "جلب بيانات العقار من منصة الهيئة
العامة للعقار" (Fetching property data from the Real Estate General Authority
platform). As it completes, property fields populate themselves one at a time with a
soft fade-in (no dramatic reveal) — location, area, property type — each appearing as
plain Ink-on-white text in a lightly-bordered field (Border #E5DFF5), signaling "already
filled in, nothing left to type."

BEAT 3 (10-15s) — "أضف صور عقارك" (Add your property photos)
A simple media-upload tray slides up from the bottom: a row of rounded (12px) image
placeholder tiles with a centered "+" add icon in Purple. One or two tiles fill with
soft-focus real estate photography (a clean interior, warm-lit) as if just added,
gentle fade-in only. No swipe/drag-and-drop flourish — a plain, calm upload motion.

BEAT 4 (15-20s) — "انشر مباشرة" (Publish directly)
The full-width Coral pill button now reads "نشر" (Publish). A single press
micro-interaction, then a brief, quiet confirmation state: a small Purple checkmark
badge (matching the FAL/verified badge style — pill shape, Purple 8 background, Purple
text, small success-green checkmark accent) fades in beside the text "تم نشر عقارك"
(Your property has been published). No confetti, no celebratory burst animation — the
confirmation is calm, not performative, matching the brand's restrained motion rule.

END CARD (20-22s): Purple #2A0C72 background, white Tuba logo mark (centered, no
distortion/spin), one line of white Almarai Bold type: "٤ خطوات، ونشرت عقارك" (Four
steps, and your property is published). No CTA button rendered inside the video itself
— the CTA lives in the accompanying message text, not baked into the motion asset,
matching the system's one-CTA-per-asset discipline.

DO NOT: use stock "excited real estate agent" footage, add background music with an
upbeat/corporate-stock feel, use a spinning logo, use a hard wipe or glitch transition,
invent UI elements not shown in the real product screen, render any English text (this
product surface is Arabic-first, RTL).
```

## Message Text to Accompany the Motion Clip

Sent as a WhatsApp message to the same registered-broker segment as Campaign 09, register per `copywriting.md §5.13` (conversational, 1:1, 2-3 sentences, one CTA).

> سجّلت وياك، وباقي خطوة توصلك لعملاء حقيقيين: انشر أول عقار لك. تدخل رقم ترخيص الإعلان بس، ونجيب لك بيانات العقار تلقائياً من منصة الهيئة العامة للعقار — ما تحتاج تعبّي شي يدوياً. تضيف الصور، وينشر عقارك مباشرة.

**English (reference only — live send is Arabic-native):**
> You're registered — one step left to reach real clients: publish your first property. Just enter the ad license number, and we'll pull the property data automatically from the Real Estate General Authority platform — nothing to fill in by hand. Add your photos, and your listing goes live.

**CTA button:** **انشر عقارك الآن** (Publish your property now) — Coral fill, single button (this asset correctly carries only one CTA, unlike 09's registration/download pairing, since there's exactly one next action here: publish).

## Success Metrics

- Registered-to-first-listing conversion rate (the campaign's real success measure — registration alone, per Campaign 09, is not the finish line)
- Time from registration to first published listing
- Drop-off point within the 4-step flow (if instrumented) — feeds back into whether the motion asset should emphasize a different beat
- Feed results into [`brand-memory/cta-performance.md`](../../brand-memory/cta-performance.md)

---

## Brand Review

Hard-boundary check: no fabricated data, no urgency framing, single CTA, real product screen used rather than an invented UI. **No violation.**

| Scorecard | Dimension | Score |
|---|---|---|
| **Campaign** | Business Alignment 9 · Audience Fit 9 · Creative Strength 8 · Message 9 · Channel Fit 8 · KPIs 9 | **Avg 8.7 — PASS** |
| **Copy** | Headline 8 · CTA 9 · Readability 9 · Saudi Localization 9 · Clarity 9 | **Avg 8.8 — PASS** |
| **Design/Motion** | Layout 9 · Motion 9 (correctly restrained, matches Campaign 04's register) · Color 9 · Accessibility 7 (captions required — not yet produced) | **Avg 8.5 — PASS** |

**Honest note:** Accessibility scored 7 because the motion prompt above specifies a silent-readable structure but explicit caption-track production isn't finalized here — flagged as a production-stage task, not a concept weakness, same pattern as Campaign 01's honestly-logged accessibility gap.

## Cross-references
- Prior funnel stage (registration): [`09-broker-whatsapp-activation.md`](09-broker-whatsapp-activation.md)
- Motion register this reuses: [`../motion/motion-treatments.md`](../motion/motion-treatments.md), Campaign 04 row
- Prompt engineering technique behind the video prompt: [`../../advertising-system/prompt-patterns.md`](../../advertising-system/prompt-patterns.md) §7, §10
