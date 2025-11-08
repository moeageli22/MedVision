import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"

export default function InterviewsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-balance">Interview Preparation</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Medical school interviews can be daunting, but with the right preparation, you can showcase your potential
              and passion for medicine. We provide comprehensive interview training to help you succeed.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">What We Offer</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
              <li>Mock MMI (Multiple Mini Interviews) sessions</li>
              <li>Traditional panel interview practice</li>
              <li>Ethical scenario discussions</li>
              <li>Personal statement deep dives</li>
              <li>Current affairs and NHS knowledge sessions</li>
              <li>Detailed feedback and improvement strategies</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Why Choose Us</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Our founders have recently gone through the interview process at top UK medical schools and know exactly
              what interviewers are looking for. We provide honest, constructive feedback to help you improve.
            </p>

            <div className="mt-8">
              <Button asChild size="lg">
                <a href="/contact">Book a Session</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
