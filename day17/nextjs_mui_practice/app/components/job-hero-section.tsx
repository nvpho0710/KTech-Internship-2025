import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import Avatar from "@mui/material/Avatar"
import Typography from "@mui/material/Typography"
import Chip from "@mui/material/Chip"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import Image from "next/image"

import WorkOutlineIcon from "@mui/icons-material/WorkOutline"
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined"
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined"
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined"
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined"

export function JobHeroSection() {
  return (
    <Box sx={{ width: "100%", py: 4, bgcolor: "#e0e8f7" }}>
      <Box sx={{ maxWidth: "lg", mx: "auto", px: { xs: 2, md: 3 } }}>
        <Card
          sx={{
            p: 3,
            boxShadow: 1,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "flex-start", md: "center" },
            gap: 3,
          }}
        >
          <Avatar sx={{ width: 80, height: 80, borderRadius: "8px" }}>
            <Image src="/company-logo.png" alt="Company Logo" width={80} height={80} />
          </Avatar>
          <Box sx={{ flexGrow: 1, display: "grid", gap: 1 }}>
            <Typography variant="h5" component="h1" sx={{ fontWeight: 700, color: "text.primary" }}>
              Software Engineer (Android), Libraries
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: 2,
                fontSize: "0.875rem",
                color: "text.secondary",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <WorkOutlineIcon sx={{ fontSize: "1rem", color: "text.secondary" }} />
                <Typography variant="body1">Segment</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <LocationOnOutlinedIcon sx={{ fontSize: "1rem", color: "text.secondary" }} />
                <Typography variant="body1">London, UK</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <AccessTimeOutlinedIcon sx={{ fontSize: "1rem", color: "text.secondary" }} />
                <Typography variant="body1">11 hours ago</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <AttachMoneyOutlinedIcon sx={{ fontSize: "1rem", color: "text.secondary" }} />
                <Typography variant="body1">$35k - $45k</Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1 }}>
              <Chip label="Full Time" color="info" />
              <Chip label="Private" color="success" />
              <Chip label="Urgent" color="warning" />
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: 1, mt: { xs: 2, md: 0 }, ml: { md: "auto" } }}>
            <Button variant="contained" color="primary" sx={{ px: 3, py: 1.5, boxShadow: 1 }}>
              Apply For Job
            </Button>
            <IconButton
              variant="outlined"
              sx={{ border: "1px solid #e5e7eb", color: "text.secondary", "&:hover": { bgcolor: "#f9fafb" } }}
            >
              <BookmarkBorderOutlinedIcon />
            </IconButton>
          </Box>
        </Card>
      </Box>
    </Box>
  )
}
