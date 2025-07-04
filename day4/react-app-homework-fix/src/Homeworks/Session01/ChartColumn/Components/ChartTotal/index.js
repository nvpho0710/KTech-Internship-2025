import React from 'react'
import styles from './styles.module.css';
// Show info

// Show info
function ChartTotal({text='',unit='',total=0}){
    return (
        <div className={styles.blockChart__info}>
            <div className={styles.blockChart__text}>
            {text}
            </div>
            <div className={styles.blockChart__total}>
            {unit}{total}
            </div>
  
        </div>
    )
  }
  
export default ChartTotal