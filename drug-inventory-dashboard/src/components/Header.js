// src/components/Header.js
import React from 'react';

function Header() {
  return (
    <header className="bg-blue-800 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">Drug Inventory Dashboard</div>
      <nav>
        <ul className="flex space-x-6">
          <li><a href="/" className="hover:underline">Dashboard</a></li>
          <li><a href="/inventory" className="hover:underline">Inventory</a></li>
          <li><a href="/supply-chain" className="hover:underline">Supply Chain</a></li>
          <li><a href="/reports" className="hover:underline">Reports</a></li>
        </ul>
      </nav>
      <div className="flex items-center space-x-4">
        <input type="text" placeholder="Search..." className="p-2 rounded" />
        <div className="cursor-pointer">User Profile</div>
      </div>
    </header>
  );
}

export default Header;
