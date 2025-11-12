import React from 'react';
import { motion } from 'framer-motion';

const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  }
};

export default function Footer() {
  return (
    <motion.footer 
      className="footer"
      initial="hidden"
      whileInView="visible" // Triggers on scroll into view
      viewport={{ once: true, amount: 0.2 }} // Once, 20% visible
      variants={footerVariants}
    >
      <div className="footer-content">
        <h3 className="footer-title">&copy; 2025. All rights reserved.</h3>
      </div>
    </motion.footer>
  );
}