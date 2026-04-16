import React from 'react';
import './Pages.css';

function HelpTutorial() {
  return (
    <div className="page-container">
      <h1>How to Use Micro-Goal Generator</h1>
      
      <div className="card">
        <h2>📖 Step-by-Step Guide</h2>
        <ol style={{ padding: '20px', lineHeight: '2' }}>
          <li><strong>Set Your Goal</strong> - Enter your long-term career goal on the home page</li>
          <li><strong>Choose a Topic</strong> - Select HTML, CSS, JavaScript, or other technologies</li>
          <li><strong>Follow Daily Tasks</strong> - Complete 6 days of learning with examples</li>
          <li><strong>Take Daily Tests</strong> - After each day, test your knowledge</li>
          <li><strong>Weekly Assessment</strong> - On day 7, take the comprehensive test</li>
          <li><strong>Track Progress</strong> - View your progress bar and score history</li>
          <li><strong>Retake or Reset</strong> - Retake tests or reset topics as needed</li>
        </ol>
      </div>
      
      <div className="card">
        <h2>💡 Tips for Success</h2>
        <ul style={{ padding: '20px', lineHeight: '2' }}>
          <li>✅ Complete one day at a time - don't rush</li>
          <li>✅ Practice the code examples yourself</li>
          <li>✅ Score 70%+ before moving to the next day</li>
          <li>✅ Review your score history to identify weak areas</li>
          <li>✅ Use the content library for revision</li>
        </ul>
      </div>
      
      <div className="card">
        <h2>❓ Frequently Asked Questions</h2>
        <p><strong>Q: Can I skip days?</strong><br/>A: No, you need to complete each day to unlock the next.</p>
        <p><strong>Q: What if I fail a test?</strong><br/>A: Review the material and retake the test.</p>
        <p><strong>Q: Is my data saved?</strong><br/>A: Yes, all progress is saved in your browser.</p>
      </div>
    </div>
  );
}

export default HelpTutorial;