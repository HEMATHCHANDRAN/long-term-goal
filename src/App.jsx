import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';

// Import all pages
import Home from './pages/Home';
import GoalBreakdown from './pages/GoalBreakdown';
import TopicSelection from './pages/TopicSelection';
import WeeklyPlan from './pages/WeeklyPlan';
import DailyTask from './pages/DailyTask';
import DailyMockTest from './pages/DailyMockTest';
import DailyTestResult from './pages/DailyTestResult';
import WeeklyFullTest from './pages/WeeklyFullTest';
import WeeklyTestResult from './pages/WeeklyTestResult';
import ProgressBarPage from './pages/ProgressBarPage';
import ScoreHistory from './pages/ScoreHistory';
import ContentLibrary from './pages/ContentLibrary';
import ProfilePage from './pages/ProfilePage';
import Settings from './pages/Settings';
import HelpTutorial from './pages/HelpTutorial';
import LearningPath from './pages/LearningPath';

// Components
import Header from './components/Header';
import Navigation from './components/Navigation';
import FloatingProgress from './components/FloatingProgress';

function AppContent() {
  const [userGoal, setUserGoal] = useState(localStorage.getItem('userGoal') || '');
  const [selectedTopic, setSelectedTopic] = useState(localStorage.getItem('selectedTopic') || 'HTML');
  const [currentDay, setCurrentDay] = useState(parseInt(localStorage.getItem('currentDay')) || 1);
  const [progress, setProgress] = useState(JSON.parse(localStorage.getItem('progress')) || {});
  const [scores, setScores] = useState(JSON.parse(localStorage.getItem('scores')) || []);
  const [dailyTestAnswers, setDailyTestAnswers] = useState({});
  const [weeklyTestAnswers, setWeeklyTestAnswers] = useState({});

  useEffect(() => {
    localStorage.setItem('userGoal', userGoal);
    localStorage.setItem('selectedTopic', selectedTopic);
    localStorage.setItem('currentDay', currentDay);
    localStorage.setItem('progress', JSON.stringify(progress));
    localStorage.setItem('scores', JSON.stringify(scores));
  }, [userGoal, selectedTopic, currentDay, progress, scores]);

  const updateProgress = (topic, day, completed) => {
    const newProgress = { ...progress };
    if (!newProgress[topic]) {
      newProgress[topic] = { completedDays: [], totalDays: 7, startedAt: new Date().toISOString() };
    }
    
    if (completed && !newProgress[topic].completedDays.includes(day)) {
      newProgress[topic].completedDays.push(day);
      newProgress[topic].lastUpdated = new Date().toISOString();
    }
    
    setProgress(newProgress);
  };

  return (
    <div className="App">
      <Header userGoal={userGoal} />
      <Navigation />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home setUserGoal={setUserGoal} userGoal={userGoal} />} />
          <Route path="/goal-breakdown" element={<GoalBreakdown setSelectedTopic={setSelectedTopic} />} />
          <Route path="/topic-selection" element={<TopicSelection setSelectedTopic={setSelectedTopic} />} />
          <Route path="/weekly-plan" element={
            <WeeklyPlan 
              selectedTopic={selectedTopic} 
              currentDay={currentDay} 
              setCurrentDay={setCurrentDay} 
              progress={progress}
              updateProgress={updateProgress}
            />
          } />
          <Route path="/daily-task" element={
            <DailyTask 
              selectedTopic={selectedTopic} 
              currentDay={currentDay}
              updateProgress={updateProgress}
            />
          } />
          <Route path="/daily-mock-test" element={
            <DailyMockTest 
              selectedTopic={selectedTopic} 
              currentDay={currentDay} 
              setScores={setScores} 
              scores={scores}
              dailyTestAnswers={dailyTestAnswers}
              setDailyTestAnswers={setDailyTestAnswers}
            />
          } />
          <Route path="/daily-test-result" element={<DailyTestResult />} />
          <Route path="/weekly-full-test" element={
            <WeeklyFullTest 
              selectedTopic={selectedTopic} 
              setScores={setScores} 
              scores={scores}
              weeklyTestAnswers={weeklyTestAnswers}
              setWeeklyTestAnswers={setWeeklyTestAnswers}
            />
          } />
          <Route path="/weekly-test-result" element={<WeeklyTestResult updateProgress={updateProgress} selectedTopic={selectedTopic} />} />
          <Route path="/progress-bar" element={<ProgressBarPage progress={progress} />} />
          <Route path="/score-history" element={<ScoreHistory scores={scores} />} />
          <Route path="/content-library" element={<ContentLibrary />} />
          <Route path="/profile" element={<ProfilePage userGoal={userGoal} setUserGoal={setUserGoal} progress={progress} scores={scores} />} />
          <Route path="/settings" element={
            <Settings 
              setProgress={setProgress} 
              setScores={setScores} 
              setUserGoal={setUserGoal} 
              setSelectedTopic={setSelectedTopic} 
              setCurrentDay={setCurrentDay}
            />
          } />
          <Route path="/help" element={<HelpTutorial />} />
          <Route path="/learning-path" element={<LearningPath progress={progress} setSelectedTopic={setSelectedTopic} />} />
        </Routes>
      </main>
      <FloatingProgress progress={progress} />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;