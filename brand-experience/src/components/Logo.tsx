import { useLanguage } from '../i18n/LanguageContext'

type LogoProps = {
  variant?: 'mark' | 'full-color' | 'full-white'
  className?: string
}

const SOURCES = {
  mark: { en: '/brand/logo/tuba-mark.svg', ar: '/brand/logo/tuba-mark.svg' },
  'full-color': { en: '/brand/logo/en_coloredLogo.svg', ar: '/brand/logo/ar-color-TubaLogo2.svg' },
  'full-white': { en: '/brand/logo/logo-white.png', ar: '/brand/logo/ar-logo.svg' },
}

export function Logo({ variant = 'full-color', className = 'h-8' }: LogoProps) {
  const { lang } = useLanguage()
  const src = SOURCES[variant][lang]
  return <img src={src} alt="طوبة · Tuba" className={className} draggable={false} />
}
