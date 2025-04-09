import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Form() {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [file, setFile] = useState(null)
    const [arr, setArr] = useState(()=>{
        const storedData = localStorage.getItem("data")
        return storedData ? JSON.parse(storedData) : []
    })


    const handlesubmitform = (e) => {
        e.preventDefault()
        
        if (name && file) {
            const fileURL = URL.createObjectURL(file)
            const updatedData = [...arr, {name, fileURL}]
            setArr(updatedData)
            navigate("/datashow" , {state:updatedData})
            
        setName("")
        setFile(null)
        }

    }

    const handlefilechange = (e) => {
        const selectedFile = e.target.files[0]
        if(selectedFile) {
            setFile(selectedFile)
        }

    }

useEffect(() => {
    localStorage.setItem("data", JSON.stringify(arr))
}, [arr])
  return (
    <div>
      <form onSubmit={handlesubmitform}>

    <input type="text" placeholder='Enter Name' value={name}
    onChange={(e) => setName(e.target.value)} />
    <br /><br />
    <input type="file" onChange={handlefilechange}/>
    <br /><br />
    <button type='submit'>Submit</button>

      </form>
    </div>
  )
}

export default Form
