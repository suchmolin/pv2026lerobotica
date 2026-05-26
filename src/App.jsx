import Navbar from './components/Navbar'
import Header from './components/Header'
import FeatureItems from './components/FeatureItems'
import ProgramStages from './components/ProgramStages'
import VacationSeasons from './components/VacationSeasons'
import LegoRoute from './components/LegoRoute'
import ContactBanner from './components/ContactBanner'
import BenefitCards from './components/BenefitCards'
import VacationPromo from './components/VacationPromo'
import LocationsSection from './components/LocationsSection'
import CtaBanner from './components/CtaBanner'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="overflow-x-clip">
        <Header />
        <FeatureItems />
        <ProgramStages />
        <VacationSeasons />
        <LegoRoute />
        <ContactBanner />
        <BenefitCards />
        <VacationPromo />
        <LocationsSection />
        <CtaBanner />
      </main>
    </div>
  )
}

export default App
