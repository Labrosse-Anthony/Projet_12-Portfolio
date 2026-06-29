import React, { useState } from 'react';
import projectsData from '../../data/Projects.json';
import './Slider.css';

const extendedProjects = [
  projectsData[projectsData.length - 2],
  projectsData[projectsData.length - 1],
  ...projectsData,
  projectsData[0],
  projectsData[1]
];

const Slider = () => {
  const [openDetailsId, setOpenDetailsId] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(2);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const toggleDetails = (id) => { 
    setOpenDetailsId(openDetailsId === id ? null : id);
  };

  const changeSlide = (direction) => {
    if (direction === 1 && currentIndex >= extendedProjects.length - 2) return;
    if (direction === -1 && currentIndex <= 1) return;
    
    setIsTransitioning(true); 
    setCurrentIndex((prevIndex) => prevIndex + direction);
    setOpenDetailsId(null);
  };

  const handleTransitionEnd = () => {
    if (currentIndex === 1) {
      setIsTransitioning(false);
      setCurrentIndex(projectsData.length + 1);
    } 
    else if (currentIndex === projectsData.length + 2) {
      setIsTransitioning(false);
      setCurrentIndex(2);
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