
import React, { useState } from 'react';
import styles from './slidethumb.module.css';

export type SlideThumbItem = {
  image: string;
  alt?: string;
};

interface SlideThumbProps {
  items: SlideThumbItem[];
  initialIndex?: number;
}

const demoItems: SlideThumbItem[] = [
  { image: '/public/images/wash.jpg', alt: 'Washing Machine' },
  { image: '/public/images/speaker.jpg', alt: 'Speaker' },
  { image: '/public/images/camera.jpg', alt: 'Camera' },
  { image: '/public/images/book.jpg', alt: 'Book' },
  { image: '/public/images/headphone.jpg', alt: 'Headphone' },
];


const SlideThumb: React.FC<SlideThumbProps> = ({ items, initialIndex = 0 }) => {
  const [current, setCurrent] = useState(initialIndex);
  const goTo = (idx: number) => setCurrent(idx);
  const prev = () => setCurrent((c) => (c === 0 ? items.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === items.length - 1 ? 0 : c + 1));

  return (
    <div className={styles.slideThumbContainer}>
      <h1 style={{marginLeft: 12, marginTop: 24}}>Slide with Thumb</h1>
      <div className={styles.mainImageWrapper}>
        <button className={`${styles.arrowBtn} ${styles.arrowLeft}`} onClick={prev} aria-label="Previous">
          &#x2039;
        </button>
        <img
          src={items[current].image}
          alt={items[current].alt || `slide-${current}`}
          className={styles.mainImage}
        />
        <button className={`${styles.arrowBtn} ${styles.arrowRight}`} onClick={next} aria-label="Next">
          &#x203A;
        </button>
      </div>
      <div className={styles.thumbs}>
        {items.map((item, idx) => (
          <div
            key={item.image}
            className={
              idx === current
                ? `${styles.thumbItem} ${styles.selected}`
                : styles.thumbItem
            }
            onClick={() => goTo(idx)}
          >
            <img src={item.image} alt={item.alt || `thumb-${idx}`} className={styles.thumbImg} />
          </div>
        ))}
      </div>
    </div>
  );
};


const SlideThumbDemo = () => <SlideThumb items={demoItems} initialIndex={4} />;

export default SlideThumbDemo;
export { SlideThumb };
