import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Section, Eyebrow } from '../components/Section'
import { Reveal } from '../components/Reveal'
import { useLanguage } from '../i18n/LanguageContext'
import * as contentEn from '../data/content'
import * as contentAr from '../data/content.ar'

type TabKey = 'pillars' | 'archetypes' | 'emotions' | 'symbols'

const COPY = {
  en: {
    eyebrow: 'The Narrative Universe',
    title: 'The creative operating system behind every story Tuba will ever tell.',
    intro: 'Eight pillars. Nine archetypes. Twelve emotions. Sixteen recurring symbols. 498 individually-written story seeds beneath them. Explore the system below.',
    tabs: { pillars: 'Narrative Pillars', archetypes: 'Character Archetypes', emotions: 'Emotional System', symbols: 'Symbol Library' },
    labels: {
      pillar: 'Pillar', archetype: 'Archetype', emotion: 'Emotion', symbol: 'Symbol',
      emotionalTerritory: 'Emotional territory', naturalArchetypes: 'Natural archetypes',
      whatTheyFear: 'What they fear', recurringRole: 'Recurring role',
    },
  },
  ar: {
    eyebrow: 'الكون السردي',
    title: 'نظام التشغيل الإبداعي خلف كل قصة راح تقولها طوبة.',
    intro: 'ثماني ركائز. تسعة أنماط. اثنتا عشرة مشاعر. ستة عشر رمزاً متكرراً. 498 بذرة قصة مكتوبة فردياً تحتها. استكشف النظام تحت.',
    tabs: { pillars: 'الركائز السردية', archetypes: 'الأنماط الشخصية', emotions: 'النظام العاطفي', symbols: 'مكتبة الرموز' },
    labels: {
      pillar: 'ركيزة', archetype: 'نمط', emotion: 'شعور', symbol: 'رمز',
      emotionalTerritory: 'المنطقة العاطفية', naturalArchetypes: 'الأنماط الطبيعية',
      whatTheyFear: 'وش يخافون منه', recurringRole: 'الدور المتكرر',
    },
  },
}

export function Section06NarrativeUniverse() {
  const { lang } = useLanguage()
  const c = lang === 'ar' ? contentAr : contentEn
  const t = COPY[lang]
  const [tab, setTab] = useState<TabKey>('pillars')
  const [active, setActive] = useState(0)

  const TABS: { key: TabKey; label: string; count: number }[] = [
    { key: 'pillars', label: t.tabs.pillars, count: c.narrativePillars.length },
    { key: 'archetypes', label: t.tabs.archetypes, count: c.archetypes.length },
    { key: 'emotions', label: t.tabs.emotions, count: c.emotions.length },
    { key: 'symbols', label: t.tabs.symbols, count: c.symbols.length },
  ]

  const changeTab = (k: TabKey) => {
    setTab(k)
    setActive(0)
  }

  return (
    <Section id="narrative-universe" index="06" title="Narrative Universe" tone="canvas">
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

      <Reveal delay={0.2} className="mt-14">
        <div className="flex flex-wrap gap-2">
          {TABS.map((tb) => (
            <button
              key={tb.key}
              onClick={() => changeTab(tb.key)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-300 rtl:font-arabic ${
                tab === tb.key ? 'bg-purple text-white' : 'bg-purple-8 text-purple hover:bg-purple-20'
              }`}
            >
              {tb.label} <span className="opacity-60">· {tb.count}</span>
            </button>
          ))}
        </div>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-12">
        <div className="md:col-span-7">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {tab === 'pillars' &&
              c.narrativePillars.map((p, i) => (
                <ChipButton key={p.title} active={active === i} onClick={() => setActive(i)} label={p.title} />
              ))}
            {tab === 'archetypes' &&
              c.archetypes.map((a, i) => (
                <ChipButton key={a.name} active={active === i} onClick={() => setActive(i)} label={a.name} />
              ))}
            {tab === 'emotions' &&
              c.emotions.map((e, i) => (
                <ChipButton key={e.name} active={active === i} onClick={() => setActive(i)} label={e.name} />
              ))}
            {tab === 'symbols' &&
              c.symbols.map((s, i) => (
                <ChipButton key={s.name} active={active === i} onClick={() => setActive(i)} label={s.name} />
              ))}
          </div>
        </div>

        <div className="md:col-span-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${tab}-${active}-${lang}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="h-full rounded-modal bg-purple p-8 text-white md:p-10 rtl:font-arabic"
            >
              {tab === 'pillars' && (
                <>
                  <span className="text-[11px] font-bold uppercase tracking-eyebrow text-coral rtl:normal-case">{t.labels.pillar}</span>
                  <h3 className="mt-3 font-display text-2xl font-bold">{c.narrativePillars[active].title}</h3>
                  <p className="mt-4 text-balance leading-relaxed text-white/75">{c.narrativePillars[active].body}</p>
                  <dl className="mt-6 space-y-2 text-sm">
                    <div>
                      <dt className="text-white/50">{t.labels.emotionalTerritory}</dt>
                      <dd className="text-white/85">{c.narrativePillars[active].emotion}</dd>
                    </div>
                    <div>
                      <dt className="text-white/50">{t.labels.naturalArchetypes}</dt>
                      <dd className="text-white/85">{c.narrativePillars[active].archetype}</dd>
                    </div>
                  </dl>
                </>
              )}
              {tab === 'archetypes' && (
                <>
                  <span className="text-[11px] font-bold uppercase tracking-eyebrow text-coral rtl:normal-case">{t.labels.archetype}</span>
                  <h3 className="mt-3 font-display text-2xl font-bold">{c.archetypes[active].name}</h3>
                  <dl className="mt-6 space-y-3 text-sm">
                    <div>
                      <dt className="text-white/50">{t.labels.whatTheyFear}</dt>
                      <dd className="text-balance text-white/85">{c.archetypes[active].fear}</dd>
                    </div>
                    <div>
                      <dt className="text-white/50">{t.labels.recurringRole}</dt>
                      <dd className="text-balance text-white/85">{c.archetypes[active].role}</dd>
                    </div>
                  </dl>
                </>
              )}
              {tab === 'emotions' && (
                <>
                  <span className="text-[11px] font-bold uppercase tracking-eyebrow text-coral rtl:normal-case">{t.labels.emotion}</span>
                  <h3 className="mt-3 font-display text-2xl font-bold">{c.emotions[active].name}</h3>
                  <p className="mt-4 text-balance leading-relaxed text-white/75">{c.emotions[active].note}</p>
                </>
              )}
              {tab === 'symbols' && (
                <>
                  <span className="text-[11px] font-bold uppercase tracking-eyebrow text-coral rtl:normal-case">{t.labels.symbol}</span>
                  <h3 className="mt-3 font-display text-2xl font-bold">{c.symbols[active].name}</h3>
                  <p className="mt-4 text-balance leading-relaxed text-white/75">{c.symbols[active].meaning}</p>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  )
}

function ChipButton({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  const { lang } = useLanguage()
  return (
    <button
      onClick={onClick}
      className={`rounded-card border px-4 py-4 text-left text-sm font-semibold transition-all duration-300 rtl:text-right rtl:font-arabic ${
        active
          ? 'border-coral bg-coral-8 text-purple shadow-md2'
          : 'border-border bg-surface text-ink hover:border-purple-60 hover:shadow-sm2'
      }`}
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      {label}
    </button>
  )
}
