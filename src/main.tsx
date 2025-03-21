import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ProductList from './components/ProductList';
import ProductDetails from './pages/ProductDetails';
import CartPage from './pages/CartPage';
import LoginForm from './pages/LoginForm'; // Import du formulaire de connexion
import { CartProvider } from './context/CartContext';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout><ProductList /></Layout>} />
          <Route path="/product/:id" element={<Layout><ProductDetails /></Layout>} />
          <Route path="/cart" element={<Layout><CartPage /></Layout>} />
          <Route path="/login" element={<Layout><LoginForm /></Layout>} /> {/* Route du formulaire de connexion */}
        </Routes>
      </Router>
    </CartProvider>
  </React.StrictMode>
);