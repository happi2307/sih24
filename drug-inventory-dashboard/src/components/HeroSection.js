// src/components/HeroSection.js

import React from 'react';
import '../style/HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>Welcome to Our Drug Inventory Dashboard</h1>
        <p>Your solution for managing and tracking drug inventory efficiently.</p>
        <button>Get Started</button>
      </div>
    </div>
  );
};

export default HeroSection;
