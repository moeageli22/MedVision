export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/medical-education-learning-abstract.jpg')] bg-cover bg-center" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Our Mission</h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty mb-8">
            MedVision is a non-profit organisation by three final-year medical students, aiming to widen participation
            and support students from socioeconomically diverse backgrounds with limited opportunities to study medicine
            and dentistry at prestigious universities.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
            We provide mentorship, UCAT guidance, interview preparation, and community support to help students gain
            places at top UK universities.
          </p>
        </div>
      </div>
    </section>
  )
}
