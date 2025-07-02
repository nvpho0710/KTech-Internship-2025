import React from 'react';
import styles from './Button5.module.css';
import { FaBell } from 'react-icons/fa';

export interface Button5Props {
  logo?: React.ReactNode;
  title?: string;
  subtitle?: string;
  amount?: string;
  time?: string;
  notificationText?: string;
  notificationCount?: number;
}

export const NikeLogo = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="24" fill="#111"/>
    <path d="M13 27.5c7.5-2.5 15.5-4.5 22-5.5-4.5 2.5-9.5 5-22 5.5z" fill="#fff"/>
  </svg>
);

const Button5: React.FC<Button5Props> = ({
  logo,
  title,
  subtitle,
  amount,
  time,
  notificationText,
  notificationCount
}) => {
  if (notificationText) {
    return (
      <div className={styles.notifyContainer}>
        <span className={styles.notifyText}>{notificationText}</span>
        <div className={styles.notifyRight}>
          <div className={styles.divider} />
          <button className={styles.bellBtn}><FaBell /></button>
          <span className={styles.badge}>{notificationCount}</span>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.logo}>{logo}</div>
        <div className={styles.info}>
          <span className={styles.title}>{title}</span>
          <span className={styles.subtitle}>{subtitle}</span>
        </div>
      </div>
      <div className={styles.right}>
        <span className={styles.amount}>{amount}</span>
        <span className={styles.time}>{time}</span>
      </div>
    </div>
  );
};

export default Button5;
