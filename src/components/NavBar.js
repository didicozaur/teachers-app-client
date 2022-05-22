import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import logo from "../images/logo.png";


function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav className="Navbar">
    <img src={logo} alt="logo" width="80px"></img> |
      <NavLink to="/">Home</NavLink> |
      <NavLink to="/ads">Teacher Ads</NavLink> |
      <NavLink to="/subjects">Subjects</NavLink> |

      {isLoggedIn && (
        <>
        <NavLink to="/ads/create">Create New Ad</NavLink> |
          <span>Welcome, {user.email} </span> |
          <button onClick={logOutUser}>Logout</button>
        </>
      )}

      {!isLoggedIn && (
        <>
          <NavLink to="/signup">Register</NavLink> |
          <NavLink to="/login">Login</NavLink>
        </>
      )}
    </nav>
  );
}

export default Navbar;
