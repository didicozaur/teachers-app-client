import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function SignupPage(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    // Create an object representing the request body
    const requestBody = { name, email, password };

    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/signup`, requestBody)
      .then((response) => {
        navigate("/login");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        console.log("error creating account", errorDescription);
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8 mx-auto text-center">
          {errorMessage && (
            <p className="bg-danger text-white error-message p-2">
              {errorMessage}
            </p>
          )}
          <form
            onSubmit={handleSignupSubmit}
            className="p-4 border rounded-3 bg-light"
          >
            <h4>Register</h4>
            <hr />
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Name"
              value={name}
              required={true}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              className="form-control mb-2"
              placeholder="name@example.com"
              value={email}
              required={true}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="form-control mb-2"
              placeholder="Password"
              value={password}
              required={true}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="w-100 btn btn-lg btn-success mb-2" type="submit">
              Sign up
            </button>
            <div className="d-flex justify-content-center">
              <p className="m-0">Already have an account?</p>
              <Link className="text-success ml-2" to={"/login"}>
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
