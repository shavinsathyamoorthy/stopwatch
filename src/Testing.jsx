import React, { useEffect, useState } from 'react'

export default function Testing() {
  const [milliSec,setMilliSec] = useState(0);
  const [isRunning,setIsRunning] = useState(false);

  const toggle = ()=>{
    setIsRunning((hello) => !hello);
  };

  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        setMilliSec((prevSec) => prevSec + 10);
      },10);
    }
    return ()=> clearInterval(interval);
  },[isRunning]);

  const format = () => {
    const getHours = Math.floor(milliSec / 3600000);
    const getMinutes = Math.floor((milliSec % 3600000) / 60000);
    const getSeconds = Math.floor((milliSec % 60000) / 1000);
    const getMilliSeconds = Math.floor((milliSec % 1000) / 10);

    const formatHours = String(getHours).padStart(2,0);
    const formatMinutes = String(getMinutes).padStart(2,0);
    const formatSeconds = String(getSeconds).padStart(2,0);
    const formatMilliSeconds = String(getMilliSeconds).padStart(2,0);

    return `${formatHours} : ${formatMinutes} : ${formatSeconds} : ${formatMilliSeconds}`
  };

  const handleReset = () => {
    setIsRunning(false);
    setMilliSec(0);
  }; 
  return (
    <div className='hero'>
      <div className="hello">
      <span className='title'>Stop Watch</span>
      </div>
      <div className={`format ${isRunning ? 'floating' : ''}`}>
          {format()}
      </div>

      <div className='btns'>
        <button className={isRunning ? 'btn btn-stop' : 'btn btn-start'} onClick={toggle}>{isRunning ? 'Stop' : 'Start'}</button>
        <button className='reset' onClick={handleReset}>Reset</button>
      </div>
    </div>
  )
}
