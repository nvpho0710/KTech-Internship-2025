import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./styles.module.css";


function PreButton(){
    return (
        <span className={styles.pre}>
            <FontAwesomeIcon icon="fa-solid fa-angle-left" />
        </span>
    )
}

export default PreButton