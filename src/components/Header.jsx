import React from 'react';
import './Header.css';

function Header({ userGoal }) {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo">🎯 Micro-Goal Generator</h1>
        {userGoal && (
          <div className="user-goal">
            <span className="goal-label">Your Goal:</span>
            <span className="goal-text">{userGoal}</span>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;