import React from "react";

import { Link } from "react-router-dom";

const CardStore = ({ image, title, description, button }) => {
  return (
    <div className="card card-store w-75 my-5 px-0 border border-0">
      <div className="row g-0 text-center align-items-center">
        <div className="col-md-4">
          <img src={image} className="img-fluid rounded-1" alt="Store" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h3 className="card-title text-primary fw-bold mb-4">{title}</h3>
            <p className="card-text text-primary mb-4">{description}</p>
            <Link to="/tiendas" className="btn btn-primary">
              {button}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardStore;
