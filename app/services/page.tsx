import { Header } from "@/components/header"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen, MessageCircle, Users } from "lucide-react"

const services = [
  {
    title: "UCAT Preparation",
    description:
      "Comprehensive guidance for the UCAT exam, including practice questions, strategies, and tips from high scorers.",
    icon: BookOpen,
    href: "/services/ucat",
  },
  {
    title: "Interview Preparation",
    description: "Mock interviews, MMI practice, and expert feedback to help you ace your medical school interviews.",
    icon: MessageCircle,
    href: "/services/interviews",
  },
  {
    title: "WhatsApp Groups",
    description: "Join our supportive community of aspiring medical students for peer support and shared resources.",
    icon: Users,
    href: "https://chat.whatsapp.com/FOewvL5dZU71iJ2eT7c5Bm?mode=ems_copy_t",
    external: true,
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Aspiring Medical Students
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              We provide comprehensive support to help you succeed in your medical school application journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="p-8 bg-background rounded-lg shadow-sm border border-border hover:shadow-md transition-all duration-300"
              >
                <service.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <Button asChild variant="outline">
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
        </div>
      </section>
    </main>
  )
}
