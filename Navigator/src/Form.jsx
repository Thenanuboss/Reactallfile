import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const [name, setName] = useState("");
  const [file, setFile] = useState(null);
  const [arr, setArr] = useState(() => {
    const storedData = localStorage.getItem("DATA");
    return storedData ? JSON.parse(storedData) : [];
  });

  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    if (selectedFiles.length > 0) {
      setFile(selectedFiles);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const fileURLs = file.map((file) => URL.createObjectURL(file));

    const updatedData = [...arr, { name, fileURLs }];
    setArr(updatedData);
    navigate("/datashow", { state: updatedData });

    setName("");
    setFile(null);
  };

  useEffect(() => {
    localStorage.setItem("DATA", JSON.stringify(arr));
  }, [arr]);

  return (
    <div>
      <h2>Form</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <input type="file" multiple onChange={handleFileChange} />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}