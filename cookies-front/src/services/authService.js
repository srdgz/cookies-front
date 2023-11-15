const signup = (email, password) => {
  return fetch(`${import.meta.env.VITE_BASE_URL}/api/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  }).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("La solicitud a la API no es correcta");
    }
  });
};

const login = (email, password) => {
  return fetch(`${import.meta.env.VITE_BASE_URL}/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  }).then((response) => {
    if (response.ok) {
      return response.json().then((data) => {
        if (data.access_token) {
          localStorage.setItem("user", JSON.stringify(data));
        }
        return data;
      });
    } else {
      throw new Error("La solicitud a la API no es correcta");
    }
  });
};

const authService = {
  signup,
  login,
};

export default authService;
