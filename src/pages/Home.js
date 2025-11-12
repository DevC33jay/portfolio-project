import React from 'react';
import { motion } from 'framer-motion';
import PortfolioGrid from '../components/PortfolioGrid';

const heroVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  }
};

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <motion.div 
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div className="profile-wrapper" variants={heroVariants}>
            <motion.img 
              src="/assets/images/profile.jpg" 
              alt="Profile" 
              className="profile-image"
              variants={heroVariants}
              whileHover={{ scale: 1.05 }}
            />
            <motion.p 
              className="designer-text" 
              variants={heroVariants}
            >
              Project supervisor specialising in supervising a project from start to finish.
            </motion.p>
            <motion.div 
              className="code-snippet" 
              variants={heroVariants}
            >
              {`function greet() {
                  return "Hello, World!";
              }`}
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
      
      {/* Portfolio Grid */}
      <section className="portfolio-section">
        <div className="container">
          <h2 className="section-title">Some of Latest Work</h2>
          <PortfolioGrid />
        </div>
      </section>
    </>
  );
}