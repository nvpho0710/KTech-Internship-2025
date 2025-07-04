import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./styles.module.css";

export default function Slide({photos=[]})  {
   

    const [currentItem, setItem] = React.useState(1);

    /* xác định tổng số lượng hình */
    const totals = photos.length;

    return (
      <div className={styles.slide_wrapper}>
        {/* pre Button */}

        {currentItem > 1 ? <span className={styles.pre} onClick={() => {
             setItem(currentItem-1);
        }}>
            <FontAwesomeIcon icon="fa-solid fa-angle-left" />
        </span> : <span className={styles.pre}>
            <FontAwesomeIcon icon="fa-solid fa-angle-left" />
        </span>}

        {/* Next Button */}
        {currentItem < totals ? <span className={styles.next} onClick={() => {
             setItem(currentItem+1);
        }}>
            <FontAwesomeIcon icon="fa-solid fa-angle-right" />
        </span> : <span className={styles.next}>
            <FontAwesomeIcon icon="fa-solid fa-angle-right" />
        </span>}

        {/* {currentItem < totals && (<NextButton onClick={() => {
             setItem(currentItem+1);
        }}/>)} */}
        
        <div className={styles.slide_show}>
            <img className={styles.fade_in} src={process.env.PUBLIC_URL + photos[currentItem-1].link} alt={currentItem} />
        </div>
        <div className={styles.slide_thumbs}>
            {photos.map((photo,index) => {
                let active;
                if((index+1)===currentItem){
                    active = styles.active;
                } 
                return (
                    <div key={photo.id.toString()} className={active} onClick={() => {
                        setItem(index+1);
                        }}>
                    <img src={process.env.PUBLIC_URL + photo.link} alt={photo.alt} />
                    </div>
                )
            }
                
            )}
        </div>
      </div>
    )
  
}
