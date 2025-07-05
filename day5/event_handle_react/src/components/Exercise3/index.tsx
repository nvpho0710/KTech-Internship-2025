import  { useState } from 'react';

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn((prev) => !prev);
  };

  return (
    <div>
      <button onClick={handleToggle}>
        {isOn ? 'Turn OFF' : 'Turn ON'}
      </button>
      <p>State: {isOn ? 'ON' : 'OFF'}</p>
    </div>
  );
};

export default ToggleSwitch;