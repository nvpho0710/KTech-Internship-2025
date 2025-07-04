import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./styles.module.css";

function NextButton(){
    return (
        <span className={styles.next}>
            <FontAwesomeIcon icon="fa-solid fa-angle-right" />
        </span>
    )
}

export default NextButton 