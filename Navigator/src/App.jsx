<<<<<<< HEAD

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Form from './Form'
import Datashow from './Datashow'

function App() {


  return (
    <>
    <Routes>

      <Route path='/' element={<Form/>} />
      <Route path='/datashow' element={<Datashow/>} />

    </Routes>


    </>
  )
}

export default App
=======
import { useState } from "react";

export default function EventHandlerExample() {
  const [text, setText] = useState("Hello, click the button!");

  const handleClick = () => {
    setText("Button Clicked!");
  };

  return (
    <div>
      <h1>{text}</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}
>>>>>>> 6c5035926886805b4e6ac1793b0528187f7c15d9
