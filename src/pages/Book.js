import React from 'react';
import { Link } from 'react-router-dom';

export default function Book() {
  return (
    <section className="page-section">
      <div className="container">
        <h1 className="page-title">Book a Consultation</h1>
        <div className="page-content">
          <p>Ready to discuss your project? Schedule a call below—pick a time that works for you.</p>
          {/* Alternative: Simple Booking Form (Uncomment if no Calendly) */}
          <form className="booking-form">
            <input type="date" placeholder="Preferred Date" className="booking-input" required />
            <input type="time" placeholder="Preferred Time" className="booking-input" required />
            <textarea placeholder="Brief Project Description" className="booking-textarea" required></textarea>
            <button type="submit" className="booking-submit">Submit Request</button>
          </form>
          
          <Link to="/contact" className="contact-button">Or Email Me Directly</Link>
        </div>
      </div>
    </section>
  );
}