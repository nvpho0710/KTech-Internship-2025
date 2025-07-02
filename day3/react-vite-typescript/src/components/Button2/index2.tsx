import styles from './Button2.module.css';
import React from 'react';

type TButton2Props = {
  placeholder?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  value?: string;
  bold?: boolean;
  color?: 'green' | 'yellow';
}

const Button2 = ({ placeholder, leftIcon, rightIcon, value, bold, color }: TButton2Props) => {

  const classNames = [styles.textfield];
  if (color === 'green') classNames.push(styles['textfield--green']);
  if (color === 'yellow') classNames.push(styles['textfield--yellow']);

  return (
    <div className={classNames.join(' ')}>
      {leftIcon && <span className={styles.textfield__icon}>{leftIcon}</span>}
      <input
        className={bold ? `${styles.textfield__input} ${styles.bold}` : styles.textfield__input}
        placeholder={placeholder}
        value={value}
        readOnly
      />
      {rightIcon && <span className={styles.textfield__right}>{rightIcon}</span>}
    </div>
  );
};

export default Button2;

