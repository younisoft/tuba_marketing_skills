import { Section, Eyebrow } from '../components/Section'
import { Reveal } from '../components/Reveal'
import { useLanguage } from '../i18n/LanguageContext'
import {
  SquarePost,
  PhotoPost,
  StoryMock,
  ReelCover,
  LinkedInMock,
  TikTokMock,
  SnapMock,
  DisplayBanner,
  PlatformChip,
} from '../components/SocialMockups'
import { CarouselMock } from '../components/CarouselMock'

const COPY = {
  en: {
    eyebrow: 'Social Media Library',
    title: 'One idea. Every format. Never off-brand.',
    intro: 'Production-ready direction across the entire channel mix — the same discipline, the same restraint, the same particular detail, everywhere Tuba shows up.',
    chips: {
      feed: 'Instagram — Feed Post',
      carousel: 'Instagram — Carousel',
      stories: 'Stories · Reel Covers · TikTok · Snapchat',
      linkedin: 'LinkedIn — Developer / B2B',
      display: 'Display / Performance Banner',
    },
    posts: {
      p1e: "Everyone's Tuba Is Different", p1h: 'لكل واحد طوبته',
      p2h: 'Your view. Not everyone\'s.',
      p3h: 'Some homes are chosen. Yours found you.',
      p4e: 'Investment', p4h: 'Built to be inherited, not just owned.',
    },
    story: { h: 'Your particular reasons, at the center.', s: 'Not the biggest selection. The right one.' },
    reel: 'Reel Cover: 5 Things Only You Would Notice',
    reelH: '5 Things Only You Would Notice',
    tiktok: 'POV: the one detail that made it yours',
    snap: 'Your tuba. Your rules.',
    li1: {
      name: 'Tuba', role: 'Real Estate Marketplace · Riyadh',
      caption: "Every developer builds for a different reason. A preserved hill. A protected tree. A community-first choice against advisor recommendation. What's yours?",
      headline: 'Building what outlasts you.',
    },
    li2: {
      name: 'Tuba for Brokers', role: 'Partner Network',
      caption: 'Some brokers are patient. Some are fast. Some are quietly thorough. Every broker\'s way of helping is different — and it shows.',
      headline: 'The people who carried you there.',
    },
    banner1: 'Stop searching. Start recognizing.',
    banner2: 'Licensed. Verified. Still, entirely yours.',
  },
  ar: {
    eyebrow: 'مكتبة السوشال ميديا',
    title: 'فكرة واحدة. كل صيغة. أبداً خارج الهوية.',
    intro: 'اتجاه جاهز للإنتاج عبر مزيج القنوات كامل — نفس الانضباط، نفس التحفّظ، نفس التفصيلة المحددة، أينما ظهرت طوبة.',
    chips: {
      feed: 'انستقرام — منشور فيد',
      carousel: 'انستقرام — كاروسيل',
      stories: 'ستوري · أغلفة ريلز · تيك توك · سناب شات',
      linkedin: 'لينكدإن — مطورين / بزنس',
      display: 'بانر عرض / أداء',
    },
    posts: {
      p1e: 'لكل واحد طوبته', p1h: 'لكل واحد طوبته',
      p2h: 'إطلالتك أنت. مو إطلالة الكل.',
      p3h: 'بعض البيوت تُختار. بيتك هو اللي لقاك.',
      p4e: 'استثمار', p4h: 'مبني عشان يُورَّث، مو بس يُمتلك.',
    },
    story: { h: 'أسبابك الخاصة، في المنتصف.', s: 'مو أكبر تشكيلة. الصح فقط.' },
    reel: 'غلاف ريلز: 5 أشياء أنت بس تلاحظها',
    reelH: '5 أشياء أنت بس تلاحظها',
    tiktok: 'POV: التفصيلة الوحيدة اللي خلته يصير بيتك',
    snap: 'طوبتك. قوانينك أنت.',
    li1: {
      name: 'طوبة', role: 'منصة عقارية · الرياض',
      caption: 'كل مطور يبني لسبب مختلف. تلة محفوظة. شجرة محمية. قرار يقدّم المجتمع أولاً ضد توصية المستشار. وش سببك أنت؟',
      headline: 'يبني ما يدوم بعده.',
    },
    li2: {
      name: 'طوبة للوسطاء', role: 'شبكة الشركاء',
      caption: 'بعض الوسطاء صبورين. بعضهم سريع. بعضهم دقيق بهدوء. طريقة كل وسيط بالمساعدة مختلفة — وتبان.',
      headline: 'اللي أوصلوك لهناك.',
    },
    banner1: 'وقف البحث. ابدأ التعرّف.',
    banner2: 'مرخّص. موثّق. وبعدها، لك أنت بالكامل.',
  },
}

export function Section10SocialLibrary() {
  const { lang } = useLanguage()
  const t = COPY[lang]

  return (
    <Section id="social-library" index="10" title="Social Media Library" tone="white">
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

      <div className="mt-16 grid grid-cols-1 gap-14">
        {/* Instagram Feed */}
        <div>
          <Reveal><PlatformChip>{t.chips.feed}</PlatformChip></Reveal>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            <Reveal delay={0.02}>
              <SquarePost eyebrow={t.posts.p1e} headline={t.posts.p1h} icon="thin-tree-outline.svg" />
            </Reveal>
            <Reveal delay={0.06}>
              <PhotoPost
                src="/brand/images/masmak-fort-riyadh.jfif"
                alt="Masmak Fort, Riyadh"
                headline={t.posts.p2h}
              />
            </Reveal>
            <Reveal delay={0.1}>
              <SquarePost bg="coral" headline={t.posts.p3h} icon="sun-outline.svg" />
            </Reveal>
            <Reveal delay={0.14}>
              <SquarePost bg="purple" eyebrow={t.posts.p4e} headline={t.posts.p4h} icon="fat-tree-outline.svg" />
            </Reveal>
          </div>
        </div>

        {/* Carousel */}
        <div>
          <Reveal><PlatformChip>{t.chips.carousel}</PlatformChip></Reveal>
          <Reveal delay={0.05}>
            <CarouselMock />
          </Reveal>
        </div>

        {/* Stories / Reels / TikTok / Snap */}
        <div>
          <Reveal><PlatformChip>{t.chips.stories}</PlatformChip></Reveal>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <Reveal delay={0.02}><StoryMock headline={t.story.h} sub={t.story.s} /></Reveal>
            <Reveal delay={0.06}><ReelCover headline={t.reelH} /></Reveal>
            <Reveal delay={0.1}><TikTokMock headline={t.tiktok} /></Reveal>
            <Reveal delay={0.14}><SnapMock headline={t.snap} /></Reveal>
          </div>
        </div>

        {/* LinkedIn */}
        <div>
          <Reveal><PlatformChip>{t.chips.linkedin}</PlatformChip></Reveal>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Reveal delay={0.02}>
              <LinkedInMock name={t.li1.name} role={t.li1.role} caption={t.li1.caption} headline={t.li1.headline} />
            </Reveal>
            <Reveal delay={0.08}>
              <LinkedInMock name={t.li2.name} role={t.li2.role} caption={t.li2.caption} headline={t.li2.headline} />
            </Reveal>
          </div>
        </div>

        {/* Display */}
        <div>
          <Reveal><PlatformChip>{t.chips.display}</PlatformChip></Reveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Reveal delay={0.02}><DisplayBanner headline={t.banner1} /></Reveal>
            <Reveal delay={0.06}><DisplayBanner headline={t.banner2} /></Reveal>
          </div>
        </div>
      </div>
    </Section>
  )
}
