import { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

function LoginPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  const { storeToken, authenticateUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/login`, requestBody)
      .then((response) => {
        console.log("JWT token", response.data.authToken);
        storeToken(response.data.authToken);
        authenticateUser();

        navigate("/");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
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
            onSubmit={handleLoginSubmit}
            className="p-4 border rounded-3 bg-light"
          >
            <h4>Login</h4>
            <hr />

            <input
              type="email"
              className="form-control mb-2"
              placeholder="name@example.com"
              value={email}
              required={true}
              onChange={handleEmail}
            />
            <input
              type="password"
              className="form-control mb-2"
              placeholder="Password"
              value={password}
              required={true}
              onChange={handlePassword}
            />
            <button className="w-100 btn btn-lg btn-success mb-2" type="submit">
              Login
            </button>
            <div className="d-flex justify-content-center">
              <p className="m-0">Don't have an account yet?</p>
              <Link className="text-success ml-2" to={"/signup"}>
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
