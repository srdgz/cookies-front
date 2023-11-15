import React from "react";

import CardStore from "../components/CardStore.jsx";
import CardImage from "../components/CardImage.jsx";

import Nosotros from "../assets/Nosotros.jpeg";
import Pasteleria from "../assets/Pasteleria.jpeg";

const Historia = () => {
  return (
    <>
      <div className="d-flex m-auto mx-2 mt-lg-5 mb-5 row justify-content-center align-items-center">
        <CardStore
          image={Nosotros}
          title="NUESTRA HISTORIA"
          description="Pablo López y María Rodríguez, dos amigos de toda la vida unidos por su pasión compartida por la repostería, decidieron dar un giro audaz a sus vidas al abrir una acogedora pastelería en el encantador barrio de Malasaña en el año 2010. Inspirados por su amor incondicional por las galletas, ambos se propusieron crear un lugar especial donde pudieran compartir su creatividad y sus deliciosas creaciones con la comunidad local y más allá. Con sus recetas únicas y su dedicación inquebrantable, la pastelería de Pablo y María rápidamente se convirtió en un refugio acogedor para los amantes de los dulces, ofreciendo una amplia variedad de galletas recién horneadas que deleitaban los sentidos y calentaban el corazón de todos los que pasaban por su puerta. Juntos, crearon un lugar donde la amistad, la pasión y la dulzura se entrelazaban en cada deliciosa galleta que salía de su cocina."
          button="ENCUENTRA UNA TIENDA"
        />
      </div>
      <div className="d-flex mx-2 mt-5 mb-5 row justify-content-center align-items-center">
        <iframe
          className="col-10 col-md-8 col-lg-6"
          height="400"
          src="https://www.youtube.com/embed/DymOqv1AV2E?si=jgCbCIPtKQ7IgxNA"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className="d-flex mx-2 mt-5 mb-5 row justify-content-center align-items-center">
        <CardImage
          image={Pasteleria}
          title="NUESTRAS TIENDAS"
          button="ENCUENTRA UNA TIENDA"
        />
      </div>
    </>
  );
};

export default Historia;
