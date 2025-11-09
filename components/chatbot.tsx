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
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {!isOpen && (
          <div className="relative animate-bounce rounded-2xl bg-gray-900 px-6 py-4 text-white shadow-lg">
            <p className="text-base font-medium">Hi, I'm MedVision Bot! Do you need help?</p>
            {/* Speech bubble pointer pointing down to bot */}
            <div className="absolute -bottom-2 right-8 h-0 w-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-gray-900"></div>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-32 w-32 items-center justify-center rounded-full bg-white shadow-lg transition-all hover:scale-110 hover:shadow-xl"
          aria-label="Toggle chatbot"
        >
          {isOpen ? (
            <X className="h-10 w-10 text-gray-700" />
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
        <div className="fixed bottom-44 right-6 z-50 w-96 rounded-lg bg-white shadow-2xl md:w-[450px]">
          {/* Header */}
          <div className="rounded-t-lg bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-4">
            <h3 className="text-lg font-semibold text-white">MedVision Assistant</h3>
            <p className="text-sm text-blue-100">Need help?</p>
          </div>

          {/* Chat Content */}
          <div className="p-6">
            {/* Welcome Message */}
            <div className="mb-4 rounded-lg bg-blue-50 p-4">
              <p className="text-sm text-gray-800">
                <span className="font-semibold">Welcome to MedVision!</span>
                <br />
                How can we help you today? Choose an option below:
              </p>
            </div>

            {/* Navigation Options */}
            <div className="space-y-2">
              {navigationOptions.map((option) => (
                <Link
                  key={option.href}
                  href={option.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-lg border border-gray-200 p-3 transition-all hover:border-blue-500 hover:bg-blue-50"
                >
                  <div className="font-medium text-gray-900">{option.label}</div>
                  <div className="text-sm text-gray-600">{option.description}</div>
                </Link>
              ))}
            </div>

            {/* Additional Help Text */}
            <div className="mt-4 rounded-lg bg-gray-50 p-3">
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
