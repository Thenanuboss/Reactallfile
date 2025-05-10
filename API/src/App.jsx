import React from "react";
import FakeStoreAPI from "./FakeStoreAPI";
import JsonAPI from "./JsonAPI";
import DogAPI from "./DogAPI";
import LoremPicsumAPI from "./LoremPicsumAPI";

function App() {
  return (
    <div>
      <FakeStoreAPI />
      <JsonAPI />
      <DogAPI />
      <LoremPicsumAPI />
    </div>
  );
}

export default App;
