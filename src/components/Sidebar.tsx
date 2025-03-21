import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar: React.FC<{
  onCategoryChange: (category: string) => void;
  onPriceRangeChange: (priceRange: string) => void;
  onResetFilters: () => void; // Nouvelle prop pour réinitialiser les filtres
}> = ({ onCategoryChange, onPriceRangeChange, onResetFilters }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Par défaut, la sidebar est ouverte en mode plein écran

  const categories = ['Électronique', 'Téléphonie', 'Téléviseurs', 'Électroménager'];
  const priceRanges = [
    '1000 - 12000',
    '12000 - 40000',
    '40000 - 80000',
    '80000 - 120000',
    '200000 ou plus',
  ];

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    onCategoryChange(category);
  };

  const handlePriceRangeClick = (priceRange: string) => {
    setSelectedPriceRange(priceRange);
    onPriceRangeChange(priceRange);
  };

  const handleResetFiltersClick = () => {
    setSelectedCategory(null); // Réinitialiser la catégorie sélectionnée
    setSelectedPriceRange(null); // Réinitialiser la tranche de prix sélectionnée
    onResetFilters(); // Appeler la fonction de réinitialisation des filtres
  };

  return (
    <>
      {/* Bouton hamburger pour les petits écrans */}
      <button className="hamburger-button" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        ☰
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <h3>Catégories</h3>
        <ul>
          {categories.map((category) => (
            <li
              key={category}
              className={selectedCategory === category ? 'active' : ''}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </li>
          ))}
        </ul>

        <h3>Tranches de prix</h3>
        <ul>
          {priceRanges.map((priceRange) => (
            <li
              key={priceRange}
              className={selectedPriceRange === priceRange ? 'active' : ''}
              onClick={() => handlePriceRangeClick(priceRange)}
            >
              {priceRange}
            </li>
          ))}
        </ul>
        {/* Bouton "Tous les produits" */}
        <button className="reset-filters-button" onClick={handleResetFiltersClick}>
          Tous les produits
        </button>
      </div>

      {/* Overlay pour fermer la sidebar */}
      {isSidebarOpen && (
        <div className="sidebar-overlay" onClick={() => setIsSidebarOpen(false)} />
      )}
    </>
  );
};

export default Sidebar;