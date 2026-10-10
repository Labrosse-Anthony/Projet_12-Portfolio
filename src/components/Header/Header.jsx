import { useEffect, useState } from 'react';
import './Header.css';

const NAV_LINKS = [
  { href: '#projets', label: 'Projets' },
  { href: '#competences', label: 'Compétences' },
  { href: '#apropos', label: 'À propos' },
];

const Header = ({ toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  // La touche Échap ferme le menu mobile
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  return (
    <header className="header">
      <div className="container header__container">
        <a href="#presentation" className="header__brand" onClick={closeMenu}>
          <img
            src="./img/logo-labrosse-anthony.webp"
            alt=""
            className="header__logo"
            width="36"
            height="36"
          />
          <span className="header__name">Anthony Labrosse</span>
        </a>

        <nav
          id="menu-principal"
          className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}
          aria-label="Navigation principale"
        >
          <ul className="header__nav-list">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a className="header__link" href={href} onClick={closeMenu}>
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a className="btn btn--outline btn--small" href="#contact" onClick={closeMenu}>
                Me contacter
              </a>
            </li>
          </ul>
        </nav>

        <div className="header__actions">
          <button
            type="button"
            className="header__icon-btn"
            onClick={toggleTheme}
            aria-label="Changer le thème"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor" />
            </svg>
          </button>

          <button
            type="button"
            className="header__icon-btn header__menu-btn"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="menu-principal"
            aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {isMenuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;