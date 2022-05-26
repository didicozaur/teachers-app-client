import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";


function AddAd(props) {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [experience, setExperience] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");

  const navigate = useNavigate()


  useEffect(() => {
    setSubject(props.subjects?.[0]?._id);
  }, [props.subjects]);

  

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedToken = localStorage.getItem("authToken");

    const requestBody = {
      title,
      subject,
      experience,
      description,
      location,
      price,
    };

    axios
      .post(`${process.env.REACT_APP_API_URL}/ads/add`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        setTitle("");
        setSubject("");
        setExperience("");
        setDescription("");
        setLocation("");
        setPrice("");
        props.updatePage();
        navigate("/ads");
      })
      .catch((err) => console.log("Error creating Ad in DB", err));
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8 mx-auto text-center"></div>
        <div className="AddAd">
          <h3>New Ad</h3>
          <hr />

          <form
            onSubmit={handleSubmit}
            className="p-4 border rounded-3 bg-light"
          >
            <label>Title</label>
            <input
              type="text"
              name="title"
              className="form-control mb-2"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <label>Subject</label>
            <select
              name="subject"
              className="form-control mb-2"
              onChange={(e) => setSubject(e.target.value)}
              required={true}
            >
              {props.subjects.map((element) => {
                return (
                  <option key={element._id} value={element.title}>
                    {element.title}
                  </option>
                );

                return <option value={element._id}>{element.title}</option>;
              })}
            </select>

            <label>Description</label>
            <input
              type="text"
              className="form-control mb-2"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <label>Experience</label>
            <input
              type="text"
              className="form-control mb-2"
              name="experience"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
            />

            <label>Location</label>
            <input
              type="text"
              className="form-control mb-2"
              name="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />

            <label>Price</label>
            <input
              type="Number"
              className="form-control mb-2"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />

            <button className="w-100 btn btn-lg btn-success mb-2" type="submit" >
              Submit
            </button>
          </form>
          <hr />
          <div className="d-flex justify-content-center">
            <p>
              Couldn't find the Subject you're looking for?{" "}
              <button className="btn btn-success"><a style={{ "color": "white"}} href="/subjects/add">Create a new one!</a></button>
            </p>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default AddAd;
