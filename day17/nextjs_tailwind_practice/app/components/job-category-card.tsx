import { Card } from "@/components/ui/card"
import Link from "next/link"
import type { LucideIcon } from "lucide-react"

interface JobCategoryCardProps {
  icon: LucideIcon
  title: string
  jobCount: number
}

export function JobCategoryCard({ icon: Icon, title, jobCount }: JobCategoryCardProps) {
  return (
    <Link href="#" className="block">
      <Card className="flex flex-col items-center p-6 text-center transition-all duration-300 hover:shadow-lg hover:border-superio-blue group">
        <div className="p-4 mb-4 rounded-full bg-blue-50 group-hover:bg-superio-blue transition-colors duration-300">
          <Icon className="w-8 h-8 text-superio-blue group-hover:text-white transition-colors duration-300" />
        </div>
        <h3 className="text-lg font-semibold mb-1 group-hover:text-superio-blue transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-gray-500">{jobCount} Jobs</p>
      </Card>
    </Link>
  )
}
