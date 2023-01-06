import React, { useEffect, useState } from 'react'

function Placar() {
    const [teste,setteste] = useState(0)
 useEffect(() =>{
    setteste(window.localStorage.getItem('placar'))
 },[teste])
  return (
    <div>
        <div>PLACAR:</div>
        {teste}
        {
            window.addEventListener('storage', () => {
                console.log("wtf");
                setteste(window.localStorage.getItem('placar'))
             
            })
        }
    </div>
  )
}

export default Placar