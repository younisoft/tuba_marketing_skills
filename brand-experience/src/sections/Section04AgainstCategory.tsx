import { Section, Eyebrow } from '../components/Section'
import { Reveal } from '../components/Reveal'
import { useLanguage } from '../i18n/LanguageContext'
import * as contentEn from '../data/content'
import * as contentAr from '../data/content.ar'

const COPY = {
  en: {
    eyebrow: 'Against Category Thinking',
    title: 'Same industry. Opposite instinct.',
    colLeft: 'Traditional Real Estate Thinking',
    colRight: 'Tuba Thinking',
  },
  ar: {
    eyebrow: 'ضد تفكير الفئة',
    title: 'نفس الصناعة. غريزة معاكسة.',
    colLeft: 'تفكير العقارات التقليدي',
    colRight: 'تفكير طوبة',
  },
}

export function Section04AgainstCategory() {
  const { lang } = useLanguage()
  const c = lang === 'ar' ? contentAr : contentEn
  const t = COPY[lang]

  return (
    <Section id="against-category" index="04" title="Against Category Thinking" tone="white">
      <Reveal>
        <Eyebrow>{t.eyebrow}</Eyebrow>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-6 max-w-3xl text-balance font-display text-3xl font-bold text-purple md:text-5xl rtl:font-arabic">
          {t.title}
        </h2>
      </Reveal>

      <div className="mt-16 hidden grid-cols-12 gap-6 border-b border-border pb-4 md:grid">
        <p className="col-span-5 text-[12px] font-bold uppercase tracking-eyebrow text-muted rtl:font-arabic rtl:normal-case">
          {t.colLeft}
        </p>
        <div className="col-span-2" />
        <p className="col-span-5 text-[12px] font-bold uppercase tracking-eyebrow text-coral rtl:font-arabic rtl:normal-case">
          {t.colRight}
        </p>
      </div>

      <div className="mt-4 flex flex-col divide-y divide-border">
        {c.categoryVsTuba.map((row, i) => (
          <Reveal key={row.category} delay={0.05 * i}>
            <div className="grid grid-cols-1 items-center gap-4 py-8 md:grid-cols-12 md:gap-6">
              <p className="text-balance text-lg text-muted line-through decoration-muted/40 md:col-span-5 rtl:font-arabic">
                {row.category}
              </p>
              <div className="hidden items-center justify-center md:col-span-2 md:flex">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-coral-8 text-coral">
                  <span className="rtl:hidden">→</span>
                  <span className="hidden rtl:inline">←</span>
                </span>
              </div>
              <p className="text-balance font-display text-xl font-semibold text-purple md:col-span-5 rtl:font-arabic">
                {row.tuba}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
