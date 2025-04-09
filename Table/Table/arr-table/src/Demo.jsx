import React, { useEffect, useState } from "react";
import Demo from "./Demo";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);

  // componentDidUpdate
  useEffect(() => {
    console.log("Component Did Mount Calling...");
  }, []);

  // componentDidUpdate
  useEffect(() => {
    console.log("Component Did Update Calling...");
  }, [count]);

  return (
    <div>
      <h1>App Component</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Inc</button>
      <button onClick={() => setCount(count - 1)}>Dec</button>
      <hr />
      <hr />
      <hr />
      {show ? "Component Removed" : <Demo />}
      <button onClick={() => setShow(!false)}>Remove Component</button>
    </div>
  );
}