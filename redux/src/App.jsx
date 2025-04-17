import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Decrement, Increment } from './action'

function App() {

  const count = useSelector((state)=> state)

  const dispatch = useDispatch()


  return (
    <div>

      <h1>Count : {count}</h1>
      <button onClick={() => dispatch(Increment())}>Increment</button>
      <button onClick={() => dispatch(Decrement())}>Decrement</button>
    </div>
  )
}

export default App
