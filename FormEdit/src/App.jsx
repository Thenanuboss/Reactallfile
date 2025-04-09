
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Form from './Component/Form'
import DataShow from './Component/DataShow'

function App() {

  return (
    <>
    <Routes>
      
      <Route path='/' element={<Form/>} />
      <Route path='/DataShow' element={<DataShow/>} />

      </Routes>
    </>
  )
}

export default App
