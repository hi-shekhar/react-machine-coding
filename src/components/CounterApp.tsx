import { useState } from "react";
import "../styles/CounterApp.css";

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      <h2>Counter App</h2>
      <p className="counter-value">Current Count: {count}</p>
      <div className="counter-controls">
        <button onClick={handleIncrement} className="counter-btn increment-btn">
          Increment
        </button>
        <button onClick={handleDecrement} className="counter-btn decrement-btn">
          Decrement
        </button>
        <button onClick={handleReset} className="counter-btn reset-btn">
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
