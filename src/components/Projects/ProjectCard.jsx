const ProjectCard = ({ title, summary, tags, image, link, siteUrl }) => {
  return (
    <article className="project-card">
      <img
        className="project-card__image"
        src={image}
        alt={`Aperçu du site ${title}`}
        loading="lazy"
        decoding="async"
      />

      <div className="project-card__body">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__summary">{summary}</p>

        <ul className="project-card__tags" aria-label="Technologies utilisées">
          {tags.map((tag) => (
            <li className="tag" key={tag}>{tag}</li>
          ))}
        </ul>

        <div className="project-card__actions">
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
          <a
            className="btn btn--outline"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Voir le code de ${title} sur GitHub (nouvel onglet)`}
          >
            Voir le code
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;