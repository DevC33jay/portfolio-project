import React from 'react';

export default function Portfolio() {
  const projects = [
    { id: 1, title: 'Project 1', desc: 'Description 1', img: '/assets/images/project1.jpg' }, // Place images in public/assets/images/
    { id: 2, title: 'Project 2', desc: 'Description 2', img: '/assets/images/project2.jpg' },
    { id: 3, title: 'Project 3', desc: 'Description 3', img: '/assets/images/project3.jpg' },
    // Add more projects
  ];

  return (
    <section className="section portfolio-section" id="portfolio">
      <div className="container">
        <h2 className="section-title">Portfolio</h2>
        <div className="portfolio-grid">
          {projects.map((project) => (
            <div key={project.id} className="portfolio-item">
              <img src={project.img} alt={project.title} className="portfolio-image" />
              <div className="portfolio-content">
                <h3 className="portfolio-title">{project.title}</h3>
                <p className="portfolio-desc">{project.desc}</p>
                <a href="https://www.w3schools.com" className="portfolio-link">View Project →</a> {/* Replace link */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}