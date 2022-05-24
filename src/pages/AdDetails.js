import axios from "axios";
import { Button } from "bootstrap";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../context/auth.context";



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

  ad.map((ad)=> {
    return (
           <div key={ad._id}>
            <h2>{ad.title}</h2>
            {ad.location} | {ad.price} euros | {ad.level}
            <p>About your teacher: {ad.experience}</p><br></br>
            <p>{ad.description}</p>

          <Button>
            <a
              href="/ads"
              onClick={() => {
                deleteAd(ad._id);
              }}
            >
              Delete
            </a>
          </Button>
          <Button>
          <Link to={`/ads/${ad._id}/edit`}>Edit</Link>
          </Button>
           
            
           </div>
         )})
  }
       
    




export default AdDetails;
