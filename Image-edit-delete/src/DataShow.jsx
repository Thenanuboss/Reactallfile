import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function DataShow() {
const location = useLocation()

const initialData = location.state || localStorage.getItem("data") || []
const [data, setData] = useState(initialData)


  return (
    <div>
      <h1>DataSHow Page</h1>
      <table border={2} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>Sr No</th>
            <th>Name</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map ((ele,index) => (
              <tr key={index}>  
                <td>{index+1}</td>
                <td>{ele.name}</td>
                <td>
                  <img src={ele.fileURL} width="50px"/>
                </td>
              <button>Edit</button>
              <button>Delete</button>
              </tr>
            ))
          }
        </tbody>
      </table>
      <Link to='/'>Form</Link>
    </div>
  )
}

export default DataShow
