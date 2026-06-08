import React from 'react';
import './Skills.css';
import htmlIcon from '../../assets/img/logo-html.webp';
import cssIcon from '../../assets/img/logo-css.webp';
import scssIcon from '../../assets/img/logo-scss.webp';
import jsIcon from '../../assets/img/logo-java-script.webp';
import figmaIcon from '../../assets/img/logo-figma.webp';
import reactIcon from '../../assets/img/logo-react.webp';
import githubIcon from '../../assets/img/logo-github.webp';

const Skills = () => {
  return (
    <section className="skills" id="competences">
      <h2 className="skills__title">Compétences</h2>
      <div className="skills__container">
        <div className="skill-badge">
            <img src={htmlIcon} alt="HTML" className="skill-icon" />
            <span className="skill-name">HTML</span>
        </div>
        <div className="skill-badge">
            <img src={cssIcon} alt="CSS" className="skill-icon" />
            <span className="skill-name">CSS</span>
        </div>
        <div className="skill-badge">
          <img src={scssIcon} alt="SCSS" className="skill-icon" />
          <span className="skill-name">SCSS</span>
        </div>
        <div className="skill-badge">
            <img src={jsIcon} alt="JavaScript" className="skill-icon" />
            <span className="skill-name">JAVASCRIPT</span>
        </div>
        <div className="skill-badge">
            <img src={figmaIcon} alt="Figma" className="skill-icon" />
          <span className="skill-name">FIGMA</span>
        </div>
        <div className="skill-badge">
            <img src={reactIcon} alt="React" className="skill-icon" />
            <span className="skill-name">REACT</span>
        </div>
        <div className="skill-badge">
            <img src={githubIcon} alt="GitHub" className="skill-icon" />
            <span className="skill-name">GITHUB</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;