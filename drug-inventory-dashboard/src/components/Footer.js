import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-auto">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Drug Inventory and Supply Chain Tracking System. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          Designed and developed by Innovision. 
        </p>
      </div>
    </footer>
  );
};

export default Footer;
