import Image from "next/image"
import Link from "next/link"
import { Linkedin } from "lucide-react"

const founders = [
  {
    name: "Mr. Rasi Mizori",
    role: "Final-year medical student at King's College London",
    degree: "MSc Health and International Development",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-IJH7sa4glNQukQmS6WrrOWdlafU3uc.png",
    linkedin: "https://www.linkedin.com/in/rasi-mizori/",
  },
  {
    name: "Mr. Mueed Ijaz",
    role: "Final-year medical student at King's College London",
    degree: "MSc Global Health Policy",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1emzDbdyfuETrEIOoVMuDdsnokGhB7.png",
    linkedin: "https://www.linkedin.com/in/mueed-ijaz-2b5a8024a/",
  },
  {
    name: "Mr. Omar Ba-Abbad",
    role: "Final-year medical student at King's College London",
    degree: "MSc Global Health Policy",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-v1tPK2lSAkaiMywv7A0FIvNddoCQho.png",
    linkedin: "https://www.linkedin.com/in/omar-ba-abbad-a38356206/",
  },
]

export function Founders() {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Meet Our Founders</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Three final-year medical students from King's College London dedicated to widening participation in medicine
            and dentistry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {founders.map((founder) => (
            <div key={founder.name} className="flex flex-col items-center text-center">
              <div className="relative mb-6">
                <Image
                  src={founder.image || "/placeholder.svg"}
                  alt={founder.name}
                  width={280}
                  height={350}
                  className="rounded-lg shadow-lg object-cover h-[350px] w-[280px]"
                />
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex gap-3">
                  <div className="bg-white rounded-lg shadow-md p-2">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TCP13VxeXdB145sY90NeNijN3UGToj.png"
                      alt="King's College London"
                      width={50}
                      height={50}
                      className="object-contain"
                    />
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-2">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0YGeswMkUjj7P7B4BE3irUwGXO6o0J.png"
                      alt="LSE"
                      width={50}
                      height={50}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 mt-6">{founder.name}</h3>
              <p className="text-sm text-muted-foreground mb-1">{founder.role}</p>
              <p className="text-sm font-medium text-primary mb-3">{founder.degree}</p>
              <a
                href={founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary hover:underline transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                Connect
              </a>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/about" className="inline-flex items-center text-primary font-medium hover:underline text-lg">
            Find out more about us →
          </Link>
        </div>
      </div>
    </section>
  )
}
