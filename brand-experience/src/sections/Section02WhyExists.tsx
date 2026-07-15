import { Section, Eyebrow } from '../components/Section'
import { Reveal, RevealStagger, RevealItem } from '../components/Reveal'
import { useLanguage } from '../i18n/LanguageContext'
import * as contentEn from '../data/content'
import * as contentAr from '../data/content.ar'

const COPY = {
  en: {
    eyebrow: 'Why Tuba Exists',
    title: 'The category found ten ways to say the same generic thing.',
    p1: 'Every property portal on earth shows one dream and asks everyone to want it. Emotionally true, brand-specifically empty. None of it is ownable — it belongs to no one, so it differentiates nothing.',
    p2: "Tuba's own honest gap: a distinct emotional territory its own name had already earned — and had never once activated.",
  },
  ar: {
    eyebrow: 'لماذا طوبة موجودة',
    title: 'الفئة لقت عشر طرق تقول فيها نفس الشي العام.',
    p1: 'كل منصة عقارية على وجه الأرض تعرض حلم واحد وتطلب من الكل يبيه. صادقة عاطفياً، فاضية على مستوى العلامة التجارية. ما فيها شي يُملَك — ما ينتمي لحد، فما يميّز شي.',
    p2: 'فجوة طوبة الصادقة الخاصة بها: منطقة عاطفية مميزة اسمها هو نفسه كسبها من زمان — وما فعّلتها أبداً.',
  },
}

export function Section02WhyExists() {
  const { lang } = useLanguage()
  const c = lang === 'ar' ? contentAr : contentEn
  const t = COPY[lang]

  return (
    <Section id="why-exists" index="02" title="Why Tuba Exists" tone="canvas">
      <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-12">
        <div>
          <Reveal>
            <Eyebrow>{t.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 text-balance font-display text-3xl font-bold text-purple md:text-5xl rtl:font-arabic">
              {t.title}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-lg text-balance text-lg leading-relaxed text-muted rtl:font-arabic">{t.p1}</p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-6 max-w-lg text-balance text-lg leading-relaxed text-muted rtl:font-arabic">{t.p2}</p>
          </Reveal>
        </div>

        <RevealStagger className="flex flex-col gap-3" stagger={0.08}>
          {c.categoryCliches.map((item) => (
            <RevealItem key={item.label}>
              <div className="rounded-card border border-border bg-surface p-5 shadow-sm2 transition-shadow duration-300 hover:shadow-md2">
                <p className="font-display text-lg font-bold text-ink rtl:font-arabic">{item.label}</p>
                <p className="mt-1 text-sm text-muted rtl:font-arabic">{item.owner}</p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </Section>
  )
}
