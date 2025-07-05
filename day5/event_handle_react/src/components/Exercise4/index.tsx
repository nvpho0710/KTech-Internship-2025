
import{ useState } from "react";

const HoverHighlight = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        backgroundColor: isHovered ? "yellow" : "white",
        padding: "20px",
        border: "1px solid #ccc",
        width: "200px",
        textAlign: "center",
        cursor: "pointer"
      }}
    >
      Hover me!
    </div>
  );
};

export default HoverHighlight;
