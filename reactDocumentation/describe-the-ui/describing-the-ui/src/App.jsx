import './App.css'
import { About } from './components/About'
import Button from './components/Button'


function App() {

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
      
    </>
  )
}

export default App
