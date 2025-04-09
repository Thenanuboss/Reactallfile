
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './Form';
import DataShow from './DataShow';


function App() {
  return (
    <>
   <Routes>

    <Route path='/' element={<Form/>} />
    <Route path='/datashow' element={<DataShow/>} />

   </Routes>
    </>
  );
}

export default App;
