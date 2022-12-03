import './App.css';

import { React, useState } from 'react'
 
export default function App() {
  const [counter, setCounter] = useState(0);
 
  ///increase counter
  const incr = () => {
    setCounter(count => count + 1);
  };
 
  ///decrease counter
  const decr = () => {
    setCounter(count => count - 1);
  };
 
  const reset = () =>{
    setCounter(0)
  }
 
  return (
    <div className="counter">
      <h1>React Counter</h1>
      <span className="counter__output">{counter}</span>
      <div className="btn__container">
        <button className="control__btn" onClick={incr}>+</button>
        <button className="control__btn" onClick={decr}>-</button>
        <button className="reset" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}