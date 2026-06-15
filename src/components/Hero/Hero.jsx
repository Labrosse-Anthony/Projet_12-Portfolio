import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="presentation">
      <div className="hero__container">
        <div className="hero__top-row">
          <div className="hero__image-wrapper">
            <img 
              src="./img/photo-labrosse-anthony.webp" 
              alt="Portrait de Labrosse Anthony" 
              className="hero__profile-img" 
            />
          </div>
          <div className="hero__content">
            <h1 className="hero__title">Bonjour, <br/> Je suis Anthony Labrosse.</h1>
            <h2 className="hero__subtitle">Intégrateur web</h2>
            <p className="hero__description">
              Passionné par le web ainsi que la programmation c'est pour cela que j'ai choisi de faire une reconversion professionnelle dans ce domaine.
            </p>
            <p className="hero__contact-label">Contact :</p>
            <div className="hero__socials-container">
              <a href="mailto:labrosse.anthony.dev@gmail.com" className="hero__social-badge" target="_blank" rel="noopener noreferrer" aria-label="Me contacter">
                <img src="./img/email.webp" alt="Email" className="social-icon" />
              </a>
              <a href="https://github.com/Labrosse-Anthony" className="hero__social-badge" target="_blank" rel="noopener noreferrer" aria-label="Mon profil GitHub">
                <img src="./img/logo-github.webp" alt="GitHub" className="social-icon" />
              </a>
              <a href="https://www.linkedin.com/in/antonyla/" className="hero__social-badge" target="_blank" rel="noopener noreferrer" aria-label="Mon profil LinkedIn">
                <img src="./img/logo-linkedin.webp" alt="LinkedIn" className="social-icon" />
              </a>
            </div>
            
          </div>
          
        </div>

      </div>
    </section>
  );
};

export default Hero;