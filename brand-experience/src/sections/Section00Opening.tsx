import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'

const EASE = [0.4, 0, 0.2, 1] as const

const COPY = {
  en: {
    headline: 'This is not a real estate company.',
    sub: 'It is a belief about belonging — and this is where that belief lives.',
    scroll: 'Scroll',
  },
  ar: {
    headline: 'هذي مو شركة عقارية.',
    sub: 'هذا إيمان بالانتماء — وهنا حيث يعيش هذا الإيمان.',
    scroll: 'مرر للأسفل',
  },
}

export function Section00Opening() {
  const { lang } = useLanguage()
  const t = COPY[lang]

  return (
    <section
      id="opening"
      data-section-title="Opening"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-tuba-gradient text-white"
    >
      <div className="noise-overlay mix-blend-overlay" />

      {/* ambient slow-drifting radial glow, never flashing */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-1/4 top-[-10%] h-[70vh] w-[70vh] rounded-full bg-coral/20 blur-[140px]"
        animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.08, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-1/4 bottom-[-10%] h-[60vh] w-[60vh] rounded-full bg-purple-20/20 blur-[140px]"
        animate={{ opacity: [0.5, 0.3, 0.5], scale: [1.05, 1, 1.05] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative flex flex-col items-center px-6 text-center">
        <motion.img
          src="/brand/logo/tuba-mark.svg"
          alt=""
          aria-hidden
          className="h-20 w-20 md:h-24 md:w-24"
          style={{ filter: 'brightness(0) invert(1)' }}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease: EASE }}
        />

        <motion.p
          className="mt-8 font-arabic text-2xl text-white/90 md:text-3xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.3, ease: EASE }}
        >
          طوبى
        </motion.p>

        <motion.h1
          key={`headline-${lang}`}
          className="mt-4 text-balance font-display text-4xl font-extrabold tracking-tight md:text-6xl rtl:font-arabic"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.9, ease: EASE }}
        >
          {t.headline}
        </motion.h1>

        <motion.p
          key={`sub-${lang}`}
          className="mt-5 max-w-xl text-balance text-lg text-white/75 md:text-xl rtl:font-arabic"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 2.6, ease: EASE }}
        >
          {t.sub}
        </motion.p>
      </div>

      <motion.div
        className="absolute bottom-10 flex flex-col items-center gap-2 text-white/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3.6 }}
      >
        <span className="text-[11px] font-medium uppercase tracking-eyebrow rtl:font-arabic rtl:normal-case">{t.scroll}</span>
        <motion.span
          className="h-8 w-[1px] bg-white/40"
          animate={{ scaleY: [0.3, 1, 0.3], opacity: [0.3, 0.9, 0.3] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: 'top' }}
        />
      </motion.div>
    </section>
  )
}
