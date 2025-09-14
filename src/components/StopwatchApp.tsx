import { useState, useEffect, useRef } from "react";
import "../styles/StopwatchApp.css";

const StopwatchApp = () => {
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const handleStart = () => setIsRunning(true);

  const handlePause = () => setIsRunning(false);

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (isRunning) {
      // Start the interval.
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 0);
    } else if (intervalRef.current) {
      // Clear the interval if the stopwatch is not running.
      clearInterval(intervalRef.current);
    }

    // Cleanup on unmount.
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning]);

  // Function to format the time (e.g., 00:00:00)
  const formatTime = (milliseconds: number) => {
    const minutes = Math.floor((milliseconds / 60000) % 60);
    const seconds = Math.floor((milliseconds / 1000) % 60);
    const ms = Math.floor((milliseconds % 1000) / 10);
    // MM:SS:ms format.
    return (
      (minutes < 10 ? "0" : "") +
      minutes +
      ":" +
      (seconds < 10 ? "0" : "") +
      seconds +
      ":" +
      (ms < 10 ? "0" : "") +
      ms
    );
  };

  return (
    <div className="stopwatch-container">
      <h2>Stopwatch</h2>
      <div className="stopwatch-display">{formatTime(time)}</div>
      <div className="stopwatch-controls">
        <button
          className="stopwatch-btn start-btn"
          onClick={handleStart}
          disabled={isRunning}
        >
          Start
        </button>
        <button
          className="stopwatch-btn pause-btn"
          onClick={handlePause}
          disabled={!isRunning}
        >
          Pause
        </button>
        <button className="stopwatch-btn reset-btn" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default StopwatchApp;
