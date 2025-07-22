import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { CalendarDays } from "lucide-react"

interface BlogPostCardProps {
  imageSrc: string
  title: string
  date: string
  description: string
}

export function BlogPostCard({ imageSrc, title, date, description }: BlogPostCardProps) {
  return (
    <Card className="overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg">
      <Link href="#">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          width={400}
          height={250}
          className="w-full h-48 object-cover"
        />
      </Link>
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <CalendarDays className="w-4 h-4 mr-1" />
          <span>{date}</span>
        </div>
        <Link href="#">
          <h3 className="text-xl font-semibold mb-2 hover:text-superio-blue transition-colors duration-200">{title}</h3>
        </Link>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{description}</p>
        <Link href="#" className="text-superio-blue font-semibold hover:underline">
          Read More &rarr;
        </Link>
      </div>
    </Card>
  )
}
