import { SiteHeader } from "@/app/components/site-header"
import { HeroSection } from "@/app/components/hero-section"
import { PopularJobCategories } from "@/app/components/popular-job-categories"
import { JobCategoriesGrid } from "@/app/components/job-categories-grid"
import { FeaturedJobsSection } from "@/app/components/featured-jobs-section"
import { HowItWorksSection } from "@/app/components/how-it-works-section"
import { TestimonialSection } from "@/app/components/testimonial-section"
import { NewsletterSection } from "@/app/components/newsletter-section"
import { LatestBlogPostsSection } from "@/app/components/latest-blog-posts-section"
import { ClientsSection } from "@/app/components/clients-section" // New import
import { CallToActionSection } from "@/app/components/call-to-action-section"
import { SiteFooter } from "@/app/components/site-footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <PopularJobCategories />
        <JobCategoriesGrid />
        <FeaturedJobsSection />
        <HowItWorksSection />
        <TestimonialSection />
        <NewsletterSection />
        <LatestBlogPostsSection />
        <ClientsSection /> {/* New section */}
        <CallToActionSection />
      </main>
      <SiteFooter />
    </div>
  )
}
