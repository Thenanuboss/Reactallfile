import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleForm = () => {
    e.preventDefault()
    console.log(name);    
    // e.target.reset()

    setName("")
  }

  return (
    <>
      <form onSubmit={handleForm}>
        <input type="text" placeholder="Enter Your Name" value={name} onChange={(e) =>setName(e.target.value)} />
        <br /><br />
        <input type="email" placeholder="Enter Your Name"value={email} onChange={(e) =>setName(e.target.value)} />
        <br /><br />
        <input type="password" placeholder="Enter Your Password" value={password} onChange={(e) =>setName(e.target.value)} />
        <br /><br />
        <button type="submit">Submit</button>
      </form>



    </>
  )
}

export default App
// useState je value aapso e chaneg nai thai