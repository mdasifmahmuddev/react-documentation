import React from 'react'
import  './PersonName.css'
import PersonImage from '../assets/image.jpg'

export const PersonName = () => {
  return (
    <div>
       <img className='imageClass' src= {PersonImage} alt="this is person image" />
       
         <h1>Mr Abdul <br></br> Pilot </h1>
         
    </div>
  )
}
