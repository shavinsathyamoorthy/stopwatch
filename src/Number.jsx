/* import React, {useState, useRef} from 'react';

export default function NumberTracker() {
  // Controlled input state
  const [inputValue, setInputValue] = useState('');
  
  // State for current displayed value
  const [currentValue, setCurrentValue] = useState(null);

  // useRef to keep track of the previous value across renders without causing re-renders
  const previousValueRef = useRef(null);

  const handleUpdate = () => {
    if (inputValue.trim() === '') return;

    const newNumber = Number(inputValue);

    // 1. Store the current value as previous BEFORE updating state
    previousValueRef.current = currentValue;

    // 2. Update state to trigger a single re-render with the new current value
    setCurrentValue(newNumber);

    // Optional: Clear input after update
    setInputValue('');
  };

  return (
    <div >
      <h2>Number Tracker</h2>

      <div>
        <input
          type="number"
          placeholder="Enter a number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button 
          onClick={handleUpdate}
        >
          Update
        </button>
      </div>

      <div>
        <p>
          <strong>Current Value:</strong> {currentValue !== null ? currentValue : '0'}
        </p>
        <p>
          <strong>Previous Value:</strong> {previousValueRef.current !== null ? previousValueRef.current : '0'}
        </p>
      </div>
    </div>
  );
} 
 */

import React,{useState, useRef} from 'react'

export default function NumberTracker() {

  const [inputValue, setInputValue] = useState('');

  const [currentValue, setCurrentValue] = useState(null);

  const prevValueRef = useRef(null);

  const handleChange = () => {
    if (inputValue.trim() === '') return;

    

    prevValueRef.current = currentValue;

    setCurrentValue(Number(inputValue));

    setInputValue('')
  }
  return (
    <div>
      <h3>Number Memory</h3>

      <input 
      type='number'
      placeholder='enter number'
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      />

      <button onClick={handleChange}>Update</button>

      <div className="values">
        <p>Present Value : {currentValue !== null ? currentValue : '0'}</p>
        <p>Previous Value : {prevValueRef.current !== null ? prevValueRef.current : '0'}</p>
      </div>
    </div>
  )
}
 















