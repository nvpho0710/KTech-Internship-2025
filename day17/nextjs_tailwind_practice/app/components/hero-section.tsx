import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, MapPin, Mail, Briefcase, Upload, Check } from "lucide-react" // Ensure Check is imported
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center py-20 px-4 md:px-8 bg-gradient-to-b from-white to-blue-50 min-h-[700px] overflow-hidden">
      {/* Background circles - simplified */}
      <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-blue-200 opacity-20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-60 h-60 bg-blue-300 opacity-15 rounded-full blur-3xl animate-pulse animation-delay-2000" />

      <div className="relative z-10 text-center max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
          There Are <span className="text-superio-blue">93,178</span> Postings Here For you!
        </h1>
        <p className="text-lg text-gray-600 mb-8">Find Jobs, Employment & Career Opportunities</p>

        <div className="flex flex-col md:flex-row items-center bg-white p-2 rounded-full shadow-xl border border-gray-200 max-w-2xl mx-auto mb-6">
          <div className="relative flex-1 w-full md:w-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Job title, keywords, or company"
              className="pl-12 pr-4 py-3 rounded-full border-none focus-visible:ring-0 focus-visible:ring-offset-0 w-full"
            />
          </div>
          <div className="relative flex-1 w-full md:w-auto mt-2 md:mt-0 md:ml-2">
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="City or postcode"
              className="pl-12 pr-4 py-3 rounded-full border-none focus-visible:ring-0 focus-visible:ring-offset-0 w-full"
            />
          </div>
          <Button className="bg-superio-blue hover:bg-superio-blue/90 text-white px-8 py-3 rounded-full ml-0 md:ml-2 mt-2 md:mt-0 w-full md:w-auto">
            Find Jobs
          </Button>
        </div>

        <p className="text-sm text-gray-500">
          <span className="font-semibold">Popular Searches :</span> Designer, Developer, Web, IOS, PHP, Senior,
          Engineer,
        </p>
      </div>

      {/* Floating Cards and Image */}
      <div className="absolute right-0 bottom-0 hidden lg:block">
        <Image
          src="/placeholder.svg?height=700&width=500"
          alt="Man in a suit"
          width={500}
          height={700}
          className="object-cover rounded-lg"
        />
      </div>

      {/* Floating Cards */}
      <Card className="absolute top-24 md:top-32 right-1/2 md:right-[420px] translate-x-1/2 md:translate-x-0 p-4 flex items-center gap-3 rounded-xl shadow-lg bg-white/80 backdrop-blur-sm">
        <div className="p-3 bg-yellow-100 rounded-lg">
          <Mail className="w-5 h-5 text-yellow-600" />
        </div>
        <div>
          <p className="font-semibold text-sm">Work Inquiry From</p>
          <p className="text-xs text-gray-500">Ali Tufan</p>
        </div>
      </Card>

      <Card className="absolute top-1/2 md:top-40 right-0 md:right-20 translate-x-1/2 md:translate-x-0 p-4 flex items-center gap-3 rounded-xl shadow-lg bg-white/80 backdrop-blur-sm">
        <div className="flex -space-x-2 overflow-hidden">
          <Avatar className="w-8 h-8 border-2 border-white">
            <AvatarImage src="/placeholder.svg?height=32&width=32" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar className="w-8 h-8 border-2 border-white">
            <AvatarImage src="/placeholder.svg?height=32&width=32" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar className="w-8 h-8 border-2 border-white">
            <AvatarImage src="/placeholder.svg?height=32&width=32" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar className="w-8 h-8 border-2 border-white bg-gray-200 flex items-center justify-center text-gray-600 text-sm font-medium">
            <span className="text-xs font-bold">+</span>
          </Avatar>
        </div>
        <div>
          <p className="font-semibold text-sm">10k+ Candidates</p>
        </div>
      </Card>

      <Card className="absolute bottom-24 md:bottom-24 right-1/2 md:right-[420px] translate-x-1/2 md:translate-x-0 p-4 flex items-center gap-3 rounded-xl shadow-lg bg-white/80 backdrop-blur-sm">
        <div className="p-3 bg-red-100 rounded-lg">
          <Briefcase className="w-5 h-5 text-red-600" />
        </div>
        <div>
          <p className="font-semibold text-sm">Creative Agency</p>
          <p className="text-xs text-gray-500">Startup</p>
        </div>
        <div className="ml-auto p-1 bg-green-100 rounded-full">
          <Check className="w-4 h-4 text-green-600" />
        </div>
      </Card>

      <Card className="absolute bottom-10 md:bottom-10 right-0 md:right-20 translate-x-1/2 md:translate-x-0 p-4 flex items-center gap-3 rounded-xl shadow-lg bg-white/80 backdrop-blur-sm">
        <div className="p-3 bg-blue-100 rounded-lg">
          <Upload className="w-5 h-5 text-blue-600" />
        </div>
        <div>
          <p className="font-semibold text-sm">Upload Your CV</p>
          <p className="text-xs text-gray-500">It only takes a few seconds</p>
        </div>
      </Card>
    </section>
  )
}
