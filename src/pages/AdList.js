import React from "react";
import { Link } from "react-router-dom";

function AdList(props) {

  const renderAds = () => {
   return (
     <div>
       {props.ads.map((ad) => {
         return (
           <div key={ad._id}>
            <h2>{ad.title}</h2>
            {ad.location} | {ad.price} euros | {ad.level}
             <Link to={`/ads/${ad._id}`}>
               <h5>More Details</h5>
             </Link>
           </div>
         );
       })}
     </div>
   );
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
