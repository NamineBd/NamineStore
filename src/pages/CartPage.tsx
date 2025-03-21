import React from 'react';
import { useCart } from '../context/CartContext';
import './CartPage.css';

const CartPage: React.FC = () => {
  const { cart } = useCart();

  return (
    <div className="cart-page">
      <h1>Votre Panier</h1>
      {cart.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <ul className="cart-items">
          {cart.map((item) => (
            <li key={item.id} className="cart-item">
              <span>{item.name}</span>
              <span>{item.quantity} x {item.price} FCFA</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;