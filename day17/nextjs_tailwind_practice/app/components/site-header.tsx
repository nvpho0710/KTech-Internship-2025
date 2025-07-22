import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Zap, ChevronDown } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="flex items-center justify-between h-20 px-8 bg-white shadow-sm">
      <div className="flex items-center gap-8">
        <Link href="#" className="flex items-center gap-2 text-2xl font-bold text-superio-blue">
          <Zap className="w-6 h-6 fill-superio-blue" />
          Superio
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="#" className="flex items-center gap-1 text-gray-700 hover:text-superio-blue">
            Home <ChevronDown className="w-4 h-4" />
          </Link>
          <Link href="#" className="flex items-center gap-1 text-gray-700 hover:text-superio-blue">
            Find jobs <ChevronDown className="w-4 h-4" />
          </Link>
          <Link href="#" className="flex items-center gap-1 text-gray-700 hover:text-superio-blue">
            Employers <ChevronDown className="w-4 h-4" />
          </Link>
          <Link href="#" className="flex items-center gap-1 text-gray-700 hover:text-superio-blue">
            Candidates <ChevronDown className="w-4 h-4" />
          </Link>
          <Link href="#" className="flex items-center gap-1 text-gray-700 hover:text-superio-blue">
            Blog <ChevronDown className="w-4 h-4" />
          </Link>
          <Link href="#" className="flex items-center gap-1 text-gray-700 hover:text-superio-blue">
            Pages <ChevronDown className="w-4 h-4" />
          </Link>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost" className="text-gray-700 hover:text-superio-blue">
          Upload your CV
        </Button>
        <Button variant="ghost" className="text-gray-700 hover:text-superio-blue">
          Login / Register
        </Button>
        <Button className="bg-superio-blue hover:bg-superio-blue/90 text-white px-6 py-2 rounded-md">Job Post</Button>
      </div>
    </header>
  )
}
