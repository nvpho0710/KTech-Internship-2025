import React from 'react'
import styles from "./styles.module.css";
import ProductsItem from './components/ProductsItem';

/**
 * 
 * @returns Lấy ra 6 sản phẩm
 */
function ProductsPromotion() {
  return (
    <div className={styles.blockPromotion__wraper}>
        <div className={styles.blockPromotion_header}>
            <h2 className={styles.blockPromotion_title}>Deal of the day </h2>
            <div className={styles.blockPromotion_time}>End in: 6.17.17 39</div>
            <span className={styles.blockPromotion_more}><a>View more</a></span>
        </div>
        <div className={styles.blockPromotion_list}>
            <ProductsItem price={1422.7} promo_price={1025.5} sold={10} stock={12} shop_name='Young Shop' name='LG White Front Load Steam Washer' thumb='/block-ui-7-images/1.jpg' link='https://www.thegioididong.com' rating={4} />
            <ProductsItem price={96} promo_price={0} sold={15} stock={20} shop_name='Amazone' name='Edifier Powered Bookshelf Speaker' thumb='/block-ui-7-images/2.jpg' link='https://www.thegioididong.com' rating={3.2} />
            <ProductsItem price={62.99} promo_price={45.9} sold={20} stock={28} shop_name='Lazada' name='Amcrest Security Camera in White Color' thumb='/block-ui-7-images/3.jpg' link='https://www.thegioididong.com' rating={4.8} />
            <ProductsItem price={41.99} promo_price={32.99} sold={22} stock={30} shop_name='Taobao' name='Grand Slam Indoor Of Show Jumping Novel' thumb='/block-ui-7-images/4.jpg' link='https://www.thegioididong.com' rating={2.6} />
            <ProductsItem price={106.96} promo_price={100.99} sold={10} stock={12} shop_name='Alibaba' name='Sound intone i65 earphone white version' thumb='/block-ui-7-images/5.jpg' link='https://www.thegioididong.com' rating={3} />
            <ProductsItem price={670.2} promo_price={567.8} sold={79} stock={79} shop_name='Express' name='Korea Long Sofa Fabric In Blue Navy Color' thumb='/block-ui-7-images/6.jpg' link='https://www.thegioididong.com' rating={3.7} />
        </div>
    </div>
  )
}

export default ProductsPromotion