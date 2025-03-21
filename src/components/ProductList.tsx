import React, { useState } from 'react';
import ProductCard from './ProductCard';
import Sidebar from './Sidebar'; // Importez la sidebar
import './ProductList.css';

// Importer les images
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

const PRODUCTS_PER_PAGE = 8; // Nombre de produits par page

const ProductList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1); // Page actuelle
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState<string | null>(null);

  // Filtrer les produits en fonction de la catégorie et de la tranche de prix
  const filteredProducts = products.filter((product) => {
    const matchesCategory = !selectedCategory || product.category === selectedCategory;
    const matchesPriceRange = !selectedPriceRange || (
      selectedPriceRange === '200000 ou plus'
        ? product.price >= 200000
        : (() => {
            const [min, max] = selectedPriceRange.split(' - ').map(Number);
            return product.price >= min && product.price <= max;
          })()
    );
    return matchesCategory && matchesPriceRange;
  });

  // Calculer les produits à afficher pour la page actuelle
  const indexOfLastProduct = currentPage * PRODUCTS_PER_PAGE;
  const indexOfFirstProduct = indexOfLastProduct - PRODUCTS_PER_PAGE;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Calculer le nombre total de pages
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

  // Fonction pour changer de page
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Fonction pour gérer le changement de catégorie
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Réinitialiser à la première page après un filtre
  };

  // Fonction pour gérer le changement de tranche de prix
  const handlePriceRangeChange = (priceRange: string) => {
    setSelectedPriceRange(priceRange);
    setCurrentPage(1); // Réinitialiser à la première page après un filtre
  };

  // Fonction pour réinitialiser les filtres
  const handleResetFilters = () => {
    setSelectedCategory(null);
    setSelectedPriceRange(null);
    setCurrentPage(1); // Réinitialiser à la première page
  };

  return (
    <div className="product-list-container">
      <Sidebar
        onCategoryChange={handleCategoryChange}
        onPriceRangeChange={handlePriceRangeChange}
        onResetFilters={handleResetFilters}
      />
      <div className="product-list">
        <div className="product-grid">
          {currentProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Pagination */}
        <div className="pagination">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Précédent
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={currentPage === index + 1 ? 'active' : ''}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Suivant
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductList;