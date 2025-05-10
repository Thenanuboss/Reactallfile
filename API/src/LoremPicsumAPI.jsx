import axios from 'axios';
import React, { useState } from 'react';

const LoremPicsumAPI = () => {

    const [data, setData] = useState([])

    const getData = async () => {
           const response =  await axios.get("https://picsum.photos/v2/list?page=2&limit=10")

           setData(response.data)
            console.log(data)
    }



  return (
    <div>
    <button onClick={getData}>Get Data</button>  
    
    </div>
  );
}

export default LoremPicsumAPI;
