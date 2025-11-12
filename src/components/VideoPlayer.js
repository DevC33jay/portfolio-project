import React from 'react';
import { motion } from 'framer-motion';

const playerVariants = {
  hidden: { opacity: 0, y: 100, scale: 0.8 }, // Slide up from bottom
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } // Ease-in-out
  },
};

export default function VideoPlayer({ onClose }) {
  return (
    <motion.div 
      className="video-player-overlay"
      initial="hidden"
      animate="visible"
      variants={playerVariants}
      onClick={(e) => e.stopPropagation()} // Prevent close on click
    >
      <video 
        autoPlay 
        muted 
        loop 
        controls 
        className="video-player"
        onClick={(e) => e.stopPropagation()}
      >
        <source src="/assets/videos/welcome-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button className="video-close" onClick={onClose}>
        ×
      </button>
    </motion.div>
  );
}