import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import useAppContext from "../context/AppContext.jsx";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {
    actions: { login },
  } = useAppContext();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && password) {
      login(email, password, navigate);
    }
  };

  return (
    <div className="container vh-100 mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body mb-3">
              <h2 className="card-title text-center my-5">Inicia sesión</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-5">
                  <input
                    type="email"
                    className="form-control py-3"
                    id="email"
                    name="email"
                    placeholder="your@email.com"
                    required
                    title="Por favor, introduce un email válido"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                      minLength="8"
                      title="La contraseña debe contener al menos 8 caracteres"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-check mb-5">
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
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-primary w-60 fw-bold px-5 py-2"
                  >
                    Entrar
                  </button>
                </div>
              </form>
              <div className="my-4 text-center">
                <div>
                  <span>¿Aún no tienes cuenta? </span>
                  <Link
                    to="/signup"
                    className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover fw-bold"
                  >
                    Regístrate
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

export default LoginPage;
