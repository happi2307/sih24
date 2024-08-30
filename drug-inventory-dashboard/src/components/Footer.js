// src/components/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="bg-blue-800 text-white p-4 text-center">
      <p>© Your Company Name 2024</p>
      <p>
        <a href="/privacy" className="hover:underline">Privacy Policy</a> | 
        <a href="/terms" className="hover:underline">Terms of Service</a> | 
        <a href="/contact" className="hover:underline">Contact Us</a> | 
        <a href="/help" className="hover:underline">Help</a>
      </p>
    </footer>
  );
}

export default Footer;
