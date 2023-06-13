import TopBar from '../components/TopBar'
import HeroSection from '../components/HeroSection'
import MapImage from '../components/MapImage'
import StepByStep from '../components/StepByStep'
import Footer from '../components/Footer'

export default function Page() {
  return (
    <div>
      <TopBar />
      <HeroSection />
      <MapImage />
      <StepByStep />
      <Footer />
    </div>
  )
}