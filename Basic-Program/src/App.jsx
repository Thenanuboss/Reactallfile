import React from 'react'
import DataShow from './components/DataShow'

function App() {

  let doctors = [
    {
      name: "Dr. Asha Mehta",
      department: "Cardiology",
      age: 45,
      city: "Ahmedabad",
      email: "asha.mehta@citycarehospital.com"
    },
    {
      name: "Dr. Raj Patel",
      department: "Orthopedics",
      age: 38,
      city: "Ahmedabad",
      email: "raj.patel@citycarehospital.com"
    },
    {
      name: "Dr. Nidhi Shah",
      department: "Pediatrics",
      age: 34,
      city: "Ahmedabad",
      email: "nidhi.shah@citycarehospital.com"
    }
  ]


  return (
    <div>
  <DataShow doctors1 ={doctors} />      
    </div>
  )
}

export default App
