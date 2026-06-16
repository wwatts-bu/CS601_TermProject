import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className={`project-image-frame project-${project.id}`}>
        <img
          src={project.image}
          alt={`${project.title} project screenshot`}
          className="project-card-image"
        />
      </div>

      <div className="project-card-content">
        <p className="project-category">{project.category}</p>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>

        <Link to={`/projects/${project.id}`} className="project-link">
          View Case Study →
        </Link>
      </div>
    </article>
  );
}

export default ProjectCard;