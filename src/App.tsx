import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProductListingPage from './pages/ProductListingPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ShoppingCartPage from './pages/ShoppingCartPage';
import { CartProvider } from './context/CartContext';
import './App.css';

const App: React.FC = () => {
  return (
    <CartProvider> {/* Ensure CartProvider is wrapping the whole application */}
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<ProductListingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/cart" element={<ShoppingCartPage />} />
        </Routes>
      </div>
    </CartProvider>
  );
};

export default App;
