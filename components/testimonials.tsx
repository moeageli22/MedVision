"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import { useState, useEffect } from "react"

const testimonials = [
  {
    text: "MedVision helped me secure my place at medical school — their UCAT and interview guidance made all the difference.",
    author: "Sarah M.",
    achievement: "Offer from King's College London Medicine",
  },
  {
    text: "The support and advice were incredible. I felt confident and fully prepared for my interviews.",
    author: "James K.",
    achievement: "Offer from Imperial College London Medicine",
  },
  {
    text: "A professional and supportive team who truly care about your success.",
    author: "Aisha R.",
    achievement: "Offer from University of Oxford Medicine",
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="testimonials" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance medvision-text-animation">
            Student Success Stories
          </h2>
          <p className="text-xl text-muted-foreground">Hear from students we've helped</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-card border-border">
            <CardContent className="p-8 md:p-12">
              <Quote className="h-12 w-12 text-primary mb-6 opacity-50" />
              <p className="text-xl md:text-2xl mb-8 leading-relaxed text-pretty">{testimonials[current].text}</p>
              <div className="flex flex-col gap-2">
                <p className="font-semibold text-lg">{testimonials[current].author}</p>
                <p className="text-sm text-muted-foreground">{testimonials[current].achievement}</p>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  current === index ? "bg-primary w-8" : "bg-muted-foreground/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
