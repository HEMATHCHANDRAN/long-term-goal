import React from 'react';
import { topicsData } from '../data/topicsData';
import './Pages.css';

function ContentLibrary({ selectedTopic }) {
  const topicData = topicsData[selectedTopic];
  
  if (!topicData) {
    return (
      <div className="page-container">
        <h1>Content Library</h1>
        <div className="card">
          <p>Select a topic from the Weekly Plan to see learning materials</p>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <h1>Content Library - {selectedTopic}</h1>
      
      {topicData.days.map((day, idx) => (
        <div key={idx} className="card">
          <h2>Day {idx + 1}: {day.title}</h2>
          <h3>Learning Tasks:</h3>
          <ul>
            {day.tasks.map((task, taskIdx) => (
              <li key={taskIdx}>{task}</li>
            ))}
          </ul>
          <h3>Code Examples:</h3>
          {day.examples.map((example, exIdx) => (
            <pre key={exIdx} style={{ background: '#2d2d2d', color: '#f8f8f2', padding: '10px', borderRadius: '5px' }}>
              <code>{example}</code>
            </pre>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ContentLibrary;