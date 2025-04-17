import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Datashow() {
  const location = useLocation();
  const navigate = useNavigate();

  const initialData =
    location.state || JSON.parse(localStorage.getItem("DATA")) || [];
  const [data, setData] = useState(initialData);

  const [editIndex, setEditIndex] = useState(null);
  const [editName, setEditName] = useState("");
  const [editFile, setEditFile] = useState(null);

  const handleDelete = (index) => {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
    navigate("/datashow", { state: updatedData });
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditName(data[index].name);
  };

  const handleEditFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    if (selectedFiles.length > 0) {
      setEditFile(selectedFiles);
    }
  };

  const handleEditFormSubmit = (e) => {
    e.preventDefault();

    const fileURLs = editFile.map((file) => URL.createObjectURL(file));

    // const updatedData = [...data];
    // updatedData[editFile] = { name: editName, fileURLs: fileURLs };

    const updatedData = data.map((ele, i) =>
      i === editIndex ? { name: editName, fileURLs: fileURLs } : ele
    );
    setData(updatedData);
    localStorage.setItem("DATA", JSON.stringify(updatedData));
    navigate("/datashow", { state: updatedData });
    setEditName("");
    setEditFile(null);
    setEditIndex(null);
  };

  useEffect(() => {
    localStorage.setItem("DATA", JSON.stringify(data));
  }, [data]);

  return (
    <div>
      {data.length > 0 ? (
        <>
          <table border={3} cellPadding={10} cellSpacing={0}>
            <thead>
              <tr>
                <th>Sr No</th>
                <th>Name</th>
                <th>Images</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((ele, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{ele.name}</td>
                  <td>
                    {ele.fileURLs.map((file, index) => (
                      <img src={file} alt="" key={index} width="50%" />
                    ))}
                  </td>
                  <td>
                    <button onClick={() => handleEdit(index)}>Edit</button>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        "No Data"
      )}

      <br />
      <br />

      {editIndex !== null ? (
        <>
          <form onSubmit={handleEditFormSubmit}>
            <input
              type="text"
              placeholder="Enter Name"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
            />
            <br />
            <br />
            <input type="file" multiple onChange={handleEditFileChange} />
            <br />
            <br />
            <button type="submit">Update</button>
          </form>
        </>
      ) : (
        ""
      )}

      <h2>
        <Link to="/">Form</Link>
      </h2>
    </div>
  );
}