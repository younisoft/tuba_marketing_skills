import { Section, Eyebrow } from '../components/Section'
import { Reveal } from '../components/Reveal'
import { useLanguage } from '../i18n/LanguageContext'
import * as contentEn from '../data/content'
import * as contentAr from '../data/content.ar'

const COPY = {
  en: {
    eyebrow: 'The Difference',
    title: 'Not imitation. A shared discipline.',
    intro: 'Communication philosophy only — never a claim of equal scale or quality, only of the same instinct: one idea, defended for years, never diluted.',
  },
  ar: {
    eyebrow: 'الفرق',
    title: 'مو تقليد. انضباط مشترك.',
    intro: 'فلسفة تواصل فقط — أبداً ادعاء تساوي بالحجم أو الجودة، بس نفس الغريزة: فكرة واحدة، تُحمى لسنوات، أبداً ما تُخفَّف.',
  },
}

export function Section12TheDifference() {
  const { lang } = useLanguage()
  const c = lang === 'ar' ? contentAr : contentEn
  const t = COPY[lang]

  return (
    <Section id="the-difference" index="12" title="The Difference" tone="canvas">
      <Reveal>
        <Eyebrow>{t.eyebrow}</Eyebrow>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-6 max-w-3xl text-balance font-display text-3xl font-bold text-purple md:text-5xl rtl:font-arabic">
          {t.title}
        </h2>
      </Reveal>
      <Reveal delay={0.15}>
        <p className="mt-6 max-w-2xl text-balance text-lg text-muted rtl:font-arabic">{t.intro}</p>
      </Reveal>

      <div className="relative mt-20">
        <div className="absolute top-2 hidden h-[calc(100%-16px)] w-px bg-border md:block ltr:left-[27px] rtl:right-[27px]" />
        <div className="flex flex-col gap-6">
          {c.legendaryPlatforms.map((p, i) => (
            <Reveal key={p.brand} delay={0.06 * i}>
              <div className="flex flex-col gap-4 md:flex-row md:items-center">
                <div className="flex items-center gap-4 md:w-56 md:flex-shrink-0">
                  <span
                    className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                      p.featured ? 'bg-coral text-white' : 'bg-purple-8 text-purple'
                    }`}
                  >
                    {p.brand.slice(0, 2)}
                  </span>
                  <p className="font-display text-lg font-bold text-ink rtl:font-arabic">{p.brand}</p>
                </div>
                <div
                  className={`flex-1 rounded-card p-6 ${
                    p.featured ? 'bg-purple text-white shadow-lg2' : 'border border-border bg-surface'
                  }`}
                >
                  <p className={`font-display text-xl font-bold rtl:font-arabic ${p.featured ? 'text-coral' : 'text-purple'}`}>{p.line}</p>
                  <p className={`mt-2 text-sm rtl:font-arabic ${p.featured ? 'text-white/75' : 'text-muted'}`}>{p.note}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
