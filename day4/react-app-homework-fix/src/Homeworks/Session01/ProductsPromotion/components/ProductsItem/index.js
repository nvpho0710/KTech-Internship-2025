import React from 'react'
import styles from "./styles.module.css";
import NormalPrice from '../NormalPrice';
import PromoPrice from '../PromoPrice';
import Discount from '../Discount';

function addToCart(e){
    e.preventDefault();
    alert('Đã thêm vào giỏ hàng');
    return false;
}


export default function ProductsItem({price=0, promo_price=0, shop_name='', name='',thumb='', link='',rating=0, sold=0, stock=100}){
    /**
     * Tính phần trăm bán ra
     * 10 12
     * x  100
     */
    const sold_percent = 100*sold/stock;

    /**
     * Điều kiện để show giá khuyến mãi
     */
     let show_price;
     let show_label_discount;
     if (promo_price > 0 && price > promo_price) {
       show_price = <PromoPrice promo_price={promo_price} price={price} />;
       show_label_discount = <Discount promo_price={promo_price} price={price} type='label'/>;
     } else {
       show_price = <NormalPrice price={price} />;
       show_label_discount = '';
     }

     
    return (
        <div className={styles.promo_item}>
            <a href={link} onClick={addToCart}>
               {show_label_discount}
                <div className={styles.promo_item_photo}>
                    <img src={process.env.PUBLIC_URL + thumb} alt={name} />
                </div>
                <div className={styles.promo_item_store}>{shop_name}</div>
                {show_price}
                <h3 className={styles.promo_item_name}>{name}</h3>
                <div className={styles.promo_item_rankstar} style={{'--rating':`${rating}`}}></div>
                <div className={styles.promo_item_sold}>
                    <div className={styles.promo_item_sold_bar}>
                        <span className={styles.promo_item_sold_percent} style={{'width':`${sold_percent}%`}}></span>
                    </div>
                    <p>Solid: {sold}</p>
                </div>
            </a>
        </div>
    );
}
