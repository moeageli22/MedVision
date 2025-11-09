import { Button } from "@/components/ui/button"
import { Users, GraduationCap, Sparkles } from "lucide-react"
import Link from "next/link"

export function MedVisionAd() {
  return (
    <div className="w-full bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-y border-primary/20 py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full flex-shrink-0">
              <GraduationCap className="w-8 h-8 text-primary" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1 flex items-center gap-2 justify-center md:justify-start">
                <Sparkles className="w-5 h-5 text-primary" />
                Join MedVision Community
              </h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Connect with aspiring medical students and get expert guidance for your journey
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a
                href="https://chat.whatsapp.com/FOewvL5dZU71iJ2eT7c5Bm?mode=ems_copy_t"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Users className="w-4 h-4 mr-2" />
                Join WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
