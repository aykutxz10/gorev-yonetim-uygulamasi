// src/App.js
import React, { useState } from 'react';
import NavBar from './components/Navbar';

import Home from './pages/Home';
import Tasks from './pages/Tasks';
import Settings from './pages/Settings';
import Projects from './pages/Projects';
import Calendar from './pages/Calendar';

export default function App() {
  const [page, setPage] = useState('home');

  const renderPage = () => {
    switch (page) {
      case 'home':     return <Home />;
      case 'tasks':    return <Tasks />; 
      case 'projects':     return <Projects />;
      case 'calendar':    return <Calendar />;
      case 'settings': return <Settings />;
      default:         return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <NavBar activePage={page} onChange={setPage} />
      <main>
        {renderPage()}
      </main>
    </div>
  );
}
