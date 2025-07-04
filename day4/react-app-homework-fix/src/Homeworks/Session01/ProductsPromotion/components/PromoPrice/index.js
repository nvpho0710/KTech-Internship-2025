import React from 'react'
import styles from "./styles.module.css";
import Discount
 from '../Discount';
export default function PromoPrice({promo_price=0, price=0}){
    let show_discount;
     if (promo_price > 0 && price > promo_price) {
       show_discount = <Discount promo_price={promo_price} price={price} type=''/>;
     } else {
        show_discount = '';
     }

return (
    <div className={styles.promo_item_price}>
        <strong>${promo_price}</strong>
        <del>${price}</del>
        {show_discount}
    </div>
)
}
  
