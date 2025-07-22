import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CallToActionSection() {
  return (
    <section className="py-16 px-4 md:px-8 bg-superio-blue text-white text-center">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-4">Find Your Dream Job Today!</h2>
        <p className="text-lg mb-8">Join thousands of satisfied users and take the next step in your career.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="#">
            <Button className="bg-white text-superio-blue hover:bg-gray-100 px-8 py-3 rounded-md text-lg font-semibold">
              Find Jobs
            </Button>
          </Link>
          <Link href="#">
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-superio-blue px-8 py-3 rounded-md text-lg font-semibold bg-transparent"
            >
              Post a Job
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
