import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { generateWeeklyQuestions } from '../data/questionsData';
import './Pages.css';

function WeeklyFullTest({ selectedTopic, setScores, scores }) {
  const navigate = useNavigate();
  const [questions] = useState(generateWeeklyQuestions(selectedTopic, [1,2,3,4,5,6]));
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleAnswer = (qId, answerIndex) => {
    setAnswers({ ...answers, [qId]: answerIndex });
  };

  const handleSubmit = () => {
    let correctCount = 0;
    questions.forEach(q => {
      if (answers[q.id] === q.correct) correctCount++;
    });
    
    const score = (correctCount / questions.length) * 100;
    const newScore = {
      id: Date.now(),
      topic: selectedTopic,
      type: 'weekly',
      score: score,
      date: new Date().toLocaleDateString()
    };
    
    setScores([...scores, newScore]);
    setSubmitted(true);
    
    setTimeout(() => {
      navigate('/weekly-test-result', { state: { score, total: questions.length, correct: correctCount } });
    }, 2000);
  };

  if (submitted) {
    return <div className="page-container" style={{ textAlign: 'center' }}><h2>Submitting your weekly test...</h2></div>;
  }

  return (
    <div className="page-container">
      <h1>Weekly Full Test - {selectedTopic}</h1>
      <p>Comprehensive test covering all topics from this week</p>

      {questions.map((q, idx) => (
        <div key={q.id} className="test-question">
          <h3>Question {idx + 1}: {q.question}</h3>
          <div className="options-list">
            {q.options.map((opt, optIdx) => (
              <div
                key={optIdx}
                className={`option-item ${answers[q.id] === optIdx ? 'selected' : ''}`}
                onClick={() => handleAnswer(q.id, optIdx)}
              >
                {opt}
              </div>
            ))}
          </div>
        </div>
      ))}

      <button className="btn btn-primary" onClick={handleSubmit} style={{ width: '100%' }}>
        Submit Weekly Test
      </button>
    </div>
  );
}

export default WeeklyFullTest;