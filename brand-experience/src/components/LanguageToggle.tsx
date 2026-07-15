import { useLanguage } from '../i18n/LanguageContext'
import { useActiveSection } from '../hooks/useActiveSection'
import { SECTIONS } from '../data/sections'

export function LanguageToggle() {
  const { lang, toggleLang } = useLanguage()
  const active = useActiveSection()
  const dark = SECTIONS.find((s) => s.id === active)?.dark ?? false

  return (
    <button
      onClick={toggleLang}
      aria-label={lang === 'en' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية'}
      className={`fixed top-5 z-[60] rounded-full px-4 py-2 text-[13px] font-bold uppercase tracking-eyebrow shadow-sm2 backdrop-blur-sm transition-colors duration-300 ltr:left-5 rtl:right-5 ${
        dark ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-purple/5 text-purple hover:bg-purple/10'
      }`}
    >
      {lang === 'en' ? 'العربية' : 'English'}
    </button>
  )
}
