import React from 'react';
import './Hero.css';
import profileImg from '../../assets/img/photo-labrosse-anthony.webp'; 
import githubIcon from '../../assets/img/logo-github.webp'; 
import linkedinIcon from '../../assets/img/logo-linkedin.webp'; 

const Hero = () => {
  return (
    <section className="hero" id="presentation">
      <div className="hero__container">
        <div className="hero__top-row">
          <div className="hero__image-wrapper">
            <img 
              src={profileImg} 
              alt="Portrait de Labrosse Anthony" 
              className="hero__profile-img" 
            />
          </div>
          <div className="hero__content">
            <h1 className="hero__title">Bonjour, <br/> Je suis Labrosse Anthony.</h1>
            <h2 className="hero__subtitle">Intégrateur web</h2>
            <p className="hero__description">
              Passionné par le web ainsi que la programmation c'est pour cela que j'ai choisi de faire une reconversion professionnelle dans ce domaine.
            </p>
            <div className="hero__socials">
              <a href="https://github.com/Labrosse-Anthony" target="_blank" rel="noopener noreferrer" aria-label="Mon profil GitHub">
                <img src={githubIcon} alt="GitHub" className="social-icon" />
              </a>
              <a href="https://www.linkedin.com/in/antonyla/" target="_blank" rel="noopener noreferrer" aria-label="Mon profil LinkedIn">
                <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
              </a>
            </div>
            
          </div>
          
        </div>

      </div>
    </section>
  );
};

export default Hero;