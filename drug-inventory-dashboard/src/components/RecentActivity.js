// src/components/RecentActivity.js
import React from 'react';

function RecentActivity() {
  return (
    <aside className="p-6 bg-gray-50">
      <h3 className="text-xl font-bold mb-4">Recent Activity</h3>
      <ul>
        <li>New order placed by User A</li>
        <li>Stock updated for Drug B</li>
        <li>Supplier X confirmed delivery</li>
      </ul>
    </aside>
  );
}

export default RecentActivity;
