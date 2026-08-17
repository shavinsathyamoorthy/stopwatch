import React, { useState, useEffect } from 'react';

export default function CountdownTimer() {
  const INITIAL_TIME = 10;
  const [timeLeft, setTimeLeft] = useState(INITIAL_TIME);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let intervalId = null;

    // Start interval only if the timer is active and time is remaining
    if (isActive && timeLeft > 0) {
      intervalId = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      // Automatically stop timer when reaching 0
      setIsActive(false);
      clearInterval(intervalId);
    }

    // Cleanup interval on component unmount or state change
    return () => clearInterval(intervalId);
  }, [isActive, timeLeft]);

  // Handler to start timer
  const handleStart = () => {
    if (timeLeft > 0) {
      setIsActive(true);
    }
  };

  // Handler to reset timer back to initial state
  const handleReset = () => {
    setIsActive(false);
    setTimeLeft(INITIAL_TIME);
  };

  return (
    <div className='timer'>
      {/* Conditional Rendering based on remaining time */}
      {timeLeft > 0 ? (
        <h2>Time Remaining: {timeLeft}s</h2>
      ) : (
        <h2>Time's Up!</h2>
      )}

      <div className='hello-btn' style={{ marginTop: '20px' }}>
        <button 
          onClick={handleStart} 
          disabled={isActive || timeLeft === 0}
          style={{ marginRight: '10px', padding: '8px 16px', cursor: 'pointer' }}
        >
          Start Timer
        </button>

        <button 
          onClick={handleReset}
          style={{ padding: '8px 16px', cursor: 'pointer' }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}