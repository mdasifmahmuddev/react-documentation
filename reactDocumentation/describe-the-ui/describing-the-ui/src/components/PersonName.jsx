import React from 'react'
import  './PersonName.css'
 

export const PersonName = (props) => {
 
  const name =props.name ; 
  const occupation= props.occupation; 
  const PersonImage=props.PersonImage;
  return (
    <div className='p-4'>
       <img className='imageClass' src= {PersonImage} alt="this is person image" />
       {/* take data from about jsx where i call this component  */}
         <h1>Person Name : {name} <br></br> {occupation} </h1> 

         <h1>District : {props.district}</h1>
         
    </div>
  )
}
