import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import logo from "../images/logo.png";

function Navbar() {
  const { isLoggedIn, logOutUser } = useContext(AuthContext);

  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3">
        <NavLink
          className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
          to="/"
        >
          <img src={logo} alt="logo" width="80px"></img>
        </NavLink>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <NavLink to="/ads" className="nav-link px-2 link-dark">
              Ads
            </NavLink>
          </li>
          <li>
            <NavLink to="/subjects" className="nav-link px-2 link-dark">
              Subjects
            </NavLink>
          </li>
          {isLoggedIn && (
            <li>
              <NavLink to="/ads/add" className="nav-link px-2 link-dark">
                Create New Ad
              </NavLink>
            </li>
          )}
        </ul>
        <div className="col-md-3 text-end">
          {!isLoggedIn && (
            <>
              <NavLink className="btn btn-outline-success me-2" to="/signup">
                Register
              </NavLink>
              <NavLink className="btn btn-success" to="/login">
                Login
              </NavLink>
            </>
          )}
          {isLoggedIn && (
            <div className="d-flex justify-content-end">
              <NavLink className="btn btn-outline-success me-2" to="/profile">
                Profile
              </NavLink>
              <button className="btn btn-success" onClick={logOutUser}>
                Logout
              </button>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default Navbar;
