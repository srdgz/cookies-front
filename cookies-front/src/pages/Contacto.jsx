import React from "react";

const Contacto = () => {
  return (
    <form>
      <div className="d-flex w-100 mx-auto mt-5 mt-lg-5 mb-5 row justify-content-center align-items-center">
        <div className="col-10 col-md-8 col-lg-6 col-xl-4">
          <h3 className="title text-primary fw-semibold mb-5">
            Contacta con nosotros
          </h3>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form4Example1">
              Nombre*
            </label>
            <input
              type="text"
              id="form4Example1"
              placeholder="Tu nombre"
              className="form-control"
              required
            />
          </div>

          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form4Example2">
              Email*
            </label>
            <input
              type="email"
              id="form4Example2"
              placeholder="email@email.com"
              className="form-control"
              required
            />
          </div>

          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form4Example3">
              Teléfono*
            </label>
            <input
              type="number"
              id="form4Example3"
              placeholder="Tu teléfono"
              className="form-control"
              required
            />
          </div>

          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form4Example3">
              Mensaje*
            </label>
            <textarea
              className="form-control"
              id="form4Example3"
              rows="4"
              placeholder="Escribe aquí tu mensaje"
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary btn-block mb-4">
            Enviar
          </button>
        </div>
      </div>
    </form>
  );
};

export default Contacto;
