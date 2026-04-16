import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Pages.css';

function TopicSelection({ setSelectedTopic }) {
  const navigate = useNavigate();
  
  const topics = ['HTML', 'CSS', 'JavaScript', 'Backend', 'Database'];

  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic);
    navigate('/weekly-plan');
  };

  return (
    <div className="page-container">
      <h1>Select Your Topic</h1>
      <div className="topic-grid">
        {topics.map((topic) => (
          <div key={topic} className="topic-card" onClick={() => handleTopicSelect(topic)}>
            <h2>{topic}</h2>
            <button className="btn btn-primary">Choose {topic}</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopicSelection;