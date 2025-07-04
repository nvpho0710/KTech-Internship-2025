import React from 'react'
import '../Components/ChartColumn.css';

/**
 * 
 * @param {*} props 
 * Biến dạng mảng
 * Tham khảo https://www.w3schools.com/REACT/react_lists.asp
 * @returns 
 */
function BlockChart(){
    const percent = [20, 45, 30, 80, 75];
    return (
    <div className="blockChart__column">
        <div className="blockChart__item">
            <div className="blockChart__bar">
                <div className="blockChart__percent" style={{height: `${percent[0]}%`}}></div>
            </div>
            <div className='blockChart__day'>Mon</div>
        </div>
        <div className="blockChart__item">
        <div className="blockChart__bar">
               <div className="blockChart__percent" style={{height: `${percent[1]}%`}}></div>
            </div>
            <div className='blockChart__day'>Tue</div>
        </div>
        <div className="blockChart__item">
            <div className="blockChart__bar">
               <div className="blockChart__percent" style={{height: `${percent[2]}%`}}></div>
            </div>
            <div className='blockChart__day'>Wed</div>
        </div>
        <div className="blockChart__item">
            <div className="blockChart__bar">
               <div className="blockChart__percent" style={{height: `${percent[3]}%`}}></div>
            </div>
            <div className='blockChart__day'>Thu</div>
        </div>
        <div className="blockChart__item">
            <div className="blockChart__bar">
               <div className="blockChart__percent" style={{height: `${percent[4]}%`}}></div>
            </div>
            <div className='blockChart__day'>Fri</div>
        </div>
     </div>
    );
}
// Show info
function BlockText(props){
    return (
        <div className="blockChart__info">
            <div className="blockChart__text">
            {props.text}
            </div>
            <div className="blockChart__total">
            {props.unit}1200000
            </div>

        </div>
    )
}

export default function ChartColumn() {
    return (
      <div className='blockChart--wraper'>
          <div className="blockChart">
            <BlockText text="Today's Visitor" total={24599} unit='' />
            <BlockChart percentages={0}/>
         </div>
         <div className="blockChart">
            <BlockText text="Yesterday's Visitor" total={15699} unit=''/>
            <BlockChart percentages={0} />
         </div>
         <div className="blockChart">
            <BlockText text="Total Download" total={124599} unit=''/>
            <BlockChart percentages={0} />
         </div>
         <div className="blockChart">
            <BlockText text="Curent InCome" total={54599} unit='$'/>
            <BlockChart />
         </div>
      </div>
    )
}
