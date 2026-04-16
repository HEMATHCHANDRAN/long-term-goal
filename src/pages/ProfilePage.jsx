import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Pages.css';

function ProfilePage({ userGoal, setUserGoal }) {
  const [editMode, setEditMode] = useState(false);
  const [newGoal, setNewGoal] = useState(userGoal);
  const navigate = useNavigate();

  const handleSave = () => {
    setUserGoal(newGoal);
    setEditMode(false);
  };

  return (
    <div className="page-container">
      <h1>Your Profile</h1>
      
      <div className="card">
        <h2>Career Goal</h2>
        {editMode ? (
          <div>
            <input
              type="text"
              value={newGoal}
              onChange={(e) => setNewGoal(e.target.value)}
              className="goal-input"
            />
            <button className="btn btn-primary" onClick={handleSave}>Save</button>
            <button className="btn btn-secondary" onClick={() => setEditMode(false)}>Cancel</button>
          </div>
        ) : (
          <div>
            <p style={{ fontSize: '1.2rem', margin: '10px 0' }}>{userGoal || 'Not set'}</p>
            <button className="btn btn-primary" onClick={() => setEditMode(true)}>Edit Goal</button>
          </div>
        )}
      </div>
      
      <div className="card">
        <h2>Learning Statistics</h2>
        <p>Total Tests Taken: {localStorage.getItem('scores') ? JSON.parse(localStorage.getItem('scores')).length : 0}</p>
        <button className="btn btn-primary" onClick={() => navigate('/score-history')}>View Score History</button>
      </div>
    </div>
  );
}

export default ProfilePage;