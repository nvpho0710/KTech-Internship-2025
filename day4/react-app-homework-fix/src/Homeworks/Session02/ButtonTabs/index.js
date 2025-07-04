import React from "react";
import styles from "./styles.module.css";
import PropTypes from "prop-types";

function ButtonTabs({ tabs = [], type = "button_tab" }) {
  const [currentTab, setCurrentTab] = React.useState(3);

  const handleTabClick = (e) => {
    let index = Number(e.target.getAttribute("data-id"));
    setCurrentTab(index - 1);
  };


  return (
    <div className={styles.tabs__wrapper + " " + styles[`${type}`]}>
      <div className={styles.tabs__list}>
        {tabs.map((tab, i) => {
          let active_class = styles.tabs__item + " " + styles.current_tab;
          return (
            <div
              key={i}
              data-id={tab.id}
              className={currentTab === i ? active_class : styles.tabs__item}
              onClick={handleTabClick}
            >
              {tab.tabTitle}
            </div>
          );
        })}
      </div>
      <div className={styles.tabs__body}>
        {tabs.map((tab, i) => {
          let active_class = styles.tabs__content + " " + styles.actived;
          return (
            <div
              key={i}
              data-id={tab.id}
              className={currentTab === i ? active_class : styles.tabs__content}
            >
              <p>{tab.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* Ràng buộc điều kiện */
ButtonTabs.propTypes = {
  tabs: PropTypes.array.isRequired,
  type: PropTypes.oneOf(["button_tab", "text_tab"]).isRequired,
};

export default ButtonTabs;
