import React, { useState } from 'react';
import Header from '../components/Header';    // Import the Header component
import Footer from '../components/Footer';    // Import the Footer component
import Sidebar from '../components/Sidebar';  // Import the Sidebar component
import FlyoutMenu from '../components/FlyoutMenu';  // Import the FlyoutMenu component

const Dashboard = () => {
  const [isFlyoutOpen, setFlyoutOpen] = useState(false);

  const openFlyout = () => {
    setFlyoutOpen(true);
  };

  const closeFlyout = () => {
    setFlyoutOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <div className="flex-1 p-6 bg-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold">Dashboard</h1>
            <button
              onClick={openFlyout}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Add New Drug
            </button>
          </div>

          {/* Dashboard content goes here */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Example Card */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold">Inventory Status</h2>
              <p className="mt-2 text-gray-600">Track the current status of your drug inventory.</p>
            </div>
            {/* Additional cards and content can be added here */}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />

      {/* Flyout Menu for Adding a New Drug */}
      <FlyoutMenu isOpen={isFlyoutOpen} onClose={closeFlyout} />
    </div>
  );
};

export default Dashboard;
