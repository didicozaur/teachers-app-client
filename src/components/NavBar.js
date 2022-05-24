import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import logo from "../images/logo.png";

function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  return (
    <nav className="Navbar">
      <NavLink to="/">
        <img src={logo} alt="logo" width="80px"></img>
      </NavLink>
      <NavLink to="/ads">Teacher Ads</NavLink> |
      <NavLink to="/subjects">Subjects</NavLink> |
      {isLoggedIn ? (
        <>
          <NavLink to="/ads/add">Create New Ad</NavLink> |
          <NavLink to="/subjects/add">Create Subject</NavLink>|
          <span>Welcome, {user.email} </span> |
          <button onClick={logOutUser}>Logout</button>
        </>
      ) : (
        <>
          <NavLink to="/signup">Register</NavLink> |
          <NavLink to="/login">Login</NavLink>
        </>
      )}
    </nav>
  );
}

export default Navbar;
