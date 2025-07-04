import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function RatingStar() {
    const [stars, setStars] = React.useState(0);
    const [msg, setMsg] = React.useState('');
    
    //let TotalStar = [1, 2, 3, 4, 5];
    let TotalStar_arr = [
        {id:1, msg: 'Realy Bad'},
        {id:2, msg: 'Bad'},
        {id:3, msg: 'Normal'},
        {id:4, msg: 'Amazing'},
        {id:5, msg: 'Excellently!'}
    ];

  return (
    <div>
        {TotalStar_arr.map((item,index) => {
            if (index <= stars) {
            return (
                <FontAwesomeIcon
                    key={item.id.toString()} 
                    icon="fa-solid fa-star" 
                    style={{ color: '#f60', cursor: 'pointer' }}
                    onClick={() => {
                        setStars(index);
                        setMsg(item.msg);
                }}
                />
            );
            }
            return (
            <FontAwesomeIcon
                key={item.id.toString()} 
                icon="fa-regular fa-star"
                style={{ color: '#f60', cursor: 'pointer' }}
                onClick={() => {
                    setStars(index);
                    setMsg(item.msg);
                }}
            />
            );
      })}
        <span style={{'display':'inline-block', 'marginLeft': '10px'}}>{msg}</span>
    </div>
  )
}

export default RatingStar