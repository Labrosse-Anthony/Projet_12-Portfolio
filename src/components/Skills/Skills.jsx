import { asset } from '../../utils/asset';
import './Skills.css';

// Pour ajouter une compétence, il suffit d'ajouter une ligne ici.
// "mono: true" = icône monochrome qui s'adapte au thème clair/sombre (ex. GitHub).
const SKILLS = [
  { name: 'HTML', icon: 'img/logo-html.webp' },
  { name: 'CSS', icon: 'img/logo-css.webp' },
  { name: 'SCSS', icon: 'img/logo-scss.webp' },
  { name: 'JavaScript', icon: 'img/logo-java-script.webp' },
  { name: 'React', icon: 'img/logo-react.webp' },
  { name: 'Figma', icon: 'img/logo-figma.webp' },
  { name: 'GitHub', icon: 'img/logo-github.webp', mono: true },
];

const Skills = () => {
  return (
    <section className="skills" id="competences" aria-labelledby="competences-titre">
      <div className="container">
        <div className="skills__inner">
          <p className="section-label">01 — Compétences</p>
          <h2 className="section-title" id="competences-titre">
            Mes outils au quotidien
          </h2>

          <div className="skills__box">
            <ul className="skills__list">
              {SKILLS.map(({ name, icon, mono }) => (
                <li className="skill-chip" key={name}>
                  <img
                    src={asset(icon)}
                    alt=""
                    width="24"
                    height="24"
                    className={mono ? 'skill-chip__icon skill-chip__icon--mono' : 'skill-chip__icon'}
                  />
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;