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
      <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/70 to-navy/85" />

      {/* Content */}
      <div className="relative z-10 container mx-auto max-w-5xl text-center px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 animate-fade-in">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/407489151_864326991900661_8716464667277782353_n-mTrUn7q66NrNm9kAZsJJ3wtAuvcius.jpg"
            alt="MedVision Logo"
            width={60}
            height={60}
            className="rounded-lg sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px] shadow-2xl"
          />
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white"
            style={{ textShadow: "0 4px 12px rgba(0,0,0,0.6)" }}
          >
            MedVision
          </h1>
        </div>

        <p
          className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white max-w-4xl mx-auto leading-relaxed text-balance mb-6 sm:mb-8 px-2"
          style={{ textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}
        >
          Empowering aspiring medical students from diverse backgrounds to achieve their dreams of studying medicine and
          dentistry at prestigious universities
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4">
          <a
            href="#founders"
            className="px-6 sm:px-8 py-3 sm:py-4 bg-primary text-white text-sm sm:text-base font-semibold rounded-full hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
          >
            Meet Our Founders
          </a>
          <a
            href="/services"
            className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm text-white text-sm sm:text-base font-semibold rounded-full hover:bg-white/20 transition-all border-2 border-white/30"
          >
            Our Services
          </a>
        </div>
      </div>
    </section>
  )
}
