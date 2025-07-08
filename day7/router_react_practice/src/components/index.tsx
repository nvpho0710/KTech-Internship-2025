
import { Link } from 'react-router';
import './Header.css';

export function Header() {
  return (
    <header className="header-nav">
      <div className="brand">Magazines</div>
      <nav className="nav-links">   
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/category">Category</Link>
        <Link to="/product">Product</Link>
        <Link to="/login">Login</Link>
        <Link to="/customer">Customer</Link>
        <span className="cart">
          <span role="img" aria-label="cart">🛒</span> <span>0</span>
        </span>
      </nav>
    </header>
  );
}
