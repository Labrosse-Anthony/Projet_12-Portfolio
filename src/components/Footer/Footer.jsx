import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <h3 className="footer__name">Anthony Labrosse</h3>
        <p className="footer__title">Intégrateur web.</p>
        <p className="footer__copyright">
          {new Date().getFullYear()} Anthony Labrosse. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;