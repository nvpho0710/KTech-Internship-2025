import { useEffect, useState } from 'react';
import Pagination from './Pagination';
import './ProductGrid.css';

interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
  category: { id: number; name: string };
}


interface ProductGridProps {
  categoryIds: number[];
}

export default function ProductGrid({ categoryIds }: ProductGridProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const perPage = 4;

  useEffect(() => {
    setPage(1); // Reset page when filter changes
    if (categoryIds.length === 0) {
      setProducts([]);
      return;
    }
    setLoading(true);
    Promise.all(
      categoryIds.map((id: number) =>
        fetch(`https://api.escuelajs.co/api/v1/categories/${id}/products`)
          .then(res => res.json())
      )
    ).then((results: any[]) => {
      const all: Product[] = results.flat();
      const unique: Product[] = Array.from(new Map(all.map((p: Product) => [p.id, p])).values());
      setProducts(unique);
      setLoading(false);
    });
  }, [categoryIds]);

  if (loading) return <div>Đang tải sản phẩm...</div>;
  if (categoryIds.length === 0) return <div>Chọn bộ lọc để xem sản phẩm.</div>;
  if (products.length === 0) return <div>Không có sản phẩm nào.</div>;

  // Pagination logic
  const start = (page - 1) * perPage;
  const end = start + perPage;
  const pageProducts = products.slice(start, end);

  return (
    <div>
      <h2 className="product-title">Danh sách sản phẩm</h2>
      <div className="product-grid">
        {pageProducts.map(product => (
          <div className="product-card" key={product.id}>
            <div className="product-img-wrap">
              <img src={product.images[0]} alt={product.title} className="product-img" />
            </div>
            <div className="product-info">
              <div className="product-name">{product.title}</div>
              <div className="product-price">{product.price.toLocaleString()}đ</div>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        total={products.length}
        page={page}
        perPage={perPage}
        onChange={setPage}
      />
    </div>
  );
}

