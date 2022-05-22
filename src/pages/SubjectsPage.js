import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddSubject from "../components/AddSubject";

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
  console.log(subjects);
  return (
    <div>
      {subjects.map((subject) => {
        return (
          <div key={subject._id}>
            <Link to={`/subjects/${subject._id}`}>
              <h3>{subject.title}</h3>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
export default SubjectsPage;
