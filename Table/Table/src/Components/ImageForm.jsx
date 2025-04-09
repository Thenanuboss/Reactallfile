import React from 'react';
import { useState } from 'react';
import "./ImageForm.css"
import { useEffect } from 'react';

const ImageForm = () => {
  const [input,setInput] = useState({
    name:"",
    email:"",
    password:""
  })

  const [arr,setArr] = useState([])

  const handleSubmitform = (e) => {
    e.preventDefault()
    console.log(input)
    setArr ([...arr,input])
    
  }

  useEffect(() =>{
    localStorage.setItem("data",JSON.stringify(arr))
  },[arr])

  return (
    <div>
      
      <form onSubmit={handleSubmitform}>
        <input type="text" placeholder='Enter Name' value={input.name} 
        onChange={(e) => setInput({...input, name:e.target.value})} />
        <br /><br />
        <input type="email" placeholder='Enter Email'  value={input.email}
        onChange={(e) => setInput({...input,email:e.target.value})}/>
        <br /><br />
        <input type="password" placeholder='Enter Password' value={input.password}
        onChange={(e) => setInput({...input,password:e.target.value})}/>
        <br /><br />
        <button type='submit'>Submit</button>
      </form>
      <hr /><hr />
      <table border={2}>
        <thead>
          <tr>
            <th>Sr No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
      </table>
    </div>
  );
}

export default ImageForm;

