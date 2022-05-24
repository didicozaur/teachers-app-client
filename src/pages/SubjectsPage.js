import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function SubjectsPage() {
  const [subjects, setSubjects] = useState([]);

  const getSubjects = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/subjects`)
      .then((response) => setSubjects(response.data))
      .catch((e) => console.log("Error getting Subjects from API", e));
  };

  useEffect(() => {
    getSubjects();
  }, []);

  return (
    <div className="container">
      <div className="row g-4 mb-4">
        {subjects.map((subject) => {
          return (
            <div className="col">
              <div className="card" key={subject._id}>
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
