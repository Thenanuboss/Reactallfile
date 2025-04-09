import React, { useEffect, useState } from 'react'

export default function User_Form() {

    //object state

    const [inputValue, setinputValue] = useState({
        name:"",
        email:"",
        password:""
    })

    // array state
    const [arr,setArr] = useState(() =>{
        let storedData = localStorage.getItem("User_Data");
        return storedData ? JSON.parse(storedData) : []; 

    });




    // localstorage
    useEffect(() => {
        localStorage.setItem("User_Data", JSON.stringify(arr));
    }, [arr]);










    const handleSubmitForm = (e) => {
        e.preventDefault()
        console.log(inputValue)
        setArr([...arr, inputValue]); 
        setinputValue({ name: "", email: "", password: "" });

    }

  return (
    <div>
    <form onSubmit={handleSubmitForm} >
        
    <input type="text" placeholder='Enter Your Name' value={inputValue.name} onChange={(e) => setinputValue({...inputValue, name:e.target.value})} />
    <br /><br />
    <input type="email" placeholder='Enter Your Email' value={inputValue.email} onChange={(e) => setinputValue({...inputValue, email:e.target.value})} />
    <br /><br />
    <input type="password" placeholder='Enter Your Password'value={inputValue.password} onChange={(e) => setinputValue({...inputValue,password:e.target.value})}  />
    <br /><br />
    <button type='submit'>Submit</button>

        </form>  
    </div>
  )
}
