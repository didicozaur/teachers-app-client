import axios from "axios";
import { useState } from "react";
import SubjectsPage from "./SubjectsPage";

function AddAd(props){
    const [title, setTitle] = useState("");
    const [subject, setSubject] = useState("");
    const [experience, setExperience] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [price, setPrice] = useState("");
    const [user, setUser] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const requestBody = {title, user, subject, experience, description, location, price};

        axios.post(`${process.env.REACT_APP_API_URL}/ads/add`, requestBody)
        .then((response) => {
            setTitle("");
            setSubject("");
            setExperience("");
            setDescription("");
            setLocation("");
            setPrice("");
            setUser("");
            props.fetchAds()
        })
        .catch(err => console.log("Error creating Ad in DB", err))
    }

    return (
      <div className="AddAd">
        <h3>New Ad</h3>

        <form onSubmit={handleSumbit}>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label>Subject</label>
          <select name="dropdown">
            {props.subjects.map((element) => {
              return <option value={element.title}>{element.title}</option>;
            })}
          </select>

          <label>Description</label>
          <input
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <label>Experience</label>
          <input
            type="text"
            name="experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />

          <label>Location</label>
          <input
            type="text"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />

          <label>Price</label>
          <input
            type="text"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </form>
      </div>
    );
}

export default AddAd