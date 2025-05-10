import axios from 'axios'
import React, { useEffect, useState } from 'react'

function FakeStoreAPI() {

const [input, setInput] = useState([])
    useEffect(() => {
        
    axios.get("https://fakestoreapi.com/products")
    .then((response) => {
        console.log(response)
        setInput(response.data)
    })
    .catch((err) => {
        console.log(err)
    })
    }, [])


  return (
    <div>
      <table border={2} cellPadding={10} cellSpacing={0}>
        <thead>
            <tr>
                <th>Sr No</th>
                <th>Title</th>
                <th>Price</th>
                <th>Description</th>
                <th>Category</th>
                <th>Image</th>
            </tr>
        </thead>
            <tbody>
                {
                    input.map((ele,index) => (
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{ele.title}</td>
                            <td>{ele.price}</td>
                            <td>{ele.description}</td>
                            <td>{ele.category}</td>
                            <td>
                                <img src={ele.image} alt="" width="50px" />
                            </td>

                        </tr>
                    ))
                }
            </tbody>
      </table>
    </div>
  )
}

export default FakeStoreAPI
