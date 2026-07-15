import { Section, Eyebrow } from '../components/Section'
import { Reveal, RevealStagger, RevealItem } from '../components/Reveal'
import { useLanguage } from '../i18n/LanguageContext'
import * as contentEn from '../data/content'
import * as contentAr from '../data/content.ar'

const COPY = {
  en: {
    eyebrow: 'The Creative DNA',
    title: 'Six instincts. One brand. Every asset, forever.',
    testPrefix: 'The test behind all six, before anything ships:',
  },
  ar: {
    eyebrow: 'الحمض الإبداعي',
    title: 'ست غرائز. علامة تجارية واحدة. كل عمل، للأبد.',
    testPrefix: 'الاختبار خلف الست كلها، قبل أي شي ينشر:',
  },
}

export function Section07CreativeDna() {
  const { lang } = useLanguage()
  const c = lang === 'ar' ? contentAr : contentEn
  const t = COPY[lang]

  return (
    <Section id="creative-dna" index="07" title="The Creative DNA" tone="ink">
      <Reveal>
        <Eyebrow>{t.eyebrow}</Eyebrow>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-6 max-w-3xl text-balance font-display text-3xl font-bold text-white md:text-5xl rtl:font-arabic">
          {t.title}
        </h2>
      </Reveal>

      <RevealStagger className="mt-16 grid grid-cols-1 gap-5 md:mt-24 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
        {c.creativeDna.map((d) => (
          <RevealItem key={d.title}>
            <div className="group h-full rounded-modal border border-white/10 bg-white/[0.04] p-8 transition-colors duration-300 hover:border-coral/40 hover:bg-white/[0.07]">
              <img
                src={`/brand/icons/${d.icon}`}
                alt=""
                aria-hidden
                className="h-9 w-9 opacity-80 transition-transform duration-500 group-hover:scale-110"
                style={{ filter: 'invert(48%) sepia(65%) saturate(3000%) hue-rotate(325deg)' }}
              />
              <h3 className="mt-6 font-display text-xl font-bold text-white rtl:font-arabic">{d.title}</h3>
              <p className="mt-3 text-balance leading-relaxed text-white/65 rtl:font-arabic">{d.body}</p>
            </div>
          </RevealItem>
        ))}
      </RevealStagger>

      <Reveal delay={0.1} className="mt-20 text-center md:mt-28">
        <p className="mx-auto max-w-2xl text-balance font-display text-xl font-semibold text-white/80 md:text-2xl rtl:font-arabic">
          {t.testPrefix} "{c.finalLine}"
        </p>
      </Reveal>
    </Section>
  )
}
