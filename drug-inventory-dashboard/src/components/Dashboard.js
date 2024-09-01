import React from 'react';
import Navbar from './Navbar';
import AddModifyForm from './AddModifyForm';
import CurrentValue from './CurrentValue';
import Chart from './Chart';
import Updates from './Updates';
import RecentActivity from './RecentActivity';
import ChatBox from './ChatBox';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="dashboard-main">
        <AddModifyForm />
        <CurrentValue />
        <Chart />
        <Updates />
        <RecentActivity />
        <ChatBox />
      </div>
    </div>
  );
}

export default Dashboard;
