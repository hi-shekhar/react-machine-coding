import { useState, useEffect } from "react";
import "../styles/LiveInputFeedbackApp.css";

const MAX_LENGTH = 10;
const MAX_LIMIT_FEEDBACK = "Input cleared due to length limit!";
const INLIMIT_FEEBACK = "You are typing:";

const LiveInputFeedbackApp = () => {
  const [value, setValue] = useState<string>("");

  const [clearMessage, setClearMessage] = useState(false);

  const isOverLimit = value.length > MAX_LENGTH;

  const isEmpty = value.length === 0;

  let feedback = "";

  if (clearMessage && isEmpty) {
    feedback = MAX_LIMIT_FEEDBACK;
  } else if (isOverLimit) {
    feedback = MAX_LIMIT_FEEDBACK;
  } else {
    feedback = `${INLIMIT_FEEBACK} ${value}`;
  }

  const onValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (clearMessage) {
      setClearMessage(false);
    }
    setValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => event.preventDefault();

  useEffect(() => {
    if (isOverLimit) {
      setClearMessage(true);
      setValue("");
    }
  }, [isOverLimit]);

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={onValueChange} />
      <p className={isOverLimit || clearMessage ? "limit-exceeded" : ""}>
        {feedback}
      </p>
    </form>
  );
};

export default LiveInputFeedbackApp;
