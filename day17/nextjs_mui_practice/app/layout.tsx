import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css" // Giữ lại global CSS nếu có các style chung không phải MUI
import MuiThemeProvider from "@/app/components/mui-theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Job Single Page - Superio",
  description: "Job Single Page Design with Material UI",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MuiThemeProvider>{children}</MuiThemeProvider>
      </body>
    </html>
  )
}
