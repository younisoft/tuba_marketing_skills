import { SECTIONS } from '../data/sections'
import { useActiveSection } from '../hooks/useActiveSection'
import { useLanguage } from '../i18n/LanguageContext'

export function NavDots() {
  const active = useActiveSection()
  const { lang } = useLanguage()

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const activeMeta = SECTIONS.find((s) => s.id === active)
  const dark = activeMeta?.dark ?? false

  return (
    <nav
      className="fixed top-1/2 z-50 hidden -translate-y-1/2 flex-col items-end gap-3 md:flex ltr:right-4 ltr:lg:right-8 rtl:left-4 rtl:lg:left-8 rtl:items-start"
      aria-label="Section navigation"
    >
      {SECTIONS.map((s) => {
        const isActive = s.id === active
        const label = lang === 'ar' ? s.labelAr : s.label
        return (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            className="group flex items-center gap-3"
            aria-label={`Go to ${s.label}`}
            aria-current={isActive}
          >
            <span
              className={`whitespace-nowrap rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-eyebrow opacity-0 shadow-sm2 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100 ${
                lang === 'ar' ? 'font-arabic normal-case' : ''
              } ${dark ? 'bg-purple-100/85 text-white' : 'bg-white/90 text-purple'} ${isActive ? 'opacity-100' : ''}`}
            >
              {label}
            </span>
            <span
              className={`block h-2 rounded-full transition-all duration-300 ${
                isActive ? 'w-6 bg-coral' : `w-2 ${dark ? 'bg-white/40 group-hover:bg-white/70' : 'bg-purple/25 group-hover:bg-purple/60'}`
              }`}
            />
          </button>
        )
      })}
    </nav>
  )
}
