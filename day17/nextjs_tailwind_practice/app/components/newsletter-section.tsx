import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function NewsletterSection() {
  return (
    <section className="py-16 px-4 md:px-8 bg-gray-100 text-center">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-4xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-lg text-gray-600 mb-8">
          Get the latest job opportunities, career tips, and industry news delivered straight to your inbox.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Your email address"
            className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:ring-superio-blue focus:border-superio-blue"
          />
          <Button className="bg-superio-blue hover:bg-superio-blue/90 text-white px-6 py-3 rounded-md text-lg font-semibold">
            Subscribe
          </Button>
        </div>
      </div>
    </section>
  )
}
