import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function SubjectDetailsPage() {
  const [subject, setProject] = useState(null);
  const { subjectId } = useParams();

  const getSubject = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/subjects/${subjectId}`)
      .then((response) => {
        const oneSubject = response.data;
        setProject(oneSubject);
      })
      .catch((error) =>
        console.log("Error getting the subject details from API", error)
      );
  };
  useEffect(() => {
    getSubject();
  }, []);

  return (
    <div className="container">
      <div className="row g-4 mb-4">
        {" "}
        {subject && (
          <div>
            <h1>{subject.title}</h1>
            <hr />
            <dt className="col-sm-3">Description</dt>
            <dd className="col-sm-9">{subject.description}</dd>
            
          </div>
        )}
        <Link to="/subjects">
          <button className="btn btn-outline-success">Back to Subjects</button>
        </Link>
      </div>
    </div>
  );
}
export default SubjectDetailsPage;
