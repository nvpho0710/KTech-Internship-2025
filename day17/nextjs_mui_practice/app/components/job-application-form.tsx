"use client"

import type * as React from "react"
import { useState } from "react"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import Typography from "@mui/material/Typography"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline"

export function JobApplicationForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true)
      console.log("Form submitted!")
    }, 1000)
  }

  if (isSubmitted) {
    return (
      <Card
        sx={{
          p: 3,
          boxShadow: 1,
          bgcolor: "background.paper",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <CheckCircleOutlineIcon sx={{ fontSize: 64, color: "success.main", mb: 2 }} />
        <Typography variant="h5" component="h3" sx={{ fontWeight: 700, color: "text.primary", mb: 1 }}>
          Ứng tuyển thành công!
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary", mb: 3 }}>
          Cảm ơn bạn đã ứng tuyển. Chúng tôi sẽ xem xét hồ sơ của bạn sớm.
        </Typography>
        <Button variant="contained" color="primary" onClick={() => setIsSubmitted(false)} sx={{ px: 3, py: 1.5 }}>
          Ứng tuyển công việc khác
        </Button>
      </Card>
    )
  }

  return (
    <Card sx={{ p: 3, boxShadow: 1, bgcolor: "background.paper" }}>
      <Typography variant="h6" component="h2" sx={{ fontWeight: 700, color: "text.primary", mb: 2 }}>
        Ứng tuyển công việc này
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: "grid", gap: 2 }}>
        <TextField
          label="Họ và tên"
          variant="outlined"
          fullWidth
          required
          id="name"
          placeholder="Nhập họ và tên của bạn"
          sx={{ "& .MuiOutlinedInput-root": { borderRadius: "6px" } }}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          required
          type="email"
          id="email"
          placeholder="Nhập địa chỉ email của bạn"
          sx={{ "& .MuiOutlinedInput-root": { borderRadius: "6px" } }}
        />
        <TextField
          label="Số điện thoại"
          variant="outlined"
          fullWidth
          type="tel"
          id="phone"
          placeholder="Nhập số điện thoại của bạn"
          sx={{ "& .MuiOutlinedInput-root": { borderRadius: "6px" } }}
        />
        <Box>
          <Typography variant="body1" sx={{ color: "text.primary", mb: 0.5 }}>
            Tải lên CV
          </Typography>
          <Button
            variant="outlined"
            component="label"
            fullWidth
            sx={{
              py: 1.5,
              borderColor: "#d1d5db", // border-gray-300
              color: "text.secondary",
              "&:hover": {
                borderColor: "#9ca3af", // hover:border-gray-400
                bgcolor: "transparent",
              },
              borderRadius: "6px",
            }}
          >
            Chọn tệp
            <input type="file" id="resume" required hidden />
          </Button>
        </Box>
        <TextField
          label="Thư xin việc (Tùy chọn)"
          variant="outlined"
          fullWidth
          multiline
          rows={5}
          id="cover-letter"
          placeholder="Viết thư xin việc của bạn ở đây..."
          sx={{ "& .MuiOutlinedInput-root": { borderRadius: "6px" } }}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ px: 3, py: 1.5 }}>
          Gửi ứng tuyển
        </Button>
      </Box>
    </Card>
  )
}
