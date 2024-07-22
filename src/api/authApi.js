import http from "./axiosConfig";

const register = (username, password) => {
  return http.post("/register", {
    username,
    password,
  });
};

const login = (username, password) => {
  return http.post("/login", {
    username,
    password,
  });
};

export default {
  register,
  login,
};
