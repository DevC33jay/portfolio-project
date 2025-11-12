import React from 'react';

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <div className="designer-side">
          <div className="vertical-text">Engineer</div>
          <div className="profile-wrapper">
          <img 
            src="/assets/images/profile.jpg" // Replace with your profile image
            alt="Profile" 
            className="profile-image"
          />
          <div className="profile-overlay-splat-1"></div>
          <div className="profile-overlay-splat-2"></div>
          <div className="profile-overlay-splat-3"></div>
          <div className="profile-blend-layer"></div>
          </div>
          <p className="designer-text">A Software enigineer &Project supervisor specialising in developing and supervising a project from start to finish.</p>
        </div>
      </div>
    </section>
  );
}