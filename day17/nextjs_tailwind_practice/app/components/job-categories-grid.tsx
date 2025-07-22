import { JobCategoryCard } from "./job-category-card"
import { Palette, Code, Megaphone, Briefcase, LineChart, HeartPulse, Camera, BookOpen } from "lucide-react"

export function JobCategoriesGrid() {
  const categories = [
    { icon: Palette, title: "Graphics & Design", jobCount: 230 },
    { icon: Code, title: "Programming & Tech", jobCount: 250 },
    { icon: Megaphone, title: "Digital Marketing", jobCount: 180 },
    { icon: Briefcase, title: "Writing & Translation", jobCount: 120 },
    { icon: LineChart, title: "Finance & Accounting", jobCount: 90 },
    { icon: HeartPulse, title: "Health & Care", jobCount: 70 },
    { icon: Camera, title: "Photography", jobCount: 50 },
    { icon: BookOpen, title: "Education", jobCount: 110 },
  ]

  return (
    <section className="py-12 px-4 md:px-8 bg-gray-50">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <JobCategoryCard key={index} {...category} />
        ))}
      </div>
    </section>
  )
}
