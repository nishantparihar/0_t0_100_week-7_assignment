import { useEffect, useState } from 'react'

import './BackgroundChanger.css'

export function BackgroundChanger(){

    const [color, setColor] = useState("white")

    useEffect(()=>{
      document.body.style.backgroundColor = color;
    }, [color]);
  
    return (
      <>
        <div id='main'>
            <div id='buttonPanel'>
              <button id='Red' onClick={()=> setColor("Red")}>Red</button>
              <button id='Yellow' onClick={()=> setColor("Yellow")}>Yellow</button>
              <button id='Black' onClick={()=> setColor("Black")}>Black</button>
              <button id='Purple' onClick={()=> setColor("Purple")}>Purple</button>
              <button id='Green' onClick={()=> setColor("Green")}>Green</button>
              <button id='Blue' onClick={()=> setColor("Blue")}>Blue</button>
              <button id='Default' onClick={()=> setColor("white")}>Default</button>
  
            </div>
        </div>
      </>
    )

}