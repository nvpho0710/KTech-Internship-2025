
import { useState, useRef } from "react";

const DoubleClickMessage = () => {
  const [showMessage, setShowMessage] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleDoubleClick = () => {
    setShowMessage(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  return (
    <div>
      <button onDoubleClick={handleDoubleClick}>Double Click Me</button>
      {showMessage && <p>Double-clicked!</p>}
    </div>
  );
};

export default DoubleClickMessage;
