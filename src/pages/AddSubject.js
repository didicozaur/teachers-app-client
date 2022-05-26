import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function AddSubject(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedToken = localStorage.getItem("authToken");

    const requestBody = { title, description };
    axios
      .post(`${process.env.REACT_APP_API_URL}/subjects/add`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        // Reset the state
        setTitle("");
        setDescription("");
        navigate("/subjects");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8 mx-auto text-center"></div>

        <div className="AddSubject">
          <h3>Add Subject</h3>
          <hr />

          <form
            className="p-4 border rounded-3 bg-light"
            onSubmit={handleSubmit}
          >
            <label>Title:</label>
            <input
              type="text"
              name="title"
              className="form-control mb-2"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <label>Description:</label>
            <textarea
              type="text"
              name="description"
              className="form-control mb-2"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <button className="w-100 btn btn-lg btn-success mb-2" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddSubject;
