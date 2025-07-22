import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import { SiteHeader } from "@/app/components/site-header"
import { JobHeroSection } from "@/app/components/job-hero-section"
import { JobDetailsSection } from "@/app/components/job-details-section"
import { JobApplicationForm } from "@/app/components/job-application-form"
import { JobOverviewCard } from "@/app/components/job-overview-card"
import { RelatedJobsSection } from "@/app/components/related-jobs-section"
import { SiteFooter } from "@/app/components/site-footer"

export default function JobSinglePage() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", bgcolor: "background.default" }}>
      <SiteHeader />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <JobHeroSection />
        <Box sx={{ width: "100%", py: 4, bgcolor: "background.default" }}>
          <Box sx={{ maxWidth: "lg", mx: "auto", px: { xs: 2, md: 3 } }}>
            <Grid container spacing={4}>
              {/* Cột bên trái: Mô tả công việc và Biểu mẫu ứng tuyển */}
              <Grid item xs={12} md={8}>
                <Box sx={{ display: "grid", gap: 4 }}>
                  <JobDetailsSection />
                  <JobApplicationForm />
                </Box>
              </Grid>
              {/* Cột bên phải: Tổng quan công việc */}
              <Grid item xs={12} md={4}>
                <JobOverviewCard />
              </Grid>
            </Grid>
          </Box>
        </Box>
        <RelatedJobsSection />
      </Box>
      <SiteFooter />
    </Box>
  )
}
