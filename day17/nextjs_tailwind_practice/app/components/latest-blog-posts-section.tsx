import { BlogPostCard } from "./blog-post-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function LatestBlogPostsSection() {
  const blogPosts = [
    {
      imageSrc: "/placeholder.svg?height=250&width=400",
      title: "The Future of Remote Work: Trends and Predictions",
      date: "July 15, 2025",
      description:
        "Remote work has transformed the global workforce. Discover the latest trends, challenges, and what to expect in the coming years.",
    },
    {
      imageSrc: "/placeholder.svg?height=250&width=400",
      title: "Top 10 Skills Employers Are Looking For in 2025",
      date: "July 10, 2025",
      description:
        "Stay ahead in your career by mastering the skills most in demand. This article highlights the top 10 skills employers prioritize.",
    },
    {
      imageSrc: "/placeholder.svg?height=250&width=400",
      title: "Mastering the Job Interview: Tips for Success",
      date: "July 5, 2025",
      description:
        "Nail your next job interview with these expert tips. From preparation to follow-up, learn how to make a lasting impression.",
    },
  ]

  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-2">Latest Blog Posts</h2>
        <p className="text-gray-600 text-lg">Stay updated with our latest news and articles.</p>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <BlogPostCard key={index} {...post} />
        ))}
      </div>
      <div className="text-center mt-12">
        <Link href="#">
          <Button className="bg-superio-blue hover:bg-superio-blue/90 text-white px-8 py-3 rounded-md">
            View All Posts
          </Button>
        </Link>
      </div>
    </section>
  )
}
