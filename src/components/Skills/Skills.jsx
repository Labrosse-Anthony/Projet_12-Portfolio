import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section className="skills" id="competences">
      <h2 className="skills__title">COMPÉTENCES</h2>
      <div className="skills__container">
        <div className="skill-badge">
            <img src="./img/logo-html.webp" alt="" className="skill-icon" />
            <span className="skill-name">HTML</span>
        </div>
        <div className="skill-badge">
            <img src="./img/logo-css.webp" alt="" className="skill-icon" />
            <span className="skill-name">CSS</span>
        </div>
        <div className="skill-badge">
          <img src="./img/logo-scss.webp" alt="" className="skill-icon" />
          <span className="skill-name">SCSS</span>
        </div>
        <div className="skill-badge">
            <img src="./img/logo-java-script.webp" alt="" className="skill-icon" />
            <span className="skill-name">JAVASCRIPT</span>
        </div>
        <div className="skill-badge">
            <img src="./img/logo-figma.webp" alt="" className="skill-icon" />
          <span className="skill-name">FIGMA</span>
        </div>
        <div className="skill-badge">
            <img src="./img/logo-react.webp" alt="" className="skill-icon" />
            <span className="skill-name">REACT</span>
        </div>
        <div className="skill-badge">
            <img src="./img/logo-github.webp" alt="" className="skill-icon" />
            <span className="skill-name">GITHUB</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;