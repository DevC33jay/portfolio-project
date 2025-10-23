import React from 'react';

export default function About({ isOpen, onClose, onContactClick }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-title">About Me</h2>
        <p className="modal-text">Key details: 5+ years experience in full-stack development. Specialized in React, Next.js, and responsive design. Passionate about creating intuitive UIs.</p> {/* Add your key details here */}
        <div className="modal-buttons">
          <button onClick={onClose} className="modal-button modal-button--secondary">Cancel</button>
          <button onClick={onContactClick} className="modal-button modal-button--primary">Contact Me</button>
        </div>
      </div>
    </div>
  );
}