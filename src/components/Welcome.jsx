import React from 'react'
import rpf from "../logo/rpf.png"

export const Welcome = () => {
  return (
    <>
   <div className='welcome'> 
        <div className='img'>
        <img src={rpf}/>
        </div>
        <div className='wel'>
            Welcome To Railway Protection Force
        </div>
    </div> 
    </>
    
  )
}
