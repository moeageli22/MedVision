import { Header } from "@/components/header"
import { MedVisionAd } from "@/components/medvision-ad"
import Image from "next/image"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-balance">About MedVision</h1>

          <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                MedVision is a non-profit organisation founded by three final-year medical students from King's College
                London. Our mission is to widen participation and support students from socioeconomically diverse
                backgrounds with limited opportunities to study medicine and dentistry at prestigious universities.
              </p>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We believe that everyone, regardless of their background, should have access to quality guidance and
                  resources to pursue their dreams of becoming doctors and dentists. Through mentorship, workshops, and
                  community support, we aim to level the playing field and empower aspiring medical professionals.
                </p>
              </div>
            </div>

            <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HpOIlXB2cKfqrN2DfqyR8fpVMOJ0so.png"
                alt="Medical students in a lecture"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">What We Offer</h2>

            <ul className="list-none text-muted-foreground space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>UCAT preparation guidance and resources</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Interview preparation workshops and mock interviews</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Personal statement reviews and feedback</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>WhatsApp community support groups</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>One-on-one mentorship with current medical students</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Regular newsletters with tips and updates</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Our Impact</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Since our founding, we've helped hundreds of students from diverse backgrounds gain admission to medical
              and dental schools across the UK. We're proud to have created a supportive community where students can
              connect, learn, and grow together.
            </p>
          </div>
        </div>
      </section>
      <MedVisionAd />
    </main>
  )
}
