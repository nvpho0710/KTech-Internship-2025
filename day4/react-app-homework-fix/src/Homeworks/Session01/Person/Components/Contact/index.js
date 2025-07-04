import React from 'react'
import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Contact({bgColor='#f1f1f1', type='Email',icon='', content=''}) {
  return (
    <div className={styles.person_contacts} style={{backgroundColor: `${bgColor}`}}>
          <p className={styles.person_contacts_type}>{type}</p>
          <p className={styles.person_contacts_content}>
              <FontAwesomeIcon icon={icon} /> <span>{content}</span>
          </p>
      </div>
  )
}

export default Contact