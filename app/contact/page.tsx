import { Header } from "@/components/header"
import { Mail, Phone, Instagram, Linkedin } from "lucide-react"
import Image from "next/image"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="w-full pt-20">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hBcTQleKPxPLkBZhDjNUQlsKpdV8Si.png"
          alt="Contact Us"
          width={1920}
          height={400}
          className="w-full h-64 md:h-80 object-cover"
          priority
        />
      </div>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="p-8 bg-background rounded-lg shadow-sm border border-border">
              <Mail className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Email Us</h3>
              <a
                href="mailto:rasimizori@hotmail.co.uk"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                rasimizori@hotmail.co.uk
              </a>
            </div>

            <div className="p-8 bg-background rounded-lg shadow-sm border border-border">
              <Phone className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">WhatsApp Community</h3>
              <a
                href="https://chat.whatsapp.com/FOewvL5dZU71iJ2eT7c5Bm?mode=ems_copy_t"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors inline-block mt-2"
              >
                Join our community
              </a>
            </div>
          </div>

          <div className="bg-muted/30 rounded-lg p-8 text-center mb-8">
            <h3 className="text-xl font-bold text-foreground mb-4">Follow MedVision</h3>
            <div className="flex gap-6 justify-center">
              <a
                href="https://www.instagram.com/medvisionnn?igsh=ZzZ0a3hjYmN4YWhi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/company/medvisionn/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="bg-muted/30 rounded-lg p-8 text-center">
            <h3 className="text-xl font-bold text-foreground mb-4">Connect With Our Founders</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://www.linkedin.com/in/rasi-mizori/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                Rasi Mizori
              </a>
              <span className="hidden sm:inline text-muted-foreground">•</span>
              <a
                href="https://www.linkedin.com/in/mueed-ijaz-2b5a8024a/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                Mueed Ijaz
              </a>
              <span className="hidden sm:inline text-muted-foreground">•</span>
              <a
                href="https://www.linkedin.com/in/omar-ba-abbad-a38356206/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                Omar Ba-Abbad
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
