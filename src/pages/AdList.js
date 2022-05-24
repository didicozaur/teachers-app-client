import React from "react";
import { NavLink } from "react-router-dom";

function AdList(props) {

    const renderAds = () => {
    const result = props.ads.map((element) => {
      return (
        <div key={element._id} className="ad-box">
          <p>{element.title}</p>
          <p>{element.location}</p>
          <p>{element.level}</p>
          <NavLink to={`/ads/${element._id}`}>More details</NavLink> |
          
        </div>
      );
    });
    return result;
  };

  return (
    <div className="AdsList">
      <h1>List of Ads</h1>

      <section>
        {props.ads === null ? <p>loading...</p> : renderAds()}
      </section>
    </div>
    )
}

export default AdList