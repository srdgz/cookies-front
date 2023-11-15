import React, { useEffect } from "react";

import useAppContext from "../context/AppContext.jsx";
import CardCookie from "../components/CardCookie.jsx";

import Uno from "../assets/1.jpeg";
import Dos from "../assets/2.jpeg";
import Tres from "../assets/3.jpeg";
import Cuatro from "../assets/4.jpeg";
import Cinco from "../assets/5.jpeg";
import Seis from "../assets/6.jpeg";
import Siete from "../assets/7.jpeg";
import Ocho from "../assets/8.jpeg";

const Cookies = () => {
  const { store, actions } = useAppContext();

  useEffect(() => {
    const fetchCookies = async () => {
      const data = await actions.getAllCookies();
      if (data) {
        store.setCookies(data);
      }
    };
    fetchCookies();
  }, []);

  return (
    <div className="d-flex m-auto mx-2 mt-lg-5 mb-5 row justify-content-center align-items-center">
      {store.cookies &&
        store.cookies.map((cookie, id) => {
          let img;
          switch (cookie.id) {
            case 1:
              img = Uno;
              break;
            case 2:
              img = Dos;
              break;
            case 3:
              img = Tres;
              break;
            case 4:
              img = Cuatro;
              break;
            case 5:
              img = Cinco;
              break;
            case 6:
              img = Seis;
              break;
            case 7:
              img = Siete;
              break;
            case 8:
              img = Ocho;
              break;
            default:
              img = "";
          }
          return <CardCookie key={id} img={img} {...cookie} />;
        })}
    </div>
  );
};

export default Cookies;
