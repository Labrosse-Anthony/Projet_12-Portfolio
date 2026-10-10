import { Link } from 'react-router-dom';
import { asset } from '../../utils/asset';

const ProjectCard = ({ slug, title, summary, tags = [], image, link, siteUrl }) => {
  return (
    <article className="project-card">
      <Link
        to={`/projets/${slug}`}
        className="project-card__image-link"
        tabIndex={-1}
        aria-hidden="true"
      >
        <img
          className="project-card__image"
          src={asset(image)}
          alt={`Aperçu du site ${title}`}
          loading="lazy"
          decoding="async"
        />
      </Link>

      <div className="project-card__body">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__summary">{summary}</p>

        {tags.length > 0 && (
          <ul className="project-card__tags" aria-label="Technologies utilisées">
            {tags.map((tag) => (
              <li className="tag" key={tag}>{tag}</li>
            ))}
          </ul>
        )}

        <div className="project-card__actions">
          <Link
            className="btn btn--primary"
            to={`/projets/${slug}`}
            aria-label={`Voir le détail du projet ${title}`}
          >
            Voir le détail
          </Link>

          {siteUrl && (
            <a
              className="btn btn--outline"
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
              className="btn btn--outline"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Voir le code de ${title} sur GitHub (nouvel onglet)`}
            >
              Voir le code
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;