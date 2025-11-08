import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function NewsletterPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Stay Updated</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Subscribe to our newsletter for the latest tips, resources, and updates on medical school applications.
            </p>
          </div>

          <div className="bg-background rounded-lg shadow-sm border border-border p-8 mb-12">
            <form className="flex flex-col sm:flex-row gap-4">
              <Input type="email" placeholder="Enter your email address" className="flex-1" />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-foreground mb-4">What You'll Receive</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-8">
              <li>Weekly tips for UCAT and interview preparation</li>
              <li>Updates on medical school application deadlines</li>
              <li>Success stories from current medical students</li>
              <li>Exclusive resources and study materials</li>
              <li>Information about upcoming workshops and events</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4">Recent Articles</h2>
            <div className="space-y-6">
              <article className="border-b border-border pb-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">5 Common UCAT Mistakes to Avoid</h3>
                <p className="text-muted-foreground">
                  Learn about the most common pitfalls students face during UCAT preparation and how to avoid them...
                </p>
              </article>
              <article className="border-b border-border pb-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">How to Structure Your Personal Statement</h3>
                <p className="text-muted-foreground">
                  A comprehensive guide to writing a compelling medical school personal statement that stands out...
                </p>
              </article>
              <article className="pb-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Understanding MMI: Tips from Recent Applicants
                </h3>
                <p className="text-muted-foreground">
                  Current medical students share their experiences and advice for Multiple Mini Interviews...
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
