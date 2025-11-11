"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const backgrounds = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Jbpp6kEkLlQU5SK5hN6qI1SX0xGZqc.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XRkQ73oSQiu6bWrw5QZV3DT86QLtqM.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XsXa1InxwpWRYafn8JaghBNokkCCnQ.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-a0MLbehHoWGa4aKGr8LHPv8L48TeTB.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6PRssA5GoiUqC0MxZ0pSte6ST3VblX.png",
]

export function HeroSection() {
  const [currentBg, setCurrentBg] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {backgrounds.map((bg, index) => (
        <div
          key={bg}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentBg ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={bg || "/placeholder.svg"}
            alt="Medical education background"
            fill
            className="object-cover blur-sm scale-105"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/90" />

      {/* Content */}
      <div className="relative z-10 container mx-auto max-w-5xl text-center px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-center gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/407489151_864326991900661_8716464667277782353_n-mTrUn7q66NrNm9kAZsJJ3wtAuvcius.jpg"
            alt="MedVision Logo"
            width={60}
            height={60}
            className={`rounded-lg sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px] shadow-2xl transition-all duration-1000 delay-300 ${
              isLoaded ? "scale-100 rotate-0" : "scale-0 -rotate-180"
            }`}
          />
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold animate-color-cycle transition-all duration-1000 delay-500 ${
              isLoaded ? "scale-100 opacity-100" : "scale-50 opacity-0"
            }`}
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}
          >
            MedVision 🚀
          </h1>
        </div>

        <p
          className={`text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white max-w-4xl mx-auto leading-relaxed text-balance mb-6 sm:mb-8 px-2 transition-all duration-1000 delay-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}
        >
          A student-led non-profit founded by three final-year medical students, committed to bridging the gap between
          talent and opportunity, and supporting aspiring doctors and dentists to access top medical and dental schools.
        </p>

        <div
          className={`flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4 transition-all duration-1000 delay-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <a
            href="#founders"
            className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-medvision text-white text-sm sm:text-base font-semibold rounded-full hover:shadow-[0_0_30px_rgba(74,159,216,0.6)] transition-all shadow-lg"
          >
            Meet Our Founders
          </a>
          <a
            href="/services"
            className="px-6 sm:px-8 py-3 sm:py-4 bg-white/5 backdrop-blur-sm text-white text-sm sm:text-base font-semibold rounded-full hover:bg-white/10 transition-all border-2 border-medvision-blue"
          >
            Our Services
          </a>
        </div>
      </div>
    </section>
  )
}
