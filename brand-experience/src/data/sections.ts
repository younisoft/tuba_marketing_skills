export type SectionMeta = {
  id: string
  index: string
  label: string
  labelAr: string
  dark: boolean // whether the section has a dark background (for nav dot contrast)
}

export const SECTIONS: SectionMeta[] = [
  { id: 'opening', index: '00', label: 'Opening', labelAr: 'البداية', dark: true },
  { id: 'philosophy', index: '01', label: 'Philosophy', labelAr: 'الفلسفة', dark: false },
  { id: 'why-exists', index: '02', label: 'Why Tuba Exists', labelAr: 'لماذا طوبة موجودة', dark: false },
  { id: 'big-idea', index: '03', label: 'The Big Idea', labelAr: 'الفكرة الكبرى', dark: true },
  { id: 'against-category', index: '04', label: 'Against Category Thinking', labelAr: 'ضد تفكير الفئة', dark: false },
  { id: 'manifesto', index: '05', label: 'Brand Manifesto', labelAr: 'بيان العلامة التجارية', dark: true },
  { id: 'narrative-universe', index: '06', label: 'Narrative Universe', labelAr: 'الكون السردي', dark: false },
  { id: 'creative-dna', index: '07', label: 'The Creative DNA', labelAr: 'الحمض الإبداعي', dark: true },
  { id: 'advertising-identity', index: '08', label: 'Advertising Identity', labelAr: 'الهوية الإعلانية', dark: false },
  { id: 'design-language', index: '09', label: 'The Design Language', labelAr: 'لغة التصميم', dark: false },
  { id: 'social-library', index: '10', label: 'Social Media Library', labelAr: 'مكتبة السوشال ميديا', dark: false },
  { id: 'campaign-universe', index: '11', label: 'Campaign Universe', labelAr: 'كون الحملات', dark: true },
  { id: 'the-difference', index: '12', label: 'The Difference', labelAr: 'الفرق', dark: false },
  { id: 'future-vision', index: '13', label: 'Future Vision', labelAr: 'رؤية المستقبل', dark: true },
  { id: 'final', index: '14', label: 'Final', labelAr: 'الختام', dark: true },
]
