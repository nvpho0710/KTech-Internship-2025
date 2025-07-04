import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../Components/SocialBlock.css';

function SocialItems(props){
    return (
        <div className="socialCard" style={{backgroundColor: `${props.color}`}}>
            <div className="socialCard__item">
                <div className="socialCard__icon">
                    <FontAwesomeIcon icon={props.iconName} size="3x" />
                </div>
                <div className="socialCard__info">
                    <div className="socialCard__name">{props.text}</div>
                    <div className="socialCard__count">{props.total} {props.unit}</div>
                </div>

            </div>
        </div>

    )
}

export default function SocialBlock(props) {
    return (
      <div className='socialCard--wraper'>
           <SocialItems iconName="fa-brands fa-facebook" text="Facebook" unit="Likes" color="#619CEC" total={500000} />
          <SocialItems iconName="fa-brands fa-twitter" text="Tiwtter" unit="Tweets" color="#31C8DD" total={40000} />
          <SocialItems iconName="fa-brands fa-google" text="Google +" unit="Plus " color="#F78153" total={460000} />
          <SocialItems iconName="fa-brands fa-pinterest" text="Pintrest" unit="Pins" color="#F75354" total={34000} />
      </div>
    )
}
