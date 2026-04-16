import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Pages.css';

function LearningPath({ progress, setSelectedTopic }) {
  const navigate = useNavigate();
  
  const learningPath = [
    { name: 'HTML', icon: '🌐', order: 1, estimatedDays: 7, difficulty: 'Beginner' },
    { name: 'CSS', icon: '🎨', order: 2, estimatedDays: 7, difficulty: 'Beginner' },
    { name: 'JavaScript', icon: '⚡', order: 3, estimatedDays: 7, difficulty: 'Intermediate' },
    { name: 'Backend', icon: '🗄️', order: 4, estimatedDays: 7, difficulty: 'Advanced' },
    { name: 'Database', icon: '💾', order: 5, estimatedDays: 7, difficulty: 'Advanced' }
  ];

  const handleStartTopic = (topic) => {
    setSelectedTopic(topic);
    navigate('/weekly-plan');
  };

  const getStatus = (topic) => {
    const topicProgress = progress[topic];
    if (!topicProgress) return 'not-started';
    if (topicProgress.completedDays.length === 7) return 'completed';
    return 'in-progress';
  };

  return (
    <div className="page-container">
      <h1>Your Learning Path</h1>
      <p className="subtitle">Follow this recommended sequence for best results</p>
      
      <div className="learning-path">
        {learningPath.map((topic, index) => {
          const status = getStatus(topic.name);
          return (
            <div key={topic.name} className={`path-node ${status}`}>
              <div className="path-node-number">{topic.order}</div>
              <div className="path-node-icon">{topic.icon}</div>
              <div className="path-node-content">
                <h3>{topic.name}</h3>
                <p>{topic.difficulty} • {topic.estimatedDays} days</p>
                {status === 'completed' && <span className="status-badge">✅ Completed</span>}
                {status === 'in-progress' && <span className="status-badge">🔄 In Progress</span>}
                {status === 'not-started' && (
                  <button className="btn btn-primary btn-small" onClick={() => handleStartTopic(topic.name)}>
                    Start Learning
                  </button>
                )}
              </div>
              {index < learningPath.length - 1 && <div className="path-connector">↓</div>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LearningPath;