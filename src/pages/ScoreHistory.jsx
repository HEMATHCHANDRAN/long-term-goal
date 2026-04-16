import React from 'react';
import './Pages.css';

function ScoreHistory({ scores }) {
  return (
    <div className="page-container">
      <h1>Score History</h1>
      
      {scores.length === 0 ? (
        <div className="card" style={{ textAlign: 'center' }}>
          <p>No tests taken yet. Start your learning journey!</p>
        </div>
      ) : (
        scores.slice().reverse().map(score => (
          <div key={score.id} className="card">
            <h3>{score.topic} - {score.type === 'daily' ? `Day ${score.day}` : 'Weekly Test'}</h3>
            <div className="score-display" style={{ fontSize: '2rem' }}>{score.score}%</div>
            <p>Date: {score.date}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default ScoreHistory;