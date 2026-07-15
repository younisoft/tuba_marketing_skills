import { Section, Eyebrow } from '../components/Section'
import { Reveal } from '../components/Reveal'
import { useLanguage } from '../i18n/LanguageContext'

const spacing = [4, 8, 16, 24, 32, 48, 64, 96]
const radii = [
  { name: { en: 'Buttons', ar: 'الأزرار' }, px: 12 },
  { name: { en: 'Cards', ar: 'البطاقات' }, px: 20 },
  { name: { en: 'Badges', ar: 'الشارات' }, px: 999 },
  { name: { en: 'Modals', ar: 'النوافذ المنبثقة' }, px: 24 },
]

const COPY = {
  en: {
    eyebrow: 'The Design Language',
    title: 'Restraint, made systematic.',
    buttonsHeading: 'Buttons',
    primaryCta: 'Primary CTA',
    secondaryCta: 'Secondary CTA',
    tertiaryLink: 'Tertiary Link',
    cardsHeading: 'Cards & Elevation',
    shadowLabels: ['Shadow SM — Rest', 'Shadow MD — Hover', 'Shadow LG — Featured'],
    shadowNote: 'Purple-tinted, never neutral grey',
    badgesHeading: 'Badges & Labels',
    badges: ['FAL Licensed ✓', 'New', 'Featured', 'Off-Plan'],
    spacingHeading: 'Spacing Scale (8px base)',
    radiusHeading: 'Border Radius',
  },
  ar: {
    eyebrow: 'لغة التصميم',
    title: 'الانضباط، بصورة منظّمة.',
    buttonsHeading: 'الأزرار',
    primaryCta: 'زر أساسي',
    secondaryCta: 'زر ثانوي',
    tertiaryLink: 'رابط ثالثي',
    cardsHeading: 'البطاقات والارتفاع',
    shadowLabels: ['ظل صغير — الحالة العادية', 'ظل متوسط — عند المرور', 'ظل كبير — مميّز'],
    shadowNote: 'بلون بنفسجي، أبداً رمادي محايد',
    badgesHeading: 'الشارات والتسميات',
    badges: ['مرخّص من فال ✓', 'جديد', 'مميّز', 'على الخارطة'],
    spacingHeading: 'مقياس التباعد (أساس 8 بكسل)',
    radiusHeading: 'انحناء الحواف',
  },
}

export function Section09DesignLanguage() {
  const { lang } = useLanguage()
  const t = COPY[lang]

  return (
    <Section id="design-language" index="09" title="The Design Language" tone="canvas">
      <Reveal>
        <Eyebrow>{t.eyebrow}</Eyebrow>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-6 max-w-3xl text-balance font-display text-3xl font-bold text-purple md:text-5xl rtl:font-arabic">
          {t.title}
        </h2>
      </Reveal>

      {/* Buttons */}
      <div className="mt-20">
        <Reveal><h3 className="font-display text-sm font-bold uppercase tracking-eyebrow text-muted rtl:font-arabic rtl:normal-case">{t.buttonsHeading}</h3></Reveal>
        <Reveal delay={0.05}>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <button className="rounded-full bg-coral px-8 py-3.5 font-bold text-white shadow-sm2 transition-all duration-300 hover:shadow-md2 hover:brightness-105 rtl:font-arabic">
              {t.primaryCta}
            </button>
            <button className="rounded-full border-2 border-purple px-8 py-3.5 font-bold text-purple transition-colors duration-300 hover:bg-purple-8 rtl:font-arabic">
              {t.secondaryCta}
            </button>
            <button className="px-2 py-3.5 font-bold text-purple underline-offset-4 hover:underline rtl:font-arabic">
              {t.tertiaryLink}
            </button>
          </div>
        </Reveal>
      </div>

      {/* Cards + Shadow */}
      <div className="mt-20">
        <Reveal><h3 className="font-display text-sm font-bold uppercase tracking-eyebrow text-muted rtl:font-arabic rtl:normal-case">{t.cardsHeading}</h3></Reveal>
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {t.shadowLabels.map((label, i) => (
            <Reveal key={label} delay={0.05 * i}>
              <div
                className={`flex h-36 flex-col justify-end rounded-card bg-surface p-5 transition-shadow duration-300 ${
                  i === 0 ? 'shadow-sm2' : i === 1 ? 'shadow-md2' : 'shadow-lg2'
                }`}
              >
                <p className="text-sm font-semibold text-purple rtl:font-arabic">{label}</p>
                <p className="text-xs text-muted rtl:font-arabic">{t.shadowNote}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Badges */}
      <div className="mt-20">
        <Reveal><h3 className="font-display text-sm font-bold uppercase tracking-eyebrow text-muted rtl:font-arabic rtl:normal-case">{t.badgesHeading}</h3></Reveal>
        <Reveal delay={0.05}>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-full bg-purple-8 px-4 py-1.5 text-sm font-semibold text-purple rtl:font-arabic">{t.badges[0]}</span>
            <span className="rounded-full bg-coral-20 px-4 py-1.5 text-sm font-semibold text-coral rtl:font-arabic">{t.badges[1]}</span>
            <span className="rounded-full bg-coral-20 px-4 py-1.5 text-sm font-semibold text-purple rtl:font-arabic">{t.badges[2]}</span>
            <span className="rounded-full bg-purple-8 px-4 py-1.5 text-sm font-semibold text-purple rtl:font-arabic">{t.badges[3]}</span>
          </div>
        </Reveal>
      </div>

      {/* Spacing scale */}
      <div className="mt-20">
        <Reveal><h3 className="font-display text-sm font-bold uppercase tracking-eyebrow text-muted rtl:font-arabic rtl:normal-case">{t.spacingHeading}</h3></Reveal>
        <Reveal delay={0.05}>
          <div className="mt-6 flex flex-wrap items-end gap-3">
            {spacing.map((s) => (
              <div key={s} className="flex flex-col items-center gap-2">
                <div className="rounded bg-coral" style={{ width: Math.max(s, 4), height: Math.max(s, 4) }} />
                <span className="text-xs text-muted">{s}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Radius */}
      <div className="mt-20">
        <Reveal><h3 className="font-display text-sm font-bold uppercase tracking-eyebrow text-muted rtl:font-arabic rtl:normal-case">{t.radiusHeading}</h3></Reveal>
        <Reveal delay={0.05}>
          <div className="mt-6 flex flex-wrap gap-6">
            {radii.map((r) => (
              <div key={r.name.en} className="flex flex-col items-center gap-3">
                <div
                  className="h-20 w-20 bg-purple-20"
                  style={{ borderRadius: r.px > 100 ? '999px' : `${r.px}px` }}
                />
                <span className="text-xs text-muted rtl:font-arabic">{r.name[lang]} · {r.px}px</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
