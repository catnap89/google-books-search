
import React from "react";
import "./style.css"

const Jumbotron = ({ children }) => (
  <div className="jumbotron jumbotron-fluid">
    <div className="container">
      {children}
      <h1 className="display-4">(React) Google Books Search</h1>
      <p className="lead">Search for and save books of interest.</p>
      <hr className="my-4" />
    </div>
  </div>
);

export default Jumbotron;