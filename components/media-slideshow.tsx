"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const slides = [
  {
    type: "video",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Video%202025-11-11%20at%2014.41.05-grOUFGDCT9U8IShiUtVtJfFD3x88tc.mp4",
    alt: "MedVision presentation",
  },
  {
    type: "image",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-11%20at%2014.41.03-klarucko3g8TcoVHmfVzKdpAP2zAvV.jpeg",
    alt: "MedVision founders",
  },
  {
    type: "image",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-11%20at%2014.41.07-JIudhHQl4aVZ9Lg9XmalVPW0yRcsaY.jpeg",
    alt: "Day in the life presentation",
  },
]

export function MediaSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
      {/* Animated gradient border */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#4A9FD8] via-[#2B7FB5] to-[#4A9FD8] animate-gradient-x opacity-50 blur-sm"></div>

      {/* Main container with glass effect */}
      <div className="relative w-full h-full m-1 rounded-3xl overflow-hidden bg-black/40 backdrop-blur-md border border-white/10">
        {/* Main Slideshow Area */}
        <div className="relative w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-700 ${
                index === currentSlide ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-105 blur-sm"
              }`}
            >
              {slide.type === "video" ? (
                <video src={slide.src} className="w-full h-full object-cover" autoPlay loop muted playsInline />
              ) : (
                <Image
                  src={slide.src || "/placeholder.svg"}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              )}
              {/* Gradient overlay for better text visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-white/10 z-20">
          <div
            className="h-full bg-gradient-to-r from-[#4A9FD8] to-[#2B7FB5] transition-all duration-300"
            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          ></div>
        </div>

        {/* Slide counter */}
        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full text-white font-semibold border border-white/10 z-20">
          {currentSlide + 1} / {slides.length}
        </div>

        {/* Enhanced Circular Navigation Dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-4 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-14 h-14 rounded-full border-2 transition-all duration-300 ${
                index === currentSlide
                  ? "border-[#4A9FD8] bg-[#4A9FD8]/40 scale-110 shadow-lg shadow-[#4A9FD8]/50"
                  : "border-white/40 bg-white/10 hover:bg-white/20 hover:scale-105 hover:border-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            >
              <div className="w-full h-full rounded-full overflow-hidden">
                {slides[index].type === "image" && (
                  <Image
                    src={slides[index].src || "/placeholder.svg"}
                    alt={slides[index].alt}
                    width={56}
                    height={56}
                    className="object-cover w-full h-full"
                  />
                )}
                {slides[index].type === "video" && (
                  <div className="w-full h-full flex items-center justify-center bg-[#4A9FD8]/30">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" className="w-6 h-6">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Enhanced Arrow Navigation */}
        <button
          onClick={() => goToSlide((currentSlide - 1 + slides.length) % slides.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-[#4A9FD8]/80 hover:scale-110 transition-all border border-white/20 z-10"
          aria-label="Previous slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 mx-auto"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => goToSlide((currentSlide + 1) % slides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-[#4A9FD8]/80 hover:scale-110 transition-all border border-white/20 z-10"
          aria-label="Next slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 mx-auto"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  )
}
