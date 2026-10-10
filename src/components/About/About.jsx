import './About.css';

const STRENGTHS = [
  {
    title: 'Responsive',
    text: 'Une approche mobile first, du téléphone à l’écran large.',
  },
  {
    title: 'Accessible',
    text: 'Navigation au clavier, contrastes et structure sémantique soignés.',
  },
  {
    title: 'Performant',
    text: 'Images optimisées et pages légères, testées avec Lighthouse.',
  },
];

const About = () => {
  return (
    <section className="about" id="apropos" aria-labelledby="apropos-titre">
      <div className="container">
        <div className="about__inner">
          <p className="section-label">03 — À propos</p>

          <div className="about__row">
            <h2 className="section-title about__title" id="apropos-titre">
              Une reconversion tournée vers le web
            </h2>

            <div className="about__content">
              <p className="about__intro">
                Après une reconversion professionnelle, j’ai suivi la formation
                Intégrateur Web d’OpenClassrooms. Je construis des interfaces en
                partant de maquettes Figma, avec HTML, CSS, JavaScript et React.
              </p>

              <ul className="about__strengths">
                {STRENGTHS.map(({ title, text }) => (
                  <li className="about__strength" key={title}>
                    <h3 className="about__strength-title">{title}</h3>
                    <p className="about__strength-text">{text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;