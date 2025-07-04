import React from 'react'
import styles from './styles.module.css';

/**
 * 
 * @param {*} props 
 * @returns 
 */
export default function ChartBar({labelText='Name',labelBg='#f1f1f1', percentBg="#fafafa", percent=50}) {
  return (
    <div>
       <div className={styles.chartbar}>
            <div className={styles.chartbar__label} style={{background: `${labelBg}`}}>
            {labelText}
            </div>
            <div className={styles.chartbar__value}>
               <div className={styles.chartbar__percent} data-percent={`${percent}%`}  style={{background: `${percentBg}`, width:`${percent}%`}}>{percent}%</div>
               
            </div>
        </div>  

    </div>
  )
}
