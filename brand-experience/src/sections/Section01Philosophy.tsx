import { Section, Eyebrow } from '../components/Section'
import { Reveal } from '../components/Reveal'
import { useLanguage } from '../i18n/LanguageContext'
import * as contentEn from '../data/content'
import * as contentAr from '../data/content.ar'

const COPY = {
  en: { eyebrow: 'The Philosophy', title: 'Not what Tuba sells. What Tuba believes.' },
  ar: { eyebrow: 'الفلسفة', title: 'مو اللي تبيعه طوبة. اللي تؤمن فيه طوبة.' },
}

export function Section01Philosophy() {
  const { lang } = useLanguage()
  const c = lang === 'ar' ? contentAr : contentEn
  const t = COPY[lang]

  return (
    <Section id="philosophy" index="01" title="The Philosophy" tone="white">
      <Reveal>
        <Eyebrow>{t.eyebrow}</Eyebrow>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-6 max-w-3xl text-balance font-display text-3xl font-bold text-purple md:text-5xl rtl:font-arabic">
          {t.title}
        </h2>
      </Reveal>

      <div className="mt-20 flex flex-col gap-16 md:mt-28 md:gap-24">
        {c.manifestoQuestions.map((item, i) => (
          <Reveal key={item.q} delay={0.05 * i}>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-8">
              <p className="font-arabic text-sm text-muted md:col-span-3 md:text-right">
                {String(i + 1).padStart(2, '0')}
              </p>
              <div className="md:col-span-9">
                <h3 className="text-balance font-display text-2xl font-bold text-ink md:text-3xl rtl:font-arabic">{item.q}</h3>
                <p className="mt-4 max-w-2xl text-balance text-lg leading-relaxed text-muted rtl:font-arabic">{item.a}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1} className="mt-24 md:mt-32">
        <div className="rounded-modal bg-purple-8 px-8 py-14 text-center md:px-16 md:py-20">
          <p className="mx-auto max-w-3xl text-balance font-display text-2xl font-bold leading-snug text-purple md:text-4xl rtl:font-arabic">
            "{c.manifestoBelief}"
          </p>
        </div>
      </Reveal>
    </Section>
  )
}
