import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  // Cet état va me permettre de savoir si le menu burger mobile est ouvert ou fermé
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fonction pour inverser l'état du menu (ouvert/fermé)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header__container">
        {/* Le Logo */}
        <div className="header__logo">
          <a href="#presentation">LA</a>
        </div>

        {/* Le bouton Burger (visible uniquement sur mobile/tablette) */}
        <button 
          className={`header__burger ${isMenuOpen ? 'header__burger--active' : ''}`}
          onClick={toggleMenu}
          aria-label="Menu de navigation"
        >
          <span className="burger-bar"></span>
          <span className="burger-bar"></span>
          <span className="burger-bar"></span>
        </button>

        {/* La Navigation */}
        {/* Si isMenuOpen est vrai, on ajoute la classe 'header__nav--open' pour afficher le menu en mobile */}
        <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <a href="#presentation" onClick={() => setIsMenuOpen(false)}>Présentation</a>
            </li>
            <li className="header__nav-item">
              <a href="#competences" onClick={() => setIsMenuOpen(false)}>Compétences</a>
            </li>
            <li className="header__nav-item">
              <a href="#projets" onClick={() => setIsMenuOpen(false)}>Projets</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;