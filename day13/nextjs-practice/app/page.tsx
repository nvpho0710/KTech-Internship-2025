import Image from "next/image"
import Header from "@/components/header"
import ProductCard from "@/components/product-card"

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

async function getProducts(): Promise<Product[]> {
  const res = await fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=10", {
    next: { revalidate: 60 }, // Revalidate data every 60 seconds (ISG-like behavior)
  })
  if (!res.ok) {
    throw new Error("Failed to fetch products")
  }
  return res.json()
}

export default async function HomePage() {
  const products = await getProducts()

  return (
    <div>
      <Header />
      <main>
        <section className="banner-section">
          <Image
            src="https://cdnv2.tgdd.vn/mwg-static/tgdd/Banner/bd/26/bd260331dfc577627b0c955e027cdaba.png"
            alt="Main Promotion Banner"
            width={1200}
            height={300}
            className="main-banner"
            priority // Load this banner immediately
          />
          <div style={{ marginTop: "20px" }}>
            <Image
              src="https://cdnv2.tgdd.vn/mwg-static/tgdd/Banner/52/b1/52b1bb50bff9caa98ee302e4151a6fd1.png"
              alt="Secondary Promotion Banner"
              width={1200}
              height={150}
              className="main-banner"
            />
          </div>
        </section>

        <section className="product-listing-section">
          <h2 className="section-title">Khuyến mãi Online</h2>
          <div className="product-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
