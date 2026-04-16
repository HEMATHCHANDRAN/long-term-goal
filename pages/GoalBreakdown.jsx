import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Pages.css';

function GoalBreakdown({ setSelectedTopic }) {
  const navigate = useNavigate();
  
  const technologies = [
    { name: 'HTML', icon: '🌐', description: 'Structure of web pages' },
    { name: 'CSS', icon: '🎨', description: 'Styling and design' },
    { name: 'JavaScript', icon: '⚡', description: 'Interactivity and logic' },
    { name: 'Backend', icon: '🗄️', description: 'Server-side development' },
    { name: 'Database', icon: '💾', description: 'Data storage and management' }
  ];

  const handleSelect = (tech) => {
    setSelectedTopic(tech);
    navigate('/topic-selection');
  };

  return (
    <div className="page-container">
      <div className="hero-section">
        <h1>Your Long-Term Goal Breakdown</h1>
        <p>Select a technology to start your 7-day learning journey</p>
      </div>
      
      <div className="topic-grid">
        {technologies.map((tech) => (
          <div key={tech.name} className="topic-card" onClick={() => handleSelect(tech.name)}>
            <div className="topic-icon">{tech.icon}</div>
            <h3>{tech.name}</h3>
            <p>{tech.description}</p>
            <button className="btn btn-primary">Start Learning →</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GoalBreakdown;