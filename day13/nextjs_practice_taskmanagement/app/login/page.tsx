"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      if (email && password) {
        // For now, accept any email/password combination
        // In a real app, you'd verify credentials here
        router.push("/dashboard")
      } else {
        setError("Please enter both email and password.")
      }
    } catch (err) {
      setError("Login failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f9fafb",
        padding: "48px 16px",
      }}
    >
      <div style={{ maxWidth: "448px", width: "100%", display: "flex", flexDirection: "column", gap: "32px" }}>
        <div style={{ textAlign: "center" }}>
          {/* Replaced Lucide icon with simple text/emoji */}
          <span style={{ fontSize: "48px", display: "block", marginBottom: "16px" }}>🔑</span>
          <h2 style={{ fontSize: "30px", fontWeight: "800", color: "#111827", marginTop: "24px", marginBottom: "8px" }}>
            Login to your account
          </h2>
          <p style={{ fontSize: "14px", color: "#4b5563" }}>Access your Tasks Management Dashboard</p>
        </div>

        <div className="card">
          <div className="card-header">
            <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#111827" }}>Login</h3>
            <p style={{ fontSize: "14px", color: "#4b5563", marginTop: "4px" }}>Enter your credentials to continue</p>
          </div>
          <div className="card-content">
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {error && (
                <div
                  style={{
                    backgroundColor: "#fee2e2",
                    color: "#dc2626",
                    padding: "8px",
                    borderRadius: "4px",
                    fontSize: "14px",
                  }}
                >
                  {error}
                </div>
              )}

              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <label htmlFor="email" style={{ fontSize: "14px", fontWeight: "500", color: "#374151" }}>
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <label htmlFor="password" style={{ fontSize: "14px", fontWeight: "500", color: "#374151" }}>
                  Password
                </label>
                <input
                  id="password"
                  type="password" // Keep as password type for security
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="primary"
                disabled={isLoading}
                style={{ width: "100%", padding: "10px 16px" }}
              >
                {isLoading ? "Logging in..." : "Login"}
              </button>
            </form>

            <div style={{ marginTop: "16px", textAlign: "center" }}>
              <p style={{ fontSize: "14px", color: "#4b5563" }}>Demo: Use any email and password to log in</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
