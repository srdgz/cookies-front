import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer text-center text-lg-start bg-primary text-light">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Conecta con nosotros en nuestras redes sociales:</span>
        </div>

        <div>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="me-4 text-reset"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://www.twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="me-4 text-reset"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.pinterest.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="me-4 text-reset"
          >
            <i className="fa-brands fa-pinterest"></i>
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="me-4 text-reset"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </section>

      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fa-solid fa-cookie-bite me-2"></i>Cookies & Cream
              </h6>
              <p>
                En cada una de nuestras tiendas, el aroma dulce y reconfortante
                de las galletas recién salidas del horno te da la bienvenida.
                Cada galleta es cuidadosamente elaborada con ingredientes de la
                más alta calidad y un toque de cariño.
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <p>
                <Link to="/" className="text-light text-decoration-none">
                  Inicio
                </Link>
              </p>
              <p>
                <Link to="/cookies" className="text-light text-decoration-none">
                  Cookies
                </Link>
              </p>
              <p>
                <Link to="/tiendas" className="text-light text-decoration-none">
                  Nuestras tiendas
                </Link>
              </p>
              <p>
                <Link
                  to="/historia"
                  className="text-light text-decoration-none"
                >
                  Historia
                </Link>
              </p>
              <p>
                <Link
                  to="/contacto"
                  className="text-light text-decoration-none"
                >
                  Contacto
                </Link>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Ubicación</h6>
              <p>
                <i className="fas fa-home me-3"></i> Madrid, C/San Bernardo 54
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                info@cookiesandcream.com
              </p>
              <p>
                <i className="fas fa-phone me-3"></i> 919 111 222
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-4">© 2023 Copyright | Cookies & Cream</div>
    </footer>
  );
};

export default Footer;
