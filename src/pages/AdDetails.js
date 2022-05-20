import axios from "axios";
import { Button } from "bootstrap";
import React from "react";
import { NavLink, useParams } from "react-router-dom";


function AdDetails(props) {

  const adId = useParams();

  const deleteAd = (adId) => {
      const storedToken = localStorage.getItem("authToken");

      axios.delete(`${process.env.REACT_APP_API_URL}/ads/${adId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then(() => {
          props.updatePage()
      })
      .catch((err) => console.log("Error deleting ad", err))
  };

  const renderAds = () => {
    const result = props.ads.map((element) => {
      return (
        <div key={element._id} className="ad-box">
          <p>{element.title}</p>
          <p>{element.location}</p>
          <p>{element.level}</p> 
          <br></br>
          <p>{element.description}</p>
          <h2>About your teacher: {element.experience}</h2>
          <Button><a href="/ads" onClick={() => {deleteAd(element._id)}}>Delete</a></Button> |
          <NavLink to={`/ads/${element._id}/edit`}>Edit</NavLink> 
        </div>
      );
    });
    return result;
  };

  return (
    <div className="AdsList">
      <h1>List of Ads</h1>

      <section>{props.ads === null ? <p>loading...</p> : renderAds()}</section>
    </div>
  );
}

export default AdDetails;
