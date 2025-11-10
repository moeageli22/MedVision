"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { MedVisionAd } from "@/components/medvision-ad"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, BookOpen, Calendar, Users, Award, Bell } from "lucide-react"
import Image from "next/image"
import { subscribeToNewsletter } from "@/app/actions/newsletter"

export default function NewsletterPage() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsLoading(true)
      try {
        const result = await subscribeToNewsletter(email)

        if (result.success) {
          setIsSubscribed(true)
          setTimeout(() => {
            setIsSubscribed(false)
            setEmail("")
          }, 5000)
        } else {
          alert(result.error || "Failed to subscribe. Please try again.")
        }
      } catch (error) {
        console.error("Subscription error:", error)
        alert("Failed to subscribe. Please check your email and try again.")
      } finally {
        setIsLoading(false)
      }
    }
  }

  return (
    <main className="min-h-screen">
      <Header />

      <section className="relative pt-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="relative h-[300px] md:h-[400px] overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HpOIlXB2cKfqrN2DfqyR8fpVMOJ0so.png"
            alt="Medical students"
            fill
            className="object-cover opacity-15"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center max-w-3xl">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
              Stay Updated with MedVision
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty">
              Get exclusive medical school insights, UCAT tips, and interview preparation advice delivered to your inbox
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl shadow-lg border-2 border-primary/20 p-8 md:p-12 mb-12">
            {isSubscribed ? (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-3">Thank You for Subscribing!</h3>
                <p className="text-lg text-muted-foreground mb-2">
                  We've added <span className="font-semibold text-primary">{email}</span> to our newsletter.
                </p>
                <p className="text-muted-foreground">You'll receive updates and valuable content soon.</p>
              </div>
            ) : (
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 text-center">
                  Subscribe to Our Newsletter
                </h2>
                <p className="text-muted-foreground text-center mb-8">
                  Join hundreds of aspiring medical students receiving weekly insights
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 h-12 text-base"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isLoading}
                  />
                  <Button type="submit" size="lg" className="h-12 px-8" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <span className="animate-spin mr-2">⏳</span>
                        Subscribing...
                      </>
                    ) : (
                      <>
                        <Bell className="w-4 h-4 mr-2" />
                        Subscribe
                      </>
                    )}
                  </Button>
                </form>
              </div>
            )}
          </div>

          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">What You'll Receive</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="flex gap-4 p-6 bg-background rounded-xl shadow-sm border border-border hover:border-primary/30 transition-colors">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Weekly Study Tips</h3>
                <p className="text-sm text-muted-foreground">
                  Expert strategies for UCAT preparation and interview success
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-background rounded-xl shadow-sm border border-border hover:border-primary/30 transition-colors">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Important Deadlines</h3>
                <p className="text-sm text-muted-foreground">Never miss application deadlines and key dates</p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-background rounded-xl shadow-sm border border-border hover:border-primary/30 transition-colors">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Success Stories</h3>
                <p className="text-sm text-muted-foreground">Learn from students who successfully gained admission</p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-background rounded-xl shadow-sm border border-border hover:border-primary/30 transition-colors">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Exclusive Resources</h3>
                <p className="text-sm text-muted-foreground">Access to study materials and practice questions</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Recent Articles</h2>
          <div className="space-y-6">
            <article className="p-6 bg-background rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-foreground mb-2">5 Common UCAT Mistakes to Avoid</h3>
              <p className="text-muted-foreground mb-4">
                Learn about the most common pitfalls students face during UCAT preparation and how to avoid them for a
                higher score.
              </p>
              <span className="text-sm text-primary font-medium">Read more →</span>
            </article>

            <article className="p-6 bg-background rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-foreground mb-2">How to Structure Your Personal Statement</h3>
              <p className="text-muted-foreground mb-4">
                A comprehensive guide to writing a compelling medical school personal statement that stands out from
                thousands of applications.
              </p>
              <span className="text-sm text-primary font-medium">Read more →</span>
            </article>

            <article className="p-6 bg-background rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Understanding MMI: Tips from Recent Applicants
              </h3>
              <p className="text-muted-foreground mb-4">
                Current medical students share their experiences and proven strategies for excelling in Multiple Mini
                Interviews.
              </p>
              <span className="text-sm text-primary font-medium">Read more →</span>
            </article>
          </div>
        </div>
      </section>

      <MedVisionAd />
    </main>
  )
}
