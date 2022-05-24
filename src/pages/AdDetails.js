import axios from "axios";
import { Button } from "bootstrap";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";



function AdDetails(props) {

  const {adId} = useParams();

  const [ad, setAd] = useState([]);
 
  const getAd = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/ads/${adId}`)
    .then(response => setAd(response.data))
    .catch(err => console.log("Error getting info from DB", err))
  }
   useEffect(() => {
    getAd();
  }, []);

  const deleteAd = (adId) => {
      axios.delete(`${process.env.REACT_APP_API_URL}/ads/${adId}`)
      .then(() => {
          props.updatePage()
      })
      .catch((err) => console.log("Error deleting ad", err))
  };

  const renderDetails = () => {
  return (
    <div>
    <h2>Ad Details</h2>
    {ad.map((elm) => {
    return (
      <div key={elm._id}>
        <h2>{elm.title}</h2>
        <p>{elm.location} | {elm.price} euros | {elm.level}</p>
        <p>About your teacher: {elm.experience}</p>
        <br></br>
        <p>{elm.description}</p>
        <Button>
          <a
            href="/ads"
            onClick={() => {
              deleteAd(elm._id);
            }}
          >
            Delete
          </a>
        </Button>
        <Button>
          <Link to={`/ads/${elm._id}/edit`}>Edit</Link>
        </Button>
      </div> 
      
    )
  })
  }</div>
  )}

  return renderDetails();

  }
       
    




export default AdDetails;
