import type { ReactNode } from 'react'
import { useLanguage } from '../i18n/LanguageContext'

export function PlatformChip({ children }: { children: ReactNode }) {
  return (
    <span className="mb-3 inline-block rounded-full bg-purple-8 px-3 py-1 text-[11px] font-bold uppercase tracking-eyebrow text-purple rtl:font-arabic rtl:normal-case">
      {children}
    </span>
  )
}

function MarkWatermark({ light = true }: { light?: boolean }) {
  return (
    <img
      src="/brand/logo/tuba-mark.svg"
      alt=""
      aria-hidden
      className="absolute right-4 top-4 h-6 w-6 ltr:right-4 rtl:left-4 rtl:right-auto"
      style={light ? { filter: 'brightness(0) invert(1)', opacity: 0.9 } : { opacity: 0.85 }}
    />
  )
}

const bgVariants: Record<string, string> = {
  gradient: 'bg-tuba-gradient',
  purple: 'bg-purple',
  coral: 'bg-coral',
  ink: 'bg-[#150733]',
}

export function SquarePost({
  bg = 'gradient',
  eyebrow,
  headline,
  sub,
  icon,
}: {
  bg?: keyof typeof bgVariants
  eyebrow?: string
  headline: string
  sub?: string
  icon?: string
}) {
  const { lang } = useLanguage()
  return (
    <div className={`relative aspect-square w-full overflow-hidden rounded-card ${bgVariants[bg]} p-6 text-white shadow-md2`}>
      <div className="noise-overlay mix-blend-overlay" />
      <MarkWatermark />
      {icon && (
        <img src={`/brand/icons/${icon}`} alt="" aria-hidden className="absolute -bottom-6 -right-6 h-32 w-32 opacity-15" />
      )}
      <div className="relative flex h-full flex-col justify-end">
        {eyebrow && <span className="mb-2 text-[10px] font-bold uppercase tracking-eyebrow text-coral rtl:font-arabic rtl:normal-case">{eyebrow}</span>}
        <p className={`text-balance font-display text-2xl font-bold leading-tight ${lang === 'ar' ? 'font-arabic' : ''}`}>{headline}</p>
        {sub && <p className={`mt-2 text-balance text-sm text-white/70 ${lang === 'ar' ? 'font-arabic' : ''}`}>{sub}</p>}
      </div>
    </div>
  )
}

export function PhotoPost({ src, alt, headline, sub }: { src: string; alt: string; headline: string; sub?: string }) {
  const { lang } = useLanguage()
  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-card shadow-md2">
      <img src={src} alt={alt} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-purple-100/85 via-purple-100/10 to-transparent" />
      <MarkWatermark />
      <div className="relative flex h-full flex-col justify-end p-6 text-white">
        <p className={`text-balance font-display text-2xl font-bold leading-tight ${lang === 'ar' ? 'font-arabic' : ''}`}>{headline}</p>
        {sub && <p className={`mt-2 text-balance text-sm text-white/75 ${lang === 'ar' ? 'font-arabic' : ''}`}>{sub}</p>}
      </div>
    </div>
  )
}

export function PhoneFrame({ children, bg = 'gradient' }: { children: ReactNode; bg?: keyof typeof bgVariants }) {
  return (
    <div className={`relative mx-auto aspect-[9/16] w-full max-w-[220px] overflow-hidden rounded-[28px] ${bgVariants[bg]} text-white shadow-lg2 ring-8 ring-[#0F0526]/90`}>
      <div className="noise-overlay mix-blend-overlay" />
      {children}
    </div>
  )
}

export function StoryMock({ headline, sub }: { headline: string; sub?: string }) {
  const { lang } = useLanguage()
  const swipeLabel = lang === 'ar' ? 'مرر للأعلى' : 'Swipe Up'
  return (
    <PhoneFrame bg="purple">
      {/* platform safe-zone markers */}
      <div className="absolute left-4 right-4 top-6 h-1 rounded-full bg-white/25" />
      <div className="relative flex h-full flex-col justify-center px-6 pb-16 pt-16 text-center">
        <p className={`text-balance font-display text-xl font-bold leading-tight ${lang === 'ar' ? 'font-arabic' : ''}`}>{headline}</p>
        {sub && <p className={`mt-3 text-balance text-xs text-white/70 ${lang === 'ar' ? 'font-arabic' : ''}`}>{sub}</p>}
      </div>
      <div className="absolute bottom-6 left-6 right-6 rounded-full border border-white/40 py-2 text-center text-[11px] font-bold uppercase tracking-eyebrow rtl:font-arabic rtl:normal-case">
        {swipeLabel}
      </div>
    </PhoneFrame>
  )
}

export function ReelCover({ headline }: { headline: string }) {
  const { lang } = useLanguage()
  return (
    <PhoneFrame bg="ink">
      <div className="relative flex h-full flex-col items-center justify-center px-5 text-center">
        <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/70">
          <span className="ml-0.5 h-0 w-0 border-y-[7px] border-l-[11px] border-y-transparent border-l-white rtl:ml-0 rtl:mr-0.5 rtl:border-l-0 rtl:border-r-[11px] rtl:border-r-white" />
        </span>
        <p className={`text-balance font-display text-lg font-extrabold uppercase leading-tight tracking-tight ${lang === 'ar' ? 'font-arabic normal-case' : ''}`}>
          {headline}
        </p>
      </div>
    </PhoneFrame>
  )
}

export function LinkedInMock({ name, role, caption, headline }: { name: string; role: string; caption: string; headline: string }) {
  const { lang } = useLanguage()
  return (
    <div className="w-full overflow-hidden rounded-card border border-border bg-surface shadow-md2">
      <div className="flex items-center gap-3 p-4">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-purple text-sm font-bold text-white">
          {name.split(' ').map((w) => w[0]).join('')}
        </span>
        <div>
          <p className={`text-sm font-bold text-ink ${lang === 'ar' ? 'font-arabic' : ''}`}>{name}</p>
          <p className={`text-xs text-muted ${lang === 'ar' ? 'font-arabic' : ''}`}>{role}</p>
        </div>
      </div>
      <p className={`px-4 pb-3 text-sm text-ink ${lang === 'ar' ? 'font-arabic' : ''}`}>{caption}</p>
      <div className="relative aspect-[1.91/1] bg-purple">
        <div className="noise-overlay mix-blend-overlay" />
        <MarkWatermark />
        <div className="flex h-full items-end p-6">
          <p className={`text-balance font-display text-xl font-bold text-white ${lang === 'ar' ? 'font-arabic' : ''}`}>{headline}</p>
        </div>
      </div>
    </div>
  )
}

export function TikTokMock({ headline }: { headline: string }) {
  const { lang } = useLanguage()
  return (
    <PhoneFrame bg="coral">
      <div className="relative flex h-full flex-col items-center justify-center px-5 text-center">
        <p className={`text-balance font-display text-lg font-extrabold uppercase leading-tight text-white ${lang === 'ar' ? 'font-arabic normal-case' : ''}`}>
          {headline}
        </p>
      </div>
      <div className="absolute bottom-6 left-6 right-16 text-left text-[11px] font-semibold text-white/85 rtl:text-right">@tuba · original sound</div>
    </PhoneFrame>
  )
}

export function SnapMock({ headline }: { headline: string }) {
  const { lang } = useLanguage()
  const tapLabel = lang === 'ar' ? 'دوس عشان تستكشف' : 'Tap to explore'
  return (
    <PhoneFrame bg="gradient">
      <div className="relative flex h-full flex-col justify-end px-5 pb-8 text-left rtl:text-right">
        <p className={`text-balance font-display text-lg font-bold leading-tight text-white ${lang === 'ar' ? 'font-arabic' : ''}`}>{headline}</p>
        <div className="mt-4 inline-flex w-fit rounded-full bg-white px-4 py-1.5 text-xs font-bold text-purple rtl:font-arabic">{tapLabel}</div>
      </div>
    </PhoneFrame>
  )
}

export function DisplayBanner({ headline }: { headline: string }) {
  const { lang } = useLanguage()
  const ctaLabel = lang === 'ar' ? 'استكشف' : 'Explore'
  return (
    <div className="relative flex h-[110px] w-full items-center justify-between overflow-hidden rounded-btn bg-purple px-5 text-white shadow-sm2">
      <img src="/brand/logo/tuba-mark.svg" alt="" aria-hidden className="h-7 w-7" style={{ filter: 'brightness(0) invert(1)' }} />
      <p className={`mx-4 flex-1 text-balance text-sm font-bold leading-tight ${lang === 'ar' ? 'font-arabic' : ''}`}>{headline}</p>
      <span className="whitespace-nowrap rounded-full bg-coral px-4 py-2 text-xs font-bold rtl:font-arabic">{ctaLabel}</span>
    </div>
  )
}
