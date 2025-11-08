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
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sections.map((section) => (
            <Link
              key={section.title}
              href={section.href}
              className="group p-8 bg-background rounded-lg shadow-sm border border-border hover:shadow-md transition-all duration-300"
            >
              <section.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {section.title}
              </h3>
              <p className="text-muted-foreground">{section.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
