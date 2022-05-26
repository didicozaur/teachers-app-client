import React from "react";
import { Link } from "react-router-dom";

function AdList(props) {

  const renderAds = () => {
   return (
     <div className="container">
     <div className="row xs-1 md-2 g-4">
       {props.ads.map((ad) => {
         return (
           <div className="card" style={{width:"18rem",margin:"25px"}} key={ad._id}>
             <h5 class="card-header">{ad.subject}</h5>
             <div className="card-body">
               <h2 className="card-title">{ad.title}</h2>
               <div className="card-text">
                 {ad.description} <hr /> {ad.price} euros | {ad.location}
               </div>
               <hr />
               <Link className="btn btn-success" to={`/ads/${ad._id}`}>
                 <h5>More Details</h5>
               </Link>
             </div>
           </div>
         );
         
       })}
       </div>
       </div>
     
   );
  };

  return (
    <div className="AdsList">
      <h1 className="d-flex justify-content-center">List of Ads</h1>

      <section>
        {props.ads === null ? <p>loading...</p> : renderAds()}
      </section>
    </div>
    )
}

export default AdList
