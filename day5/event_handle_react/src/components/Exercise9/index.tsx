
import { useState } from "react";

const CheckboxToggle = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  return (
    <div>
      <label>
        <input type="checkbox" checked={checked} onChange={handleChange} /> Toggle me
      </label>
      <p>Checkbox is: {checked ? "checked" : "unchecked"}</p>
    </div>
  );
};

export default CheckboxToggle;
