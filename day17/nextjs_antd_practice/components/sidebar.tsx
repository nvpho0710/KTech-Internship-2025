"use client"

import React from "react"
import { Layout, Menu } from "antd"
import {
  LayoutDashboard,
  Building2,
  Briefcase,
  ListChecks,
  Users,
  Bookmark,
  Package,
  MessageSquare,
  Bell,
  Key,
  LogOut,
  Trash2,
} from "lucide-react"
import Link from "next/link"

const { Sider } = Layout

export function Sidebar() {
  const menuItems = [
    {
      key: "dashboard",
      icon: <LayoutDashboard style={{ width: 20, height: 20 }} />,
      label: <Link href="/dashboard">Dashboard</Link>,
      // className: "bg-blue-100 text-blue-600 font-semibold rounded-md", // Handled by global CSS
    },
    {
      key: "company-profile",
      icon: <Building2 style={{ width: 20, height: 20 }} />,
      label: <Link href="#">Company Profile</Link>,
    },
    {
      key: "post-new-job",
      icon: <Briefcase style={{ width: 20, height: 20 }} />,
      label: <Link href="#">Post A New Job</Link>,
    },
    {
      key: "manage-jobs",
      icon: <ListChecks style={{ width: 20, height: 20 }} />,
      label: <Link href="#">Manage Jobs</Link>,
    },
    {
      key: "all-applicants",
      icon: <Users style={{ width: 20, height: 20 }} />,
      label: <Link href="#">All Applicants</Link>,
    },
    {
      key: "shortlisted-resumes",
      icon: <Bookmark style={{ width: 20, height: 20 }} />,
      label: <Link href="#">Shortlisted Resumes</Link>,
    },
    {
      key: "packages",
      icon: <Package style={{ width: 20, height: 20 }} />,
      label: <Link href="#">Packages</Link>,
    },
    {
      key: "messages",
      icon: <MessageSquare style={{ width: 20, height: 20 }} />,
      label: <Link href="#">Messages</Link>,
    },
    {
      key: "resume-alerts",
      icon: <Bell style={{ width: 20, height: 20 }} />,
      label: <Link href="#">Resume Alerts</Link>,
    },
    {
      key: "change-password",
      icon: <Key style={{ width: 20, height: 20 }} />,
      label: <Link href="#">Change Password</Link>,
    },
    {
      key: "logout",
      icon: <LogOut style={{ width: 20, height: 20 }} />,
      label: <Link href="#">Logout</Link>,
    },
    {
      key: "delete-profile",
      icon: <Trash2 style={{ width: 20, height: 20 }} />,
      label: <Link href="#">Delete Profile</Link>,
    },
  ]

  return (
    <Sider width={250} style={{ backgroundColor: "#fff", borderRight: "1px solid #e5e7eb" }}>
      <div style={{ padding: 16 }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={["dashboard"]}
          items={menuItems}
          style={{ borderRight: 0, height: "100%" }}
          itemRender={(item, dom) => {
            // Apply custom class for the active item
            if (item.key === "dashboard") {
              return React.cloneElement(dom as React.ReactElement, {
                className: "ant-menu-item-selected", // Use Ant Design's selected class
                style: {
                  backgroundColor: "#e0f2fe", // Light blue background
                  color: "#2563eb", // Blue text color
                  fontWeight: 600,
                  borderRadius: "0.375rem", // rounded-md
                },
              })
            }
            return dom
          }}
        />
      </div>
    </Sider>
  )
}
