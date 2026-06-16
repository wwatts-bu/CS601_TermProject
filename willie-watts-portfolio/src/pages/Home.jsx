import { Link } from "react-router-dom";
import projects from "../data/projects.json";
import ProjectCard from "../components/ProjectCard";

function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-content">
          <p className="eyebrow">Operations. Analytics. Technology.</p>

          <h1>Willie Watts</h1>

          <h2>
            Supply Chain & Procurement <br/>
            Analytics & Technology <br/>
            Business Solutions
          </h2>

          <p className="hero-summary">
            I help organizations improve operational visibility, procurement
            performance, and decision-making through process improvement,
            analytics, and web-enabled business solutions.
          </p>

          <div className="hero-actions">
            <Link to="/projects" className="btn btn-primary">
              View Projects
            </Link>

            <Link to="/contact" className="btn btn-secondary">
              Contact Me
            </Link>
          </div>
        </div>

        <div className="hero-visual">
            <img
                src="/images/profile-photo.jpg"
                alt="Professional headshot of Willie Watts"
                 className="hero-photo"
            />

            <div className="brand-panel">
                <p>Core Focus</p>

                <ul>
                    <li>Supply Chain</li>
                    <li>Procurement</li>
                    <li>Analytics</li>
                    <li>Technology</li>
                </ul>
            </div>
        </div>
      </section>

      <section className="expertise-section">
        <div className="section-heading">
          <p className="eyebrow">Featured Expertise</p>
          <h2>Combining Operations, Analytics, and Technology</h2>
        </div>

        <div className="expertise-grid">
          <div className="expertise-card">
            <h3>Supply Chain Management</h3>
            <p>
              Inventory optimization, materials planning, logistics coordination,
              operational visibility, and process improvement.
            </p>
          </div>

          <div className="expertise-card">
            <h3>Procurement & Strategic Sourcing</h3>
            <p>
              Supplier management, sourcing strategy, contract evaluation,
              procurement operations, and spend optimization.
            </p>
          </div>

          <div className="expertise-card">
            <h3>Business Analytics</h3>
            <p>
              Data analysis, KPI development, reporting, dashboards, process
              measurement, and decision support.
            </p>
          </div>

          <div className="expertise-card">
            <h3>Technology Solutions</h3>
            <p>
              Systems analysis, databases, web development, process automation,
              and business technology implementation.
            </p>
          </div>
        </div>
      </section>

      <section className="featured-projects-section">
        <div className="section-heading">
            <p className="eyebrow">Featured Projects</p>
            <h2>Selected Work Across Systems, Data, and Web Development</h2>
        </div>

        <div className="project-grid">
            {projects
                .filter((project) => project.featured)
                .map((project) => (
                    <ProjectCard key={project.id} project={project} />
            ))}
        </div>
      </section>

      <section className="highlights-section">
        <div className="section-heading">
            <p className="eyebrow">Professional Highlights</p>

            <h2>Selected Career Accomplishments</h2>
        </div>

        <div className="highlights-grid">

            <div className="highlight-card">
                <h3>$240K+</h3>
                <p>Cost savings and operational improvements delivered through sourcing, inventory, and process optimization initiatives.</p>
            </div>

            <div className="highlight-card">
                <h3>95%+</h3>
                <p>Inventory accuracy and material availability improvements across manufacturing and utility environments.</p>
            </div>

            <div className="highlight-card">
                <h3>40+</h3>
                <p>Team members led across warehouse, planning, procurement, and materials management functions.</p>
            </div>

            <div className="highlight-card">
                <h3>2</h3>
                <p>Graduate degrees supporting analytics, systems thinking, and technology-enabled business leadership.</p>
            </div>

            <div className="highlight-card">
                <h3>3+</h3>
                <p>Professional certifications and credentials supporting supply chain, planning, and process improvement.</p>
            </div>
        </div>
      </section>

      <section className="credentials-section">
        <div className="section-heading">
            <p className="eyebrow">Credentials</p>
            <h2>Education & Certifications</h2>
        </div>

        <div className="credentials-grid">
            <article className="credential-card">
                <h3>M.S. Computer Information Systems</h3>
                <p>Boston University Metropolitan College</p>
                <span>In Progress</span>
            </article>

            <article className="credential-card">
                <h3>M.S. Applied Business Analytics</h3>
                <p>Boston University Metropolitan College</p>
                <span>Completed</span>
            </article>

            <article className="credential-card">
                <h3>APICS CPIM</h3>
                <p>Certified in Planning and Inventory Management</p>
                <span>Certified</span>
            </article>

            <article className="credential-card">
                <h3>Lean Six Sigma Green Belt</h3>
                <p>Process improvement and operational excellence</p>
                <span>Certified</span>
            </article>
        </div>
      </section>

      <section className="home-cta-section">
        <div className="home-cta-card">
            <p className="eyebrow">Let's Connect</p>
            <h2>Interested in operations, analytics, or technology solutions?</h2>
            <p>
                Explore my project work or reach out to discuss opportunities, collaboration,
                or practical business technology support.
            </p>

            <div className="hero-actions">
                <Link to="/projects" className="btn btn-primary">
                    Explore Projects
                </Link>

                <Link to="/contact" className="btn btn-secondary">
                    Contact Me
                </Link>
            </div>
        </div>
      </section>
    </>
  );
}

export default Home;