import { useState } from "react";
import styles from "./Calculator.module.css";

const buttons = [
  "7", "8", "9", "÷",
  "4", "5", "6", "×",
  "1", "2", "3", "-",
  "0", ".", "C", "+",
  "="
];

const isOperator = (val: string) => ["+", "-", "×", "÷"].includes(val);

const Calculator = () => {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState<string | number>("");

  const handleButtonClick = (value: string) => {
    if (value === "C") {
      setExpression("");
      setResult("");
      return;
    }
    if (value === "=") {
      try {
        // Chuyển biểu thức sang dạng JS và kiểm tra chia cho 0
        const exp = expression.replace(/×/g, "*").replace(/÷/g, "/");
        if (/\/0(?![.0-9])/.test(exp)) {
          setResult("Error");
        } else {
          const evalResult = eval(exp);
          setResult(evalResult);
        }
      } catch {
        setResult("Error");
      }
      return;
    }
    // Ngăn nhập nhiều dấu chấm liên tiếp
    if (value === ".") {
      const parts = expression.split(/[+\-×÷]/);
      const last = parts[parts.length - 1];
      if (!last || last.includes(".")) return;
    }
    // Ngăn nhập 2 phép toán liên tiếp
    if (isOperator(value) && (expression === "" || isOperator(expression.slice(-1)))) return;
    setExpression(expression + value);
    setResult("");
  };

  return (
    <div className={styles.calculator}>
      <div className={styles.display}>
        <div className={styles.expression}>{expression || "0"}</div>
        <div className={styles.result}>{result !== "" ? result : ""}</div>
      </div>
      <div className={styles.buttons}>
        {buttons.map((btn) => (
          <button
            key={btn}
            className={isOperator(btn) ? styles.operator : btn === "=" ? styles.equals : ""}
            onClick={() => handleButtonClick(btn)}
            style={btn === "=" ? { gridColumn: "span 4" } : {}}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;