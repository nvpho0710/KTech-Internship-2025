import React from "react";
import Slide from "./Slide1";
import LikeButton from "./LikeButton";
import styles from "./styles.module.css";
import RatingStar from "./Rating";
import ButtonTabs from "./ButtonTabs";
import app_data from "./Data";
import ButtonAccordtions from "./ButtonAccordtions";
import Slide2 from "./Slide2";
import LightboxGallery from "./LightboxGallery";
function Session02() {
  const data = app_data[0];

  const [play, setAutoplay] = React.useState(false);
  const [type, setOption] = React.useState("dots");

  const hadleAutoplay = () => {
    setAutoplay(play => !play);
  };

  const hadleControl = () => {
    setOption(type === "dots" ? "thumbnails" : "dots");
  };

  return (
    <div>
      <div className={styles.section__title}>LikeButton</div>
      <LikeButton />
      <div className={styles.section__title}>Rating</div>
      <RatingStar />
      <div className={styles.section__title}>Slide with Thumb </div>
      <Slide photos={data.photosArr} />
      <div className={styles.section__title}>Button Tabs </div>
      <ButtonTabs tabs={data.tabs} type="button_tab" />
      <ButtonTabs tabs={data.tabs} type="text_tab" />
      <div className={styles.section__title}>Button Accordtions </div>
      <div className={styles.row}>
        <div className={styles.col_50}>
          Single Accordtions
          <ButtonAccordtions tabs={data.tabs} type="single" />
        </div>
        <div className={styles.col_50}>
          Multi Accordtions
          <ButtonAccordtions tabs={data.tabs} type="multi" />
        </div>
      </div>
      <div className={styles.section__title}>Slider2</div>
      <Slide2
        sliderArrs={data.sliderArr}
        delay={2000}
        autoplay={play}
        options={type}
      />
      <div>
        <button onClick={hadleAutoplay}>Autoplay on/Off</button>{" "}
        <button onClick={hadleControl}>Thumbnails/ Dots</button>
      </div>
      <p>
        Autoplay: <strong>{play ? "true" : "false"}</strong>
      </p>
      <p>
        Controls: <strong>{type}</strong>
      </p>
      <div className={styles.section__title}>Lightbox Gallery</div>
      <LightboxGallery sliderArrs={data.LightBoxGallerys} />
    </div>
  );
}

export default Session02;
