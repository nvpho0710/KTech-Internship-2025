import React from 'react'
import styles from "./styles.module.css";

export default function PromoPrice({promo_price=0, price=0}){
return (
    <div className={styles.products_item_price}>
    <strong>${promo_price}</strong>
    <del>${price}</del>
    </div>
)
}
  
