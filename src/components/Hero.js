import React from 'react';

export default function Hero({ onOpenAboutModal }) {
  return (
    <section className="hero-section">
      <div className="hero-content container">
        {/* Background Image Placeholder - Use regular <img> in CRA */}
        <img
          src="/assets/images/hero-bg.jpg" // Replace with your hero background image (place in public/assets/images/)
          alt="Hero Background"
          className="hero-bg"
        />
        <h1 className="hero-title">Welcome to My Portfolio</h1>
        <p className="hero-description">Advanced software developer crafting responsive experiences.</p>
        <button 
          onClick={onOpenAboutModal}
          className="hero-button"
        >
          Learn More
        </button>
      </div>
    </section>
  );
}