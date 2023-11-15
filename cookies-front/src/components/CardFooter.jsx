import React from "react";
import { Link } from "react-router-dom";

const CardFooter = ({ img, title, description, button, linkTo }) => {
  return (
    <div className="col-12 col-md-6 col-lg-3 mt-5">
      <div className="card rounded-4">
        <div className="ratio ratio-1x1">
          <div className="w-100 h-100">
            <img
              src={img}
              className="card-img-top img-fluid w-100 h-100 object-fit-cover rounded-top-4"
              alt="cookies"
            />
          </div>
        </div>
        <div className="card-body text-center">
          <h4 className="card-title mb-4 text-primary fw-bold">{title}</h4>
          <p className="card-text text-primary mb-4">{description}</p>
          <Link to={linkTo} className="btn btn-outline-primary">
            {button}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardFooter;
