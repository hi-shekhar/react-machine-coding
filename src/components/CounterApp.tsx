import { useState } from "react";
import "../styles/CounterApp.css";
import MyButtonApp from "./MyButtonApp";

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      <h2>Counter App</h2>
      <p className="counter-value">Current Count: {count}</p>
      <div className="counter-controls">
        <MyButtonApp
          label="Increment"
          className="success-btn"
          onClick={handleIncrement}
        />
        <MyButtonApp
          label="Decrement"
          className="error-btn"
          onClick={handleDecrement}
        />
        <MyButtonApp
          label="Reset"
          className="primary-btn"
          onClick={handleReset}
        />
      </div>
    </div>
  );
};

export default Counter;
