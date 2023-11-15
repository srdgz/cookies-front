import React, { createContext, useContext, useState, useEffect } from "react";

import authService from "../services/authService";
import authFavorite from "../services/authFavorite";
import authResource from "../services/authResource";

import { toast } from "react-toastify";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  const [cookies, setCookies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    if (token && token !== "" && token !== undefined) {
      setAuthenticated(true);
    }
  }, [token]);

  useEffect(() => {
    const LSFavorites = localStorage.getItem("favorites");
    if (LSFavorites) {
      setFavorites(JSON.parse(LSFavorites));
      return;
    }
  }, []);

  const login = async (email, password, navigate) => {
    try {
      const response = await authService.login(email, password);
      localStorage.setItem("token", response.token);
      localStorage.setItem("userId", response.user_id);
      setAuthenticated(true);
      const favorites = await authFavorite.getFavoritesFromAPI(
        response.user_id
      );
      localStorage.setItem("favorites", JSON.stringify(favorites));
      setFavorites(favorites);
      navigate("/");
    } catch (error) {
      console.error("Login failed: ", error);
      toast.warning("Email o contraseña incorrectos. Revisa tus datos");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("favorites");
    setAuthenticated(false);
  };

  const signup = async (email, password, navigate) => {
    if (!email || !password) {
      return;
    }
    try {
      const response = await authService.signup(email, password);
      if (response) {
        toast.success("¡Bienvenido a Cookies&Cream! Ya puedes iniciar sesión");
        navigate("/login");
      }
    } catch (error) {
      console.error("Error registrando usuario:", error);
    }
  };

  const addToFavorites = async (cookie_id) => {
    try {
      const userId = localStorage.getItem("userId");
      await authFavorite.addFavoriteToAPI(cookie_id, userId);
      const updatedFavorites = await authFavorite.getFavoritesFromAPI(userId);
      let prevFavorites = JSON.parse(localStorage.getItem("favorites"));
      if (!prevFavorites) {
        prevFavorites = [];
      }
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      setFavorites(updatedFavorites);
    } catch (error) {
      console.error("Error añadiendo favorito:", error);
    }
  };

  const removeFromFavorites = async (cookie_id) => {
    try {
      const userId = localStorage.getItem("userId");
      let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      console.log(favorites);
      console.log(cookie_id);
      const favoriteToRemoveIndex = favorites.findIndex(
        (favorite) => favorite.cookie_id === Number(cookie_id)
      );
      if (favoriteToRemoveIndex === -1) {
        throw new Error("Favorito no encontrado");
      }
      const favoriteToRemove = favorites[favoriteToRemoveIndex];
      if (!userId || !favoriteToRemove.id) {
        throw new Error("userId o favorite.id no válido");
      }
      await authFavorite.deleteFavoriteFromAPI(userId, favoriteToRemove.id);
      const newFavorites = [...favorites];
      newFavorites.splice(favoriteToRemoveIndex, 1);
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      setFavorites(newFavorites);
    } catch (error) {
      console.error("Error eliminando favorito:", error);
    }
  };

  const getAllCookies = async () => {
    try {
      const response = await authResource.getAllCookies();
      return response;
    } catch (error) {
      console.error("Error cargando cookies:", error);
      return [];
    }
  };

  const store = {
    cookies,
    setCookies,
    favorites,
    token,
    userId,
    authenticated,
  };
  const actions = {
    addToFavorites,
    removeFromFavorites,
    getAllCookies,
    login,
    logout,
    signup,
  };

  return (
    <AppContext.Provider value={{ store, actions }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

export default useAppContext;
