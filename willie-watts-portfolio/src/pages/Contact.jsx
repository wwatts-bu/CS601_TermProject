import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  function validateForm() {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!formData.email.includes("@") || !formData.email.includes(".")) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }

    return newErrors;
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });

    setErrors({
      ...errors,
      [name]: ""
    });

    setSubmitted(false);
    setSubmitError("");
  }

  function encode(data) {
    return new URLSearchParams(data).toString();
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: encode({
          "form-name": "contact",
          subject: "New portfolio message from Willie Watts Portfolio",
          ...formData
        })
      });

      setSubmitted(true);

      setFormData({
        name: "",
        email: "",
        message: ""
      });

      setErrors({});
      setSubmitError("");
    } catch (error) {
      setSubmitError(
        "Something went wrong. Please try again or contact me by email."
      );
    }
  }

  return (
    <section className="contact-page">
      <div className="section-heading">
        <p className="eyebrow">Contact</p>

        <h1>Let's Connect</h1>

        <p className="projects-intro">
          Whether you're interested in operations, analytics, technology,
          consulting opportunities, or collaboration, I'd be happy to connect.
        </p>
      </div>

      <div className="contact-grid">
        <div className="detail-card">
          <h2>Professional Profiles</h2>

          <div className="contact-links">
            <a href="mailto:willcwatts79@gmail.com">
              willcwatts79@gmail.com
            </a>

            <a
              href="https://www.linkedin.com/in/willie-watts-cpim/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn Profile
            </a>

            <a
              href="https://github.com/wwatts-bu"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Portfolio
            </a>
          </div>
        </div>

        <div className="detail-card">
          <h2>Send a Message</h2>

          {submitted && (
            <div className="success-message">
              Thank you for reaching out. Your message has been received.
            </div>
          )}

          {submitError && (
            <div className="error-box">
              {submitError}
            </div>
          )}

          <form
            name="contact"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
            className="contact-form"
            noValidate
          >
            <input type="hidden" name="form-name" value="contact" />
            <input
              type="hidden"
              name="subject"
              value="New portfolio message from Willie Watts Portfolio"
            />

            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <p id="name-error" className="error-message">
                {errors.name}
              </p>
            )}

            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <p id="email-error" className="error-message">
                {errors.email}
              </p>
            )}

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && (
              <p id="message-error" className="error-message">
                {errors.message}
              </p>
            )}

            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;