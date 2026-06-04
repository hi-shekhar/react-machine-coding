import { memo } from "react";
import "../styles/MyButtonApp.css";

interface MyButtonProps {
  type?: "button" | "submit" | "reset";
  label: string;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const MyButtonApp = memo(
  ({ type = "button", label, className, disabled, onClick }: MyButtonProps) => {
    return (
      <button
        type={type}
        className={`my-btn ${className}`}
        onClick={onClick}
        disabled={disabled}
      >
        {label}
      </button>
    );
  },
);

export default MyButtonApp;
