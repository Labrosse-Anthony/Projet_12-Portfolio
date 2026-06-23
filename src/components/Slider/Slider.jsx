import React, { useState } from 'react';
import projectsData from '../../data/Projects.json';
import './Slider.css';

// EXPLICATION DE LA CONSTANTE extendedProjects :
const extendedProjects = [
  projectsData[projectsData.length - 2], // Index 0 : Clone OhMyFood
  projectsData[projectsData.length - 1], // Index 1 : Clone Nina Carducci
  ...projectsData,                       // Index 2, 3, 4 : Affiche les 3 VRAIS projets
  projectsData[0],                       // Index 5 : Clone Print It
  projectsData[1]                        // Index 6 : Clone OhMyFood
];

const Slider = () => {
  // EXPLICATION DES CONSTANTES D'ÉTAT
  const [openDetailsId, setOpenDetailsId] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(2);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const toggleDetails = (id) => {
    setOpenDetailsId(openDetailsId === id ? null : id);
  };

  const nextSlide = () => {
    if (currentIndex >= extendedProjects.length - 2) return; 
    setIsTransitioning(true); 
    setCurrentIndex((prevIndex) => prevIndex + 1);
    setOpenDetailsId(null);
  };

  const prevSlide = () => {
    if (currentIndex <= 1) return; 
    setIsTransitioning(true); 
    setCurrentIndex((prevIndex) => prevIndex - 1);
    setOpenDetailsId(null);
  };

  // La téléportation
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
          onClick={prevSlide} 
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
            {extendedProjects.map((project, index) => (
              <div 
                className={`project-card ${index === currentIndex ? 'is-active' : 'is-inactive'} ${!isTransitioning ? 'no-transition' : ''}`} 
                key={index}
              >
                <div className="project-card__header">
                  <h3 className="project-card__title">{project.title}</h3>
                  <a 
                    href={project.link} 
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
                  onClick={() => toggleDetails(project.id)}
                  role="button"
                  tabIndex={0}
                >
                  <div className="project-card__image-wrapper">
                    <img src={project.image} alt={`Aperçu du projet ${project.title}`} />
                  </div>
                </div>

                <div className={`project-card__details-modal ${openDetailsId === project.id ? 'is-open' : ''}`}>
                  <button 
                    className="modal-close-btn" 
                    onClick={() => setOpenDetailsId(null)}
                    aria-label="Fermer les détails"
                  >
                    &times;
                  </button>
                  <h4 className="modal-title">{project.title}</h4>
                  <p className="modal-text">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button 
          className="carousel-arrow arrow-right" 
          onClick={nextSlide} 
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