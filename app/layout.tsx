import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MedVision - Empowering Future Doctors",
  description:
    "MedVision is a non-profit organisation supporting students from diverse backgrounds to study medicine and dentistry at prestigious universities.",
  generator: "v0.app",
  openGraph: {
    title: "MedVision - Empowering Future Doctors",
    description:
      "MedVision is a non-profit organisation supporting students from diverse backgrounds to study medicine and dentistry at prestigious universities.",
    url: "https://medvisionn.vercel.app",
    siteName: "MedVision",
    images: [
      {
        url: "/medvision-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MedVision Logo",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MedVision - Empowering Future Doctors",
    description:
      "MedVision is a non-profit organisation supporting students from diverse backgrounds to study medicine and dentistry at prestigious universities.",
    images: ["/medvision-og-image.jpg"],
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
