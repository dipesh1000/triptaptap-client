import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { TrustStrip } from './components/TrustStrip'
import { TrendingTrips } from './components/TrendingTrips'
import { Categories } from './components/Categories'
import { WhyTripTaptap } from './components/WhyTripTaptap'
import { FeaturedBanner } from './components/FeaturedBanner'
import { VendorSection } from './components/VendorSection'
import { Reviews } from './components/Reviews'
import { SupportBanner } from './components/SupportBanner'
import { Footer } from './components/Footer'
import { MobileBottomNav } from './components/MobileBottomNav'

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-background overflow-x-hidden text-foreground">
      <Header />

      <main>
        <Hero />
        <TrustStrip />
        <TrendingTrips />
        <Categories />
        <WhyTripTaptap />
        <FeaturedBanner />
        <VendorSection />
        <Reviews />
        <SupportBanner />
      </main>

      <Footer />
      <MobileBottomNav />
    </div>
  )
}
