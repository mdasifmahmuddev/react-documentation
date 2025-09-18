import React from 'react'

export default function Rendering({name,isTrue}) {
//here i am trying to do it by if else but if else has problem ..  div want change like if click even number then 
//showind div a other div b . 
  if(!isTrue){
    return null ; 
  }

  return (
    
    
      <div> 
        <ul>
         <li className='text-red-400 text-4xl flex  justify-center '>1 <h1>{name}</h1></li>
      </ul>
      </div>
    
  )
}
