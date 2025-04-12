import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.scss";

const NotFound: React.FC = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Oops! Page not found.</p>
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default NotFound;
