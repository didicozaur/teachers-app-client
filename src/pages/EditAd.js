import axios from "axios";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditAd(props) {
  const navigate = useNavigate();
  const { adId } = useParams();

  //getting ad info from specific ad id
  const adDetails = props.ads?.find((ad) => ad._id === adId);

  const [title, setTitle] = useState(adDetails?.title);
  const [subject, setSubject] = useState(adDetails?.subject);
  const [experience, setExperience] = useState(adDetails?.experience);
  const [description, setDescription] = useState(adDetails?.description);
  const [location, setLocation] = useState(adDetails?.location);
  const [price, setPrice] = useState(adDetails?.price);
  const [level, setLevel] = useState(adDetails?.levels);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newDetails = {
      title,
      subject,
      experience,
      description,
      location,
      price,
      level,
    };

    axios
      .put(`${process.env.REACT_APP_API_URL}/ads/${adId}/edit`, newDetails)
      .then((response) => {
        props.fetchAds();
        navigate("/ads");
      })
      .catch((err) => console.log("Error editing Ad in DB", err));
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8 mx-auto text-center"></div>
        <div className="EditAd">
          <h3>Update your ad</h3>
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
            >
              {props.subjects.map((element) => {
                return <option value={element.title}>{element.title}</option>;
              })}
            </select>

            <label>Difficulty</label>
            <select
              name="levels"
              className="form-control mb-2"
              onChange={(e) => setLevel(e.target.value)}
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intemediate</option>
              <option value="Advanced">Advanced</option>
            </select>

            <label>Description</label>
            <input
              type="text"
              name="description"
              className="form-control mb-2"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <label>Experience</label>
            <input
              type="text"
              name="experience"
              className="form-control mb-2"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
            />

            <label>Location</label>
            <input
              type="text"
              name="location"
              className="form-control mb-2"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />

            <label>Price</label>
            <input
              type="Number"
              name="price"
              className="form-control mb-2"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />

            <button className="w-100 btn btn-lg btn-success mb-2" type="submit">
              Submit
            </button>
          </form>
          <hr />
          <div className="d-flex justify-content-center">
           
            <p>
              Couldn't find the Subject you're looking for?{" "}
              <a href="/subjects/add">Create a new one!</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditAd;
