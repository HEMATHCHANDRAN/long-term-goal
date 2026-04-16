import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Pages.css';

function Settings({ setProgress, setScores, setUserGoal, setSelectedTopic, setCurrentDay }) {
  const navigate = useNavigate();

  const handleResetAll = () => {
    if (window.confirm('⚠️ WARNING: This will delete ALL your progress, scores, and settings. This cannot be undone. Are you sure?')) {
      localStorage.clear();
      setProgress({});
      setScores([]);
      setUserGoal('');
      setSelectedTopic('');
      setCurrentDay(1);
      navigate('/');
      window.location.reload();
    }
  };

  const handleExportData = () => {
    const data = {
      progress: localStorage.getItem('progress'),
      scores: localStorage.getItem('scores'),
      userGoal: localStorage.getItem('userGoal'),
      exportDate: new Date().toISOString()
    };
    const dataStr = JSON.stringify(data, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `micro-goal-backup-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="page-container">
      <h1>Settings</h1>
      
      <div className="card">
        <h2>Data Management</h2>
        <div className="action-buttons">
          <button className="btn btn-primary" onClick={handleExportData}>
            📥 Export Data
          </button>
          <button className="btn btn-danger" onClick={handleResetAll}>
            ⚠️ Reset Everything
          </button>
        </div>
      </div>
      
      <div className="card">
        <h2>Preferences</h2>
        <p>Theme: Light Mode (Coming soon)</p>
        <p>Notifications: Enabled (Coming soon)</p>
      </div>
    </div>
  );
}

export default Settings;