import React from "react";
import Router from "./routes/Router.jsx";
import { AppContextProvider } from "./context/AppContext.jsx";

import "./App.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <AppContextProvider>
      <ToastContainer />
      <Router />
    </AppContextProvider>
  );
}
export default App;
