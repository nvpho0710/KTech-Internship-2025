"use client"
import { Card, Dropdown, Menu, Typography } from "antd"
import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import { ChevronDown } from "lucide-react"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const { Title: AntTitle } = Typography

const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "Profile Views",
      data: [150, 110, 180, 240, 160, 190],
      borderColor: "rgb(59, 130, 246)", // blue-500
      backgroundColor: "rgba(59, 130, 246, 0.2)",
      tension: 0.4,
      fill: false,
    },
  ],
}

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    y: {
      beginAtZero: false,
      grid: {
        color: "rgba(0, 0, 0, 0.05)",
      },
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
}

const timeRangeMenu = (
  <Menu
    items={[
      { key: "1", label: "Last 6 Months" },
      { key: "2", label: "Last 12 Months" },
      { key: "3", label: "Last 30 Days" },
    ]}
  />
)

export function ProfileViewsChart() {
  return (
    <Card style={{ width: "100%", boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)", borderRadius: "0.5rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
        <AntTitle level={4} style={{ marginBottom: 0 }}>
          Your Profile Views
        </AntTitle>
        <Dropdown overlay={timeRangeMenu} trigger={["click"]}>
          <a
            onClick={(e) => e.preventDefault()}
            style={{ display: "flex", alignItems: "center", gap: 4, color: "#4b5563" }}
          >
            Last 6 Months <ChevronDown style={{ width: 16, height: 16 }} />
          </a>
        </Dropdown>
      </div>
      <div style={{ height: 250 }}>
        <Line data={data} options={options} />
      </div>
    </Card>
  )
}
