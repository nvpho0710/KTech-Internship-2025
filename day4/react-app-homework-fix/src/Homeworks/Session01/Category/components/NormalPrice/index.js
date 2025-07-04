import React from 'react'
import styles from "./styles.module.css";
export default function NormalPrice({price=0}){
    return (
      <div className={styles.products_item_price}>
        <strong>${price}</strong>
      </div>
    )
}
  
