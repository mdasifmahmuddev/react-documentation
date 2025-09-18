import React from 'react'
import myImage from '../assets/image.jpg'

import './About.css'
import { PersonName } from './PersonName'


export const About = () => {
  return (
    <div className='flex gap-2'>

       {/* i set name data here : and read from personname component that the magic of :PROPS */}
       <PersonName  
       name ="asif ali jardari " 
       occupation="priminister" 
       PersonImage= "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Sachin_Dev_Burman.jpg/800px-Sachin_Dev_Burman.jpg"
       district="Dhaka"
       /> 

         <PersonName  
       name ="s d braman" 
       occupation="priminister" 
       PersonImage= "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Sachin_Dev_Burman.jpg/800px-Sachin_Dev_Burman.jpg"
       district="cumilla"
       /> 
       
    
    </div>
 


  )
}
