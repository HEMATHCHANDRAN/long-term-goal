import React from 'react';
import './Pages.css';

function ProgressBarPage({ progress, selectedTopic }) {
  const topics = ['HTML', 'CSS', 'JavaScript', 'Backend', 'Database'];
  
  const getProgress = (topic) => {
    const topicProgress = progress[topic];
    if (!topicProgress) return 0;
    return (topicProgress.completedDays.length / 7) * 100;
  };

  return (
    <div className="page-container">
      <h1>Your Learning Progress</h1>
      
      {topics.map(topic => {
        const progressPercent = getProgress(topic);
        return (
          <div key={topic} className="card">
            <h3>{topic}</h3>
            <div className="progress-container">
              <div className="progress-fill" style={{ width: `${progressPercent}%` }}>
                {Math.round(progressPercent)}%
              </div>
            </div>
            <p>{Math.round(progressPercent)}% Complete</p>
          </div>
        );
      })}
      
      <div className="card" style={{ textAlign: 'center', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
        <h2>Overall Progress</h2>
        <div className="progress-container">
          <div className="progress-fill" style={{ width: `${Object.keys(progress).length / topics.length * 100}%` }}>
            {Math.round(Object.keys(progress).length / topics.length * 100)}%
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgressBarPage;