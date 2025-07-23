import { Typography, Row, Col } from "antd"
import { Briefcase, FileText, MessageSquare, Bookmark } from "lucide-react"
import { StatsCard } from "@/components/stats-card"
import { ProfileViewsChart } from "@/components/profile-views-chart"
import { NotificationsList } from "@/components/notifications-list"
import { RecentApplicantsTable } from "@/components/recent-applicants-table"

const { Title, Text } = Typography

export default function DashboardPage() {
  return (
    <div style={{ padding: 24 }}>
      <Title level={2} style={{ marginBottom: 8 }}>
        Dashboard Home!
      </Title>
      <Text type="secondary" style={{ marginBottom: 24, display: "block" }}>
        Ready to jump back in?
      </Text>

      <Row gutter={[24, 24]} style={{ marginBottom: 32 }}>
        <Col xs={24} sm={12} lg={6}>
          <StatsCard
            icon={Briefcase}
            value="22"
            label="Posted Jobs"
            iconBgColor="#dbeafe" // bg-blue-100
            iconColor="#2563eb" // text-blue-600
            valueColor="#2563eb" // text-blue-600
          />
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <StatsCard
            icon={FileText}
            value="9382"
            label="Application"
            iconBgColor="#fee2e2" // bg-red-100
            iconColor="#dc2626" // text-red-600
            valueColor="#dc2626" // text-red-600
          />
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <StatsCard
            icon={MessageSquare}
            value="74"
            label="Messages"
            iconBgColor="#fef3c7" // bg-yellow-100
            iconColor="#d97706" // text-yellow-600
            valueColor="#d97706" // text-yellow-600
          />
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <StatsCard
            icon={Bookmark}
            value="32"
            label="Shortlist"
            iconBgColor="#dcfce7" // bg-green-100
            iconColor="#22c55e" // text-green-600
            valueColor="#22c55e" // text-green-600
          />
        </Col>
      </Row>

      <Row gutter={[24, 24]} style={{ marginBottom: 32 }}>
        <Col xs={24} lg={16}>
          <ProfileViewsChart />
        </Col>
        <Col xs={24} lg={8}>
          <NotificationsList />
        </Col>
      </Row>

      <Title level={4} style={{ marginBottom: 16 }}>
        Recent Applicants
      </Title>
      <RecentApplicantsTable />
    </div>
  )
}
