const token = localStorage.getItem("token");

const addFavoriteToAPI = (cookie_id, user_id) => {
  console.log(import.meta.env.VITE_BASE_URL);
  return fetch(
    `${import.meta.env.VITE_BASE_URL}/api/users/${user_id}/favorites`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        cookie_id: cookie_id,
      }),
    }
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Fallo al añadir favorito");
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

const getFavoritesFromAPI = (user_id, token) => {
  return fetch(
    `${import.meta.env.VITE_BASE_URL}/api/users/${user_id}/favorites`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Error fetching favorites");
      }
    })
    .then((data) => {
      return data.data.map((favorite) => {
        const { id, attributes } = favorite;
        const { user_id, cookie_id } = attributes;
        return { id, user_id, cookie_id };
      });
    })
    .catch((error) => {
      console.error(error);
      return [];
    });
};

const deleteFavoriteFromAPI = (user_id, favorite_id) => {
  if (!favorite_id) {
    return Promise.reject(new Error("Favorito ID no proporcionado"));
  }
  console.log(favorite_id);
  return fetch(
    `${
      import.meta.env.VITE_BASE_URL
    }/api/users/${user_id}/favorites/${favorite_id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  )
    .then((response) => {
      if (response.ok) {
        return "Favorito eliminado correctamente";
      } else if (response.status === 404) {
        throw new Error("Favorito no encontrado");
      } else {
        throw new Error("Fallo al eliminar favorito");
      }
    })
    .catch((error) => {
      console.error("Error eliminando favorito:", error);
      throw error;
    });
};

const authFavorites = {
  addFavoriteToAPI,
  getFavoritesFromAPI,
  deleteFavoriteFromAPI,
};

export default authFavorites;
