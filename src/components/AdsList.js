import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

export default function AdsList() {
  const [ads, setAds] = useState([]);
  const [subject, setSubject] = useState("");

  const filterAds = (e) => {
    setSubject(e.target.value);
  };

  const fetchAds = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/ads`)
      .then((response) => {
        setAds(response.data);
      })
      .catch((err) => console.log("Error getting ads from DB", err));
  };

  useEffect(() => {
    fetchAds();
  }, []);

  return (
    <>
      <div className="row g-4 mb-4">
        <div className="col">
          <input
            className="form-control"
            type="search"
            placeholder="Search for something new to learn"
            value={subject}
            onClick={(e) => {
              filterAds(e);
            }}
            onChange={(e) => filterAds(e)}
          />
        </div>
      </div>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {subject === ""
          ? ads.map((ad) => {
              return (
                <div className="col" key={ad._id}>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{ad.title}</h5>
                      <p className="card-text">Location: {ad.location}</p>
                      <p className="card-text">Level: {ad.level}</p>
                      <NavLink
                        className="btn btn-success"
                        to={`/ads/${ad._id}`}
                      >
                        More details
                      </NavLink>
                    </div>
                  </div>
                </div>
              );
            })
          : ads
              .filter((ad) =>
                ad.title.toLowerCase().includes(subject.toLowerCase())
              )
              .map((ad) => {
                return (
                  <div className="col" key={ad._id}>
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">{ad.title}</h5>
                        <p className="card-text">{ad.location}</p>
                        <p className="card-text">{ad.level}</p>
                        <NavLink
                          className="btn btn-success"
                          to={`/ads/${ad._id}`}
                        >
                          More details
                        </NavLink>
                      </div>
                    </div>
                  </div>
                );
              })}
      </div>
    </>
  );
}
