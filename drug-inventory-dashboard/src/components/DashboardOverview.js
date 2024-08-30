// src/components/DashboardOverview.js
import React from 'react';

function DashboardOverview() {
  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-bold">Real-Time Inventory Overview</h3>
          <div>
            {/* Placeholder for a chart */}
            <div className="h-40 bg-gray-200 rounded mt-2"></div>
          </div>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-bold">Supply Chain Status</h3>
          <div>
            {/* Placeholder for a map or flowchart */}
            <div className="h-40 bg-gray-200 rounded mt-2"></div>
          </div>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-bold">Upcoming Expirations</h3>
          <ul>
            <li>Drug A - 10/10/2024</li>
            <li>Drug B - 12/12/2024</li>
            <li>Drug C - 01/01/2025</li>
          </ul>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-bold">Restocking Recommendations</h3>
          <ul>
            <li>Drug A - Order 200 units</li>
            <li>Drug B - Order 150 units</li>
            <li>Drug C - Order 300 units</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default DashboardOverview;
