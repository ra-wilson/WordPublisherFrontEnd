const getAll = () => {
  return fetch("http://localhost:3333/users")
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw "Something went wrong";
      }
    })

    .then((resJson) => {
      return resJson;
    })
    .catch((error) => {
      console.log("Err", error);
      return Promise.reject(error);
    });
};

const login = (email, password) => {
  return fetch("http://localhost:3333/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else if (response.status === 400) {
        throw "Bad Request";
      } else {
        throw "Something went wrong";
      }
    })
    .then((resJson) => {
      localStorage.setItem("user_id", resJson.user_id);
      localStorage.setItem("session_token", resJson.session_token);
      return resJson;
    })
    .catch((error) => {
      console.log("err", error);
      return Promise.reject(error);
    });
};

const logout = () => {
  return fetch("http://localhost:3333/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Authorisation": localStorage.getItem("session_token"),
    },
  })
    .then((response) => {
      if (response.status === 200) {
        localStorage.removeItem("user_id");
        localStorage.removeItem("session_token");
        return;
      } else if (response.status === 401) {
        throw "Not logged in";
      } else {
        throw "Something went wrong";
      }
    })
    .catch((error) => {
      console.log("err", error);
      return Promise.reject(error);
    });
};

const addUser = () => {
    
}

export const userService = {
  getAll,
  login,
  logout,
  addUser
};
