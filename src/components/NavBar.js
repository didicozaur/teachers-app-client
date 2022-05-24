import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import logo from "../images/logo.png";

function Navbar() {
  const { isLoggedIn, logOutUser } = useContext(AuthContext);

  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 ">
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
            <>
              <li>
                <NavLink to="/ads/add">Create New Ad</NavLink>
              </li>
              <li>
                <NavLink className="btn btn-outline-primary me-2" to="/profile">
                  Profile
                </NavLink>
              </li>
              <li>
                <button className="btn btn-primary" onClick={logOutUser}>
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>

        <div className="col-md-3 text-end">
          {!isLoggedIn && (
            <>
              <NavLink className="btn btn-outline-primary me-2" to="/signup">
                Register
              </NavLink>
              <NavLink className="btn btn-primary" to="/login">
                Login
              </NavLink>
            </>
          )}
        </div>
      </header>
    </div>
  );
}

export default Navbar;
