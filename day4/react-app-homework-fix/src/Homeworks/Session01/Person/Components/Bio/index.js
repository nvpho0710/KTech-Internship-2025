import React from 'react'
import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function BioItem({icon='',text='',value=''}) {
  return (
    <li className={styles.person_bio_item}>
        <span className={styles.person_bio_item_l}><FontAwesomeIcon icon={icon} /> {text}</span>
        <span className={styles.person_bio_item_r}>{value}</span>
    </li>
  );
}

export default function Bio({bios=[]}) {
  const listItems = bios.map((row) => 
        <BioItem key={row.id.toString()} id={row.id} icon={row.icon} text={row.text} value={row.value} />);
  return (
    <ul className={styles.person__bio}>
        {listItems}
    </ul>
  )
}
