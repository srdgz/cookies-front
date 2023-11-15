import React from "react";

import useAppContext from "../../context/AppContext.jsx";

const Dropdown = () => {
  const {
    store: { favorites, token, cookies },
    actions: { removeFromFavorites },
  } = useAppContext();

  if (!token) {
    return null;
  }

  const counterFavorites = favorites ? favorites.length : 0;

  return (
    <div className="">
      <div className="dropdown">
        <button
          className="btn btn-dropdown dropdown-toggle my-3 fw-semibold"
          type="button"
          data-bs-toggle="dropdown"
          data-bs-auto-close="outside"
          aria-expanded="false"
        >
          Favoritos {counterFavorites}
        </button>
        <ul className="dropdown-menu dropdown-menu-end">
          {favorites && favorites.length > 0 ? (
            favorites.map((el) => {
              let id = 0;
              let name = "";
              let fav;

              if (el.cookie_id != null) {
                id = el.cookie_id;
                fav = cookies.find((item) => item.id === id);
                name = fav ? fav.name : "";
              }

              return (
                <li
                  key={id}
                  className="dropdown-item d-flex justify-content-between"
                >
                  <span>{name}</span>
                  <button
                    type="button"
                    className="btn-close ps-4"
                    onClick={() => removeFromFavorites(id)}
                  ></button>
                </li>
              );
            })
          ) : (
            <li className="d-flex justify-content-end me-3">Lista vacía</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
