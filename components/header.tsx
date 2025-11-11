"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-xl shadow-2xl border-b border-medvision-blue/30"
          : "bg-gradient-to-b from-black/90 via-black/70 to-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">
          <Link href="/" className="flex items-center gap-2 md:gap-3 group">
            <div className="relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/407489151_864326991900661_8716464667277782353_n-GlNlaW1dzP5B2Th3aaHXtoymClLkQg.jpg"
                alt="MedVision Logo"
                width={32}
                height={32}
                className="rounded-lg sm:w-[40px] sm:h-[40px] md:w-[50px] md:h-[50px] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(74,159,216,0.6)]"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg sm:text-xl md:text-2xl font-bold animate-color-cycle transition-all duration-300 group-hover:scale-105">
                MedVision
              </span>
              <span className="text-lg sm:text-xl md:text-2xl">🚀</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <Link
              href="/"
              className="text-sm font-medium text-white/90 hover:text-medvision-blue transition-all duration-300 hover:scale-105 relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-medvision transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-white/90 hover:text-medvision-blue transition-all duration-300 hover:scale-105 relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-medvision transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium text-white/90 hover:text-medvision-blue transition-all duration-300 hover:scale-105 relative group"
            >
              Aspiring Medical Students
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-medvision transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/testimonials"
              className="text-sm font-medium text-white/90 hover:text-medvision-blue transition-all duration-300 hover:scale-105 relative group"
            >
              Testimonials
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-medvision transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/newsletter"
              className="text-sm font-medium text-white/90 hover:text-medvision-blue transition-all duration-300 hover:scale-105 relative group"
            >
              Newsletter
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-medvision transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-white/90 hover:text-medvision-blue transition-all duration-300 hover:scale-105 relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-medvision transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          <Button
            asChild
            className="hidden lg:flex shadow-lg bg-gradient-medvision text-white hover:shadow-[0_0_30px_rgba(74,159,216,0.6)] font-semibold transition-all duration-300 hover:scale-105"
          >
            <a
              href="https://chat.whatsapp.com/FOewvL5dZU71iJ2eT7c5Bm?mode=ems_copy_t"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Community
            </a>
          </Button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-all"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-medvision-blue/30">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link
              href="/"
              className="text-sm font-medium text-white/90 hover:text-white transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-white/90 hover:text-white transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium text-white/90 hover:text-white transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Aspiring Medical Students
            </Link>
            <Link
              href="/testimonials"
              className="text-sm font-medium text-white/90 hover:text-white transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="/newsletter"
              className="text-sm font-medium text-white/90 hover:text-white transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Newsletter
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-white/90 hover:text-white transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Button
              asChild
              className="shadow-lg bg-white text-medvision-blue-dark hover:bg-white/90 font-semibold mt-2"
            >
              <a
                href="https://chat.whatsapp.com/FOewvL5dZU71iJ2eT7c5Bm?mode=ems_copy_t"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Community
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
