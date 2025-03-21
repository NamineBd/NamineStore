import React from 'react';
import { FaCartPlus} from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './ProductDetails.css';

// Importer l'image
import SmartphoneX from '../images/pixel.jpeg';
import LaptopPro from '../images/ordi.jpeg';
import TabletLite from '../images/tab.jpeg';
import Smartwatch4 from '../images/montre.jpeg';
import Mixeur from '../images/mix.jpeg';
import Casque from '../images/casque.jpeg';
import Enceinte from '../images/enceinte.jpeg';
import Tondeuse from '../images/tond.jpeg';
import Tele from '../images/tele.jpeg';
import Projec from '../images/proj.jpeg';
import Mic from '../images/mic.jpg';


const products = [
  { id: 1, name: 'Smartphone X', description: 'Écran AMOLED de 6.5 pouces', price: 150000, category: 'Téléphonie', image: SmartphoneX },
  { id: 2, name: 'Laptop Pro', description: '16 Go RAM | SSD 512 Go', price: 180000, category: 'Téléphonie', image: LaptopPro },
  { id: 3, name: 'Tablet Lite', description: '10 pouces | Batterie 12h', price: 13000, category: 'Téléphonie', image: TabletLite },
  { id: 4, name: 'Smartwatch 4', description: 'Bracelet silicone | Batterie 10h', price: 30000, category: 'Électronique', image: Smartwatch4 },
  { id: 5, name: 'Blender', description: 'Blender | Batterie 10h', price: 45000, category: 'Électroménager', image: Mixeur },
  { id: 6, name: 'Casque JBL', description: 'Casque audio | Batterie 10h', price: 60000, category: 'Électronique', image: Casque },
  { id: 7, name: 'Enceinte JBL', description: 'Enceinte portable | Batterie 10h', price: 90000, category: 'Électronique', image: Enceinte },
  { id: 8, name: 'Tondeuse Braun', description: 'Tondeuse à barbe | Batterie 10h', price: 10000, category: 'Électronique', image: Tondeuse },
  { id: 9, name: 'Television SAMSUNG', description: 'LED 20 pouces | Batterie 10h', price: 300000, category: 'Téléviseurs', image: Tele },
  { id: 10, name: 'Projecteur', description: 'Projecteur HD | Batterie 10h', price: 500000, category: 'Électronique', image: Projec },
  { id: 11, name: 'Microphone', description: 'Microphone USB | Batterie 10h', price: 8000, category: 'Électronique', image: Mic },
];

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  // Trouver le produit correspondant à l'ID
  const product = products.find((p) => p.id === parseInt(id!));

  // Si le produit n'existe pas, afficher un message d'erreur
  if (!product) {
    return <div className="product-details-page">Produit non trouvé</div>;
  }

const handleAddToCart = () => {
  addToCart({ id: product.id, name: product.name, price: product.price, quantity: 1 });
};

  return (
    <div className="product-details-page">
      <div className="product-details-container">
        <img src={product.image} alt={product.name} className="product-details-image" />
        <div className="product-details-info">
          <h1 className="product-details-name">{product.name}</h1>
          <p className="product-details-price">{product.price} FCFA</p>
          <p className="product-details-description">{product.description}</p>
          <br/>
          <button className="add-to-cart-button" onClick={handleAddToCart}>
            Ajouter au panier <FaCartPlus className="cart-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;