import React from "react";
import { Link } from "react-router-dom";

const CardImage = ({ image, title, button }) => {
  return (
    <div className="card card-store w-75 my-5 px-0 border border-0">
      <div className="row g-0 text-center align-items-center">
        <div className="col-md-6">
          <div className="card-body">
            <h1 className="card-title text-primary fw-bold mb-5">{title}</h1>
            <Link to="/tiendas" className="btn btn-image">
              {button}
            </Link>
          </div>
        </div>
        <div className="col-md-6">
          <img src={image} className="img-fluid rounded-1" alt="Store" />
        </div>
      </div>
    </div>
  );
};

export default CardImage;
