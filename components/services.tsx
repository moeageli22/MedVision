import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, MessageSquare, Users } from "lucide-react"

const services = [
  {
    title: "UCAT Guidance",
    description:
      "Our UCAT resources and mentoring sessions help you master key strategies, manage time effectively, and boost your confidence for test day.",
    icon: BookOpen,
    link: "https://chat.whatsapp.com/FOewvL5dZU71iJ2eT7c5Bm?mode=ems_copy_t",
    buttonText: "Join UCAT WhatsApp Group",
  },
  {
    title: "Interview Guidance",
    description:
      "We offer insights, mock questions, and personalised feedback to help you perform your best in medical and dental interviews.",
    icon: MessageSquare,
    link: "#contact",
    buttonText: "Learn More",
  },
  {
    title: "WhatsApp Community",
    description:
      "Join our growing community of aspiring medical students to connect, share advice, and get direct guidance from the MedVision team.",
    icon: Users,
    link: "https://chat.whatsapp.com/FOewvL5dZU71iJ2eT7c5Bm?mode=ems_copy_t",
    buttonText: "Join the 2026 Group",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/study-medical-student-abstract.jpg')] bg-cover bg-center" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Aspiring Medical Students</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Comprehensive support for your medical school journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                <Button className="w-full gradient-button" asChild>
                  <a
                    href={service.link}
                    target={service.link.startsWith("http") ? "_blank" : undefined}
                    rel={service.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {service.buttonText}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
