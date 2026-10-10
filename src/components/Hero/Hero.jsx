import { asset } from '../../utils/asset';
import './Hero.css';

const iconProps = {
  width: 18,
  height: 18,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

const SOCIALS = [
  { href: 'mailto:labrosse.anthony.dev@gmail.com', label: 'M’écrire un e-mail', icon: 'img/email.webp', external: false },
  { href: 'https://github.com/Labrosse-Anthony', label: 'Mon profil GitHub', icon: 'img/logo-github.webp', external: true },
  { href: 'https://www.linkedin.com/in/antonyla/', label: 'Mon profil LinkedIn', icon: 'img/logo-linkedin.webp', external: true },
];

const Hero = () => {
  return (
    <section className="hero" id="presentation">
      <div className="container hero__container">
        <div className="hero__content">
          <p className="section-label">Intégrateur web · Drôme</p>

          <h1 className="hero__title">Bonjour, je suis Anthony Labrosse.</h1>

          <p className="hero__description">
            Passionné par le web et la programmation, j’ai choisi la reconversion
            professionnelle dans ce domaine. Je conçois des interfaces claires,
            responsives et accessibles.
          </p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#projets">
              Voir mes projets
              <svg {...iconProps}><path d="M12 5v14M19 12l-7 7-7-7" /></svg>
            </a>
            <a className="btn btn--outline" href={asset('cv-anthony-labrosse.pdf')} download>
              Télécharger mon CV
              <svg {...iconProps}><path d="M12 3v12M7 10l5 5 5-5M5 21h14" /></svg>
            </a>
          </div>

          <ul className="hero__socials">
            {SOCIALS.map(({ href, label, icon, external }) => (
              <li key={href}>
                <a
                  className="hero__social"
                  href={href}
                  aria-label={label}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  <img src={asset(icon)} alt="" width="22" height="22" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__photo-frame">
          <img
            src={asset('img/photo-labrosse-anthony.webp')}
            alt="Portrait d’Anthony Labrosse"
            className="hero__photo"
            width="800"
            height="800"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;