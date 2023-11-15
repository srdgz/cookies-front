const getAllCookies = () => {
  return fetch(`${import.meta.env.VITE_BASE_URL}/api/cookies`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    if (response.ok) {
      return response.json().then((data) => {
        if (data && data.data) {
          // Mapear los datos relevantes de las cookies
          return data.data.map((cookie) => ({
            id: cookie.id,
            name: cookie.attributes.name,
            price: cookie.attributes.price,
          }));
        } else {
          throw new Error("Formato de respuesta de la API no válido");
        }
      });
    } else {
      throw new Error("Fallo al obtener las cookies");
    }
  });
};

const createCookie = (name, price) => {
  return fetch(`${import.meta.env.VITE_BASE_URL}/api/cookies`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      price: price,
    }),
  }).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Fallo al crear la cookie");
    }
  });
};

const updateCookie = (cookieId, name, price) => {
  return fetch(`${import.meta.env.VITE_BASE_URL}/api/cookies/${cookieId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      price: price,
    }),
  }).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Fallo al actualizar la cookie");
    }
  });
};

const deleteCookie = (cookieId) => {
  return fetch(`${import.meta.env.VITE_BASE_URL}/api/cookies/${cookieId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    if (response.status === 200) {
      return "Cookie eliminada correctamente";
    } else if (response.status === 404) {
      throw new Error("Cookie no encontrada");
    } else {
      throw new Error("Fallo al eliminar la cookie");
    }
  });
};

const authResource = {
  getAllCookies,
  createCookie,
  updateCookie,
  deleteCookie,
};

export default authResource;
