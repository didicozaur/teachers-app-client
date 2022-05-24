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
    <div>
      {subject && (
        <div>
          <h1>{subject.title}</h1>
          <p>{subject.description}</p>
        </div>
      )}
      <Link to="/subjects">
        <button>Back to Subjects</button>
      </Link>
    </div>
  );
}
export default SubjectDetailsPage;
