import "./Home.css";
import AdsList from "../components/AdsList";
const heroImage = require("../images/education1.jpg");

function Home() {
  return (
    <div className="container">
      <div className="row flex-lg-row-reverse align-items-center g-4 py-2">
        <div className="col-12 col-lg-6">
          <img
            src={heroImage}
            className="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            //width="700"
            //height="500"
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold lh-1 mb-3">
            Find Easy...
            <br />
            Learn Today
          </h1>
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </p>
        </div>
      </div>
      <AdsList />
    </div>
  );
}

export default Home;
