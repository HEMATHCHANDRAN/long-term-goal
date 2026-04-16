export const saveToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const loadFromLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

export const clearAllData = () => {
  localStorage.clear();
  window.location.reload();
};

export const updateProgress = (topic, day, completed) => {
  const progress = loadFromLocalStorage('progress') || {};
  if (!progress[topic]) {
    progress[topic] = { completedDays: [], totalDays: 7 };
  }
  
  if (completed && !progress[topic].completedDays.includes(day)) {
    progress[topic].completedDays.push(day);
  } else if (!completed) {
    progress[topic].completedDays = progress[topic].completedDays.filter(d => d !== day);
  }
  
  saveToLocalStorage('progress', progress);
  return progress;
};