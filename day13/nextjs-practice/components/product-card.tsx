import Image from "next/image"
import Link from "next/link"

interface Product {
  id: number
  title: string
  price: number
  images: string[]
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  // Using placeholder.svg for product images due to Next.js environment limitations
  // In a full Next.js app, you would configure remotePatterns in next.config.js
  // to allow images from the API domain, or use the `unoptimized` prop.
  const imageUrl = product.images?.[0] || "/placeholder.svg?height=200&width=200"

  return (
    <Link href={`/products/${product.id}`} className="product-card">
      <Image
        src={imageUrl || "/placeholder.svg"}
        alt={product.title}
        width={200}
        height={200}
        className="product-card-image"
      />
      <div className="product-card-content">
        <h3 className="product-card-title">{product.title}</h3>
        <p className="product-card-price">{product.price.toLocaleString("vi-VN")}₫</p>
      </div>
    </Link>
  )
}
