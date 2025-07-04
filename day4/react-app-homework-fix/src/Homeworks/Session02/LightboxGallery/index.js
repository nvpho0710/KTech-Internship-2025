import React from "react";
import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function LightboxGallery({
  sliderArrs = []
}) {
  const [currentItem, setItem] = React.useState(1);
  const [overlay, setOverlay] = React.useState(styles.slide_overlay);
  const [slide_show, setSlideshow] = React.useState(styles.slide_show);

  /* xác định tổng số lượng hình */
  const totals = sliderArrs.length;

  const closeLightbox = () => {
      setOverlay(styles.slide_overlay);
      setSlideshow(styles.slide_show);
  }

  const handlePre = () => {
    let pre = currentItem <= 1 ? totals : currentItem - 1;
    setItem(pre);
  };
  const handleNext = () => {
    let next = currentItem >= totals ? 1 : currentItem + 1;
    setItem(next);
  };

  

  let src = process.env.PUBLIC_URL + sliderArrs[currentItem - 1].link;

  

  
  return (
    <>
      <div className={styles.slide_wrapper}>
        
        <div className={overlay} onClick={closeLightbox}></div>
          <div className={slide_show}>
            {/* pre Button */}
            <span className={styles.btn_pre} onClick={handlePre}>
              <FontAwesomeIcon icon="fa-solid fa-angle-left" />
            </span>

            {/* Next Button */}
            <span className={styles.btn_next} onClick={handleNext}>
              <FontAwesomeIcon icon="fa-solid fa-angle-right" />
            </span>
            <img className={styles.fade_in} src={src} alt={currentItem} />
            <span className={styles.btn_close} onClick={closeLightbox}><FontAwesomeIcon icon="fa-solid fa-x" /></span>
          </div>
        
        <ul
          className={styles.slide_controls_thumbnail}
        >
          {sliderArrs.map((photo, index) => {
            
            return (
              <li
                key={photo.id.toString()}
                className={styles.thumbnail_item}
                onClick={() => {
                  setItem(photo.id);
                  setOverlay(styles.slide_overlay + (" ") + styles.slide_display);
                  setSlideshow(styles.slide_show + (" ") + styles.active);
                }}
               
              >
               <div  className={styles.background_image} style={{backgroundImage: `url(${process.env.PUBLIC_URL + photo.link})`}}></div> 
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default LightboxGallery;
