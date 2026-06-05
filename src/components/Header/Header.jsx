import React, { useState } from 'react';
import './Header.css';

import logoImg from '../../assets/img/logo-labrosse-anthony.webp';
import menuIcon from '../../assets/img/menu.svg';
import themeIcon from '../../assets/img/radio_button.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header__container">
        
        {/* 1. LE LOGO */}
        <div className="header__logo">
            <img src={logoImg} alt="Logo Anthony Labrosse" className="logo-img" />
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
          
          {/* Le bouton Dark/Light mode */}
          <button className="header__theme-btn" aria-label="Changer le thème">
            <img src={themeIcon} alt="Icône thème" className="theme-icon" />
          </button>

          {/* Le bouton Menu (Visible uniquement sur mobile) */}
          <button 
            className="header__menu-btn"
            onClick={toggleMenu}
            aria-label="Menu de navigation"
          >
            <img src={menuIcon} alt="Ouvrir le menu" className="menu-icon" />
          </button>

        </div>

      </div>
    </header>
  );
};

export default Header;