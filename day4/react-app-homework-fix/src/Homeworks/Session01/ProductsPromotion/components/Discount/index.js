import React from 'react'
import styles from "./styles.module.css";

function DiscountLabel({discount=0}){
    return (
        <span className={styles.promo_item_discount}>-{discount}%</span>
    )
}
function DiscountInline({discount=0}){
    return (
        <em>{discount}% off</em>
    )
}
/**
 * Tính phần trăm giảm giá
 */
export default function Discount({price = 0, promo_price = 0, type='label'}) {
    let discount = 0;
    if(promo_price > 0 && price > promo_price){
        discount = 100-(100*promo_price/price);
    }
    //discount = Math.ceil(discount);
    discount = +discount.toFixed(0);

    let discount_show;
    if(type==='label'){
        discount_show = <DiscountLabel discount={discount} />;
    }else{
        discount_show = <DiscountInline discount={discount} />;
    }
    return (<span>{discount_show}</span>)
}
