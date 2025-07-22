import Card from "@mui/material/Card"
import Typography from "@mui/material/Typography"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord" // For bullet points

export function JobDetailsSection() {
  return (
    <Card sx={{ p: 3, boxShadow: 1, bgcolor: "background.paper" }}>
      <Typography variant="h6" component="h2" sx={{ fontWeight: 700, color: "text.primary", mb: 2 }}>
        Job Description
      </Typography>
      <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.6, mb: 3 }}>
        As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data
        talent. You will help the team design beautiful interfaces that solve business challenges for our clients. We
        work with a number of Tier 1 banks on building web-based applications for AML, KYC and Sanctions List management
        workflows. This role is ideal if you are looking to segue your career into the FinTech or Big Data arenas.
      </Typography>
      <Typography variant="h6" component="h3" sx={{ fontWeight: 700, color: "text.primary", mt: 3, mb: 1.5 }}>
        Key Responsibilities
      </Typography>
      <List sx={{ p: 0 }}>
        {[
          "Be involved in every step of the product design cycle from discovery to developer handoff and user acceptance testing.",
          "Work with BAs, product managers and tech teams to lead the Product Design",
          "Maintain quality of the design process and ensure that when designs are translated into code they accurately reflect the design specifications.",
          "Accurately estimate design tickets during planning sessions.",
          "Contribute to sketching sessions involving non-designersCreate, iterate and maintain UI deliverables including sketch files, style guides, high fidelity prototypes, micro interaction specifications and pattern libraries.",
          "Ensure design choices are data led by identifying assumptions to test each sprint, and work with the analysts in your team to plan moderated usability test sessions.",
          "Design pixel perfect responsive UIs and understand that adopting common interface patterns is better for UX than reinventing the wheel.",
        ].map((item, index) => (
          <ListItem key={index} sx={{ py: 0.5, px: 0, alignItems: "flex-start" }}>
            <ListItemIcon sx={{ minWidth: "24px", mt: "4px" }}>
              <FiberManualRecordIcon sx={{ fontSize: "0.5rem", color: "text.secondary" }} />
            </ListItemIcon>
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              {item}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Card>
  )
}
