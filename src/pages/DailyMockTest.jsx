import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { dailyQuestions } from '../data/questionsData';
import './DailyMockTest.css';

function DailyMockTest({ selectedTopic, currentDay, setScores, scores }) {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(900); // 15 minutes in seconds
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [reviewMode, setReviewMode] = useState(false);
  const [flaggedQuestions, setFlaggedQuestions] = useState({});

  useEffect(() => {
    // Load questions
    const topicQuestions = dailyQuestions[selectedTopic]?.[currentDay] || [];
    if (topicQuestions.length === 0) {
      // Generate sample questions if none exist
      const sampleQuestions = Array(10).fill().map((_, i) => ({
        id: i,
        question: `Sample question ${i + 1} for ${selectedTopic} Day ${currentDay}?`,
        options: ["Option A", "Option B", "Option C", "Option D"],
        correct: 0,
        explanation: "This is a sample explanation. Add more questions in your questionsData.js file."
      }));
      setQuestions(sampleQuestions);
    } else {
      setQuestions(topicQuestions);
    }
  }, [selectedTopic, currentDay]);

  useEffect(() => {
    // Timer
    if (!submitted && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            handleAutoSubmit();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [submitted, timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getTimeColor = () => {
    if (timeLeft < 300) return '#dc3545';
    if (timeLeft < 600) return '#ffc107';
    return '#28a745';
  };

  const handleAnswer = (questionId, answerIndex) => {
    setAnswers({ ...answers, [questionId]: answerIndex });
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowConfirmModal(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleFlag = () => {
    setFlaggedQuestions({
      ...flaggedQuestions,
      [currentQuestionIndex]: !flaggedQuestions[currentQuestionIndex]
    });
  };

  const handleJumpToQuestion = (index) => {
    setCurrentQuestionIndex(index);
    setReviewMode(false);
  };

  const calculateScore = () => {
    let correctCount = 0;
    questions.forEach(q => {
      if (answers[q.id] === q.correct) correctCount++;
    });
    return (correctCount / questions.length) * 100;
  };

  const handleSubmit = () => {
    setShowConfirmModal(false);
    const score = calculateScore();
    const correctCount = questions.filter(q => answers[q.id] === q.correct).length;
    
    const newScore = {
      id: Date.now(),
      topic: selectedTopic,
      type: 'daily',
      day: currentDay,
      score: score,
      correct: correctCount,
      total: questions.length,
      date: new Date().toLocaleDateString(),
      timeSpent: 900 - timeLeft
    };
    
    setScores([...scores, newScore]);
    localStorage.setItem(`dailyTest_${selectedTopic}_${currentDay}`, JSON.stringify({ answers, score }));
    setSubmitted(true);
    
    setTimeout(() => {
      navigate('/daily-test-result', { 
        state: { 
          score, 
          total: questions.length, 
          correct: correctCount,
          answers,
          questions,
          timeSpent: 900 - timeLeft
        } 
      });
    }, 2000);
  };

  const handleAutoSubmit = () => {
    alert("Time's up! Submitting your test...");
    handleSubmit();
  };

  const answeredCount = Object.keys(answers).length;
  const progress = (answeredCount / questions.length) * 100;

  if (submitted) {
    return (
      <div className="test-submitted">
        <div className="submitted-animation">
          <div className="checkmark-circle-large">
            <div className="checkmark-large"></div>
          </div>
          <h2>Test Submitted! 🎉</h2>
          <p>Calculating your score...</p>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="mock-test-container">
      {/* Header Section */}
      <div className="test-header">
        <div className="test-info">
          <div className="test-badge">
            <span className="badge-icon">📝</span>
            <span>Daily Mock Test</span>
          </div>
          <h1>{selectedTopic} - Day {currentDay}</h1>
          <p>Test your knowledge from today's learning</p>
        </div>
        
        <div className="test-stats">
          <div className="stat-card">
            <div className="stat-icon">❓</div>
            <div className="stat-details">
              <span className="stat-label">Questions</span>
              <span className="stat-value">{questions.length}</span>
            </div>
          </div>
          
          <div className="stat-card timer-card">
            <div className="stat-icon">⏱️</div>
            <div className="stat-details">
              <span className="stat-label">Time Left</span>
              <span className="stat-value" style={{ color: getTimeColor() }}>
                {formatTime(timeLeft)}
              </span>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">✅</div>
            <div className="stat-details">
              <span className="stat-label">Answered</span>
              <span className="stat-value">{answeredCount}/{questions.length}</span>
            </div>
          </div>
        </div>
        
        <div className="progress-bar-container">
          <div className="progress-bar-label">
            <span>Test Progress</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill-test" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
      </div>

      {/* Main Test Area */}
      <div className="test-main">
        {/* Question Navigator */}
        <div className="question-navigator">
          <button 
            className={`nav-btn ${reviewMode ? 'active' : ''}`}
            onClick={() => setReviewMode(!reviewMode)}
          >
            {reviewMode ? '📝 Back to Question' : '🔍 Review All Questions'}
          </button>
          
          {!reviewMode ? (
            <div className="navigation-buttons">
              <button 
                className="nav-prev" 
                onClick={handlePrevious}
                disabled={currentQuestionIndex === 0}
              >
                ← Previous
              </button>
              <button className="nav-flag" onClick={handleFlag}>
                {flaggedQuestions[currentQuestionIndex] ? '🏁 Unflag' : '🚩 Flag for Review'}
              </button>
              <button 
                className="nav-next" 
                onClick={handleNext}
              >
                {currentQuestionIndex === questions.length - 1 ? 'Finish →' : 'Next →'}
              </button>
            </div>
          ) : (
            <div className="questions-grid">
              <h3>Question Navigator</h3>
              <div className="question-buttons">
                {questions.map((_, idx) => (
                  <button
                    key={idx}
                    className={`question-jump ${answers[questions[idx].id] !== undefined ? 'answered' : ''} 
                               ${flaggedQuestions[idx] ? 'flagged' : ''}
                               ${currentQuestionIndex === idx ? 'current' : ''}`}
                    onClick={() => handleJumpToQuestion(idx)}
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Current Question */}
        {!reviewMode && currentQuestion && (
          <div className="question-card">
            <div className="question-header">
              <div className="question-number">
                Question {currentQuestionIndex + 1} of {questions.length}
              </div>
              {flaggedQuestions[currentQuestionIndex] && (
                <div className="flagged-badge">🚩 Flagged for Review</div>
              )}
            </div>
            
            <div className="question-text">
              <h2>{currentQuestion.question}</h2>
            </div>
            
            <div className="options-list">
              {currentQuestion.options.map((option, idx) => (
                <div
                  key={idx}
                  className={`option-card ${answers[currentQuestion.id] === idx ? 'selected' : ''}`}
                  onClick={() => handleAnswer(currentQuestion.id, idx)}
                >
                  <div className="option-letter">
                    {String.fromCharCode(65 + idx)}
                  </div>
                  <div className="option-text">{option}</div>
                  {answers[currentQuestion.id] === idx && (
                    <div className="option-check">✓</div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="question-footer">
              <div className="question-hint">
                💡 Tip: Choose the best answer. You can change your answer anytime.
              </div>
            </div>
          </div>
        )}

        {/* Submit Section */}
        <div className="submit-section">
          <div className="submit-card">
            <div className="submit-info">
              <div className="submit-icon">📊</div>
              <div>
                <h3>Ready to Submit?</h3>
                <p>You've answered {answeredCount} out of {questions.length} questions</p>
                {answeredCount < questions.length && (
                  <small>⚠️ {questions.length - answeredCount} questions remaining</small>
                )}
              </div>
            </div>
            <button 
              className="btn-submit"
              onClick={() => setShowConfirmModal(true)}
            >
              Submit Test 📝
            </button>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirmModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-icon">⚠️</div>
              <h2>Submit Your Test?</h2>
            </div>
            <div className="modal-body">
              <p>Before you submit, please review:</p>
              <ul>
                <li>✅ You've answered {answeredCount} out of {questions.length} questions</li>
                <li>🏁 {Object.keys(flaggedQuestions).filter(k => flaggedQuestions[k]).length} questions flagged for review</li>
                <li>⏱️ Time remaining: {formatTime(timeLeft)}</li>
              </ul>
              <p className="modal-warning">
                Once submitted, you cannot change your answers!
              </p>
            </div>
            <div className="modal-footer">
              <button className="btn-cancel-modal" onClick={() => setShowConfirmModal(false)}>
                Continue Testing
              </button>
              <button className="btn-submit-modal" onClick={handleSubmit}>
                Yes, Submit Test
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DailyMockTest;