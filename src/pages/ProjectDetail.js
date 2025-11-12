import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const projects = {
  carbena: {
    title: 'Carbena South Sydney',
    desc: 'A comprehensive design system for a real estate platform, enabling seamless user experiences across mobile and web. Focused on modular UI components for scalability.',
    role: 'Lead Designer & Developer',
    challenges: 'Creating reusable components while ensuring accessibility and performance on low-bandwidth devices.',
    outcomes: 'Reduced development time by 40%; 95% accessibility score (WCAG AA).',
    mainImage: 'https://media.istockphoto.com/id/1402139837/photo/woman-uses-real-estate-app-to-look-at-home-interior.webp?b=1&s=612x612&w=0&k=20&c=6OBf8ltPynpjOZgk1oVAca35uBqM4GMdrUccwuAfanI=',
    gallery: [
      '/assets/images/carbena-1.jpg',
      '/assets/images/carbena-2.jpg',
      '/assets/images/carbena-3.jpg'
    ],
  },
  house: {
    title: 'What About House',
    desc: 'An interior design news feed app that curates personalized recommendations based on user preferences and trends.',
    role: 'Full-Stack Developer',
    challenges: 'Integrating real-time feeds with user personalization algorithms.',
    outcomes: 'Increased user engagement by 30%; seamless Firebase integration for 10k+ users.',
    mainImage: '/assets/images/house-detail.jpg',
    gallery: [
      '/assets/images/house-1.jpg',
      '/assets/images/house-2.jpg',
      '/assets/images/house-3.jpg'
    ],
  },
  gantis: {
    title: 'Gantis Map',
    desc: 'Interactive mapping tool for product design visualization, allowing teams to collaborate on spatial layouts in real-time.',
    role: 'UI/UX Designer',
    challenges: 'Optimizing map rendering for large datasets while maintaining interactivity.',
    outcomes: 'Cut prototyping time by 50%; adopted by 5+ design agencies.',
    mainImage: '/assets/images/gantis-detail.jpg',
    gallery: [
      '/assets/images/gantis-1.jpg',
      '/assets/images/gantis-2.jpg',
      '/assets/images/gantis-3.jpg'
    ],
  },
};

const galleryVariants = {
  hover: { scale: 1.05, transition: { duration: 0.2 } }
};

export default function ProjectDetail() {
  const { projectId } = useParams();
  const project = projects[projectId];

  if (!project) {
    return (
      <section className="page-section">
        <div className="container">
          <h1 className="page-title">Project Not Found</h1>
          <Link to="/portfolio" className="project-link">Back to Portfolio</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="project-detail page-section">
      <div className="container">
        <Link to="/portfolio" className="project-link">&larr; Back to Portfolio</Link>
        
        <img src={project.mainImage} alt={project.title} className="project-detail-image" />
        
        <div className="project-detail-content page-content">
          <h1 className="project-detail-title">{project.title}</h1>
          <p className="project-detail-desc">{project.desc}</p>
          
          <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>My Role</h3>
          <p className="project-detail-desc">{project.role}</p>
          
          <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Challenges</h3>
          <p className="project-detail-desc">{project.challenges}</p>
          
          <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Outcomes</h3>
          <p className="project-detail-desc">{project.outcomes}</p>
          
          <h3 style={{ marginTop: '3rem', marginBottom: '1rem' }}>Project Gallery</h3>
          <div className="project-gallery" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
            {project.gallery.map((img, index) => (
              <motion.img
                key={index}
                src={img}
                alt={`${project.title} - Image ${index + 1}`}
                className="project-gallery-image"
                whileHover="hover"
                variants={galleryVariants}
                style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '0.5rem', cursor: 'pointer' }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}