function About() {
  return (
    <section className="about-page">
      <div className="about-hero">
        <div>
          <p className="eyebrow">About</p>
          <h1>Operations experience shaped by analytics and technology.</h1>

          <p>
            I am a supply chain and procurement professional with a background
            in materials management, inventory control, sourcing, logistics, and
            operational improvement. My career has centered on helping teams
            improve visibility, reduce friction, and make better decisions with
            clearer processes and better information.
          </p>

          <p>
            My current direction combines supply chain leadership, business
            analytics, systems analysis, and web development. I am building the
            technical foundation to design practical tools, dashboards,
            databases, and web-enabled solutions that support real operational
            needs.
          </p>
        </div>

        <img
          src="/images/profile-photo.jpg"
          alt="Professional headshot of Willie Watts"
          className="about-photo"
        />
      </div>

      <div className="about-grid">
        <article className="detail-card">
          <h2>Professional Foundation</h2>
          <p>
            My foundation is in supply chain operations, procurement,
            materials planning, supplier coordination, inventory management,
            and process improvement.
          </p>
        </article>

        <article className="detail-card">
          <h2>Technical Direction</h2>
          <p>
            I am expanding that foundation through analytics, database design,
            systems analysis, Python, JavaScript, React, and full stack web
            development.
          </p>
        </article>

        <article className="detail-card">
          <h2>How I Think</h2>
          <p>
            I approach technology from a practical business perspective. The
            goal is not just to build something that works, but to build
            something useful, clear, and aligned with the way people actually
            make decisions.
          </p>
        </article>

        <article className="detail-card">
          <h2>Current Focus</h2>
          <p>
            I am focused on roles and projects that connect operations,
            analytics, ERP systems, process improvement, and technology-enabled
            business solutions.
          </p>
        </article>
      </div>
    </section>
  );
}

export default About;