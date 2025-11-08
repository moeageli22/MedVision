"use client"

import { useEffect, useState } from "react"

const medicalImages = [
  "/medical-students-studying-together-in-library.jpg",
  "/doctor-with-stethoscope-medical-education.jpg",
  "/medical-books-and-study-materials-on-desk.jpg",
  "/university-lecture-hall-medical-students.jpg",
  "/anatomy-textbook-medical-education.jpg",
]

export function HeroBackground() {
  const [currentImage, setCurrentImage] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % medicalImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  if (!isLoaded) {
    return (
      <div className="fixed inset-0 -z-10 bg-background flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          <p className="text-muted-foreground">Loading MedVision...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 -z-10">
      {medicalImages.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? "opacity-10" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url('${image}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}
      <div className="absolute inset-0 bg-background/80" />
    </div>
  )
}
