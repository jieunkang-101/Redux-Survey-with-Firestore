import React from "react";
import { Link } from "react-router-dom";

function Header(){
  return (
    <React.Fragment>
      <h1>Movie Review App</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/rating">Rate</Link>
        </li>
        <li>
          <Link to="/ratinglist">My Ratings</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/signin">Sign In</Link>
        </li>
        <li>
          <Link to="/signout">Sign Out</Link>
        </li>
      </ul>
    </React.Fragment>
  );
}

export default Header;