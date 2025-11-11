import { Header } from "@/components/header"
import { MedVisionAd } from "@/components/medvision-ad"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    quote:
      "Throughout the session, my mentor, Mueed provided a comprehensive overview of various topics and likely interview questions. Notably, he went the extra mile by tailoring specific scenarios to my unique interview situations. I confidently recommend Mueed. His expertise and personable approach make him an ideal mentor for navigating med school interviews.",
    author: "Student mentored by Mueed",
    credential: "Incoming Medical Student at King's College London",
    logo: "/kings-college-logo.png",
  },
  {
    quote:
      "In-depth personalised feedback that ensured that no key aspects were missed! Helped to pinpoint areas of strengths and weaknesses well, with a key focus on how I can personalise my answers. Gave great way of structuring responses!",
    author: "Student mentored by Rasi",
    credential: "Incoming Medical Student at Imperial College London",
    logo: "/imperial-college-london-logo.png",
  },
  {
    quote:
      "Really good session and feedback. Didn't feel really robotic or generic. Omar took the time to get to know me and where I felt I needed to improve the most. He also focused a lot on how I can stand out as a candidate and what the interviewers are looking for, which I have never had from anywhere else.",
    author: "Student mentored by Omar",
    credential: "Incoming Dental Student at Queen Mary University of London",
    logo: "/queen-mary-university-logo.png",
  },
]

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance medvision-text-animation">
              Student Success Stories 🚀
            </h1>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto text-pretty px-4">
              Hear from students who achieved their dreams of studying medicine with our support 💭
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 md:p-8 border border-[#4A9FD8]/20 hover:border-[#4A9FD8]/40 transition-all shadow-lg hover:shadow-[#4A9FD8]/20"
              >
                <Quote className="absolute top-6 left-6 w-8 h-8 md:w-10 md:h-10 text-[#4A9FD8]/20" />

                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-[#4A9FD8] text-[#4A9FD8]" />
                  ))}
                </div>

                <p className="text-white text-base md:text-lg leading-relaxed mb-6 italic relative z-10 text-center">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center justify-center gap-3 pt-4 border-t border-gray-700">
                  <Image
                    src={testimonial.logo || "/placeholder.svg"}
                    alt="University logo"
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                  <p className="text-gray-400 text-sm md:text-base">~ {testimonial.credential}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MedVisionAd />
    </main>
  )
}
