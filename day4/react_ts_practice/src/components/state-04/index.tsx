
import { useState, useRef, useEffect } from 'react';
import styles from './state04.module.css';

const sortOptions = [
  'Sản phẩm nổi bật',
  'Giá từ thấp đến cao',
  'Giá từ cao đến thấp',
];

export default function State04() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);

  return (
    <div className={styles.wrap}>
      <button className={styles.btn}>
        Bộ nhớ trong <span style={{fontSize: '1.1em'}}>▼</span>
      </button>
      <div style={{position:'relative'}}>
        <button className={styles.btn + ' ' + (open ? styles.active : '')} onClick={() => setOpen(v => !v)}>
          Sắp xếp <span style={{fontSize: '1.1em'}}>▼</span>
        </button>
        {open && (
          <div className={styles.menu} ref={menuRef}>
            <button className={styles.menuClose} onClick={() => setOpen(false)} aria-label="Đóng">×</button>
            {sortOptions.map((opt, idx) => (
              <div className={styles.menuItem} key={idx}>{opt}</div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
