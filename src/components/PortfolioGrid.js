import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const projects = [
  { id: 'carbena', title: 'Carbena South Sydney', desc: 'Design system', img: '/assets/images/card1.jpg' },
  { id: 'house', title: 'What About House', desc: 'Inside news feed', img: '/assets/images/card2.jpg' },
  { id: 'gantis', title: 'Gantis Map', desc: 'Product design', img: '/assets/images/card3.jpg' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger cards
      delayChildren: 0.5 // After hero
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  }
};

export default function PortfolioGrid() {
  return (
    <motion.div 
      className="portfolio-grid"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {projects.map((project, index) => (
        <motion.div 
          key={project.id} 
          className="portfolio-card"
          variants={index % 2 === 0 ? cardVariants : { ...cardVariants, hidden: { opacity: 0, x: 50 } }} // Alternate directions
          whileHover={{ 
            y: -5, 
            scale: 1.02,
            transition: { duration: 0.3, ease: "easeOut" }
          }}
          whileTap={{ scale: 0.98 }} // Tap feedback
        >
          <img src={project.img} alt={project.title} className="card-image" />
          <div className="card-content">
            <h3 className="card-title">{project.title}</h3>
            <p className="card-desc">{project.desc}</p>
            <Link to={`/portfolio/${project.id}`} className="card-link">View Details →</Link>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}