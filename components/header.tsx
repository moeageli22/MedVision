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
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#0A2540] border-b border-white/10 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2 md:gap-3">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/407489151_864326991900661_8716464667277782353_n-mTrUn7q66NrNm9kAZsJJ3wtAuvcius.jpg"
              alt="MedVision Logo"
              width={32}
              height={32}
              className="rounded-lg sm:w-[40px] sm:h-[40px] md:w-[50px] md:h-[50px]"
            />
            <span className="text-lg sm:text-xl md:text-2xl font-bold text-white drop-shadow-lg">MedVision</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <Link href="/" className="text-sm font-medium text-white/90 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium text-white/90 hover:text-white transition-colors">
              About
            </Link>
            <Link href="/services" className="text-sm font-medium text-white/90 hover:text-white transition-colors">
              Aspiring Medical Students
            </Link>
            <Link href="/testimonials" className="text-sm font-medium text-white/90 hover:text-white transition-colors">
              Testimonials
            </Link>
            <Link href="/newsletter" className="text-sm font-medium text-white/90 hover:text-white transition-colors">
              Newsletter
            </Link>
            <Link href="/contact" className="text-sm font-medium text-white/90 hover:text-white transition-colors">
              Contact
            </Link>
          </nav>

          <Button asChild className="hidden lg:flex shadow-lg bg-primary hover:bg-primary/90">
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
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#0A2540] border-t border-white/10">
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
            <Button asChild className="shadow-lg bg-primary hover:bg-primary/90 mt-2">
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
