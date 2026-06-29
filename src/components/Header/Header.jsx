import React, { useState } from 'react';
import './Header.css';

const Header = ({ toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header__container">
        
        {/* 1. LE LOGO */}
        <div className="header__logo">
            <img src="./img/logo-labrosse-anthony.webp" alt="Logo Anthony Labrosse" className="logo-img" fetchPriority="high" width="100" height="100"/>
        </div>

        {/* 2. LA NAVIGATION (Masquée sur mobile, centrée sur desktop) */}
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

        {/* 3. CONTENEUR ACTIONS (Thème + Menu) */}
        <div className="header__actions">
          <button 
            className="header__theme-btn" 
            onClick={toggleTheme} 
            aria-label="Changer le thème"
          >
            <img src="./img/radio_button.svg" alt="Icône thème" className="theme-icon" />
          </button>
          <button 
            className="header__menu-btn"
            onClick={toggleMenu}
            aria-label="Menu de navigation"
          >
            <img 
              src={isMenuOpen ? "./img/croix.webp" : "./img/menu.webp"} 
              alt={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"} 
              className={`menu-icon ${isMenuOpen ? 'icon-cross' : ''}`}
            />
          </button>

        </div>

      </div>
    </header>
  );
};

export default Header;