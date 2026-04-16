import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FloatingProgress.css';

function FloatingProgress({ progress }) {
  const navigate = useNavigate();
  const totalTopics = Object.keys(progress).length;
  const overallProgress = totalTopics > 0 ? (totalTopics / 5) * 100 : 0;

  return (
    <div className="floating-progress" onClick={() => navigate('/progress-bar')}>
      <div className="floating-icon">📊</div>
      <div className="floating-stats">
        <div className="floating-percent">{Math.round(overallProgress)}%</div>
        <div className="floating-label">Overall</div>
      </div>
    </div>
  );
}

export default FloatingProgress;