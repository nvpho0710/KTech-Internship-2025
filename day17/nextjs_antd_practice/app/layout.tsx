"use client"
import type React from "react"
import { Layout, theme } from "antd"
import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import "./globals.css" // Import global CSS

const { Content } = Layout

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()

  return (
    <html lang="en">
      <body>
        <Layout style={{ minHeight: "100vh" }}>
          <Header />
          <Layout>
            <Sidebar />
            <Content
              style={{
                margin: "24px 16px",
                padding: 24,
                minHeight: 280,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              {children}
            </Content>
          </Layout>
        </Layout>
      </body>
    </html>
  )
}
