import React from "react";
import { Link } from "react-router-dom";

import Login from "./Login.jsx";
import Dropdown from "./Dropdown.jsx";

import Logo1 from "../../assets/Logo1.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-light">
      <div className="container-fluid d-flex justify-content-between mx-3 mx-lg-5">
        <Link className="navbar-brand" to="/">
          <img src={Logo1} alt="Bootstrap" width="200" height="80" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa-solid fa-bars-staggered"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 ms-auto px-lg-5">
            <li className="nav-item">
              <Link
                className="nav-link active px-lg-4 text-primary fw-semibold"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active px-lg-4 text-primary fw-semibold"
                aria-current="page"
                to="/cookies"
              >
                Cookies
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active px-lg-4 text-primary fw-semibold"
                aria-current="page"
                to="/tiendas"
              >
                Nuestras tiendas
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active px-lg-4 text-primary fw-semibold"
                aria-current="page"
                to="/historia"
              >
                Historia
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active px-lg-4 text-primary fw-semibold"
                aria-current="page"
                to="/contacto"
              >
                Contacto
              </Link>
            </li>
            <li className="nav-item d-lg-none">
              <Dropdown />
            </li>
            <li className="nav-item d-lg-none">
              <Login />
            </li>
          </ul>
          <div className="d-none d-lg-flex align-items-center">
            <Login />
            <Dropdown />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
