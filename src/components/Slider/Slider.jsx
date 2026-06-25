import React, { useState } from 'react';
import projectsData from '../../data/Projects.json';
import './Slider.css';

const extendedProjects = [
  projectsData[projectsData.length - 2], // Index 0 : Clone OhMyFood
  projectsData[projectsData.length - 1], // Index 1 : Clone Nina Carducci
  ...projectsData,                       // Index 2, 3, 4 : Affiche les 3 VRAIS projets
  projectsData[0],                       // Index 5 : Clone Print It
  projectsData[1]                        // Index 6 : Clone OhMyFood
];

const Slider = () => {
  const [openDetailsId, setOpenDetailsId] = useState(null); // 'openDetailsId' stocke l'ID du projet dont la modale de détails est actuellement ouverte (null = aucune)
  const [currentIndex, setCurrentIndex] = useState(2);  // On commence à 2 car c'est l'index du premier VRAI projet dans 'extendedProjects'.
  const [isTransitioning, setIsTransitioning] = useState(true); // 'isTransitioning' permet d'activer ou désactiver l'animation de glissement.

  // Fonction pour ouvrir ou fermer les détails d'un projet spécifique
  const toggleDetails = (id) => { 
    setOpenDetailsId(openDetailsId === id ? null : id); // Si la modale cliquée est déjà ouverte, on la ferme (null), sinon on l'ouvre (id)
  };

  // OPTIMISATION : On fusionne nextSlide et prevSlide en une seule fonction
  // On passe +1 pour avancer, et -1 pour reculer
  const changeSlide = (direction) => {
    if (direction === 1 && currentIndex >= extendedProjects.length - 2) return; // Sécurité fin
    if (direction === -1 && currentIndex <= 1) return; // Sécurité début
    
    setIsTransitioning(true); 
    setCurrentIndex((prevIndex) => prevIndex + direction);
    setOpenDetailsId(null); // On ferme la modale lors du changement de slide
  };

  const handleTransitionEnd = () => {  // La téléportation : fonction appelée automatiquement à la fin de chaque transition CSS
    if (currentIndex === 1) { // Si on est arrivé sur le clone de la fin (qui se trouve au début visuellement) 
      setIsTransitioning(false); // On coupe l'animation
      setCurrentIndex(projectsData.length + 1); // et on se téléporte sur le vrai projet correspondant à la fin
    } 
    else if (currentIndex === projectsData.length + 2) { // Si on est arrivé sur le clone du début (qui se trouve à la fin visuellement)
      setIsTransitioning(false);  // On coupe l'animation
      setCurrentIndex(2); // et on se téléporte sur le vrai premier projet (Index 2)
    }
  };

  return (
    <>
      <div className="projects__carousel-wrapper">
        <button 
          className="carousel-arrow arrow-left" 
          onClick={() => changeSlide(-1)} 
          aria-label="Projet précédent"
        >
          &#10094;
        </button>

        <div className="projects__slider-viewport">
          <div 
            className="projects__slider-track"
            style={{ 
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none' 
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {/* OPTIMISATION : On extrait directement id, title, link, image, description */}
            {extendedProjects.map(({ id, title, link, image, description }, index) => (
              <div 
                className={`project-card ${index === currentIndex ? 'is-active' : 'is-inactive'} ${!isTransitioning ? 'no-transition' : ''}`} 
                key={index}
              >
                <div className="project-card__header">
                  <h3 className="project-card__title">{title}</h3>
                  <a 
                    href={link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-card__github-link"
                    aria-label="Voir le code sur GitHub"
                  >
                    <img src="./img/logo-github.webp" alt="GitHub" className="github-icon" />
                  </a>
                </div>

                <div 
                  className="project-card__image-link" 
                  onClick={() => toggleDetails(id)}
                  role="button"
                  tabIndex={0}
                >
                  <div className="project-card__image-wrapper">
                    <img src={image} alt={`Aperçu du projet ${title}`} />
                  </div>
                </div>

                <div className={`project-card__details-modal ${openDetailsId === id ? 'is-open' : ''}`}>
                  <button 
                    className="modal-close-btn" 
                    onClick={() => setOpenDetailsId(null)}
                    aria-label="Fermer les détails"
                  >
                    &times;
                  </button>
                  <h4 className="modal-title">{title}</h4>
                  <p className="modal-text">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button 
          className="carousel-arrow arrow-right" 
          onClick={() => changeSlide(1)} 
          aria-label="Projet suivant"
        >
          &#10095;
        </button>
      </div>

      <div className="projects__dots">
        {projectsData.map((_, index) => {
          const activeDotIndex = (currentIndex - 2 + projectsData.length) % projectsData.length;
          return (
            <button 
              key={index} 
              className={`dot ${activeDotIndex === index ? 'is-active' : ''}`}
              onClick={() => {
                setIsTransitioning(true);
                setCurrentIndex(index + 2); 
                setOpenDetailsId(null);
              }}
              aria-label={`Aller au projet ${index + 1}`}
            ></button>
          );
        })}
      </div>
    </>
  );
};

export default Slider;