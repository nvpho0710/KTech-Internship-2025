import React from 'react'
import styles from './styles.module.css';

function Avartar({link='', alt=''}) {
  const photo = process.env.PUBLIC_URL +link;
  return (
    <div className={styles.person__avatar}>
        <div className={styles.person_profile_photo}>
        <img src={photo} alt={alt} />
        </div>
    </div>
  )
}

export default Avartar