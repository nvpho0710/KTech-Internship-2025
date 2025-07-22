import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Link from "@mui/material/Link"

export function SiteFooter() {
  return (
    <Box sx={{ width: "100%", py: 4, bgcolor: "#1f2937", color: "#ffffff", fontSize: "0.875rem", textAlign: "center" }}>
      <Box
        sx={{
          maxWidth: "lg",
          mx: "auto",
          px: { xs: 2, md: 3 },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "center", md: "flex-start" },
          gap: 3,
        }}
      >
        <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
          <Typography variant="body1" sx={{ color: "inherit" }}>
            &copy; {new Date().getFullYear()} Superio. All rights reserved.
          </Typography>
          <Typography variant="body1" sx={{ mt: 1, color: "inherit" }}>
            <Link href="#" color="inherit" sx={{ "&:hover": { textDecoration: "underline" } }}>
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link href="#" color="inherit" sx={{ "&:hover": { textDecoration: "underline" } }}>
              Terms of Service
            </Link>
          </Typography>
        </Box>
        <Box sx={{ textAlign: { xs: "center", md: "right" } }}>
          <Typography variant="h6" component="h3" sx={{ fontWeight: 600, mb: 1, color: "inherit" }}>
            Liên hệ chúng tôi
          </Typography>
          <Typography variant="body1" sx={{ color: "inherit" }}>
            Email: info@superio.com
          </Typography>
          <Typography variant="body1" sx={{ color: "inherit" }}>
            Điện thoại: +1 (123) 456-7890
          </Typography>
          <Typography variant="body1" sx={{ color: "inherit" }}>
            Địa chỉ: 123 Job Seeker St, London, UK
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
