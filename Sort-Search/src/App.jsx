import { useState } from "react";
import "./App.css";

function App() {
  const employees = [
    {
      name: "Hardik Makwana",
      age: 32,
      city: "Ahmedabad",
      salary: 30000,
      post: "Software Engineer"
    },
    {
      name: "Piyush",
      age: 25,
      city: "Amreli",
      salary: 25000,
      post: "Policemen"
    },
    {
      name: "Kalpesh Mak",
      age: 20,
      city: "Surat",
      salary: 20000,
      post: "sales executive"
    },
    {
      name: "Chirag parmar",
      age: 36,
      city: "Rajkot",
      salary: 32000,
      post: "Manager"
    },

    
    {
      name: "Sandeep Rajput",
      age: 35,
      city: "Baroda",
      salary: 80000,
      post: "Army Officer"
    },
    {
      name: "Shailesh Solanki",
      age: 24,
      city: "Nepal",
      salary: 35000,
      post: "Sr Manager"
    },
    {
      name: "Eve White",
      age: 29,
      city: "Seattle",
      salary: 63000,
      post: "Marketing Specialist"
    },
    {
      name: "Frank Clark",
      age: 32,
      city: "Austin",
      salary: 68000,
      post: "Product Owner"
    },
    {
      name: "Grace Lee",
      age: 27,
      city: "Miami",
      salary: 54000,
      post: "Web Developer"
    },
    {
      name: "Henry Walker",
      age: 45,
      city: "Dallas",
      salary: 75000,
      post: "Project Manager"
    }
  ];

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState({
    key: "name",
    direction: "asc"
  });

  const filteredData = employees.filter(
    (e) =>
      e.name.toLowerCase().includes(search.toLowerCase()) ||
      e.age.toString().includes(search.toLowerCase()) ||
      e.city.toLowerCase().includes(search.toLowerCase()) ||
      e.post.toLowerCase().includes(search.toLowerCase()) ||
      e.salary.toString().includes(search.toLowerCase())
  );

  const handleSort = (key) => {
    let direction = "asc";
    if (sort.key === key && sort.direction === "asc") {
      direction = "desc";
    }
    setSort({ key, direction });
  };

  const sortedData = filteredData.sort((a, b) => {
    if (a[sort.key] < b[sort.key]) {
      return sort.direction === "asc" ? 1 : -1;
    }

    if (a[sort.key] > b[sort.key]) {
      return sort.direction === "asc" ? -1 : 1;
    }

    return 0;
  });

  return (
    <>
      <input
        type="text"
        placeholder="Search By Name or Age or City or Post or Salary...."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <br />
      <br />
      <table border={3} cellPadding={10} cellSpacing={0} width="100%">
        <thead>
          <tr>
            <th>Sr No</th>
            <th>
              <button onClick={() => handleSort("name")}>Name</button>
            </th>
            <th>
              <button onClick={() => handleSort("age")}>Age</button>
            </th>
            <th>
              <button onClick={() => handleSort("city")}>City</button>
            </th>
            <th>
              <button onClick={() => handleSort("post")}>Post</button>
            </th>
            <th>
              <button onClick={() => handleSort("salary")}>Salary</button>
            </th>
          </tr>
        </thead>

        <tbody>
          {sortedData.map((ele, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{ele.name}</td>
              <td>{ele.age}</td>
              <td>{ele.city}</td>
              <td>{ele.post}</td>
              <td>{ele.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;