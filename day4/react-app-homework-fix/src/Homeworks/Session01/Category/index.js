import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./styles.module.css";
import Attributes from "./components/Attributes";
import NormalPrice from "./components/NormalPrice";
import PromoPrice from "./components/PromoPrice";

export default function Category(
  {
    id=0,
    name = "",
    thumb = "",
    desc = "",
    price = 0,
    promo_price = 0,
    attrsArr = []
  }
) {
  let show_price;
  if (promo_price > 0) {
    show_price = <PromoPrice promo_price={promo_price} price={price} />;
  } else {
    show_price = <NormalPrice price={price} />;
  }

  const addToCart = () => {
    alert('Đã thêm sản phẩm vào giỏ hàng');
  };

  return (
    <div className={styles.products_item}>
      <div className={styles.products_item_photo}>
        <img src={process.env.PUBLIC_URL + thumb} alt={name} />
      </div>
      <div className={styles.products_item_info}>
        <h3 className={styles.products_item_name}>{name}</h3>
        <p className={styles.products_item_desc}>{desc}</p>
      </div>
      <Attributes attr_list={attrsArr} />
      {show_price}
      <div className={styles.products_item_action}>
        <button
          type="button"
          className={styles.products_item_buton}
          onClick={addToCart}
        >
          <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />{" "}
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  );
}
