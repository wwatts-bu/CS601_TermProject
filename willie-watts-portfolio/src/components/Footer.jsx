import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <img src="/images/logo.png" alt="Willie Watts logo" />
          <div>
            <h2>Willie Watts</h2>
            <p>Supply Chain | Analytics | Technology</p>
          </div>
        </div>

        <nav className="footer-links" aria-label="Footer navigation">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>

      <p className="footer-copy">
        &copy; 2026 Willie Watts. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;