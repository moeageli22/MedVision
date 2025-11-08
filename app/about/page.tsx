import { Header } from "@/components/header"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-balance">About MedVision</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              MedVision is a non-profit organisation founded by three final-year medical students from King's College
              London. Our mission is to widen participation and support students from socioeconomically diverse
              backgrounds with limited opportunities to study medicine and dentistry at prestigious universities.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Our Mission</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We believe that everyone, regardless of their background, should have access to quality guidance and
              resources to pursue their dreams of becoming doctors and dentists. Through mentorship, workshops, and
              community support, we aim to level the playing field and empower aspiring medical professionals.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">What We Offer</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
              <li>UCAT preparation guidance and resources</li>
              <li>Interview preparation workshops and mock interviews</li>
              <li>Personal statement reviews and feedback</li>
              <li>WhatsApp community support groups</li>
              <li>One-on-one mentorship with current medical students</li>
              <li>Regular newsletters with tips and updates</li>
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
    </main>
  )
}
