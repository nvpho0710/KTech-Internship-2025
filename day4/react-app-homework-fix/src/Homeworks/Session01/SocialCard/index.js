import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './styles.module.css';

export default function SocialBlock({color='#f1f1f1',iconName='Facebook',text='',total=0,unit=''}){
    return (
        <div className={styles.socialCard} style={{backgroundColor: `${color}`}}>
            <div className={styles.socialCard__item}>
                <div className={styles.socialCard__icon}>
                    <FontAwesomeIcon icon={iconName} size="3x" />
                </div>
                <div className={styles.socialCard__info}>
                    <div className={styles.socialCard__name}>{text}</div>
                    <div className={styles.socialCard__count}>{total} {unit}</div>
                </div>

            </div>
        </div>

    )
}

