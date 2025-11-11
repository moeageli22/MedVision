import { Header } from "@/components/header"
import { MedVisionAd } from "@/components/medvision-ad"
import { Mail, Phone, Instagram, Linkedin, Send, MessageCircle } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />

      <div className="relative w-full pt-20">
        <div className="relative min-h-[300px] md:min-h-[400px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#4A9FD8]/20 via-black to-[#2B7FB5]/20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(74,159,216,0.1),transparent_50%)]" />

          <div className="relative flex flex-col items-center justify-center text-center px-4 py-16 md:py-24">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
              Get In Touch <MessageCircle className="inline-block ml-4 text-[#4A9FD8]" />
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl animate-fade-in-delay">
              Have questions about medical school applications? We're here to help you succeed on your journey.
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          {/* Main Contact Methods */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Email Card */}
            <div className="group relative p-8 md:p-10 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-[#4A9FD8]/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(74,159,216,0.3)]">
              <div className="absolute top-8 right-8 w-16 h-16 bg-[#4A9FD8]/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Mail className="w-8 h-8 text-[#4A9FD8]" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-3">Email Us 📧</h3>
              <p className="text-white/70 mb-6 text-lg">Get a response within 24 hours</p>
              <a
                href="mailto:rasimizori@hotmail.co.uk"
                className="inline-flex items-center gap-2 text-[#4A9FD8] hover:text-[#2B7FB5] transition-colors font-medium text-lg group-hover:scale-105 transition-transform"
              >
                rasimizori@hotmail.co.uk
                <Send className="w-5 h-5" />
              </a>
            </div>

            {/* WhatsApp Community Card */}
            <div className="group relative p-8 md:p-10 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-green-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]">
              <div className="absolute top-8 right-8 w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Phone className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-3">WhatsApp Community 💬</h3>
              <p className="text-white/70 mb-6 text-lg">Join our supportive community of aspiring medics</p>
              <a
                href="https://chat.whatsapp.com/FOewvL5dZU71iJ2eT7c5Bm?mode=ems_copy_t"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-green-500/50 group-hover:scale-105 transition-transform"
              >
                Join Community
              </a>
            </div>
          </div>

          <div className="relative p-10 md:p-12 bg-gradient-to-br from-[#4A9FD8]/10 via-transparent to-[#2B7FB5]/10 rounded-3xl mb-16 border border-[#4A9FD8]/20 backdrop-blur-sm">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(74,159,216,0.1),transparent_70%)] rounded-3xl" />
            <div className="relative">
              <h3 className="text-4xl font-bold text-white mb-4 text-center">Follow MedVision 🚀</h3>
              <p className="text-white/70 text-center mb-10 text-lg max-w-2xl mx-auto">
                Stay updated with our latest content, tips, and opportunities for aspiring medical students
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a
                  href="https://www.instagram.com/medvisionnn?igsh=ZzZ0a3hjYmN4YWhi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-10 py-5 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:border-pink-500/50 shadow-lg hover:shadow-pink-500/30 transition-all duration-300 text-white font-semibold group min-w-[200px] justify-center"
                >
                  <Instagram className="w-7 h-7 text-pink-400 group-hover:scale-110 transition-transform" />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://www.linkedin.com/company/medvisionn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-10 py-5 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:border-[#4A9FD8]/50 shadow-lg hover:shadow-[#4A9FD8]/30 transition-all duration-300 text-white font-semibold group min-w-[200px] justify-center"
                >
                  <Linkedin className="w-7 h-7 text-[#4A9FD8] group-hover:scale-110 transition-transform" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          <div className="p-10 md:p-12 bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10">
            <h3 className="text-4xl font-bold text-white mb-4 text-center">Connect With Our Founders ⚡</h3>
            <p className="text-white/70 text-center mb-12 text-lg max-w-2xl mx-auto">
              Get personalized guidance from experienced medical students who've been through the journey
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <a
                href="https://www.linkedin.com/in/rasi-mizori/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-4 p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-[#4A9FD8]/50 shadow-lg hover:shadow-[0_0_20px_rgba(74,159,216,0.3)] transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-[#4A9FD8]/20 rounded-full flex items-center justify-center group-hover:bg-[#4A9FD8]/30 transition-all group-hover:scale-110">
                  <Linkedin className="w-8 h-8 text-[#4A9FD8]" />
                </div>
                <span className="font-bold text-xl text-white">Rasi Mizori</span>
                <span className="text-white/60 text-sm">King's College London</span>
              </a>
              <a
                href="https://www.linkedin.com/in/mueed-ijaz-2b5a8024a/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-4 p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-[#4A9FD8]/50 shadow-lg hover:shadow-[0_0_20px_rgba(74,159,216,0.3)] transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-[#4A9FD8]/20 rounded-full flex items-center justify-center group-hover:bg-[#4A9FD8]/30 transition-all group-hover:scale-110">
                  <Linkedin className="w-8 h-8 text-[#4A9FD8]" />
                </div>
                <span className="font-bold text-xl text-white">Mueed Ijaz</span>
                <span className="text-white/60 text-sm">Imperial College London</span>
              </a>
              <a
                href="https://www.linkedin.com/in/omar-ba-abbad-a38356206/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-4 p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-[#4A9FD8]/50 shadow-lg hover:shadow-[0_0_20px_rgba(74,159,216,0.3)] transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-[#4A9FD8]/20 rounded-full flex items-center justify-center group-hover:bg-[#4A9FD8]/30 transition-all group-hover:scale-110">
                  <Linkedin className="w-8 h-8 text-[#4A9FD8]" />
                </div>
                <span className="font-bold text-xl text-white">Omar Ba-Abbad</span>
                <span className="text-white/60 text-sm">Queen Mary University</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <MedVisionAd />
    </main>
  )
}
