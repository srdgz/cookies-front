import React from "react";

import Jumbotron from "../components/Jumbotron.jsx";
import CardUbicacion from "../components/CardUbicacion.jsx";

import Fachada from "../assets/Fachada.jpeg";
import Fachada2 from "../assets/Fachada2.jpeg";
import Fachada3 from "../assets/Fachada3.jpeg";

const NuestrasTiendas = () => {
  return (
    <>
      <Jumbotron />
      <div className="d-flex m-auto mx-2 mt-lg-5 mb-5 row justify-content-center align-items-center">
        <CardUbicacion
          img={Fachada}
          title="UBICACIÓN ORIGINAL"
          details="C/San Bernardo 54, Madrid || 919 111 222 || Horario: L-S 10:00 - 20:00h."
        />
        <CardUbicacion
          img={Fachada2}
          title="PASTELERÍA SEVILLA"
          details="C/Méndez Núñez 7, Sevilla || 954 333 444 || Horario: L-S 10:00 - 20:00h."
        />
        <CardUbicacion
          img={Fachada3}
          title="PASTELERÍA VALENCIA"
          details="C/de la Pau 15, Valencia || 966 888 999 || Horario: L-S 10:00 - 20:00h."
        />
      </div>
    </>
  );
};

export default NuestrasTiendas;
