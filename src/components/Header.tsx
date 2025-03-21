import React from 'react';
import { FaSearch, FaUser, FaCartPlus} from 'react-icons/fa'; // Importer les icônes
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom'; // Pour la navigation
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  const navigate = useNavigate(); // Hook pour la navigation

  const handleUserIconClick = () => {
    navigate('/login'); // Rediriger vers la page de connexion
  };

  const { cart } = useCart();

  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">Namine Store</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Que recherchez-vous?"
            className="header-search"
          />
          <button className="search-button">
            <FaSearch className="search-icon" />
          </button>
        </div>
        <button className="user-icon-button" onClick={handleUserIconClick}>
          <FaUser className="user-icon" />
        </button>
        <Link to="/cart" className="cart-icon">
          <FaCartPlus />
          {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
        </Link>
      </div>
    </header>
  );
};

export default Header;