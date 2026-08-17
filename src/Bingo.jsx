import React,{useState, useRef} from 'react'

export default function Bingo() {
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
