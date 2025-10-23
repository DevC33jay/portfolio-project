import React from 'react';

export default function VideoModal({ isOpen, onClose, showVideo, handleFormSubmit }) {
  if (!isOpen) return null;

  return (
    <>
      {!showVideo ? (
        // Contact Form Modal
        <div className="modal-overlay" onClick={onClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 className="modal-title">Contact Form</h2>
            <form className="contact-form">
              <input type="text" placeholder="Your Name" className="contact-input" />
              <input type="email" placeholder="Your Email" className="contact-input" />
              <textarea placeholder="Message" className="contact-textarea"></textarea>
              <div className="form-buttons">
                <button type="button" onClick={onClose} className="modal-button modal-button--secondary">Cancel</button>
                <button type="button" onClick={handleFormSubmit} className="modal-button form-button--submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        // Video Modal
        <div className="modal-overlay" onClick={onClose}>
          <div className="video-modal-content modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 className="modal-title">Featured Video</h2>
            <div className="video-container">
              {/* Placeholder Video - Place file in public/assets/videos/ */}
              <video controls>
                <source src="/assets/videos/your-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {/* Alternative: YouTube Embed */}
              {/* <iframe src="https://www.youtube.com/embed/YOUR_VIDEO_ID" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
            </div>
            <button onClick={onClose} className="modal-button modal-button--primary">Close</button>
          </div>
        </div>
      )}
    </>
  );
}