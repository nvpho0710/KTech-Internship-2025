import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../Components/Profile.css';

/**
 * Cách đưa prop vào FontAwesomeIcon
 * @param {*} props 
 * @returns 
 */

export default function Profile(props) {
  return (
    <div>
       <div className="skills">
            <div className="skills__item skills-label" >
                <div className="skills-label__item skills-label-icon" style={{background: `${props.bg}`}}><FontAwesomeIcon icon={props.icon} /></div>
                <div className="skills-label__item skills-label-name">{props.name}</div>
            </div>
            <div className="skills__item skills-chart">
               <div className="skills-chart__item skills-chart--percent" style={{background: `${props.bg}`, width: `${props.percent}%`}}></div>

            </div>
        </div>  

    </div>
  )
}
