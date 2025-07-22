import * as React from "react"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"

import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined"
import HourglassEmptyOutlinedIcon from "@mui/icons-material/HourglassEmptyOutlined"
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined"
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined"
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined"
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined"
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined"

export function JobOverviewCard() {
  const overviewItems = [
    { icon: <CalendarTodayOutlinedIcon />, title: "Date Posted:", value: "Posted 1 hours ago" },
    { icon: <HourglassEmptyOutlinedIcon />, title: "Expiration date:", value: "April 06, 2021" },
    { icon: <LocationOnOutlinedIcon />, title: "Location:", value: "London, UK" },
    { icon: <PersonOutlineOutlinedIcon />, title: "Job Title:", value: "Designer" },
    { icon: <AccessTimeOutlinedIcon />, title: "Hours:", value: "50h / week" },
    { icon: <AttachMoneyOutlinedIcon />, title: "Rate:", value: "$15 - $25 / hour" },
    { icon: <AccountBalanceWalletOutlinedIcon />, title: "Salary:", value: "$35k - $45k" },
  ]

  return (
    <Card sx={{ p: 3, boxShadow: 1, bgcolor: "background.paper" }}>
      <Typography variant="h6" component="h2" sx={{ fontWeight: 700, color: "text.primary", mb: 2 }}>
        Job Overview
      </Typography>
      <Grid container spacing={2}>
        {overviewItems.map((item, index) => (
          <Grid item xs={12} key={index}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              {React.cloneElement(item.icon, { sx: { fontSize: "1.25rem", color: "text.secondary" } })}
              <Box>
                <Typography variant="body1" sx={{ fontWeight: 500, color: "text.primary" }}>
                  {item.title}
                </Typography>
                <Typography variant="body1" sx={{ color: "text.secondary" }}>
                  {item.value}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Card>
  )
}
