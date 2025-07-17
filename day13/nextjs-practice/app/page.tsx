import { Suspense } from "react"
import Header from "@/components/header"
import HeroBanner from "@/components/hero-banner"
import ProductGrid from "@/components/product-grid"
import { getProducts, getCategories } from "@/lib/api"

export const revalidate = 3600 // ISG: revalidate every hour

export default async function HomePage() {
  const [products, categories] = await Promise.all([getProducts(0, 12), getCategories()])

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroBanner />
      <main className="container mx-auto px-4 py-8">
        <Suspense fallback={<div className="text-center py-8">Đang tải...</div>}>
          <ProductGrid initialProducts={products} categories={categories} />
        </Suspense>
      </main>
    </div>
  )
}
