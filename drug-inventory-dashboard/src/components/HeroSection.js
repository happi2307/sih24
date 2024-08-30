// src/components/HeroSection.js
import React from 'react';

function HeroSection() {
  return (
    <section className="bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome Back, [User Name]!</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-bold">Total Inventory Value</h2>
          <p className="text-2xl">$1,234,567</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-bold">Critical Alerts</h2>
          <p className="text-2xl">3</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-bold">Orders to Approve</h2>
          <p className="text-2xl">5</p>
        </div>
      </div>
      <div className="mt-6">
        <button className="bg-blue-600 text-white px-4 py-2 rounded mr-2">Add New Drug</button>
        <button className="bg-green-600 text-white px-4 py-2 rounded">Place Order</button>
      </div>
    </section>
  );
}

export default HeroSection;
