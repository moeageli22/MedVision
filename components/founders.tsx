import Image from "next/image"
import Link from "next/link"
import { Linkedin } from "lucide-react"

const founders = [
  {
    name: "Mr. Rasi Mizori",
    role: "Final-year medical student at King's College London",
    degree: "MSc Health and International Development",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gXd79gTR5dNTIEVdz0x59H3c0jhBIy.png",
    linkedin: "https://www.linkedin.com/in/rasi-mizori/",
  },
  {
    name: "Mr. Mueed Ijaz",
    role: "Final-year medical student at King's College London",
    degree: "MSc Global Health Policy",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cOqY1DsR1Ni1wPCIH92OTN0YVpE38s.png",
    linkedin: "https://www.linkedin.com/in/mueed-ijaz-2b5a8024a/",
  },
  {
    name: "Mr. Omar Ba-Abbad",
    role: "Final-year medical student at King's College London",
    degree: "MSc Global Health Policy",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-71QWZ4wiSBfatxr8ErDrcLeHVZBN24.png",
    linkedin: "https://www.linkedin.com/in/omar-ba-abbad-a38356206/",
  },
]

export function Founders() {
  return (
    <section id="founders" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Meet Our Founders</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Three final-year medical students from King's College London dedicated to widening participation in medicine
            and dentistry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {founders.map((founder) => (
            <div key={founder.name} className="group">
              <div className="bg-card rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
                {/* Photo container with fixed aspect ratio */}
                <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                  <Image
                    src={founder.image || "/placeholder.svg"}
                    alt={founder.name}
                    fill
                    className="object-cover object-center"
                  />

                  {/* University logos overlaid at bottom of photo */}
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    <div className="bg-white rounded-lg shadow-md p-2">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TCP13VxeXdB145sY90NeNijN3UGToj.png"
                        alt="King's College London"
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-2">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0YGeswMkUjj7P7B4BE3irUwGXO6o0J.png"
                        alt="LSE"
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Info section */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-foreground mb-2">{founder.name}</h3>
                  <p className="text-sm text-muted-foreground mb-1 leading-relaxed">{founder.role}</p>
                  <p className="text-sm font-medium text-primary mb-4">{founder.degree}</p>

                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-all text-sm font-medium"
                  >
                    <Linkedin className="w-4 h-4" />
                    Connect
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-foreground font-medium hover:underline text-lg"
          >
            Find out more about us →
          </Link>
        </div>
      </div>
    </section>
  )
}
