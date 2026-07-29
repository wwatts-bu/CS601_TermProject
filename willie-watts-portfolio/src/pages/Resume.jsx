function Resume() {
  return (
    <section className="resume-page">
      <div className="section-heading">
        <p className="eyebrow">Resume</p>
        <h1>Professional Background</h1>
        <p className="projects-intro">
          Supply chain, procurement, analytics, and technology experience focused
          on improving operational visibility, performance, and decision-making.
        </p>

        <a href="/resume/Willie_Watts_Resume.pdf" className="btn btn-primary" download>
          Download Resume
        </a>
      </div>

      <div className="resume-grid">
        <article className="detail-card">
          <h2>Core Strengths</h2>
          <ul>
            <li>Supply chain management</li>
            <li>Procurement and sourcing</li>
            <li>Inventory optimization</li>
            <li>Business analytics</li>
            <li>Systems analysis</li>
            <li>Web and database development</li>
          </ul>
        </article>

        <article className="detail-card">
          <h2>Technical Skills</h2>
          <div className="tech-list">
            <span>Python</span>
            <span>SQL</span>
            <span>React</span>
            <span>JavaScript</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>MongoDB</span>
            <span>Mongoose</span>
            <span>CSS Grid/Flexbox</span>
            <span>Power BI</span>
            <span>ERP Systems</span>
            <span>Database Design</span>
          </div>
        </article>

        <article className="detail-card">
          <h2>Education</h2>
          <p>
            M.S. Computer Information Systems, Boston University Metropolitan College
          </p>
          <p>
            M.S. Applied Business Analytics, Boston University Metropolitan College
          </p>
          <p>B.A.S. Logistics, Florida State College at Jacksonville</p>
        </article>

        <article className="detail-card">
          <h2>Certifications</h2>
          <ul>
            <li>APICS CPIM</li>
            <li>Lean Six Sigma Green Belt</li>
            <li>Six Sigma Black Belt, in progress</li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Resume;