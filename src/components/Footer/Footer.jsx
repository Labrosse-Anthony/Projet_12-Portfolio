import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div>
          <p className="footer__name">Anthony Labrosse</p>
          <p className="footer__title">Intégrateur web</p>
        </div>

        <p className="footer__copyright">
          © {new Date().getFullYear()} Anthony Labrosse. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;