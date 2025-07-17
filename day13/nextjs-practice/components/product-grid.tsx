"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { getProducts, getProductsByCategory } from "@/lib/api"

interface Product {
  id: number
  title: string
  price: number
  images: string[]
  category: {
    id: number
    name: string
  }
}

interface Category {
  id: number
  name: string
}

interface ProductGridProps {
  initialProducts: Product[]
  categories: Category[]
}

export default function ProductGrid({ initialProducts, categories }: ProductGridProps) {
  const [products, setProducts] = useState<Product[]>(initialProducts)
  const [loading, setLoading] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN").format(price) + "đ"
  }

  const handleCategoryChange = async (categoryId: string) => {
    setLoading(true)
    setSelectedCategory(categoryId)

    try {
      let newProducts
      if (categoryId === "all") {
        newProducts = await getProducts(0, 12)
      } else {
        newProducts = await getProductsByCategory(Number.parseInt(categoryId), 0, 12)
      }
      setProducts(newProducts)
    } catch (error) {
      console.error("Error fetching products:", error)
    } finally {
      setLoading(false)
    }
  }

  const getValidImageUrl = (images: string[]) => {
    if (!images || images.length === 0) {
      return "/placeholder.svg?height=200&width=200"
    }

    // Filter out invalid URLs and get the first valid one
    const validImage = images.find((img) => {
      try {
        new URL(img)
        return true
      } catch {
        return false
      }
    })

    return validImage || "/placeholder.svg?height=200&width=200"
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Sản phẩm nổi bật</h2>
        <select
          value={selectedCategory}
          onChange={(e) => handleCategoryChange(e.target.value)}
          className="w-48 px-3 py-2 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
        >
          <option value="all">Tất cả sản phẩm</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id.toString()}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      {loading ? (
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-500"></div>
          <p className="mt-2 text-gray-600">Đang tải sản phẩm...</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {products.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`}>
              <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 group">
                <div className="aspect-square relative mb-3 bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src={getValidImageUrl(product.images) || "/placeholder.svg"}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-200"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
                    unoptimized
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = "/placeholder.svg?height=200&width=200"
                    }}
                  />
                  <div className="absolute top-2 left-2 bg-yellow-400 text-black text-xs px-2 py-1 rounded">
                    VƯỢT TRỘI
                  </div>
                </div>

                <h3 className="font-medium text-sm text-gray-900 mb-2 line-clamp-2 min-h-[2.5rem]">{product.title}</h3>

                <div className="space-y-2">
                  <div className="text-red-600 font-bold text-lg">{formatPrice(product.price)}</div>
                  <div className="text-gray-400 text-sm line-through">
                    {formatPrice(Math.floor(product.price * 1.2))}
                  </div>
                </div>

                <Button className="w-full mt-3 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm" variant="ghost">
                  Sắp mở bán
                </Button>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
