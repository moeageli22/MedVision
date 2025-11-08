import Image from "next/image"

export function HeroSection() {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl text-center">
        <div className="flex items-center justify-center gap-6 mb-8">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/407489151_864326991900661_8716464667277782353_n-mTrUn7q66NrNm9kAZsJJ3wtAuvcius.jpg"
            alt="MedVision Logo"
            width={120}
            height={120}
            className="rounded-2xl"
          />
          <h1 className="text-5xl md:text-7xl font-bold text-foreground">MedVision</h1>
        </div>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed text-balance">
          MedVision is a non-profit organisation by three final-year medical students, aiming to widen participation and
          support students from socioeconomically diverse backgrounds with limited opportunities to study medicine and
          dentistry at prestigious universities
        </p>
      </div>
    </section>
  )
}
