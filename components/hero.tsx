import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background medical imagery */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/medical-books-stethoscope-abstract.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
            Empowering Future <span className="text-primary">Doctors</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            MedVision is a non-profit initiative guiding aspiring medical students through mentorship, UCAT support, and
            interview preparation.
          </p>
        </div>

        {/* Founders Section */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          <div className="group animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
            <div className="relative overflow-hidden rounded-2xl bg-card border border-border aspect-[3/4] mb-4 transition-transform duration-300 group-hover:scale-[1.02]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-IJH7sa4glNQukQmS6WrrOWdlafU3uc.png"
                alt="Mr. Rasi Mizori"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Mr. Rasi Mizori</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Final-year medical student at King's College London
              <br />
              MSc Health and International Development
            </p>
          </div>

          <div className="group animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            <div className="relative overflow-hidden rounded-2xl bg-card border border-border aspect-[3/4] mb-4 transition-transform duration-300 group-hover:scale-[1.02]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1emzDbdyfuETrEIOoVMuDdsnokGhB7.png"
                alt="Mr. Mueed Ijaz"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Mr. Mueed Ijaz</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Final-year medical student at King's College London
              <br />
              MSc Global Health Policy
            </p>
          </div>

          <div className="group animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            <div className="relative overflow-hidden rounded-2xl bg-card border border-border aspect-[3/4] mb-4 transition-transform duration-300 group-hover:scale-[1.02]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-v1tPK2lSAkaiMywv7A0FIvNddoCQho.png"
                alt="Mr. Omar Ba-Abbad"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Mr. Omar Ba-Abbad</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Final-year medical student at King's College London
              <br />
              MSc Global Health Policy
            </p>
          </div>
        </div>

        <div className="text-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400">
          <Button size="lg" className="gradient-button group" asChild>
            <a href="#about">
              Find Out More
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
