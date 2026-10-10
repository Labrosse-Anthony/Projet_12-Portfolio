import projects from '../../data/Projects.json';
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects" id="projets" aria-labelledby="projets-titre">
      <div className="container">
        <div className="projects__inner">
          <p className="section-label">02 — Projets</p>
          <h2 className="section-title" id="projets-titre">
            Quelques réalisations
          </h2>

          <div className="projects__grid">
            {projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;