import { useCallback, useState } from "react";
import MyButtonApp from "./MyButtonApp";
import "../styles/ToggleApp.css";

const LOG_IN_TEXT = "Login";
const LOG_OUT_TEXT = "Logout";

const ToggleApp = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleState = useCallback(() => {
    setIsLoggedIn((prevStatus) => !prevStatus);
  }, []);

  const buttonLabel = isLoggedIn ? LOG_OUT_TEXT : LOG_IN_TEXT;
  const message = isLoggedIn ? "Welcome back, user! 🎉" : "Please log in 🔐";

  return (
    <div className="toggle-container">
      <h2>{message}</h2>
      <MyButtonApp
        onClick={toggleState}
        label={buttonLabel}
        className={isLoggedIn ? "error-btn" : "success-btn"}
      />
    </div>
  );
};

export default ToggleApp;
