import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../context/auth.context";


function AdDetails(props) {

  const navigate = useNavigate();

  const { adId } = useParams();
  // const { userId } = useParams();

  const [ad, setAd] = useState(null);
  // const [user, setUser] = useState(null);

  const { user } = useContext(AuthContext)

  useEffect(() => {
    getAd();
    // getUser();
  });

  const storedToken = localStorage.getItem("authToken");

  const getAd = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/ads/${adId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        setAd(response.data);
      })
      .catch((err) => console.log("Error getting info from DB", err));
  };

  // const getUser = () => {
  //   axios
  //     .get(`${process.env.REACT_APP_API_URL}/users/${userId}`, {
  //       headers: { Authorization: `Bearer ${storedToken}` },
  //     })
  //     .then((response) => {
  //       setUser(response.data);
  //     })
  //     .catch((err) => console.log("Error getting info from DB", err));
  // };

  const deleteAd = (adId) => {
      axios.delete(`${process.env.REACT_APP_API_URL}/ads/${adId}`, {
        headers: { Authorization: `Bearer ${storedToken}` }})
      .then((response) => {
          props.updatePage();
          navigate("/ads");
          
      })
      .then(() => {
        props.updatePage();
        navigate("/ads");
      })
      .catch((err) => console.log("Error deleting ad", err));
  };

  const renderDetails = () => {
    return (
      <div style={{ margin: 20 }}>
        <div className="row" key={ad._id}>
          <dt className="col-sm-3">Title</dt>
          <dd className="col-sm-9">{ad.title}</dd>

          <dt className="col-sm-3">Details</dt>
          <dd className="col-sm-9">
            {ad.location} | {ad.price} euros{" "}
          </dd>

          <hr />

          <dt className="col-sm-3">Description</dt>
          <dd className="col-sm-9">{ad.description}</dd>

          <dt className="col-sm-3">About your teacher</dt>
          <dd className="col-sm-9">{ad.experience}</dd>

          <hr />

          <div className="d-flex justify-content-center">
            <Link
              className="btn btn-success"
              style={{ margin: "10px" }}
              to={`/profile`}
            >
              Contact your teacher
            </Link>

            { user?._id===ad.user && (
              <>

            <Link className="btn btn-outline-success" style={{ margin: "10px" }} to={`/ads/${ad._id}/edit`}>
              Edit
            </Link>

            <button
              style={{ margin: "10px" }}
              className="btn btn-outline-danger"
              onClick={() => {
                deleteAd(ad._id);
              }}>
              {" "}
              Delete
            </button>

            </>
            )}
          </div>
        </div>
      </div>
    );
    }
  
  
  return(
    <>
      <h2 className="d-flex justify-content-center">Ad Details</h2>
      <hr />
      {ad ? renderDetails() : <p>ad loading</p>}
    </>
  );
}


export default AdDetails
