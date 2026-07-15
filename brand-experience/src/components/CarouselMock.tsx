import { useLanguage } from '../i18n/LanguageContext'

const SLIDES = {
  en: [
    { label: '01', text: 'What does "enough" actually look like to you?', bg: 'bg-purple' },
    { label: '02', text: "For some, it's five minutes from home — close enough for Friday lunch.", bg: 'bg-purple-100' },
    { label: '03', text: 'For others, it\'s a window that catches the morning before the alarm does.', bg: 'bg-purple' },
    { label: '04', text: "Everyone's Tuba is different. Find yours.", bg: 'bg-coral' },
  ],
  ar: [
    { label: '01', text: 'وش يعني لك "يكفي" بالضبط؟', bg: 'bg-purple' },
    { label: '02', text: 'لبعضهم، خمس دقايق من البيت — قريبة كفاية لغدا الجمعة.', bg: 'bg-purple-100' },
    { label: '03', text: 'لآخرين، نافذة تلقط الصباح قبل ما يصحّي المنبه.', bg: 'bg-purple' },
    { label: '04', text: 'لكل واحد طوبته. الق طوبتك أنت.', bg: 'bg-coral' },
  ],
}

export function CarouselMock() {
  const { lang } = useLanguage()
  const slides = SLIDES[lang]
  const total = '04'

  return (
    <div className="flex gap-3 overflow-x-auto pb-2">
      {slides.map((s, i) => (
        <div
          key={s.label}
          className={`relative aspect-square w-[46%] flex-shrink-0 overflow-hidden rounded-card ${s.bg} p-5 text-white shadow-md2 sm:w-[30%] md:w-[23%]`}
        >
          <div className="noise-overlay mix-blend-overlay" />
          <div className="relative flex h-full flex-col justify-between">
            <span className="text-[11px] font-bold text-white/60">{s.label} / {total}</span>
            <p className={`text-balance text-sm font-bold leading-snug ${lang === 'ar' ? 'font-arabic text-right' : ''}`}>{s.text}</p>
            {i === slides.length - 1 && (
              <img src="/brand/logo/tuba-mark.svg" alt="" aria-hidden className="mt-3 h-6 w-6" style={{ filter: 'brightness(0) invert(1)' }} />
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
