import { Header } from "@/components/header"
import { MedVisionAd } from "@/components/medvision-ad"
import Image from "next/image"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Testimonial for Mueed",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rwfHOqmWjIMhp43BxqrI3tNenysVpC.png",
    quote:
      "Throughout the session, my mentor, Mueed provided a comprehensive overview of various topics and likely interview questions. Notably, he went the extra mile by tailoring specific scenarios to my unique interview situations. I confidently recommend Mueed. His expertise and personable approach make him an ideal mentor for navigating med school interviews.",
  },
  {
    name: "Testimonial for Rasi",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gXd79gTR5dNTIEVdz0x59H3c0jhBIy.png",
    quote:
      "In-depth personalised feedback that ensured that no key aspects were missed! Helped to pinpoint areas of strengths and weaknesses well, with a key focus on how I can personalise my answers. Gave great way of structuring responses!",
  },
  {
    name: "Testimonial for Omar",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-71QWZ4wiSBfatxr8ErDrcLeHVZBN24.png",
    quote:
      "Really good session and feedback. Didn't feel really robotic or generic. Omar took the time to get to know me and where I felt I needed to improve the most. He also focused a lot on how I can stand out as a candidate and what the interviewers are looking for, which I have never had from anywhere else.",
  },
]

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Student Success Stories
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty px-4">
              Hear from students who achieved their dreams of studying medicine with our support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="flex flex-col items-center text-center p-4 md:p-6 bg-card rounded-lg shadow-md border border-border hover:shadow-lg transition-shadow"
              >
                <div className="mb-6 p-4 md:p-6 bg-blue-50 rounded-lg w-full">
                  <div className="flex justify-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-blue-600 text-blue-600" />
                    ))}
                  </div>
                  <p className="text-foreground leading-relaxed text-xs sm:text-sm">{testimonial.quote}</p>
                </div>

                <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden mb-4 border-4 border-primary flex-shrink-0">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <h3 className="font-bold text-base md:text-lg text-foreground">{testimonial.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MedVisionAd />
    </main>
  )
}
