import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  }
};

const linkVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut", delay: i * 0.1 }
  }),
  hover: { scale: 1.05, color: "#007bff", transition: { duration: 0.2 } }
};

const hamburgerVariants = {
  open: {
    rotate: 90,
    transition: { duration: 0.3, ease: "easeInOut" }
  }
};

const lineVariants = {
  closed: { rotate: 0 },
  open: (i) => ({
    rotate: i === 0 ? 45 : i === 2 ? -45 : 0,
    y: i === 0 ? 3 : i === 2 ? -3 : 0,
    opacity: i === 1 ? 0 : 1,
    transition: { duration: 0.3, ease: "easeInOut" }
  })
};

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    }
  }
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header 
      className="header"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <nav className="nav-container container">
        <Link to="/" className="nav-logo" style={{ textDecoration: 'none' }}>
         𝔻ℂ
        </Link>
        
        {/* Desktop Nav - Order: About, Book, Portfolio, Blog, Contact */}
        <motion.ul className="nav-list" variants={navVariants}>
          <motion.li variants={linkVariants} custom={0}>
            <Link to="/about" className="nav-link">About</Link>
          </motion.li>
          <motion.li variants={linkVariants} custom={1}>
            <Link to="/book" className="nav-link">Book</Link> {/* Added: Links to /book */}
          </motion.li>
          <motion.li variants={linkVariants} custom={2}>
            <Link to="/portfolio" className="nav-link">Portfolio</Link>
          </motion.li>
          <motion.li variants={linkVariants} custom={3}>
            <Link to="/blog" className="nav-link">Blog</Link>
          </motion.li>
          <motion.li variants={linkVariants} custom={4}>
            <Link to="/contact" className="nav-link">Contact</Link>
          </motion.li>
        </motion.ul>
        
        {/* Desktop Social */}
        <motion.div className="social-icons" variants={navVariants}>
          <motion.a 
            href="https://twitter.com" 
            variants={linkVariants} 
            custom={5}
            whileHover="hover"
          >
            𝕏
          </motion.a>
          <motion.a 
            href="https://instagram.com" 
            variants={linkVariants} 
            custom={6}
            whileHover="hover"
          >
            ∈
          </motion.a>
          <motion.a 
            href="https://facebook.com" 
            variants={linkVariants} 
            custom={7}
            whileHover="hover"
          >
            f
          </motion.a>
        </motion.div>

        {/* Hamburger */}
        <motion.button 
          className={`hamburger ${isMenuOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
          variants={hamburgerVariants}
          animate={isMenuOpen ? "open" : "closed"}
          whileHover={{ scale: 1.1 }}
        >
          <motion.div className="hamburger-line" variants={lineVariants} custom={0}></motion.div>
          <motion.div className="hamburger-line" variants={lineVariants} custom={1}></motion.div>
          <motion.div className="hamburger-line" variants={lineVariants} custom={2}></motion.div>
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      <motion.div 
        className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}
        initial={false}
        animate={{ x: isMenuOpen ? 0 : "100%" }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        variants={navVariants}
      >
        <motion.ul variants={staggerContainer}>
          <motion.li variants={linkVariants} custom={0}>
            <Link to="/about" onClick={toggleMenu}>About</Link>
          </motion.li>
          <motion.li variants={linkVariants} custom={1}>
            <Link to="/book" onClick={toggleMenu}>Book</Link> {/* Added: Mobile link */}
          </motion.li>
          <motion.li variants={linkVariants} custom={2}>
            <Link to="/portfolio" onClick={toggleMenu}>Portfolio</Link>
          </motion.li>
          <motion.li variants={linkVariants} custom={3}>
            <Link to="/blog" onClick={toggleMenu}>Blog</Link>
          </motion.li>
          <motion.li variants={linkVariants} custom={4}>
            <Link to="/contact" onClick={toggleMenu}>Contact</Link>
          </motion.li>
        </motion.ul>
        <motion.div className="social-icons-mobile" variants={navVariants}>
          <motion.a href="https://twitter.com" variants={linkVariants} custom={5} whileHover="hover">𝕏</motion.a>
          <motion.a href="https://instagram.com" variants={linkVariants} custom={6} whileHover="hover">∈</motion.a>
          <motion.a href="https://facebook.com" variants={linkVariants} custom={7} whileHover="hover">f</motion.a>
        </motion.div>
      </motion.div>
    </motion.header>
  );
}