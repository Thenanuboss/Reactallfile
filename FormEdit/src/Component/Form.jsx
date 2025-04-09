import React, { useEffect, useState } from 'react'

function Form() {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [arr,setArr] = useState(() => {
        const storedData = localStorage.getItem("data");
        return storedData ? JSON.parse(storedData) : []
    })

    const submitForm = (e) => {
        e.preventDefault()
        console.log(name,email,password)

        setArr ([...arr, {name,email,password}])

        setName("")
        setEmail("")
        setPassword("")
    }

    useEffect(() => {
        localStorage.setItem("data", JSON.stringify(arr))
    }, [arr])

  return (
    <div>
      <form onSubmit={submitForm} >
        <input type="text" placeholder='Enter Name' value={name}
        onChange={(e) =>setName(e.target.value)}/>
        <br /><br />
        <input type="email" placeholder='Enter Email' value={email}
        onChange={(e) => setEmail(e.target.value)} />
        <br /><br />
        <input type="password" placeholder='Enter Passowrd' value={password}
        onChange={(e) =>setPassword(e.target.value)} />
        <br /><br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Form
