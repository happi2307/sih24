import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <><div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <DashboardOverview />
          </div>
          <div className="col-span-1">
            <RecentActivity />
          </div>
        </div>
      </main>
      <Footer />
    </div><div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div></>
  );
}

// src/App.js
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import DashboardOverview from './components/DashboardOverview';
import RecentActivity from './components/RecentActivity';
import Footer from './components/Footer';


