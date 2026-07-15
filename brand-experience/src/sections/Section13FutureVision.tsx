import { Section, Eyebrow } from '../components/Section'
import { Reveal, RevealStagger, RevealItem } from '../components/Reveal'
import { useLanguage } from '../i18n/LanguageContext'
import * as contentEn from '../data/content'
import * as contentAr from '../data/content.ar'

const COPY = {
  en: {
    eyebrow: 'Tuba, 2035',
    title: 'Ten years out. Still recognizably this brand.',
    footer: "Every expansion here is only worth pursuing if it could not be mistaken for another brand's version of the same idea.",
  },
  ar: {
    eyebrow: 'طوبة، 2035',
    title: 'بعد عشر سنوات. لسه نفس العلامة التجارية تُعرف.',
    footer: 'كل توسّع هنا يستاهل السعي له بس لو ما يمكن يُخلط بنسخة علامة تجارية ثانية من نفس الفكرة.',
  },
}

export function Section13FutureVision() {
  const { lang } = useLanguage()
  const c = lang === 'ar' ? contentAr : contentEn
  const t = COPY[lang]

  return (
    <Section id="future-vision" index="13" title="Future Vision" tone="ink">
      <Reveal>
        <Eyebrow>{t.eyebrow}</Eyebrow>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-6 max-w-3xl text-balance font-display text-3xl font-bold text-white md:text-5xl rtl:font-arabic">
          {t.title}
        </h2>
      </Reveal>

      <RevealStagger className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5" stagger={0.04}>
        {c.futureVision.map((f) => (
          <RevealItem key={f.title}>
            <div className="h-full rounded-card border border-white/10 bg-white/[0.04] p-6 transition-colors duration-300 hover:border-coral/40">
              <h3 className="font-display text-base font-bold text-coral rtl:font-arabic">{f.title}</h3>
              <p className="mt-3 text-balance text-sm leading-relaxed text-white/65 rtl:font-arabic">{f.body}</p>
            </div>
          </RevealItem>
        ))}
      </RevealStagger>

      <Reveal delay={0.15} className="mt-16 text-center">
        <p className="mx-auto max-w-xl text-balance text-white/50 rtl:font-arabic">{t.footer}</p>
      </Reveal>
    </Section>
  )
}
