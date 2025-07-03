import { useState } from 'react';
import styles from './state02.module.css';

// const ratingLabels = ['Tệ', 'Bình thường', 'Tốt'];
const ratingResults = [
  { label: 'Tệ', className: styles.bad },
  { label: 'Bình thường', className: styles.normal },
  { label: 'Tốt', className: styles.good },
];

export default function State02() {
  const [rating, setRating] = useState(1); // 0: tệ, 1: bình thường, 2: tốt

  return (
    <div className={styles.ratingWrap}>
      <span className={styles.label}>Chọn đánh giá của bạn</span>
      <div className={styles.stars}>
        {[0, 1, 2, 3, 4].map((i) => (
          <span
            key={i}
            className={
              i < rating + 2 ? styles.star + ' ' + styles.active : styles.star
            }
            onClick={() => setRating(i - 1)}
            role="button"
            aria-label={`Chọn ${i + 1} sao`}
          >
            ★
          </span>
        ))}
      </div>
      <span className={styles.result + ' ' + ratingResults[rating]?.className}>
        {ratingResults[rating]?.label}
      </span>
    </div>
  );
}
