"use client"

import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import Link from "@mui/material/Link"
import Image from "next/image"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"

export function SiteHeader() {
  const [anchorElHome, setAnchorElHome] = React.useState<null | HTMLElement>(null)
  const [anchorElFindJobs, setAnchorElFindJobs] = React.useState<null | HTMLElement>(null)
  const [anchorElEmployers, setAnchorElEmployers] = React.useState<null | HTMLElement>(null)
  const [anchorElCandidates, setAnchorElCandidates] = React.useState<null | HTMLElement>(null)
  const [anchorElBlog, setAnchorElBlog] = React.useState<null | HTMLElement>(null)
  const [anchorElPages, setAnchorElPages] = React.useState<null | HTMLElement>(null)

  const handleMenuOpen = (
    event: React.MouseEvent<HTMLElement>,
    setter: React.Dispatch<React.SetStateAction<HTMLElement | null>>,
  ) => {
    setter(event.currentTarget)
  }

  const handleMenuClose = (setter: React.Dispatch<React.SetStateAction<HTMLElement | null>>) => {
    setter(null)
  }

  return (
    <AppBar
      position="sticky"
      sx={{ bgcolor: "background.paper", borderBottom: "1px solid #e5e7eb", boxShadow: "none" }}
    >
      <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, md: 3 } }}>
        <Link
          href="#"
          sx={{ display: "flex", alignItems: "center", gap: 1, textDecoration: "none", color: "text.primary" }}
        >
          <Image src="/superio-logo.png" width={24} height={24} alt="Superio Logo" />
          <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
            Superio
          </Typography>
        </Link>
        <div style={{ display: "flex", alignItems: "center" }}>
          <nav style={{ display: "flex", gap: "1.5rem" }}>
            {/* Home */}
            <Button
              variant="text"
              endIcon={<KeyboardArrowDownIcon />}
              onClick={(e) => handleMenuOpen(e, setAnchorElHome)}
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              Home
            </Button>
            <Menu anchorEl={anchorElHome} open={Boolean(anchorElHome)} onClose={() => handleMenuClose(setAnchorElHome)}>
              <MenuItem onClick={() => handleMenuClose(setAnchorElHome)}>Home 1</MenuItem>
              <MenuItem onClick={() => handleMenuClose(setAnchorElHome)}>Home 2</MenuItem>
            </Menu>

            {/* Find Jobs */}
            <Button
              variant="text"
              endIcon={<KeyboardArrowDownIcon />}
              onClick={(e) => handleMenuOpen(e, setAnchorElFindJobs)}
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              Find Jobs
            </Button>
            <Menu
              anchorEl={anchorElFindJobs}
              open={Boolean(anchorElFindJobs)}
              onClose={() => handleMenuClose(setAnchorElFindJobs)}
            >
              <MenuItem onClick={() => handleMenuClose(setAnchorElFindJobs)}>Browse Jobs</MenuItem>
              <MenuItem onClick={() => handleMenuClose(setAnchorElFindJobs)}>Job Categories</MenuItem>
            </Menu>

            {/* Employers */}
            <Button
              variant="text"
              endIcon={<KeyboardArrowDownIcon />}
              onClick={(e) => handleMenuOpen(e, setAnchorElEmployers)}
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              Employers
            </Button>
            <Menu
              anchorEl={anchorElEmployers}
              open={Boolean(anchorElEmployers)}
              onClose={() => handleMenuClose(setAnchorElEmployers)}
            >
              <MenuItem onClick={() => handleMenuClose(setAnchorElEmployers)}>Employer List</MenuItem>
              <MenuItem onClick={() => handleMenuClose(setAnchorElEmployers)}>Post Job</MenuItem>
            </Menu>

            {/* Candidates */}
            <Button
              variant="text"
              endIcon={<KeyboardArrowDownIcon />}
              onClick={(e) => handleMenuOpen(e, setAnchorElCandidates)}
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              Candidates
            </Button>
            <Menu
              anchorEl={anchorElCandidates}
              open={Boolean(anchorElCandidates)}
              onClose={() => handleMenuClose(setAnchorElCandidates)}
            >
              <MenuItem onClick={() => handleMenuClose(setAnchorElCandidates)}>Candidate List</MenuItem>
              <MenuItem onClick={() => handleMenuClose(setAnchorElCandidates)}>Candidate Profile</MenuItem>
            </Menu>

            {/* Blog */}
            <Button
              variant="text"
              endIcon={<KeyboardArrowDownIcon />}
              onClick={(e) => handleMenuOpen(e, setAnchorElBlog)}
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              Blog
            </Button>
            <Menu anchorEl={anchorElBlog} open={Boolean(anchorElBlog)} onClose={() => handleMenuClose(setAnchorElBlog)}>
              <MenuItem onClick={() => handleMenuClose(setAnchorElBlog)}>Blog Grid</MenuItem>
              <MenuItem onClick={() => handleMenuClose(setAnchorElBlog)}>Blog Single</MenuItem>
            </Menu>

            {/* Pages */}
            <Button
              variant="text"
              endIcon={<KeyboardArrowDownIcon />}
              onClick={(e) => handleMenuOpen(e, setAnchorElPages)}
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              Pages
            </Button>
            <Menu
              anchorEl={anchorElPages}
              open={Boolean(anchorElPages)}
              onClose={() => handleMenuClose(setAnchorElPages)}
            >
              <MenuItem onClick={() => handleMenuClose(setAnchorElPages)}>About Us</MenuItem>
              <MenuItem onClick={() => handleMenuClose(setAnchorElPages)}>Contact</MenuItem>
            </Menu>
          </nav>
          <Button variant="text" sx={{ display: { xs: "none", md: "inline-flex" }, ml: 2 }}>
            Login / Register
          </Button>
          <Button variant="contained" color="primary" sx={{ ml: 1 }}>
            Job Post
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  )
}
