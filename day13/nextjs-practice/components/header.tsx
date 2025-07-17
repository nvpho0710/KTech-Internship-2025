import Link from "next/link"
import { Search, User, ShoppingCart, MapPin } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-yellow-400 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-black rounded-full"></div>
              </div>
            </div>
            <span className="text-xl font-bold text-black">thegioididong</span>
            <span className="text-sm text-black">.com</span>
          </Link>

          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Bạn tìm gì..."
                className="w-full pl-10 pr-4 py-2 rounded-full border-0 bg-white"
              />
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <Button variant="ghost" className="text-black hover:bg-yellow-300 flex items-center space-x-1">
              <User className="w-5 h-5" />
              <span className="hidden md:inline">Đăng nhập</span>
            </Button>

            <Button variant="ghost" className="text-black hover:bg-yellow-300 flex items-center space-x-1">
              <ShoppingCart className="w-5 h-5" />
              <span className="hidden md:inline">Giỏ hàng</span>
            </Button>

            <Button variant="ghost" className="text-black hover:bg-yellow-300 flex items-center space-x-1">
              <MapPin className="w-5 h-5" />
              <span className="hidden md:inline">Hồ Chí Minh</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
