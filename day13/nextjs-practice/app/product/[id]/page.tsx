import { notFound } from "next/navigation"
import Image from "next/image"
import { getProduct, getProducts } from "@/lib/api"
import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Heart } from "lucide-react"

interface ProductPageProps {
  params: {
    id: string
  }
}

export const revalidate = 3600 // ISG: revalidate every hour

export async function generateStaticParams() {
  const products = await getProducts(0, 50)
  return products.map((product: any) => ({
    id: product.id.toString(),
  }))
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProduct(params.id)

  if (!product) {
    notFound()
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN").format(price) + "đ"
  }

  const getValidImageUrl = (images: string[]) => {
    if (!images || images.length === 0) {
      return "/placeholder.svg?height=400&width=400"
    }

    const validImage = images.find((img) => {
      try {
        new URL(img)
        return true
      } catch {
        return false
      }
    })

    return validImage || "/placeholder.svg?height=400&width=400"
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="aspect-square relative bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src={getValidImageUrl(product.images) || "/placeholder.svg"}
                  alt={product.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  unoptimized
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = "/placeholder.svg?height=400&width=400"
                  }}
                />
              </div>
              <div className="flex gap-2 overflow-x-auto">
                {product.images?.slice(1, 5).map((image: string, index: number) => {
                  try {
                    new URL(image)
                    return (
                      <div key={index} className="flex-shrink-0 w-20 h-20 relative bg-gray-100 rounded border">
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`${product.title} ${index + 2}`}
                          fill
                          className="object-cover"
                          sizes="80px"
                          unoptimized
                          onError={(e) => {
                            const target = e.target as HTMLImageElement
                            target.src = "/placeholder.svg?height=80&width=80"
                          }}
                        />
                      </div>
                    )
                  } catch {
                    return null
                  }
                })}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">{product.title}</h1>
                <p className="text-sm text-gray-600 mb-4">Danh mục: {product.category?.name}</p>
                <div className="text-3xl font-bold text-red-600 mb-4">{formatPrice(product.price)}</div>
              </div>

              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">{product.description}</p>
              </div>

              <div className="flex gap-4">
                <Button size="lg" className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Thêm vào giỏ hàng
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-red-500 text-red-500 hover:bg-red-50 bg-transparent"
                >
                  <Heart className="w-5 h-5" />
                </Button>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h3 className="font-semibold text-yellow-800 mb-2">Ưu đãi đặc biệt</h3>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• Miễn phí giao hàng toàn quốc</li>
                  <li>• Bảo hành chính hãng 12 tháng</li>
                  <li>• Đổi trả trong 7 ngày</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
