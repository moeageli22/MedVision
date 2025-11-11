import { Header } from "@/components/header"
import { MedVisionAd } from "@/components/medvision-ad"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle, Users, GraduationCap, Brain, Target, FileText } from "lucide-react"
import Image from "next/image"

const services = [
  {
    title: "Personal Statement Guidance",
    description:
      "Expert guidance on crafting compelling personal statements that showcase your passion for medicine and stand out to admissions teams.",
    icon: FileText,
    href: "/services/personal-statement",
    features: ["Statement Review", "Writing Tips", "Examples & Templates"],
  },
  {
    title: "UCAT Preparation",
    description:
      "Comprehensive guidance for the UCAT exam, including practice questions, strategies, and tips from high scorers.",
    icon: Brain,
    href: "/services/ucat",
    features: ["Practice Questions", "Expert Strategies", "Score Analysis"],
  },
  {
    title: "Interview Preparation",
    description: "Mock interviews, MMI practice, and expert feedback to help you ace your medical school interviews.",
    icon: MessageCircle,
    href: "/services/interviews",
    features: ["Mock Interviews", "MMI Practice", "Expert Feedback"],
  },
  {
    title: "Community Support",
    description: "Join our supportive community of aspiring medical students for peer support and shared resources.",
    icon: Users,
    href: "https://chat.whatsapp.com/FOewvL5dZU71iJ2eT7c5Bm?mode=ems_copy_t",
    external: true,
    features: ["Peer Support", "Resource Sharing", "Study Groups"],
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Header />

      <section className="relative pt-24 md:pt-32 pb-12 md:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Jbpp6kEkLlQU5SK5hN6qI1SX0xGZqc.png"
            alt="Medical students"
            fill
            className="object-cover opacity-10"
          />
        </div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block mb-4 md:mb-6">
              <GraduationCap className="w-12 h-12 md:w-16 md:h-16 text-primary mx-auto mb-3 md:mb-4" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6 text-balance px-4">
              Aspiring Medical Students 🏃‍♂️🚀
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed px-4">
              Resources and guidance for your medical/dental school journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
            {services.map((service) => (
              <div
                key={service.title}
                className="group p-6 md:p-8 bg-background rounded-xl shadow-lg border-2 border-border hover:border-primary hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-primary/10 rounded-full mb-4 md:mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 md:w-9 md:h-9 text-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">{service.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Target className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button asChild className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                  {service.external ? (
                    <a href={service.href} target="_blank" rel="noopener noreferrer">
                      Join Now
                    </a>
                  ) : (
                    <Link href={service.href}>Learn More</Link>
                  )}
                </Button>
              </div>
            ))}
          </div>

          <div className="bg-primary/5 rounded-2xl p-6 md:p-10 text-center border-2 border-primary/20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
              Ready to Start Your Journey? ⚡
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto">
              Join thousands of aspiring medical students who have successfully navigated their path to medical school
              with our guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="w-full sm:w-auto text-base md:text-lg px-6 md:px-8">
                <a
                  href="https://chat.whatsapp.com/FOewvL5dZU71iJ2eT7c5Bm?mode=ems_copy_t"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join Community
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto text-base md:text-lg px-6 md:px-8 bg-transparent"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <MedVisionAd />
    </main>
  )
}
