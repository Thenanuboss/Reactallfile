import React from "react";


function DataShow(props) {
  console.log(props)
  return (
  <>
<table border={1} cellSpacing={0} width="100%">
  <thead>
    <tr>
      <th>Sr No</th>
      <th>Department</th>
      <th>Age</th>
      <th>City</th>
      <th>Email ID</th>
    </tr>
  </thead>
  <tbody>
    {props.doctors1.map((ele,index) => (
      <tr>
        <td>{index+1}</td>
        <td>{ele.department}</td>
        <td>{ele.age}</td>
        <td>{ele.city}</td>
        <td>{ele.email}</td>
      </tr>
    ))}
    
  </tbody>
</table>

</>
  )
}

export default DataShow;
