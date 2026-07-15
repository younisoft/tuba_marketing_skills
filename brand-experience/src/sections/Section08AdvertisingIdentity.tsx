import { Section, Eyebrow } from '../components/Section'
import { Reveal, RevealStagger, RevealItem } from '../components/Reveal'
import { useLanguage } from '../i18n/LanguageContext'

const colors = [
  { name: { en: 'Tuba Purple', ar: 'بنفسجي طوبة' }, hex: '#2A0C72', class: 'bg-purple', text: 'text-white' },
  { name: { en: 'Tuba Coral', ar: 'مرجاني طوبة' }, hex: '#F95A60', class: 'bg-coral', text: 'text-white' },
  { name: { en: 'Purple 60', ar: 'بنفسجي 60' }, hex: '#5B3B9B', class: 'bg-purple-60', text: 'text-white' },
  { name: { en: 'Purple 20', ar: 'بنفسجي 20' }, hex: '#DCD3F0', class: 'bg-purple-20', text: 'text-purple' },
  { name: { en: 'Coral 60', ar: 'مرجاني 60' }, hex: '#FB8B90', class: 'bg-coral-60', text: 'text-white' },
  { name: { en: 'Coral 20', ar: 'مرجاني 20' }, hex: '#FFDCDE', class: 'bg-coral-20', text: 'text-purple' },
  { name: { en: 'Canvas', ar: 'الخلفية' }, hex: '#F7F5FC', class: 'bg-canvas border border-border', text: 'text-purple' },
  { name: { en: 'Ink', ar: 'الحبر' }, hex: '#1A0E35', class: 'bg-ink', text: 'text-white' },
]

const iconSet = ['thin-tree.svg', 'sun.svg', 'waves1.svg', 'mountain.svg', 'modren-house.svg', 'moon.svg', 'flower.svg', 'sea-sun.svg']

const COPY = {
  en: {
    eyebrow: 'Advertising Identity',
    title: 'The visual system every execution is built from.',
    colorHeading: 'Color System',
    colorRatio: '60% Canvas · 30% Purple (authority) · 10% Coral — the exception, never the wallpaper.',
    typeHeading: 'Typography',
    latinLabel: 'Latin — Display & Body',
    latinName: 'Plus Jakarta Sans',
    latinNote: "Geometric, rounded apertures, soft joints — echoes the mark's circular discipline.",
    arabicLabel: 'Arabic — Display & Body',
    arabicName: 'المرعي Almarai',
    arabicNote: 'Originated for a Saudi digital-brand context — warm, geometric, excellent at large sizes.',
    iconHeading: 'Iconography — Home + Place Grammar',
    iconNote: 'The same shape of belonging, taking different form in different places — the literal design expression of the big idea.',
    photoHeading: 'Photography Direction',
    photoList: [
      'Real Saudi homes and people, never generic stock',
      'Warm, golden-hour bias — never flat or cold',
      'Human presence or human trace in every set',
      'One unrepeatable detail per image — proof, not claim',
    ],
  },
  ar: {
    eyebrow: 'الهوية الإعلانية',
    title: 'النظام البصري اللي كل عمل يُبنى منه.',
    colorHeading: 'نظام الألوان',
    colorRatio: '60% خلفية · 30% بنفسجي (السلطة) · 10% مرجاني — الاستثناء، أبداً الخلفية العامة.',
    typeHeading: 'الطباعة',
    latinLabel: 'اللاتينية — العرض والنص',
    latinName: 'Plus Jakarta Sans',
    latinNote: 'هندسي، فتحات مدورة، وصلات ناعمة — يردد انضباط الشعار الدائري.',
    arabicLabel: 'العربية — العرض والنص',
    arabicName: 'المرعي Almarai',
    arabicNote: 'نشأ لسياق علامة تجارية سعودية رقمية — دافئ، هندسي، ممتاز بالأحجام الكبيرة.',
    iconHeading: 'الأيقونات — قواعد البيت + المكان',
    iconNote: 'نفس شكل الانتماء، ياخذ صورة مختلفة بأماكن مختلفة — التعبير التصميمي الحرفي للفكرة الكبرى.',
    photoHeading: 'اتجاه التصوير',
    photoList: [
      'بيوت وناس سعوديين حقيقيين، أبداً صور مخزنة عامة',
      'دافئة، منحازة لضوء الغروب — أبداً باهتة أو باردة',
      'حضور إنساني أو أثر إنساني في كل مجموعة',
      'تفصيلة واحدة لا تتكرر في كل صورة — إثبات، مو ادعاء',
    ],
  },
}

export function Section08AdvertisingIdentity() {
  const { lang } = useLanguage()
  const t = COPY[lang]

  return (
    <Section id="advertising-identity" index="08" title="Advertising Identity" tone="white">
      <Reveal>
        <Eyebrow>{t.eyebrow}</Eyebrow>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-6 max-w-3xl text-balance font-display text-3xl font-bold text-purple md:text-5xl rtl:font-arabic">
          {t.title}
        </h2>
      </Reveal>

      {/* Color */}
      <div className="mt-20">
        <Reveal>
          <h3 className="font-display text-sm font-bold uppercase tracking-eyebrow text-muted rtl:font-arabic rtl:normal-case">{t.colorHeading}</h3>
        </Reveal>
        <RevealStagger className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4" stagger={0.05}>
          {colors.map((cl) => (
            <RevealItem key={cl.name.en}>
              <div className={`flex h-32 flex-col justify-end rounded-card p-4 ${cl.class} ${cl.text}`}>
                <p className="text-sm font-bold rtl:font-arabic">{cl.name[lang]}</p>
                <p className="text-xs opacity-70">{cl.hex}</p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
        <Reveal delay={0.1}>
          <p className="mt-4 text-sm text-muted rtl:font-arabic">{t.colorRatio}</p>
        </Reveal>
      </div>

      {/* Typography */}
      <div className="mt-20">
        <Reveal>
          <h3 className="font-display text-sm font-bold uppercase tracking-eyebrow text-muted rtl:font-arabic rtl:normal-case">{t.typeHeading}</h3>
        </Reveal>
        <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2">
          <Reveal delay={0.05}>
            <div className="rounded-card border border-border p-8">
              <p className="text-xs font-bold uppercase tracking-eyebrow text-coral rtl:font-arabic rtl:normal-case">{t.latinLabel}</p>
              <p className="mt-4 font-display text-5xl font-extrabold text-ink">{t.latinName}</p>
              <p className="mt-2 text-muted rtl:font-arabic">{t.latinNote}</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-card border border-border p-8">
              <p className="text-xs font-bold uppercase tracking-eyebrow text-coral rtl:font-arabic rtl:normal-case">{t.arabicLabel}</p>
              <p className="mt-4 font-arabic text-5xl font-extrabold text-ink">{t.arabicName}</p>
              <p className="mt-2 text-muted rtl:font-arabic">{t.arabicNote}</p>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Iconography */}
      <div className="mt-20">
        <Reveal>
          <h3 className="font-display text-sm font-bold uppercase tracking-eyebrow text-muted rtl:font-arabic rtl:normal-case">{t.iconHeading}</h3>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mt-3 max-w-xl text-muted rtl:font-arabic">{t.iconNote}</p>
        </Reveal>
        <RevealStagger className="mt-6 grid grid-cols-4 gap-4 sm:grid-cols-8" stagger={0.04}>
          {iconSet.map((icon) => (
            <RevealItem key={icon}>
              <div className="flex aspect-square items-center justify-center rounded-card bg-purple-8 p-4 transition-colors duration-300 hover:bg-purple-20">
                <img src={`/brand/icons/${icon}`} alt="" aria-hidden className="h-full w-full opacity-80" />
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>

      {/* Photography */}
      <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2">
        <Reveal>
          <h3 className="font-display text-sm font-bold uppercase tracking-eyebrow text-muted rtl:font-arabic rtl:normal-case">{t.photoHeading}</h3>
          <ul className="mt-5 space-y-3 text-lg text-ink rtl:font-arabic">
            {t.photoList.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-coral">—</span> {item}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="overflow-hidden rounded-modal">
            <img
              src="/brand/images/masmak-fort-riyadh.jfif"
              alt="Masmak Fort, Riyadh — Saudi heritage architecture"
              className="h-full max-h-72 w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
