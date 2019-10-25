import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Navbar = () => (
  <div className="navbar">
    <div>Google Books Search</div>
    <div className="links">
      <p className="lead">
        <Link className="btn btn-default btn-lg" to="/" role="button">New Search</Link>
        <Link className="btn btn-default btn-lg" to="/saved" role="button">Saved Books</Link>
      </p>
    </div>
  </div>
);

export default Navbar;