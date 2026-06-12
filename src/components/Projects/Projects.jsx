import React, { useState } from 'react';
import projectsData from '../../data/Projects.json';
import './Projects.css';

// EXPLICATION DE LA CONSTANTE extendedProjects :
// Au lieu d'un seul clone, on ajoute DEUX clones au début et DEUX clones à la fin.
// Cela garantit que peu importe où l'on se trouve sur les clones de téléportation,
// il y aura toujours une image visible en arrière-plan à gauche ET à droite.
const extendedProjects = [
  projectsData[projectsData.length - 2], // Index 0 : Clone OhMyFood (fond gauche)
  projectsData[projectsData.length - 1], // Index 1 : Clone Nina Carducci (pour atterrir en reculant)
  ...projectsData,                       // Index 2, 3, 4 : Les 3 VRAIS projets au centre
  projectsData[0],                       // Index 5 : Clone Print It (pour atterrir en avançant)
  projectsData[1]                        // Index 6 : Clone OhMyFood (fond droit)
];

const Projects = () => {
  // EXPLICATION DES CONSTANTES D'ÉTAT (useState) :
  
  // openDetailsId : Garde en mémoire l'ID du projet dont la description est ouverte.
  const [openDetailsId, setOpenDetailsId] = useState(null);
  
  // currentIndex : Garde en mémoire notre position sur le rail.
  // On commence maintenant à l'index "2", car c'est la position de notre VRAI projet "Print It".
  const [currentIndex, setCurrentIndex] = useState(2);
  
  // isTransitioning : Un interrupteur (vrai/faux) qui active ou désactive l'animation de glissement.
  const [isTransitioning, setIsTransitioning] = useState(true);

  const toggleDetails = (id) => {
    setOpenDetailsId(openDetailsId === id ? null : id);
  };

  const nextSlide = () => {
    if (currentIndex >= extendedProjects.length - 2) return; // Sécurité pour ne pas aller trop loin
    setIsTransitioning(true); // On remet l'animation en route
    setCurrentIndex((prevIndex) => prevIndex + 1);
    setOpenDetailsId(null);
  };

  const prevSlide = () => {
    if (currentIndex <= 1) return; // Sécurité pour ne pas reculer trop loin
    setIsTransitioning(true); // On remet l'animation en route
    setCurrentIndex((prevIndex) => prevIndex - 1);
    setOpenDetailsId(null);
  };

  // La téléportation avec nos nouvelles positions
  const handleTransitionEnd = () => {
    // Si on a reculé sur le clone de Nina (index 1)...
    if (currentIndex === 1) {
      setIsTransitioning(false); // On coupe le moteur d'animation
      setCurrentIndex(projectsData.length + 1); // Téléportation sur le VRAI Nina (index 4)
    } 
    // Si on a avancé sur le clone de Print It (index 5)...
    else if (currentIndex === projectsData.length + 2) {
      setIsTransitioning(false); // On coupe le moteur d'animation
      setCurrentIndex(2); // Téléportation sur le VRAI Print It (index 2)
    }
  };

  return (
    <section className="projects" id="projets">
      <h2 className="projects__title">PROJETS</h2>

      <div className="projects__carousel-wrapper">
        <button className="carousel-arrow arrow-left" onClick={prevSlide} aria-label="Projet précédent">
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
                // On ajoute la classe "no-transition" quand isTransitioning est faux pour bloquer l'effet de zoom
                className={`project-card ${index === currentIndex ? 'is-active' : 'is-inactive'} ${!isTransitioning ? 'no-transition' : ''}`} 
                key={index}
              >
                <div className="project-card__header">
                  <h3 className="project-card__title">{project.title}</h3>
                  
                  {/* Le lien GitHub */}
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

                {/* L'image cliquable pour ouvrir la modale */}
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
                  <h4 className="modal-title">{project.title}</h4>
                  <p className="modal-text">{project.description}</p>
                </div>

              </div>
            ))}
          </div>
        </div>

        <button className="carousel-arrow arrow-right" onClick={nextSlide} aria-label="Projet suivant">
          &#10095;
        </button>
      </div>

      {/* NOUVEAU : LES POINTS DE NAVIGATION (Dots) */}
      <div className="projects__dots">
        {projectsData.map((_, index) => {
          // Astuce : On calcule l'index réel du projet actif (en gérant les clones)
          const activeDotIndex = (currentIndex - 2 + projectsData.length) % projectsData.length;
          
          return (
            <button 
              key={index} 
              className={`dot ${activeDotIndex === index ? 'is-active' : ''}`}
              // Bonus : rendre les points cliquables pour sauter directement au projet !
              onClick={() => {
                setIsTransitioning(true);
                setCurrentIndex(index + 2); // +2 car les vrais projets commencent à l'index 2
                setOpenDetailsId(null);
              }}
              aria-label={`Aller au projet ${index + 1}`}
            ></button>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;