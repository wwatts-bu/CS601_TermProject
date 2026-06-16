import { Link, useParams } from "react-router-dom";
import projects from "../data/projects.json";

function ProjectDetail() {
  const { projectId } = useParams();

  const project = projects.find((item) => item.id === projectId);

  if (!project) {
    return (
      <section className="page-section">
        <p className="eyebrow">Project Not Found</p>
        <h1>Project Not Found</h1>
        <p>The project you are looking for does not exist.</p>
        <Link to="/projects" className="btn btn-primary">
          Back to Projects
        </Link>
      </section>
    );
  }

  return (
    <section className="project-detail-section">
      <Link to="/projects" className="back-link">
        ← Back to Projects
      </Link>

      <div className="project-detail-hero">
        <div>
          <p className="eyebrow">{project.category}</p>
          <h1>{project.title}</h1>
          <p className="project-detail-summary">{project.summary}</p>
        </div>

        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          className="project-detail-main-image"
        />
      </div>

      <div className="project-detail-grid">
        <div className="detail-card">
          <h2>Problem</h2>
          <p>{project.problem}</p>
        </div>

        <div className="detail-card">
          <h2>Solution</h2>
          <p>{project.solution}</p>
        </div>

        <div className="detail-card">
          <h2>Key Deliverables</h2>
          <ul>
            {project.deliverables.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="detail-card">
          <h2>Technologies Used</h2>
          <div className="tech-list">
            {project.technologies.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="detail-card project-value-card">
        <h2>Value Created</h2>
        <p>{project.value}</p>
      </div>

      <section className="project-gallery-section">
        <div className="section-heading">
          <p className="eyebrow">Project Gallery</p>
          <h2>Selected Screenshots and Artifacts</h2>
        </div>

        <div className="project-gallery">
          {project.gallery.map((image) => (
            <figure key={image.src} className="gallery-item">
              <img src={image.src} alt={image.caption} />
              <figcaption>{image.caption}</figcaption>
            </figure>
          ))}
        </div>

        <div className="project-detail-actions">
            <Link to="/projects" className="btn btn-primary">
                Back to Projects
            </Link>

            <Link to="/" className="btn btn-secondary">
                Back to Home
            </Link>
        </div>
      </section>
    </section>
  );
}

export default ProjectDetail;