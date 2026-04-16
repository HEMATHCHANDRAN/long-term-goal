import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Pages.css';

function Home({ setUserGoal, userGoal }) {
  const [inputGoal, setInputGoal] = useState(userGoal);
  const [showExamples, setShowExamples] = useState(false);
  const navigate = useNavigate();

  const examples = [
    "Become a Full Stack Developer in 6 months",
    "Master React and Node.js",
    "Learn Data Science and AI",
    "Become a Cloud Architect",
    "Master UI/UX Design"
  ];

  const handleStart = () => {
    if (inputGoal.trim()) {
      setUserGoal(inputGoal);
      navigate('/goal-breakdown');
    }
  };

  const handleExampleClick = (example) => {
    setInputGoal(example);
    setShowExamples(false);
  };

  return (
    <div className="page-container">
      <div className="hero-section">
        <div className="hero-badge">🎯 Your Personal Learning Companion</div>
        <h1 className="hero-title">
          Turn Your Big Dreams into<br />
          <span className="gradient-text">Daily Actions</span>
        </h1>
        <p className="hero-subtitle">
          Break down any career goal into small, manageable daily tasks.<br />
          Learn, practice, test, and track your progress - one day at a time.
        </p>
      </div>

      <div className="stats-container">
        <div className="stat-card">
          <div className="stat-number">7</div>
          <div className="stat-label">Days per Topic</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">6</div>
          <div className="stat-label">Daily Tasks</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">7+</div>
          <div className="stat-label">Technologies</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">100%</div>
          <div className="stat-label">Progress Tracking</div>
        </div>
      </div>

      <div className="goal-input-section">
        <h2>What's your long-term career goal?</h2>
        <div className="input-wrapper">
          <input
            type="text"
            className="goal-input"
            placeholder="Example: Become a Frontend Developer..."
            value={inputGoal}
            onChange={(e) => setInputGoal(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleStart()}
          />
          <button className="btn btn-primary btn-large" onClick={handleStart}>
            Start Your Journey 🚀
          </button>
        </div>
        
        <div className="examples-section">
          <button 
            className="btn-text" 
            onClick={() => setShowExamples(!showExamples)}
          >
            {showExamples ? 'Hide Examples' : 'Show Examples'} 📝
          </button>
          
          {showExamples && (
            <div className="examples-grid">
              {examples.map((example, index) => (
                <div 
                  key={index} 
                  className="example-chip"
                  onClick={() => handleExampleClick(example)}
                >
                  {example}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="features-section">
        <h2>How It Works</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Set Your Goal</h3>
            <p>Define what you want to achieve</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📚</div>
            <h3>Learn Daily</h3>
            <p>6 days of structured learning</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">✅</div>
            <h3>Test Yourself</h3>
            <p>Daily mock tests + weekly exams</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Track Progress</h3>
            <p>Visual progress & score history</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;