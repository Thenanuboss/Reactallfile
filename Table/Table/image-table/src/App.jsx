import React, { useEffect, useState } from 'react'
import "./App.css"

export default function App() {
  const [arr,setArr] = useState([])
    // const storedData = localStorage.getItem("data")
    // return storedData ? JSON.parse(storedData) : []

  console.log(arr)

const [input,setInput] = useState({
  name:"",
  email:"",
  password:""
})

const handlesubmitform =(e) =>{
  e.preventDefault()
  console.log(input)
  setArr(...arr,input)
}

// useEffect(()=>{
//   localStorage.setItem("data",JSON.stringify(arr))
// },[arr])




  return (
    <div>
      <form onSubmit={handlesubmitform}>
      <input type="text" placeholder='Enter Name' value={input.name}
      onChange={(e) => setInput({...input,name:e.target.value})} />
      <br /><br />
      <input type="email" placeholder='Enter Email' value={input.email}
      onChange={(e) => setInput({...input,email:e.target.value})} />
      <br /><br />
      <input type="password" placeholder='Enter Password' value={input.password}
      onChange={(e)=> setInput({...input,password:e.target.value})} />
      <br /><br />
      <button type='submit'>Submit</button>
      </form>

      <hr /><hr />
      <table>
        <thead>
          <tr>
            <th>Sr No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>

{arr.map((ele,index) => {
  
  return(
    <>
      <tr key={index}>
        <td>{index+1}</td>
        <td>{ele.name}</td>
        <td>{ele.email}</td>
        <td>{ele.password}</td>
      </tr>
    </>
  )


})}
          
                  </tbody>
      </table>
    </div>
  )
}
