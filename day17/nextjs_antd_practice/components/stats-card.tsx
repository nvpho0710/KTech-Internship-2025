import { Card, Typography, Flex } from "antd"
import type { LucideIcon } from "lucide-react"

const { Title, Text } = Typography

interface StatsCardProps {
  icon: LucideIcon
  value: string
  label: string
  iconBgColor: string // Will be a direct color value or a custom class
  iconColor: string // Will be a direct color value or a custom class
  valueColor: string // Will be a direct color value or a custom class
}

export function StatsCard({ icon: Icon, value, label, iconBgColor, iconColor, valueColor }: StatsCardProps) {
  return (
    <Card style={{ width: "100%", boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)", borderRadius: "0.5rem" }}>
      <Flex align="center" gap="middle">
        <div style={{ padding: 12, borderRadius: "0.5rem", backgroundColor: iconBgColor }}>
          <Icon style={{ width: 24, height: 24, color: iconColor }} />
        </div>
        <Flex vertical>
          <Title level={3} style={{ marginBottom: 0, color: valueColor }}>
            {value}
          </Title>
          <Text type="secondary">{label}</Text>
        </Flex>
      </Flex>
    </Card>
  )
}
