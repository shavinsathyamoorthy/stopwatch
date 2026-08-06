import React, { useState, useEffect } from 'react';
import './App.css';

function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    // Cleanup function to clear the interval to avoid memory leaks
    return () => clearInterval(interval);
  }, [isRunning]);

  // Format time into HH : MM : SS
  const formatTime = () => {
    const getHours = Math.floor(seconds / 3600);
    const getMinutes = Math.floor((seconds % 3600) / 60);
    const getSeconds = seconds % 60;

    const formattedHours = String(getHours).padStart(2, '0');
    const formattedMinutes = String(getMinutes).padStart(2, '0');
    const formattedSeconds = String(getSeconds).padStart(2, '0');

    return `${formattedHours} : ${formattedMinutes} : ${formattedSeconds}`;
  };

  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  return (
    <div className="stopwatch-card">
      <h2 className="stopwatch-title">Stopwatch</h2>
      
      <div className="timer-display">
        {formatTime()}
      </div>

      <div className="button-group">
        <button 
          className="btn btn-start" 
          onClick={handleStart} 
          disabled={isRunning}
        >
          Start
        </button>
        <button 
          className="btn btn-stop" 
          onClick={handleStop} 
          disabled={!isRunning}
        >
          Stop
        </button>
        <button 
          className="btn btn-reset" 
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Stopwatch;