import "../styles/MyButtonApp.css";

interface MyButtonProps {
  label: string;
  className: string;
  onClick: () => void;
}

const MyButtonApp = ({ label, className, onClick }: MyButtonProps) => {
  return (
    <button type="button" className={`my-btn  ${className}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default MyButtonApp;
