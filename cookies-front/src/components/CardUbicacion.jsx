import React from "react";

const CardUbicacion = ({ img, title, details }) => {
  return (
    <div className="col-12 col-md-6 col-lg-3 mt-5 mb-5">
      <div className="card card-info rounded-4">
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
          <h3 className="card-title mb-4 text-primary">{title}</h3>
          <p className="card-details fs-6">{details}</p>
        </div>
      </div>
    </div>
  );
};

export default CardUbicacion;
