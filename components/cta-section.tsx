import Link from "next/link"
import { GraduationCap, MessageSquare, FileText } from "lucide-react"

const sections = [
  {
    title: "Aspiring Medical Students",
    description: "Resources and guidance for your medical school journey",
    icon: GraduationCap,
    href: "/services",
  },
  {
    title: "Testimonials",
    description: "Success stories from students we've helped",
    icon: MessageSquare,
    href: "/testimonials",
  },
  {
    title: "Newsletter",
    description: "Stay updated with the latest tips and resources",
    icon: FileText,
    href: "/newsletter",
  },
]

export function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Explore Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to succeed in your journey to medical school
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sections.map((section) => (
            <Link
              key={section.title}
              href={section.href}
              className="group p-8 bg-card rounded-xl shadow-md border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <section.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {section.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{section.description}</p>
              <div className="mt-4 text-primary font-medium group-hover:translate-x-2 transition-transform inline-block">
                Learn more →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
