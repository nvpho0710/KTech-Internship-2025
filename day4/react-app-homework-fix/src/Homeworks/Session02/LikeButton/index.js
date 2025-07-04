import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function LikeButton() {

    const [like, setLike] = React.useState(false);
    console.log(like);
  
    return (
    <div>
        
        {!like && (<FontAwesomeIcon icon="fa-regular fa-thumbs-up" onClick={() => {
            setLike(true);
          }} />)}
        {like && (<FontAwesomeIcon  icon="fa-solid fa-thumbs-up" onClick={() => {
            setLike(false);
        }}/>)}
        {like ? (' Thank you !') : (' Click like if this post is useful to you !')}
    </div>
  )
}

export default LikeButton