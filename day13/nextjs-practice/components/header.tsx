import Image from "next/image"
import Link from "next/link"
import {
  Search,
  User,
  ShoppingCart,
  MapPin,
  Smartphone,
  Laptop,
  Headphones,
  Watch,
  Tablet,
  Monitor,
  Printer,
  SmartphoneIcon as SimCard,
  ChevronDown,
  MoreHorizontal,
} from "lucide-react"

export default function Header() {
  return (
    <header className="header">
      <Link href="/">
        <Image
          src="/placeholder.svg?height=40&width=150" // Placeholder for thegioididong logo
          alt="The Gioi Di Dong Logo"
          width={150}
          height={40}
          className="header-logo"
        />
      </Link>
      <div className="search-bar">
        <input type="text" placeholder="Bạn tìm gì..." className="search-input" />
        <Search className="search-icon" size={18} />
      </div>
      <div className="header-actions">
        <Link href="#" className="header-action-item">
          <User size={20} />
          <span>Đăng nhập</span>
        </Link>
        <Link href="#" className="header-action-item">
          <ShoppingCart size={20} />
          <span>Giỏ hàng</span>
        </Link>
        <Link href="#" className="header-action-item">
          <MapPin size={20} />
          <span>Hồ Chí Minh</span>
        </Link>
      </div>
      <nav className="nav-bar">
        <Link href="#" className="nav-item">
          <Smartphone size={20} />
          <span>Điện thoại</span>
        </Link>
        <Link href="#" className="nav-item">
          <Laptop size={20} />
          <span>Laptop</span>
        </Link>
        <Link href="#" className="nav-item">
          <Headphones size={20} />
          <span>Phụ kiện</span>
          <ChevronDown size={16} />
        </Link>
        <Link href="#" className="nav-item">
          <Watch size={20} />
          <span>Smartwatch</span>
        </Link>
        <Link href="#" className="nav-item">
          <Watch size={20} /> {/* Reusing Watch icon for Đồng hồ */}
          <span>Đồng hồ</span>
        </Link>
        <Link href="#" className="nav-item">
          <Tablet size={20} />
          <span>Tablet</span>
        </Link>
        <Link href="#" className="nav-item">
          <Monitor size={20} /> {/* Using Monitor for Máy cũ, Thu cũ */}
          <span>Máy cũ, Thu cũ</span>
          <ChevronDown size={16} />
        </Link>
        <Link href="#" className="nav-item">
          <Printer size={20} /> {/* Using Printer for Màn hình, Máy in */}
          <span>Màn hình, Máy in</span>
          <ChevronDown size={16} />
        </Link>
        <Link href="#" className="nav-item">
          <SimCard size={20} />
          <span>Sim, Thẻ cào</span>
          <ChevronDown size={16} />
        </Link>
        <Link href="#" className="nav-item">
          <MoreHorizontal size={20} /> {/* Using MoreHorizontal for Dịch vụ tiện ích */}
          <span>Dịch vụ tiện ích</span>
          <ChevronDown size={16} />
        </Link>
      </nav>
    </header>
  )
}
