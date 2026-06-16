import projects from "../data/projects.json";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <section className="projects-page">
      <div className="section-heading">
        <p className="eyebrow">Portfolio</p>

        <h1>Projects</h1>

        <p className="projects-intro">
          A collection of academic and technical projects spanning systems
          analysis, database development, Python programming, and React web
          applications.
        </p>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;