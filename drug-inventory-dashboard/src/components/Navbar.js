import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <button className="nav-button">DASH</button>
      <button className="nav-button">Inventory</button>
      <button className="nav-button">Users</button>
    </nav>
  );
}

export default Navbar;
