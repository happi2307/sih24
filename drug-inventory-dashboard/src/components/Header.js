import React from 'react';
import logo from '../assets/logo.png'; // Adjust the path according to your file structure

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and title */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 w-10 mr-3" />
          <h1 className="text-2xl font-bold">Drug Inventory and Supply Chain</h1>
        </div>
        {/* Navigation menu */}
        <nav>
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:text-gray-300">Dashboard</a></li>
            <li><a href="/inventory" className="hover:text-gray-300">Inventory</a></li>
            <li><a href="/supply-chain" className="hover:text-gray-300">Supply Chain</a></li>
            <li><a href="/about" className="hover:text-gray-300">About</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
