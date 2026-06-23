import React from 'react';
import Slider from '../Slider/Slider.jsx';
import '../Projects/Projects.css';

const Projects = () => {
  return (
    <section className="projects" id="projets">
      <h2 className="projects__title">PROJETS</h2>
      
      {/* On appelle le Slider ici */}
      <Slider />
      
    </section>
  );
};

export default Projects;