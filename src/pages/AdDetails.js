import { getSuggestedQuery } from "@testing-library/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";



function AdDetails(props) {

  const {adId} = useParams();
  const { userId } = useParams();

  const [ad, setAd] = useState(null);
  const [user, setUser] = useState(null);

    useEffect(() => {
      getAd();
      getUser();
    }, []);


  const getAd = () => {
    console.log(`${process.env.REACT_APP_API_URL}/ads/${adId}`)
    axios.get(`${process.env.REACT_APP_API_URL}/ads/${adId}`)
    .then(response => {
      setAd(response.data)
    })
    .catch(err => console.log("Error getting info from DB", err))
  }

  const getUser = () => {
    console.log(`${process.env.REACT_APP_API_URL}/users/${userId}`);
    axios
      .get(`${process.env.REACT_APP_API_URL}/users/${userId}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((err) => console.log("Error getting info from DB", err));
  };


  const deleteAd = (adId) => {
      axios.delete(`${process.env.REACT_APP_API_URL}/ads/${adId}`)
      .then(() => {
          props.updatePage()
      })
      .catch((err) => console.log("Error deleting ad", err))
  };

  const renderDetails = () => {
  return (
    <div style={{ margin: 20 }}>
      <div className="row" key={ad._id}>
        <dt className="col-sm-3">Title</dt>
        <dd className="col-sm-9">{ad.title}</dd>

        <dt className="col-sm-3">Details</dt>
        <dd className="col-sm-9">
          {ad.location} | {ad.price} | {ad.levels}{" "}
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
            to={`/users/${userId}`}
          >
            Contact your teacher
          </Link>

          <Link
            className="btn btn-outline-success"
            style={{ margin: "10px" }}
            to={`/ads/${ad._id}/edit`}
          >
            Edit
          </Link>

          <button
            style={{ margin: "10px" }}
            className="btn btn-outline-danger"
            onClick={() => {
              deleteAd(ad._id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
  }

  return (
    <>
      <h2 className="d-flex justify-content-center">Ad Details</h2>
      <hr />
      {ad ? renderDetails() : <p>ad loading</p> }
    </>
  );

  }
       
    




export default AdDetails;
