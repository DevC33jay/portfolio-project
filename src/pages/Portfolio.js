import React from 'react';
import PortfolioGrid from '../components/PortfolioGrid';

export default function Portfolio() {
  return (
    <section className="page-section">
      <div className="container">
        <h1 className="page-title">Portfolio</h1>
        <PortfolioGrid />
      </div>
    </section>
  );
}