import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";



function AdDetails(props) {

  const {adId} = useParams();

  const [ad, setAd] = useState(null);

    useEffect(() => {
      getAd();
    }, []);


  const getAd = () => {
    console.log('inside get ad')
    console.log(`${process.env.REACT_APP_API_URL}/ads/${adId}`)
    axios.get(`${process.env.REACT_APP_API_URL}/ads/${adId}`)
    .then(response => {
      console.log(response.data)
      setAd(response.data)
    })
    .catch(err => console.log("Error getting info from DB", err))
  }


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
      <div key={ad._id}>
        <h2>{ad.title}</h2>
        <p>
          {ad.location} | {ad.price} euros | {ad.levels}
        </p>
        <p>About your teacher: {ad.experience}</p>
        <p>{ad.description}</p>

        <button
          onClick={() => {
            deleteAd(ad._id);
          }}
        >Delete
        </button>
        <Link to={`/ads/${ad._id}/edit`}>Edit</Link>
       
      </div> 
  </div>)
  }

  return (
    <>
      <h2>Ad Details</h2>
      {ad ? renderDetails() : <p>ad loading</p> }
    </>
  );

  }
       
    




export default AdDetails;
