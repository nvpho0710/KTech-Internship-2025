import { useState } from 'react';
import styles from './state03.module.css';

const initialProducts = [
  {
    id: 1,
    name: 'vivo Y18 8GB/128GB',
    price: 4410000,
    image: 'images/samsung-galaxy.jpg',
    status: 'Còn bán',
  },
  {
    id: 2,
    name: 'FESTINA 40 mm Nam F20007/2',
    price: 3646000,
    image: 'images/samsung-galaxy.jpg',
    status: 'Còn bán',
  },
  {
    id: 3,
    name: 'Samsung Galaxy A55 5G 8GB/256GB',
    price: 0,
    image: 'images/samsung-galaxy.jpg',
    status: 'Ngừng kinh doanh',
  },
  {
    id: 4,
    name: 'Samsung Galaxy A56 5G 12GB/256GB',
    price: 11480000,
    image: 'images/samsung-galaxy.jpg',
    status: 'Còn bán',
  },
];

function formatPrice(price: number) {
  if (price === 0) return <span className={styles.statusStop}>Ngừng kinh doanh</span>;
  return (
    <span className={styles.price}>{price.toLocaleString('vi-VN')}<sup>đ</sup></span>
  );
}

export default function State03() {
  const [products, setProducts] = useState(initialProducts);

  const handleRemove = (id: number) => {
    setProducts(products.filter(p => p.id !== id));
  };
  const handleClear = () => setProducts([]);

  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <span className={styles.title}>Sản phẩm đã xem</span>
        <button className={styles.clearBtn} onClick={handleClear}>Xóa lịch sử</button>
      </div>
      <div className={styles.list}>
        {products.map(product => (
          <div className={styles.item} key={product.id}>
            <img src={product.image} alt={product.name} className={styles.img} />
            <div className={styles.info}>
              <div className={styles.name}>{product.name}</div>
              <div>{formatPrice(product.price)}</div>
            </div>
            <button className={styles.removeBtn} onClick={() => handleRemove(product.id)} aria-label="Xóa">
              ×
            </button>
          </div>
        ))}
        {products.length === 0 && <div className={styles.empty}>Không có sản phẩm nào</div>}
      </div>
    </div>
  );
}
