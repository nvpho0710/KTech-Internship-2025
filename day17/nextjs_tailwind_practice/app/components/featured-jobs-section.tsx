import { Button } from "@/components/ui/button"
import { JobCard } from "./job-card"

export function FeaturedJobsSection() {
  const featuredJobs = [
    {
      logoSrc: "/placeholder.svg?height=56&width=56",
      jobTitle: "Product Designer",
      companyName: "Google Inc.",
      location: "London, UK",
      jobType: "Full Time",
      salary: "$90k - $120k",
    },
    {
      logoSrc: "/placeholder.svg?height=56&width=56",
      jobTitle: "Software Engineer",
      companyName: "Microsoft",
      location: "Redmond, WA",
      jobType: "Full Time",
      salary: "$110k - $150k",
    },
    {
      logoSrc: "/placeholder.svg?height=56&width=56",
      jobTitle: "Marketing Specialist",
      companyName: "Facebook",
      location: "Menlo Park, CA",
      jobType: "Part Time",
      salary: "$60k - $80k",
    },
    {
      logoSrc: "/placeholder.svg?height=56&width=56",
      jobTitle: "Data Scientist",
      companyName: "Amazon",
      location: "Seattle, WA",
      jobType: "Remote",
      salary: "$100k - $130k",
    },
    {
      logoSrc: "/placeholder.svg?height=56&width=56",
      jobTitle: "UX Researcher",
      companyName: "Apple",
      location: "Cupertino, CA",
      jobType: "Full Time",
      salary: "$95k - $125k",
    },
    {
      logoSrc: "/placeholder.svg?height=56&width=56",
      jobTitle: "DevOps Engineer",
      companyName: "Netflix",
      location: "Los Gatos, CA",
      jobType: "Full Time",
      salary: "$120k - $160k",
    },
  ]

  return (
    <section className="py-16 px-4 md:px-8">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-2">Featured Jobs</h2>
        <p className="text-gray-600 text-lg">Know your worth and find the job that qualifies your life.</p>
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredJobs.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </div>
      <div className="text-center mt-12">
        <Button className="bg-superio-blue hover:bg-superio-blue/90 text-white px-8 py-3 rounded-md">
          Load More Listing
        </Button>
      </div>
    </section>
  )
}
