import React from "react";

import useAppContext from "../context/AppContext.jsx";

const CardCookie = ({ id, img, name, price }) => {
  const {
    store: { favorites, token },
    actions: { addToFavorites, removeFromFavorites },
  } = useAppContext();

  let isFavorite = false;

  if (Array.isArray(favorites)) {
    isFavorite = favorites.some((item) => item.cookie_id === Number(id));
  }

  return (
    <div className="col-12 col-md-6 col-lg-3 mt-5">
      <div className="card card-info rounded-4">
        {isFavorite}
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
          <h3 className="card-title mb-4 text-primary">{name}</h3>

          {token && <p className="mb-4 text-primary fs-5">{price}.00€</p>}

          {token && (
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={
                isFavorite
                  ? () => removeFromFavorites(id)
                  : () => addToFavorites(id)
              }
            >
              {isFavorite ? (
                <i className="fa-solid fa-heart"></i>
              ) : (
                <i className="fa-regular fa-heart"></i>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardCookie;
