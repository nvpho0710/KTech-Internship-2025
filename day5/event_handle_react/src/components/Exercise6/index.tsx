
import React, { useState } from "react";

const KeyPressDisplay = () => {
  const [lastKey, setLastKey] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setLastKey(e.key);
  };

  return (
    <div>
      <input type="text" onKeyDown={handleKeyDown} />
      <p>Last key pressed: {lastKey}</p>
    </div>
  );
};

export default KeyPressDisplay;
