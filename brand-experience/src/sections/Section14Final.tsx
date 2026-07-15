import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'
import { finalLine as finalLineEn, bigIdeaAr } from '../data/content'
import { finalLine as finalLineAr } from '../data/content.ar'
import { bigIdeaEn } from '../data/content'

export function Section14Final() {
  const { lang } = useLanguage()
  const primaryLine = lang === 'ar' ? finalLineAr : finalLineEn
  const secondaryLine = lang === 'ar' ? bigIdeaEn : bigIdeaAr

  return (
    <section
      id="final"
      data-section-title="Final"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#0F0526] text-white"
    >
      <div className="noise-overlay mix-blend-overlay" />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[50vh] w-[50vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple/30 blur-[160px]"
        animate={{ opacity: [0.4, 0.65, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.img
        src="/brand/logo/tuba-mark.svg"
        alt="Tuba"
        className="relative h-16 w-16"
        style={{ filter: 'brightness(0) invert(1)' }}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1.4, ease: [0.4, 0, 0.2, 1] }}
      />

      <motion.p
        key={`primary-${lang}`}
        className={`relative mt-12 max-w-2xl text-balance px-6 text-center font-display text-2xl font-medium leading-snug text-white/90 md:text-4xl ${
          lang === 'ar' ? 'font-arabic' : ''
        }`}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1.2, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
      >
        "{primaryLine}"
      </motion.p>

      <motion.p
        key={`secondary-${lang}`}
        className={`relative mt-8 text-lg text-white/40 ${lang === 'ar' ? '' : 'font-arabic'}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1.2, delay: 1.3 }}
      >
        {secondaryLine}
      </motion.p>
    </section>
  )
}
