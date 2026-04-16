import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { topicsData } from '../data/topicsData';
import './DailyTask.css';

function DailyTask({ selectedTopic, currentDay, updateProgress }) {
  const navigate = useNavigate();
  const [completed, setCompleted] = useState(false);
  const [showQuizModal, setShowQuizModal] = useState(false);
  const [notes, setNotes] = useState('');
  const [codePlayground, setCodePlayground] = useState('');
  const [activeSection, setActiveSection] = useState('learn'); // learn, practice, review
  const [showSuccessAnimation, setShowSuccessAnimation] = useState(false);
  const [expandedTopics, setExpandedTopics] = useState({});

  const topicData = topicsData[selectedTopic];
  const dayData = topicData?.days[currentDay - 1];

  useEffect(() => {
    // Load saved notes and code
    const savedNotes = localStorage.getItem(`${selectedTopic}_day${currentDay}_notes`);
    const savedCode = localStorage.getItem(`${selectedTopic}_day${currentDay}_code`);
    if (savedNotes) setNotes(savedNotes);
    if (savedCode) {
      setCodePlayground(savedCode);
    } else if (dayData?.examples[0]) {
      setCodePlayground(dayData.examples[0]);
    }
  }, [selectedTopic, currentDay, dayData]);

  const runCode = () => {
    const outputFrame = document.getElementById('code-output');
    if (outputFrame) {
      const doc = outputFrame.contentDocument || outputFrame.contentWindow.document;
      doc.open();
      doc.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { 
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; 
              padding: 20px; 
              margin: 0;
              background: #f8f9fa;
            }
            .error { 
              color: #dc3545; 
              background: #fff3cd;
              padding: 10px;
              border-radius: 5px;
              white-space: pre-wrap;
            }
          </style>
        </head>
        <body>
          ${codePlayground}
          <script>
            try {
              ${codePlayground.match(/<script>([\s\S]*?)<\/script>/)?.[1] || ''}
            } catch(e) {
              document.body.innerHTML += '<div class="error">⚠️ Error: ' + e.message + '</div>';
            }
          <\/script>
        </body>
        </html>
      `);
      doc.close();
    }
    localStorage.setItem(`${selectedTopic}_day${currentDay}_code`, codePlayground);
  };

  const handleSaveNotes = () => {
    localStorage.setItem(`${selectedTopic}_day${currentDay}_notes`, notes);
    showToast('Notes saved successfully! 📝');
  };

  const handleMarkComplete = () => {
    setShowSuccessAnimation(true);
    setTimeout(() => {
      setShowSuccessAnimation(false);
      setShowQuizModal(true);
    }, 1500);
  };

  const handleTakeTest = () => {
    // Save progress before navigating
    if (updateProgress) {
      updateProgress(selectedTopic, currentDay, true);
    }
    // Navigate to daily mock test page
    navigate('/daily-mock-test');
  };

  const toggleTopic = (index) => {
    setExpandedTopics(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const showToast = (message) => {
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
  };

  if (!dayData) {
    return <div className="page-container">Loading content...</div>;
  }

  return (
    <div className="daily-task-container">
      {/* Header Section */}
      <div className="task-header">
        <div className="header-badge">
          <span className="topic-icon">{topicData?.icon}</span>
          <span className="topic-name">{selectedTopic}</span>
          <span className="day-badge">Day {currentDay}</span>
        </div>
        <h1 className="task-title">{dayData.title}</h1>
        <p className="task-objective">{dayData.objective}</p>
        
        {/* Progress Steps */}
        <div className="progress-steps">
          <div className={`step ${activeSection === 'learn' ? 'active' : 'completed'}`}>
            <div className="step-number">1</div>
            <div className="step-label">Learn</div>
          </div>
          <div className="step-line"></div>
          <div className={`step ${activeSection === 'practice' ? 'active' : completed ? 'completed' : ''}`}>
            <div className="step-number">2</div>
            <div className="step-label">Practice</div>
          </div>
          <div className="step-line"></div>
          <div className={`step ${showQuizModal ? 'active' : ''}`}>
            <div className="step-number">3</div>
            <div className="step-label">Test Ready</div>
          </div>
        </div>
      </div>

      {/* Main Content Tabs */}
      <div className="content-tabs">
        <button 
          className={`tab-btn ${activeSection === 'learn' ? 'active' : ''}`}
          onClick={() => setActiveSection('learn')}
        >
          📚 Learn
        </button>
        <button 
          className={`tab-btn ${activeSection === 'practice' ? 'active' : ''}`}
          onClick={() => setActiveSection('practice')}
        >
          💻 Practice
        </button>
        <button 
          className={`tab-btn ${activeSection === 'review' ? 'active' : ''}`}
          onClick={() => setActiveSection('review')}
        >
          📝 Review & Notes
        </button>
      </div>

      {/* Learning Section */}
      {activeSection === 'learn' && (
        <div className="learning-section">
          {/* Key Concepts */}
          <div className="content-card">
            <h2>🎯 Key Concepts You'll Master Today</h2>
            <div className="concepts-grid">
              {dayData.keyConcepts?.map((concept, idx) => (
                <div key={idx} className="concept-chip">
                  {concept}
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Topics */}
          <div className="content-card">
            <h2>📖 In-Depth Learning</h2>
            <div className="topics-list">
              {dayData.detailedTopics?.map((topic, idx) => (
                <div key={idx} className="topic-item">
                  <div className="topic-header" onClick={() => toggleTopic(idx)}>
                    <div className="topic-number">{idx + 1}</div>
                    <h3>{topic.title}</h3>
                    <span className="expand-icon">{expandedTopics[idx] ? '▼' : '▶'}</span>
                  </div>
                  {expandedTopics[idx] && (
                    <div className="topic-details">
                      <p className="topic-description">{topic.description}</p>
                      <div className="code-block">
                        <div className="code-header">
                          <span>💻 Example</span>
                          <button 
                            className="copy-btn"
                            onClick={() => {
                              navigator.clipboard.writeText(topic.example);
                              showToast('Code copied! 📋');
                            }}
                          >
                            Copy
                          </button>
                        </div>
                        <pre>
                          <code>{topic.example}</code>
                        </pre>
                      </div>
                      {topic.tip && (
                        <div className="tip-box">
                          💡 <strong>Pro Tip:</strong> {topic.tip}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Visual Learning */}
          {dayData.visualExplanation && (
            <div className="content-card visual-card">
              <h2>🎨 Visual Learning</h2>
              <div className="visual-content">
                <pre className="visual-diagram">{dayData.visualExplanation}</pre>
              </div>
            </div>
          )}

          {/* Common Mistakes */}
          <div className="content-card mistakes-card">
            <h2>⚠️ Common Mistakes to Avoid</h2>
            <div className="mistakes-grid">
              {dayData.commonMistakes?.map((mistake, idx) => (
                <div key={idx} className="mistake-item">
                  <div className="mistake-wrong">
                    ❌ <strong>Wrong:</strong> {mistake.wrong}
                  </div>
                  <div className="mistake-right">
                    ✅ <strong>Correct:</strong> {mistake.right}
                  </div>
                  <p className="mistake-explanation">{mistake.explanation}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Best Practices */}
          <div className="content-card best-practices">
            <h2>✨ Best Practices</h2>
            <ul>
              {dayData.bestPractices?.map((practice, idx) => (
                <li key={idx}>
                  <span className="checkmark">✓</span>
                  {practice}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Practice Section */}
      {activeSection === 'practice' && (
        <div className="practice-section">
          <div className="content-card">
            <h2>💻 Live Code Playground</h2>
            <p className="section-description">
              Write, test, and experiment with code in real-time!
            </p>
            
            <div className="playground-container">
              <div className="code-editor-area">
                <div className="editor-header">
                  <span>📝 HTML/CSS/JS Editor</span>
                  <button className="btn-run" onClick={runCode}>
                    ▶ Run Code
                  </button>
                </div>
                <textarea
                  className="code-editor"
                  value={codePlayground}
                  onChange={(e) => setCodePlayground(e.target.value)}
                  rows="12"
                  placeholder="Write your HTML/CSS/JS code here..."
                />
              </div>
              
              <div className="output-area">
                <div className="output-header">
                  <span>🎯 Output Preview</span>
                  <button 
                    className="reset-btn"
                    onClick={() => setCodePlayground(dayData.examples[0])}
                  >
                    Reset
                  </button>
                </div>
                <iframe 
                  id="code-output" 
                  className="code-output" 
                  title="code-output" 
                  sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Practice Exercises */}
          <div className="content-card">
            <h2>🎯 Practice Exercises</h2>
            <div className="exercises-list">
              {dayData.tasks?.map((task, idx) => (
                <div key={idx} className="exercise-item">
                  <div className="exercise-checkbox">
                    <input type="checkbox" id={`exercise-${idx}`} />
                    <label htmlFor={`exercise-${idx}`}>
                      {task}
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Review & Notes Section */}
      {activeSection === 'review' && (
        <div className="review-section">
          <div className="content-card">
            <h2>📓 Your Personal Notes</h2>
            <textarea
              className="notes-editor"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows="8"
              placeholder="✍️ Write down what you've learned today...
- Key takeaways
- Questions you have
- Things to remember
- Code snippets you want to save"
            />
            <button className="btn-save-notes" onClick={handleSaveNotes}>
              💾 Save Notes
            </button>
          </div>

          {/* Key Takeaways */}
          <div className="content-card">
            <h2>🔑 Key Takeaways</h2>
            <div className="takeaways-list">
              {dayData.keyTakeaways?.map((takeaway, idx) => (
                <div key={idx} className="takeaway-item">
                  <span className="takeaway-icon">📌</span>
                  <p>{takeaway}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div className="content-card">
            <h2>📚 Additional Resources</h2>
            <div className="resources-grid">
              {dayData.resources?.map((resource, idx) => (
                <a 
                  key={idx} 
                  href={resource.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="resource-card"
                >
                  <div className="resource-icon">📖</div>
                  <div className="resource-info">
                    <strong>{resource.title}</strong>
                    <span>Click to learn more →</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Ready to Test Section - Sticky Footer */}
      <div className="ready-section">
        <div className="ready-card">
          <div className="ready-content">
            <div className="ready-icon">🏆</div>
            <div className="ready-text">
              <h3>Ready to Test Your Knowledge?</h3>
              <p>You've completed the learning material. Now validate what you've learned!</p>
            </div>
            <button 
              className="btn-ready-test"
              onClick={handleMarkComplete}
            >
              ✅ Mark as Completed & Take Test
            </button>
          </div>
        </div>
      </div>

      {/* Success Animation Overlay */}
      {showSuccessAnimation && (
        <div className="success-overlay">
          <div className="success-animation">
            <div className="checkmark-circle">
              <div className="checkmark"></div>
            </div>
            <h2>Great Job! 🎉</h2>
            <p>You've mastered today's material!</p>
            <p>Opening your test in 3... 2... 1...</p>
          </div>
        </div>
      )}

      {/* Quiz Modal - Opens as New Page */}
      {showQuizModal && (
        <div className="quiz-modal-overlay">
          <div className="quiz-modal">
            <div className="quiz-modal-header">
              <h2>📝 Ready for the Daily Test?</h2>
              <p>Test your understanding of today's material</p>
            </div>
            <div className="quiz-modal-content">
              <div className="quiz-stats">
                <div className="stat">
                  <span className="stat-value">10</span>
                  <span className="stat-label">Questions</span>
                </div>
                <div className="stat">
                  <span className="stat-value">15</span>
                  <span className="stat-label">Minutes</span>
                </div>
                <div className="stat">
                  <span className="stat-value">70%</span>
                  <span className="stat-label">To Pass</span>
                </div>
              </div>
              <div className="quiz-info">
                <p>📌 The test will open in a new page</p>
                <p>⏱️ You'll have 15 minutes to complete</p>
                <p>🎯 Score 70% or higher to proceed</p>
                <p>🔄 You can retake if needed</p>
              </div>
            </div>
            <div className="quiz-modal-actions">
              <button 
                className="btn-cancel"
                onClick={() => setShowQuizModal(false)}
              >
                Continue Reviewing
              </button>
              <button 
                className="btn-start-test"
                onClick={handleTakeTest}
              >
                Start Test Now 🚀
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DailyTask;