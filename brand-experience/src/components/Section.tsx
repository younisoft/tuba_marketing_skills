import type { ReactNode } from 'react'

type Tone = 'canvas' | 'white' | 'purple' | 'gradient' | 'ink'

const toneClasses: Record<Tone, string> = {
  canvas: 'bg-canvas text-ink',
  white: 'bg-surface text-ink',
  purple: 'bg-purple text-white',
  gradient: 'bg-tuba-gradient text-white',
  ink: 'bg-[#0F0526] text-white',
}

type SectionProps = {
  id: string
  index: string
  title: string
  children: ReactNode
  tone?: Tone
  className?: string
  full?: boolean
}

/** The shell every numbered section sits inside — consistent id (for nav), section-number device, and generous vertical rhythm. */
export function Section({ id, title, children, tone = 'canvas', className = '', full = false }: SectionProps) {
  return (
    <section
      id={id}
      data-section-title={title}
      className={`relative w-full ${full ? 'min-h-screen' : 'py-28 md:py-40'} ${toneClasses[tone]} ${className}`}
    >
      <div className="noise-overlay mix-blend-overlay" />
      <div className="relative mx-auto max-w-[1280px] px-6 md:px-12">{children}</div>
    </section>
  )
}

export function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <div
      className={`inline-flex items-center gap-3 text-[12px] font-bold uppercase tracking-eyebrow ${
        dark ? 'text-coral' : 'text-coral'
      }`}
    >
      <span className="h-[2px] w-8 bg-coral" />
      {children}
    </div>
  )
}
