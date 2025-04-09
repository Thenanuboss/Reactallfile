import React from "react";
import "./App.css";
import { useState, useEffect } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  const [arr, setArr] = useState(() => {
    let storedData = localStorage.getItem("Data");
    return storedData ? JSON.parse(storedData) : [];
  });

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log({ name, pass });

    setArr([...arr, { name, pass }]);

    setName("");
    setPass("");
  };

  // useEffect(() => {
  //   localStorage.setItem("Data", JSON.stringify(arr));
  // }, [arr]);

  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      <br />
      <br />
      <table border={2} cellSpacing={0}>
        <thead>
          <tr>
            <th>Sr No</th>
            <th>Name</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {arr.map((ele, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{ele.name}</td>
              <td>{ele.pass}</td>
              <td>
                <button>Edit</button> <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}