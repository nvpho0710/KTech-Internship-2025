"use client"
import { Table, Tag, Avatar, Typography, Flex, Card } from "antd" // Import Card
import type { ColumnsType } from "antd/es/table"

const { Text} = Typography

interface Applicant {
  key: string
  name: string
  avatar: string
  job: string
  date: string
  status: string
}

const columns: ColumnsType<Applicant> = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text, record) => (
      <Flex align="center" gap="small">
        <Avatar src={record.avatar} />
        <Text style={{ fontWeight: 500 }}>{text}</Text>
      </Flex>
    ),
  },
  {
    title: "Job",
    dataIndex: "job",
    key: "job",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
    render: (status: string) => {
      let color = "geekblue"
      if (status === "Pending") {
        color = "volcano"
      } else if (status === "Approved") {
        color = "green"
      } else if (status === "Rejected") {
        color = "red"
      }
      return (
        <Tag color={color} key={status}>
          {status.toUpperCase()}
        </Tag>
      )
    },
  },
]

const data: Applicant[] = [
  {
    key: "1",
    name: "John Doe",
    avatar: "/placeholder.svg?height=32&width=32",
    job: "Product Designer",
    date: "2024-07-15",
    status: "Approved",
  },
  {
    key: "2",
    name: "Jane Smith",
    avatar: "/placeholder.svg?height=32&width=32",
    job: "Software Engineer",
    date: "2024-07-14",
    status: "Pending",
  },
  {
    key: "3",
    name: "Michael Johnson",
    avatar: "/placeholder.svg?height=32&width=32",
    job: "Technical Architect",
    date: "2024-07-13",
    status: "Rejected",
  },
  {
    key: "4",
    name: "Emily Brown",
    avatar: "/placeholder.svg?height=32&width=32",
    job: "Marketing Specialist",
    date: "2024-07-12",
    status: "Approved",
  },
  {
    key: "5",
    name: "David Lee",
    avatar: "/placeholder.svg?height=32&width=32",
    job: "Data Scientist",
    date: "2024-07-11",
    status: "Pending",
  },
]

export function RecentApplicantsTable() {
  return (
    <Card style={{ width: "100%", boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)", borderRadius: "0.5rem", padding: 0 }}>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 5 }} // Limit to 5 items per page
        style={{ borderRadius: "0.5rem" }}
      />
    </Card>
  )
}
