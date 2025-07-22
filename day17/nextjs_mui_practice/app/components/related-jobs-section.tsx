import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import Chip from "@mui/material/Chip"
import Link from "@mui/material/Link"
import Avatar from "@mui/material/Avatar"
import Image from "next/image"

import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined"
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined"
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined"

export function RelatedJobsSection() {
  const relatedJobs = [
    {
      id: 1,
      title: "Senior Product Designer",
      company: "Creative Solutions",
      location: "New York, USA",
      time: "2 days ago",
      salary: "$80k - $100k",
      type: "Full Time",
      logo: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      title: "UX/UI Designer",
      company: "Design Innovators",
      location: "San Francisco, USA",
      time: "1 week ago",
      salary: "$70k - $90k",
      type: "Part Time",
      logo: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      title: "Graphic Designer",
      company: "Artistic Minds",
      location: "London, UK",
      time: "3 days ago",
      salary: "$50k - $70k",
      type: "Contract",
      logo: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <Box sx={{ width: "100%", py: 4, bgcolor: "#f5f7fb" }}>
      <Box sx={{ maxWidth: "lg", mx: "auto", px: { xs: 2, md: 3 } }}>
        <Typography variant="h5" component="h2" sx={{ fontWeight: 700, color: "text.primary", mb: 3 }}>
          Việc làm liên quan
        </Typography>
        <Grid container spacing={3}>
          {relatedJobs.map((job) => (
            <Grid item xs={12} md={6} lg={4} key={job.id}>
              <Card
                sx={{
                  p: 2,
                  boxShadow: 1,
                  bgcolor: "background.paper",
                  "&:hover": { boxShadow: 3 },
                  transition: "box-shadow 0.3s",
                }}
              >
                <CardContent sx={{ p: 0, display: "flex", flexDirection: "column", gap: 1.5 }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                    <Avatar sx={{ width: 40, height: 40, borderRadius: "8px" }}>
                      <Image src={job.logo || "/placeholder.svg"} width={40} height={40} alt={`${job.company} Logo`} />
                    </Avatar>
                    <Box>
                      <Typography variant="h6" component="h3" sx={{ fontWeight: 600, color: "text.primary" }}>
                        {job.title}
                      </Typography>
                      <Typography variant="body1" sx={{ color: "text.secondary" }}>
                        {job.company}
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "center",
                      gap: 1.5,
                      fontSize: "0.875rem",
                      color: "text.secondary",
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                      <LocationOnOutlinedIcon sx={{ fontSize: "1rem", color: "text.secondary" }} />
                      <Typography variant="body1">{job.location}</Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                      <AccessTimeOutlinedIcon sx={{ fontSize: "1rem", color: "text.secondary" }} />
                      <Typography variant="body1">{job.time}</Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                      <AttachMoneyOutlinedIcon sx={{ fontSize: "1rem", color: "text.secondary" }} />
                      <Typography variant="body1">{job.salary}</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
                    <Chip label={job.type} color="info" />
                  </Box>
                  <Link href="#" sx={{ color: "primary.main", fontSize: "0.875rem", fontWeight: 500, mt: 1.5 }}>
                    Xem chi tiết
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}
