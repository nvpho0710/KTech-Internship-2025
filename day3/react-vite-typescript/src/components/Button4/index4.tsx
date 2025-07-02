import React from 'react';
import styles from './Button4.module.css';

export interface Button4Props {
  avatars: string[];
  title: string;
  subtitle?: string;
  color?: 'cyan' | 'purple' | 'yellow';
}

const Button4: React.FC<Button4Props> = ({ avatars, title, subtitle, color = 'cyan' }) => {
  return (
    <div className={`${styles.container} ${styles[color]}`.trim()}>
      <div className={styles.avatars}>
        {avatars.map((src, idx) => (
          <img key={idx} src={src} alt="avatar" className={styles.avatar} style={{ zIndex: 10 - idx }} />
        ))}
      </div>
      <div className={styles.info}>
        <span className={styles.title}>{title}</span>
        {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
      </div>
    </div>
  );
};

export default Button4;
