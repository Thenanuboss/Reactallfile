import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import ClassCount from './ClassCount'

function App() {
  
  const [count, setCount] = useState(0);

const handleClick = () => {
    setCount(count+1);
}

  return (
    <>
    <h1>{count}</h1>
    {/* <button>Increment</button> */}
    <button onClick={() => setCount(count-1)}>Decrement</button>

    <button onClick={handleClick}>Count{count}</button>
      
      <hr />
      <hr />
      <ClassCount/>
    </>
  )
}

export default App
//state - variable

// useState hook

// hooks----use keyword lagelo hase ,, import karvo compulsory che 
// functional- stateless components
// class - stateful component
