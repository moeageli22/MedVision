import { Button } from "@/components/ui/button"
import { Users, GraduationCap, Sparkles } from "lucide-react"
import Link from "next/link"

export function MedVisionAd() {
  return (
    <div className="w-full bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-y border-primary/20 py-4 sm:py-6 md:py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="hidden sm:flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-primary/20 rounded-full flex-shrink-0">
              <GraduationCap className="w-6 h-6 md:w-8 md:h-8 text-primary" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-foreground mb-1 flex items-center gap-2 justify-center md:justify-start">
                <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                Join MedVision Community
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                Connect with aspiring medical students and get expert guidance
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full md:w-auto">
            <Button asChild size="sm" className="w-full sm:w-auto text-xs sm:text-sm md:text-base">
              <a
                href="https://chat.whatsapp.com/FOewvL5dZU71iJ2eT7c5Bm?mode=ems_copy_t"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                Join WhatsApp
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="sm"
              className="w-full sm:w-auto bg-transparent text-xs sm:text-sm md:text-base"
            >
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
