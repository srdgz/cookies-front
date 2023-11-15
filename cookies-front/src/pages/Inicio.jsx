import React from "react";

import Card from "../components/Card.jsx";
import CardInfo from "../components/CardInfo.jsx";
import CardStore from "../components/CardStore.jsx";
import CardFooter from "../components/CardFooter.jsx";

import Uno from "../assets/1.jpeg";
import Dos from "../assets/2.jpeg";
import Cuatro from "../assets/4.jpeg";
import Amasando from "../assets/Amasando.jpeg";
import Regalo from "../assets/Regalo.jpeg";
import Fachada from "../assets/Fachada.jpeg";
import Contacto from "../assets/Contacto.jpeg";

const Inicio = () => {
  return (
    <>
      <div className="d-flex m-auto mx-2 mt-lg-5 mb-5 row justify-content-center align-items-center">
        <Card
          img={Uno}
          title="CHOCOLATE LOVERS"
          button="¡ME UNO!"
          linkTo="/cookies"
        />
        <Card
          img={Dos}
          title="CARAMELO Y NUECES"
          button="¡LAS QUIERO!"
          linkTo="/cookies"
        />
        <Card
          img={Cuatro}
          title="CACAHUETE Y CHOCO"
          button="¡IRRESISTIBLES!"
          linkTo="/cookies"
        />
      </div>
      <div className="d-flex m-auto mx-2 mt-lg-5 mb-5 row justify-content-center align-items-center">
        <CardInfo
          title={
            <>
              NO ES UNA GALLETA, ES{" "}
              <span className="text-decoration-underline">LA</span> GALLETA
            </>
          }
          description="
Empezamos a hornear galletas grandes, crujientes por fuera y blandas por dentro en Madrid en 2010. Desde entonces, se han convertido en un postre de culto. 
Recién orneadas en el barrio de Malasaña, una caja de regalo de galletas demuestra que te preocupas y que tienes buen gusto."
          button="VER ESPECIALIDADES"
        />
      </div>
      <div className="d-flex m-auto mx-2 mt-lg-5 mb-5 row justify-content-center align-items-center">
        <CardStore
          image={Amasando}
          title="SOMOS GENTE DE GALLETAS, Y TAMBIÉN GENTE DE CONFIANZA"
          description="Pasa a por una galleta recién salida del horno si estás en el vecindario; sabrás dónde estamos cuando estés cerca."
          button="ENCUENTRA UNA TIENDA"
        />
      </div>
      <div className="d-flex m-auto mx-2 mt-lg-5 mb-5 row justify-content-center align-items-center">
        <CardFooter
          img={Regalo}
          title="EL REGALO MÁS DULCE"
          description="Da las gracias con una caja de galletas envuelta para regalo: galletas grandes, con un sabor espectacular."
          button="SABER MÁS"
          linkTo="/cookies"
        />
        <CardFooter
          img={Fachada}
          title="ESTAMOS CERCA DE TÍ"
          description="Si estás cerca de una de nuestras tiendas, no lo dudes y entra. ¡No te arrepentirás!"
          button="ENCUENTRA UNA TIENDA"
          linkTo="/tiendas"
        />
        <CardFooter
          img={Contacto}
          title="¿QUIERES CONSULTARNOS ALGO?"
          description="Estamos aquí para ayudarte: ninguna pregunta sobre galletas es demasiado dulce para responderla."
          button="CONTÁCTANOS"
          linkTo="/contacto"
        />
      </div>
    </>
  );
};

export default Inicio;
