import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import useAppContext from "../context/AppContext";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const {
    actions: { signup },
  } = useAppContext();

  const handleChangeEmail = (e) => {
    const email = e.target.value;
    setFormData({
      ...formData,
      email: email,
    });
  };

  const handleChangePassword = (e) => {
    const password = e.target.value;
    setFormData({
      ...formData,
      password: password,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
    if (email && password) {
      signup(email, password, navigate);
    }
  };

  return (
    <div className="container vh-100 mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center my-5">
                Registra una cuenta
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-5">
                  <input
                    type="email"
                    className="form-control py-3"
                    id="email"
                    name="email"
                    placeholder="your@email.com"
                    required
                    title="Please enter a valid emailPor favor, introduce un email válido"
                    onChange={handleChangeEmail}
                  />
                </div>
                <div className="mb-3">
                  <div className="input-group">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-control py-3"
                      id="password"
                      name="password"
                      placeholder="password"
                      required
                      title="La contraseña debe contener al menos 8 caracteres"
                      minLength="8"
                      onChange={handleChangePassword}
                    />
                  </div>
                </div>
                <div className="form-check mb-5">
                  <div>
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="check-password"
                        id="flexCheckDefault"
                        onChange={() => setShowPassword(!showPassword)}
                      />
                      Mostrar contraseña
                    </label>
                  </div>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-primary w-60 fw-bold px-5 py-2"
                  >
                    Registrar
                  </button>
                </div>
              </form>

              <div className="my-4 text-center">
                <div>
                  <span>¿Ya tienes una cuenta? </span>
                  <Link
                    to="/login"
                    className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover fw-bold"
                  >
                    Inicia sesión
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
