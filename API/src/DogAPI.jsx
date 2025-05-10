import React, { useState } from 'react'
import './DogAPI.css';


function DogAPI() {

    const [dog, setDog] = useState("")

    const handlechange = (() => {
        fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        setDog(data.message)
    })
    .catch((err) => {
        console.log(err)
    })


    })


  return (
    <div>


     <div className="dog">
     <h1>

<img src={dog} alt="" width="500px" height="500px" />
</h1>
<button onClick={handlechange}>Clik Me</button>

      </div> 
    </div>
  )
}

export default DogAPI
