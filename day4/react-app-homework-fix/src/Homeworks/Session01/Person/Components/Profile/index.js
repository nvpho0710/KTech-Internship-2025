import React from 'react'
import styles from './styles.module.css';

function Profile({name='',position=''}) {
  return (
    <div className={styles.person__profile}>
          <h3 className={styles.person_profile_name}>
            {name}
          </h3>
          <div className={styles.person_profile_position}>
          {position}
          </div>
        </div>
  )
}

export default Profile