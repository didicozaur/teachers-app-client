import React, { useState, useEffect } from "react";
import axios from "axios";

import AdCard from "../components/AdCard";

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
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {subject === ""
          ? ads.map((ad) => {
              return <AdCard ad={ad} />;
            })
          : ads
              .filter((ad) =>
                ad.title.toLowerCase().includes(subject.toLowerCase())
              )
              .map((ad) => {
                return <AdCard ad={ad} />;
              })}
      </div>
    </>
  );
}
