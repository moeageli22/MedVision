import { Header } from "@/components/header"
import { Founders } from "@/components/founders"
import { CTASection } from "@/components/cta-section"
import { HeroSection } from "@/components/hero-section"
import { MedVisionAd } from "@/components/medvision-ad"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <MedVisionAd />
      <Founders />
      <CTASection />
    </main>
  )
}
