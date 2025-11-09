import { Header } from "@/components/header"
import { MedVisionAd } from "@/components/medvision-ad"
import { Mail, Phone, Instagram, Linkedin, Send } from "lucide-react"
import Image from "next/image"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Header />

      <div className="relative w-full pt-20">
        <div className="relative h-[400px] md:h-[500px] overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hBcTQleKPxPLkBZhDjNUQlsKpdV8Si.png"
            alt="Contact Us"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-900/80" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Get In Touch</h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl">
              Have questions about medical school applications? We're here to help you succeed.
            </p>
          </div>
        </div>
      </div>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Email Card */}
            <div className="group relative p-8 bg-white rounded-xl shadow-lg border-2 border-slate-100 hover:border-primary/30 transition-all duration-300 hover:shadow-xl">
              <div className="absolute top-8 right-8 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Email Us</h3>
              <p className="text-slate-600 mb-4">Send us an email anytime</p>
              <a
                href="mailto:rasimizori@hotmail.co.uk"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium text-lg"
              >
                rasimizori@hotmail.co.uk
                <Send className="w-4 h-4" />
              </a>
            </div>

            {/* WhatsApp Card */}
            <div className="group relative p-8 bg-white rounded-xl shadow-lg border-2 border-slate-100 hover:border-primary/30 transition-all duration-300 hover:shadow-xl">
              <div className="absolute top-8 right-8 w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center">
                <Phone className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">WhatsApp Community</h3>
              <p className="text-slate-600 mb-4">Join our supportive community</p>
              <a
                href="https://chat.whatsapp.com/FOewvL5dZU71iJ2eT7c5Bm?mode=ems_copy_t"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
              >
                Join Community
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-10 mb-12 border border-primary/20">
            <h3 className="text-3xl font-bold text-slate-900 mb-3 text-center">Follow MedVision</h3>
            <p className="text-slate-600 text-center mb-8">Stay updated with our latest content and opportunities</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="https://www.instagram.com/medvisionnn?igsh=ZzZ0a3hjYmN4YWhi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-slate-900 font-medium group"
              >
                <Instagram className="w-6 h-6 text-pink-600 group-hover:scale-110 transition-transform" />
                <span>Instagram</span>
              </a>
              <a
                href="https://www.linkedin.com/company/medvisionn/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-slate-900 font-medium group"
              >
                <Linkedin className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl p-10 border border-slate-200">
            <h3 className="text-3xl font-bold text-slate-900 mb-3 text-center">Connect With Our Founders</h3>
            <p className="text-slate-600 text-center mb-8">
              Get personalized guidance from experienced medical students
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a
                href="https://www.linkedin.com/in/rasi-mizori/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 hover:border-primary/30 group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Linkedin className="w-6 h-6 text-primary" />
                </div>
                <span className="font-semibold text-slate-900">Rasi Mizori</span>
              </a>
              <a
                href="https://www.linkedin.com/in/mueed-ijaz-2b5a8024a/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 hover:border-primary/30 group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Linkedin className="w-6 h-6 text-primary" />
                </div>
                <span className="font-semibold text-slate-900">Mueed Ijaz</span>
              </a>
              <a
                href="https://www.linkedin.com/in/omar-ba-abbad-a38356206/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 hover:border-primary/30 group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Linkedin className="w-6 h-6 text-primary" />
                </div>
                <span className="font-semibold text-slate-900">Omar Ba-Abbad</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <MedVisionAd />
    </main>
  )
}
