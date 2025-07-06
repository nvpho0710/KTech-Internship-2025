import { useState, createContext, useContext } from "react";
import type { ReactNode } from "react";
import styles from "./ShoppingCart.module.css";

// Product type
type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

// Product data (ảnh để trong public/images/)
const products: Product[] = [
  { id: 1, name: "Knorr Demiglace Sauce Powder 1kg", price: 315000, image: "/images/botxotnau.jpg" },
  { id: 2, name: "Kikkoman Soy Sauce 1L", price: 180000, image: "/images/doluong.png" },
  { id: 3, name: "Do Luong Rice Paper (5 pcs)", price: 25000, image: "/images/LeaPerrins.jpg" },
  { id: 4, name: "Lea & Perrins Worcestershire Sauce 290ml", price: 150000, image: "/images/mamnem.jpg" },
  { id: 5, name: "Thuan Phat Dipping Sauce", price: 22000, image: "/images/nuoc-tuong-kikoman-1l.png" },
];

// Cart context
type CartItem = Product & { quantity: number };
type CartContextType = {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  changeQuantity: (id: number, amount: number) => void;
};
const CartContext = createContext<CartContextType | undefined>(undefined);
const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};
const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const addToCart = (product: Product) => {
    setCart((prev) => {
      const found = prev.find((item) => item.id === product.id);
      if (found) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };
  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };
  const changeQuantity = (id: number, amount: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + amount } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, changeQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

// ProductCard component
const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart, changeQuantity, cart } = useCart();
  const cartItem = cart.find((item) => item.id === product.id);
  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.name} style={{ width: "100%", height: 120, objectFit: "cover", borderRadius: 6, marginBottom: 8 }} />
      <div className={styles.cardName}>{product.name}</div>
      <div className={styles.cardPrice}>{product.price.toLocaleString()} ₫</div>
      <div className={styles.cardQty}>
        <button onClick={() => changeQuantity(product.id, -1)} disabled={!cartItem || cartItem.quantity === 0}>-</button>
        <span>{cartItem?.quantity || 0}</span>
        <button onClick={() => changeQuantity(product.id, 1)}>+</button>
      </div>
      <button className={styles.addBtn} onClick={() => addToCart(product)}>Add to cart</button>
    </div>
  );
};

// ProductGrid component
const ProductGrid = () => (
  <div className={styles.grid}>
    {products.map((p) => (
      <ProductCard key={p.id} product={p} />
    ))}
  </div>
);

// CartIcon component
const CartIcon = ({ onClick }: { onClick: () => void }) => {
  const { cart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <div className={styles.cartIcon} onClick={onClick}>
      🛒 <span className={styles.cartCount}>{total}</span>
    </div>
  );
};

// CartDropdown component
const CartDropdown = ({ visible }: { visible: boolean }) => {
  const { cart, removeFromCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  if (!visible) return null;
  return (
    <div className={styles.dropdown}>
      {cart.length === 0 ? (
        <div>Cart is empty</div>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className={styles.dropdownItem}>
              <span>{item.name}</span>
              <span>{item.quantity} x {item.price.toLocaleString()} ₫</span>
              <span>{(item.price * item.quantity).toLocaleString()} ₫</span>
              <button onClick={() => removeFromCart(item.id)}>❌</button>
            </div>
          ))}
          <div className={styles.dropdownTotal}>Total: {total.toLocaleString()} ₫</div>
          <button className={styles.dropdownBtn}>View Cart</button>
        </>
      )}
    </div>
  );
};

// ShoppingCart main component
const ShoppingCart = () => {
  const [showCart, setShowCart] = useState(false);
  return (
    <CartProvider>
      <CartIcon onClick={() => setShowCart((v) => !v)} />
      <CartDropdown visible={showCart} />
      <div className={styles.container}>
        <h2 className={styles.title}>Shopping Cart Demo</h2>
        <ProductGrid />
      </div>
    </CartProvider>
  );
};

export default ShoppingCart;
