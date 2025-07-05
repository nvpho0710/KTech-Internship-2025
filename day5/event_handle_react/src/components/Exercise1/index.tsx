import { useState } from 'react'

export default function ButtonClickCounter() {
    const [count, setCount] = useState(0);
    
    const handleClick = () =>{
        setCount(count + 1);
    }
    
  return (
    // <div>
    //     <button onClick={() =>{
    //         setCount(count + 1);
    //     }}>Click me</button>
    //     <p>bạn đã nhấn {count} lần</p>
    // </div>

    <div>
        <button onClick={handleClick}> Click me</button>
        <p>bạn đã click {count}</p>
    </div>

  )
}