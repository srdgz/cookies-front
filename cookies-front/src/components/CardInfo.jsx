import React from "react";
import { Link } from "react-router-dom";

const CardInfo = ({ title, description, button }) => {
  return (
    <div className="card w-75 my-5 border border-0">
      <div className="card-body text-center">
        <h3 className="card-title text-primary fw-bold mb-4">{title}</h3>
        <p className="card-text text-primary mb-4">{description}</p>
        <Link to="/cookies" className="btn btn-primary">
          {button}
        </Link>
      </div>
    </div>
  );
};

export default CardInfo;
