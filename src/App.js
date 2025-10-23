import React, { useState } from 'react';
import './App.css'; // Import global styles here
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import VideoModal from './components/VideoModal';

function App() {
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false); // Now used below
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const handleContactClick = () => {
    setIsAboutModalOpen(false);
    setIsContactModalOpen(true); // This now opens the contact modal
  };

  const handleFormSubmit = () => {
    // Simulate form submission (replace with actual logic, e.g., email API via fetch)
    alert('Contact form submitted! Redirecting to video...');
    setIsContactModalOpen(false); // Close contact modal
    setShowVideo(true);
    setIsVideoModalOpen(true); // Open video modal
  };

  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <Hero onOpenAboutModal={() => setIsAboutModalOpen(true)} />
        <About 
          isOpen={isAboutModalOpen} 
          onClose={() => setIsAboutModalOpen(false)} 
          onContactClick={handleContactClick} 
        />
        <Portfolio />
        <Contact />
        <VideoModal 
          isOpen={isContactModalOpen || isVideoModalOpen || showVideo} // Now uses isContactModalOpen
          onClose={() => {
            setIsContactModalOpen(false);
            setIsVideoModalOpen(false);
            setShowVideo(false);
          }} 
          showVideo={showVideo} 
          handleFormSubmit={handleFormSubmit} 
        />
      </main>
    </div>
  );
}

export default App;