const API_BASE_URL = "https://api.escuelajs.co/api/v1"

export async function getProducts(offset = 0, limit = 10) {
  try {
    const response = await fetch(`${API_BASE_URL}/products?offset=${offset}&limit=${limit}`, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    })

    if (!response.ok) {
      throw new Error("Failed to fetch products")
    }

    return await response.json()
  } catch (error) {
    console.error("Error fetching products:", error)
    return []
  }
}

export async function getProduct(id: string) {
  try {
    const response = await fetch(`${API_BASE_URL}/products/${id}`, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    })

    if (!response.ok) {
      return null
    }

    return await response.json()
  } catch (error) {
    console.error("Error fetching product:", error)
    return null
  }
}

export async function getCategories() {
  try {
    const response = await fetch(`${API_BASE_URL}/categories`, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    })

    if (!response.ok) {
      throw new Error("Failed to fetch categories")
    }

    return await response.json()
  } catch (error) {
    console.error("Error fetching categories:", error)
    return []
  }
}

export async function getProductsByCategory(categoryId: number, offset = 0, limit = 10) {
  try {
    const response = await fetch(`${API_BASE_URL}/categories/${categoryId}/products?offset=${offset}&limit=${limit}`, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    })

    if (!response.ok) {
      throw new Error("Failed to fetch products by category")
    }

    return await response.json()
  } catch (error) {
    console.error("Error fetching products by category:", error)
    return []
  }
}
