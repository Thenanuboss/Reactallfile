import React from 'react'

function Officedata(props) {
    console.log(props)    
  return (
    <div>
      <table border={1} cellSpacing={5} width="75%">
        <thead>
            <tr>
                <th>Sr No</th>
                <th>Name</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Website</th>
                <th>Department</th>
                <th>workingHours</th>
            </tr>
        </thead>
        {props.OfficeData1.map((ele,index) =>(
            <tbody>
                <tr>
                    <td>{index+1}</td>
                    <td>{ele.name}</td>
                    <td>{ele.address}</td>
                    <td>{ele.phone}</td>
                    <td>{ele.email}</td>
                    <td>{ele.website}</td>
                    <td>{ele.department}</td>
                    <td>{ele.workingHours}</td>
                </tr>
            </tbody>
        ) )

        }
      </table>
    </div>
  )
}


export default Officedata

