import React, { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="nav-container">
        <a href="#home" className="nav-logo">YourName</a> {/* Changed to <a> */}
        
        {/* Desktop Nav */}
        <ul className="nav-list">
          <li><a href="#about" className="nav-link">About</a></li> {/* Changed to <a> */}
          <li><a href="#portfolio" className="nav-link">Portfolio</a></li> {/* Changed to <a> */}
          <li><a href="#contact" className="nav-link">Contact</a></li> {/* Changed to <a> */}
        </ul>

        {/* Mobile Hamburger */}
        <button 
          className="hamburger"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <ul className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <li><a href="#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</a></li> {/* Changed to <a> */}
        <li><a href="#portfolio" className="nav-link" onClick={() => setIsMenuOpen(false)}>Portfolio</a></li> {/* Changed to <a> */}
        <li><a href="#contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact</a></li> {/* Changed to <a> */}
      </ul>
    </header>
  );
}