import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './styles.module.css';

/**
 * Cách đưa prop vào FontAwesomeIcon
 * @param {*} props 
 * @returns 
 */

export default function Skill({icon="fa-brands fa-html5", name='',bg='#f1f1f1',percent=20}) {
  return (
    <div>
       <div className={styles.skills}>
            <div className={styles.skills__label} >
                <div className={styles.skills__label_icon} style={{background: `${bg}`}}><FontAwesomeIcon icon={icon} /></div>
                <div className={styles.skills__label_name}>{name}</div>
            </div>
            <div className={styles.skills__chart}>
               <div className={styles.skills__chart_percent} style={{background: `${bg}`, width: `${percent}%`}}></div>

            </div>
        </div>  

    </div>
  )
}
