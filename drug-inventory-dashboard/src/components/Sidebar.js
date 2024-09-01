import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="bg-gray-900 text-white w-64 min-h-screen flex flex-col">
      <div className="py-4 px-6">
        <h2 className="text-xl font-semibold">Menu</h2>
      </div>
      <nav className="flex-1 px-2">
        <ul>
          <li className="mb-2">
            <Link to="/" className="block py-2.5 px-4 rounded hover:bg-gray-700">
              Dashboard
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/inventory" className="block py-2.5 px-4 rounded hover:bg-gray-700">
              Inventory
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/supply-chain" className="block py-2.5 px-4 rounded hover:bg-gray-700">
              Supply Chain
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/reports" className="block py-2.5 px-4 rounded hover:bg-gray-700">
              Reports
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/settings" className="block py-2.5 px-4 rounded hover:bg-gray-700">
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
