import { LanguageProvider } from './i18n/LanguageContext'
import { ProgressBar } from './components/ProgressBar'
import { NavDots } from './components/NavDots'
import { LanguageToggle } from './components/LanguageToggle'
import { Section00Opening } from './sections/Section00Opening'
import { Section01Philosophy } from './sections/Section01Philosophy'
import { Section02WhyExists } from './sections/Section02WhyExists'
import { Section03BigIdea } from './sections/Section03BigIdea'
import { Section04AgainstCategory } from './sections/Section04AgainstCategory'
import { Section05Manifesto } from './sections/Section05Manifesto'
import { Section06NarrativeUniverse } from './sections/Section06NarrativeUniverse'
import { Section07CreativeDna } from './sections/Section07CreativeDna'
import { Section08AdvertisingIdentity } from './sections/Section08AdvertisingIdentity'
import { Section09DesignLanguage } from './sections/Section09DesignLanguage'
import { Section10SocialLibrary } from './sections/Section10SocialLibrary'
import { Section11CampaignUniverse } from './sections/Section11CampaignUniverse'
import { Section12TheDifference } from './sections/Section12TheDifference'
import { Section13FutureVision } from './sections/Section13FutureVision'
import { Section14Final } from './sections/Section14Final'

function App() {
  return (
    <LanguageProvider>
      <div className="relative">
        <ProgressBar />
        <NavDots />
        <LanguageToggle />
        <main>
          <Section00Opening />
          <Section01Philosophy />
          <Section02WhyExists />
          <Section03BigIdea />
          <Section04AgainstCategory />
          <Section05Manifesto />
          <Section06NarrativeUniverse />
          <Section07CreativeDna />
          <Section08AdvertisingIdentity />
          <Section09DesignLanguage />
          <Section10SocialLibrary />
          <Section11CampaignUniverse />
          <Section12TheDifference />
          <Section13FutureVision />
          <Section14Final />
        </main>
      </div>
    </LanguageProvider>
  )
}

export default App
