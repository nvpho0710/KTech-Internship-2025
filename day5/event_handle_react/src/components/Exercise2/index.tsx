
import React, { useState } from "react";

const InputFieldTracker = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <p>You typed: {inputValue ? inputValue : "nothing"}</p>
    </div>
  );
};

export default InputFieldTracker;
