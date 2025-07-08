
import { BrowserRouter, Routes, Route } from 'react-router';
import { Header } from './components';
import HomePage from './components/page/HomePage';
import BlogPage from './components/page/BlogPage';
import CategoryPage from './components/page/CategoryPage';
import ProductPage from './components/page/ProductPage';
import LoginPage from './components/page/LoginPage';
import CustomerPage from './components/page/CustomerPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/customer" element={<CustomerPage />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
