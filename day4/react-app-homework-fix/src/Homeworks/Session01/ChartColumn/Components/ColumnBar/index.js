import React from 'react'
import styles from './styles.module.css';



/**
 * 
 * @param {*} props 
 * Biến dạng mảng
 * Tham khảo https://www.w3schools.com/REACT/react_lists.asp
 * @returns 
 */
 function ColumnBar({day='Mon',percentstages=20}){
    return (
        <div className={styles.blockChart__item}>
            <div className={styles.blockChart__bar}>
                <div className={styles.blockChart__percent} style={{height: `${percentstages}%`}}></div>
            </div>
            <div className={styles.blockChart__day}>{day}</div>
        </div>  );
  }
export default ColumnBar