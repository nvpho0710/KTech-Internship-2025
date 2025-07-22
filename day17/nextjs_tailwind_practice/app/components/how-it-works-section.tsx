import { Card } from "@/components/ui/card"
import { UserRoundPlus, FileText, Send } from "lucide-react"

export function HowItWorksSection() {
  const steps = [
    {
      icon: UserRoundPlus,
      title: "Create Account",
      description: "First, you need to create an account to get started with our platform.",
    },
    {
      icon: FileText,
      title: "Upload CV/Resume",
      description: "Upload your CV or resume to showcase your skills and experience.",
    },
    {
      icon: Send,
      title: "Apply For Job",
      description: "Browse through thousands of job listings and apply for your dream job.",
    },
  ]

  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-2">How It Works?</h2>
        <p className="text-gray-600 text-lg">Three simple steps to get you started with finding your dream job.</p>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <Card key={index} className="p-6 flex flex-col items-center text-center shadow-md">
            <div className="p-4 mb-4 rounded-full bg-superio-blue/10">
              <step.icon className="w-8 h-8 text-superio-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}
