import React from 'react'

import '../Components/Chartbar1.css';



/**
 * 
 * @param {*} props 
 * @returns 
 */
export default function ChartBar1(props) {
  return (
    <div>
       <div className="chartbar">
            <div className="chartbar__item chartbar--label" style={{background: `${props.labelBg}`}}>
            {props.labelText}
            </div>
            <div className="chartbar__item chartbar--value">
               <div className="chartbar__item--dynamic chartbar--percent" data-percent={`${props.percent}%`}  style={{background: `${props.percentBg}`, width:`${props.percent}%`}}>{props.percent}%</div>
               
            </div>
        </div>  

    </div>
  )
}
