import Link from "next/link"
import { Mail, Linkedin, Instagram } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-black text-white border-t border-medvision-blue/20">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/407489151_864326991900661_8716464667277782353_n-VLtgUsiwVPE8ZaTnrEEd19bbDkP1NS.jpg"
                alt="MedVision Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              {/* Updated heading color */}
              <h3 className="text-xl font-bold text-medvision-blue">MedVision</h3>
            </div>
            <p className="text-sm text-gray-400">Empowering aspiring medical students to achieve their dreams.</p>
          </div>

          {/* Quick Links */}
          <div>
            {/* Updated heading color */}
            <h4 className="font-semibold mb-4 text-lg text-medvision-blue">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Aspiring Medical Students
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-400 hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            {/* Updated heading color */}
            <h4 className="font-semibold mb-4 text-lg text-medvision-blue">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/newsletter" className="text-gray-400 hover:text-white transition-colors">
                  Newsletter
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="https://chat.whatsapp.com/JxF84uZs73cDbJdpLB3Ujp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  WhatsApp Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            {/* Updated heading color */}
            <h4 className="font-semibold mb-4 text-lg text-medvision-blue">Connect With Us</h4>
            <div className="space-y-3">
              <a
                href="mailto:rasimizori@hotmail.co.uk"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-medvision-blue transition-colors"
              >
                <Mail className="w-4 h-4" />
                rasimizori@hotmail.co.uk
              </a>
              <div className="flex gap-4 pt-2">
                <a
                  href="https://www.linkedin.com/company/medvisionn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-medvision-blue transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/medvisionn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-medvision-blue transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        {/* Updated border color */}
        <div className="mt-8 pt-8 border-t border-medvision-blue/20">
          <div className="flex flex-col sm:flex-row justify-center items-center text-sm text-gray-400">
            <p>&copy; 2025 MedVision. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
