import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './DailyTestResult.css';

function DailyTestResult() {
  const navigate = useNavigate();
  const location = useLocation();
  const { score, total, correct, answers, questions, timeSpent } = location.state || { 
    score: 0, 
    total: 0, 
    correct: 0,
    answers: {},
    questions: [],
    timeSpent: 0
  };

  const percentage = (correct / total) * 100;
  const passed = percentage >= 70;

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins} min ${secs} sec`;
  };

  const getGrade = () => {
    if (percentage >= 90) return { grade: 'A+', message: 'Excellent! You\'re a star! ⭐' };
    if (percentage >= 80) return { grade: 'A', message: 'Great job! Keep it up! 🎉' };
    if (percentage >= 70) return { grade: 'B', message: 'Good work! You passed! 👍' };
    if (percentage >= 60) return { grade: 'C', message: 'Not bad, but review the material 📚' };
    return { grade: 'F', message: 'Need more practice. Review and retake! 💪' };
  };

  const grade = getGrade();

  return (
    <div className="test-result-container">
      <div className="result-card">
        {/* Header */}
        <div className={`result-header ${passed ? 'success' : 'warning'}`}>
          <div className="result-icon">
            {passed ? '🏆' : '📚'}
          </div>
          <h1>Test Results</h1>
          <p>{grade.message}</p>
        </div>

        {/* Score Section */}
        <div className="score-section">
          <div className="score-circle">
            <svg viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="none" stroke="#e0e0e0" strokeWidth="8"/>
              <circle 
                cx="50" cy="50" r="45" fill="none" 
                stroke={passed ? '#28a745' : '#ffc107'} 
                strokeWidth="8"
                strokeDasharray={`${percentage * 2.83} 283`}
                strokeLinecap="round"
                transform="rotate(-90 50 50)"
              />
            </svg>
            <div className="score-text">
              <span className="score-value">{Math.round(percentage)}%</span>
              <span className="score-label">Score</span>
            </div>
          </div>
          
          <div className="score-details">
            <div className="detail-item">
              <span className="detail-label">Grade</span>
              <span className="detail-value grade">{grade.grade}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Correct</span>
              <span className="detail-value">{correct}/{total}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Time Taken</span>
              <span className="detail-value">{formatTime(timeSpent)}</span>
            </div>
          </div>
        </div>

        {/* Performance Message */}
        <div className={`performance-message ${passed ? 'success-bg' : 'warning-bg'}`}>
          {passed ? (
            <>
              <h3>🎉 Congratulations! You Passed!</h3>
              <p>You've demonstrated good understanding of today's material. Ready for the next day!</p>
            </>
          ) : (
            <>
              <h3>📚 Keep Learning!</h3>
              <p>Don't worry! Review the material above and try again. You've got this!</p>
            </>
          )}
        </div>

        {/* Action Buttons */}
        <div className="result-actions">
          <button 
            className="btn-review"
            onClick={() => navigate('/daily-task')}
          >
            📖 Review Material
          </button>
          <button 
            className="btn-retake"
            onClick={() => navigate('/daily-mock-test')}
          >
            🔄 Retake Test
          </button>
          <button 
            className="btn-continue"
            onClick={() => navigate('/weekly-plan')}
          >
            📅 Back to Weekly Plan
          </button>
        </div>

        {/* Motivational Quote */}
        <div className="motivational-quote">
          <p>💡 "{passed ? 'Success is the sum of small efforts, repeated day in and day out.' : 'The expert in anything was once a beginner.'}"</p>
        </div>
      </div>
    </div>
  );
}

export default DailyTestResult;