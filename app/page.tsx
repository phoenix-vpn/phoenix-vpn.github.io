import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { WhyPhoenixSection } from "@/components/why-phoenix-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { DevicesSection } from "@/components/devices-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <WhyPhoenixSection />
      <HowItWorksSection />
      <DevicesSection />
      <Footer />
    </main>
  )
}
