import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Bookmark } from "lucide-react"

interface JobCardProps {
  logoSrc: string
  jobTitle: string
  companyName: string
  location: string
  jobType: "Full Time" | "Part Time" | "Remote" | "Internship"
  salary: string
}

export function JobCard({ logoSrc, jobTitle, companyName, location, jobType, salary }: JobCardProps) {
  const jobTypeColor = {
    "Full Time": "bg-green-100 text-green-600",
    "Part Time": "bg-yellow-100 text-yellow-600",
    Remote: "bg-blue-100 text-blue-600",
    Internship: "bg-purple-100 text-purple-600",
  }

  return (
    <Card className="p-6 flex flex-col gap-4 transition-all duration-300 hover:shadow-lg">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={logoSrc || "/placeholder.svg"}
            alt={`${companyName} logo`}
            width={56}
            height={56}
            className="rounded-lg object-contain"
          />
          <div>
            <h3 className="text-lg font-semibold">{jobTitle}</h3>
            <p className="text-sm text-gray-500">
              {companyName} - {location}
            </p>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-superio-blue">
          <Bookmark className="w-5 h-5" />
        </Button>
      </div>
      <div className="flex items-center gap-2 text-sm">
        <span className={`px-3 py-1 rounded-full font-medium ${jobTypeColor[jobType]}`}>{jobType}</span>
        <span className="text-gray-700 font-semibold">{salary}</span>
      </div>
      <Link href="#">
        <Button className="w-full bg-superio-blue hover:bg-superio-blue/90 text-white">Apply Now</Button>
      </Link>
    </Card>
  )
}
