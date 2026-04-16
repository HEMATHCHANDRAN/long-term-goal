import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: '🏠 Home' },
    { path: '/goal-breakdown', label: '🎯 Goals' },
    { path: '/topic-selection', label: '📚 Topics' },
    { path: '/weekly-plan', label: '📅 Weekly Plan' },
    { path: '/progress-bar', label: '📊 Progress' },
    { path: '/score-history', label: '📈 Scores' },
    { path: '/content-library', label: '📖 Library' },
    { path: '/profile', label: '👤 Profile' },
    { path: '/settings', label: '⚙️ Settings' },
    { path: '/help', label: '❓ Help' }
  ];

  return (
    <nav className="navigation">
      <div className="nav-container">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navigation;