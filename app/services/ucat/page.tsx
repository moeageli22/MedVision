import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"

export default function UCATPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-balance">UCAT Preparation</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              The UCAT (University Clinical Aptitude Test) is a crucial part of your medical school application. Our
              comprehensive preparation program helps you maximize your score and stand out from other applicants.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">What We Offer</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
              <li>Detailed breakdown of all five UCAT sections</li>
              <li>Time management strategies and exam techniques</li>
              <li>Practice questions and mock tests</li>
              <li>One-on-one guidance from high scorers</li>
              <li>Study plans tailored to your timeline</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Our Approach</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We focus on building your confidence and skills through proven strategies that have helped our students
              achieve top scores. Our founders scored in the top deciles and understand what it takes to succeed.
            </p>

            <div className="mt-8">
              <Button asChild size="lg">
                <a href="/contact">Get Started</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
