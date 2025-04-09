import React from 'react'
import { useState } from 'react'

function App() {

  const [count, setCount] = useState(0);

  const handlesubmit = () => {
    setCount(count+1)
  }

const handledecrement =() => {
  setCount(count-1)
}


  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handlesubmit}>Increment</button>
      <button onClick={handledecrement}>Decrement</button>
    </div>
  )
}

export default App
