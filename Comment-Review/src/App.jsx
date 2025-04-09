import { useState, useEffect } from "react";

function App() {
  
  const [comments, setComments] = useState(
    JSON.parse(localStorage.getItem("comments")) || []
  );
  const [input, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

 
  const formSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setComments([...comments, input]); 
      setInput(""); 
    }
  };

  return (
    <div>
      <form onSubmit={formSubmit}>
        <input
          type="text"
          placeholder="Write a Comment"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      <hr />

      <h3>Comments:</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
