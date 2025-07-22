"use client"

import type * as React from "react"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"

// Tạo một theme tùy chỉnh để khớp với màu sắc của thiết kế gốc
const theme = createTheme({
  palette: {
    primary: {
      main: "#2563eb", // Màu xanh chính
    },
    secondary: {
      main: "#1d4ed8", // Màu xanh đậm hơn cho hover
    },
    background: {
      default: "#f5f7fb", // Màu nền tổng thể của trang
      paper: "#ffffff", // Màu nền cho các Card
    },
    text: {
      primary: "#1f2937", // Màu chữ chính (gray-900)
      secondary: "#4b5563", // Màu chữ phụ (gray-600)
    },
  },
  typography: {
    fontFamily: [
      "Inter", // Giả định sử dụng font Inter hoặc tương tự
      "sans-serif",
    ].join(","),
    h1: {
      fontSize: "2rem",
      fontWeight: 700,
      color: "#1f2937",
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: 700,
      color: "#1f2937",
    },
    h3: {
      fontSize: "1.25rem",
      fontWeight: 700,
      color: "#1f2937",
    },
    body1: {
      fontSize: "0.875rem", // text-sm
      color: "#4b5563",
    },
    body2: {
      fontSize: "0.75rem", // text-xs
      color: "#6b7280", // text-muted-foreground
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none", // Bỏ viết hoa mặc định
          borderRadius: "6px", // Bo tròn góc
        },
        containedPrimary: {
          backgroundColor: "#2563eb",
          "&:hover": {
            backgroundColor: "#1d4ed8",
          },
        },
        outlined: {
          borderColor: "#e5e7eb", // border-gray-200
          color: "#4b5563", // text-gray-600
          "&:hover": {
            backgroundColor: "#f9fafb", // bg-gray-50
            borderColor: "#d1d5db", // border-gray-300
          },
        },
        text: {
          color: "#4b5563", // text-gray-600
          "&:hover": {
            backgroundColor: "transparent",
            color: "#1f2937", // text-gray-900
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)", // shadow-sm
          borderRadius: "8px", // rounded-lg
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: "9999px", // rounded-full
          fontSize: "0.75rem", // text-xs
          fontWeight: 500,
          padding: "0 8px",
          height: "24px",
        },
        colorInfo: {
          // Full Time
          backgroundColor: "#e0f2fe",
          color: "#0288d1",
        },
        colorSuccess: {
          // Private
          backgroundColor: "#e8f5e9",
          color: "#388e3c",
        },
        colorWarning: {
          // Urgent
          backgroundColor: "#fffde7",
          color: "#fbc02d",
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          borderRadius: "8px", // rounded-lg
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#2563eb",
          textDecoration: "none",
          "&:hover": {
            textDecoration: "underline",
          },
        },
      },
    },
  },
})

export default function MuiThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Cung cấp CSS cơ bản để reset và chuẩn hóa */}
      {children}
    </ThemeProvider>
  )
}
