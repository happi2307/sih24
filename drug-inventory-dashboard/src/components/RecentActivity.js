// src/components/RecentActivity.js

import React from 'react';
import '../style/RecentActivity.css';

const activities = [
  { id: 1, activity: 'Received a new shipment of medication', timestamp: '2024-09-01 10:30 AM' },
  { id: 2, activity: 'Stock levels updated for Paracetamol', timestamp: '2024-09-01 09:45 AM' },
  { id: 3, activity: 'Expired medications reported', timestamp: '2024-08-31 05:00 PM' },
  // Add more activities as needed
];

const RecentActivity = () => {
  return (
    <div className="recent-activity">
      <h2>Recent Activity</h2>
      <ul>
        {activities.map(activity => (
          <li key={activity.id}>
            <span className="activity-timestamp">{activity.timestamp}</span>
            <span className="activity-description">{activity.activity}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivity;
