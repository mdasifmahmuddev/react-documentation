import { useEffect ,useState } from 'react';
import './App.css'
import { About } from './components/About'
import Button from './components/Button'
import Rendering from './components/Rendering';
 

function App() {

  const [fname,lname] =useState('asif','mahmud');
  
  //problem : only one name can not excute .. 
  const [count,setCount] =useState(0);
//problem ... 


  useEffect(()=>{
 localStorage.setItem("count",count);
 console.log("count update: ",count);
  },[count]);

  


  const   date = new Date();
  //function for date  : 
  function formatDate(date) {
  return new Intl.DateTimeFormat(
    'en-US',
    { weekday: 'long' }
  ).format(date);
}


 
  const Legends ="KingBodonti" ;  //Using curly braces : its look code clean

  return (
    <>
  
    <div> 
      <h1 className='text-3xl text-red-500'>The Legend Of {Legends} <br></br> Date is: {formatDate(date)}</h1>
        {/* <Button/> */}
        <About/>
    </div>

    {/* redering  */}
   <div>
    
    <ul>

      
  <Rendering  
    name ="kamal"
    isTrue={true}
    />
    
    <Rendering  
    name ="kamal"
    />
    
    



    </ul>
 

   </div>

   {/* usestate and useffect  */}

   <div>
    <h1>full name is : </h1>
    <h1>md. {fname} {lname}</h1>

    <button onClick={()=>{ 
      setCount (count +1 );
      
      }}> 
      click here 
    </button>
    <h1>{count}</h1>  //problem : if relode then count is fix 


   </div>



   
      
    </>
  )
}

export default App ; 
