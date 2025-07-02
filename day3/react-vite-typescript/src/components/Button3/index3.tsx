import React from 'react';
import styles from './Button3.module.css';

export interface Button3Props {
  avatar: string;
  name: string;
  subtitle?: string;
  rightIcon?: React.ReactNode;
}

const Button3: React.FC<Button3Props> = ({ avatar, name, subtitle, rightIcon }) => {
  return (
    <div className={styles.container}>
      <img src={avatar} alt={name} className={styles.avatar} />
      <div className={styles.info}>
        <span className={styles.name}>{name}</span>
        {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
      </div>
      {rightIcon && (
        <button className={styles.iconBtn}>
          {rightIcon}
        </button>
      )}
    </div>
  );
};

export default Button3;
