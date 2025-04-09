import React from 'react'

function Datashow(props) {
    console.log(props)
  return (
    <div>

<table border={2} cellSpacing={0} width="85%">
    <thead>
        <tr>
            <th>Sr No</th>
            <th>Name</th>
            <th>Age</th>
            <th>Designation</th>
            <th>Department</th>
            <th>Email- ID</th>
            <th>Salary</th>1
        </tr>
    </thead>

    <tbody>
        {props.arrobj1.map((ele,index) =>(
            <tr>
                <td>{index+1}</td>
                <td>{ele.name}</td>
                <td>{ele.age}</td>
                <td>{ele.designation}</td>
                <td>{ele.department}</td>
                <td>{ele.email}</td>
                <td>{ele.salary}</td>
            </tr>
        ))}
    </tbody>
</table>
    </div>
  )
}

export default Datashow;
