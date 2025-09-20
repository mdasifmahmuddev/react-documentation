import React from 'react'

export const Input = () => {
    
  const [name,setName] = useState('md asif mahmud ');



   function handleSubmit(e) {



        e.preventDefault();  
        //prevent data handle reload error its important .. 

    //   console.log(e.target);
       //its show dom element  of form .. 
     const form = e.target;
     const formData =  new FormData(form);
   //   console.log(formData); // its showind data as object .. not funciton 

    //so we need to read it ... 
    const formJson = Object.fromEntries(formData.entries());

    console.log(formJson);

   
 

   }



  return (
    <div>

    
    

 <>
      <h1> Todo App  </h1>
     {/* 
     Typically, you will place every <input> inside a <label> tag. This tells the browser that this label is associated with that input. When the user clicks the label, the browser will automatically focus the input. It’s also essential for accessibility: a screen reader will announce the label caption when the user focuses the associated input.
If you can’t nest <input> into a <label>, associate them by passing the same ID to <input id> and <label htmlFor>. To avoid conflicts between multiple instances of one component, generate such an ID with useId. */}
     
     <form method="post" onSubmit={handleSubmit} >
     
      <label>
        Enter your First name :
        <input
        value={name}  
        name='fNameInput'
        placeholder='Enter Your Name'
        onChange={e =>setName(e.target.value)} //onchange value read..






        >
        </input>

        <button type='submit'>this is button </button>
        
      </label>
      {
        <p>Your name is : {name} </p>
      }
       
       
</form>

      


    </>









    </div>
  )
}
