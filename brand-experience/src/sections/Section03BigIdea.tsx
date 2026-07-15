import { motion } from 'framer-motion'
import { Section, Eyebrow } from '../components/Section'
import { Reveal, RevealStagger, RevealItem } from '../components/Reveal'
import { useLanguage } from '../i18n/LanguageContext'
import { bigIdeaAr, bigIdeaEn } from '../data/content'
import * as contentEn from '../data/content'
import * as contentAr from '../data/content.ar'

const COPY = {
  en: {
    eyebrow: 'The Name, As Strategic IP',
    chosenPlatform: 'The Chosen Platform',
    footer: "Never repeated as a flat slogan. Every use of this line must prove itself with one new, specific detail — or it doesn't belong on the platform.",
  },
  ar: {
    eyebrow: 'الاسم، كملكية فكرية استراتيجية',
    chosenPlatform: 'المنصة المختارة',
    footer: 'أبداً ما تُكرر كشعار جامد. كل استخدام لهذي الجملة لازم يثبت نفسه بتفصيلة جديدة ومحددة — وإلا ما تنتمي للمنصة.',
  },
}

export function Section03BigIdea() {
  const { lang } = useLanguage()
  const c = lang === 'ar' ? contentAr : contentEn
  const t = COPY[lang]
  const primaryLine = lang === 'ar' ? bigIdeaAr : bigIdeaEn
  const secondaryLine = lang === 'ar' ? bigIdeaEn : bigIdeaAr

  return (
    <Section id="big-idea" index="03" title="The Big Idea" tone="purple">
      <Reveal>
        <Eyebrow>{t.eyebrow}</Eyebrow>
      </Reveal>

      <div className="mt-8 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
        <Reveal delay={0.1}>
          <p className="font-arabic text-6xl font-bold text-coral md:text-8xl">{c.nameEtymology.arabic}</p>
          <p className="mt-4 text-sm uppercase tracking-eyebrow text-white/60 rtl:font-arabic rtl:normal-case">{c.nameEtymology.quranic}</p>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-balance text-xl leading-relaxed text-white/85 md:text-2xl rtl:font-arabic">{c.nameEtymology.meaning}</p>
          <p className="mt-5 text-balance leading-relaxed text-white/65 rtl:font-arabic">{c.nameEtymology.tree}</p>
        </Reveal>
      </div>

      <Reveal delay={0.1} className="mt-16 md:mt-24">
        <p className="mx-auto max-w-2xl text-balance text-center font-display text-xl font-semibold text-white/90 md:text-2xl rtl:font-arabic">
          {c.nameEtymology.insight}
        </p>
      </Reveal>

      {/* The reveal moment — always shown bilingually, primary language leads */}
      <div className="mt-28 flex flex-col items-center text-center md:mt-40">
        <Reveal>
          <span className="text-[12px] font-bold uppercase tracking-eyebrow text-coral rtl:font-arabic rtl:normal-case">
            {t.chosenPlatform}
          </span>
        </Reveal>
        <motion.h2
          key={`primary-${lang}`}
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.1, ease: [0.4, 0, 0.2, 1] }}
          className={`mt-6 text-balance font-display text-4xl font-extrabold leading-[1.05] text-white md:text-7xl ${
            lang === 'ar' ? 'font-arabic' : ''
          }`}
        >
          {primaryLine}
        </motion.h2>
        <motion.p
          key={`secondary-${lang}`}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className={`mt-5 text-3xl font-bold text-white/70 md:text-4xl ${lang === 'ar' ? '' : 'font-arabic'}`}
        >
          {secondaryLine}
        </motion.p>
      </div>

      <RevealStagger className="mx-auto mt-24 grid max-w-4xl grid-cols-1 gap-4 md:mt-32 md:grid-cols-2 md:gap-5">
        {c.proofExamples.map((p) => (
          <RevealItem key={p.name}>
            <div className="h-full rounded-card border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <p className="text-[12px] font-bold uppercase tracking-eyebrow text-coral rtl:font-arabic rtl:normal-case">{p.name}</p>
              <p className="mt-3 text-balance text-lg leading-snug text-white/85 rtl:font-arabic">{p.detail}</p>
            </div>
          </RevealItem>
        ))}
      </RevealStagger>

      <Reveal delay={0.1} className="mt-16 text-center">
        <p className="mx-auto max-w-xl text-balance text-white/55 rtl:font-arabic">{t.footer}</p>
      </Reveal>
    </Section>
  )
}
