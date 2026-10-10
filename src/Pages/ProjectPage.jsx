import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import projects from '../data/Projects.json';
import { asset } from '../utils/asset';
import './ProjectPage.css';

const ProjectPage = () => {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  // Titre de l'onglet : "Nom du projet | Anthony Labrosse"
  useEffect(() => {
    if (!project) return;
    const previousTitle = document.title;
    document.title = `${project.title} | Anthony Labrosse`;
    return () => {
      document.title = previousTitle;
    };
  }, [project]);

  if (!project) {
    return (
      <div className="container project-page">
        <p className="section-label">Erreur 404</p>
        <h1 className="section-title">Projet introuvable</h1>
        <Link className="btn btn--primary" to="/#projets">Retour aux projets</Link>
      </div>
    );
  }

  const {
    title, tags = [], image, link, siteUrl, type, duration, role, intro,
    objectives = [], achievements = [], resultsText, scores = [], challenge,
    screenshots = [],
  } = project;

  // Seules les sections renseignées s'affichent, numérotées automatiquement.
  const sections = [
    objectives.length > 0 && {
      key: 'objectifs',
      title: 'Objectifs',
      content: (
        <ul className="case__cards">
          {objectives.map(({ title: cardTitle, text }) => (
            <li className="case-card" key={cardTitle}>
              <h3 className="case-card__title">{cardTitle}</h3>
              <p className="case-card__text">{text}</p>
            </li>
          ))}
        </ul>
      ),
    },
    achievements.length > 0 && {
      key: 'realise',
      title: 'Ce que j’ai réalisé',
      content: (
        <ol className="case__steps">
          {achievements.map(({ title: stepTitle, text }, index) => (
            <li className="case-step" key={stepTitle}>
              <span className="case-step__num" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="case-step__title">{stepTitle}</h3>
                <p className="case-step__text">{text}</p>
              </div>
            </li>
          ))}
        </ol>
      ),
    },
    (resultsText || scores.length > 0) && {
      key: 'resultats',
      title: 'Résultats',
      content: (
        <>
          {resultsText && <p className="case__text">{resultsText}</p>}
          {scores.length > 0 && (
            <ul className="case__scores">
              {scores.map(({ value, label }) => (
                <li className="case-score" key={label}>
                  <p className="case-score__value">{value}</p>
                  <p className="case-score__label">{label}</p>
                </li>
              ))}
            </ul>
          )}
        </>
      ),
    },
    challenge && {
      key: 'defi',
      title: 'Un défi rencontré',
      content: <p className="case__box">{challenge}</p>,
    },
    screenshots.length > 0 && {
      key: 'captures',
      title: 'Captures',
      content: (
        <ul className="case__shots">
          {screenshots.map(({ src, alt }) => (
            <li key={src}>
              <img src={asset(src)} alt={alt} loading="lazy" />
            </li>
          ))}
        </ul>
      ),
    },
  ].filter(Boolean);

  return (
    <article className="container project-page">
      <Link className="project-page__back" to="/#projets">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Retour aux projets
      </Link>

      <p className="section-label">Étude de cas</p>
      <h1 className="project-page__title">{title}</h1>
      <p className="project-page__intro">{intro}</p>

      <div className="project-page__actions">
        {siteUrl && (
          <a
            className="btn btn--primary"
            href={siteUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Voir le site ${title} (nouvel onglet)`}
          >
            Voir le site
          </a>
        )}
        {link && (
          <a
            className={`btn ${siteUrl ? 'btn--outline' : 'btn--primary'}`}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Voir le code de ${title} sur GitHub (nouvel onglet)`}
          >
            Voir le code
          </a>
        )}
      </div>

      <dl className="project-page__meta">
        {type && (
          <div>
            <dt>Type</dt>
            <dd>{type}</dd>
          </div>
        )}
        {duration && (
          <div>
            <dt>Durée</dt>
            <dd>{duration}</dd>
          </div>
        )}
        {role && (
          <div>
            <dt>Mon rôle</dt>
            <dd>{role}</dd>
          </div>
        )}
        {tags.length > 0 && (
          <div>
            <dt>Technologies</dt>
            <dd>
              <ul className="project-page__tags">
                {tags.map((tag) => (
                  <li className="tag" key={tag}>{tag}</li>
                ))}
              </ul>
            </dd>
          </div>
        )}
      </dl>

      <figure className="project-page__shot">
        <img src={asset(image)} alt={`Aperçu du site ${title}`} />
      </figure>

      {sections.map(({ key, title: sectionTitle, content }, index) => (
        <section className="case" key={key} aria-labelledby={`case-${key}`}>
          <div className="case__head">
            <span className="case__number" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h2 className="case__title" id={`case-${key}`}>{sectionTitle}</h2>
          </div>
          <div className="case__body">{content}</div>
        </section>
      ))}

      <div className="project-page__cta">
        <h2 className="project-page__cta-title">Découvrir mes autres projets</h2>
        <div className="project-page__cta-actions">
          <Link className="btn btn--primary" to="/#projets">Tous les projets</Link>
          <Link className="btn btn--outline" to="/#contact">Me contacter</Link>
        </div>
      </div>
    </article>
  );
};

export default ProjectPage;