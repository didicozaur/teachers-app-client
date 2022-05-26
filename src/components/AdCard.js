import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

function AdCard({ ad }) {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <div className="col" key={ad._id}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{ad.title}</h5>
          <p className="card-text">Location: {ad.location}</p>
          <p className="card-text">Level: {ad.level}</p>
          {isLoggedIn && (
            <NavLink className="btn btn-success" to={`/ads/${ad._id}`}>
              More details
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdCard;
