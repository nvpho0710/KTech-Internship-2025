import React from "react";
import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Slide2({
  sliderArrs = [],
  delay = 2000,
  options = "dots",
  autoplay = true,
}) {
  const [currentItem, setItem] = React.useState(1);

  /* xác định tổng số lượng hình */
  const totals = sliderArrs.length;

  const handlePre = () => {
    let pre = currentItem <= 1 ? totals : currentItem - 1;
    setItem(pre);
  };
  const handleNext = () => {
    let next = currentItem >= totals ? 1 : currentItem + 1;
    setItem(next);
  };

  let src = sliderArrs[currentItem - 1].link;
  
  const timer = React.useRef(null);

  // component mount
  React.useEffect(() => {
    console.log("🔥Component mounting");
    if (autoplay === true) {
      // useRef value stored in .current property
      timer.current = setInterval(() => {
        setItem((currentItem) => (currentItem >= totals ? 1 : currentItem + 1));
        console.log("Timer running", autoplay);
      }, delay);
    }
  }, []); //Dependencies

  // Updating: Lifecycle
  React.useEffect(() => {
    // component mount
    if (!autoplay) clearInterval(timer.current);
    console.log("🔥Component update", autoplay, options);
  });

  React.useEffect(() => {
    // clear on component unmount
    return () => {
      clearInterval(timer.current);
    };
  }, []);

  
  return (
    <>
      <div className={styles.slide_wrapper}>
        

        <div className={styles.slide_show}>
          {/* pre Button */}
          <span className={styles.pre} onClick={handlePre}>
            <FontAwesomeIcon icon="fa-solid fa-angle-left" />
          </span>

          {/* Next Button */}
          <span className={styles.next} onClick={handleNext}>
            <FontAwesomeIcon icon="fa-solid fa-angle-right" />
          </span>
          <img className={styles.fade_in} src={process.env.PUBLIC_URL + src} alt={currentItem} />
        </div>
        <div
          className={
            options === "thumbnails"
              ? styles.slide_controls + " " + styles.slide_controls_thumbnail
              : styles.slide_controls
          }
        >
          {sliderArrs.map((photo, index) => {
            let active;
            if (index + 1 === currentItem) {
              active = styles.active;
            }
            return (
              <div
                key={photo.id.toString()}
                className={active}
                onClick={() => {
                  setItem(index + 1);
                }}
              >
                {options === "thumbnails" ? (
                  <img
                    className={styles.thumbnails}
                    src={process.env.PUBLIC_URL + photo.link}
                    alt={currentItem}
                  />
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Slide2;
