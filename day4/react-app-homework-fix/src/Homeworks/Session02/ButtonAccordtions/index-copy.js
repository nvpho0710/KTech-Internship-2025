import React from 'react'
import styles from "./styles.module.css";
import PropTypes from 'prop-types';

function ButtonAccordtions({tabs=[], type='single'}) {
    // Mặc định là kiểu single open tab
    let def = type === 'single' ? '1': ['0','0','0','0'];
    const [currentTab, setCurrentTab] = React.useState(def);    

    const handleTabClick = e => {
        let dataID = e.target.getAttribute('data-id');
        const index = Number(dataID)-1;
        let currentID = dataID;
        if(type === 'multi'){
           
            if (index > -1) {
                /* thay đổi giá trị item từ vị trí index đang đứng */
                currentTab[index] = '0'; 
                //console.log(currentTab);
            }else{
                
                console.log(a);
                currentTab[a] = dataID;
                currentID = currentTab;
            }
            
        }
        setCurrentTab(currentID);

        console.log(currentTab);
    }

   
    

  return (

    <div className={styles.tabs__wrapper}>
            {tabs.map((tab, i) => {
                let def_class = type === 'single' ? (currentTab === `${tab.id}` ? styles.tabs__item + (" ") + styles.current_tab : styles.tabs__item): (currentTab[i+1] === `${tab.id}` ? styles.tabs__item + (" ") + styles.current_tab : styles.tabs__item);
                console.log(currentTab[i]);
                return (
                    <div key={i}  className={def_class}>
                        <div data-id={tab.id} className={styles.tabs__title} onClick={(handleTabClick)}>{tab.tabTitle}</div>
                        <div className={styles.tabs__content}>
                            <p>{tab.content}</p>
                        </div>
                    </div>
                )
            }
            )}
       
    </div>
  )
}
/* Ràng buộc điều kiện */
ButtonAccordtions.propTypes = {
    tabs: PropTypes.array.isRequired,
    type: PropTypes.oneOf(['single', 'multi']).isRequired
  };

export default ButtonAccordtions