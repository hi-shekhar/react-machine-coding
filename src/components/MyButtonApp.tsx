import { memo } from "react";
import "../styles/MyButtonApp.css";

interface MyButtonProps {
  label: string;
  className?: string;
  onClick: () => void;
}

const MyButtonApp = memo(({ label, className, onClick }: MyButtonProps) => {
  console.log("render", label);
  return (
    <button type="button" className={`my-btn  ${className}`} onClick={onClick}>
      {label}
    </button>
  );
});

export default MyButtonApp;
