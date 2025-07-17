import Image from "next/image"
import Header from "@/components/header"

interface Product {
  id: number
  title: string
  price: number
  description: string
  images: string[]
  category: {
    id: number
    name: string
    image: string
  }
}

async function getProduct(id: string): Promise<Product> {
  const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
    next: { revalidate: 60 }, // Revalidate data every 60 seconds
  })
  if (!res.ok) {
    throw new Error("Failed to fetch product")
  }
  return res.json()
}

// generateStaticParams will pre-render a few product detail pages at build time
export async function generateStaticParams() {
  const res = await fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=5") // Fetch a small set of products
  const products: Product[] = await res.json()

  return products.map((product) => ({
    id: product.id.toString(),
  }))
}

export default async function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id)

  // Using placeholder.svg for product images due to Next.js environment limitations
  const imageUrl = product.images?.[0] || "/placeholder.svg?height=400&width=400"

  return (
    <div>
      <Header />
      <main className="product-detail-container">
        <div className="product-detail-image-wrapper">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={product.title}
            width={400}
            height={400}
            className="product-detail-image"
          />
        </div>
        <div className="product-detail-info">
          <h1 className="product-detail-title">{product.title}</h1>
          <p className="product-detail-price">{product.price.toLocaleString("vi-VN")}₫</p>
          <p className="product-detail-description">{product.description}</p>
        </div>
      </main>
    </div>
  )
}
