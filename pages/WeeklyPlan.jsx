import React from 'react';
import { useNavigate } from 'react-router-dom';
import { topicsData } from '../data/topicsData';
import './Pages.css';

function WeeklyPlan({ selectedTopic, currentDay, setCurrentDay, progress }) {
  const navigate = useNavigate();
  const topicData = topicsData[selectedTopic];
  const completedDays = progress[selectedTopic]?.completedDays || [];

  const handleDayClick = (day) => {
    if (day <= currentDay || completedDays.includes(day - 1)) {
      setCurrentDay(day);
      if (day <= 6) {
        navigate('/daily-task');
      } else {
        navigate('/weekly-full-test');
      }
    }
  };

  return (
    <div className="page-container">
      <h1>7-Day Learning Plan: {selectedTopic}</h1>
      
      <div className="days-grid">
        {[1, 2, 3, 4, 5, 6, 7].map((day) => (
          <div
            key={day}
            className={`day-card ${completedDays.includes(day) ? 'completed' : ''} ${day > currentDay && !completedDays.includes(day - 1) ? 'locked' : ''}`}
            onClick={() => handleDayClick(day)}
          >
            <h3>Day {day}</h3>
            {day <= 6 ? (
              <>
                <p>{topicData?.days[day - 1]?.title || 'Learning Day'}</p>
                {completedDays.includes(day) && <span>✅ Completed</span>}
              </>
            ) : (
              <p>📝 Weekly Test Day</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeeklyPlan;