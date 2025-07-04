import React from 'react'
import ColumnBar from './components/ColumnBar';
import ChartTotal from './components/ChartTotal';
import styles from './styles.module.css';

export default function ChartColumn({text='',total=0, unit='', percentstages=[50,50,50,50,50]}) {
  return (
    
        <div className={styles.blockChart}>
          <ChartTotal text={text} unit={unit} total={total}/>
          <div className={styles.blockChart__column}>
              <ColumnBar day='Mon' percentstages={percentstages[0]} />
              <ColumnBar day='Tue' percentstages={percentstages[1]} />
              <ColumnBar day='Wed' percentstages={percentstages[2]} />
              <ColumnBar day='Thu' percentstages={percentstages[3]} />
              <ColumnBar day='Fri' percentstages={percentstages[4]} />
            </div>
       </div>
       
    
  )
}
