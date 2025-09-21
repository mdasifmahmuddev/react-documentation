import React, { useState } from 'react'
 
export const Todolist = () => {


 const [task,setTask] = useState(['take showwer','take nap']);
 const [newTask,setNewTask] =useState("");


  function handleInputChange(event){
     setNewTask(event.target.value);

      


  }

  //important .. 
  function addTask(){ 

   if(newTask.trim()!== ""){
     setTask (t => [...t,newTask]);
    setNewTask("");
   }

     

  }

  function deleteButton(index){ 

    const updateTask =task.filter((_,i) =>
      i !== index
  );
  setTask(updateTask);



  }





  return (
    <div>

        <h1>My Todo List</h1>
         
         <input type="text"
         placeholder='Enter A Task'
        value={newTask}
        onChange={handleInputChange}
         
         
         />
         <button
          className='add-button'
          onClick={addTask}
          
          
          >
          Add
         </button>


         <ol>
          {task.map ((task ,index)  => (
            <li key={index}>
             <span>{task}</span>
              <button
              className='delete-button'
              onClick={ () => deleteButton(index) }

              
              >Delete</button>



            </li>

                   
          )
        
        )}


         </ol>






    </div>
  )
}
