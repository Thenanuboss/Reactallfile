import React, { useEffect, useState } from 'react'

function JsonAPI() {

    const [input, setInput] = useState([])


    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/comments")
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            setInput(data)
        })
        .catch((err) => {
            console.log(err)
        })
    } , [])


  return (
    <div>
        
        <table border={2} cellPadding={10} cellSpacing={0}>
            <thead>
                <tr>
                    <th>Sr No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Body</th>
                </tr>
            </thead>
            <tbody>
                {
                    input.map((ele,index) => (
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{ele.name}</td>
                            <td>{ele.email}</td>
                            <td>{ele.body}</td>



                        </tr>
                    ))
                }
            </tbody>
        </table>



    </div>
  )
}

export default JsonAPI
