import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Inicio from "../pages/Inicio.jsx";
import Cookies from "../pages/Cookies.jsx";
import NuestrasTiendas from "../pages/NuestrasTiendas.jsx";
import Historia from "../pages/Historia.jsx";
import Contacto from "../pages/Contacto.jsx";
import Login from "../pages/Login.jsx";
import Signup from "../pages/Signup.jsx";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/tiendas" element={<NuestrasTiendas />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
