import { useState } from "react";

export default function DropDownSelection() {

    const [selectedOption, setSelectedOption] = useState("");
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(e.target.value);
    };
  return (
    <div>
        <select value={selectedOption} onChange={handleChange}>
            <option value="">Tuỳ chọn</option>
            <option value="Apple">Apple</option>
            <option value="Banana">Banana</option>
            <option value="Orange">Orange</option>
        </select>
        <p>You selected: {selectedOption || "nothing"}</p>
    </div>
  )
}