"use client"
import { Layout, Menu, Dropdown, Avatar, Badge } from "antd"
import { ChevronDown, Heart, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const { Header: AntHeader } = Layout

const items = [
  { key: "1", label: "Home" },
  { key: "2", label: "Find Jobs" },
  { key: "3", label: "Employers" },
  { key: "4", label: "Candidates" },
  { key: "5", label: "Blog" },
  { key: "6", label: "Pages" },
]

const accountMenu = (
  <Menu
    items={[
      { key: "1", label: "Profile" },
      { key: "2", label: "Settings" },
      { key: "3", label: "Logout" },
    ]}
  />
)

export function Header() {
  return (
    <AntHeader
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: 24,
        paddingRight: 24,
        backgroundColor: "#fff",
        borderBottom: "1px solid #e5e7eb", // border-gray-200
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <Link href="#" style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "1.125rem", fontWeight: 600 }}>
          <Image src="/placeholder.svg?height=24&width=24" width={24} height={24} alt="Superio Logo" />
          <span style={{ fontSize: "1.25rem", fontWeight: 700, color: "#2563eb" }}>Superio</span>
        </Link>
        <Menu mode="horizontal" items={items} style={{ flex: 1, minWidth: 0, borderBottom: 0, lineHeight: "64px" }} />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <Badge count={1} offset={[-4, 4]} size="small">
          <Heart style={{ width: 20, height: 20, color: "#4b5563" }} />
        </Badge>
        <Linkedin style={{ width: 20, height: 20, color: "#4b5563" }} />
        <Dropdown overlay={accountMenu} trigger={["click"]}>
          <a
            onClick={(e) => e.preventDefault()}
            style={{ display: "flex", alignItems: "center", gap: 8, color: "#374151" }}
          >
            <Avatar src="/placeholder.svg?height=32&width=32" />
            My Account <ChevronDown style={{ width: 16, height: 16 }} />
          </a>
        </Dropdown>
      </div>
    </AntHeader>
  )
}
