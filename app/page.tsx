import { Header } from "@/components/header"
import { Founders } from "@/components/founders"
import { CTASection } from "@/components/cta-section"
import { HeroBackground } from "@/components/hero-background"
import { HeroSection } from "@/components/hero-section"

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <HeroBackground />
      <Header />
      <HeroSection />
      <Founders />
      <CTASection />
    </main>
  )
}
