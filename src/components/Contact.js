import React from 'react';

export default function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-description">Ready to collaborate? Reach out via email, whatsapp or LinkedIn.</p>
        <div className="contact-buttons">
          <a href="mailto:your-email@example.com" className="contact-button contact-button--primary">Email Me</a> {/* Replace email */}
          <a href="https://linkedin.com/in/yourprofile" className="contact-button contact-button--secondary">LinkedIn</a> {/* Replace link */}
          <a href="whatsapp link" className="contact-button contact-button--secondary">Whatsapp</a>
        </div>
      </div>
    </section>
  );
}