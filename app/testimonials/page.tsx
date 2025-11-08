import { Header } from "@/components/header"

const testimonials = [
  {
    name: "Sarah Ahmed",
    university: "Imperial College London",
    quote:
      "MedVision's UCAT guidance helped me score in the 90th percentile. The personalized support made all the difference!",
  },
  {
    name: "James Thompson",
    university: "University of Cambridge",
    quote:
      "The mock interviews were invaluable. I felt so prepared on the day and received offers from my top choices.",
  },
  {
    name: "Priya Patel",
    university: "University of Oxford",
    quote: "As a first-generation student, I didn't know where to start. MedVision guided me every step of the way.",
  },
  {
    name: "Mohammed Ali",
    university: "King's College London",
    quote:
      "The WhatsApp community provided amazing peer support. It's great to connect with others on the same journey.",
  },
]

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Student Success Stories
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Hear from students who achieved their dreams of studying medicine with our support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="p-8 bg-background rounded-lg shadow-sm border border-border">
                <p className="text-muted-foreground mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-primary">{testimonial.university}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
