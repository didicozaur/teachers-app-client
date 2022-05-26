
import React from "react";
import { Link } from "react-router-dom";


function SubjectsPage(props) {
  

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mb-4">
        {props.subjects.map((subject) => {
          return (
            <div className="col" key={subject._Id}>
              <div className="card">
                <div className="card-body text-center">
                  <Link
                    className="text-success text-decoration-none"
                    to={`/subjects/${subject._id}`}
                  >
                    <h3 className="card-title">{subject.title}</h3>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default SubjectsPage;
