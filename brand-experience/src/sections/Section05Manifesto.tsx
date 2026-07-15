import { Section, Eyebrow } from '../components/Section'
import { Reveal, RevealStagger, RevealItem } from '../components/Reveal'
import { useLanguage } from '../i18n/LanguageContext'
import * as contentEn from '../data/content'
import * as contentAr from '../data/content.ar'

const COPY = {
  en: {
    eyebrow: 'Brand Manifesto',
    line1: 'A house is a structure that keeps out weather.',
    line2: "A home is the only place a person doesn't have to perform.",
  },
  ar: {
    eyebrow: 'بيان العلامة التجارية',
    line1: 'البيت هيكل يحميك من الطقس.',
    line2: 'الوطن هو المكان الوحيد اللي ما تحتاج فيه تتصنّع.',
  },
}

export function Section05Manifesto() {
  const { lang } = useLanguage()
  const c = lang === 'ar' ? contentAr : contentEn
  const t = COPY[lang]

  return (
    <Section id="manifesto" index="05" title="Brand Manifesto" tone="ink">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <Eyebrow>{t.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-10 text-balance font-display text-3xl font-medium leading-[1.35] text-white/90 md:text-5xl rtl:font-arabic">
            {t.line1}
            <br />
            <span className="text-coral">{t.line2}</span>
          </p>
        </Reveal>
      </div>

      <RevealStagger className="mx-auto mt-24 grid max-w-5xl grid-cols-1 gap-6 md:mt-32 md:grid-cols-3 md:gap-8">
        {c.manifestoPractical.map((p, i) => (
          <RevealItem key={i}>
            <div className="h-full rounded-card border border-white/10 bg-white/[0.04] p-7">
              <span className="font-display text-3xl font-extrabold text-coral">{String(i + 1).padStart(2, '0')}</span>
              <p className="mt-4 text-balance leading-relaxed text-white/75 rtl:font-arabic">{p}</p>
            </div>
          </RevealItem>
        ))}
      </RevealStagger>
    </Section>
  )
}
