import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

export function TestimonialSection() {
  const testimonials = [
    {
      name: "John Doe",
      title: "Product Manager",
      avatar: "/placeholder.svg?height=64&width=64",
      rating: 5,
      quote:
        "This platform helped me find my dream job in just a few weeks! The interface is user-friendly and the job listings are always up-to-date. Highly recommended!",
    },
    {
      name: "Jane Smith",
      title: "Software Engineer",
      avatar: "/placeholder.svg?height=64&width=64",
      rating: 5,
      quote:
        "As an employer, finding qualified candidates used to be a challenge. Superio made it incredibly easy to connect with top talent. A game-changer for our hiring process.",
    },
    {
      name: "David Lee",
      title: "Marketing Specialist",
      avatar: "/placeholder.svg?height=64&width=64",
      rating: 4,
      quote:
        "The variety of jobs available is impressive. I appreciate the detailed descriptions and the easy application process. Superio is my go-to for career opportunities.",
    },
  ]

  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-2">What Our Customers Say</h2>
        <p className="text-gray-600 text-lg">Hear from those who have found success with us.</p>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="p-6 flex flex-col items-center text-center shadow-md">
            <Avatar className="w-16 h-16 mb-4">
              <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
              <AvatarFallback>
                {testimonial.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="flex mb-2">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
            <h3 className="text-lg font-semibold">{testimonial.name}</h3>
            <p className="text-sm text-gray-500">{testimonial.title}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}
