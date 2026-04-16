import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Pages.css';

function WeeklyTestResult() {
  const navigate = useNavigate();
  const location = useLocation();
  const { score, total, correct } = location.state || { score: 0, total: 0, correct: 0 };

  const handleRetake = () => {
    navigate('/weekly-full-test');
  };

  const handleReset = () => {
    if (window.confirm('Are you sure? This will reset all progress for this topic.')) {
      localStorage.removeItem('progress');
      localStorage.removeItem('currentDay');
      navigate('/');
    }
  };

  return (
    <div className="page-container">
      <div className="card" style={{ textAlign: 'center' }}>
        <h1>Weekly Test Results</h1>
        <div className="score-display">{score}%</div>
        <p>You got {correct} out of {total} correct!</p>
        
        {score >= 70 ? (
          <div style={{ color: '#28a745', fontSize: '1.2rem' }}>
            🎉 Congratulations! You've mastered {total} topics this week!
          </div>
        ) : (
          <div style={{ color: '#dc3545', fontSize: '1.2rem' }}>
            📚 Review the week's material and retake the test
          </div>
        )}
        
        <div className="action-buttons">
          <button className="btn btn-primary" onClick={handleRetake}>
            Retake Test
          </button>
          <button className="btn btn-danger" onClick={handleReset}>
            Reset Topic
          </button>
          <button className="btn btn-secondary" onClick={() => navigate('/weekly-plan')}>
            Back to Plan
          </button>
        </div>
      </div>
    </div>
  );
}

export default WeeklyTestResult;