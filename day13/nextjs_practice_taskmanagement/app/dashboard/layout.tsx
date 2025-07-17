"use client"

import type React from "react"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const handleLogout = () => {
    // TODO: Implement logout logic
    console.log("Logout clicked")
    // For now, redirect to login
    window.location.href = "/login"
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", backgroundColor: "#f9fafb" }}>
      {/* Top Navigation Bar */}
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "64px",
          padding: "0 24px",
          backgroundColor: "white",
          boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          {/* Replaced Lucide icon with simple text/emoji */}
          <span style={{ fontSize: "24px", color: "#2563eb" }}>✅</span>
          <h1 style={{ fontSize: "20px", fontWeight: "600", color: "#111827" }}>Tasks Management</h1>
        </div>
        <nav style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <span style={{ fontSize: "14px", fontWeight: "500", color: "#4b5563" }}>tungnt@softech.vn</span>
          <button style={{ backgroundColor: "transparent", border: "none", color: "#2563eb", padding: "8px 12px" }}>
            Our Tasks
          </button>
          <button style={{ backgroundColor: "transparent", border: "none", color: "#2563eb", padding: "8px 12px" }}>
            My Tasks
          </button>
          {/* "Create Task" button will be handled in page.tsx */}
          <button className="destructive" onClick={handleLogout}>
            Logout
          </button>
        </nav>
      </header>

      {/* Main Content Area */}
      <main style={{ flex: "1", padding: "24px", overflow: "auto" }}>{children}</main>
    </div>
  )
}
