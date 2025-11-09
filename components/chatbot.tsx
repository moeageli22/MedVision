"use client"

import { useState } from "react"
import { X } from "lucide-react"
import Link from "next/link"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)

  const navigationOptions = [
    { label: "About", href: "/about", description: "Learn about our mission" },
    { label: "Aspiring Medical Students", href: "/services", description: "Explore our services" },
    { label: "Newsletter", href: "/newsletter", description: "Stay updated" },
    { label: "Contact", href: "/contact", description: "Get in touch" },
  ]

  return (
    <>
      <div className="fixed bottom-4 right-4 z-[9999] flex flex-col items-end gap-2 pointer-events-none">
        {!isOpen && (
          <div className="relative rounded-xl bg-gray-900 px-3 py-2 text-white shadow-lg max-w-[180px] pointer-events-auto">
            <p className="text-xs font-medium">Hi, I'm MedVision Bot! Do you need help?</p>
            <div className="absolute -bottom-1.5 right-6 h-0 w-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900"></div>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg transition-all hover:scale-110 hover:shadow-xl pointer-events-auto"
          aria-label="Toggle chatbot"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-gray-700" />
          ) : (
            <div className="h-full w-full">
              <DotLottieReact
                src="https://lottie.host/3ac3f155-c554-4e98-a402-3164b3158d88/0bUYIfWWgi.lottie"
                loop
                autoplay
                className="h-full w-full"
              />
            </div>
          )}
        </button>
      </div>

      {isOpen && (
        <div className="fixed bottom-24 right-4 z-[9999] w-[calc(100vw-2rem)] max-w-sm rounded-lg bg-white shadow-2xl">
          <div className="rounded-t-lg bg-gradient-to-r from-blue-600 to-blue-800 px-4 py-3">
            <h3 className="text-base font-semibold text-white">MedVision Assistant</h3>
            <p className="text-xs text-blue-100">Need help?</p>
          </div>

          <div className="p-4">
            <div className="mb-3 rounded-lg bg-blue-50 p-3">
              <p className="text-xs text-gray-800">
                <span className="font-semibold">Welcome to MedVision!</span>
                <br />
                How can we help you today? Choose an option below:
              </p>
            </div>

            <div className="space-y-2">
              {navigationOptions.map((option) => (
                <Link
                  key={option.href}
                  href={option.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-lg border border-gray-200 p-2.5 transition-all hover:border-blue-500 hover:bg-blue-50"
                >
                  <div className="text-sm font-medium text-gray-900">{option.label}</div>
                  <div className="text-xs text-gray-600">{option.description}</div>
                </Link>
              ))}
            </div>

            <div className="mt-3 rounded-lg bg-gray-50 p-2.5">
              <p className="text-xs text-gray-600">
                Need more help? Contact us at{" "}
                <a href="mailto:rasimizori@hotmail.co.uk" className="text-blue-600 hover:underline">
                  rasimizori@hotmail.co.uk
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
