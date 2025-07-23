import type React from "react"
import { Card, Typography, Flex, Button } from "antd"
import { Briefcase, CheckCircle } from "lucide-react"

const { Title, Text } = Typography

interface NotificationItemProps {
  icon: React.ElementType
  iconColor: string
  text: React.ReactNode
}

const NotificationItem: React.FC<NotificationItemProps> = ({ icon: Icon, iconColor, text }) => (
  <Flex align="center" gap="small" style={{ paddingBlock: 8 }}>
    <Icon style={{ width: 20, height: 20, color: iconColor }} />
    <Text style={{ color: "#374151" }}>{text}</Text>
  </Flex>
)

export function NotificationsList() {
  return (
    <Card style={{ width: "100%", boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)", borderRadius: "0.5rem" }}>
      <Title level={4} style={{ marginBottom: 16 }}>
        Notifications
      </Title>
      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 }}>
        <NotificationItem
          icon={Briefcase}
          iconColor="#3b82f6" // text-blue-500
          text={
            <>
              Henry Wilson applied for a job <span style={{ color: "#3b82f6", fontWeight: 500 }}>Product Designer</span>
            </>
          }
        />
        <NotificationItem
          icon={CheckCircle}
          iconColor="#22c55e" // text-green-500
          text={
            <>
              Raul Costa applied for a job{" "}
              <span style={{ color: "#22c55e", fontWeight: 500 }}>Product Manager, Risk</span>
            </>
          }
        />
        <NotificationItem
          icon={Briefcase}
          iconColor="#3b82f6"
          text={
            <>
              Jack Milk applied for a job <span style={{ color: "#3b82f6", fontWeight: 500 }}>Technical Architect</span>
            </>
          }
        />
        <NotificationItem
          icon={CheckCircle}
          iconColor="#22c55e"
          text={
            <>
              Michel Arian applied for a job{" "}
              <span style={{ color: "#22c55e", fontWeight: 500 }}>Software Engineer</span>
            </>
          }
        />
        <NotificationItem
          icon={Briefcase}
          iconColor="#3b82f6"
          text={
            <>
              Wade Warren applied for a job <span style={{ color: "#3b82f6", fontWeight: 500 }}>Web Developer</span>
            </>
          }
        />
        <NotificationItem
          icon={CheckCircle}
          iconColor="#22c55e"
          text={
            <>
              Michel Arian applied for a job{" "}
              <span style={{ color: "#22c55e", fontWeight: 500 }}>Software Engineer</span>
            </>
          }
        />
      </div>
      <Button type="link" style={{ width: "100%", textAlign: "center" }}>
        View All
      </Button>
    </Card>
  )
}
