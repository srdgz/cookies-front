import React from "react";
import { Link } from "react-router-dom";

import useAppContext from "../../context/AppContext.jsx";

const Login = () => {
  const token = localStorage.getItem("token");
  const { actions } = useAppContext();

  return (
    <div className="ms-auto">
      {token ? (
        <button className="btn btn-logout fw-semibold" onClick={actions.logout}>
          <i className="fa-regular fa-user fa-lg pe-2"></i>Logout
        </button>
      ) : (
        <Link to="/login" className="btn btn-login fw-bold">
          <i className="fa-regular fa-user fa-lg"></i>
        </Link>
      )}
    </div>
  );
};

export default Login;
