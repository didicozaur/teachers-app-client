import AdsList from "../components/AdsList";
const heroImage = require("../images/education1.jpg");

function Home() {
  return (
    <div className="container">
      <div className="row flex-lg-row-reverse align-items-center g-4 pt-2 pb-4">
        <div className="col-12 col-lg-6">
          <img
            src={heroImage}
            className="d-block mx-lg-auto img-thumbnail img-fluid"
            alt="Bootstrap Themes"
            //width="700"
            //height="500"
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold lh-1 mb-3">
            Find Teachers Easily...
            <br />
            Learn Today
          </h1>
          <p className="lead">Experiment. Fail. Learn. Repeat.</p>
        </div>
      </div>
      <AdsList />
    </div>
  );
}

export default Home;
