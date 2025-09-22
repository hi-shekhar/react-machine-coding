import React, { useState, useRef, useEffect } from "react";
import "../styles/OtpInputApp.css";

const OTP_LENGTH = 6;

const OtpInputApp: React.FC = () => {
  const [otp, setOtp] = useState<string[]>(new Array(OTP_LENGTH).fill(""));
  const [message, setMessage] = useState<{
    text: string;
    type: "success" | "error";
  } | null>(null);
  const [isMasked, setIsMasked] = useState<boolean>(true);
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  useEffect(() => {
    // Focus the first input field when the component mounts
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;
    // Allow only a single digit or empty string
    if (/^\d{0,1}$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Focus the next input field if a digit was entered
      if (value && index < OTP_LENGTH - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    // If Backspace is pressed and the current input is empty, move focus back
    if (e.key === "Backspace" && index > 0 && !otp[index]) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pasteData = e.clipboardData.getData("text");
    if (pasteData.length === OTP_LENGTH && /^\d+$/.test(pasteData)) {
      // Split the pasted string into an array of characters
      const pastedOtp = pasteData.split("");
      setOtp(pastedOtp);
      // Focus the last input after pasting
      inputRefs.current[OTP_LENGTH - 1]?.focus();
    }
  };

  const handleVerify = () => {
    const joinedOtp = otp.join("");
    if (joinedOtp.length === OTP_LENGTH) {
      // Mock validation logic
      if (joinedOtp === "123456") {
        setMessage({ text: "OTP verified successfully!", type: "success" });
      } else {
        setMessage({ text: "Invalid OTP. Please try again.", type: "error" });
      }
    } else {
      setMessage({ text: "Please enter a complete OTP.", type: "error" });
    }
  };

  const handleReset = () => {
    setOtp(new Array(OTP_LENGTH).fill(""));
    setMessage(null);
    inputRefs.current[0]?.focus();
  };

  return (
    <div className="otp-container">
      <h2>OTP Input</h2>
      <p>Enter the 6-digit code we sent you.</p>
      <div className="otp-input-fields" onPaste={handlePaste}>
        {otp.map((digit, index) => (
          <input
            key={index}
            type={isMasked ? "password" : "text"}
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            ref={(el) => {
              inputRefs.current[index] = el;
            }}
            className="otp-input"
          />
        ))}
      </div>
      <div className="mask-toggle">
        <input
          type="checkbox"
          id="mask-otp"
          checked={isMasked}
          onChange={() => setIsMasked(!isMasked)}
        />
        <label htmlFor="mask-otp">Mask OTP</label>
      </div>
      <div className="otp-actions">
        <button onClick={handleVerify} className="verify-btn">
          Verify OTP
        </button>
        <button onClick={handleReset} className="reset-btn">
          Reset
        </button>
      </div>
      {message && (
        <p className={`otp-message ${message.type}`}>{message.text}</p>
      )}
    </div>
  );
};

export default OtpInputApp;
