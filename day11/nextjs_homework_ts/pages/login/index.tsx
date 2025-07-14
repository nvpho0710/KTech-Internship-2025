import Link from 'next/link';

export default function LoginPage() {
  return (
    <div>
      <nav style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/products">Products</Link>
        <Link href="/login">Login</Link>
      </nav>
      <h1>Login Page</h1>
    </div>
  );
}
