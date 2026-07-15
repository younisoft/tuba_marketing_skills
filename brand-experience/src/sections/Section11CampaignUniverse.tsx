import { Section, Eyebrow } from '../components/Section'
import { Reveal, RevealStagger, RevealItem } from '../components/Reveal'
import { useLanguage } from '../i18n/LanguageContext'
import * as contentEn from '../data/content'
import * as contentAr from '../data/content.ar'

const COPY = {
  en: {
    eyebrow: 'Campaign Universe',
    title: 'Thirteen contexts. One idea underneath all of them.',
    intro: 'A campaign that could swap its category label with another on this list, unchanged, has failed the platform. None of these could.',
  },
  ar: {
    eyebrow: 'كون الحملات',
    title: 'ثلاثة عشر سياقاً. فكرة واحدة تحتها كلها.',
    intro: 'أي حملة ممكن تبدّل تصنيفها بحملة ثانية من هذي القائمة بدون تغيير، تكون فشلت في تمثيل المنصة. ولا وحدة من هذي تقدر.',
  },
}

export function Section11CampaignUniverse() {
  const { lang } = useLanguage()
  const c = lang === 'ar' ? contentAr : contentEn
  const t = COPY[lang]

  return (
    <Section id="campaign-universe" index="11" title="Campaign Universe" tone="purple">
      <Reveal>
        <Eyebrow>{t.eyebrow}</Eyebrow>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-6 max-w-3xl text-balance font-display text-3xl font-bold text-white md:text-5xl rtl:font-arabic">
          {t.title}
        </h2>
      </Reveal>
      <Reveal delay={0.15}>
        <p className="mt-6 max-w-2xl text-balance text-lg text-white/70 rtl:font-arabic">{t.intro}</p>
      </Reveal>

      <RevealStagger className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.05}>
        {c.campaignUniverse.map((item) => (
          <RevealItem key={item.name}>
            <div className="h-full rounded-card border border-white/10 bg-white/[0.05] p-6 transition-colors duration-300 hover:border-coral/40 hover:bg-white/[0.09]">
              <h3 className="font-display text-lg font-bold text-white rtl:font-arabic">{item.name}</h3>
              <p className="mt-3 text-xs font-bold uppercase tracking-eyebrow text-coral rtl:font-arabic rtl:normal-case">{item.pillar}</p>
              <p className="mt-2 text-sm text-white/60 rtl:font-arabic">{item.archetype}</p>
            </div>
          </RevealItem>
        ))}
      </RevealStagger>
    </Section>
  )
}
