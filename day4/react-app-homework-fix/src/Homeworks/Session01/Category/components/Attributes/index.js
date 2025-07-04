import React from 'react'
import styles from "./styles.module.css";

function ListItem({value=''}) {
  return <span>{value}</span>;
}

function Attributes({attr_list=[]}) {
 
  const listN = attr_list.map((name) =>
        <ListItem key={name.toString()} value={name} />
      );
  return (
    <div className={styles.products_item_attr}>
      {listN}
    </div>
  );
}

export default Attributes