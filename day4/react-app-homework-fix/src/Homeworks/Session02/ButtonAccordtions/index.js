import React from 'react'
import styles from "./styles.module.css";
import PropTypes from 'prop-types';


function MultiAccordtion ({id,title, content, defState=false}){
    const [currentTab, setCurrentTab] = React.useState(defState); 
    const handleTabClick = () => {
        setCurrentTab(!currentTab);
    }

    return(
        <div className={currentTab ? styles.tabs__item + (" ") + styles.current_tab : styles.tabs__item}>
            <div data-id={id} className={styles.tabs__title} onClick={handleTabClick}>{title}</div>
            <div className={styles.tabs__content}>
                <p>{content}</p>
            </div>
        </div>  
    )
}

function SingleAccordtion ({id,title, content, active=1, handle=null}){
    return(
        <div className={active ? styles.tabs__item + (" ") + styles.current_tab : styles.tabs__item}>
            <div data-id={id} onClick={handle} className={styles.tabs__title}>{title}</div>
            <div className={styles.tabs__content}>
                <p>{content}</p>
            </div>
        </div>  
    )
}


function ButtonAccordtions({tabs=[], type='multi'}) {
    
    let def = type ==='multi' ? false: 1;

    const [currentSingle, setCurrentSingle] = React.useState(def); 
    const handleSingle = e => {
        let dataID = e.target.getAttribute('data-id');
        let index = Number(dataID);
        setCurrentSingle(index);

    }
   
  return (
    <div className={styles.tabs__wrapper}>
            {tabs.map((tab, i) => {
                if(type === 'single'){
                    console.log(currentSingle,tab.id);
                    return <SingleAccordtion key={tab.id} active={(currentSingle === tab.id)} handle={handleSingle} id={tab.id} title={tab.tabTitle} content={ tab.content} />
                }else{
                    return <MultiAccordtion key={tab.id} defState={def} id={tab.id} title={tab.tabTitle} content={ tab.content} />
                }
                
            })}
    </div>
  )
}
/* Ràng buộc điều kiện */
ButtonAccordtions.propTypes = {
    tabs: PropTypes.array.isRequired,
  };

export default ButtonAccordtions