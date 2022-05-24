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
    <div>
      <input
        type="search"
        placeholder="Search your Subject"
        value={subject}
        onClick={(e) => {
          filterAds(e);
        }}
        onChange={(e) => filterAds(e)}
      />
      {subject === ""
        ? ads.map((ad) => {
            return (
              <div key={ad._id}>
                <p>{ad.title}</p>
                <p>{ad.location}</p>
                <p>{ad.level}</p>
                <NavLink to={`/ads/${ad._id}`}>More details</NavLink> |
              </div>
            );
          })
        : ads
            .filter((ad) =>
              ad.title.toLowerCase().includes(subject.toLowerCase())
            )
            .map((ad) => {
              return (
                <div key={ad._id}>
                  <p>{ad.title}</p>
                  <p>{ad.location}</p>
                  <p>{ad.level}</p>
                  <NavLink to={`/ads/${ad._id}`}>More details</NavLink> |
                </div>
              );
            })}
    </div>
  );
}
